---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/License/GPL
    - flag/APP/Download
---

```bash
apt install -y aria2

https://aria2.github.io/

mkdir /root/.aria2
touch /root/.aria2/aria2.conf
touch /root/.aria2/aria2.session
touch /root/.aria2/aria2.log

aria2c --conf-path=/root/.aria2/aria2.conf \
--log=/root/.aria2/aria2.log \
-D \

不推荐的方式：
aria2c --enable-rpc --rpc-listen-all=true --rpc-allow-origin-all -c


```

### aria2 retry


'[Skymoon-Raws] Vanitas no Karte - 22 [ViuTV][WEB-DL][CHT][1080p][AVC AAC][MP4+ASS]'
f83.gid
'5e64f2c5f880accf'
f83.status
'error'

结论：还是得自己造轮子——retry bt task 的轮子

仔细研究了下第三方库的源码，大概知道为什么 bt 任务不能 retry 了。

简单的说，bt 任务如果报错，**aria2 会删除失败的 bt 任务相关的所有文件**，包括下到一半的文件、.aria2 文件、.torrent 文件。只会在**内存**留下一条任务记录。这条记录中有用的信息只有「磁力链（特征值）」「下载路径」「Trackers」。

Thanks!




aria2 provides options to specify arbitrary command after specific event occurred. Currently following options are available: --on-bt-download-complete, --on-download-pause, --on-download-complete. --on-download-start, --on-download-error, --on-download-stop.

    --on-download-error=<COMMAND>
    --on-download-pause=<COMMAND>
    --on-download-start=<COMMAND>
    --on-download-stop=<COMMAND>

aria2 passes 3 arguments to specified command when it is executed. These arguments are: GID, the number of files and file path. For HTTP, FTP, and SFTP downloads, usually the number of files is 1. BitTorrent download can contain multiple files. If number of files is more than one, file path is first one. In other words, this is the value of path key of first struct whose selected key is true in the response of aria2.getFiles() RPC method. If you want to get all file paths, consider to use JSON-RPC/XML-RPC. Please note that file path may change during download in HTTP because of redirection or Content-Disposition header.

```
 -m, --max-tries=<N>
  --retry-wait=<SEC>¶
```


貌似有救了！
aria2.tellStatus([secret, ]gid[, keys])¶


--bt-load-saved-metadata [true|false] 在使用磁力链接下载时从 DHT 获取 torrent 元数据之前，首先尝试读取`--bt-save-metadata`选项保存的文件 。如果成功，则跳过从 DHT 下载元数据。默认：`false`
note:如果你经常下载相同的BT文件，你可以启用

--bt-save-metadata [true|false] 如果true给出，将元数据另存为“xxx.torrent”文件。此选项仅在使用 BitTorrent Magnet URI 时有效。文件名是带有后缀“.torrent”的十六进制编码信息哈希。保存目录与保存下载文件的目录相同。如果相同的文件已经存在，则不保存元数据。默认：`false`

--always-resume [true|false]始终恢复下载。如果`true`给出，aria2 总是尝试恢复下载，如果恢复是不可能的，中止下载。如果 `false`给定，当所有给定的 URI 不支持恢复或 aria2 遇到不支持恢复的`N`URI（`N`是使用`--max-resume-failure-tries`选项指定的值）时，aria2 会从头开始下载文件。默认：`true`


### ~~autorclone~~

```bash
// 0. 安装 rclone
// 1. 下载脚本、安装依赖
sudo git clone https://github.com/xyou365/AutoRclone && cd AutoRclone
sudo pip3 install -r requirements.txt #安装 ac 相关依赖


// 5. TD info
0AP_LJ8NriBvyUk9PVA SSS（g suite）
0AEXbZZnnYsoVUk9PVA otago.ac.nz
0ACf_4_eeowzEUk9PVA gsuitems.com（g suite）
0ADm_sDJY2EYsUk9PVA gsuitems.com-2（g suite）
0AIAg8dMUFpi5Uk9PVA alum.ccu.edu.tw
0ALqNiXy2Ho6NUk9PVA alum.ccu.edu.tw-2
0ANDauyust_fnUk9PVA gmail-edu.co（旧）
0ACl21wpfI5zcUk9PVA swccd.edu
1b7CWBzg2cDoNPVfPX5cCA_4i_ucRMUOK test SSS
1t1GGp952cBvgaVHLv7FgC2oAWSWYbiFa test otago.ac.nz
1H2h9fhpijEU8pj6QH8YLBF4_t5f4e7mb test gsuitems.com（g suite）
1j2kKDfb0DN30NFTuhGPEqbDzDydbv2TQ test gsuitems.com-2（g suite）
17xFoBSsR7SNo2rcQQcsF6Jr73T5jgOIu test swccd.edu
1JGLAU4zV_yx57rihgjxOk4jL9Y0PDC4i test gmail-edu.co
1Be1fBS1k_9WWxT3QY_LXNK4n7_u97DJO test alum.ccu.edu.tw-2
1A2PneYHEUfCRaWGLA74QwNn3QIWEgXjw test alum.ccu.edu.tw
gd-upload：https://drive.google.com/drive/folders/1F8d8EjPr9GBbySadCKxcpGu4ysZR4y3b?usp=sharing
sui-upload：https://drive.google.com/drive/folders/1d5Px9RNLEq59R7ZT8vVWz6lub_YFjlYN?usp=sharing


screen -S ac1

【转存】python3 rclone_sa_magic.py -s xxxxxxx -d 0AP_LJ8NriBvyUk9PVA -dp xxxxxx -b 1 -e 100 -p 8702

【本地上传】python rclone_sa_magic.py -sp /e/test/ -d 0AP_LJ8NriBvyUk9PVA -dp test/acronis -b 1 -e 300
export http_proxy='http://127.0.0.1:1080'
export https_proxy='http://127.0.0.1:1080'

【VPS 上传】python3 rclone_sa_magic.py -sp /root/test/x-monster/data/qb -d 0AP_LJ8NriBvyUk9PVA -dp test/qb -b 21 -e 300

【小姐姐】python3 rclone_sa_magic.py -sp /root/test/x-monster/data/qb -d 0ALqNiXy2Ho6NUk9PVA -dp test/qb -b 21 -e 200 && \
python3 rclone_sa_magic.py -sp /root/test/x-monster/data/qb -d 0ALqNiXy2Ho6NUk9PVA -dp test/qb -b 21 -e 200

【gd 2 td】python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 1d5Px9RNLEq59R7ZT8vVWz6lub_YFjlYN -b 211 -e 300 -p 12152

【sui 2 td】python rclone_sa_magic.py -s 1d5Px9RNLEq59R7ZT8vVWz6lub_YFjlYN -d 0AP_LJ8NriBvyUk9PVA -dp test -b 1 -e 300

【主td 2 副td】python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 0AEXbZZnnYsoVUk9PVA -dp test -b 41 -e 300

【td 2 sui】fd 或 python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 1d5Px9RNLEq59R7ZT8vVWz6lub_YFjlYN -b 61 -e 300

【主传播】
python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 0ACl21wpfI5zcUk9PVA -dp test -b 81 -e 300
python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 0ANDauyust_fnUk9PVA -dp test -b 101 -e 300
python3 rclone_sa_magic.py -s 0AP_LJ8NriBvyUk9PVA -sp test -d 0ALqNiXy2Ho6NUk9PVA -dp test -b 121 -e 300

【副传播】
python3 rclone_sa_magic.py -s 0AEXbZZnnYsoVUk9PVA -sp test -d 0ADm_sDJY2EYsUk9PVA -dp test -b 141 -e 300
python3 rclone_sa_magic.py -s 0AEXbZZnnYsoVUk9PVA -sp test -d 0ACf_4_eeowzEUk9PVA -dp test -b 161 -e 300
python3 rclone_sa_magic.py -s 0AEXbZZnnYsoVUk9PVA -sp test -d 0AIAg8dMUFpi5Uk9PVA -dp test -b 181 -e 300

【验证】
rclone --config rclone.conf size --disable ListR src001:
rclone --config rclone.conf size --disable ListR dst001:test/qb

AutoRclone 每次会自动执行 rclone 命令 3 次，即 dst001 - dst003。所以不用自己重复执行命令。另外，dst001 check 0 files 是正常的，猜测这是已存在的文件数。越往后，速度越快，1 秒几 G，指数级加速。



// 2. 配置准备
2.1 Enable Drive API
https://developers.google.com/drive/api/v3/quickstart/python
管理：console.developers.google.com
2.2 credentials.json
将 credentials.json 保存到你的 AutoRclone 目录下面
2.3 创建 SA
（推荐）如果你已经有 N 个项目，现需要新建 1 项目，并在新的项目中创建 SA，直接运行：
    screen -S rc
    python gen_sa_accounts.py --quick-setup 1 --new-only
如果你想用已有的项目来创建service accounts：
    python gen_sa_accounts.py --quick-setup -1
如果你之前没创建过项目, 可以创建 2 个项目，每个项目 100 个 service accounts，直接运行：
    screen -S folderclone
    python gen_sa_accounts.py --quick-setup 1（别用这个巨坑，用 --new-only）
之后几百个 service accounts 的 json 授权文件下载到 accounts 文件夹下面
2.4 创建 Google Groups（可选）
groups.google.com 用 Groups 可以管理多个 SA，目的是一次性添加多个 SA，当把 SA 添加进 TD 时。每用户每天只能添加 100，每群组每天也只能添加 100。loli-project@googlegroups.com
2.5 添加进 TD
    python3 add_to_team_drive.py -d SharedTeamDriveSrcID
    或者去 gd 客户端手动添加 loli-project@googlegroups.com 作为成员


$path = json文件所在目录   #例如 /root/accounts 等
最终保存 email 至 ~/email 文件中
cat $path/*.json | grep "client_email" | awk '{print $2}'| tr -d ',"' > ~/email
如果想要每 10行 分组空行可 以把命令简单改成这样
cat $path/*.json | grep "client_email" | awk '{print $2}'| tr -d ',"' | sed 'N;N;N;N;N;N;N;N;N;/^$/d;G' > ~/email
cat ~/email


// 3. ac 命令
拷贝：
python3 rclone_sa_magic.py -s SourceID -d DestinationID -dp DestinationPathName -b 1 -e 100

上传：
python3 rclone_sa_magic.py -sp YourLocalPath -d DestinationID -dp DestinationPathName -b 1 -e 100

不出意外应该就可以跑起来了。每个service account的总的时间消耗是校验时间+拷贝时间，如果你的拷贝任务比较大的话建议将其（按文件夹）稍微拆分，挨个或者并行完成，这样能极大减小每次切换service accounts后不必要的校验时间。另外关于拷贝速度，API调用限制了每秒不超过10次调用，每次拷贝固定数量的文件数目，所以如果你的任务中的文件比较小的话，拷贝速度可能是每秒几百MB，文件都比较大的话，拷贝速度可能是几十GB/s。注意，这是一次性动作，而不是实时同步。团队盘无限容量但有文件数量限制，大概40W为上限。

文件刚分享或者刚移动文件(夹)不久，不要立刻使用folderclone，有时间延迟，最好适量等侍一会，否则会出现很多空文件夹或者丢失文件太离谱，我一般会隔一天再操作。


帮助：
python3 rclone_sa_magic.py -h
tail -f log_rclone.txt ，to see what happens in details (linux only).
rclone --config rclone.conf size --disable ListR src001:
rclone --config rclone.conf size --disable ListR dst001:

-s：the id of source. Team Drive id or publicly shared folder id
-spi：the folder path id (rather than name) of source. In Google Drive.
-sp：the folder path of source. In Google Drive or local.
-p：the id of destination. Team Drive id or publicly shared folder id
-dp：the folder path of destination. In Google Drive.

如果你一开始就碰到了
    Failed to rc: connection failed: Post http://localhost:5572/core/stats: dial tcp :5572: connectex: No connection could be made because the target machine actively refused it.
那么可能是权限或者路径导致 Rclone 任务都没跑起来



// 4. vps 迁移
必须把整个 AutoClone 文件夹复制过去就好。然后直接上 ac 命令。如果想重新弄 accounts，把文件 rclone.conf 给删了，accounts 文件夹自己看要不要删。还有，json 文件是通用的，因为是从 google 那里直接下载的。



// 6. 杂
对，我也发现这个bug。我500个json，100个用户，幸亏key名和json名对应。我一开始尝试改rclone的conf，后来发现每运行一次重新生成conf，后来把对应key的json挑出来剩下的删了，才好的。多余的conf容易导致报错三次之后就停止了，非常操蛋

我观察发现，其实那些多出来的 json 是在其他 project 里面。

SAs最坑的那地方在于，当我新建了一个group，却只能每天添加100个SAs。但是autorclone在本地调用的SAs却有500个，这样每次copy的时候，autorclone按照src001 dst001,src002 dst002的顺序使用SAS，就可能会出现用到的SAs你还没往group里加的情况。好在autorclone碰到不可用的SAs会自己切换账号。

解决方法就是：等autorclone自己慢慢切账号，或者每天加100个到group，直到加满为止。

我又重新找了教程，cre 文件与拷贝上传没有关系，cre 只是用来新建项目与 sa 的。拷贝上传只与 TD 成员权限有关。



// G 日志

开头
2020/05/04 21:51:16 DEBUG : rclone: Version "v1.51.0" finishing with parameters ["rclone" "--config" "./rclone.conf" "copy" "--drive-server-side-across-configs" "--rc" "--rc-addr=localhost:5572" "-vv" "--ignore-existing" "--tpslimit" "3" "--transfers" "3" "--drive-chunk-size" "32M" "--drive-acknowledge-abuse" "--log-file=log_rclone.txt" "E:/test/" "dst002:test/acronis"]
2020/05/04 21:51:29 NOTICE: Serving remote control on http://127.0.0.1:5572/
......
......
......
结尾
Transferred:                0 / 0 Bytes, -, 0 Bytes/s, ETA -
Checks:                40 / 40, 100%
Elapsed time:         0.0s





```


### ~~bypy~~

```bash
vim /etc/sysconfig/i18n

# change
LANG="zh_CN.UTF-8"
SYSFONT=latarcyrheb-sun16
或直接
screen -U


不过传输速度真的很慢，长期100KB不到，可能是我用国外服务器的缘故吧

支持Python 2.7+, 3.3+
pip install bypy
作为一个包，在代码中使用: import bypy
作为独立程序，python -m bypy

或
Install Setuptools & requests 依赖
wget https://bootstrap.pypa.io/ez_setup.py -O - | python
easy_install requests
git clone https://github.com/houtianze/bypy.git
cd bypy
sudo pip install -r requirements.txt
python setup.py install
cd bypy
./bypy.py info



bypy
bypy help <command>
bypy list
bypy search str
bypy compare
bypy upload 文件or目录地址
bypy syncup 目录地址
bypy downfile 文件
bypy syncdown 目录地址
bypy downdir 目录地址
-v参数，会显示进度详情
d，会显示一些调试信息
-ddd，还会会显示HTTP通讯信息（警告：非常多）
--processes 4 多进程
--downloader aria2
--on-dup skip 'overwrite', 'skip', 'prompt 提示' [default: overwrite]
--select-fastest-mirror 选择最快镜像
--config-dir CONFIGDIR [default: /root/.bypy] 配置文件方便迁移



python -m bypy.test
from bypy import ByPy
bp=ByPy()
bp.list() # or whatever instance methods of ByPy class
```


### ~~baidu-psc-go~~

```bash
设置新的appid!：
目前已知可用APP id：
266719（默认，完整权限）
309847
265486（只有 /apps/baidu_shurufa 的权限）
config set -appid=xxxxxx

脚本结果：
371067
419237
323309
312618
310646
309847
421937



// 报错
1、
bd config set --enable_https=false
bd config set -user_agent "netdisk;2.2.51.6;netdisk;10.0.63;PC;android-android"
更改这两项设置就可以下载了
另外有个Bug, 下载命令设置nocheck之后, 就算下载成功也显示失败
2、速度
据说：为何不找个HK的“梯子”做数据交换呢？百度云到香港可是满带宽模式，还可以看国内各种视频
国外早就慢到不成样子了

速度稳定 500kb/s
BaiduPCS-Go share set <文件/目录1> <文件/目录2> ...
BaiduPCS-Go share s <文件/目录1> <文件/目录2> ...
BaiduPCS-Go share list
BaiduPCS-Go share l
BaiduPCS-Go download <网盘文件或目录的路径1> <文件或目录2> <文件或目录3> ...
BaiduPCS-Go d <网盘文件或目录的路径1> <文件或目录2> <文件或目录3> ...
BaiduPCS-Go upload <本地文件/目录的路径1> <文件/目录2> <文件/目录3> ... <目标目录>
BaiduPCS-Go u <本地文件/目录的路径1> <文件/目录2> <文件/目录3> ... <目标目录>
BaiduPCS-Go -verbose download -status SomeFunkyFilePathHere
BaiduPCS-Go config set -savedir <savedir>
BaiduPCS-Go config set -cache_size=<cache_size>  如果内存条件允许, 建议将此值调大, 据说对硬盘有好处唉!
  --test          测试下载, 此操作不会保存文件到本地
  --ow            overwrite, 覆盖已存在的文件
  --status        输出所有线程的工作状态
  --save          将下载的文件直接保存到当前工作目录
  --saveto value  将下载的文件直接保存到指定的目录
  -x              为文件加上执行权限, (windows系统无效)
  --mode value    下载模式, 可选值: pcs, stream, locate, 默认为 locate, 相关说明见上面的帮助 (default: "locate")
  -p value        指定下载线程数 (default: 0)
  -l value        指定同时进行下载文件的数量 (default: 0)
  --retry value   下载失败最大重试次数 (default: 3)
  --nocheck       下载文件完成后不校验文件
  -verbose        调试
  -status         线程状态
locate 这个是默认的下载模式。从百度网盘 Android 客户端, 获取下载链接的方式来下载
pcs 通过百度网盘的 PCS API 下载
stream 通过百度网盘的 PCS API, 以流式文件的方式下载, 效果同 pcs
使用双引号扩起文件名，或者在空格, 小括号, 中括号, 特殊字符前加一个反斜杠 \

调试
export BAIDUPCS_GO_VERBOSE=1
set BAIDUPCS_GO_VERBOSE=1


手动秒传：
BaiduPCS-Go sumfile <本地文件的路径>
BaiduPCS-Go sf <本地文件的路径>
BaiduPCS-Go rapidupload -length=<文件的大小> -md5=<文件的md5值> -slicemd5=<文件前256KB切片的md5值(可选)> -crc32=<文件的crc32值(可选)> <保存的网盘路径, 需包含文件名>
BaiduPCS-Go ru -length=<文件的大小> -md5=<文件的md5值> -slicemd5=<文件前256KB切片的md5值(可选)> -crc32=<文件的crc32值(可选)> <保存的网盘路径, 需包含文件名>

通配符
BaiduPCS-Go match /我的资源/*.mp4
BaiduPCS-Go match <通配符表达式>

导出
BaiduPCS-Go export <文件/目录1> <文件/目录2> ...
BaiduPCS-Go ep <文件/目录1> <文件/目录2> ...
-r 递归所有子目录
--retry 0 建议，设置重试次数为0(禁用重试)
为啥要禁重试，导出错误就麻烦了，还有手动找，再导出


离线
BaiduPCS-Go offlinedl list
BaiduPCS-Go offlinedl add -path=<离线下载文件保存的路径> 资源地址1 地址2 ...
BaiduPCS-Go offlinedl query 任务ID1 任务ID2 ...
BaiduPCS-Go offlinedl cancel 任务ID1 任务ID2 ...
BaiduPCS-Go offlinedl delete 任务ID1 任务ID2 ...

配置
BaiduPCS-Go env
BAIDUPCS_GO_CONFIG_DIR: 配置文件路径,
BAIDUPCS_GO_VERBOSE: 是否启用调试.

BaiduPCS-Go config
BaiduPCS-Go config -h
BaiduPCS-Go config set -h
BaiduPCS-Go config set -savedir D:/Downloads
BaiduPCS-Go config set -max_parallel 150 -savedir D:/Downloads



初始
BaiduPCS-Go login -bduss=<BDUSS>
BaiduPCS-Go loglist
BaiduPCS-Go who
BaiduPCS-Go su <uid>
BaiduPCS-Go su
BaiduPCS-Go logout
BaiduPCS-Go quota
BaiduPCS-Go pwd
BaiduPCS-Go ls
BaiduPCS-Go ls <目录>
BaiduPCS-Go tree <目录>
BaiduPCS-Go tree
BaiduPCS-Go cd <目录>
BaiduPCS-Go cd -l <目录>
BaiduPCS-Go mkdir <目录>
BaiduPCS-Go rm <网盘文件或目录的路径1> <文件或目录2> <文件或目录3> ...
BaiduPCS-Go cp <文件/目录> <目标 文件/目录>
BaiduPCS-Go cp <文件/目录1> <文件/目录2> <文件/目录3> ... <目标目录>
BaiduPCS-Go mv <文件/目录1> <文件/目录2> <文件/目录3> ... <目标目录>
BaiduPCS-Go mv <文件/目录> <重命名的文件/目录>
BaiduPCS-Go meta <文件/目录1> <文件/目录2> <文件/目录3> ...
BaiduPCS-Go search [-path=<需要检索的目录>] [-r] <关键字>
-asc: 升序排序
-desc: 降序排序
-time: 根据时间排序
-name: 根据文件名排序
-size: 根据大小排序


分别对百度官方客户端和BaiduPCS-Go抓包进行了观察，获取下载链接的方式基本都一样（locate模式，query的参数官方多不少但不是关键）差别就在于官方客户端无论是不是SVIP都只开一个线程！只是SVIP给的那个地址带宽大，并不是SVIP就用了多线程。
所以想稳定使用的，把max_paralled设置为1！2都不行，可以保证不会用着用着就被限速一两天（亲测），代价是没有任何非官方速度加成。输入config help，自己看。BaiduPCS-Go config set -max_parallel 1

这种方法就是通过尽量表现得跟官方一致来规避封锁。从目前个人的测试结果来看，三方客户端跟官方客户端的差异是不难检测出来的，但只要不涉及对百度利益的侵占（开多线程耗带宽），百度并未严格针对。

P2P目前有据可查的只存在于Windows客户端，且不是所有下载时都会启用。我使用的Linux官方客户端未发现过P2P上传情况，不排除非Windows平台有P2P的可能性。


```


自动选择能用的 appid

```bash
#!/bin/bash

item=266718
function check(){
    ./BaiduPCS-Go config set -appid=$item &> /dev/null
    ./BaiduPCS-Go ls | grep -q 遇到错误
    if [ $? != 0 ];then
        echo "当前可用appid：$item ，已设置成功，BaiduPCS-Go 现可用正常使用了！"
    else
        let item+=1
        check
    fi
}
check

```


