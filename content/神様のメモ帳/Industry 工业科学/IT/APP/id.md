---
aliases:
- id command
tags:
- flag/APP/UserGroup
- flag/APP/Process
- Label/Industry-工业科学/IT/APP/Command/CLI
---

[id 命令，Linux id 命令详解：打印真实以及有效的用户和所在组的信息 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/id.html)

- Installation
    - 详见 [[coreutils]] 的安装


```bash
id command
Usage:
    id [options] [user]
        - 不指定 user 默认为 current user
        - 不指定 options 默认打印 uid gid groups

Examples:
    id -u
    id -g
    id
    id root

Options:
    --help
    --version
    -u --user
    -g --group

```
