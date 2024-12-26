---
tags:
  - flag/APP/DevOps/PackageManagement
  - flag/APP/Download
  - Label/Industry-工业科学/IT/APP/Command/CLI
frontmatter-as-page:
  - yum
  - yum-sources
commands:
  - yum
---

[CentOS 7 - No packages marked for update - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/459192/centos-7-no-packages-marked-for-update)


```bash
yum command
Description:
    * yum 是 RedHat/CentOS 的软件包管理器.
    * yum 基于 rpm，是 rpm 的前端，但扩展了更多功能，如源仓库.
    * yum 支持 rpm 包.

Usage:
    help
    version
    update
    check-update
    install
        * 安装包
    reinstall
        * 重新安装包
    upgrade
        * 更新包
    localinstall
        * 安装 rpm 文件
    localupdate
    remove
        * 删除包
    erase
        * 删除包和配置
    list
    search
    info
    deplist
    resolvedep
    groupinfo <group>
    groupremove <group>
    clean {headers, packages, metadata, dbcache, plugins, expire-cache, rpmdb, all}
        * 清除过期缓存


Options:
    -h --help
    --version

    -v --verbose
    -q --quiet

    -c --config <file>
    -y --assumeyes
    -C --cacheonly
        * 只使用缓存，不去下载








// 一、yum
yum help -h --help
yum search <str>
yum install [-y] <package>
yum reinstall <package>
yum remove [-y]<package>
    -q --quiet #quiet operation
yum update [package]
yum check-update [package]
yum list [package]
yum info [package]
yum command1 && yum command2 #连接多条命令
/etc/yum.conf #配置文件
yum clean all
yum makecache

yum [options] [command] [package ...] #一般命令形式
yum install mariadb-5.5.56-2.el7.x86_64 #安装指定版本软件包
yum update -y #更新所有包
yum update [package] #更新系统中的一个或多个软件包
yum remove <package>
yum ungrade <package> #降级软件包
yum search <package> #在仓库搜索软件包
yum info <package>
yum list [package] #列出一个或一组软件包
yum list | grep <str> #列出结果带有 str 的包
yum list installed | wc -l #安装软件包の数量
yum groups list #列出 groups
yum groupinstall <group>
yum clean [headers, packages, metadata, dbcache, plugins, expire-cache, rpmdb, all]
yum shell #运行交互式的 yum shell
--installroot=[path]  设置安装根目录
--enablerepo=[repo]   启用一个或多个软件源(支持通配符)


```