---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/Virtualization/HostedHypervisors
winget: Oracle.VirtualBox
---

## VirtualBox

[VirtualBox - FreeBSD Wiki](https://wiki.freebsd.org/VirtualBox?highlight=%28%5CbCategoryVirtualization%5Cb%29)

[Chapter 22. Virtualization | FreeBSD Documentation Portal](https://docs.freebsd.org/en/books/handbook/virtualization/#virtualization-guest-virtualbox)

[理解 VirtualBox 网络 | 骏马金龙](https://www.junmajinlong.com/virtual/network/virtualbox_net/)

[How to install Microsoft Windows 11 on VirtualBox!](https://blogs.oracle.com/virtualization/post/install-microsoft-windows-11-on-virtualbox)

[Hyper-V vs VirtualBox: In-Depth Comparison](https://www.nakivo.com/blog/hyper-v-virtualbox-one-choose-infrastructure/)

- Description
    - VirtualBox 是一个开源的虚拟机程序
    - VirtualBox 实现了一个虚拟化引擎
    - Windows 的 VirtualBox 有 2 种虚拟化引擎，旧版引擎，运行在非 Hyper-V 环境；新版引擎（需要 VirtualBox 6+），基于 Hyper-V，推荐后者，这是大势所趋，前者迟早要淘汰的
    - 强烈推荐安装最新版 VirtualBox

- Commands
    - VBoxBalloonCtrl
    - VBoxBugReport
    - VBoxDTrace
    - VBoxExtPackHelperApp
    - VBoxHeadless
    - vbox-img
    - **VBoxManage**
    - VBoxNetDHCP
    - VBoxNetNAT
    - VBoxSDL
    - VBoxSDS
    - VBoxSVC
    - VBoxTestOGL
    - VBoxWebSrv
    - VirtualBox
    - VirtualBoxVM


## CLI VBoxManage

[Chapter 8. VBoxManage](https://www.virtualbox.org/manual/ch08.html)


```bash
VBoxManage command
Usage:
    VBoxManage <subcommand> [args]

Subcommands:
    help [subcommand]
    list [options] <string>
        string
            - E.g. "vms"
            - vms|runningvms|ostypes|...
        -l --long
        -s --sorted
    showvminfo
    startvm
    controlvm
    usbdevsource
        add <source-name> --backend=<backend> --address=<address>
        remove <source-name>
    createmedium [type] --filename <file> [options]
        type: disk|dvd|floppy
        --filename <file>
        --format {VDI|VMDK|VHD}
        --size <megabytes> | --sizebyte <bytes>
        --property <name>"="<value>
            - 可多次指定

Options:
    -h --help
    -v --version

Examples:
    vboxmanage --help
    vboxmanage internalcommands createrawvmdk -filename E:/usb.vmdk -rawdisk \\.\PhysicalDrive2

```


## USB启动

[VirtualBox从USB用UEFI引导启动Win10 - 知乎](https://zhuanlan.zhihu.com/p/375069685)


WinPE in VirtualBox

VB 运行各种 WinPE 其实很简单。新建虚拟机 - 不创建虚拟硬盘 - 虚拟机设置 - 存储 - SATA 控制器 - 光盘 - 选择 iso 镜像 - 保存设置 - 启动

VB 使用U盘启动比较麻烦，不推荐。必须创建一个虚拟硬盘文件。启动虚拟机时按 F12 进入 boot 界面，选择虚拟硬盘启动。

1. 磁盘管理`diskmgmt`，查看磁盘的数字 磁盘1 磁盘2……
2. 磁盘管理中脱机该磁盘
3. 管理员 cmd `VBoxManage internalcommands createrawvmdk -filename D:/PhysicalDrive.vmdk -rawdisk \\.\PhysicalDrive2`


## VirtualBox

[VirtualBox1、NAT模式下端口映射 - beautifulzzzz - 博客园](https://www.cnblogs.com/zjutlitao/p/7617741.html)

[VirtualBox 网络模式总结 | RQ BLOG](https://rqsir.github.io/2019/05/23/VirtualBox-%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%BC%8F%E6%80%BB%E7%BB%93/)

[详解Linux环境下各种代理设置 | JWang的博客](https://wangbjun.site/2020/linux/linux-proxy.html)

[不能打架！不能打架！Hyper-V终于可以跟其他虚拟机兼容啦！ - 知乎](https://zhuanlan.zhihu.com/p/133857209)

[networking - How to get VirtualBox VMs to use host's DNS? - Super User](https://superuser.com/questions/641933/how-to-get-virtualbox-vms-to-use-hosts-dns)

[虚拟化容器云计算系列文章 | 骏马金龙](https://www.junmajinlong.com/virtual/index/)


## Hyper-V 冲突问题

蓝叠系和采用VitrualBox的模拟器也会出现冲突，可以说开启Hyper-V后大部分模拟器都会产生冲突而无法运行，有这类软件使用需求的老鸽要注意了！

截至到2020年8月6日，绝大部分市面上的安卓虚拟机都与Hyper-V冲突。目前我只看到Bluestacks的beta版支持Hyper-V（在这里感谢我的朋友Syj）

Hyper-v靠着“巨硬”这个爸爸在Windows平台上也有非常优秀的表现，特别是最近Windows10新更新的“Windows沙盒”与“WSL2”这两个非常棒的工具就是使用Hyper-v虚拟技术实现的。

但是这又会遇到一个“致命”问题，那就是Hyper-v不能与vbox和vm共存，原因是Hyper-v的虚拟方式不一样，开启Hyper-v后会将用户的桌面系统给虚拟化，用户的桌面系统就会成为Hyper-v的虚拟系统，而Hyper-v的虚拟系统是不允许再开虚拟机的，因此开启Hyper-v后VM和Vbox就不能运行。

而Vbox在第六个版本（Vbox6.0）中新增了利用Hyper-v的api进行虚拟化系统，开启后，vb 就能和 hyper-v 快乐地共存了

指定vbox下的虚拟系统开启这个功能（先 cd 到 vb 目录）
`VBoxManage setextradata "<虚拟机名字>" "VBoxInternal/NEM/UseRing0Runloop" 0`

或指定vbox所有虚拟系统开启
`VBoxManage setextradata global "VBoxInternal/NEM/UseRing0Runloop" 0`

wsl2 依赖于 hyper-V


## 分区

虚拟机只需要 / 分区、swap 分区（4G），总大小最小 11G，日常使用推荐 15G。

物理机只需要 / 分区、swap 分区（大小等于物理内存，但最大 16G）、/home 分区（逻辑分区）

实际安装时发现进行到分区这个步骤时，看不到下一步的按钮，百度后得知有此遭遇的不在少数，是因为系统默认分辨率与电脑分辨率的差异导致的，解决方法也很简单粗暴，**左手按住alt右手鼠标往上拖动安装界面，即可显示完全内容，注意光标要放在窗口里面而不是放在窗口顶部！**……这个设计真是让人无力吐槽啊！已在 Ubuntu、Mint 测试过。

安装时不要启动虚拟机的网卡（断网），不然安装时间会很长。

## 安装增强功能

```bash

VirtualBox Guest Additions are installed.

To enable and start the required services:

sudo sysrc vboxguest_enable="YES"
sudo sysrc vboxservice_enable="YES"
相当于
sudo echo 'vboxguest_enable="YES"
vboxservice_enable="YES"' >> /etc/rc.conf
如果跑了 ntpd(8) 或 ntpdate(8) 还要追加
vboxservice_flags="--disable-timesync"

To start the services, restart the system.
or
sudo service vboxservice start
sudo service vboxguest start




#按主alt+鼠标拖动界面 就可以移动了！
sudo apt-get update
sudo apt-get upgrade
sudo apt install virtualbox-guest-additions-iso
#sudo apt-get install virtualbox-guest-dkms





#挂载光盘安装（推荐）
DesKtop 可以方便地 GUI 安装，但 server 则 CLI 安装

1. VB - 菜单栏 - 设备 - 安装增强功能
2. sudo mkdir /mnt/vb
2. sudo mount /dev/cdrom /mnt/vb && ls /mnt/vb  #挂载
3. sudo /mnt/vb/VBoxLinuxAdditions.run  #安装
4. sudo rm /mnt/vb
4. VB - 虚拟机 - 设置 - 共享文件夹 - 添加一些共享文件夹
5.1 可以在 VB 中设置自动挂载
5.2 sudo mount -t vboxsf <共享文件夹名称> /home/vb  # 虚拟机中用命令挂载指定的共享文件夹

如果安装失败，请尝试安装一些可能用到的依赖
sudo apt update
sudo apt upgrade
sudo apt install gcc make dkms build-essential
sudo apt search linux-header
sudo apt install linux-headers-4.19.0-20-amd64
sudo apt install linux-headers-`uname -r`-amd64

如果挂载失败 `./sbin/mount.vboxsf:mounting failed with the error:No such device`
首先，确认 VBoxLinuxAdditions 是否安装成功，然后
sudo vim /etc/rc.local #追加一行
modprobe -a vboxguest vboxsf vboxvideo
还不行，可能实际上是因为增强功能没有成功安装

```


经过实测，终于找到方法了：

1. 安装 Manjaro
2. pacman 换源 arch
3. pacman 添加源 arch linux cn
4. sudo pacman -Sy base-devel linux-headers
5. 重启虚拟机
6. 菜单栏 - 设备 - 安装增强功能（如果失败，得先去创建光驱：虚拟机 - 设置 - 存储 - 控制器 IDE - 添加虚拟光驱 - 留空）
7. 回到虚拟机中，文件管理器 - 侧栏 - 可移动设备 - 点击进入刚刚挂载的光盘 - 右键 - 在此处打开终端 - 执行「sudo ./xxxxxx.run」，这个文件夹下只有 1 个 .run 后缀的文件，自己看叫什么吧，执行了没报错就安装完成了
8. 重启虚拟机

点击安装增强功能选项。
在manjaro中打开文件管理，左侧往下拉，会有个磁盘管理，这里面会多一个已经挂载的磁盘
点击磁盘进入该磁盘所在目录，在目录下右击root，打开命令窗口，输入./VBoxLinuxAdditions.run,：请安装与当前内核匹配的Linux内核“header”文件，原因是Linux4.19内核的RedHat内核版本的头文件的位置发生了变化，导致安装失败。解决办法：使用 sudo pacman -S linux-headers 命令 选择对应的内核版本 安装完毕后，重启系统，再次安装即可


## 扩容

`VBoxManage modifyhd D:\Temp\VirtualBox\Docker\Docker.vdi --resize 20480`

20480 单位是 M，即 20 G

扩容完用启动盘（如微PE）调整分区大小就好了。


## 自定义快捷键

全屏    1
自动调整显示尺寸    2
显示菜单栏    L
弹出菜单    P
截屏    J
热键    H
快照    S


## osboxes.org

Username: osboxes
Password: osboxes.org
