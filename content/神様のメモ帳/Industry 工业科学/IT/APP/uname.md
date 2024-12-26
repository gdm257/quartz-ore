---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Kernel
---

## uname

```bash
uname command
Usage:
    uname [options]

Options:
    uname --help
    uname --version    uname version
    uname       等级于 uname -s
    uanme -a    print all infomation in the following order
    uname -s    内核名称 E.g. `Linux`
    uname -n    节点名（主机名？）
    uname -r    print kernel release E.g. `4.19.0-20-amd64`
    uname -v    print kernel version
    uname -m    print the machine hardware name硬件架构 E.g. `x86_64`
    uname -p    print the processor type
    uname -i    print the hardware platform
    uname -o    print the operating system

Description:
    * 内核识别
    * distro 识别
    * 架构识别

```