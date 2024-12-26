---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
commands:
  - apk
---

## apk

[Linux apk 命令 command not found apk 未找到命令 apk 命令详解 apk 命令未找到 apk 命令安装 - CommandNotFound ⚡️ 坑否](https://commandnotfound.cn/linux/1/100/apk-%E5%91%BD%E4%BB%A4)


```bash
apk command
Description:
    * apk 是 Alpine 的包管理器.
    * apk 的软件包只有 1w+，远比不上 centos 5w+.
    * Alpine 的 C 库是 musl libc 而不是 gnu libc，体积更小
    * Alpine 使用的是自己设计的分发包格式 a-packs
    * Alpine 软件包有着扩展名 .apk，本质是已数字签名的 .tgz 文件

Configuration:
    /etc/apk/repositories

Usage:
    apk [options] <subcommand> [args]

Options:
    -V --version
    --print-arch

    -v --verbose
    -q --quiet
    --progress
    --progress-fd <fd>
        * 将进度写入指定文件描述符
    --no-progress
    -i --interactive
        * Ask confirmation
    -f --force
    --force-overwrite
    --force-old-apk
    --force-broken-world
    --force-refresh
    --force-non-repository
    --force-binary-stdout
    --cache-max-age <minutes>
        * 判断是否刷新 index
    -U --update-cache
    --cache-dir <dir>
    --no-cache
        * 不使用本地缓存路径
    --no-network
        * 不使用网络

    -X --repository <repo>
    --force-non-repository

    --keys-dir <dir>
        * 指定 trusted keys 文件夹
    --allow-untrusted

Subcommands:
    update
        * 更新源仓库的 index 索引
        * 无需手动更新索引，运行其他子命令时会自动更新
    add
        * 安装软件包
    del
        * 删除软件包
    upgrade
    list [options] <regexp_pattern>...
        -I --installed
        -a --available
        -u --upgradable
        -O --orphaned
            * 只查看孤立包
    dot
        * 依赖关系图
    search <regexp_pattern>
        -e -x --exact
            * 精确匹配包名
        -d --description
            * 搜索范围包括 description
        * 查找软件包
    info [options] <pkg>...
        -a --all
            * 显示完整信息
        -d --description
            * 打印软件包的 description
        -e --installed
            * 查看包是否安装
        -R --depends
            * 列出该软件包的依赖
        -s --size
            * 打印包的大小
    info -W,--who-owns <file>
        * 查看指定文件属于哪个包
    cache
        clean
        sync
        download




Alpine 没有 apt，而是提供自己的包管理工具 apk

apk update
apk upgrade
apk show
apk search xxx
apk info xxx
apk install xxx
apk add --upgrade busybox

apk search # 查找所以可用软件包
apk search -v # 查找所以可用软件包及其描述内容
apk search -v 'acf*' # 通过软件包名称查找软件包
apk search -v -d 'docker' # 通过描述文件查找特定的软件包

apk info # 列出所有已安装的软件包
apk info -a zlib # 显示完整的软件包信息
apk info --who-owns /sbin/lbu # 显示指定文件属于的包



```