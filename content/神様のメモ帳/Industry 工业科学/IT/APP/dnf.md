---
tags:
  - flag/APP/DevOps/PackageManagement
  - flag/APP/Download
  - Label/Industry-工业科学/IT/APP/Command/CLI
frontmatter-as-page:
  - dnf
---

[DNF Command Reference — dnf latest documentation](https://dnf.readthedocs.io/en/latest/command_ref.html)

[CentOS 8的国内镜像和dnf包管理器 | 骏马金龙](https://www.junmajinlong.com/linux/centos8_dnf/)


```bash
dnf command
Description:
    * dnf 是 SUSE/RHEL 8/CentOS 8 的包管理器.
    * dnf 是 yum 的替代品，解决了一些 yum 有的问题，性能更好.
    * dnf 用法与 yum 基本相同.
    * CentOS 8 的 yum 实际是 dnf 的别名.

Installation:
    - yum install -y epel-release
        * 依赖
    - yum install -y dnf

Usage:
    dnf [options] <subcommand> [args]

Subcommands:
    help
    version
    repolist
    update
    check-update
    install
        * 安装包
    reinstall
        * 重新安装包
    upgrade
        * 更新包
    downgrade
        * 回滚包
    remove
        * 删除包
    erase
        * 删除包和配置
    autoremove
        * 删除孤立包
    list
    search
    info
    deplist
    resolvedep
    provides <file>
        * 查看文件提供者
        - dnf provides /bin/bash
    grouplist
    groupinfo <group>
    groupupdate <group>
    groupremove <group>
    history
        * dnf 命令的历史记录
    clean {headers, packages, metadata, dbcache, plugins, expire-cache, rpmdb, all}
        * 清除过期缓存




```