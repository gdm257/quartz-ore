---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## WireShark

[使用 Wireshark 解密 SSL/TLS 流量](https://gohalo.me/post/decrypt-tls-ssl-with-wireshark.html)

[wireshark解密https流量 | T的网络日志](https://h0sec.com/2022/wireshark%E8%A7%A3%E5%AF%86https.html#0x06-%E8%A7%A3%E5%AF%86https%E6%B5%81%E9%87%8F)

tcp
http
icmp
只显示指定协议

port 80
src port 80
dst port 80

ip.addr == 185.199.111.153 and icmp
只显示ICPM协议且源主机IP或者目的主机IP为185.199.111.153的数据包

tcp.port ==80
显示源主机或者目的主机端口为80的数据包列表

tcp.srcport == 80
只显示TCP协议的源主机端口为80的数据包列表

tcp.dstport == 80
只显示TCP协议的目标主机端口为80的数据包列表

http.request.method=="GET"

data contains "abc"
按照数据包内容过滤

逻辑运算符为 and/or/not
&& 与、|| 或、！非

== 等于、！= 不等于、> 大于、< 小于、>= 大于等于、<=小于等于
