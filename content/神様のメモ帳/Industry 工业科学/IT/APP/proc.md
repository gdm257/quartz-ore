---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Kernel
---

## /proc/

[Linux allocated devices (4.x+ version) — The Linux Kernel documentation](https://docs.kernel.org/admin-guide/devices.html)

[Documentation for /proc/sys — The Linux Kernel documentation](https://docs.kernel.org/admin-guide/sysctl/index.html)

[Linux ABI description — The Linux Kernel documentation](https://docs.kernel.org/admin-guide/abi.html)

[16.4 特殊文件与程序 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/142.html)

[Shell：彻底搞懂shell的高级I/O重定向 | 骏马金龙](https://www.junmajinlong.com/shell/fd_duplicate/)

[深度系统监视器原理剖析](https://manateelazycat.github.io/deepin/2017/07/22/deepin-system-monitor.html)


```bash
/proc/<self>    软连接 /proc/<pid>，哪个进程发出的调用，<pid> 就是哪个
/proc/<pid>    指定进程的各种信息
/proc/<pid>/fd/    指定进程的文件描述符
/proc/<pid>/fd/0
/proc/<pid>/fd/1
/proc/<pid>/fd/2

```