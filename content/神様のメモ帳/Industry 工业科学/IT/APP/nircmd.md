---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/Platform/Windows独占
    - flag/APP/Process
---

[NirCmd - Windows command line tool](https://www.nirsoft.net/utils/nircmd.html)

[windows 隐藏程序运行窗口 | 骏马金龙](https://www.junmajinlong.com/others/hide_window/)


```bash
nircmd command
Usage:
    nircmd <subcommand> [args]

Examples:
    nircmd exec min foobar2000.exe    运行 fb2k，以最小化窗口的方式
    nricmd cmdwait 60000 exec min foobar2000.exe    等 60s 再运行

Subcommands:
    exec {show|hide|min|max} <app [args]>
    exec2 {show|hide|min|max} [working-folder] <app [args]>
    cmdwait <number-of-milliseconds> <subcommand> [args]
        延迟执行其他子命令
    runas <[domain\]user> [password] <app [args]>
    elevatecmd <subcommand> [args]
        以管理员权限运行其他子命令（Windows vista/7/8 ONLY）
    killprocess {<path>|<process-name>|/<pid>}    杀死指定进程
    service <action> <service-name>
        start
        stop
        restart
        pause
        continue
        disabled
        auto
        manual
        boot    Only for drivers
        system    Only for drivers

Descriptions:
    * 功能非常丰富，子命令多到我懒得看，只挑了几个用得上的.

```