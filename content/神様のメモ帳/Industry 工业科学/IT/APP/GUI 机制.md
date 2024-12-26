---
tags:
- Label/Article/Industry-工业科学/IT/APP/OS/Linux
---

- GUI 开发逻辑
    1. Layout
    2. Widget
    3. onEvent
    4. Callback
    5. DTO
    6. Service
    7. Model

参考

[深度桌面操作系统架构设计](https://manateelazycat.github.io/deepin/2017/02/02/dde-framework-design.html)

[Ubuntu放弃战斗, Linux桌面的悲哀](https://manateelazycat.github.io/opensource/2017/04/09/ubuntu-give-up.html)

[我的窗口管理器使用观](https://manateelazycat.github.io/linux/2021/03/12/window-manager.html)

[Linux全局事件监听技术](https://manateelazycat.github.io/linux/2017/03/21/linux-global-event-monitor.html)

[23.1 什么是 X Window System | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/202.html)

[Cygwin系列（十二）：了解X - 知乎](https://zhuanlan.zhihu.com/p/134325713)

[Cygwin系列（十三）：折腾X - 知乎](https://zhuanlan.zhihu.com/p/427637159)

[WSLg：为WSL增光添彩 - 知乎](https://zhuanlan.zhihu.com/p/377263437)

[Linux Cygwin知识库：图形技术栈 - 知乎](https://zhuanlan.zhihu.com/p/503627248)

[SSH X11 Forward](https://dreamanddead.github.io/post/ssh-x11-forward/#ssh-x11-forward)

[使用X11 Forwarding在WSL 2中运行GUI程序 | ddadaal.me](https://ddadaal.me/articles/run-gui-on-wsl2-with-x11-forwarding)

[X11-forwarding是什么 · 为秀](https://www.forxiu.cn/what-is-x11-forwarding/)

[在Docker for Windows中运行GUI程序 - larva-zhang - 博客园](https://www.cnblogs.com/larva-zhh/p/10531824.html)

[wslg初体验：最佳Linux发行版？ | ddadaal.me](https://ddadaal.me/articles/wslg-first-experience)

[依云's Blog](https://blog.lilydjwg.me/tag/%E6%98%BE%E7%A4%BA%E9%A9%B1%E5%8A%A8)

[图形的未来](http://happyseeker.github.io/graphic/2016/11/10/the-future-of-the-desktop.html)

[luong-komorebi/Awesome-Linux-Software: A list of awesome applications, software, tools and other materials for Linux distros.](https://github.com/luong-komorebi/Awesome-Linux-Software)



GUI App
sudo apt install -y
    x11-apps nautilus
    grub-customizer
    gedit gimp vlc mpv

MobaX 用着还不错.
VcXsrv 经常打不开软件、闪退，不推荐.


1. X
2. Mir
3. Wayland

基于 X/Wayland の各种桌面环境
    KDE 1998
    GNOME 1999
        GNOME3
        Unity 2010
        MATE
        Cinnamon
    Xfce
    LXDE
    LXQt

Window Manager
    awesome
    dwm
    i3 WM
    Fluxbox
    Openbox
    JWM
    Fvwm
        fvwm95
    Sway
    Compton


X Window System 的 TCP 直连方案

- Windows 安装 X Server 如 `VcXsrv` `MobaX`，运行，其会自动监听 `:6000`
- WSL 的 `~/.bashrc` 设置 `export DISPLAY=localhost:0.0`
- WSL `apt install x11-apps` 安装一些 GUI 程序
- Windows 里 ssh/wsl 进入 shell，在命令行运行任意 GUI 程序
- Windows 里出现该 GUI 程序，则成功

X 的 SSH X11 Forwarding 方案

- Windows 安装 X Server 如 `VcXsrv` `MobaX`，运行，其会自动监听 `:6000`
- WSL 的 `~/.bashrc` 设置 `export DISPLAY=localhost:10.0`
- WSL 的 `/etc/ssh/sshd_config` 设置 `X11Forwarding yes` `X11DisplayOffset 10`
- WSL `apt install x11-apps` 安装一些 GUI 程序
- Windows 的 ssh 的 `ssh_config` 文件配置 `Host * - ForwardX11 yes`，或者 `ssh` 命令开启 `-X` 选项。设置好的 ssh client 成功登录后，会自动调用 sshd 监听 `6010` 端口（即 `X11DisplayOffset 10`），ssh 连接断开时，sshd 停止监听.
- Windows 里通过 ssh 进入 shell，在命令行运行任意 GUI 程序
- Windows 里出现该 GUI 程序，则成功
- 缺点很明显，必须 ssh -X 后在 shell 里启动 GUI Application，因为只有 ssh -X 登录时 sshd 才会监听 `6010` 端口，并且通过 SSH 隧道转发给 X Server。因此，建议在 WSL 或虚拟机中使用 TCP 方案，SSH X11 Forwarding 一般用于 VPS 以保证通信安全.




桌面环境可看作一个特殊的 x client？
是的，所以才说 window manager 是特殊的 x client，这个 x client 的图像内容就是对其他 x client 进行布局与合成.
这也解释了为何 linux vnc server 依赖于桌面环境，实际上是依赖于 wm，并且 vnc server 方案还要求 x server 跑在 VPS 上，vnc server 会将渲染好的最终图像发送给 vnc client，可以看出 VNC 实际上是在 X Window System 之上的又一个中间层.
如果只是在 wsl 运行 x application，完全没必要安装桌面环境.



“X11”采用了C/S的架构
X Server    监听显示器和键盘鼠标，发送事件，X Server运行在本地
X Client    X Client也叫X应用程序，收到设备事件后计算出绘图数据，，由于本身没有绘制能力，只能向X Server发送绘制请求和绘图数据，告诉X Server在哪里绘制一个什么样的图形。X Client可以和X Server在同一个主机上，也可以通过TCP/IP网络连接
Compositor (Window Manager)    Window Manager并非X Server的一部分，而是一个特殊的X Client程序，多个X Client向X Server发送绘制请求时，各X Client程序并不知道彼此的存在，绘制图形出现重叠、颜色干扰等问题是大概率事件，这就需要一个管理者统一协调



X Client也叫X应用程序，常见的X应用程序诸如xterm、输入法、Web浏览器、Office套件等等。虽然平时写代码接触不到 X，但其实是 GUI 库（GTK+、Qt）封装了底层与 X Server 的通信。

X11只是规范，并不是代码实现。

1992年，XFree86项目顺利开展，作为X Window System的一个早期开源实现

2004年，http://X.Org基金会成立，开始领导X项目，不仅推动X规范本身发展，还在XFree86 4.4 RC2版基础上开发了X规范的另一个实现——X.Org Server。2019年发布的稳定版为1.20.5。

X Client方面，X.Org实现了2个开发库，Xlib和XCB，便于开发者（Qt GTK+）编写X应用程序。
X Server方面，X.Org Server实现了“X Window System”核心规范及多个扩展组件
Window Manager方面，X.Org Server继承XFree86项目的twm

众多X客户端程序中，有一个比较著名——xterm
它是基于X的终端模拟器，兼容VT102，也是X研发初期所计划的少数客户端程序之一。GNU/Linux发行版中设备/dev/tty1~tty6对应着6个全屏纯字符的终端模拟器，通过Ctrl-Alt-F1~F6切换，显示能力有限；如果运行到图形环境（通过Ctrl-Alt-F7切换），一般都集成了xterm，可配置的特性十分丰富，其他的诸如Gnome Terminal、Konsole、xfce-term等终端模拟器，或基于xterm，或参考xterm，增加了更多高级功能，如tab标签页、图片显示等。

服务器。X.Org Server占绝对统治地位，但也有其他衍生变种或移植，如XQuartz以及Cygwin/X、Xming、WeirdX，它们所支持的系统平台、底层库也都不一样。
基于XFree86、X.Org Server，有开发者将其移植到了Windows系统中，比较有影响力的有Cygwin/X、Xming、vcXsrv、MobaXterm、Xmanager

窗口管理器。常见如Metacity、Mutter、KWin、 vtwm、Xfwm、Compiz等，功能、风格各异，有的注重简洁高效，有的注重外观酷炫。

另一种应用场景，Linux主机通常作为服务器使用，未配备比较好的图形显卡等硬件，也没有必要部署X Server，从终端登录到Linux主机也仅有字符界面，那X应用程序该如何运行呢？可以在图形显卡等硬件设备比较好的Windows/Mac主机上部署X Server，保持与Linux主机网络连通，在Linux主机上写好配置文件，配置好X Server地址和X11请求转发（X11 Forwarding），从任意一个终端登录到Linux主机并启动X客户端应用程序，就可以使程序的图形界面显示在Windows/Mac主机上，并与用户交互。事实上，在1990年代初期，就有这样的硬件设备，称为“X终端机（X terminal）”，专门部署X Server，将远端UNIX主机上的图形界面程序显示出来，这也正是MIT研发X的初衷之一。

一方面，X工作在用户空间，X客户端程序不能直接访问显示驱动、X Server与X客户端及窗口管理器之间繁琐的通信流程，拉低了绘图效率；另一方面，通过扩展、补丁手段允许在本地直接访问显示驱动，又造成稳定性问题。总之，X的设计随着新技术发展而显得臃肿、过度复杂，背负了沉重的历史包袱。

2013年，Ubuntu背后的开发商Canonical公司搞出来Mir项目，计划用Mir取代X并兼容X客户端程序，并且同时支持桌面设备和移动设备，统一用户体验。这种搞分裂的行为招致了批评，万万没想到的是，2017年Canonical公司又放弃了Mir项目并加大对Wayland的支持。

尽管有这样那样的问题，X仍然是GNU/Linux、UNIX上的主力

X Client和X Server的直接通信是不加密的，我们通过终端经由ssh远程登录Linux主机时，可以顺手利用ssh的X11转发（X11 Forwarding）功能，可以减小对配置的修改，也使得运行X Client程序更加安全。远端主机上X Client程序的绘图请求数据，也会被ssh服务器一并转发回来，ssh客户端根据配置的显示器，再交给指定的X Server处理。远端主机并不需要定义或修改DISPLAY环境变量，尽可能降低对其他用户、其他程序的影响。