---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Layer/Virtualization/BareMetalHypervisors
---

## KVM

[虚拟化容器云计算系列文章 | 骏马金龙](https://www.junmajinlong.com/virtual/index/)

[开源 - KVM、qemu-kvm、libvirt、以及 openstack的关系_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000039342194)

[KVM 虚拟化环境搭建 - ProxmoxVE - 知乎](https://zhuanlan.zhihu.com/p/49118355)

[Linux如何搭建KVM？它的优缺点？如何用它服务虚拟化？ - 知乎](https://www.zhihu.com/question/266743901/answer/422497253)

[Proxmox VE Hardware Requirements](https://www.proxmox.com/en/proxmox-ve/requirements)

[Proxmox VE Documentation](https://pve.proxmox.com/wiki/Main_Page)

[ivanhao/pvetools: proxmox ve tools script(debian9+ can use it).Including email, samba, NFS set zfs max ram, nested virtualization ,docker , pci passthrough etc. for english user,please look the end of readme.](https://github.com/ivanhao/pvetools)

[KVM虚拟机GPU直通，step by step - 机械意志](https://mechanical-consciousness.com/2020/03/20/kvm-gpu-passthrough.html)

[PVE 虚拟化黑苹果显卡直通及远程访问教程](https://blog.lv5.moe/p/pve-virtualized-hackintosh-gpu-passthrough-and-remote-access-tutorial)

[KVM 上安装 Mac OS X 到底难不难？ - 知乎](https://zhuanlan.zhihu.com/p/474047948)

[AMD 5800u 笔记本折腾 Proxmox VE 7.0 虚拟化 - 苏洋博客](https://soulteary.com/2021/10/23/amd-5800u-notebook-toss-proxmox-ve-7-0-virtualization.html)

[learn-kvm | Qemu KVM(Kernel Virtual Machine)学习笔记](https://yifengyou.github.io/learn-kvm/docs/%E6%9E%84%E5%BB%BAKVM%E7%8E%AF%E5%A2%83/%E6%9E%84%E5%BB%BAKVM%E7%8E%AF%E5%A2%83.html)

[Management Tools - KVM](https://www.linux-kvm.org/page/Management_Tools)



KVM是集成到Linux内核的Hypervisor

准确来说，KVM是Linuxkernel的一个模块。

Xen 本身就是 Host，KVM 则有些不同。

KVM 是 Linux 内核的一部分，所以主流 Linux 本身就可以作为最底层的直接控制硬件的 Master Host。

不过有人自己开发了 Linux 发行版专门用作 KVM Master Host，例如基于 Debian 的 Proxmox VE。