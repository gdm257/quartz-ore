---
tags:
- flag/APP/Network/_Theme/GFW
- flag/APP/Network/_Theme/VPN
- flag/APP/Network/_Theme/NAT
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Command/CLI
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- Label/Industry-工业科学/IT/APP/GUI/Mobile
---

[内网穿透神器 ZeroTier 使用教程 - 奇妙的 Linux 世界](https://www.hi-linux.com/posts/33914.html)

[ZeroTier 服务使用配置 — Leeks' Notes 文档](https://www.leeks.info/zh_CN/latest/Linux_Notes/ZeroTier/ZeroTier.html)

[一分钟自建zerotier-plant - Jonnyan的原创笔记 - 亖亖亖](https://www.mrdoc.fun/doc/443/)

[内网穿透详解 - cyrus0w - 博客园](https://www.cnblogs.com/cyrus0w/p/13123504.html)

[在 zerotier 网络中传输的流量会被墙探测吗 - V2EX](https://www.v2ex.com/t/870570)

> [!tip]
> 如果你正在使用 [[Clash for Windows]]，请不要开启 TUN/TAP，这样会导致 P2P 打洞失败，流量全走 Moon

- Installation
    - ZeroTier One
        - ~~`scoop install ZeroTier`~~

- Configuration
    - 

- Idea
    - 传统的 VPN Server 需要部署到公网机器才能访问，现在我们用分布式集群充当 VPN Server，免去了部署 VPN Server，也不必担心 VPN Server 会挂

- Fundamentals
    - ZeroTier 原理跟传统 VPN 没有区别，C/S 架构，Server 负责组建网络、分配 IP（需要登录 ZeroTier 官网进行配置），只不过 ZeroTier 使用分布式集群充当 Server 和 Delay，跟 [[Syncthing]] 和 [[tor|Tor]] 的做法如出一辙
    - Planet 只负责创建网络、划分网段、分配 IP，简单说就是充当 DNS Server/ARP Server
    - Moon 负责数据传输（中转）
    - 虚拟组网里的两个成员进行通信，要么直连，要么 Delay，跟 Syncthing 一模一样
    - 直连，也就是 P2P，流量不经过 Delay，而是直接发送给对方
    - Delay（中继），ZeroTier 官方管中继节点叫 `Moon`，可理解为一个 [[V2Ray]] 节点。工作方式跟 Syncthin 与 Tor 的分布式中继差不多，默认为 ZeroTier 官方提供的分布式中继

- Description
    - ZeroTier == Syncthing 版 VPN
    - ZeroTier == P2P 版 VPN
    - VPN Server == Planet == Syncthing 发现服务器
    - VPN Client == Leaf == ZeroTier One == syncthing.exe
    - Delay == Moon == Syncthing Delay
    - 直连 == P2P
    - 官方 Planet 可搭配官方 Moon
    - 官方 Planet 可搭配自建 Moon
    - 自建 Planet 可搭配官方 Moon
    - 自建 Planet 可搭配自建 Moon
    - Planet 是官方还是自建，取决于客户端（Leaf）设置
    - Moon 是官方还是自建，取决于客户端（Leaf）设置
    - 
    - ZeroTier 是 VPN 吗？
    - ……仔细想想，ZeroTier 最大的作用在于以「组网」的方式实现「内网穿透」，ZeroTier 是没办法（至少官方没打算提供）像传统 VPN、[[shadowsocks|Shadowsocks]]、[[V2Ray]] 那样进行流量代理的。Moon 虽然转发流量，但仅限于内网成员通信
    - ……好像不太对，Android 端有个 `Route all traffic through ZeroTier`，难不成这个就是代理？我试了下，貌似并没有把 Moon 当成代理，而 Planet 不负责数据传输，更加不可能是代理
    - **ZeroTier 确实是 VPN**。但它的流量转发仅限于虚拟 LAN 内部通信，当不了梯子
