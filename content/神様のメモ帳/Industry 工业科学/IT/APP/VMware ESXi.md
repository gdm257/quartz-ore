---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Layer/Virtualization
---

## VMware ESXi

[Docker，K8s，KVM，Hypervisor和微服务有什么区别联系吗？ - 知乎](https://www.zhihu.com/question/307537564/answer/583653317)

[NUC 折腾笔记 - 安装 ESXi 7 - 苏洋博客](https://soulteary.com/2021/06/22/nuc-notes-install-esxi7.html)


VMware Workstation，一个是VMware ESXi。这两个版本最大的区别，就是Workstation是运行在某个已有操作系统上的软件，例如Windows或者Linux，由操作系统实现对硬件资源的访问。而ESXi则本身就是一个操作系统，直接运行在硬件之上，省去了Host OS的开销。这就是两种不同的Hypervisor。