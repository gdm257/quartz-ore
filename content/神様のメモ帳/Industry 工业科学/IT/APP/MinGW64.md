---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Layer
---

## MinGW64

超级小打小闹


    虽然我已经理解了 MinGW64 的原理，在 Windows 直接用 MinGW64 开发也不成问题，但还是推荐用 WSL 1。


MinGW 的 GCC 原理分为两部分，第一是交叉编译，第二是 ecosystem。交叉编译不必多说，关键是 ecosystem。使用 makefile 时，make/cmake 会自动调用 gcc.exe g++.exe 进行编译。那么问题来了，编译出的动态链接库都去哪了呢？程序如何找到动态链接库？

第一个问题，`gcc.exe` `g++.exe` 编译出的动态链接库都去哪了呢？

答案是跟 Linux 一样，动态链接库文件根据 makefile 被放进诸如 `/usr/lib` `/usr/local/lib` 的目录。很明显，`/usr/lib` 是虚拟出来的路径，至少不是 Windows 原生路径。实际上，这个 rootfs 虚拟根文件系统对应的 windows 原生路径，其实就是 MinGW 所在目录。MinGW64 不仅仅是一堆交叉编译到 Windows 的应用，更重要的是，它提供了一个 ecosystem，这个微系统的 rootfs 根文件系统就是 MinGW64 的目录，在 `D:\Portable\scoop\apps\gcc\current` 你可以看到熟悉的 `etc` `bin` `lib` 文件夹，这些文件夹在 gcc.exe 看来就是 `/etc` `/usr/lib` `/usr/bin` 之类的路径。显然，想要 gcc.exe 这么认为，那么必须在编译出 gcc.exe 的时候就指定好，因此 gcc.exe 是「专属于」某个 MinGW64 环境的，使用该 gcc.exe 只会把动态链接库放进该 MinGW64 环境（目录），丝毫不影响另一个 MinGW 环境（如果有的话）。

第二个问题，`gcc.exe` `g++.exe` 编译出的程序如何找到动态链接库？

通过相对路径找到动态链接库。因为一般程序都是放到 `bin` 目录，很容易根据相对路径找到对应的 `lib` 文件夹。又因为 rootfs 实际上是原生的 windows 目录，所以编译后的软件大都是便携软件（取决于 makefile），可以到处移动，甚至分发到网络（MinGW 最大的用途就是编译出可分发的可执行文件）。不仅如此，因为编译出的应用只依赖于相对路径的动态链接库，不依赖于 MinGW 环境，所以我们可以直接在 cmd.exe 运行软件、GUI 双击运行、powershell 运行……总之它就是个原生的 Windows 应用程序，想怎么运行怎么运行。


Windows 上，Cygwin 的效果跟 MinGW64 是差不多的。简略的说，MinGW64 是编译为 Windows 原生可执行文件，通过相对路径找到动态链接库。Cygwin 编译出的应用，动态链接库全都指向 `cygwin.dll` 这个文件（文件名记不太清了，差不多长这样）。该 dll 文件是个中间层，它虚拟出了一个 POSIX 系统，将 POSIX API 调用转换成 Windows API 调用。Cygwin 这种中间层的做法比 MinGW64 魔改编译器要更容易实现，因此 Cygwin 的兼容性一直远超 MinGW64。对于不了解可执行文件的本质与 C/C++ 编译的人来说，MinGW 就是个难以理解的黑盒子。因此我不大推荐使用 MinGW64 进行开发，要么虚拟机，要么 WSL，要么 Cygwin。不严谨的说，Cygwin 可以被看作一个以 dll 文件形式存在的虚拟机，理解起来并不难，觉得难直接上虚拟机。但是，MinGW 才是性能最好的，毕竟是原生 Windows 可执行文件，所以你不得不使用 MinGW 生成 Windows 可执行文件进行分发。例如 Firefox 和 Chrome 官网提供的可执行文件就是用 MinGW 编译的。