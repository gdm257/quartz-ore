---
tags:
- Label/Industry-工业科学/IT/TCP_IP/Protocol/3-互联网层-网络层
---

## Brief

[【硬件科普】IP地址是什么东西？IPV6和IPV4有什么区别？公网IP和私有IP又是什么？_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1DD4y127r4)


Network Address Translation

- 端口映射是 NAT 的一种.
- 


端口映射

- 假设 NAT 网关的 IP 为 IP_A.
- 假设 L1 L2 L3 L4 受 NAT 网关管理，IP 地址分别为 IP_1 IP_2 IP_3 IP_4，分配的端口分别为 Port_1 Port_2 Port_3 Port_4.
- NAT 网关接收到发送给 IP_A:Port_1 的数据包，就会发给 L1.
- L1 与 NAT 网关一般以物理的方式相连，所以理论上只要物理设备足够多，端口映射套娃层数足够多，可以连入无数个设备.