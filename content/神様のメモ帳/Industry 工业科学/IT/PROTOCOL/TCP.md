---
tags:
  - Label/Industry-工业科学/IT/TCP_IP/Protocol/4-传输层
protocol-scheme:
  - tcp
---

[TCP 协议 · 笔试面试知识整理](https://hit-alibaba.github.io/interview/basic/network/TCP.html)

[TCP 协议简介 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html)


三次握手，就是三个数据包。




要想弄清楚劫持原理，就必须知道，TCP 数据包到底是谁生成的？应用？OS 的 TCP/IP 协议栈？虚拟网卡？

只能是应用。因为 OS 不可能支持所有的应用层协议，更别提私有协议。实际的流程应该是，App 根据应用层协议的数据包如 HTTP 数据包，生成 TCP 数据包，然后应用对 OS 说，嘿，帮我把这个 TCP 包发送出去，发送给谁等信息已经写在 TCP 包里了，照着发就行。