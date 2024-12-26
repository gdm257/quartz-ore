---
tags:
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Server/Service
---

[Cloudflare 支持域名泛解析接入使用CDN服务 – VPS攻略](https://www.vpsgongyi.net/archives/3321.html)

- 网上不少文章说「DNS 泛域名解析」只有 CF 付费用户、企业用户才能用，今天（2023.03）我试了下，其实免费用户也可以
- `*.sub.domain.com` 不包括 `sub.domain.com`，亲测
- `*` 只能用于域名表达式的最左边，并且之后紧跟 `.`
