---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Download
docker-plugins:
- rclone/docker-volume-rclone
---

[Rclone 文档部分翻译 - 链滴](https://ld246.com/article/1600853705300)

[simplyzee/kube-rclone: kube-rclone is a rclone mount solution for Kubernetes](https://github.com/simplyzee/kube-rclone)

```bash

// 1、删除

#清空回收站
rclone delete remote: --drive-trashed-only --drive-use-trash=false --verbose=2 --fast-list

将文件夹从 td 中移出去时，千万别用 15G 普通号操作，空间会直接挤爆！！！
如果爆了，最快速度用本号创建的 sa 执行转存命令，让服务器报错 storageExceedQuota，防止占用继续增长！！！
「quota」清理方法：看文件的详细信息 - 位置，点进文件夹；把面包屑的最顶层文件夹右键移除；去「trash」永久删除所有文件夹。
移出文件夹需要最高的管理员权限！！！




// 2、安装

挂载功能的依赖
fusermount -V
apt install -y fuse
yum install -y fuse
scoop install -g winfsp-np

ArchLinux 不懂安装哪个，下面的乱安了（注意挂载一定要 sudo！）
extra/fuse-common
extra/fuse3
extra/fuse2
archlinuxcn/google-drive-ocamlfuse
archlinuxcn/gcsf

curl https://rclone.org/install.sh | sudo bash
dnf install rclone

或者把二进制可执行文件放 /usr/local/bin/ 中
cp rclone /usr/bin/rclone.new
chmod 755 /usr/bin/rclone.new
chown root:root /usr/bin/rclone.new
mv /usr/bin/rclone.new /usr/bin/rclone

mkdir -p /usr/local/share/man/man1
cp rclone.1 /usr/local/share/man/man1/
mandb

systemctl start rclone
systemctl enable rclone
如果你想挂载多个网盘，那么将systemd配置文件的rclone.service改成rclone1.service即可，重启动什么的同样换成rclone1

rclone authorize "drive"
得到 token，把这个 {...} 复制进 rclone.conf，写成

    token = {...}

相当于使用这个账号来进行 rclone 操作。




// 3、转存

注意，如果 src dst 都是远程，那么转存不会占用本地硬盘，无论文件有多大，此时 rclone 只是一个类似 v2ray 的中转节点。

gclone copy \
--drive-server-side-across-configs  \
--ignore-existing  \
--ignore-errors   \
-v --stats 30s    \
--drive-service-account-file /root/test/AutoRclone/accounts-loli02/01496b7605fd0afc9386ec0966a874eb54fd3054.json \
--drive-service-account-file-path /root/test/AutoRclone/accounts-loli02/ \
--transfers 10 \
--rc-addr localhost:6684    \
"/e/test"   \
"sss:test/"  \



// 6、媒体服务器 挂载

--read-only
--poll-interval 12h    刷新文件夹的间隔时间 Time to wait between polling for changes.
--vfs-cache-max-size 4G
--no-modtime    不读取或写入修改时间 (can speed things up).
--vfs-read-wait 0ms   Time to wait for in-sequence read before seeking. (default 20ms)
--cache-dir
--vfs-write-wait duration  Time to wait for in-sequence write before giving error. (default 1s)
--vfs-read-ahead SizeSuffix    full 模式才用。Extra read ahead over --buffer-size when using cache-mode full. When reading a file rclone will read --buffer-size plus --vfs-read-ahead bytes ahead. The --buffer-size is buffered in memory whereas the --vfs-read-ahead is buffered on disk. When using full mode it is recommended that --buffer-size is not set too large and --vfs-read-ahead is set large if required.
--copy-links    说人话，将 Symlinks / Junction points 视为文件
--no-gzip-encoding    搞不懂，不理
--no-seek    Don not allow seeking in files. 不懂可不可以加速 writes minimal
--buffer-size    In memory buffer size when reading files for each --transfer. (default 16M)
--cache-workers 4
--no-checksum    禁止校验上传下载

允许部分读取源对象，通过请求仅需的块，代价是请求数量增加了。
--vfs-read-chunk-size 4M 意思是部分读取文件时，第 1 次读取 4M，第 2 次读取 8M，第 3 次 16M，第 4 次 32M……
--vfs-read-chunk-size-limit 256M (默认是 "off")
rclone 会从 --vfs-read-chunk-size 开始持续翻倍缓存大小，直到达到最大值 --vfs-read-chunk-size-limit 。
With --vfs-read-chunk-size 100M and --vfs-read-chunk-size-limit 0 the following parts will be downloaded: 0-100M, 100M-200M, 200M-300M, 300M-400M and so on.
When --vfs-read-chunk-size-limit 500M is specified, the result would be 0-100M, 100M-300M, 300M-700M, 700M-1200M, 1200M-1700M and so on.
当 --vfs-read-chunk-size-limit **大于** --vfs-read-chunk-size 时，下一次读取的大小不会无限增大，比如按照「下一次读取的块大小是本次的 2 倍」规则，这次读取块大小是 256M，下一次的块大小理应是 512M，但 512M 已经超过了 --vfs-read-chunk-size-limit 规定的 256M，所以（这个文件）之后所有的读取块大小就只能是 256M
Chunked reading 不能用于 --vfs-cache-mode full

在经过长达半年断断续续的调试中，终于找到一个能较好契合Emby与Rclone的配置。下面是一点总结经验：

    在文件超过一定数量后，Rclone最好使用Cache backend，然后rclone rc vfs/refresh先刷新目录结构，否则Emby要用长达几天时间来扫描。

    使用Cache backend的话，需要根据实际能达到的带宽选择两个参数:
        --cache-workers (下载分段的并发进程数。调高需要自己申请API key否则会有403，默认为 4)
        --cache-chunk-size (下载分段的大小。未下载完成时可能会中断播放，本地带宽小的话不建议调大)
    我这里带宽是晚高峰100Mbps左右，实际测试--cache-workers调成4-6，--cache-chunk-size调成4-5M会有较为顺畅的播放体验。

（实际上瓶颈不是下载，而是下面所说的读取速度）

vfs-cache-mode 总结

minimal 直接读取 remote，非常接近 off，除了支持块读取

writes 直接读取 remote，写入先写到本地缓存，再回写到 remote

full
使用这个模式的时候，我们推荐 --buffer-size 不要太大，如果需要的话 --vfs-read-ahead 可以设置大点。
不支持 VFS Chunked Reading！读取会先下载整个文件到本地，然后直接读取本地文件，写入也是。类似 DFS，只不过 DFS 支持块读取。所有模式中只有 full 有本地读取缓存，会占本地空间，其他模式都不占空间
……我记得 full 是不支持块读取的，以前也在 vps 上做过实验。但现在官方写着
So if an application only reads the starts of each file, then rclone will only buffer the start of the file. These files will appear to be their full size in the cache, but they will be sparse files with only the data that has been downloaded present in them.
简单说就是 full 自带块读取，不过显示的文件大小是完整体积。
可能是改了？或者 windows 才这样？
经过测试，windows 上 rclone mount with full mode 确实是自带块读取，就像文档写的那样。


PS：由于 rclone 优化问题，off minimal writes 模式下，rclone 同时只能读取一个文件，读完—关闭—继续读下一个，所以它们远远慢于 full。full 相当于 rclone copy 到本地（多线程 + 满速宽带），然后再直接读取本地文件，可以同时处理多个文件。这就解释了为啥别人的 emby 这么快了，快是因为用的full啊，如果writes就不快了 就像是反射弧长一样。
PPS：但是加上 --vfs-read-wait 0ms （default 20ms）的效果已经接近full了 应该可以通过加这个参数稍微解决下






sudo fusermount -qzu /root/test/x-monster/remote/

sudo rclone mount     \
loli-anime:       \
/root/test/x-monster/remote/anime  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount     \
loli-comic:       \
/root/test/x-monster/remote/comic  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 30m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
loli-music:      \
/root/test/x-monster/remote/music  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
loli-novel:      \
/root/test/x-monster/remote/novel  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 48h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode minimal   \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 10m      \
--transfers 20                \
--daemon  \


sudo rclone mount    \
anime-01:        \
/root/test/x-monster/remote/anime-01 \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \


sudo rclone mount    \
anime-02:        \
/root/test/x-monster/remote/anime-02 \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \


sudo rclone mount    \
anime-04:        \
/root/test/x-monster/remote/anime-04 \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-new:        \
/root/test/x-monster/remote/anime-new \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-ank-nfo:   \
/root/test/x-monster/remote/anime-ank-nfo \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \

sudo rclone mount    \
anime-fch1993:   \
/root/test/x-monster/remote/anime-fch1993  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount      \
anime-littlebakas: \
/root/test/x-monster/remote/anime-littlebakas  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount     \
anime-lolihouse:  \
/root/test/x-monster/remote/anime-lolihouse  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-mawen1250: \
/root/test/x-monster/remote/anime-mawen1250  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-moozzi2:   \
/root/test/x-monster/remote/anime-moozzi2  \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-snow:      \
/root/test/x-monster/remote/anime-snow \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \



sudo rclone mount    \
anime-vcb:       \
/root/test/x-monster/remote/anime-vcb \
--umask 0000        \
--allow-non-empty    \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 16M         \
--vfs-cache-mode writes    \
--vfs-read-wait 1ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 1G \
--transfers 8                   \
--daemon  \





// 7、serve http

gclone serve http sss: \
--addr :2331 \
--read-only  \
--vfs-cache-mode minimal \
--vfs-read-chunk-size 8M    \
--vfs-read-chunk-size-limit 1G \
--transfers 6 \
--exclude '*dcity*/' \
--exclude '*acronis*/'

--user test \
--pass UwQienvdnvV23rj98Ijwvn \

--cert 
--key 



// 7、serve webdav

gclone serve webdav sui: \
--addr :2332 \
--read-only  \
--vfs-cache-mode minimal \
--vfs-read-chunk-size 8M    \
--vfs-read-chunk-size-limit 1G \
--user test \
--pass UwQienvdnvV23rj98Ijwvn \


gclone serve webdav sui-6: \
--addr :2336 \
--read-only  \
--vfs-cache-mode minimal \
--vfs-read-chunk-size 8M    \
--vfs-read-chunk-size-limit 1G \
--user test \
--pass UwQienvdnvV23rj98Ijwvn \



// 7、命令列表

[flags]
--dry-run
--drive-server-side-across-configs 团队盘
--ignore-existing
--transfers 8 设置为多少比较快？40
-v 顯示當下複制內容
-v
--stats 30s 為每30秒顯示完整進度
--config string   (default "C:\\Users\\11\\.config\\rclone\\rclone.conf")
--drive-service-account-credentials string     Service Account Credentials JSON blob
--drive-service-account-file string            Service Account Credentials JSON file path
--drive-service-account-file-path string       Service Account Credentials JSON file path
--drive-trashed-only          Only show files that are in the trash.
--drive-use-trash=false       删除文件不发送到回收站
--fast-list                   Use recursive list if available. Uses more memory but fewer transactions
--log-file string
--log-level DEBUG|INFO|NOTICE|ERROR (default "NOTICE")
--rc-addr IPaddress:Port (default "localhost:5572")
--rc                   Enable the remote control server
--exclude-if-present '3.6w.txt'  --exclude-if-present '[Kusonime] Rainbow.rar'
--exclude-if-present str    Exclude directories if filename is present
--tpslimit float       Limit HTTP transactions per second to this
--transfers int        Number of file transfers to run in parallel. (default 4)
--drive-acknowledge-abuse        Set to allow files which return cannotDownloadAbusiveFile to be downloaded
`--dedupe-mode interactive` - interactive as above.
`--dedupe-mode skip` - removes identical files then skips anything left.
`--dedupe-mode first` - removes identical files then keeps the first one.
`--dedupe-mode newest` - removes identical files then keeps the newest one.
`--dedupe-mode oldest` - removes identical files then keeps the oldest one.
`--dedupe-mode largest` - removes identical files then keeps the largest one.
`--dedupe-mode smallest` - removes identical files then keeps the smallest one.
`--dedupe-mode rename` - removes identical files then renames the rest to be different.
lsf --include  '*VCB-Studio*/'  所有名字含有 VCB-Studio 的「文件夹」
--include-from
--exclude
--exclude-from
--filter
--filter-from
--filter-from-raw

实测 --exclude "/folder/" 在转存时无效


    --delete-excluded
    --filter
    --filter-from
    --exclude
    --exclude-from
    --include
    --include-from
    --files-from
    --files-from-raw
    --min-size
    --max-size
    --min-age
    --max-age
    --dump filters


--copy-dest string      Implies --compare-dest but also copies files from path into destination.






rclone [command]
// 资源客
rclone copy source:/path dest:path
rclone sync
rclone copyto
rclone dedupe --dedupe-mode oldest remote:path [flags]
rclone size remote:path 指定路径总文件数与大小
rclone ncdu remote:path 准确知道空间占用
rclone move source:path dest:path
rclone moveto source:path dest:path 效果为 copy 且删除 src 下的文件
rclone delete
rclone deletefile
rclone cleanup remote: 清空回收站，挺费时的
rclone purge



// 资源主
rclone config file
rclone config
rclone listremotes
rclone about remote:
rclone link remote:path
rclone lsf
rclone lsd 只显示文件夹
rclone ls remote:path 递归
rclone lsl 递归多个上传时间
rclone tree remote:path 递归树
rclone mkdir gd:backup
rclone mount

```


## character 规范化

虽然麻烦，但总结起来就是 分别做好 **正确上传** 与 **正确下载**

正确上传流程

1. rclone copy with --local-encoding=Slash
2. rclone mount + DFS + beyondcompare + everything 筛选出错误的上传
3. 通过粘贴到 DFS/mount 的方式（直接用 beyondcompare，上传错了也没关系，反正最后会删掉，现在只是最快减少）
4. 重复检测、上传的步骤，直至 source 的所有文件都正确上传
5. 删除所有错误的上传

正确下载

1. DFS 复制粘贴直接下载
2. rclone mount + DFS + beyondcompare + everything 筛选出错误的下载
3. BeyondCompare + 手动重命名 + rclone copy with correct encoding etc. 想办法清零错误的下载（反正数量不多）
4. 删除错误的下载

此外，还得做一件事，测试 copy 下载与 mount 路径是否一致，这很重要。



## rclone help

```bash
rclone help    # 列出所有子命令及其简介
rclone help flags    # 列出所有 flags 及简介

rclone <subcommand> --help    #查看某个命令的文档
rclone help --help    #查看 help 命令的文档
rclone copy --help    #查看 copy 命令的文档
rclone move --help    #查看 move 命令的文档
rclone sync --help    #查看 sync 命令的文档

```




## rclone copy

[Upload between team drive and google drive using my bandwith - Help and Support - rclone forum](https://forum.rclone.org/t/upload-between-team-drive-and-google-drive-using-my-bandwith/25387)

- CLI
    - `--server-side-across-configs`
        - 别乱启用，可能导致部分文件 copy 失败
        - Examples
            - 部分文件 copy 失败记录与分析
            - src 和 dst 都是 [[WebDAV]]
            - 失败的文件都是文件名特别长的 CJK 字符
            - 把 dst 换成本地路径则没问题
            - 不使用 `--server-side-across-configs` 也没问题
            - 因此猜测 `--server-side-across-configs` 可能会触发某些针对 dst 的检查
            - 结论：[[WebDAV]] 别用 `--server-side-across-configs`

```bash
rclone copy command
Usage:
    rclone {copy,sync,move} <source>:<dir> <dest>:<dir>    重命名模式
    rclone {copy,sync,move} <source>:<file> <dest>:<dir>    丢进去模式

Examples:
    rclone \
    copy  \
    --local-encoding=Slash  \
    --webdav-encoding=Slash  \
    --drive-encoding=Slash  \
    --drive-server-side-across-configs  \
    --ignore-existing  \
    --ignore-errors   \
    --transfers 2 \
    --stats 15s   \
    --log-level DEBUG  \
    net-alist:ACG/anime/年鉴计划/2010  \
    net-alist:ACG/anime/年鉴计划/赛钱箱/2010-残缺  \
    --log-file r2.log  \
    --dry-run  \

Options:
    --disable
    --update
    --delete-empty-src-dirs        move 之后移除 src 的文件夹
    --no-traverse
    --fast-list

Description:
    rclone copy --help    复制
    rclone move --help    剪切
    rclone sync --help    同步（删去 dest 多余文件）
    copy move sync 三者的逻辑其实是一样的，都是将 src 指定目录下的所有 **文件** 放进 dst 指定目录里。因为其实操作的是文件，所以其实不会删除 dst 中的重名文件夹，理论上也不会造成文件夹重复，Google Drive 存在同名文件、文件夹是因为不同账户的问题。
    copy 默认会覆盖已存在文件（智能判断）
    move 默认会覆盖已存在文件（智能判断）
    sync 默认会覆盖已存在文件（智能判断）
    rclone 的几乎所有命令都是只针对目录，dest 更是只能是目录，dest 指定的路径不存在则自动创建该目录

```


## rclone move

```bash
rclone move src-folder dst-non-exists-foler    # 重命名
rclone move src-file dst-non-exists-file    # 重命名
rclone move src-file dst-folder    # 将文件放入文件夹
rclone move src-folder dst-exists-folder    # 合并文件夹！（跟 mv 不一样）

```

## rclone delete

```bash
rclone delete --help
rclone deletefile --help    删除单个文件

只删除符合条件的文件
gclone delete \
anime-fch1993:"[philosophy-raws][NFO]/[VCB-S&philosophy-raws][The Asterisk War]"  \
--include "*.ass"  \
--dry-run  \


```

## rclone purge

```bash
rclone rmdir remote:path       #删除指定空目录
rclone rmdirs remote:path        #删除指定目录里的所有空目录（无论多深）
--leave-root       #保留指定目录本身不被删除。rmdirs 删除指定目录里的所有空目录后，如果指定目录本身变成了空目录，默认是会被删除的


rclone purge remote:path        #清空指定路径下所有文件数据（无视 filter）
rclone delete remote:path        #删除指定路径下的所有文件数据（接受 filter）
If you supply the `--rmdirs` flag, it will remove all empty directories along with it.

```

## rclone check

```bash
// 对比两个文件夹的所有文件是否一样
rclone    \
check    \
--missing-on-dst "E:/missing-on-dst.log"    \
--missing-on-src "E:/missing-on-src.log"    \
--match "E:/check-match.log"    \
--error "E:/check-error.log"    \
--differ "E:/check-differ.log"    \
--combined "E:/check-combined.log"    \
--log-file "E:/rclone.log"    \
--size-only    \
--ignore-size    \
-vv    \
local:"E:/z01"    \
local:"E:/z02"    \
loli-music:"Touhou lossless music collection"    \


rclone check source:path dest:path [flags]

--missing-on-dst string        src 有、dst 没有 的文件
--missing-on-src string        src 没有、dst 有 的文件
--match string         src 有、dst 有、内容相同（智能判断）的文件
--differ string        src 有、dst 有、内容不同（智能判断）的文件
--error string         出错的文件 error (hashing or reading)
--combined string        将上述 5 种结果汇总进一个文件，按顺序分别用 + -  = * ! 来标记 5 种类型

--size-only        不比较 hash，只比较文件大小
--ignore-size        不比较文件大小，配合 --size--only 相当于同路径文件直接视作相同，会让 --differ 的内容为空
--one-way        会让 --missing-on-src 的内容为空，换言之，将 src 没有、dst 有的文件被当作不存在，rclone 工作像没看到这些文件一样
--download        从 remote 下载文件计算 hash，remote 不支持查询 hash 时用

Checks the **files**,  compares sizes and hashes (MD5 or SHA1) and logs a report of files which don''t match.  It doesn''t alter the source or destination.



```



## rclone mount/serve

```bash
Usage:
    rclone serve <protocol> <remote>:[path]
    rclone mount <remote>:[path] <mountpoint> [flags]

Protocol:
    dlna
    docker
    ftp
    http
    restic
    sftp
    webdav

Mountpoint:
    # Windows
    D:/non-existed-dir    挂载到目录
    R:    挂载为新磁盘
    # *nix
    /path/to/existed-dir

Flags:
    --transfers 6
    --buffer-size 16M
    --dir-cache-time 30m
    --poll-interval 0
    --vfs-cache-mode minimal
    --vfs-cache-max-age 20m
    --vfs-cache-max-size 2G
    --vfs-read-chunk-size 16M
    --vfs-read-chunk-size-limit 512M
    --vfs-write-back 15s
    --vfs-read-wait 5ms
    --cache-dir "D:/Temp/rclone"
    --config "D:\Portable\scoop\apps\rclone\current\rclone.conf"


最新成果（2021.12.28）

如果要 `DFS + cache`，那么 **vfs 绝对要使用 `minimal`**

1. 边下边播
2. 跳转 零流量/低流量（chunk 大小）
3. 综合流量消耗最少
4. 空间占用少

此时（DFS + cache）的 `full`，巨垃圾，要 100% 下载完 tta 才开始播放，流量消耗最多。

`writes` 与 `minimal` 区别在于，虽然二者都支持边下边播，但 `writes` 会一直下完整个文件（反正流量消耗比 `minimal` 多），除此以外几乎没区别（不看上传的话）。

`None` 与 `minimal` 区别在于，虽然二者都支持边下边播，但 `None` 跳转需要重新读取 DFS，造成额外流量，速度也慢。


--vfs-cache-mode minimal
--vfs-read-wait 10ms
--vfs-write-back 30s
--vfs-cache-max-age 20m
--vfs-cache-max-size 1G
--vfs-read-chunk-size 16M
--vfs-read-chunk-size-limit 512M
--cache-dir D:\Temp\rclone





--vfs-cache-mode full
--vfs-read-ahead 64M
--vfs-read-wait 8ms
--vfs-write-back 2m
--vfs-cache-max-age 30m
--vfs-cache-max-size 4G
--vfs-read-chunk-size 16M
--vfs-read-chunk-size-limit 512M
--cache-dir D:\Temp\rclone




`aria2 bt 上传`
rclone mount    \
anime-bangumi:      \
/root/test/x-monster/remote/anime-bangumi    \
--allow-other \
--cache-dir /root/test/.cache/rclone  \
--allow-other         \
--no-modtime           \
--dir-cache-time 12h    \
--poll-interval 10m      \
--buffer-size 32M         \
--vfs-cache-mode full    \
--vfs-read-wait 15ms         \
--vfs-cache-max-age 60m      \
--vfs-read-chunk-size 8M      \
--vfs-read-chunk-size-limit 4G \
--transfers 6                    \
--drive-service-account-file /root/test/AutoRclone/accounts-315/01496b7605fd0afc9386ec0966a874eb54fd3054.json  \
-v  \
--vfs-write-back 5s             \



```


## rclone lsf / lsd / lsjson / ls / lsl / ncdu / tree / size




## rclone authorize/config

```bash
rclone authorize "drive" # Google Drive
rclone authorize <backend-type>


```

有几个非常规的 remote 需要注意：

1. local
2. cache backend
3. alias

```
[local]
type = local

[cache-windows]
type = cache
remote = local:"D:/User"

[cache-linux]
type = cache
remote = local:/home
```

本地文件系统的技巧：

rclone lsf local:E:/waifu2x
rclone lsf E:/waifu2x


## rclone cat


## options

```
// Environment Variables
rclone 的 flags 和 args 可以用环境变量来配置，只需要 take the long option name, strip the leading `--`, change `-` to `_`, make upper case and prepend `RCLONE_`

E.g. --log-level DEBUG 环境变量为 RCLONE_LOG_LEVEL=DEBUG



// Global flags
--dry-run
--interactive  -i
--auto-confirm
-P
--stats duration
--stats-log-level
--log-file <file>
--log-level DEBUG|INFO|NOTICE|ERROR (default "NOTICE")
--log-level INFO    等价于 -v
--verbose 2 -vv    --log-level DEBUG
--config

--rc
--rc-addr
--rc-no-auth
--rc-user
--rc-pass
--rc-web-gui
--rc-web-gui-no-open-browser
--bind
--buffer-size
--cache-dir
--no-unicode-normalization        Don't normalize unicode characters in filenames


--ignore-case    大小写不敏感
--ignore-checksum
--ignore-size
--ignore-times
--ignore-existing
--ignore-errors            Delete even if there are I/O errors

--max-depth        set limits the recursion depth to this (default -1)
--max-age Duration
--max-size SizeSuffix
--min-size SizeSuffix    KiB but abbreviations K, M, G, T or P are valid
--update            Skip files that are newer on the destination
--min-age Duration

Controls the maximum age of files within the scope of an rclone command. Default units are seconds or the following abbreviations are valid:

ms - Milliseconds
s - Seconds
m - Minutes
h - Hours
d - Days
w - Weeks
M - Months
y - Years
--max-age can also be specified as an absolute time in the following formats:

RFC3339 - e.g. 2006-01-02T15:04:05Z or 2006-01-02T15:04:05+07:00
ISO8601 Date and time, local timezone - 2006-01-02T15:04:05
ISO8601 Date and time, local timezone - 2006-01-02 15:04:05
ISO8601 Date - 2006-01-02 (YYYY-MM-DD)
--max-age applies only to files and not to directories.

E.g. rclone ls remote: --max-age 2d lists files on remote: of 2 days old or less.

```

## filter

- References
    - [Rclone Filtering](https://rclone.org/filtering/)

- Examples
    - [[Glob]]
        - `/foo/**` or `foo/**` 根文件夹下的 foo 文件夹
        - `**/foo/**` 任意层级下的 foo 文件夹（不包括根文件夹）
        - `**/*foo*/**` 任意层级下的包含 foo 的文件夹（不包括根文件夹）
        - `*foo*` 任意层级下的包含 foo 的文件
    - [[RegExp]]
        - `/foo/{{.*}}`
        - `{{.*}}/foo/{{.*}}`
        - `{{.*}}/*foo*/{{.*}}`
        - `{{.*\.jpe?g}}`
        - `{{regexp}}`
        - `glob{{regexp}}glob`
    - Flags
        - `--filter "- foo"`
        - `--filter "+ foo"`


```bash
// flag
--include "exp1"
--include "exp2"
--exclude
--filter (use - to read from stdin)
--dump

--include-from <file>
--exclude-from
--filter-from
--exclude-if-present
--files-from
--files-from-raw    匹配个毛线，直接指定所有文件的完整路径


// 二八 glob style
include 和 exclude 本质上都是 filter。

**filter 写法有 3 种：**
针对文件夹的（/ 结尾）
针对路径的（带有 ** 且非 / 结尾）
针对本层文件的（其他所有）
三者效果完全可能重叠，条条大路通罗马。

*（相当于正则的 [^/]*）
**（相当于正则的 .*）
*abc*    任意开头任意结尾，本层文件名带有 abc 就行
abc*    非 * 开头，本层文件名必须以 abc 开头
*abc    非 * 结尾，本层文件名必须以 abc 结尾
必须使用「\」转义的字符：「* ? [ ] { }」，写成例如「\{」
可转可不转的字符「! + ^ ( )」
未测试的字符「\ |」

注意，第三种，比如 jk*.htm 右侧匹配的一定是末尾，左侧一定紧挨着路径分隔符 /或者你可以理解为 /jk*.htm$。所以可以匹配 /jklove.htm /jk.htm，但无法匹配 lovejk.htm jk.html jklove.html

推荐 xxx-from，因为每个 --include 只能指定一个表达式，  --include-from 的效果等同于写了很多个 --include。文本文件按从上到下的顺序匹配，只有第一个匹配有效。

三种模式不能混用，想要同时 include exclude 就只能单独用 filter。

加减号只有在 filter 才要写

直接指定文件完整路径 files-from.txt:

# comment
file1.jpg
subdir/file2.jpg



下边这一段有点逻辑混乱了，看上边 filter 的 3 种写法，那个是对的
\ 转义符。下边几个特殊字符需要转义
「* ? \ [ ]」
「! { } ( )」？？？
* 表示除了 / 以外的任意长度的任意字符串（相当于正则的 [^/]*）
** 表示任意长度的任意字符串（相当于正则的 .*）
? 表示除了 / 以外的单个字符（相当于正则的 [^/]{1}）
[abc] 匹配其中的一个字符
[!a-z] 匹配不在其中的一个字符（不确定写法对不对）
[\p{Han}]    #汉字
[\p{Hiragana}]    #平假名
[\p{Katakana}]    #片假名
[\d]
[ [ ! ] { character-range } ]    # character class (must be non-empty)
{ pattern-list }    # pattern alternatives
c         # matches character c (c != *, **, ?, \, [, {, })
\c        # matches reserved character c (c = *, **, ?, \, [, {, })

不知道 rclone 支不支持
! 排除符。rclone 不支持，不需要转义
?(pattern_list)     匹配零个或一个在 pattern_list 中的字符串。
*(pattern_list)     匹配零个或多个在 pattern_list 中的字符串。
+(pattern_list)     匹配一个或多个在 pattern_list 中的字符串。
@(pattern_list)     匹配至少一个在 pattern_list 中的字符串。
!(pattern_list)     匹配不在 pattern_list 中的字符串.

/xxx    / 开头的表示从根路径开始匹配（即 /xxx 相当于正则的 ^\/xxx）
xxx    不以 / 开头的可以从路径字符串任意处开始匹配
abc    意味着匹配名为 abc 的文件。rclone 会认为表达式的左边是路径分隔符，所以想要匹配文夹名的部分，请用 *part of name*
*folde*    匹配文件夹名的部分
xxx/    / 结尾的表示只针对文件夹（即 xxx/ 相当于正则的 xxx\/$）




TL;DR

E.g. rclone ls remote: --include "*.{png,jpg}" lists the files on remote: with suffix .png and .jpg. All other files are excluded.

E.g. on Microsoft Windows rclone ls remote: --exclude "*\[{JP,KR,HK}\]*" lists the files in remote: with [JP] or [KR] or [HK] in their name. Quotes prevent the shell from interpreting the \ characters.\ characters escape the [ and ] so an rclone filter treats them literally rather than as a character-range. The { and } define an rclone pattern list. For other operating systems single quotes are required ie rclone ls remote: --exclude '*\[{JP,KR,HK}\]*'

--exclude should not be used with --include, --include-from, --filter or --filter-from flags.

Other filter flags (--include, --include-from, --exclude, --exclude-from, --filter and --filter-from) are ignored when --files-from is used.

Rclone commands with a --files-from flag traverse the remote, treating the names in --files-from as a set of filters.


```



## remotes

特殊 remotes:

- local
- alias
- cache
- union    解包
- combine    自定义顶层。是我想要的，可控性强
- crypt
- compress
- chunker
- hasher
- memory

## crypt

- crypt
    - content encryption
        - NaCL
            - secretbox == 对称加密
                - uses XSalsa20 and Poly1305 to encrypt
    - file/directory name encryption
        - Off (~246 characters)
        - Obfuscation (143~246)
        - Standard (~143 characters)
            - original name -> padded using PKCS#7 to a multiple of 16 bytes -> ECB-Mix-ECB -> AES256 -> base32/base64/base32768 -> strip "=" => final name
                    - base32 全小写
                    - base64 大小写敏感（绝大多数 remotes 都支持）
                    - 字符串长度 base32 > base64 > base32768
                    - e.g. 实测 `99 unicode` 到 base64 `235 bytes`

## docker

[Docker Volume Plugin](https://rclone.org/docker/)


```bash
我之前的做法是，系统 rclone 挂载到本地目录，然后 docker 将本地目录映射到容器。此方案很难做到开关机的自动恢复。

rclone 推出了一个 docker plugin，该插件其实是 docker volume 的 driver，可以将 rclone remote 挂载为 docker volume。这样 containers 不再是映射宿主机目录，而是映射 docker volume。更加由雅。

更进一步，该插件其实是个运行 rclone server 命令的容器，只不过该容器专门用来生成 volume，因此有着单独的 namespace。

sudo apt -y install fuse
sudo yum -y install fuse

sudo mkdir -p /var/lib/docker-plugins/rclone/{config,cache}
sudo ln -s ~/.config/rclone/rclone.conf    /var/lib/docker-plugins/rclone/config/rclone.conf

sudo docker plugin install rclone/docker-volume-rclone:amd64 args="-v" --alias rclone --grant-all-permissions
sudo docker plugin list

接下来就可以在 docker-compose.yml 里创建 volume 了，driver 值为 "rclone"




```


## 特殊字符の编码

二八：

对于亚洲用户（中日韩等），**强烈推荐**对 `rclone.conf` 的所有 `remote` 设置 `encoding = None`；并且执行命令时对 source 和 destination 附加 `--<backend>-encoding=None`，例如 `本地` 上传到 `Google Drive` 时添加 `--local-encoding=None` `--drive-encoding=None`

PS：由于【踩坑实例二】，在考虑要不要取消 `encoding=None` 而使用默认编码，有需要时再指定。

参考

[Encoding option](https://rclone.org/overview/#encoding)

[Encoding example: Windows](https://rclone.org/overview/#encoding-example-windows)

[Restricted characters](https://rclone.org/local/#restricted-characters)

[Invalid UTF-8 bytes](https://rclone.org/overview/#invalid-utf8)


rclone **默认** 会将它认为的"错误"字符转换为它认为的"正确"的字符，于是——

太智障了，这些全角字符（左侧）本来应该是被直接上传的，但全部被替换成了 Windows 的保留字符（右侧，半角）。这对汉语、日语、韩语等亚洲用户是不可接受的，因为全角字符被错误地转换成了半角字符！

    ／    /
    ＂    "
    ＊    *
    ：    ：
    ＜    <
    ＞    >
    ？    ?
    ＼    \
    ｜    |

> Everything 搜索文件路径是否带有这些**全角字符**
> `path:"＊" OR path:"／" OR path:"＼" OR path:"＜" OR path:"＞" OR path:"：" OR path:"＂" OR path:"？" OR path:"｜"`

这就是 rclone 的所谓"编码" --backend-encoding。

注意，`--<backend>-encoding` 的 `<backend>` 应该替换成对应的 backend string。例如本地路径是 --local-encoding，Google Drive 是 --drive-encoding，Dropbox 是 --dropbox-encoding。

`rclone help backends`    # 查看 backends 有哪些
`rclone help flags encoding`    # 查看 backends 的默认编码

常用的 `--<backend>-encoding`

**--local-encoding None**    (default Slash,LtGt,DoubleQuote,Colon,Question,Asterisk,Pipe,BackSlash,Ctl,RightSpace,RightPeriod,InvalidUtf8,Dot)
**--drive-encoding None**    (Default: InvalidUtf8)

想要知道 `--<backend> --encoding` 支持的 encoding 有哪些，可以 `--<backend> --encoding="乱打一些字"` 传入错误的值，于是会报错，返回的报错中写有支持的 encodings：

```log
rclone lsf --local-encoding="乱打一些字"

2021/12/06 17:02:41 Fatal error: invalid argument "乱打一些字" for "--local-encoding" flag: parsing "乱打一些
字" as encoder.MultiEncoder failed: bad encoding "乱打一些字": possible values are: Asterisk, BackQuote, BackS
lash, Colon, CrLf, Ctl, Del, Dollar, Dot, DoubleQuote, Hash, InvalidUtf8, LeftCrLfHtVt, LeftPeriod, LeftSpace, LeftTilde, LtGt, None, Percent, Pipe, Question, RightCrLfHtVt, RightPeriod, RightSpace, SingleQuote, Slash, SquareBracket
```

可以看到，`--<backend>-encoding` 的合法参数包括 `Asterisk, BackQuote, BackSlash, Colon, CrLf, Ctl, Del, Dollar, Dot, DoubleQuote, Hash, InvalidUtf8, LeftCrLfHtVt, LeftPeriod, LeftSpace, LeftTilde, LtGt, None, Percent, Pipe, Question, RightCrLfHtVt, RightPeriod, RightSpace, SingleQuote, Slash, SquareBracket`。你可以使用其中的一个或几个，使用半角逗号分隔，例如：

`--local-encoding "Slash"`
`--local-encoding "None"`
`--local-encoding "Slash,Colon,Dot"`
`--drive-encoding "None"`
`--drive-encoding "Slash,Colon,Dot"`
`--drive-encoding "Colon,Question,Asterisk"`

每种编码 encoding 会替换成哪些目标字符，参考 [Encoding option](https://rclone.org/overview/#encoding)



TL;DR

踩坑过程中的记录

经过多次测试，锁定了真正的问题：**windows rclone 上传时把合法的全角符号替换成了半角！**

upload by windows cmd 成功复现
upload by windows  成功复现
upload by windows cmder-cmd 成功复现
upload by windows cmder-bash 成功复现
upload by windows cmder-ps 成功复现

在 windows 与 linux 执行 rclone lsf gd:xxx 可以清楚地看到，半角的冒号 `:`

这些半角符号在 windows 上是非法字符，挂载时 DFS 将其替换成空格，rclone mount 时将半角冒号 `:` 替换成了 ``

--no-unicode-normalization
--drive-encoding InvalidUtf8

gclone copy --config "D:\Portable\scoop\apps\rclone\current\rclone.conf" --drive-server-side-across-configs  --ignore-existing  --ignore-errors   --stats 30s -vv   --transfers 8  --drive-encoding InvalidUtf8 "E:/waifu2x/cue" "loli-music:test arg"




## 【踩坑实例一】特殊字符

rclone v1.57.0

上传时文件夹名全角变半角

原路径：

    /Touhou lossless music collection/[GET IN THE RING]/2012.12.30 [GCHM-0012] ''Activity'' Case：01 -Graveyard Memory- [C83]/“Activity” Case 01 - Graveyard Memory-.cue

错误：

专辑文件夹带有全角冒号 `：`，windows rclone 上传时自动改成了半角冒号 `:`

原因：

默认 `--backend-encoding` 为 `--local-encoding=InvalidUtf8`，这意味着 rclone 将它认为的"错误"字符改为"正确"字符，其中包括了众多全角符号。




## 【踩坑实例二】特殊字符

结论：

**`--<src_backend>-encoding=None` 导致，这是 rclone 的 Bug，只要开发者不修就没有办法。暂时没有完美解决办法。一个流程化的解决方案是：上传 2 次。第一次上传、复制时，`--<src_backend>-encoding=None`，如果有字符被错误处理，仅针对那部份文件夹使用 `--<src_backend>-encoding=默认编码或手动指定编码` 重新上传，最后使用 `rclone delete` 删掉 dst 中的错误文件 。**


rclone v1.57.0

`／` U+FF0F 前出现多余的字符 `‛` U+201B，变成了 `‛／`，即便 `encoding=None`

原路径：

    /Touhou lossless music collection/[Iemitsu.／A]/2006.12.31 [SICD-0017] IA-STYLE／Toho-J／Fantasmix [C71]/IA-STYLE／Toho.cue

错误路径：

    /Touhou lossless music collection/[Iemitsu.‛／A]/2006.12.31 [SICD-0017] IA-STYLE‛／Toho-J‛／Fantasmix [C71]/IA-STYLE‛／Toho.cue

即便 `encoding=None`，copy、lsf 时 `[Iemitsu.／A]` 变成了 `[Iemitsu.‛／A]`，路径中的所有 `／` 变成了 `‛／`。

cmder-bash、
cmder-cmd、
cmder-ps、
cmd、
ps 中，
rclone lsf/copy with encoding=None 都出现了这个错误。
`--no-unicode-normalization` 也没有变化。
尝试使用 `| grep Iemitsu` 过滤结果：
cmder-bash    这个错误仍然发生
cmd    显示成乱码，所有的非英文都变成乱码
cmder-cmd    显示成乱码，所有的非英文都变成乱码
ps    显示成 `???`，所有的非英文都变成问号
cmder-ps    显示成 `???`，所有的非英文都变成问号

cmd ls    显示成 `??`，所有的非英文都变成问号
cmd dir    所有信息正确显示
ps dir    所有信息正确显示
ps ls    所有信息正确显示
cmder-bash ls    所有信息正确显示

可以确定这是 rclone 以及 cli 环境的问题。

我好像发现，只有 `rclone ls local:` 才这样。对 `loli-music:` 就不会这样



rclone    lsf    --filter-from "E:/waifu2x/filter.conf" --local-encoding=None --drive-encoding=None   local:"E:/z02"
local:"H:/Touhou lossless music collection"




**现在最关键的问题不在于 rclone ls 不准确，而是 windows/linux 下 rclone 无法正确上传，这是一切问题的根源。**

我 sftp 上传到 vps 都没问题。linux 中 ls -l 显示正确。
linux 中 rclone ls 依然错误显示。

通过在 linux 上测试，搞懂了本地上传 Google Drvie 时字符 `／` 变成了 `‛／` 单纯是因为 `--local-encoding=None`，所以使用默认编码就没这个问题（本质上是 rclone 自己作的，其他任何应用都没有这个问题）。但就如【踩坑实例一】所说，rclone 默认编码策略太坑，会轻易将全角字符等它认为的"错误"字符替换成"正确"的半角字符，并且这些半角字符包括 windows 路径的保留字符，这意味着 windows 下路径无法正确显示。

即便是 linux，只要加了 `--local-encoding=None` 都会出现这个错误。

更准确的说，`rclone copy/move/sync/check` 等需要指定 2 个 remote 的命令，编码取决于前者，即 `source` 的 `--<backend>--encoding`

`--local-encoding=Slash,LtGt,DoubleQuote,Colon,Question,Asterisk,Pipe,BackSlash,Ctl,RightSpace,RightPeriod,InvalidUtf8,Dot` 会导致全角符号可能替换成半角符号

`--local-encoding=None` 理论上完美，但 rclone 在处理字符时有些问题。于是就有了 `／` 变成 `‛／` 的问题。

`--drive-encoding=InvalidUtf8` 

`--drive-encoding=None` 

对于二次上传（第一次上传用 None、第二次默认编码）的方案，有个关键点：如何得知有没有路径字符错误？错误有哪些？

对于上传：

1. Everything 是获取本地文件路径最可靠的方式。

对于复制：

0. 目前没找到可能的可靠文件路径获取方式
1. Everything + DFS & Everything + cache backend 是可能的文件路径获取方式
2. DFS 无法正确读取 filename uploaded by rclone with defealt `--local-encoding`
2. `rclone ls/lsl/lsf/lsd/lsjson` 是否受 `--<backend>-encoding` 影响还不确定。

Linux：
`rclone ls/lsl/lsf/lsd/lsjson local:` 确实受 `--local-encoding` 影响，其值为 `None` 时就会将 `／` 替换成 `‛／`，默认编码则正常显示，但不确定默认编码是否有潜在错误。
`rclone ls/lsl/lsf/lsd/lsjson loli-music:` 确实受 `--drive-encoding` 影响，其值为 `None` 或 `InvalidUtf8` 或 `Slash,LtGt,DoubleQuote,Colon,Question,Asterisk,Pipe,BackSlash,Ctl,RightSpace,RightPeriod,InvalidUtf8,Dot` 时的输出结果与 `local:` 的情况有所不同，总之 `ls` 等命令的输出结果不完全可靠，一方面字符编码问题，一方面可能不全。

Windows：
`rclone ls/lsl/lsf/lsd/lsjson local:` 确实受 `--local-encoding` 影响，其值为 `None` 时就会将 `／` 替换成 `‛／`，默认编码则正常显示，但不确定默认编码是否有潜在错误。
`rclone ls/lsl/lsf/lsd/lsjson loli-music:` 确实受 `--drive-encoding` 影响，其值为 `None` 或 `InvalidUtf8` 或 `Slash,LtGt,DoubleQuote,Colon,Question,Asterisk,Pipe,BackSlash,Ctl,RightSpace,RightPeriod,InvalidUtf8,Dot` 时的输出结果与 `local:` 的情况有所不同，总之 `ls` 等命令的输出结果不完全可靠，一方面字符编码问题，一方面可能不全。此外，windows 与 linux 下的 `ls` 等命令的输出不同。



## 【踩坑实例三】None 编码

    请用 encoding=Slash，保留原文件名，同时「／」不会被转义成「‛／」

touch  \
"Fate／Groud Order"  \
"2012.12.30 [GCHM-0012] Activity Case：01 -Graveyard Memory- [C83].cue"  \
"test／fullwidth slash"  \
"test＼fullwidth backslash"  \
"test｜fullwidth pipe"  \
"test：fullwidth colon"  \
"test？fullwidth question"  \
"test！fullwidth exclamation"  \
"test＂fullwidth quotation"  \
"test＇fullwidth quotation"  \
"test＊fullwidth asterisk"  \
"test％fullwidth percent"  \
"test＆fullwidth and"  \
"test&and"  \
"test+plus"  \
"test\$dollar"  \
"test<"  \  # 保留字符
"test>"  \  # 保留字符
"test*asterisk"  \  # 保留字符

rclone ls local:

`‛／`
`‛` U+201B Single High-Reversed-9 Quotation Mark 单高横翻 9 形引号 常用标点
`／` U+FF0F Fullwidth Solidus

测试条目：

E:\anime\anime-03\anime-03\1.Animes\Ranma ½\Previews\[Kagura] Ranma 1／2 - Ep011 Preview Part [BDRip 1440x1080 x264 Hi10P FLAC].mkv



## 【踩坑实例四】The filename, directory name, or volume label syntax is incorrect

[Is it possible to run rclone cryptcheck on a remote:cache:crypt? - Help and Support - rclone forum](https://forum.rclone.org/t/is-it-possible-to-run-rclone-cryptcheck-on-a-remotecrypt/5448)

想 rclone copy 下载东西到移动硬盘（已下载了部分），结果报错 `2021/12/28 00:35:36 ERROR : Attempt 1/3 failed with 28 errors and: The filename, directory name, or volume label syntax is incorrect.`

`2021/12/28 00:53:15 ERROR : worker-3 <[しおこんぶ] Is there a witch? (COMIC BAVEL 2017年11月号) [無邪気漢化組] [無修正].zip>: failed caching chunk in storage 31457280: open D:\Temp\rclone\cache-backend\cache-comic/[MANGA]/短篇汉化合集/[雑誌] 短篇無修正 汉化合集 第1-15弹 [漫之学园资源部]/[しおこんぶ] Is there a witch? (COMIC BAVEL 2017年11月号) [無邪気漢化組] [無修正].zip/31457280: The filename, directory name, or volume label syntax is incorrect.`

开发者自己也说了这是个 bug，可能是 windows 缓存机制引起的。

重启电脑、更换盘符、清除垃圾没用。

我以为是 windows 针对移动硬盘的问题，于是复制文件到本地，用 `rclone copy gd:path E:/path`，结果也是同样的报错……移动硬盘挂载问题能理解，但本地硬盘都能出错就离谱。

所以很可能不是挂载问题，而是已经下了的部分文件的问题？直接下载到空文件夹就没事，无论是下载到本地还是移动硬盘。

难道是权限？chmod 与右键属性，都没用。

难道是 gd 里的文件出问题？DFS 查看下载报错的文件，一点问题没有。

……没错，最后又变成了玄学，根本没法 debug，报错永恒不变，-vv 根本看不出什么。

终于有点端倪了，这个文件

`短篇汉化合集/[雑誌] 短篇無修正 汉化合集 第1-15弹 [漫之学园资源部]/[藤ます] 近所のメスガキに愚息が逆らえないって本当ですか～ (COMIC快楽天ビースト 2019年4月号) [無邪気漢化組] [無修正].zip`

`[藤ます] 近所のメスガキに愚息が逆らえないって本当ですか～ (COMIC快楽天ビースト 2019年4月号) [無邪気漢化組] [無修正].jpg`

在 DFS 下正常，但 rclone copy 或 rclone mount 就不正常，没法打开或下载。mount 的文件夹、文件点击右键都反应。

**锁定了，就是 rclone 的问题。有一部分文件出错，读取内容失败。盲猜是带有特殊字符的文件。**

我先用 DFS 下载顶一下。rclone 编码问题还是没有彻底解决啊。

我加个 encoding 试试。我几乎可以肯定了，报错的全是带有全角 `！？` 之类的文件。

已经猜出个大概了，2 种可能：

1. 虽然显示的是 Encoding=Slash 的路径，但下载时用的肯定是错误路径。
2. 或者是 Encoding=Slash 本身就是错误路径，下载时用的就是 Encoding=Slash 所以才会失败。

为了验证这点，要去 gd 网页确认文件名。可以看见，文件名是带有问号的 `[藤ます] 近所のメスガキに愚息が逆らえないって本当ですか～? (COMIC快楽天ビースト 2019年4月号) [無邪気漢化組] [無修正].jpg`，很可能是半角问号。而 DFS 显示的是没有问号的。

**破案了：GD 的路径带有 windows 路径的保留字符，如半角问号 `?`，当初上传时默认编码导致的，所以无论是 copy 还是 mount，都没法弄到 windows 上。**

这样带有错误路径的文件，就应该从 GD 删除，然后重新上传正确的路径。


## 【踩坑实例五】

`rclone serve restic` 无法删除 locks 文件。但 `rclone delete` 可以删.

经过排查，基本可以确定是 rclone 源码的问题。要修只能改源码。





## 【记录一】

记录一次 rclone 访问 gd 突然 403 的问题

1. 目前唯一出问题的就是 rclone 无法访问 gd，无论 wsl 还是笔记本和台式机；
2. 发现 authorize 可以正常访问所有，SA 就不行；
3. 从 VPS 把能用的 SA 拉下来测试，发现 用了该 SA 就行了；
4. 锁定是部分 SA 有问题；
5. 随机 `accounts-01` 进行访问：阵亡；
6. 随机 `accounts-02` 进行访问：Successful
7. 随机 `accounts-03` 进行访问：Successful
8. 随机 `accounts-315` 进行访问：Successful
9. 随机 `accounts-loli01` 进行访问：Successful
10. 随机 `accounts-loli02` 进行访问：Successful
11. 随机 `accounts-loli03` 进行访问：Successful
12. 随机 `accounts-luo` 进行访问：Successful
13. 总结：换一组 SA 就好了。



## 【记录二】

一段时间不管，rclone 挂载失败？
去 service 看了一下，都没有启动成功，但 dst 文件夹都存在。问题很明确了，dst 已存在导致挂载失败，把 `E:/anime` etc. dst 文件夹删掉，再挂载就好了。



## 【记录三】

搞定了，用 capslock+ 启动的任何 cli 都是 admin，可以通过标签页旁边的「Admin」字样看出来，必须用手动打开的 cmder 创建 cli 才可能是普通权限，然后再挂载就能看到了（亲测）。

非提权的方式：

1. win + R - cmd
2. winsw 默认权限配置


## Google Drive

[Google Cloud console](https://console.cloud.google.com)

[Upload between team drive and google drive using my bandwith - Help and Support - rclone forum](https://forum.rclone.org/t/upload-between-team-drive-and-google-drive-using-my-bandwith/25387)

[Resolve errors  |  Drive API  |  Google Developers](https://developers.google.com/drive/api/guides/handle-errors#resolve_a_403_error_user_rate_limit_exceeded)

[让 Google File Stream 不再占用系统盘空间 | Sukka's Blog](https://blog.skk.moe/post/google-filestream-mount-drive/)


【Service Account】

- 进入 [Google Cloud console](https://console.cloud.google.com)
- 创建一个并进入 Project，如果没有的话
- 启用 Project 的 `Google Drive API`
- 进入 Project 的 Credentials 页面，创建 Service Accounts
- 下载 SA 的 json
- 在 rclone 配置里使用 SA
- 开心地 copy！

番外

- 公共 client 容易失败，最好使用自定义 client
- Project - Credentials - 创建 OAuth 2.0 Client IDs
- 在 rclone 里使用自定义 client







```bash
gclone    # 给 rclone copy 增加自动更换 SA 的功能，以突破每天 750G 的限制

--drive-shared-with-me
--drive-team-drive
--drive-starred-only
--drive-acknowledge-abuse
--drive-skip-shortcuts
--drive-server-side-across-configs    #Allow server-side operations (e.g. copy) to work across different drive configs.
#This can be useful if you wish to do a server-side copy between two different Google drives. Note that this isn't enabled by default because it isn't easy to tell if it will work between any two configurations.
```



## ~~rsync~~


    请用 croc 或 syncthing


duplicity 不需要配置文件，真正的无依赖！
Duplicati 有个sql数据库文件保存配置，跨平台
Duplicacy  有个文件保存配置，跨平台
rsync 只能用来同步

Tarsnap 资料极少，软件很旧，慎用
BorgBackup 类似 git，但会乱重命名 / 更改上次备份的文件，放弃
rdiff-backup 不支持加密，只有同步
lftp 放弃
duply 无信息，放弃
tar 不好用，放弃了，据说是 -G

在我看来，Acronis 是备份软件的标杆，做到了功能与易用的完美平衡，是完美，唯一缺点就是没有 CLI 与跨平台。rsync 虽然可以备份，但本质是个增量同步软件，貌似还不支持加密、压缩？


```bash
Local:  rsync [OPTION...] SRC1 SRC2... [DEST]

Access via remote shell:
  Pull: rsync [USER@]HOST:SRC... [DEST]
  Push: rsync SRC... [USER@]HOST:DEST

Access via rsync daemon:
  Pull: rsync [USER@]HOST::SRC... [DEST]
        rsync rsync://[USER@]HOST[:PORT]/SRC... [DEST]
  Push: rsync SRC... [USER@]HOST::DEST
        rsync SRC... rsync://[USER@]HOST[:PORT]/DEST

无论是上传还是下载，我们将执行 rsync 命令的主机称为本地主机，另一台称为远程主机。

local host 执行：
ssh-keygen #生成密钥对
cat /root/.ssh/id_rsa.pub #查看公钥（默认生成位置就是这个）

scp \
-P 4551 \
-i /root/.ssh/id_ras \
/root/.ssh/id_dsa.pub \
root@171.69.201.209:/home/root/.ssh
#相当于我平常配置 luoyemengchen 公钥至 VPS，的第一步





remote host 执行：
cat /root/.ssh/id_dsa.pub >> /root/.ssh/authorized_keys
# 相当于我平常配置 luoyemengchen 公钥至 VPS，的第二步
# 其实 xxx.pub 可以删除，重要的是把公钥输进 authorized_keys
# 使用 >> 防止覆盖 这样可以实现多个客户端的免密码登录
# 公钥形如
# ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAyISE0v+WzNz4kNcyoVGdcuVKamoq8GbEE/jFefWu47urdYEGuowb6Dt+nJl9ZoaSGNknkoUrzICKbxA0NFsJZL4GrRRAsI54UKo5ggUWek17ald1KmohfezF5BJ8DiPPcq5sZmtg18L6uhMk7sQuwMpUTpuy7YQtuGi2xz9Xh+E/mt7+JNGmI6NsqifTd7SIUNCR5lHd/VVTdNxTAArO8vffuNn5GCenBlfilugKGlehcdV7dJTYXwPtuSdTTocwDBYHTPVtTVBmtpG0882QMr7J2iOpIA2jTNl7jY5mUfV+SYOlcRMSlxhs2W/rtfcytSdv4m8hjwSTQANF1xtSxQ== root@weilai





local host 执行：

rsync -e "ssh -i /root/.ssh/id_rsa -p 4551" ...

mkdir -p /root/test/hath/

rsync \
-avz \
-e "ssh -p 4551 -i /root/.ssh/id_rsa" \
--progress \
root@104.33.22.11:/root/test/hath/ \
/root/test/hath/

/home/wwwroot/src.zip \
root@104.33.22.11:/home/wwwroot/
#设置完成后，每次使用rsync时，-e 里添加 -i 参数 就可以避免每次输入密码了
# ssh -i /path/to/prikey 相当于平时 xshell 登录时指定私钥


通过 SSH
rsync -avz /local/src/path/  user@remoteip:/path/to/files/
rsync -avz user@remoteip:/home/user/src  ./path

通过 rsync
rsync -av user@remoteip::www  /databack
rsync -av /databack user@remoteip::www


-u  跳过已经存在的文件，备份更新
-h  human-readable, 输出友好
-a     归档模式，递归方式传输文件，并保持连接，权限，用户和组，时间信息
-e, --rsh=COMMAND 指定使用 rsh、ssh 方式进行数据同步
-v, --verbose 详细模式输出
-l, --links 保留软链结
-L, --copy-links 想对待常规文件一样处理软链结
--progress 显示进度
-z, --compress 对备份的文件在传输时进行压缩处理
--exclude=PATTERN 指定排除不需要传输的文件模式
--bwlimit=100 限制带宽
--remove-source-files 备份结束后自动删除文件
--exclude    Exclude files matching PATTERN

```

