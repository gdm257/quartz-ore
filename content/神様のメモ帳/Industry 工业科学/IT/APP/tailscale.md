---
tags:
  - flag/APP/Network/_Theme/VPN
  - flag/APP/Network/_Theme/NAT
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
winget: tailscale.tailscale
scoop: tailscale
---

## Brief

[Subnet routers and traffic relay nodes · Tailscale](https://tailscale.com/kb/1019/subnets/)

[使用Tailscale远程访问局域网 | Escape](https://www.escapelife.site/posts/bb022c74.html)

[Tailscale 出口节点功能配置流量出口 | Verne in GitHub](https://einverne.github.io/post/2023/03/tailscale-exit-nodes.html)

[Tailscale 简单使用 | Verne in GitHub](https://einverne.github.io/post/2022/04/tailscale-usage.html)

[Tailscale 基础教程：Headscale 的部署方法和使用教程 – 云原生实验室 - Kubernetes|Docker|Istio|Envoy|Hugo|Golang|云原生](https://icloudnative.io/posts/how-to-set-up-or-migrate-headscale/)

- Installation
    - Client
        - `winget install --source winget --id tailscale.tailscale`

- Idea
    - A modern VPN

- Architecture
    - 所有 Users 共用一套 Networks（网段s），但只有相同 User 的不同 Devices 才能互相访问，不同 User 的 Devices 之间是完全不可见的。也就是说，把 User 理解为「独立空间」更贴切

- Pro
    - 可将 Client 用作另一个局域网的路由，配置起来很方便

- Con
    - 无论是官方还是自建，都无法手动指定 Client（Device）的 IP，所有 IP 都是全自动分配的
    - User 无法管理 Network，Tailscale 服务器管理员才能管理 Network
    - Client 虽然可以登录多个账号（无论服务器是否相同），但同一时间只能启用一个账号，只有该账号的网络会生效

- Test
    - 打洞 P2P，平均网速 400 kbytes/s
    - 同一路由器，支持直连，流量不出路由器，真・内网速度。但如果开启了 [[Clash for Windows]] 的 TUN Mode，则无法直连，流量一定会走公网（不懂是 DERP 中继还是打洞）

## CLI

```bash
tailscale command
Usage:
    tailscale [options] <subcommand> [args]

Examples:
    tailscale login --login-server https://xxx --auth-key xxxxxx
    tailscale set --advertise-routes "192.168.1.0/24"

Subcommands:
    login [options]
    switch
    set [options]

```
