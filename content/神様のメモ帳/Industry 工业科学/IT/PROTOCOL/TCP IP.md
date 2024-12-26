---
tags:
- Label/Industry-工业科学/IT/TCP_IP/Model
---

《图解 TCP/IP》

[互联网协议入门（一） - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html)

[互联网协议入门（二） - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html)

[《图解TCP/IP》读书笔记 - EdisonZhou - 博客园](https://www.cnblogs.com/edisonchou/p/5987827.html)

[xiaolincoder/CS-Base: 图解计算机网络、操作系统、计算机组成、数据库，共 1000 张图 + 50 万字，破除晦涩难懂的计算机基础知识，让天下没有难懂的八股文！🚀 在线阅读：https://xiaolincoding.com](https://github.com/xiaolincoder/CS-Base)

[ffffffff0x/1earn: ffffffff0x 团队维护的安全知识框架,内容包括不仅限于 web安全、工控安全、取证、应急、蓝队设施部署、后渗透、Linux安全、各类靶机writup](https://github.com/ffffffff0x/1earn)

[理解桥接bridge和dhcp的原理 | 鱼儿的博客](https://yuerblog.cc/2017/01/22/understand-bridge-and-dhcp/)

[127.0.0.1和0.0.0.0地址的区别 - 知乎](https://zhuanlan.zhihu.com/p/72988255)

[karanpratapsingh/system-design: Learn how to design systems at scale and prepare for system design interviews](https://github.com/karanpratapsingh/system-design)


> All problems in computer science can be solved by another level of indirection.    ——David Wheeler



1. 物理层    将脉冲光或高低压转换为比特流.
2. 数据链路层    将比特流划分成数据帧（数据帧的生成与接收）.
3. 网络层
4. 传输层
~~5. 会话层    负责建立和断开通信链接~~
~~6. 表示层    将应用处理的信息转换为适合网络传输的格式~~
7. 应用层


|     OSI     |    名称    |            其他            |     网络      |   地址   | 数据实体 |
| ----------- | --------- | -------------------------- | ------------- | -------- | ------- |
|             | 中继器     | 集线器、网线、调制解调器     |               |          | 01 信号  |
| 2 层交换机   | 网桥      | 交换集线器、网卡            | 真正的划分网络 | MAC 地址 | 数据帧   |
| 3 层交换机   | 路由器     | 网关                       | 真正的划分网络 | IP 地址  | 分组数据 |
| 4-7 层交换机 | 负载均衡器 | 防火墙、加速器              |               |          |         |
| 4-7 层交换机 | 网关      | 防火墙、代理服务器、应用网关 |               |          |         |


1. 物理层（硬件）
2. 数据链路层（网络接口层）
3. 网络层（互联网层）
4. 传输层
5. 应用层

TCP/IP 分层中，网络层、传输层的功能通常由操作系统提供。此外，链接互联网的所有主机跟路由器必须都实现 IP 的功能。但如网桥、中继器、集线器等设备就可以不实现 IP 或 TCP 的功能。

TCP 采用分组交换（蓄积交换）、面向有连接，前者保证交换机能同时为多个计算机提供服务。

1. **分组交换** / 电路交换
2. **面向有连接** / 面向无连接
3. 单播 / 多播 / 任播 / 广播


OSI 模型只是个模型。就跟 MVC 模型也是个模型是一样的。真实的协议并不是严格按着 OSI 模型来的。最好的例子就是 SSL。



分类

面向有连接型 VS 面向无连接型
电路交换 VS 分组交换
单播 VS 多播 VS 广播 VS 任播
