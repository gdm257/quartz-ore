---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
apt: net-tools
---

```bash
ifconfig
ifup
ifdown

eth0 第一块网卡
eno1 板载网卡
ens33 PCI-E 网卡
enp0s3 无法获取物理信息的 PCI-E 网卡

网卡命名相关
/etc/default/grub
    biosdevname=0
    net.ifnames=0

```