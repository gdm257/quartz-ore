---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## Qv2ray
### 路由

在说路由之前，做一些总结。要解决「走代理还是直连」这个问题，唯一的方法就是建立规则，哪种网站走代理，哪种不走，哪个 IP 走代理哪个不走，都在这张表里写的明明白白。

如果是 v2ray，我们通常有 2 重保障：

1. qv2ray/v2rayn/clash 可以自定义一些路由规则，每个客户端规则的格式可能不一样
2. v2ray-core 自带有 geoip.dat geosite.dat

如果一个请求能在自定义的路由规则里匹配上，那就按照自定义的路由规则处理。如果并没有这样一条规则，那就用 v2ray-core 自带的 geoip.dat geosite.dat 来匹配。如果还是匹配不了，那就没办法了，默认是一律直连处理。ss ssr trojan 也差不多是这样。



在首选项-连接设置里面点开“绕过中国大陆”选项即可开启路由模式（pac模式），我们可以测试一下访问国内网站时候都是显示outBound_DIRECT 直连模式，外网访问的时候是显示的你配置的协议的名称。

    AsIs：只使用域名进行路由选择。默认值。
    IPIfNonMatch：当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配：
        当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；
        解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。
    IPOnDemand：当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。

简而言之，根据某开发者的暴论发言：

    AsIs：快速解析，不精确分流；
    IPIfNonMatch：解析稍慢，分流精确；
    IPOnDemand：没卵用。

    注：IPOnDemand 理应是最慢但最精确的，但大多数情况下，IPIfNonMatch 已经足够，因此 IPOnDemand 的实际效果并不明显。

你可以根据你的实际需求，选择相应的域名策略。通常来说，IPIfNonMatch 是大多数情况下的理想选择

Qv2ray 中的按照 域名阻断 -> 域名代理 -> 域名直连 -> IP阻断 -> IP代理 -> IP直连 的优先级进行匹配，如果匹配失败，则私有地址和大陆境内地址直连，否则走代理。

最后这句如果匹配失败情况，应该是用 v2ray 资源目录下的 geoip.dat geosite.dat 来判断是大陆地址的。如果连这两个文件也无法判断，那就直连。

我是资深用户！我需要更精确的分流规则！🤔

推荐使用 V2Ray 规则文件加强版 项目，仓库地址为 Loyalsoldier/v2ray-rules-dat
(opens new window)。🤗

V2Ray 路由规则文件加强版，可代替 V2Ray 官方 geoip.dat 和 geosite.dat 规则文件，兼容 Trojan-Go。利用 GitHub Actions 北京时间每天早上 6 点自动构建，保证规则最新。

下载地址：

    如果无法访问域名 raw.githubusercontent.com，可以使用第二个地址（cdn.jsdelivr.net），但是内容更新会有 12 小时的延迟。

    Windows 用户可通过 Scoop 来安装：
    scoop bucket add sushi https://github.com/kidonng/sushi
    scoop install -g v2ray-rules-dat

    非 Windows 用户：

    点击上面下载地址，下载 geoip.dat 和 geosite.dat
    把下载下来的 geoip.dat 和 geosite.dat 文件放入到 V2Ray 的规则文件目录，替换掉原来的 geoip.dat 和 geosite.dat
    修改 V2Ray 配置文件，配置参考下面 👇👇👇



【IP 写法】

用正则来解释各个类型是如何匹配的

geoip:<双字符国家代码>
geoip:private
x.x.x.x
x.x.x.x/x
ext:FileName:Tag

"ext:geoip.dat:cn" 等价于 "geoip:cn"
那么 "ext:geosite.dat:cn" 就应该等价于 "geosite:cn"
所以 geoip: geosite: 后边跟的其实是这两个文件所包含的 Tag，严格来说 geoip: geosite: 并不该单独分为一类，它们其实是 ext:FileName:Tag 的简写罢了

"geoip:private" 应该是特指所有的私有地址，应该在 geoip.dat 里有 private 这个 tag，所以一个字都不能改。

在 [routing] 配置中，类别越靠前（上），优先级越高


【域名写法】

用正则来解释各个类型是如何匹配的

```
geosite:<域名类别>
domain:String$
full:^String$
String
regexp:<regexp>
ext:FileNameinV2RayResourceFolderwithoutExpanedName:Tag
```

域名类别详见  v2fly/domain-list-community 项目的 data 目录，目录下的每一个文件名都是域名类别，如 115、google、apple、baidu、bilibili 等，有上千个呢