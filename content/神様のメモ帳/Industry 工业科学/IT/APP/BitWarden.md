---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Text
scoop:
- bitwarden
- bitwarden-cli
---

- References
    - [vwxyzjn/portwarden](https://github.com/vwxyzjn/portwarden)
    - [ttionya/vaultwarden-backup](https://github.com/ttionya/vaultwarden-backup)
    - [密码学3 如何设置安全强度 - 掘金](https://juejin.cn/post/7175182978769748025)

- Pro
    - Support E2E Encryption (Client Side Encrypt/Decrypt)
        - 「主密码」永远不会以任何形式发送给服务器，顶多用来签个名（登录认证）
    - Anti MITM
        - 即便 HTTPS 流量被中间人解密（机场 capture 流量、CA 失信、服务端 SSL 证书密钥泄露 etc），由于 [[BitWarden]] 采用端到端加密，HTTP(S) response body 里的数据已经通过用户的「指纹短语」进行加密
        - 如果没有主动注销/自动注销，登录后产生的 Session/Token 可以被中间人利用。但是中间人依旧无法获取任何有效数据，因为加解密全在客户端完成
        - 不过要注意，中间人此时是可以利用 Session/Token 的全部权限，如果服务器允许 Session/Token 权限对服务器上的数据进行删除，虽然中间人什么都没得到，但可以删库使用户丢失整个数据库（如果 Session/Token 有这个权限的话）。手动注销很重要！
        - [Bitwarden 安全性分析 - 杀手自留地](https://iwww.me/661.html)
        - [对自建bitwarden的一些看法-美国VPS综合讨论-全球主机交流论坛 - Powered by Discuz!](https://hostloc.com/thread-948755-1-1.html)

- Test
    - PBKDF2 SHA-256 with 600,000 登录秒开
    - PBKDF2 SHA-256 with 700,000 登录七八秒
    - [PBKDF2 vs Argon2 - Finally some hard numbers : Bitwarden](https://www.reddit.com/r/Bitwarden/comments/1167rwm/pbkdf2_vs_argon2_finally_some_hard_numbers/)

- Fundamentals
    - Credential
        - Credential is saved in Windows Credential Manager
