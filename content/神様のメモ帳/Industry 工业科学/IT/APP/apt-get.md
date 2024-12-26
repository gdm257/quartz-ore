---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
commands:
  - apt-get
---

## apt-get

[系统安装包管理工具 | Escape](https://www.escapelife.site/posts/74caf2e7.html)


```bash
apt-get command
Description:
    * apt-get 没有特殊需求可以不用，推荐使用 apt.

Usage:
    apt-get [options] command
    apt-get [options] install|remove pkg1 [pkg2 ...]
    apt-get [options] source pkg1 [pkg2 ...]

Subcommands:
    update
        * 更新软件源的包列表
    install <pkg>...
        * 安装包
    reinstall
        * 重新安装包
    upgrade
        * 更新已安装的包（包括内核）
    dist-upgrade
        * 更新系统至最新版本
    full-upgrade
    remove
        * 删除包
    purge
        * 删除包和配置
    autoremove
        * 删除不使用的包
    autoclean
        * Erase old downloaded archive files
        * 删除你已经删掉的软件
    clean
        * Erase downloaded archive files
        * 会把安装的软件的备份也删除
    source <pkg>...
        * Download source archives
    download
    check
    changelog

```