---
tags:
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
---

[gurucomputing/headscale-ui: A web frontend for the headscale Tailscale-compatible coordination server](https://github.com/gurucomputing/headscale-ui)

[给Headscale搭建一个内网穿透设备管理界面(headscale-ui) - YouTube](https://www.youtube.com/watch?v=qUwNxhn5ax8)

- Installation
    - `docker pull ghcr.io/gurucomputing/headscale-ui`

- Usage
    - Add Machine
        - Get nodekey: `tailscale login --login-server https://headscale.example.com`
        - Web UI - Machines - Add Machine - Machine Registration Key `nodekey:xxxxx`

- Idea
    - Web UI 管理 headscale control server

- Fundamentals
    - headsclae-ui 只不过是个纯纯的 [[headscale]] API client，参考 [[sub-web]] 与 [[subconverter]] 之间的关系
    - headscale-ui 跟 sub-web 一样，是纯本地的静态 web 应用，所有数据保存在浏览器的 `localStorage`，headscale-ui 提供者不存储、不接收任何数据，浏览器只会与目标 [[headscale]] 服务器进行通信
    - 如果你去看 Dockerfile 会发现，只不过是 serve 了 `index.html` 及其所需的资源文件罢了，[[Nginx]] [[caddy]] 都可以直接完成

- Description
    - headscale-ui 是 [[headscale]] 的 web frontend
    - headscale-ui 可以给所有人访问，不会有安全问题，这点非常类似于 [[sub-web]]
