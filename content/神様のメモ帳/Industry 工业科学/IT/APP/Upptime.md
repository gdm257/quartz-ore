---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
---

- References
    - 
    - [用GitHub Actions 搭建网页状态监控系统 Upptime - 秋风于渭水](https://www.tjsky.net/tutorial/444)

- Installation
    - 

- Configuration
    - 

- Data
    - 

- Usage
    - `https://<user>.github.io/<repo>/`
    - `https://github.com/<user>/<repo>`

- Examples
    - 

- UI
    - 

- Idea
    - 网站状态监控页

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - GitHub Action 自动检测网站状态，并使用 git commit 来更新 status page

- Pro
    - 目前我最满意的 Status Page 方案
    - 隐私友好，能做到隐私零泄露
    - 基于 GitHub Action，保证 Status Page 本身高可用
    - Status Page 可高度魔改 through HTML/CSS

- Con
    - 由于 GitHub Action 限制，约 10 分钟才检测一次
    - 如果 Status Page 使用自定义域名（CNAME），会暴露域名
    - Notification 每种只能指定一次，不像 [[uptime-kuma]] 那么灵活

- Test
    - 如果想保护隐私，请勿使用 `CNAME`，这会暴露域名
    - `CNAME` 使用方法文档没说清楚，但能猜出个大概
        - 假设你的域名为 `abc.com`
        - 你需要去 DNS 托管服务商那里创建一个 `CNAME` 记录，例如 `upptime.abc.com`，让它指向 `upptime.js.org`
        - `.upptimerc.yml` 里的 `cname` 值填写为 `upptime.abc.com`
        - 注意，即便你用 Repository Secret 避免直接在 `.upptimerc.yml` 填写域名，但该域名 `upptime.abc.com` 仍旧会在 `README.md` 中暴露

- Alternatives
    - 

- Description
    - 
