---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Layer/Virtualization/BareMetalHypervisors
---

## Hyper-V

[梳理一下 Windows 的 Hyper-V、Hypervisor - 知乎](https://zhuanlan.zhihu.com/p/381969738)

[理解 Hyper-V 外部网络、内部网络、私有网络 | 骏马金龙](https://www.junmajinlong.com/virtual/network/hyperv_net/)


就如同「KVM 是 Linux 的 hypervisor」「bhyve 是 FreeBSD 的 Hypervisor」，Hyper-V 是目前 Windows 10 的 hypervisor。所以 VMware、VirutalBox、Docker、WSL 2 才要基于 Hyper-V。

商业、收费

Hyper-V 虽然是虚拟化的底层，但无需复杂的上层调用，自带了一个 Hyper-V 管理器，效果类似于 VirtualBox，可以直接运行 vhd 虚拟硬盘上的系统（只要 Hyper-V 支持，目前来说 OSX 以外的大部分系统都支持了，FreeBSD 更是 2012 年就支持了）。这无疑直接颠覆了 VMware Workstation 的饭碗，加上 ESXi 不断被 KVM + QEMU 蚕食，VMware 可以说是大势已去。