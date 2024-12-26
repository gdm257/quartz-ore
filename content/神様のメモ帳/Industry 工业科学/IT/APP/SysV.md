---
tags:
  - Label/Article/Industry-工业科学/IT/APP/OS/BootLoader
---

[CentOS 6开机流程(BIOS+MBR+SysV) | 骏马金龙](https://www.junmajinlong.com/linux/boot_process_bios_mbr/)

[19.1 Linux 的开机流程分析 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/166.html)

[17.1 什么是 daemon 与服务 （service） | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/148.html)

CentOS 6 System V init style 开机流程
大阶段:
    1. Kernal 加载前
    2. Kernal 加载
    3. Kernal 加载后

Kernal 加载前:
    - 给计算机供电
    - 主板开机针脚短接
    - CPU 针脚通电
    - CPU 成功运行
    - 运行 bios
    - 硬件自检
    - 硬件初始化
    - 读取 MBR (主引导记录)
    - 运行 MBR 的 boot loader
    - 读取 主分区 的 VBR 的 boot loader (如果分区安装了系统)
    - 读取 逻辑分区 的 EBR 的 boot loader (如果分区安装了系统)
    - 运行 该分区 的 boot loader
    - boot.img
    - core.img
    - 加载 OS Kernal 文件 (4MB)
    - 控制权交给 OS Kernal

Kernal 加载:
    (sysV init系统启动风格)
    - 创建进程 pid=0 Idle
    - 创建进程 pid=1 init
        - 内核进程
        - fork from Idle
        - [kernel_init] 内核线程
        - 能被ps捕获到的pid=1的init进程是kernel_init调用init程序后形成的
    - 创建进程 pid=2 kthread
        - 内核进程
        - fork from Idel
        - [kernel_kthread] 内核线程
        - 调用 init 程序之前完成内核环境初始化与设置
        - 加载 init ramdisk
            - 带有文件系统驱动
        - 保存各种信息
        - 转到 kernel_init
            - 挂载真正的根文件系统
            - 调用 init 程序 (我们所看到的 pid=1)
    - init 进程 (操作系统初始化)
        - (后续的事情将以用户空间为主导来完成)
        - 读取运行级别
            - 默认的运行级别为 3，即完整的多用户模式
            - 实际上，执行 关机 命令的本质就是向init进程传递0这个运行级别
            - 实际上，执行 重启 命令的本质就是向init进程传递6这个运行级别
        - 初始化系统类的环境
        - 根据运行级别初始化用户类的环境
        - 执行rc.local文件完成用户自定义开机要执行的命令
            - 登陆时是以图形界面的方式给用户使用，
              还是以纯命令行模式给用户使用呢？
              这是终端决定的，也就是说在登录前需要先加载终端。
        - 加载终端
            - 终端初始化
        - 登录
            - 用户名 & 密码
            - 进入 desktop
            - 进入 bash