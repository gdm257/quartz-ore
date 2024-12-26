---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Layer
---

## MSYS2

更加小打小闹


[MSYS2 和 mintty 打造 Windows 下 Linux 工具体验 - Creaink - Build something for life](https://creaink.github.io/post/Computer/Windows/win-msys2.html)

[cygpath](https://cygwin.com/cygwin-ug-net/cygpath.html)

[Convert Windows path for Windows Ubuntu Bash - Super User](https://superuser.com/questions/1113385/convert-windows-path-for-windows-ubuntu-bash)


看了 git for windows 文档，做点总结。

mintty 是终端模拟器（Terminal Emulator），对标 ConEmu、Windows Terminal。

git for windows 的 git-bash.exe 其实是定制好了的 mintty，所以 git-bash.exe 是终端模拟器。默认会打开自带的 bash.exe 作为 shell。我不喜欢 mintty，所以我用的是其他 terminal 来打开 bash.exe，这对 bash 的运行没有任何影响，因为 Terminal Emulator 只是调用 Shell 的工具，相当于 Shell 的前端，二者是解耦的。

git-cmd.exe 其实是定制好了的 cmd.exe。

bash.exe 是 shell，对标 cmd.exe, powershell, csh, sh。它其实是个魔改的 MSYS2 环境，bash.exe 就是我们进入这个 MSYS2 环境的唯一入口（shell）。

MinGW，Minimalist GNU for Windows 只不过是一堆工具，你就当作一堆软件的源代码，称不上是环境。我们甚至可以直接在 cmd 中使用 MinGW 提供的 GCC 进行编译。

那为什么会有 MSYS 环境呢？因为 cmd 环境太垃圾，难用的要死。

MSYS 虚拟出了 *nix 环境（简单理解为 shell + FS + 包管理），MinGW 在这个环境中承担 GNU 的角色。

Cygwin 你可以简单认为是动态链接库版の（用户空间模式）QEMU。

MSYS2 并不是基于 MSYS，而是基于 Cygwin。MSYS2 是魔改精简版 Cygwin。

除开 vb vm wsl2 qemu 这些正统虚拟化，虚拟程度排名如下（从高到低）：

WSL 1
Cygwin
MSYS2
MSYS

msys 不维护了才有的 msys2，所以别碰 msys。cygwin/msys2 性能又差，兼容性也差，原理又复杂，比不过 wsl 1，它们唯一的价值就是支持原生 windows 路径（本质是 cygpath 命令）。不过现在 Windows Build 17046 后 wsl 也有了自己的 wslpath 命令。

VirtualBox, VMwareStation, WSL2, QEMU(Mode 1) 这些都是平平无奇的传统虚拟化，即基于 Hypervisor 进行模拟。

PPSSPP, QEMU(Mode 2) 更加简单粗暴，直接在用户空间以纯软件的形式模拟出硬件（操作），以此代替 Hypervisor。无拘无束，可以说是极致的虚拟化了，QEMU 可以模拟出不同的 CPU 架构，PPSSPP 也可以模拟各种 PSP 的不同硬件版本。

WSL1 Cygwin MSYS2 MSYS 这几种「(OS)环境」的唯一入口是 shell，也就是说，只有 CLI 形式的入口。而完整的 Windows 和 Linux Desktop 是同时支持 GUI 入口和 CLI 入口的，传统虚拟化方案支持完整的 GUI 入口，这也是传统虚拟化的优势。