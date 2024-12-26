---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## cut

```bash
cut 功能和 awk 类似，都是基于 field
cut -d ":" -f 2
awk '{OFS=":"} {print $2}'


```


### ~~cmder~~

```bash
// 概述
我大致整明白 cmder-full 是个啥玩意了。

ConEmu.exe 是一个终端，支持多标签
cmder.exe 是一个 ConEmu 终端，魔改了主题
mintty.exe 是一个终端
git/bin/bash.exe 是一个终端
profile.ps1 不知道是啥，反正是 powershell 终端
mintty /bin/bash 不知道是啥，反正是 bash 终端（目测是 mintty + 精简版 msys2，无 pacman）

注意，ConEmu 有歧义，一是指 ComEmu 终端，对标 bash sh zsh mintty；二是指多标签的 GUI 界面。为了方便理解，约定后文用「ConEmu 终端」表示前者，用「ConEmu」或「ConEmu 界面」或「ConEmu.exe」表示后者。

cmder-full 实际上是利用了 ConEmu 多标签页的特性，对打开的标签进行了配置。例如，我们双击打开 cmder.exe 的时候，实际上是打开了 ConEmu.exe，但标签页并非是 ComEmu 终端，而是 cmder 终端。

我们打开新标签页时，选择的 bash::bash cmd::cmder 实际上就是在新标签打开了 cmder终端 git/bash终端 等终端（并非 ConEmu 直接调用终端，而是通过 ConEmu 先打开 cmd 或 powershell，然后 cmd 或 powershell 再打开你指定的终端，通常 exe bat 用 cmd 打开，ps1 用 powershell 打开）。

据我观察，「cmder 终端」应该只是「ConEmu 终端」的一个主题罢了。你打开 cmder.exe，跟打开 vendor/conemu-maximus5/ConEmu64.exe 的界面基本是一模一样的。执行命令的表现也基本是一样的。




再说说整个 Windows 终端环境（2020）。先说好，目前的所有、所有、所有方案，都无法达到原生 Linux 体验（除非你是轻度使用者）。一般来说，我们需要的命令行环境主要分为两大部分：linux 应用程序、终端模拟器（终端）。

linux 应用程序原生性按从高到低有 7 种选择：虚拟机、WSL2、WSL、Cygwin、MSYS2、MSYS、移植的 windows binary（scoop）。

虚拟机由于只能通过 ip:port 调用，不推荐；
WSL2 适合轻中度 linux 使用者，但必须开启 hyper-v，这玩意跟绝大部分虚拟机有冲突，VB with Hyper-V 目前体验极差，不推荐踩坑；VM 15.5+ with Hyper-V 没用过不多评价，不过估计问题绝不会少；Android Studio 自带的 AVD with Hyper-V 速度简直跟shi一样，Android 开发可以无视 Hyper-V 了
WSL 同样适合轻中度 linux 使用者，并且目前体验比 WSL2 要好（WSL2 是从头造轮子，并非基于 WSL）
Cygwin 适合更轻度的 Linux 需求，配置比 WSL 简单多了，运行效率不如 WSL，不过轻中度交叉编译还是没问题的
MSYS2 几乎只适合需要交叉编译的用户，比如 C++ 开发
MSYS 不再推荐，请用 MSYS2
移植 Windows Binary 适合没有「zsh tmux screen」「交叉编译」需求的用户，比如用不惯shi一样的 cmd powershell，想要 Linux 那样的终端，那么，scoop，请


终端模拟器的选择就很多了，主要有 ConEmu、git bash、mintty、zsh、windows terminal，你甚至可以拿 xshell putty mobaxterm 等 ssh client 当作终端模拟器。

因为可以在一个终端中启动另一个终端，所以你经常能看见什么 ConEmu + mintty、ConEmu + windows terminal、ConEmu + babun 之类的操作（或 cmder，cmder 是定制版 ConEmu）。这里拿 ConEmu 举例是因为 ConEmu 支持「多标签」，而且功能最齐全、稳定性高（虽然可能遇到点小毛病），可以通过 ConEmu 的新标签的方式打开其他终端。

我的终端体验是，想要 bash 体验，就 mintty 或 bash，差别不大；想要优化 powershell 及 cmd 的体验，windows terminal 或 cmder 都行，前者好看点；想要 zsh/screen/tmux，则必须要用 WSL/Cygwin/虚拟机。



// mintty /bin/bash
~/.minttyrc
背景不会跟随 ConEmu 设置，mintty 不支持。
git for windows 是基于 MSYS2 和 MinGW 的一个项目，但是是基于修改过的 msys2-runtime，不包括 pacman




// tmux & screen
使用 tmux，这个需要先安装下载 MSYS2 然后使用 pacman 安装 tmux ，之后将 tmux.exe 和 msys-event-2-1-4.dll 放在 Git\usr\bin 目录下，可直接使用以提取的文件 msys2-tmux-pkg-for-git.zip




// git/bin/bash
根目录 / 其实是 cmder/vendor/git-for-windows 目录，ls -l / 就能看的很清楚。不过在 bash 里这些目录里的内容和文件夹的实际内容相差很多，毕竟基于 MinGW64，bash 里会多出很多文件，估计是 dll 间接层造成的假象。

原版 git for windows 提示符是 $，cmder-full 带的 git for windows 的提示符是 λ，无法修改，要改只能整个替换。

更坑的是，旧版（191012）cmder 打开 bash::bash，主题是纯黑的，类似 xterm 配色。最新版 cmder 1.3.17 打开 bash::bash，主题跟随 ConEmu 设置（也就是 cmder 设置），同样无解，我服了

对于 bash，配置文件加载顺序
$CMDER_ROOT/config/profile.d/*.sh
$CMDER_ROOT/config/user-profile.sh
$HOME/.bashrc

查看：export -p
我看了下，bash 会自动导入系统环境变量、path
别名请修改 ./vendor/git-for-windows/etc/bash.bashrc

所谓BOM，全称是Byte Order Mark，它是一个Unicode字符，通常出现在文本的开头，用来标识字节序（Big/Little Endian），BOM的存在还可能引发一些问题。



// cmder

通过 cmd /k ""%ConEmuDir%\..\init.bat" [启动参数]"

别名文件 %CMDER_ROOT%\config\user-aliases.cmd，适用于 cmd
第二种方法，settings - 启动 - 环境 里设置

查看变量：echo %SCOOP%
查看 path：path

cmder/vendor/clink.lua 第 51 行更改提示符 λ 为 $，速度较快，但更新后设置会丢失。

Cmder启动的时候会默认加载[cmder_root]\config\目录下所有的.lua、.ps1、.cmd脚本，我们常用的一些别名就是通过user_aliases.cmd来配置的。利用这个原理，我们通过创建自己的lua函数，来更新提示符。（启动速度太慢了不推荐）

cmder/config/user_prompt.lua
function my_prompt_filter()
    cwd = clink.get_cwd()
    prompt = "\x1b[1;32;40m{cwd} {git}{hg}{svn} \n\x1b[1;30;40m{lamb} \x1b[0m"
    new_value = string.gsub(prompt, "{cwd}", cwd)
    clink.prompt.value = string.gsub(new_value, "{lamb}", "$")
end

clink.prompt.register_filter(my_prompt_filter, 1)




// powershell
更改提示符 λ 为 $：CMDER_ROOT\config\user-profile.ps1 第 70 行左右，将 λ 改成其他符号就行了

powershell 有一套完全不同于批处理 batch 的语法，拥有一套图灵完备的编程语言，挺复杂，面向对象的，我基本没见过
在文件
'$ENV:CMDER_ROOT\config\profile.d\*.ps1'
'$ENV:CMDER_ROOT\config\user-profile.ps1'
```