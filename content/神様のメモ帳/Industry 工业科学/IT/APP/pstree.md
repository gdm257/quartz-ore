---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
---

- Installation
    - `sudo apt install psmisc`
    - `sudo yum install psmisc`

```bash
pstree command

Usage:
    pstree [options] [<pid>|<user>]

Examples:
    pstree    默认为 pid 1
    pstree 1    显示指定 pid/user 的进程树 (进程及后代)
    pstree 1234 -p -c    查看指定 pid 的进程树

Options:
    -p --show-pids
    -c --compact    展开进程树
    -a --arguments    显示进程的命令行
    -h <pid>    只显示指定 pid 及其后代

```
