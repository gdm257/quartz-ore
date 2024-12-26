---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## Quantumult X
### 节点

圈X节点订阅链接可以通过 ACL4SSR 提供的订阅转换生成。

订阅转换 - 进阶模式 - 填写节点 - 客户端选「圈X」- 勾选「输出为 Node List」

`[server_local]` 手动添加 or URI or 扫码 的节点
`[server_remote]` 节点订阅


### 策略组

```ini
[policy]

url-latency-benchmark=♻️ 自动选择, server-tag-regex=(?=.*)^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
static=🚀 节点选择, resource-tag-regex=.*, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Static.png
round-robin=🔮 负载均衡, server-tag-regex=.*, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Round_Robin.png

#节点地区分类
static=🇭🇰 香港节点, server-tag-regex=(?=.*(香港|HK|(?i)Hong))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hong_Kong.png
static=🇯🇵 日本节点, server-tag-regex=(?=.*(日本|JP|(?i)Japan))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Japan.png
static=🇺🇲 美国节点, server-tag-regex=(?=.*(美国|美國|洛杉矶|西雅图|费利蒙|US|(?i)States|American))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States.png
static=🇨🇳 台湾节点, server-tag-regex=(?=.*(台湾|台灣|TW|(?i)Taiwan))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/TW.png
static=🇰🇷 韩国节点, server-tag-regex=(?=.*(韩国|韓國|南朝鲜|KR|(?i)Korean))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Korea.png
static=🇷🇺 俄罗斯节点, server-tag-regex=(?=.*(俄罗斯|俄羅斯|RU|(?i)Russia))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Russia.png
static=🇸🇬 新加坡节点, server-tag-regex=(?=.*(新加坡|狮城|SG|(?i)Singapore))^((?!(专线|手游|游戏|(?i)IPLC|IEPL|game)).)*$, img-url=https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Singapore.png
# 其中 CMedia 策略组为中国媒体，GMedia 为国际媒体，Outside 为境外链接，Mainland 为大陆链接，Others 为最终规则
static=AdBlock, reject, direct, img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/AdBlock.png
static=Apple, direct, Outside, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Apple.png
static=AppleIOSUpdate, reject, direct,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Apple.png
static=Microsoft, direct, Outside, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Microsoft.png
static=Netflix, Outside, direct, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Netflix.png
static=YouTube, Outside, direct, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/YouTube.png
static=GMedia, Outside, direct, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/GMedia.png
static=CMedia, direct, proxy, img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/CMedia.png
static=Speedtest, Outside, direct, 🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Speedtest.png
static=Outside, proxy, direct, ♻️ 自动选择,🔮 负载均衡,🚀 节点选择,🇭🇰 香港节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇺🇲 美国节点,🇰🇷 韩国节点,🇷🇺 俄罗斯节点,🇸🇬 新加坡节点,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Outside.png
static=Mainland, direct, proxy, img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Mainland.png
static=Others, Outside, direct, ♻️ 自动选择,🔮 负载均衡,🚀 节点选择,🇭🇰 香港节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇺🇲 美国节点,🇰🇷 韩国节点,🇷🇺 俄罗斯节点,🇸🇬 新加坡节点,🚀 节点选择,img-url=https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/IconSet/Others.png
```

相当于 Clash 的节点分组。

总结，QuantumultX 总共提供 4 种类型策略组，

- static静态策略组，可以嵌套其它所有类型的策略组，`**需自己手动选择路线/子策略组**`；
- Available 健康检查策略组，只可直接套用节点，不可嵌套其它策略组，自动选择`**第一个可用的节点`(需要至少`两个`节点)**；
- Round-Robin轮询策略，只能直接套用节点，不可以嵌套其它策略组，按网络请求`**轮流使用所有节点**`；
- SSID策略组，自然也是可以套用其它类型的策略组，`**根据 网络/Wi-Fi 切换 节点/策略**`



```ini
[policy]
; static policy points to the server in candidates you manually selected.
// Static静态策略组，即你手动选择 节点/子策略
; available policy points to the first available server in candidates based on server_check_url(concurrent url latency test will be launched when the policy has been triggered).
// Available 可用性策略组：选择列表里 第一个可用的节点 （url-test不超时）
; round-robin policy points to the next server in candidates for next connection.
// round-robin 轮询策略组：按请求依次使用列表中的节点
; ssid policy points to the server depending on the network environment.
// ssid策略组，根据Wi-Fi网络的的ssid名, 移动网络，切换节点/策略
以下是具体写法，千万记得要去掉 ；号才会生效

;static=policy-name-1, Sample-A, Sample-B, Sample-C,img-url=https://example.com/icon.png
//静态策略组，static=策略组名,节点 1, 节点 2,策略组-C
;available=policy-name-2, Sample-A, Sample-B, Sample-C,img-url=https://example.com/icon.png
//可用性策略组，available=策略组名,节点 1,节点 2,节点 3
;round-robin=policy-name-3, Sample-A, Sample-B, Sample-C,img-url=https://example.com/icon.png
/轮询策略组，round-robin = 策略组名, 节点 1, 节点 2,节点 
;ssid=policy-name-4, Sample-A, Sample-B, LINK_22E171:Sample-B, LINK_22E172:Sample-C,img-url=https://example.com/icon.png
//ssid策略组，ssid=你的组名,4g下默认策略,Wi-Fi下默认策略, wifi-A:策略 A, wifi-B:策略 B
;------------
;以下为进阶玩法（版本 1.0.10 291+）详细介绍看 3.6 小节
;通过正则表达式将某些订阅或某些节点添加到策略组中（同时添加两参数时取交集)
;static=policy-name, resource-tag-regex=^sample, server-tag-regex=^example, img-url=https://example.com/icon.png
```


### 分流

```ini
[filter_local]
host-suffix, local, direct
ip-cidr, 10.0.0.0/8, direct
ip-cidr, 17.0.0.0/8, direct
ip-cidr, 100.64.0.0/10, direct
ip-cidr, 127.0.0.0/8, direct
ip-cidr, 172.16.0.0/12, direct
ip-cidr, 192.168.0.0/16, direct
geoip, cn, direct
final, Others


[filter_remote]
#
# Params "tag" and "enabled" are optional.
#

;https://raw.githubusercontent.com/crossutility/Quantumult-X/master/filter.txt, tag=Sample, force-policy=your-policy-name, enabled=true

;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;                          ;
;          去广告
;                          ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; ======== ACL4SSR ========
;
; 强烈不推荐！
; 需要开启「资源解析器」才能成功导入，且解析是无法分组的
; resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
;
; 本碎片只包含几百条常见广告关键字、广告联盟。无副作用，放心使用
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/BanAD.list, tag=ACL4SSR 广告联盟, force-policy=reject, update-interval=2592000, opt-parser=true, enabled=false
; BanEasyListChina AdblockPlus中的中国所有的屏蔽域名 7k
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/BanEasyListChina.list, tag=ACL4SSR EasyListChina 去广告, force-policy=reject, update-interval=2592000, opt-parser=true, enabled=false
; BanEasyPrivacy 1.2w 条
;https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/BanEasyPrivacy.list
; BanEasyList 1.6w
;https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/BanEasyList.list
;
; ======== 神机 ========
;
; 去广告 800+
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list, tag=神机 去广告, update-interval=2592000, opt-parser=false, enabled=true
;
; ======== Misc ========
;
; App 去广告 ReFix
https://github.com/zqzess/rule_for_quantumultX/raw/master/QuantumultX/rules/ReFix.list, tag=广告ReFix, update-interval=2592000, opt-parser=false, enabled=true
; 去广告 1.5w
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/AdBlock_lite.list, force-policy=AdBlock Lite, tag=AdBlock, enabled=false
; 恶意网站
;https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Hijacking/Hijacking.list
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;                          ;
;          直连
;                          ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; 本地局域网
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/LocalAreaNetwork.list, tag=ACL4SSR 本地局域网, force-policy=direct, update-interval=-1, opt-parser=true, enabled=true
; 中国云服务商 IP（阿里、百度、腾讯）
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/ChinaCompanyIp.list, tag=ACL4SSR 中国云服务商IP, force-policy=direct, update-interval=2592000, opt-parser=true, enabled=false
; ICBC
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/ICBC/ICBC.list, tag=ICBC, update-interval=2592000, opt-parser=true, enabled=true
; 国内媒体
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/ChinaMedia.list, tag=ACL4SSR 国内媒体, force-policy=direct, update-interval=2592000, opt-parser=true, enabled=false
# 国内媒体
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/CMedia.list, force-policy=CMedia,tag=CMedia, enabled=true
; 国内域名 600+
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/ChinaDomain.list, tag=ACL4SSR 国内域名, force-policy=direct, update-interval=2592000, opt-parser=true, enabled=false
# 大陆
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Mainland.list, force-policy=Mainland,tag=Mainland , enabled=true
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;                          ;
;           代理
;                          ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Telegram
;https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/Telegram.list
# Netflix
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Netflix.list, force-policy=Netflix,tag=Netflix , enabled=true
# YouTube
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/YouTube.list, force-policy=YouTube,tag=YouTube , enabled=true
# Spotify
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Music/Spotify.list, tag=Spotify, force-policy=Spotify, update-interval=86400, opt-parser=false, enabled=true
; 国外视频
;https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Streaming.list, tag=国外视频, force-policy=Outside, update-interval=2592000, opt-parser=false, enabled=false
# 国外媒体
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/GMedia.list, force-policy=GMedia,tag=GMedia , enabled=true
; ProxyLite
https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/ProxyLite.list, tag=ACL4SSR 轻量代理, force-policy=proxy, update-interval=2592000, opt-parser=true, enabled=false
# 国外网站 2.5w
;https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Outside.list, force-policy=Outside, tag=Outside, enabled=false
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;                          ;
;       特殊 Domain
;                          ;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; OneDrive
;https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/OneDrive.list
; GoogleCN
;https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/GoogleCN.list
; Microsoft
;https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/Microsoft.list

; Microsoft
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Microsoft.list, force-policy=Microsoft,tag=Microsoft , enabled=true
; Apple
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/Apple.list, force-policy=Apple, tag=Apple, enabled=true
; Apple iOS 更新屏蔽
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rules/AppleIOSUpdate.list, force-policy=AppleIOSUpdate,tag=AppleIOSUpdate,enabled=true
; Apple 一般来说直连即可
;https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/Apple.list
; Apple 一般来说直连即可
;https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list
;
;https://github.com/ACL4SSR/ACL4SSR/blob/master/Clash/Netflix.list

#speedtest测速
https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Speedtest.list, force-policy=Speedtest,tag=Speedtest , enabled=true
```




### 重写

复写跟 mitm 用于去广告，以及某些重定向，比如将 `google.cn` 重定向 `google.hk`

而接下来的js部分，也是集成在QuantumultX的rewrite模块中。此部分功能强大，但也相对复杂

一般用户而言，订阅某几位大佬的复写规则即可

```ini
[rewrite_remote]
; [重定向] 神机魔改
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/QuantumultX/Redirect/Redirect.conf
; [去广告] 神机魔改
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/QuantumultX/AdvertisingLite/AdvertisingLite.conf
; [去广告] App 检测更新
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/QuantumultX/Upgrade/Upgrade.conf
; [去广告] App 加强、去广告（需要配合 Refix 规则）
https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/QuantumultX/rewrite/MyRewrite.conf, tag=广告屏蔽功能, update-interval=86400, opt-parser=false, enabled=true
; [去广告] 知乎助手 Lite
;https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_lite.qxrewrite, tag=知乎助手_去广告, update-interval=86400, opt-parser=false, enabled=true

```



### MitM

安装 MIMT 根证书：

1. `Quantumult X` > `设置` > `MitM` > `生成证书` > `配置证书` > 跳转到 Sarifi 下载描述文件
2. 进入`设置` > `通用` > `关于本机` > `证书信任设置` > 安装证书 `Quantumult X CA xxxx`
3. 设置 - 通用 - 关于本机 - 证书信任设置 - 启用证书 `Quantumult X CA`
4. `Quantumult X` - 设置 - MitM - 启用


复写跟 mitm 用于去广告，以及某些重定向，比如将 `google.cn` 重定向 `google.hk`

而接下来的js部分，也是集成在QuantumultX的rewrite模块中。此部分功能强大，但也相对复杂

一般用户而言，订阅某几位大佬的复写规则即可


### GeoIP2

```
https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb
https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb
```


### DNS

Quantumult X 配置文件中 `[dns]` 部分

```ini
;no-system
no-ipv6
;国外
server=1.0.0.1:853
;国内
server=119.29.29.29
;高级
server=/*.abc.com/8.8.8.8

;不支持域名
;不支持 http(s) tls
```



### 资源解析器

使用 资源解析器 后，可以将 Quantumult X 原本不识别的 节点或订阅链接 轻松的导入。

Quantumult X 配置文件中 `[general]` 部分，加入：

`resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js`




### JS 脚本

Quantumult X中的 构造请求 功能让用户按照Cron表达式定时任务的方式运行JavaScript脚本，常见有签到、各类薅羊毛等脚本。为了能让大佬们制作的JS能长久运行，各位可以在推荐阅读中自行深入研究相关资料，或者进入Quantumult X 的TG群组研究探讨，这里仅介绍简易用法。

脚本一般包含两个部分，定时脚本+cookie获取，如果发现脚本没有有效运行，请检查有没正确添加改脚本的cookie获取重写。
脚本地址一般会有使用说明。


### Misc.

`长按 右下角按钮`

`向左滑动 右下角按钮`

`长按 顶栏模块的右上角圆圈`

`隐藏 VPN 图标`：点右下角图标→点右上角...（新TF中为最下方 “其它设置”）→ 打开 排除路由0.0.0.0/31
