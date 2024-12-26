---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Layer
---

## QEMU

[QEMU/KVM 原理综述](https://flyflypeng.tech/%E8%99%9A%E6%8B%9F%E5%8C%96/2018/11/21/QEMU-KVM-%E5%8E%9F%E7%90%86%E7%BB%BC%E8%BF%B0.html)

[QEMU中VNC Server架构分析 - 知乎](https://zhuanlan.zhihu.com/p/69568087)

[Re: (Qemu-devel) pronunciation of Qemu](https://lists.gnu.org/archive/html/qemu-devel/2006-06/msg00487.html)

```bash
qemu command
Installation:
    scoop install -g qemu

QEMU不是操作系统，它是一个模拟器 (Quick EMUlator)，QEMU是一个用户空间的进程……也就是对标 VirtualBox？

QUMU 有两种运行模式

1. 第一种模式：
2. 用户空间的模式：以纯软件的方式仿真出硬件，这跟在 MC 中制作一台计算机本质是一样的。这意味着，你可以在物理硬件为 x64 的电脑上，使用 QEMU 运行非 x64 架构的 Guest OS，第一种模式做不到这点，第一种模式只能运行基于 x64 的 OS。拿 FreeBSD 举例，第二种模式可以运行 FreeBSD 的任意架构的版本，如 x64、arm、mips、powerpc，而第一种模式只能运行 x64（以及 x86，因为 x64 兼容 x86）版本的 FreeBSD.


QEMU 有 2 种运行模式：

最常用的，类似 VB 模式。
不常用的，类似 MC 模式。

无论哪种模式，QEMU 都不是最底层，不是 Master Host，无法直接接触硬件。也就是说，裸机是没法使用 QEMU 的，QEMU 必须在某个 Host 上运行。

两种模式的区别在于，MC 无法加速，单纯依靠用户空间的软件来模拟。VB 模式则可以根据 QEMU 所在的 Host 不同，进行不同方式的硬件加速/硬件直通。

那我为什么不直接最底层 Xen，用 Xen 虚拟出各种 Gest OS 呢？

因为 Xen 一般是最底层的 Host，也就是说：裸机安装 Xen，Xen 跑 Guest OS。

而 QEMU 允许「在普通 Host 上高性能跑 Guest」，例如裸机装 Ubuntu，Ubuntu 安装 QEMU，QEMU 跑 Guest OS。虽然比 Xen 直接跑 Guest OS 多了一层，但 QEMU 能跑在已有系统上，性能也不差太多。而已有系统如 Ubuntu，裸机批量部署比 Xen 方便得多


```