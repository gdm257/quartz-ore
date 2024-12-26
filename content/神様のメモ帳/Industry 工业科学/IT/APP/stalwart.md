---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/Implement__/Mail/Server
---

- Version
    - [mail-server/UPGRADING.md at main · stalwartlabs/mail-server](https://github.com/stalwartlabs/mail-server/blob/main/UPGRADING.md)

- Objects
    - Users
        - Support as receiver
        - Support as sender
    - Groups/Lists
        - Support 作为收件邮箱地址
        - NOT Support 作为发件邮箱地址

- Con
    - Unstable
        - `x.y.z` 的 `z` 版本号更新可能 upgrade/downgrade 失败
        - 版本兼容性非常差，几个月数次更新，每次都不能平滑升级，各种坑
        - 艹，从 `0.9` 升级到 `0.10`，好不容易登上去了，他妈的 accounts/groups/lists/roles/domains etc 全没了，尼玛几百 MB 的 rocksdb 数据库是摆设啊
        - [mail-server/UPGRADING.md at main · stalwartlabs/mail-server](https://github.com/stalwartlabs/mail-server/blob/main/UPGRADING.md)
        - [Redirect URI must be HTTPS. · stalwartlabs/mail-server · Discussion #859](https://github.com/stalwartlabs/mail-server/discussions/859)
    - NOT Support whitelist
        - 亲测无效，依旧被标记为垃圾邮件
