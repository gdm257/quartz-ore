---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
- flag/APP/Network/_Theme/NAT
- flag/APP/Network/_Theme/VPN
---

- Installation
    - 

- Configuration
    - 

- Idea
    - Web UI 管理 [[headscale]] control server

- Fundamentals
    - headscale-webui == API client of headscale server

- Usage
    - 

- Description
    - headscale-webui 千万不能开放给别人访问，因为它强绑定一个固定的 [[headscale]] server，并且会自动保存 headscale server 的 API Key
    - [[headscale-ui]] 则是可以开放给任何人访问，不会有安全问题
    - 我更喜欢 [[headscale-ui]]，因为它更安全且灵活
