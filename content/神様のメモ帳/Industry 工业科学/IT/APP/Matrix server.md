---
aliases:
- Matrix server
- synapse
tags:
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
---

- Con
    - NOT Support change domain
        - 不能换域名，写死在数据库里的

- Installation
    - [安全与加密 | NerChat!](https://www.neboer.site/nerchat/docs/security/)

- Description
    - Matrix == 开源的分布式聊天服务器






Megolm密钥库上传服务器 + 安全密钥用户自己保管 == 对「聊天密钥」进行零知识加密

聊天密钥 用于在「加密房间」里的信息的加密

安全密钥 相当于 1password 主密码。

密钥库 相当于 你上传到 1password 的密码库。

不同的加密房间有不同的聊天密钥，所有密钥都存储在设备本地，这就是 Megolm 密钥库。这意味着，如果设备丢失，你将再也无法解密聊天内容，因为密钥库只存在于这台设备上。为了避免设备丢失风险，我们将密钥库进行加密，上传加密的密钥库到服务器，密钥我们自己保管好，不给任何人知道，这就是安全密钥。这样即便设备丢失，我们也能从服务器取回备份。服务器不知道安全密钥，就看不了我们的密钥库。这就完成了密钥库的零知识加密

非加密房间 就跟 tg 一样，内容能被服务器提供者查看

加密房间 类似于 mega，只有知道密钥才能解密内容，服务器只负责存储，无法解密内容



Hodgson解释说，在去中心化网络中，聊天中的任何数据都将复制到参与者使用的服务器中。

原来如此

如果参与者希望保持对话的私密性，则他们必须“不拥有”所有这些服务器，以确保对话的安全。

但是，多个服务器只会增加攻击面，因此需要端到端加密。

