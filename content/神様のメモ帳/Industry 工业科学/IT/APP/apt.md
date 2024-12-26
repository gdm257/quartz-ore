---
tags:
  - flag/Platform/Linux独占
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackageManagement
frontmatter-as-page:
  - apt
  - apt-sources
commands:
  - apt
---

## Brief

- Alternatives
    - [系统安装包管理工具 | Escape](https://www.escapelife.site/posts/74caf2e7.html)

## CLI

- Test
    - 大部分操作都需要 root 权限，除非指定 `--user` 标志

```bash
apt command
Description:
    * apt 是 Debian/Ubuntu 的包管理器.
    * apt 是 apt-get 的替代品，相对更加现代.

Usage:
    apt [options] <subcommand> [args]

Subcommands:
    install <packages>
    reinstall
    upgrade <packages>
    	* 升级软件包（包括内核）
    full-upgrade
    dist-upgrade
    remove <packages>
    purge <packages>
    autoremove
        * 移除孤立包.
        * 亲测有效.

    update
    	* 更新索引
    list [options]
        --installed
        --upgradeable
    search <keyword>...
    show <package>
        -a
    clean
        * 清理缓存.
    autoclean
        * 清理旧版缓存.
    edit-sources

Options:
    -h --help
    -v --version
    -c <config_file>

```


## Configuration

- Configuration
    - `/etc/apt/`
        * `/etc/apt/sources.list`
        * `/etc/apt/sources.list.d/*.list`
    - [将 ISO 镜像设置为本地源 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/softwareSource.html)

```ini
# 注释
# 一行一个仓库源
# <pkg-type> <url> <distro> <component>...
<pkg-type>
    - {deb|deb-src}
    * 包的类型.
    * `deb` 表示 .deb 包.
    * `deb-src` 表示 deb 源码包.
<url>
    * 存储库的 URL.
    * 支持 http/https.
<distro>
    * Linux 发行版的名称.
    * 仓库源提供者叫你怎么填，你就怎么写就好.
<component>
```
