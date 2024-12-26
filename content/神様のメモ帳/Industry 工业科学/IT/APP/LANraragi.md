---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Picture
---


- Test
    - 别用 [[WSL|WSL 2]] 跑 [[LANraragi]]，相比 [[WSL|WSL 1]] 各种坑，后果自负


## LANraragi

一番测试，rclone、还原、设置、扫描 etc 一切正常，唯一的问题是无法导出备份。

除了「端口」「封面目录」，其余所有数据保存在 redis。

- redis
    - v0.8.8 and new
        - DB0: `Dict[Union[arcid, SET_<catid>], Hash]`
        - DB1: minion queue
        - DB2: config `Dict[LRR_<name>, Any]`
        - DB3: search cache
        - DB4: index cache
    - v0.8.7 and old
        * DB0: `Dict[Union[arcid, LRR_<name>, SET_<catid>], Dict[str, Any]]`
        * DB1
            * IPC 相关，也用作队列.
            * 临时的，不用管.

## Startup

```bash
#!/usr/bin/env sh

export LRR_NETWORK=http://*:2558
export LRR_DATA_DIRECTORY='/mnt/d/.home/Documents/lanraragi/database'
export LRR_THUMB_DIRECTORY='/mnt/d/.home/Documents/lanraragi/thumb'
cd /home/koyomi/lanraragi
rm -f public/temp/server.pid
mkdir -p log
mkdir -p content
mkdir -p database
sysctl vm.overcommit_memory=1
redis-server /home/koyomi/lanraragi/tools/build/docker/redis.conf --dir "${LRR_DATA_DIRECTORY}" --daemonize yes
nohup perl './script/launcher.pl' -f './script/lanraragi'

```

## LANraragi Debug

0.8.6

1. FILEMAP 全被清理了
    1. 导致很多 API 的返回结果就像 Library 是空的一样
        1. /api/search/random    正常
        2. /api/search    空
        3. /api/archives    正常
        4. /api/archives/untagged    
        5. /api/archives/<id>/metadata    空
        6. /api/archives/<id>/categories    正常
        7. /api/archives/<id>/thumbnail    正常
        8. /api/archives/<id>/download
        9. /api/archives/<id>/files
        10. /api/database/stats    正常
        11. /api/categories    正常
        12. /api/categories/<catid>    正常
        13. /api/info    正常


2. 下载完才返回 /api/archive/<id>/files
cd lib/LANraragi
Controller/Api/Archive.pm::get_file_list()
-> LANraragi::Model::Reader::build_reader_JSON()
-> Utils/Archive.pm::get_filelist()    关键

我知道为什么 0.7.9 这么好用了，
0.7.9 估计是没有 files API。
是从 html 网页端 reader 拿到的 files.
lib/LANraragi/Model/Reader.pm::build_reader_JSON()    在 html 中生成 files (pages)。实际上该函数只是 find 了 <tempdir>/<arcid>/，然后把 .jpg 之类的图片文件路径写进 pages.
因为 build_reader_JSON() 是「遍历目录里的文件」，而目录里的文件是下了多少就有多少，所以实现了「边下边看」。
那么是谁负责把文件丢进 <tempdir>/<arcid>/ 的呢？
可以肯定的是，这个谁调用了 `LANraragi::Utils::TempFolder::get_temp()`，我找找 `get_temp()`
……找到了，是 `lib/LANraragi/Model/Archive.pm::serve_page()` 把解压出的图片一张一张丢进临时目录的。
其实不用找是谁解压的，我只要把 0.8.6 LANraragi::Model::Reader::build_reader_JSON() 的算法换成 0.7.9 Model/Reader.pm::build_reader_JSON() 的算法就行.


```
API 应该返回的样式
./api/archives/0bb2f6f7762e2480f1a29cacf77a0bc3f0db33e2/page?path=%5BHamao%5D%201st%20Love%20%28%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%BC%E3%83%AD%E3%82%B9%20%2355%29%20%5B%E7%84%A1%E9%82%AA%E6%B0%97%E6%BC%A2%E5%8C%96%E7%B5%84%5D%5BMJK-19-Z1516%5D%5B%E7%84%A1%E4%BF%AE%E6%AD%A3%5D/MJK-19-Z1516-001.png

0.7.9 返回的样式
./api/archives/d3be93c9be1cf6851db0d20461ce09ffd3dc01ad/page?path=/home/koyomi/lanraragi/public/temp/d3be93c9be1cf6851db0d20461ce09ffd3dc01ad/%5B%E6%B5%B7%E8%80%81%E5%90%8D%E3%81%88%E3%81%B3%5D%20%E6%96%B0%E9%AE%AE%E3%81%B7%E3%82%8A%E3%81%BE%E3%82%93%20%5B4K%E6%8E%83%E5%9C%96%E7%B5%84%5D/FreshV_001.jpg



# /home/koyomi/lanraragi/public/temp/<arcid>/(.+)$
# TODO: 只保留 $1
```


0.8 不能边下边看了。


3. 缓存文件夹清理失败
lib/LANraragi/Utils/TempFolder.pm::clean_temp_partial()
日志发现了 `"Current temporary folder size is $size MBs, " . "Maximum size is $maxsize MBs. Cleaning."`
说明 if 条件为 true，已经正常执行代码了。
待阅读是哪里出错




LANraragi 的入口被作者搞得很复杂:

0. `tools/installer.pl` perl 依赖安装脚本.
1. LANraragi 运行依赖于 redis server.
2. 需要额外手动、启动 redis server，LANraragi 的启动脚本并不负责这事.
3. `script/lanraragi` 是 LANraragi 启动脚本，理论上已经足够完整（从 `npm` 自定义命令就能看出来，自定义命令并没有调用 `script/launcher.pl`），单独运行 `perl ./script/lanraragi` 就能正常运行 LANraragi.
4. 但 `script/lanraragi` 太死板了，用的都是默认配置，虽然会读取`lrr.conf`，但该文件只用于指定 redis server 的 IP、数据库编号.
5. 所以就有了 `script/launcher.pl`，该脚本各种读取环境变量、解析命令行参数、创建文件夹、清理旧文件，把一切都清干净，再开始运行真正的入口 `script/lanraragi`.
6. 就我看来，这太 tm 复杂了，redis server 需要手动启动还能理解，但为什么 `lrr.conf` 可配置选项这么少？就不能把 `launcher.pl` 合并进 `script/lanraragi` 吗？后者也太笨了些，什么都不配置.
7. 这还只是原生 Linux 的情况，如果是 Windows，还一切之前还需要调用 WSL，这部份工作被封装成了一个名为 `Karen` 的软件，`Karen` 还有着自己配置……

Executing the following command on WSL: export LRR_NETWORK=http://*:2558 && export LRR_DATA_DIRECTORY='/mnt/e/[Note]/.yacreaderlibrary' && export LRR_THUMB_DIRECTORY='/mnt/e/[Note]/.LANraragi' && cd /home/koyomi/lanraragi && rm -f public/temp/server.pid && mkdir -p log && mkdir -p content && mkdir -p database && sysctl vm.overcommit_memory=1 && **redis-server** /home/koyomi/lanraragi/tools/build/docker/redis.conf --dir '/mnt/e/[Note]/.yacreaderlibrary/' --daemonize yes && perl **./script/launcher.pl** -f **./script/lanraragi**


script/launcher.pl
&& script/lanraragi
-> lib/LANraragi:startup

Output from script/launcher.pl

    vm.overcommit_memory = 1
    Server PID will be at /home/koyomi/lanraragi/public/temp/server.pid

Output from script/lanraragi

    ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━!!!!!
    Enabling AOF on Redis... This might take a while.
    [LANraragi] [info] LANraragi 0.8.6 (re-)started. (Debug Mode)
    [LANraragi] [info] Plugin Detected: Chaika.moe
    [LANraragi] [info] Plugin Detected: Tag Copier
    [LANraragi] [info] Plugin Detected: Add Timestamp Tag
    [LANraragi] [info] Plugin Detected: E-Hentai
    ...
    ...
