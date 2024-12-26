---
tags:
- Label/Article/Industry-工业科学/IT/APP/OS/Linux
---

[Linux allocated devices (4.x+ version) — The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/admin-guide/devices.html#terminal-devices)

[Linux Cygwin知识库（一）：一文搞清控制台、终端、shell概念 - 知乎](https://zhuanlan.zhihu.com/p/61369678)

[The TTY demystified](https://www.linusakesson.net/programming/tty/)

[Cygwin系列（十）：折腾终端1 - 知乎](https://zhuanlan.zhihu.com/p/99963508)

[终端、控制台和 Shell 的区别 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/40_console.html)


实体时代
    ~~console~~
    ~~teletypewriter (tty)~~
        按照计算机组成划分，终端设备仅仅是一个IO外设
        Unix 将这些 IO 设备抽象为 /dev/ttyN
    ~~video terminal~~
        E.g. VT100


仿真时代
Kernal Space
shell
psuedo tty (pty)
    E.g. System V (UNIX 98) style
    E.g. BSD style
User Space
    terminal emulator
        E.g. Windows Ternimal
        E.g. Cmder


大致分的话，就是 terminal emulator -> pty(ptm,pts,ttys) -> shell(bash, zsh) -> kernel

所以后来console变成什么了
似乎和 terminal emulator 是一个概念了
console现在其实没了 用kvm代替了


串口终端（Serial Port Terminal）
    串口在Linux系统中对应着设备 /dev/ttyS1、/dev/ttyS2……
    在Windows对应COM1、COM2……
    对串口的读写操作最后都反映到与之相连的外设上


/dev/ttyN
    /dev/tty1~tty6  称为 虚拟终端 (Virtual Terminal)
    可通过Ctrl-Alt-F1~F6切换
    /dev/tty0则指向用户当前正在使用的虚拟终端，
    如用户切换到/dev/tty4，那么/dev/tty0就指向/dev/tty4
/dev/pty/    pseudo terminal
/dev/pts/#
/dev/ttySN


现在物理终端实际上已经灭绝了，我们看到的所有 TTY 都是模拟视频终端，即软件仿真出来的终端。可以通过 toe -a 命令查看系统支持的终端类型，不要奇怪，这是一个挺长的列表。

上古时代，把那套直接连接在电脑上的键盘和显示器就叫做控制台。而终端是通过串口连接上的，不是计算机自身的设备，而控制台是计算机本身就有的设备，一个计算机只有一个控制台。计算机启动的时候，所有的信息都会显示到控制台上，而不会显示到终端上。这同样说明，控制台是计算机的基本设备，而终端是附加设备。计算机操作系统中，与终端不相关的信息，比如内核消息，后台服务消息，都可以显示到控制台上，但不会显示到终端上。

现在终端和控制台都由硬件概念，逐渐演化成了软件的概念。简单的说，能直接显示系统消息的那个终端称为控制台，其他的则称为终端(控制台也是一个终端)。或者我们在平时的使用中压根就不区分 Linux 中的终端与控制台。



终端模拟器（Terminal Emulator）
Terminal Emulator 是基于系统中已有的键盘、显示驱动而构建的 图形界面程序
其根本用途只有一个——模拟电子视频终端的功能，
前文所述的VT100就是被广泛模拟的对象
xterm是 X11 Window System 下的标配终端模拟器

伪终端（pseudo tty，缩写为pty）
终端、虚拟终端、串口终端是有真实物理设备相对应的，一方面数量有限制，另一方面在远程执行主机上的应用程序（比如sh、vi等）时，终端虽然通过基于TCP/IP协议的socket接口与主机连接了，但远程主机上的程序的标准输入、标准输出、标准错误无法关联到socket上，同时主机上的程序只有对终端设备操作才能正常运行，socket无法提供和终端设备兼容的IO模式、规范等。
     “All problems in computer science can be solved by another level of indirection（计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决）”。
pty 就是这样一个中间层，是UNIX/Linux内核中一对双向互联的设备，分为主设备（pty master）和从设备（pty slave），也称作“伪终端对（pty pair）”。
PTS是Pseudo Terminal Slave的缩写，即伪终端从站
pty虚拟出来一个master，你可以理解成一个坐在实体终端机前面的小人
pty又虚拟出一个slave，你可以理解成上古时代的终端机