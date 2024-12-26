---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Shell
---

## help

```bash
help system:
    info    more details
    man    manuals
    whatis    man -f
    help    只对 shell 内置命令有用
    tldr
    navi

whatis:
    whatis man
    whatis -w 'man*'    通配符
    whatis 是 man -f 的缩写
    (1)、用户可以操作的命令或者是可执行文件
    (2)、系统核心可调用的函数与工具等
    (3)、一些常用的函数与数据库
    (4)、设备文件的说明
    (5)、设置文件或者某些文件的格式
    (6)、游戏
    (7)、惯例与协议等。例如FHS、网络协议、ASCII码等说明内容
    (8)、系统管理员可用的管理条令
    (9)、与内核有关的文件

man shortcut
    下一页:
        * 空格
        * PageDown

    上一页:
        * PageUp

    下 1 行:
        * ⇩ Down
        * j

    上 1 行:
        * ⇧ Up
        * k

    下 N 行:
        * <N>, ⇩ Down
        * <N>, j

    上 N 行:
        * <N>, ⇧ Up
        * <N>, k

    向下搜索:
        * /<pattern>

    向上搜索:
        * ?<pattern>

    下一个搜索结果:
        * n

    上一个搜索结果:
        * N

```