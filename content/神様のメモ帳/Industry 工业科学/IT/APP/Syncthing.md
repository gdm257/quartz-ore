---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/License/MPL
- flag/APP/Download
---

- Con
    - NOT Support `syncthing decrypt` subcommand for [[Windows]]
        - [Untrusted (Encrypted) Devices — Syncthing documentation](https://docs.syncthing.net/users/untrusted.html#decrypting-data)
    - 自建发现服务器不支持 [[Traefik]] 反代
        - [Syncthing Discovery Server — Syncthing 文档 --- Syncthing Discovery Server — Syncthing documentation](https://docs.syncthing.net/users/stdiscosrv.html#reverse-proxy-setup)
        - [Syncthing Global discovery server behind traefik reverse proxy - Support - Syncthing Community Forum](https://forum.syncthing.net/t/syncthing-global-discovery-server-behind-traefik-reverse-proxy/20922/10)
    - bug 巨多，用的我怀疑人生，~~已弃~~，转自建
        - [自建 syncthing 服务同步 Logseq 笔记](https://blog.haydenhayden.com/blog/syncthing-self-host)

- Fundamentals
    - [[ChatGPT]]
    - 是的，Syncthing的ID和公钥指纹存在一定的关系。
    - Syncthing中的ID是一个唯一标识符，它通常是一个长字符串，用于标识与之通信的设备。在第一次启动Syncthing时，该设备会生成一个新的ID，同时也会生成一个与该ID相关联的公钥和私钥对。这些密钥将用于该设备与其他设备之间的加密和身份验证。
    - 在Syncthing中，ID和公钥指纹之间的关系是这样的：设备的ID是基于其公钥生成的。具体地说，ID是公钥的哈希值的前16个字符。因此，通过查看设备的ID和公钥指纹，用户可以确认公钥是与设备ID对应的，从而确保通信的安全性。
    - Syncthing使用了一种叫做指纹（Fingerprint）的技术来确认公钥的合法性。设备A在发送其公钥时，会同时生成一个SHA256哈希值，作为该公钥的指纹。设备B收到该公钥后，会计算公钥的SHA256哈希值，并将其与设备A发送的指纹进行比较。如果它们一致，说明该公钥来自于设备A，公钥交换就是安全的。
