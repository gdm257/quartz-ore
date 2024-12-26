---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## ddns-go

```bash
ddns-go command
Options:
    -l :9876    listen ip:port
    -f 300    同步时间间隔(s)
    -c /path/to/config-file    Default to ~/.ddns_go_config.yaml



loli:
还是太危险了，
太多 listen 0.0.0.0
容易被封
可能泄露隐私




被停宽带被警告并不是因为 ddns 。
而是对外提供了 http 服务，简而言之不允许对外有网页展示，比如路由器管理界面，比如群晖主页，emby 页面

这个简单想想就知道不可能，运营商怎么知道你有没有用 DDNS ？扫描所有域名，然后检测是否有域名解析到了你的 IP 地址？先不说扫描所有域名是否可行，就算运营商这么做了，假如有人故意把域名解析到别人的 IP 呢？运营商就真的去找对应 IP 的人要求整改？

家宽动态公网 IP 已经开 DDNS 挂游戏服务器两三年了，没出过问题。

广东电信，ddns 用了一年，对外有 https 的 nas 管理界面，暂时没问题

不一定会被停宽带，但是可能被运营商 dns 污染成 127.0.0.1 ，联通干过这事


```