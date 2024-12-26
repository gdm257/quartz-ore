---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Network
    - flag/APP/Network/_Theme/VPN
    - flag/APP/Network/_Theme/NAT
---

[搭建属于自己的Tailscale网络 :: Max的技术栈](https://maxng.cc/posts/headscale-ez-tutorial/)

[headscale/docs](https://github.com/juanfont/headscale/tree/main/docs)

- Test
    - 2024 最新版太折磨了，别碰，用官方的就好

- Installation
    - 

- Configuration
    - `/etc/headscale/config.{yaml,json}` (Recommanded)
    - `~/.headscale/config.{yaml,json}`
    - `./config.{yaml,json}`

- Idea
    - 自建 [[tailscale]] 控制服务器，破除设备限制，白嫖官方 DERP 中继服务器

- Fundamentals
    - 

- Usage
    - 客户端加入指南: `http://<host>:<port>/windows`
    - Management Web UI: [[headscale-ui]] or [[headscale-webui]]
    - Management by CLI

- Description
    - headscale == self-hosted [[tailscale]] control server
    - tailscale 客户端尽量使用最新版，对 headscale 的支持好很多，更方便

```bash
headscale command
Usage:
    headscale [options] <subcommand> [args]

```
