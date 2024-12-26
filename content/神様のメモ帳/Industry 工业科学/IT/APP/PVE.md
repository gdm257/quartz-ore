---
aliases:
- Proxmox VE
- Proxmox Virtual Environment
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Distro
---

## Brief

- Alternatives
    - [[KVM]]
    - [[QEMU]]

- Con
    - NOT Support All in One
        - PVE 默认需要 2 台物理机器，一台 PVE 跑虚拟机，一台用 Browser/RDP/VNC 连接 PVE 及虚拟机
        - PVE 装桌面环境会使网络无法使用，据说卸载 `netmanager` 可以解决
        - 其他 [[Linux]] 桌面发行版安装 PVE 也行
    - ~~最开始必须有线上网，你配置好无线网卡都没用，因为软件包不全，想要下载无线联网所需软件包，就必须先有线上网~~

- References
    - [Proxmox VE镜像分析与定制 - 知乎](https://zhuanlan.zhihu.com/p/373806971)
    - [3.3. 网络配置 — Promxox VE 中文文档 7.1 文档](https://pve-doc-cn.readthedocs.io/zh_CN/latest/chapter_system_administration/netconfig.html)
    - [AMD 5800u 笔记本折腾 Proxmox VE 7.0 虚拟化 - 知乎](https://zhuanlan.zhihu.com/p/424950750)
    - [roacn/pve: PVE一键换源、去订阅弹窗等；LXC容器OpenWrt自动安装、更新](https://github.com/roacn/pve)
    - [Proxmox虚拟化平台部署DoraCloud搭建桌面云系统 - 朵拉云 - 博客园](https://www.cnblogs.com/doracloud/articles/doracloud_pve_01.html)

- Examples
    - [装在笔记本里的私有云环境：K8s 集群准备 - 苏洋博客](https://soulteary.com/2022/11/29/private-cloud-environment-installed-in-a-notebook-k8s-cluster-preparation.html)
    - [装在笔记本里的私有云环境：准备篇 - 苏洋博客](https://soulteary.com/2021/10/28/private-cloud-environment-installed-in-a-notebook-preparation.html#%E8%99%9A%E6%8B%9F%E5%8C%96%E7%8E%AF%E5%A2%83)

- Installation
    - 无线网卡驱动
        - PVE 7.x 不支持 iwlwifi，会要你卸载 pve，亲测
        - PVE 8.0 自带 iwlwifi，无需额外安装
        - [iwlwifi - Debian Wiki](https://wiki.debian.org/iwlwifi)

- Idea
    - 一个基于 [[Debian]] 的 distro
    - 一整套 [[KVM]] 搭建方案

- Fundamentals
    - [[PVE]] ~= [[Debian]] + [[KVM]] + [[QEMU]] + Web Panel
