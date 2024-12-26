---
aliases:
- frpc
- frps
tags:
- flag/APP/Network/_Theme/NAT
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
---

- Installation
    - `scoop install frp`

- Configuration
    - 

- Idea
    - 访问公网 IP 的端口 == 访问内网机器的端口

- Fundamentals
    - 访问 frps 端口 == 访问 frpc 所在机器的某个端口
    - frp 是 C/S 架构
    - frpc 是 client
    - frps 是 server，必须能直接通过 IP 访问，即有公网 IP 的机器上（或者是虚拟组网）
    - 发送给 frps 所监听端口的请求，会被 frps 转发给 frpc，frpc 再转发给所在机器的指定端口

- Description
    - frp 是一个内网穿透软件
