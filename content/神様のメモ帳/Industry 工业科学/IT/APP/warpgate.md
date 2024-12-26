---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/_Theme/NAT
---

- Pro
    - Support MFA
        - 用户配置界面，disable `Any Credential`，启用N个凭证，就是N因素认证认证，同时输入 N 个凭证才能登录

- Con
    - Stateful
        - User 是有状态的，上一个 Session 的状态在下一个 Session 也能用
        - 千万注意记得注销内网账号
    - NOT Support RDP/VNC/[[PostgreSQL]]/MongoDB
    - NOT Support OTP for MySQL
