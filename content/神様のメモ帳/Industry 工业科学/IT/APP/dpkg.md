---
tags:
- flag/Platform/Linux独占
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/PackageManagement
---

[系统安装包管理工具 | Escape](https://www.escapelife.site/posts/74caf2e7.html)


```bash
dpkg command
Description:
    * dpkg 是 Debian/Ubuntu 的软件包管理器.
    * dpkg 支持 deb 包.
    * dpkg 支持 从.deb文件安装软件包.
    * dpkg 不支持 从源仓库安装软件包.
    * dpkg 对标 rpm.

Usage:
    dpkg [options] <subcommand> [args]

Subcommands:
    -i <package.deb>
        * 安装包
    -r <package>
        * 删除包
    -P <package>
        * 删除包和配置
    -l [package]
        * 列出包
        * dpkg -l 类似 apt list
        * dpkg -l <pacakge> 简化版 apt show <package>
        * Name, Version, Architecture, Description
    -L <package>
        * 列出与该包关联的文件
    -s --status <package>
    	* 查看 软件包信息
    	* 相当于 apt show
    -S <keyword>
        * 可用于 查找 指定文件属于哪个软件包
        * 可用于 列出 包含指定关键字的软件包の文件
    --config <package>
        * 配置包
    --unpack <package.deb>
        * 解压 .deb 文件
    -c <package.deb>
        * 列出 .deb 文件的内容

Options:
    --help
    --version

```
