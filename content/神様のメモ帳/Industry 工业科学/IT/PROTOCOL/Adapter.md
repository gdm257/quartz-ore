---
tags:
- Label/Industry-工业科学/IT/TCP_IP/Protocol/2-网络接口层-数据链路层
---

[理解物理网卡、网卡接口、内核、IP 等属性的关系 | 骏马金龙](https://www.junmajinlong.com/virtual/network/kernel_nic_ip/)

[理解 Linux 虚拟网卡设备 tun/tap 的一切 | 骏马金龙](https://www.junmajinlong.com/virtual/network/all_about_tun_tap/)


网络适配器，俗称网卡。

adapter 的常见属性:

* IPv4
* Subnet Mask
* IPv6
* Gateway
* DNS Server 1
* DNS Server 2

网卡缺少 DNS Server，且软件不像 Firefox 那样自己做 DNS 查询，连网都上不了（因为无法解析域名，不过公网 IP 依旧可以正常连接）。

利用 `wsl.conf` 的 `generateResolvConf = true` 可以 `cat /etc/resolv.conf` 很方便地得知「Windows 的系统 DNS」。



Clash 网卡
IPv4: 198.18.0.1
网关: 空
DNS Server: 198.18.0.2



nameserver 119.29.29.29
nameserver fec0:0:0:ffff::1

可以看出，就是 wifi 网卡的 DNS。

但如果开启了 CFW 的 TUN，

nameserver 198.18.0.2
nameserver fec0:0:0:ffff::1
nameserver fec0:0:0:ffff::2

就是 TUN 网卡的 DNS。

TUN 的工作原理就很清晰了——将操作系统的默认网卡设置为 TUN 网卡。`getaddrinfo` 会请求系统 DNS，所谓的「系统 DNS」就是「操作系统的默认网卡的 DNS Server」。