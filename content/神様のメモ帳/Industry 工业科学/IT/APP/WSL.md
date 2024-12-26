---
aliases:
  - Windows Subsystem Linux
tags:
  - flag/License/GPL
  - flag/Platform/Windows独占
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer
frontmatter-as-page:
  - wsl-distros
commands:
  - wsl
  - wslconfig
---

## Brief

- Test
    - Windows 更新系统后，已有 WSL 1 distro 会无法使用，无论如何无法恢复。请在更新 Windows 之前将 WSL 1 转换为 WSL 2
    - [wsl.exe fails with "Access is denied" · Issue #4920 · microsoft/WSL](https://github.com/microsoft/WSL/issues/4920)


## CLI

[microsoft/WSL: Issues found on WSL](https://github.com/microsoft/WSL)

[Windows Subsystem for Linux Documentation | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/)

[Issues · microsoft/WSL](https://github.com/microsoft/WSL/issues)

[The Windows Subsystem for Linux](https://www.reddit.com/r/bashonubuntuonwindows/)

[Advanced settings configuration in WSL | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl-config)

[Automatically Configuring WSL - Windows Command Line](https://devblogs.microsoft.com/commandline/automatically-configuring-wsl/)

[GPU accelerated ML training in WSL | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/tutorials/gpu-compute)

[使用 WSL 运行 Linux GUI 应用 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps)

[在Windows10 WSL 2 上启用微软官方支持Linux GUI和systemd - 知乎](https://zhuanlan.zhihu.com/p/595867555)

[virtual machine - Vmmem does not automatically shut down after closing WSL2/WSLG/Vs Code on windows 11 - Stack Overflow](https://stackoverflow.com/questions/74426026/vmmem-does-not-automatically-shut-down-after-closing-wsl2-wslg-vs-code-on-window)

[Run Linux GUI apps with WSL | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps)

[Systemd support is now available in WSL! - Windows Command Line](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)

[WSL MS Store](https://aka.ms/wslstorepage)

[sirredbeard/Awesome-WSL: Awesome list dedicated to Windows Subsystem for Linux](https://github.com/sirredbeard/Awesome-WSL)

[Working across file systems | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/filesystems)

[Windows Subsystem for Linux Overview | Microsoft Docs](https://docs.microsoft.com/en-us/archive/blogs/wsl/windows-subsystem-for-linux-overview)

[Setup WSL Launch Configuration - WSL.CONF | RidiCurious.com](https://ridicurious.com/2019/07/25/setup-wsl-launch-configuration-wsl-conf/)

[跨文件系统工作 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/filesystems)

[如何在局域网的其他主机上中访问本机的WSL2 - 知乎](https://zhuanlan.zhihu.com/p/425312804)

[Accessing network applications with WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/networking)

[制作适用于 WSL 的任意 Linux 镜像 | 秋水逸冰](https://teddysun.com/646.html)

[WSL 配置指北：打造 Windows 最强命令行 - SegmentFault 思否](https://segmentfault.com/a/1190000016677670)

[折腾一下wsl（安装篇） | ANON's blog](https://qqqasdwx.github.io/2018/12/25/d35b4b4a.html)

[WSL 使用中遇到的问题及解决方案 #2 - DrvFs 文件系统权限问题 - P3TERX ZONE](https://p3terx.com/archives/problems-and-solutions-encountered-in-wsl-use-2.html)

[Fix Windows Subsystem for Linux (WSL) File Permissions · Brian's Blog](https://www.turek.dev/posts/fix-wsl-file-permissions/)

[WSL文件读写权限的配置方法 | Cloud's Blog](https://zuyunfei.com/2018/07/06/use-docker-in-wsl/)

[wslg初体验：最佳Linux发行版？ | ddadaal.me](https://ddadaal.me/articles/wslg-first-experience)

[解决WSL下目录显示绿底的问题 - One Blog | 文鹃阁](https://szukevin.site/2019/10/17/%E8%A7%A3%E5%86%B3WSL%E4%B8%8B%E7%9B%AE%E5%BD%95%E6%98%BE%E7%A4%BA%E7%BB%BF%E5%BA%95%E7%9A%84%E9%97%AE%E9%A2%98/)

[取消Ubuntu(wsl)文件夹底色 - 掘金](https://juejin.cn/post/6844904199319191566)

[在WSL环境下修改文件夹的颜色 - 少数派](https://sspai.com/post/39499)

[Shell 环境 | Dev on Windows with WSL](https://dowww.spencerwoo.com/2-cli/2-2-shell.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

[WSL 2 上启用微软官方支持的 systemd - wswind - 博客园](https://www.cnblogs.com/wswind/p/wsl2-official-systemd.html)

[wsl2固定IP解决方案 - 张子庭的博客](https://www.loyating.com/articles/23)

[WSL2设置静态IP_浮叶蓝空的博客](https://www.milinger.com/a244.html)

[Cygwin 和MinGW 的区别与联系是怎样的？ - 知乎](https://www.zhihu.com/question/22137175/answers/updated)

[Cygwin系列（一）：Cygwin是什么 - 知乎](https://zhuanlan.zhihu.com/p/56692626)

[Cygwin系列（二）：初窥Cygwin背后 - 知乎](https://zhuanlan.zhihu.com/p/57258281)

[Cygwin系列（三）：盘点与Cygwin相似和相反的项目 - 知乎](https://zhuanlan.zhihu.com/p/57774611)

[Cygwin系列（十）：折腾终端1 - 知乎](https://zhuanlan.zhihu.com/p/99963508)


```bash
wsl command
Usage:
    wsl <options> [command line]
    wsl <command> [options]
    <distro> [...]

Options:
    -d --distribution <distro>
    -u --user <username>
    --cd <dir>
        ~ 表示 Linux 用户 home 目录
        / 开头，将被解释为绝对 Linux 路径
        否则，该值一定是绝对 Windows 路径

Commands:
    --help
    -l --list [sub-option]
        --all    默认行为
        -q --quiet    仅显示分发名称，类似 ls
        -v --verbose    类似 ls -l
        --online    可在线下载的分发
        --running
    --install -d <distro>    安装Windows App，然后运行App安装子系统
    --set-default-version {1,2}    指定默认WSL版本
    --set-version <distro> {1,2}    转换子系统的WSL版本
    -e --exec <command line>    注意options要写在--exec之前
    -t --terminate <distro>
    --shutdown    终止所有子系统
    --unregister <distro>    卸载分发
    --export <distro> <output-filename>    导出分发包
    --import <distro> <path> <tar-file>    安装分发包到指定位置
    --status    查看WSL全局状态
    --update
        * 更新 WSL 本身（例如 Linux Kernel、WSLg）
        * 注意这不是更新 distro
        * 可以看出所有 distro 共用同一 Linux Kernel

Examples:
    # Windows App command
    ubuntu.exe    启动子系统
    ubuntu config --default-user root
    ubuntu /?
    # wsl command
    wsl -d ubuntu -u root    以 root 用户启动子系统
    wsl -d ubuntu --exec ls /    类似docker-compose exec
    wsl -d ubuntu ls / #只能1个命令，不能 && ; || |，会算作当前 shell
    wsl -d ubuntu -u root ls /
    wsl -d ubuntu -u root bash /root/init.wsl start
    wsl --export Ubuntu-20.04 "E:/ubuntu-20.04.tar"
    wsl --install -d Debian
    wsl --install -d Ubuntu-20.04
    wsl --install -d Ubuntu
    wsl --install -d kali-linux
    wsl --install -d openSUSE-42
    wsl --install -d SLES-12
    Get-AppxPackage -allusers | Select Name, PackageFullName #列出App
    get-appxpackage 'CanonicalGroupLimited.Ubuntu20.04onWindows' | remove-Appxpackage
    get-appxpackage 'CanonicalGroupLimited.Ubuntu18.04onWindows' | remove-Appxpackage
    get-appxpackage 'TheDebianProject.DebianGNULinux' | remove-Appxpackage    #删除Windows App，不影响WSL使用，例如要删除 Debian App





WSL 和 Windows 共享一个特殊环境变量 WSLENV（为了桥接 Windows 和 WSL 上运行的 Linux 分发版而创建）。

wsl 1 性能远比 wsl 2 好。但 wsl 2 拥有完整 Linux 内核，兼容性更好（然而还是比不上虚拟机，不过资源占用比虚拟机低不少）。轻度使用推荐 wsl 1，遇到兼容性问题上 wsl 2
wsl 1 使用 rootfs 文件夹；
wsl 2 使用 ext4.vhdx 文件；

WSL 与 Windows 共享网络栈，也就是说你可以：

    在 WSL 中启动 web server，在 Windows 上使用浏览器访问；
    在 Windows 下启动 MySQL/Redis 服务器，在 WSL 中连接；
    诸如此类。

亲测，WSL1 WSL2 都共用端口，本机都能 nmap 扫到，但 WSL2 的局域网还不确定，至少 LANraragi 是用不了的。

进一步测试，WSL2 虽然和 windows 共享端口（自动映射了端口），但 WSL2 开放的端口只能本机访问，也就是 windows 才能访问，局域网的手机访问不了。


$ sudo umount /mnt/e
$ sudo mount -t drvfs E: /mnt/e -o metadata





0. 代理

和虚拟机代理无异。简单办法是 proxychains + 配置 ss 本地端口, 复杂点的 windows 层面软件 proxifier sstap 甚至 clash(wintun) 也是可以把 WSL 流量拦截的, 毕竟 WSL 网络是基于 NT 内核来实现的

PS：WSL 和 windows 是互通的。不仅共用一套端口，而且 WSL 的 localhost 就是 windows 的 localhost，能直接用。

PPS：WSL 中的 `sudo <command>`命令等价于在 windows 下运行 `<command>`，这点要注意，至少在 Fedora 是这样的。

PPS：WSL 中通过 /mnt/<c|d|e> 来访问 windows 盘，不过不支持 rclone mount、DriveFileStream。



1. 启用 WSL1

win搜索–>控制面板–>程序–>卸载程序–>启用或者关闭 Windows 功能–>勾选虚拟机平台和适用于 Linux 的 Windows 子系统->重启计算机

WSL1 不需要 hyper-v
WSL2 基于 hyper-v


1.1 启用 WSL 2
准备：
1. 控制面板 - 程序 - 程序和功能 - 启用 VirtualMachinePlatform 虚拟机平台
或者
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
2. 安装

wsl -l -v  # 查看子系统及其 WSL 版本
wsl --list --verbose
wsl --status
wsl --set-default-version 2  #默认使用 WSL2
wsl --set-version <distro_name> 2  #转换为 WSL2，对指定子系统
wsl --set-version <distro_name> 1  #转换为 WSL1



2. 安装一个 Linux 发行版

目前在用 Fedora 35，功能齐全、体积不大、没遇到兼容性问题。Ubuntu 太大，Manjaro 太重，Alpine 有潜藏的坑，Debian 没有 rootfs 包安装起来麻烦，Arch 配置起来太麻烦，Kali 没必要。

wsl --list --online  # 列出在线可下载的子系统
wsl --install --distribution <Distribution Name>  # 下载子系统
wsl --install -d Debian
wsl --install -d Ubuntu-20.04
wsl --install -d Ubuntu
wsl --install -d kali-linux
wsl --install -d openSUSE-42
wsl --install -d SLES-12
wsl --update  #更新 Linux kernel

windows打开微软应用商店（store），在搜索框中输入Linux进行搜索，在搜索结果中有很多Linux发行版可以选择，开始你的选择，获取该发行版（如 Ubuntu），然后安装。

有时候，你可能无法（或不想）通过 Microsoft Store 安装 WSL Linux 发行版，比如说，你运行的可能不支持 Microsoft Store 或公司网络策略和/或管理员在你的环境中不允许 Microsoft Store 使用的 Windows Server 或长期服务（LTSC）桌面操作系统 SKU。 在这些情况下，虽然 WSL 本身可用，但如果你无法访问应用商店，如何下载并在 WSL 中安装 Linux 发行版？

[手动下载适用于 Linux 的 Windows 子系统 (WSL) 发行版 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual)

curl.exe -L -o ubuntu-2004.appx  https://aka.ms/wslubuntu2004

下载好 .appx 文件，Powershell 执行安装（WSL1 推荐 Ubuntu 1804，听说 2004 有兼容性问题）。单个appx应用程序针对特定架构，appxbundle包含创建包时提到的所有架构支持。可以双击安装，也可以用 powershell 命令安装 App：

Add-AppxPackage .\ubuntu-2004.appx

安装完成后可在开始菜单里找到 Ubuntu 的快捷方式，运行一次才会创建子系统。注意 Add-AppxPackage 命令是安装 App（UWP 应用），打开这个安装的应用后才会创建子系统。所以删除时子系统、App 要分别删除。

Get-AppxPackage -allusers | Select Name, PackageFullName  #列出App
get-appxpackage CanonicalGroupLimited.Ubuntu18.04onWindows | remove-Appxpackage    #例如要删除Ubuntu1804
完成后可以重新在Windows Store里面下载应用

wslconfig /list
wslconfig /u <name> 卸载指定子系统
wsl --list 查看已安装的发行版
wsl --unregister <name> 卸载指定子系统

[Ubuntu 16.04 LTS - Microsoft Store](https://www.microsoft.com/p/ubuntu-1604-lts/9pjn388hp8c9)
[Ubuntu 18.04 LTS - Microsoft Store](https://www.microsoft.com/store/apps/9n9tngvndl3q)
[Ubuntu 20.04 LTS - Microsoft Store](https://www.microsoft.com/store/apps/9n6svws3rx71)




3. 运行 WSL

wslconfig /setdefault ubuntu
ubuntu config --default-user username #设置默认登录用户
ubuntu /?
wsl.exe ~ -d Ubuntu-20.04 -u root
wsl --distribution <Distribution Name> --user <User Name>
<DistributionName> config --default-user <Username>
wsl --shutdown  #terminates all running distributions
wsl --shutdown <Distribution Name>
wsl --terminate <Distribution Name>
wsl --export <Distribution Name> <FileName>  # Export a distribution to a TAR file
wsl --import <Distribution Name> <InstallLocation> <FileName>
wsl --mount /path/to/mount/in/wsl  #windows磁盘挂载到 wsl

cat /etc/resolv.conf # 获取 windows 的 IP。WSL2 网络结构类似 virtualbox 的 host 模式，不过 Windows 主机的 IP 是动态分配的，所以不仅是代理需要 windows IP，而且 wsl 里的 server 还要像虚拟机那样做端口转发。




C:\Program Files\WindowsApps\CanonicalGroupLimited.Ubuntu20.04onWindows_2004.2020.424.0_x64__79rhkp1fndgsc\ubuntu2004.exe

或者开始菜单里找到 Ubuntu 的快捷方式，第一次打开需要几分钟时间初始化。



4. 配置 SSH、root

有些发行版没有 apt yum etc. 安装工具。例如 Alpine 没有 apt，得用 apk 命令。

sudo passwd root

sudo vi /etc/ssh/sshd_config
sudo sed -i '/Port /c Port 23' /etc/ssh/sshd_config
sudo sed -i '/ListenAddress 0.0.0.0/c ListenAddress 0.0.0.0' /etc/ssh/sshd_config

sudo service ssh start       #启动SSH服务
sudo service ssh status      #检查状态
sudo systemctl enable ssh    #开机自动启动ssh

sudo vim /etc/sudoers
root ALL=(ALL) ALL
newUsername ALL=(ALL) ALL



5. 网络

一句话，WSL1 与普通软件无异，共用 Windows IP、网卡，CFW TUN 走代理，CFW 不开 TUN 则走直连。

WSL1 是共享宿主机的网络栈，即 WSL1 共享主机 IP，并没有自己独立的逻辑网卡，也即没有自己独享的 IP 地址。类似于 Docker 网络的 host 模式。

wsl2 则可以理解为宿主机完整虚拟出来的一个完整的 Linux 虚拟机，拥有自己的逻辑上独立的网卡，也即拥有属于自己的独立网络栈。与 VMware 的 bridge 模式和 docker 的 macvlan 模式类似。

hyper-v 的保留端口才是大坑，导致 8080，3306 等端口提示被占用，但是通过命令行查询不到使用该端口的进程



6. Docker

WSL1 用不了 Docker，散了吧。能安装但 run 不起来。



7. 其他

WSL和Win10共享同一套端口，如果出现两者监听同一个端口的情况，Windows主系统的程序拥有更高的优先级。

WSL和Windows主系统之间的文件系统是可以互相访问的。（本质是 WSL 自动将 Windows 的盘符挂载到 /mnt/c /mnt/d 下了）

如果在Windows系统中访问WSL的文件，
C:\Users\{你的用户名}\AppData\Local\Packages\{Linux发行版包名}\LocalState\rootfs
%LOCALAPPDATA%\Packages\{Linux发行版包名}\LocalState\rootfs
就是 WSL 的根目录。

WSL没有“原生”搭载桌面环境，需要自己安装，例如 X Server。




但 WSL 中，无论是 SysV 还是 systemd 都不会生效。如果尝试使用 `systemctl`，会报错 `System has not been booted with systemd as init system (PID 1). Can't operate.` '

目测 WSL 的启动方式被微软大量魔改，要想启动还得手动执行 `service`

    sudo service ssh status





VM 虚拟机
VB 虚拟机
WSL 虚拟机
WSL2 虚拟机
Cygwin 轻量级虚拟机
Wine 轻量级虚拟机

Cygwin 基于模拟 POSIX 子系统，提供Windows下的类Unix环境，后续移植了许多 Linux 应用
MSYS 精简版 Cygwin
MSYS2 更加新的精简魔改版 Cygwin，由于 MSYS 万年不更新而开发的
MinGW 用于 32 位 Windows 开发的工具链，并非环境
MinGW-64 用于 64 位 Windows 开发的工具链
MinGW是Minimalistic GNU for Windows的缩写
Cygwin则是全面模拟了Linux的接口
工具链与环境的的关系，参考 GNU 与 Linux
Wine 工作原理是在运行时通过一个Wine Server进程将Windows系统调用“翻译”成为POSIX兼容的等价调用

修改编译器,让window下的编译器把诸如fork的调用翻译成等价的形式，这就是MingW的做法。

让Windows提供一个类似Unix提供的库,他们对程序的接口如同Unix一样,而这些库,当然是由Windows的API实现的，这就是Cygwin的做法

甚至可以看作MinGW没有增加中间层，而Cygwin加了个中间层

Cygwin对Linux的模拟比较完整，MinGW从原理上也能看出实现更加复杂，导致MinGW的发展速度，于是不断发展的Cygwin在兼容性上就超越了MinGW，不仅如此，Cygwin不单单是提供App所需的库，还发展成了一个Linux环境

Cygwin是用一个dll模拟linux环境来“欺骗”应用程序，好像自己运行在linux环境下,运行时都需要这个中间模块，所以运行起来会慢一些。在cygwin下编译出来的程序其实还是 windows binary

WSL 是内核级别的虚拟，兼容性很高了，微软亲儿子，不开源；

Cygwin是把 Linux 程序编译成 Win32 程序，程序 link 到 CygwinX.dll 模拟常用的 POSIX 要求的内核 API；而 WSL 是直接运行原生 Linux 程序，通过 NT 内核上架设的兼容层模拟 Linux 内核的行为，将程序的内核调用转为 NT 调用

再说简单点就是：Cygwin的程序尽管多数都是位Linux/Unix设计的，但是通过特殊手段移植成了普通 Win32 程序，这些程序不能跑在 Linux 上了；WSL 像模拟器一样直接运行 Linux 程序，这些程序就是从 Linux 没做任何修改直接 Copy 过来的。

由cygwin1.dll提供POSIX API，并基于cygwin1.dll移植了大量GNU、BSD的软件包，这些软件包的源码在cygwin环境中重新编译的时候，都会默认链接到cygwin1.dll，因此编译的结果仍然是Windows PE格式，在运行时依赖cygwin1.dll。cygwin本身无法支持Linux ELF格式二进制程序。

```


## Configuration

[Advanced settings configuration in WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configure-global-options-with-wslconfig)


- `~/.wslconfig` in Windows i.e. `%UserProfile%/.wslconfig` 全局级，仅对所有 WSL 2 Distro 有效
- `/etc/wsl.conf` in distro


- Init:
    最终结论:
        初次启动 distro 请用 /etc/wsl.conf - [boot].
        每次 shell 请用 ~/.bashrc.
        每次 --exec 请手动调用，并不支持自动 hook.
    其他探索:
    --exec 不会加载 ~/.bashrc，即便 -u root
    --exec 可能不加载任何脚本，而不单单是 ~/.bashrc
    /etc/rc?.d 虽说WSL是SysV风格，但SysV完全不生效，不会启动任何东西
    chkconfig 同上，完全不管用
    /etc/init.wsl 完全无效

- DrvFs:
    为了互操作 WSL 与 Windows filesystem 在 Build 17063 所加的中间层

- FAQ:
    1. 为什么 wsl -u root --exec 不需要输入密码？
       因为是通过 wsl 调用的，wsl 有自己的 init
    2. 为什么连上 wsl 里的 ssh server，无法调用 .exe 命令？


无法从手机登录 WSL2 的 SSH，但微软又说 WSL2 已经支持端口共享了，我一度以为是什么 bug，最后发现端口的确是共享了，但只能在 Windows 里访问，也就是说，source ip 必须是 Windows 的网卡 ip，除此以外的 ip，无论是局域网 ip 还是公网 ip，都会被直接拒绝。效果等价于 docker 的 expose……神坑呀，到最后还是得端口映射



```bash
wsl.conf:
    Info
        Path: /etc/wsl.conf
        Target distro: WSL 1 or 2 distro
        File type: 普通文件，不能是软连接
        Syntax: ini
            * 支持 '#' 注释
            * 不支持 ';' 注释
            * 支持 双引号包裹字符串
        Windows version: Build 17093+
        The 8 second rule: 终结 distro 实例后，需要 8 时间使配置生效.
                           最好直接
                           wsl --shutdown
                           wsl --list --running
                           等 8 秒再启动 distro.
                           如果无效，重启 LxssManager 服务再等 8 秒
                           Restart-Service LxssManager

    [automount]
    enabled = true
    mountFsTab = true
    root = /mnt/
    options=stirng of comma-separated list of values in
            uid=The default User ID of your WSL distro,
            gid=The default group ID of your WSL distro,
            umask=000,
            fmask=000,
            dmask=000,
            metadata,    (flag)
            case=off
            E.g. options = "metadata,umask=22,fmask=111"

    [network]
    generateHosts = {true, false}
                    generate /etc/hosts,
                    which contains hostnames corresponding IP
    generateResolvConf = {true, false}
                         generate /etc/resolv.conf
    hostname = 给 distro 指定 hostname
               i.e. 在 Windows 可以通过设置的 hostname 访问 WSL
               E.g. hostname = ubuntu.sao
               通过 'ubuntu.sao' 或 'ubuntu.sao.localdomain' 访问WSL

    [interop]    Build 17713+
    enabled = true
    appendWindowsPath = {true, false}
    	* 将 Windows 的 $PATH 追加进 WSL 的 $PATH

    [user]    Build 18980+
    default = root    默认用户

    [boot]    Windows 11 and Server 2022 ONLY
    command=command args    distro启动时(Stopped -> Running)的hook
    systemd = true    可以废弃 command 啦

.wslconfig:
    Info:
        Path: %UserProfile%/.wslconfig
        Syntax: ini file
        Target distro: WSL 2 distro ONLY

    [wsl2]
    localhostForwarding = true
    guiApplications = true    Windows 11 ONLY
    debugConsole = {false,true}    Windows 11 ONLY
    nestedVirtualization = {false,true}    Windows 11 ONLY

```


## Expose Distro

- Port
    - WSL 1
        - WSL 1 由于 distro 与 Host 共用网卡，本来就是通的，不需要端口映射
    - WSL 2
        - WSL 2 拥有独立虚拟网卡，拓扑结构中，就是两台独立的机器，端口映射是必须的
        - 好在 Windows 已支持自动将 Distro 的端口映射为 Windows 的 `127.0.0.1:<同号端口>`
- File
    - `\\wsl$\<DistroName>\home\<UserName>`


## Expose Host

- Idea
    - WSL 毕竟是虚拟化，无法直接管理硬件

- Hareware
    - Network
        - [Accessing network applications with WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/networking)
    - RAM
        - 虚拟内存，无需关心
    - CPU
        - 虽然不懂是不是直通，但早已完全无痛，无需关心
    - GPU
        - 目前不支持 GPU 直通
        - NVIDIA CUDA
            - 但好在支持调用 NVIDIA CUDA，也就是说，要想让 WSL 里的应用使用 GPU，就只能通过 CUDA 来调用
            - [Enable NVIDIA CUDA on WSL 2 | Microsoft Learn](https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl?source=recommendations)
        - NVIDIA CUDA within WSL Docker
            - Host
                - NVIDIA GPU Driver
            - Distro
                - install [[Docker|Docker]]
                - install NVIDIA Container Toolkit
                    - `distribution=$(. /etc/os-release;echo $ID$VERSION_ID)`
                    - `curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-docker-keyring.gpg`
                    - `curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-docker-keyring.gpg] https://#g' | sudo tee /etc/apt/sources.list.d/nvidia-docker.list`
                - Install the NVIDIA runtime packages and dependencies
                    - `sudo apt-get update`
                    - `sudo apt-get install -y nvidia-docker2`
                - Enjoy. Run a machine learning framework container and sample
                    - `docker run --gpus all -it --shm-size=1g --ulimit memlock=-1 --ulimit stack=67108864 nvcr.io/nvidia/tensorflow:20.03-tf2-py3`
                    - `cd nvidia-examples/cnn/`
                    - `python resnet.py --batch_size=64`
            - [GPU accelerated ML training in WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gpu-compute?source=recommendations)
    - Disk
        - Windows 默认会自动挂载 Host 的 C/D/E etc 盘到 `/mnt/c` `/mnt/d` `/mnt/e` etc。如需取消，可修改 `wsl.config`
        - 除了隐式的自动挂载，`/etc/fstab` 可以实现显式的自动挂载
        - [[rclone|rclone mount]] 也行，但性能较差
    - USB device
        - [Connect USB devices | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/connect-usb?source=recommendations)
    - GUI
        - WSL 2 支持 WSLg，可理解为自动完成了 graphic device 的配置
        - WSL 1 请自行在 Host (Client) 搭建 X11 Server，然后在 Distro 中修改环境变量已使用该 X Server
    - Bluetooth
        - 不支持


## Distro Migrate SOP

- Configurate .wslconfig
- Configurate wsl.conf
- Set WSL version
- Enter WSL distro
- 创建用户 loli
- [sudo] 修改 loli 密码
- [sudo] 获取 sudo 权限
- 临时 http_proxy
- [sudo] apt/yum/dnf 换源
- [sudo] apt/yum/dnf 安装
- 进入 screen
- [sudo] (SSH 更改端口)
- SSH 用户公钥
- SSH 公钥登录测试
- [sudo] (SSH 禁止密码登录)
- [loli] 安装 croc
- croc/rclone 上传 bin
- ln -s
- export PATH
- ~/.bashrc
    - export PATH
- [sudo] docker
- go
- node
- java
- python


```bash
# CentOS 7
yum install -y wget
yum install -y vim
yum install -y git
yum install -y screen
yum install -y mosh
yum install -y mtr
yum install -y traceroute
yum install -y netcat
yum install -y nload
yum install -y proxychains-ng
yum install -y zip
yum install -y unzip
yum install -y unar
yum install -y nmap
yum install -y fuse
# yum install -y golang
# yum install -y nodejs
# yum install -y nodejs:16

```



```bash
# Ubuntu 20.04

apt update
apt upgrade -y
# wsl --terminal <distro>
# wsl -d <distro>
python3 -V
fusermount -V
git --version
gpg --version
htop --version
tmux -h
mtr --version
readlink -f $(which nc)
apt autoclean -y
apt autoremove -y
apt install -y screen
apt install -y mosh
# apt install -y x11-apps
# apt install -y flatpak
apt install -y nload
# apt install -y ncdu
apt install -y proxychains-ng
# apt install -y ack
# apt install -y cloc
apt install -y zip
apt install -y unzip
apt install -y unar
# apt install -y monkeysphere
apt install -y nmap
apt install -y cmake gdb
apt install -y checkinstall
# apt install -y nodejs npm
# apt install -y golang-go
apt install -y python3-pip  \
    && pip --version  \
    && pip install --system pipx  \
    && pipx --version  \
        &&  \
        pipx install asciinema;  \
        pipx install visidata;  \
        pipx install csvtotable;  \
        pipx install pdm==1.12.8;  \
        apt install -y python3-virtualenv python3.8-venv  \
            && pipx install virtualenvwrapper
        # 需要环境变量 export PATH=$PATH':~/.local/bin'
curl -fsSL get.docker.com -o get-docker.sh  \
&& sudo sh get-docker.sh  \
&& rm get-docker.sh
apt autoremove
apt autoclean


```

