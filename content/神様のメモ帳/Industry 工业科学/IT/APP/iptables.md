---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## iptables

```bash
firewalld/ufw/iptables/nftables 都是 netfiltler frame 的 frontend，目前来说，iptables 仍然是最强的。

sudo systemctl enable iptables.service
/etc/iptables/iptables.rules
/etc/sysconfig/iptables

iptables [-t <table_name>] <command> <chain_name> <parameter> -j <target>

iptables [-t filter]
iptables -t nat
iptables -t mangle

<chain_name>
INPUT
FORWARD
OUTPUT
PREROUTING
POSTROUTING

<parameter>
-p
-s
-d
-i
-o
--sport
--dport

-j <target>
-j ACCEPT    允许过门，允许数据包通过本链而不拦截它
-j DROP    丢弃数据包，阻止数据包通过本链
-j REJECT

```



iptables 内置了 filter nat mangle 三张表。所有规则配置后，立即生效，不需要重启服务。

iptables的结构是由表（tables）组成，而tables是由链组成，链又是由具体的规则组成。因此我们在编写iptables规则时，要先指定表，再指定链。tables的作用是区分不同功能的规则，并且存储这些规则。

**总体说来，iptables是由“`三表五链`”组成。**

**1、三张表介绍：**

- **`filter`**

负责过滤数据包，包括的规则链有：`input`，`output`和`forward`

- **`nat`**

用于网络地址转换（IP、端口），包括的规则链有：`prerouting`，`postrouting` 和 `output`

- **`mangle`**

主要应用在修改数据包、流量整形、给数据包打标识，默认的规则链有：`INPUT`，`OUTPUT`、 `forward`，`POSTROUTING`，`PREROUTING`

> 优先级：mangle > nat > filter

**2、五条链：**

- **`input`**

匹配目标IP是本机的数据包

- **`output`**

出口数据包 ， 一般不在此链上做配置

- **`forward`**

匹配流经本机的数据包

- **`prerouting`**

修改目的地址，用来做 DNAT 。如：把内网中的 80 端口映射到互联网端口

- `postrouting`

修改源地址，用来做 SNAT。如：局域网共享一个公网IP接入Internet。



**iptables 处理数据包流程：**

1. 当一个数据包进入网卡时，它首先进入 `PREROUTING` 链，内核根据数据包目的 IP 判断是否需要转送出去。
2. 如果数据包就是进入本机的，它就会沿着图向下移动，到达 `INPUT` 链。数据包到了 INPUT 链后，任何进程都会收到它。
3. 本机上运行的程序可以发送数据包，这些数据包会经过 `OUTPUT` 链，然后到达`POSTROUTING` 链输出。
4. 如果数据包是要转发出去的，且内核允许转发，数据包就会如图所示向右移动，经过 `FORWARD` 链，然后到达 `POSTROUTING` 链输出。

总结：整体数据包分两类：1、发给防火墙本身的数据包 ；2、需要经过防火墙的数据包