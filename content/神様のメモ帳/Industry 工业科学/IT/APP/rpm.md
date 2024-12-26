---
aliases:
  - rpm 分发包
  - rpm 软件包
  - rpm command
tags:
  - flag/APP/DevOps/PackageManagement
  - Label/Industry-工业科学/IT/APP/Command/CLI
commands:
  - rpm
ugly-cli: yes
---

[系统安装包管理工具 | Escape](https://www.escapelife.site/posts/74caf2e7.html)

[yum 下载全量依赖 rpm 包及离线安装（终极解决方案） - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1614031)


```bash
rpm command
Description:
    * rpm 是 Fedora/SUSE/RHEL/CentOS 的软件包管理器.
    * rpm 支持 rpm 包.
    * rpm 支持 从.rpm文件安装软件包.
    * rpm 不支持 从源仓库安装软件包.
    * rpm 对标 dpkg，但功能更方便强大.
    * rpm 命令行参数是坏文明，糟糕的设计，不过还好能用现代的方式使用它.

Usage:
    rpm <subcommand> [options]

Subcommands:
    --help
    --usage
    --version

    -i --install <package.rpm>
        * 安装软件包
    -U --upgrade <package>
        * 更新软件包
    -e --erase <package>
        * 删除软件包
    -q --query <package>
    	* 列出软件包
    -V --verify <package>
    	* 验证软件包的所属文件

Options:
    # Common Options
    -v -vv --verbose
    --quiet

    --nosignature
    --nodigest
    --noplugins

    # Install/Upgrade/Erase Options
    --force
    -h --hash
        * print hash marks

    # Query/Verify package selection options
    -a --all
        * query/verify all packages
    -g --group
        * query/verify packages in group
    -f --file <file>
        * query: 查询该文件是「哪个软件包」所安装
        * verify: 验证该文件「是否被正确安装」
        - E.g.
        - rpm --query --file /usr/bin/bash
        - rpm --query --file /usr/lib/
        - rpm --verify --file /usr/bin/grep
        - rpm --verify --file /usr/include/tar.h
    -p --package

    # Query Options
    -l --list
        * list files in package
    -i
        * 显示软件包的详细信息
        - rpm --query -i --file /usr/bin/grep

    # Verify Options

```