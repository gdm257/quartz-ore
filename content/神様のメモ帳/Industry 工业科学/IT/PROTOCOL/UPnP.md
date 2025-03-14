---
tags:
- Label/Industry-工业科学/IT/TCP_IP/Protocol/7-应用层
---

当内网中的主机想要被外界主机直接访问（比如开放 80 端口，对外提供 HTTP 服务），我们就需要在 NAT 设备中为当前主机手工配置端口映射，如果内网中有多台主机都想要被外界主机直接访问的话，我们必须在同一个 NAT 设备上为这些主机分别做端口映射，它们之间不能使用有冲突的端口。这个过程需要用户手工一一配置，显然给用户带来了很大的麻烦。

UPnP 技术标准的出现就是为了解决这个问题，只要 NAT 设备（路由器）支持 UPnP，并开启。那么，当我们的主机（或主机上的应用程序）向 NAT 设备发出端口映射请求的时候，NAT 设备就可以自动为主机分配端口并进行端口映射。这样，我们的主机就能够像公网主机一样被网络中任何主机访问了。

实现 UPnP 必须同时满足三个条件：

NAT 网关设备必须支持 UPnP 功能；这是因为它需要扮演控制点（239.255.255.250:1900）的角色，控制点提供的是 SSDP 服务。
操作系统必须支持 UPnP 功能；比如 Windows 系列操作系统；
应用程序必须支持 UPnP 功能；比如 Bt、eMule、IPFS, Ethereum 等。

原来 UPnP 只不过是自动版的 NAT，怪不得想不出区别，我真是傻眼了

UPnP 最大的愿景是希望任何设备一旦连接上网络，所有在网络上的设备马上就能知道有新设备加入，这些设备彼此之间能互相通信，更能直接使用或者控制它，一切都不需要人工设置，完全的即插即用。

理想是丰满的，但现实很骨感，哪有这么十全十美的方案，从发布至今 UPnP 因在设计上的缺陷和各个厂家在协议具体实现上的错误导致出现了许许多多的安全漏洞