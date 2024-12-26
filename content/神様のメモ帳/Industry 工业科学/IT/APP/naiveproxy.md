---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/License/BSD
- flag/APP/Network
- flag/APP/Network/_Theme/GFW
- flag/APP/Network/_Theme/VPN
- Label/Industry-工业科学/IT/APP/Plugin/Caddy
---

- References
    - [klzgrad/naiveproxy: Make a fortune quietly](https://github.com/klzgrad/naiveproxy)

    - [klzgrad/forwardproxy: Forward proxy plugin for the Caddy web server](https://github.com/klzgrad/forwardproxy)

- Installation
    - Server: `xcaddy build --with "github.com/caddyserver/forwardproxy@caddy2=github.com/klzgrad/forwardproxy@naive"`
    - Client: `scoop install naiveproxy`

- Configuration
    - [[caddy]] directive `forward_proxy`

- Usage
    - 

- Idea
    - 

- Fundamentals
    - naiveproxy 是 C/S 架构，整体同 [[V2Ray]] [[shadowsocks|Shadowsocks]]
    - naiveproxy server 端能够以 [[caddy]] 插件的形式来实现
        - [[xcaddy]] 来编译出带插件的 caddy
        - caddy == naiveproxy server
        - caddy directive `forward_proxy` == configuration of naiveproxy server
        - basic auth == 用户认证

- Philosophy
    - 

- Description
    - naiveproxy 又一种梯子
    - naiveproxy 躲过了 2022 年尾几个月的基于行为的端口封锁。这不是因为 naiveproxy 有多先进，而是用的人少，样本数据少，墙没去管
