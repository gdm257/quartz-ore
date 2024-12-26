---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
---

## htop

```bash
htop command
Installation:
    sudo apt install -y htop

Examples:
    htop
    htop --pid 1234
    htop --delay 20    2s 刷新一次

Usage:
    htop [options]

Options:
    --help
    -p --pid <pid[,pid,...]>    只显示指定的 PID
    -u --user <user>    只显示指定 user 的进程
    -t --tree    进程树视图，相当于 htop 版 pstree
    -d --delay <N>    刷新频率 N * 100 ms
    -s --sort-key help    获取 COLUMN 列表
    -s --sort-key <COLUMN>
        PID
        Command
        STATE
        PPID
        PGRP
        SESSION
        TTY_NR
        TPGID
        FLAGS
        MINFLT
        CMINFLT
        MAJFLT
        CMAJFLT
        UTIME
        STIME
        CUTIME
        CSTIME
        PRIORITY
        NICE
        ITREALVALUE
        STARTTIME
        VSIZE
        RSS
        RLIM
        STARTCODE
        ENDCODE
        STARTSTACK
        KSTKESP
        KSTKEIP
        SIGNAL
        BLOCKED
        SIGIGNORE
        SIGCATCH
        WCHAN
        NSWAP
        CNSWAP
        EXIT_SIGNAL
        PROCESSOR
        M_SIZE
        M_RESIDENT
        M_SHARE
        M_TRS
        M_DRS
        M_LRS
        M_DT
        ST_UID
        PERCENT_CPU
        PERCENT_MEM
        USER
        TIME
        NLWP
        TGID
        CTID
        VPID
        VXID
        RCHAR
        WCHAR
        SYSCR
        SYSCW
        RBYTES
        WBYTES
        CNCLWB
        IO_READ_RATE
        IO_WRITE_RATE
        IO_RATE
        CGROUP
        OOM
        IO_PRIORITY

```