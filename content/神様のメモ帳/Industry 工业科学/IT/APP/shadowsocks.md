---
aliases:
- Shadowsocks
- ShadowsocksR
- SS
- SSR
- SSRR
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
---

## shadowsocks

参考

[神代綺凜常用资源集](https://github.com/Tsuk1ko/SS-and-SSR-Collection)

[qingshuisiyuan/electron-ssr-backup: electron-ssr原作者删除了这个伟大的项目，故备份了下来，不继续开发,且用且珍惜](https://github.com/qingshuisiyuan/electron-ssr-backup)

[SS机场常用服务器线路微普及--慢慢填充 - DuyaoSS-机场简介](https://www.duyaoss.com/archives/57/)

[SS/SSR 简介 - 聪聪 Blog](https://congcong0806.github.io/2018/04/20/SS/)

[ShadowsocksR服务端伪装成 正常网站流量，以更好的欺骗流量匹配 | 逗比根据地](https://doubibackup.com/hi10k-7p-5.html)

[大概是萌新也看得懂的SSR功能详细介绍&使用教程](https://moe.best/tutorial/shadowsocksr.html)

[关于Shadowsocks的小白常见问题 总结篇 | 逗比根据地](https://doubibackup.com/6r9z6_wi-2.html)

[❤️ 基础知识 — SS & SSR 1 documentation](https://ss-ssr.readthedocs.io/en/latest/SS_SSR.html)

[秋水ss四合一脚本 - 雨羊的博客 - CSDN博客](https://blog.csdn.net/y201619819/article/details/84867074)

[分享2个酸酸仁乳(SSRR)魔改一键安装脚本 - OJB的空间](https://ojb.space/archives/5/)

[Shadowsocks.org 不懂是谁的 SS](https://shadowsocks.org/en/index.html)

[NyanChanMeow/SSRSpeed: Shadowsocks(R), V2Ray Batch Speed Test Tool](https://github.com/NyanChanMeow/SSRSpeed)


### 概述

一共 2 大系列，分别是 SS 系、SSR 系。每个系列都有 2 段时期，SS 系是 clowwindy SS 时期、SS 第二时期，SSR 系是 breakwa11 SSR 时期、Akkariiin SSRR 时期。我们 SS SSR 系分开看。

clowwindy SS 时期顾名思义，就是最开始 clowwindy 创造出 Shadowsocks 并维护的时期，后来他被请去喝茶而停止了开发，该时期结束。Shadowsocks 被其他人接手开发一直到现在（2019 年 10 月），这就是 SS 系第二时期。

SSR 是在 clowwindy 时期由 breakwa11 通过改写 SS 而产生的，后来 breakwa11 遭受人肉攻击而停止开发 SSR，breakwa11 SSR 时期结束。之后 Akkariiin 接手继续开发 SSR 一直到现在（2019 年 10 月），即 Akkariiin SSRR 时期。

对于这 4 段时期，每段时期都有这 4 种软件：server、windows client、android client、ios client。由于墙的发展，现在只建议使用 SS 系第二时期的软件，SSR 系建议使用 SSRR 时期的软件或 SSR breakwa11 最后一版。

【时间线】
2015年8月，Shadowsocks 的作者 clowwindy 被迫删除其 Github 上的所有关于 Shadowsocks 的代码并从此退出开发。
2017年7月，ShadowsocksR 的作者 breakwa11 遭到人肉和恶意攻击，删除代码，退出开发。
2019年5月为止，随着主要维护者的相继退出，Shadowsocks libev 版成了一颗独苗，虽然缓慢却仍在不断地更新。（我看了下，貌似 go go2 都还在更新）
@Akkariiin（头像莲华）接盘后的 ShadowsocksR（ShadowsocksRR）[GitHub - shadowsocksrr/shadowsocksr-libev](https://github.com/shadowsocksrr/) 至今（2019年10月）还在更新

### SS 系

【clowwindy SS 时期】
clowwindy SS 时期（第一时期）：[clowwindy 个人仓库（已被清空）](https://github.com/clowwindy)、[shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks)
最后一版备份：[ziggear/shadowsocks: backup of https://github.com/shadowsocks/shadowsocks](https://github.com/ziggear/shadowsocks)

【SS 第二时期】
SS 第二时期：[shadowsocks · 更新中](https://github.com/shadowsocks)，包括了后人接手还在更新的 server、windows client、android client、osx client 的仓库。

server libev：[shadowsocks/shadowsocks-libev: libev port of shadowsocks](https://github.com/shadowsocks/shadowsocks-libev)
server go：[shadowsocks/shadowsocks-go: go port of shadowsocks (Deprecated)](https://github.com/shadowsocks/shadowsocks-go)
server go2：[shadowsocks/go-shadowsocks2: Next-generation Shadowsocks in Go](https://github.com/shadowsocks/go-shadowsocks2)
client windows：[shadowsocks/shadowsocks-windows: If you want to keep a secret, you must also hide it from yourself.](https://github.com/shadowsocks/shadowsocks-windows)
client android：[shadowsocks/shadowsocks-android: A shadowsocks client for Android](https://github.com/shadowsocks/shadowsocks-android)
client osx：[shadowsocks/ShadowsocksX-NG: Next Generation of ShadowsocksX](https://github.com/shadowsocks/ShadowsocksX-NG)


【加密方式】
SS 加密推荐使用 AEAD 加密，包括以下几个：

aes-128-gcm
aes-192-gcm
aes-256-gcm
chacha20-ietf-poly1305
xchacha20-ietf-poly1305

对于移动设备来说，ARM v8 以后的 CPU 使用aes-gcm的效率要高于chacha20，因此更推荐使用aes-256-gcm

混淆推荐使用plain，即不使用混淆插件，或者根据情况使用http_simple，例如代理网游时 UDP 遭到运营商 QoS

SS 能用 Cloudflare 中转吗？不能


### SSR 系

【SSR 时期】
[breakwa11 (破娃酱)](https://github.com/breakwa11)，也被清空了。
最后一版备份：
[shadowsocksr-backup](https://github.com/shadowsocksr-backup)
[shadowsocksrr/shadowsocksr-latest-bin-backup](https://github.com/shadowsocksrr/shadowsocksr-latest-bin-backup)
server 破娃 python 版 [shadowsocksrr/shadowsocksr: Python port of ShadowsocksR](https://github.com/shadowsocksrr/shadowsocksr) 或 [luoyemengchen/shadowsocksr-1: Python port of ShadowsocksR](https://github.com/luoyemengchen/shadowsocksr-1)
server libev  C 语言版 [shadowsocksr-backup/shadowsocksr-libev: libev port of ShadowsocksR](https://github.com/shadowsocksr-backup/shadowsocksr-libev) 或 [luoyemengchen/shadowsocksr-libev](https://github.com/luoyemengchen/shadowsocksr-libev)

【SSRR 时期】
SSRR 时期：[shadowsocksrr · Akkariiin 更新中](https://github.com/shadowsocksrr)，包括了还在更新的 server、windows client、android client、osx client 的仓库。

server libev：[shadowsocksrr/shadowsocksr-libev](https://github.com/shadowsocksrr/shadowsocksr-libev)
client electron：[shadowsocksrr/electron-ssr: Shadowsocksr client using electron](https://github.com/shadowsocksrr/electron-ssr)
client csharp：[shadowsocksrr/shadowsocksr-csharp](https://github.com/shadowsocksrr/shadowsocksr-csharp)
client android：[shadowsocksrr/shadowsocksr-android: A ShadowsocksR client for Android](https://github.com/shadowsocksrr/shadowsocksr-android)

【加密方式】
协议推荐使用chain_a或auth_aes128_md5或auth_aes128_sha1；

若需要代理网游等对延迟较为敏感的应用，不建议使用chain_a

当协议为chain_a时，加密推荐使用none，否则加密推荐使用aes-256-cfb等 cfb 加密

混淆推荐使用plain或者根据情况使用http_simple，例如代理网游时 UDP 遭到运营商 QoS

V2Ray 速度不理想 / 不如 SS？由于 加密的方式 不同，出现速度差异也很正常，不过只要影响速度的还是小鸡的线路。



### electron-ssr 客户端

安装依赖：
sudo apt install libcanberra-gtk-module libcanberra-gtk3-module gconf2 gconf-service libappindicator1

安装 deb：
sudo dpkg -i *.deb

运行：
electron-ssr

日志：
~/.config/electron-ssr/logs

配置：
~/.config/gui-config.json


### user-rule.txt

shadowsocksR 一般通过 PAC.txt 分流代理，用户在 user-rule.txt 添加自己的 PAC 规则。后来添加了代理规则模式，可选择用户自定义，则自动调用 user.rule 进行分流。

- 在**全局模式**下，代理规则选择用户自定义，网络流量通过 shadowsocksR，shadowsocksR 通过 user.rule 判断哪些需要走代理，哪些需要直连，哪些需要拒绝连接，哪些需要本地代理。

- 在**PAC模式**下，代理规则选择用户自定义，网络流量先通过 PAC 判断哪些流量可以流向 shadowsocksR，shadowsocksR 通过 user.rule 判断哪些需要走代理，哪些需要直连，哪些需要拒绝连接，哪些需要本地代理。

```user-rule.txt

通配符支持，如 *.example.com/* 实际书写时可省略 * 如 .example.com/ 意即 *.example.com/*
正则表达式支持，以\开始和结束， 如 [\w]+://example.com\
例外规则 @@，如 @@.example.com/ 满足@@后规则的地址不使用代理
匹配地址开始和结尾 |，如 |http://example.com、example.com| 分别表示以 http://example.com 开始和以 example.com 结束的地址
|| 标记，如 ||example.com 则 http://example.com 、https://example.com 、ftp://example.com 等地址均满足条件，只用于匹配地址开头
注释 ! 如 ! Comment
分隔符^，表示除了字母、数字或者 _ - . % 之外的任何字符。如 http://example.com^ ，http://example.com/ 和 http://example.com:8000/ 均满足条件，而 http://example.com.ar/ 不满足条件



!我是注释233
!我也是注释666

!通配符 *
*.example.com/
.example.com/
!二者等效

!正则表达式
\<regexp>\

!前缀匹配
|http://xxx.com
!上边这条 http https 都能匹配

!后缀匹配
http://xxx.com|
!http://233.com/index.html 不会走代理

完整域名
通配符
整个域名



```


### user.rule

user.rule 提供规则四种匹配结果类型 ：

remoteproxy 经过SSR服务器连接（走代理）
localproxy 经过本地代理连接，或没有配置本地代理时使用直连连接（本地代理指的是：选项设置 - 二级(前置)代理）
direct
reject

规则之间有先后次序之分。若出现相同的规则，那么后一条规则可覆盖前一条规则。


```user.rule
首先匹配域名，如域名没有匹配的，再去DNS解析，查到IP后，再匹配IP规则，或IP规则也没有匹配，那么最终结果是remoteproxy，即一个空的user.rule文件等于全局



hostname格式支持三种写法：

1. 直接写完整域名如 b.com ，此时不匹配a.b.com这类子域名
2. 带通配符的如 *.b.com ，此时不匹配b.com，但能匹配a.b.com这类子域名
3. 用于匹配此域名及其子域名的 .b.com ，此时任何末尾为 b.com 的域名均匹配

注意， b.com 与 .b.com 是会相互覆盖的（后写的一个有效），如果你需要 b.com 和它的子域名走不同的规则，那么分别写 b.com 和 *.b.com 两条规则即可

域名规则还有一种特殊的 rule，类似 hosts，例如：

a.com 127.0.0.1
.b.com 123.123.123.123





IP段规则

格式： ip1 ip2 rule

注意，ip2必须大于或等于ip1，此规则应用于包含ip1、ip2及它们之间的所有IP。如果两条不同的IP规则发生IP重叠，那么重叠的那部分以后一条规则为准


.google.com remoteproxy # .google.com 后缀的所有网址都走代理

59.24.3.174 59.24.3.225 remoteproxy # 59.24.3.174 到 59.24.3.225的IP段都走代理

```

### pac.txt





### Client

### 推荐客户端

- `iOS`: Surge 4, Quantumult(X), Shadowrocket
- `Android`: ClashA
- `macOS`: Surge for Mac, ClashX
- `Windows`: Clash for Windows
- `Linux`: Clash  
    *(下方有下载地址)*

### iOS 客户端 (全区可下载,包括中区)

- [Quantumult X](https://testflight.apple.com/join/VCIvwk2g) (支持SS/SSR)
- [Outline](https://apps.apple.com/cn/app/outline-app/id1356177741) (支持SS)
- [Kitsunebi](https://testflight.apple.com/join/IdFRwmNy) (支持SS/V2Ray)
- [Pharos lite](https://testflight.apple.com/join/DAs8hpAh)
- [Shadowing Pro](https://testflight.apple.com/join/qnawUskU)
- [SuperRapid](https://testflight.apple.com/join/c2J4uEty)
- [A.BIG.T IV](https://testflight.apple.com/join/3aArQFMQ)
- [Potatso Lite](https://testflight.apple.com/join/NkF46PRd)
- [BananaNet](https://testflight.apple.com/join/v5x8B81b)
- [Mume VPN](https://testflight.apple.com/join/wgXjVEh8)
- [寒梅](https://testflight.apple.com/join/7U4YKpl2)
- [NetShuttle](https://testflight.apple.com/join/742YC03J)
- [Detour](https://apps.apple.com/cn/app/id1260141606) ¥6.00

### iOS 客户端 (仅国区下架,其他区可下载)

- [Surge 4](https://apps.apple.com/us/app/id1442620678) 免费 \+ 内购 $49.99 (支持SS/Snell/V2Ray)
- [Quantumult](https://apps.apple.com/us/app/quantumult/id1252015438) $4.99 (也叫:圈, 支持SS/SSR/V2Ray)
- [Shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118) $2.99 (也叫:小火箭, 支持SS/SSR/V2Ray)
- [Kitsunebi](https://apps.apple.com/us/app/kitsunebi-proxy-utility/id1446584073) $4.99 (支持SS/V2Ray)
- [Pharos Pro](https://apps.apple.com/us/app/pharos-pro/id1456610173) $2.99 (支持SS/SSR)
- [Pepi](https://apps.apple.com/us/app/pepi/id1283082051) $1.99
- [Potatso 2](https://apps.apple.com/us/app/id1162704202) $2.99
- [A.BIG.T](https://apps.apple.com/us/app/surfing-advanced-proxy/id1051326718) Free
- [SuperRapid](https://apps.apple.com/us/app/superrapid/id1316416848) Free
- [‎Skarp](https://apps.apple.com/us/app/skarp/id1300469689) Free
- [Ranger NetworkTool](https://apps.apple.com/us/app/ranger-networktool/id1330474376) $1.99
- [Wingy](https://apps.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911) $0.99
- [ShadowPocket](https://apps.apple.com/us/app/shadowpocket/id1354988493) $0.99
- [AnyFlow](https://apps.apple.com/us/app/anyflow-a-super-cool-network-tool/id1176894911) $4.99
- [Shadowfish](https://apps.apple.com/us/app/shadowfish/id1220680757) $0.99
- [ShadowTunnel](https://apps.apple.com/us/app/shadowtunnel/id869194885) $2.99
- [Alice](https://apps.apple.com/us/app/alice-network-proxy-utility/id1135320992) $1.99
- [Leap](https://apps.apple.com/us/app/id1253899156) $1.99
- [iCProxy](https://apps.apple.com/us/app/icproxy/id1000467304) $1.99
- [FastSocks](https://apps.apple.com/us/app/id1388244800) Free
- [ShadowLink](https://apps.apple.com/us/app/shadowlink-shadowsocks-tool/id1439686518) Free
- [Potatso Lite](https://apps.apple.com/us/app/id1239860606) Free
- [Mume VPN](https://apps.apple.com/us/app/mume-vpn/id1144787928) Free
- [NetShuttle](https://apps.apple.com/us/app/netshuttle-shadowsocksr-tool/id982708939) Free
- [Oriole](https://apps.apple.com/us/app/id1245170216) Free
- [Brook](https://apps.apple.com/us/app/brook-brook-shadowsocks-vpn-proxy/id1216002642) Free
- [Fugu2](https://apps.apple.com/us/app/fugu-2/id1215255916) Free
- [Bedrock](https://apps.apple.com/us/app/bedrock/id1362340186) Free

### macOS 客户端

- [Surge for Mac](http://nssurge.com) $49.99/$69.99/$99.99 (支持SS/Snell/V2Ray)
- [ClashX](https://github.com/yichengchen/clashX/releases) Clash的Mac图形客户端 (支持SS/V2Ray)
- [Clash](https://github.com/Dreamacro/clash/releases) 一个Go语言开发的多平台代理客户端 (支持SS/V2Ray)
- [ShadowsocksX](https://github.com/shadowsocks/shadowsocks-iOS/releases)
- [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG/releases)
- [ShadowsocksX-NG-R8](https://github.com/qinyuhang/ShadowsocksX-NG-R/releases) (支持SS/SSR)
- [ShadowsocksX-NG-R](https://github.com/leadscloud/ShadowsocksX-NG-R/releases)
- [electron-ssr](https://github.com/qingshuisiyuan/electron-ssr-backup/releases)
- [A.BIG.T](https://apps.apple.com/cn/app/a-big-t/id1114040100) ¥30.00
- [Outline](https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/Outline-Manager.dmg) Free
- [ShadowTunnel](https://apps.apple.com/cn/app/shadowtunnel-shadowsocks-shadowsocksr-client/id1187938179) Free
- [Reborn](https://github.com/langyanduan/Reborn/releases)
- [Shuttle](https://github.com/sipt/shuttle/releases)
- [shadowsocks Browser!](https://apps.apple.com/cn/app/shadowsocks-browser/id1207191724) ¥18.00
- [SsrConnectPro](https://apps.apple.com/cn/app/ssrconnectpro/id1376924741) ¥3.00
- [GoAgentX](https://pan.lanzou.com/i0dskef)
- [非官方GoAgentX](https://github.com/mithril-global/GoAgentX/releases)
- [Flora](https://github.com/huacnlee/flora-kit/releases)
- [Postern](https://apps.apple.com/us/app/poster/id411445577) 下架
- [SpechtLite](https://github.com/zhuhaow/SpechtLite/releases)
- [Buff](https://www.plutox.top)
- [夜莺](https://apps.apple.com/cn/app/id1249677933) Free + 内购

### Windows 客户端

- [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases) Clash的Windows图形客户端 (支持SS/V2Ray)
- [Clash](https://github.com/Dreamacro/clash/releases) 一个Go语言开发的多平台代理客户端 (支持SS/V2Ray)
- [ClashR](https://t.me/clashr4ssr) 支持SSR的Clash客户端 (支持SS/SSR/V2Ray)
- [Netch](https://github.com/netchx/Netch/releases) (支持SS/SSR/V2Ray)
- [Shadowsocks](https://github.com/shadowsocks/shadowsocks-windows/releases) (简称:SS)
- [simple-obfs](https://github.com/shadowsocks/simple-obfs/releases) (SS的插件)[已停更]
- [Shadowsocks 2.3.1](https://github.com/shadowsocks/shadowsocks-windows/releases/tag/2.3.1)（XP 系统可用）[已停更]
- [ShadowsocksR](https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases) (简称:SSR @breakwa11 破娃最后一版)[已停更]
- [ShadowsocksR](https://github.com/HMBSbige/ShadowsocksR-Windows/releases) (HMBSbige 修改版)
- [ShadowsocksR 4.7.0](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/ShadowsocksR_4.7.0_Windows.7z) (@breakwa11 破娃最后一版)[已停更]
- [ShadowsocksR](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/ShadowsocksR_rixCloud_Windows.7z) (SSR,rixCloud, Inc. 修改版)
- [ShadowsocksRR](https://github.com/shadowsocksrr/shadowsocksr-csharp/releases) (简称:SSRR)
- [SSRR](https://github.com/SoDa-GitHub/SSRR-Windows/releases) [已停更]
- [ShadowsocksD](https://github.com/SoDa-GitHub/SSD-Windows/releases) (简称:SSD)[已停更]
- [electron-ssr](https://github.com/qingshuisiyuan/electron-ssr-backup/releases)
- [SScap](https://sourceforge.net/projects/sscap) [已停更]
- [SSTap](https://github.com/mayunbaba2/SSTap-beta-setup) [已停更]
- [SocksCap](https://www.sockscap64.com/sockscap-64-free-download) [已停更]
- [Outline](https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/Outline-Manager.exe)
- [x2tap](https://github.com/hacking001/x2tap/releases)
- [Shuttle](https://github.com/sipt/shuttle/releases) [已停更]
- [flora](https://github.com/huacnlee/flora-kit/releases) [已停更]
- [kcptun](https://github.com/shadowsocks/kcptun/releases) [已停更]

### Android 客户端

- [ClashA](https://github.com/ccg2018/ClashA/releases) Clash的Android图形客户端 (支持SS/V2Ray)
- [Surfboard](https://manual.getsurfboard.com/cn/introduction)（Surfboard 支持导入 Surge 配置）
- [Pharos](https://github.com/PharosVip/Pharos-Android-Test/releases) (支持SS/SSR)
- [Kitsunebi](https://github.com/eycorsican/kitsunebi-android/releases)
- [Kitsunebi Google Play](https://play.google.com/store/apps/details?id=fun.kitsunebi.kitsunebi4android)
- [Shadowsocks 影梭](https://github.com/shadowsocks/shadowsocks-android/releases)
- [Shadowsocks 影梭 Google Play](https://play.google.com/store/apps/details?id=com.github.shadowsocks)
- [Shadowsocks 影梭 Google Play Beta 版](https://play.google.com/apps/testing/com.github.shadowsocks)
- [Simple Obfuscation](https://github.com/shadowsocks/simple-obfs-android/releases) (影梭的插件)[已停更]
- [Simple Obfuscation Google Play](https://play.google.com/store/apps/details?id=com.github.shadowsocks.plugin.obfs_local) (影梭的插件)
- [ShadowsocksR](https://github.com/shadowsocksr-backup/shadowsocksr-android/releases) (简称:SSR)[已停更]
- [ShadowsocksR 3.4.0.6](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/ShadowsocksR_3.4.0.6_Android.zip) (@breakwa11 破娃最后一版)[已停更]
- [ShadowsocksR](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/ShadowsocksR_rixCloud_Android.zip) (SSR,rixCloud, Inc. 修改版)
- [ShadowsocksR](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/Maying_3.4.0.8.2.zip) (SSR,魅影修改版)
- [ShadowsocksRR](https://github.com/shadowsocksrr/shadowsocksr-android/releases) (简称:SSRR)
- [Maying](https://github.com/congcong0806/congcong0806.github.io/raw/master/files/Maying_1.1.4.zip) (ShadowsocksRR, Java修改版)
- [Maying Google Play](https://play.google.com/store/apps/details?id=co.tgbot.peekfun) (ShadowsocksRR, Java修改版)
- [ShadowsocksD](https://github.com/TheCGDF/SSD-Android/releases) (简称:SSD)
- [ShadowIce Google Play](https://play.google.com/store/apps/details?id=com.github.shadowice)
- [Outline](https://play.google.com/store/apps/details?id=org.outline.android.client)
- [NetPatch](https://play.google.com/store/apps/details?id=co.netpatch.firewall)
- [Postern](https://play.google.com/store/apps/details?id=com.tunnelworkshop.postern)（Postern 支持导入 Surge 配置）
- [BifrostV](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv)
- [kcptun-android](https://github.com/shadowsocks/kcptun-android/releases)

### Linux 客户端

- [Clash](https://github.com/Dreamacro/clash/releases) 一个Go语言开发的多平台代理客户端 (支持SS/V2Ray)
- [electron-ssr](https://github.com/qingshuisiyuan/electron-ssr-backup/releases) [已停更]
- [Shadowsocks-qt5](https://github.com/shadowsocks/shadowsocks-qt5) [已停更]
- [ShadowsocksR](https://github.com/ssrbackup/shadowsocksr) (简称:SSR)[已停更]
- [Outline](https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/Outline-Manager.AppImage)
- [Avege](https://github.com/avege/avege) [已停更]
- [flora](https://github.com/huacnlee/flora-kit) [已停更]
- [Shuttle](https://github.com/sipt/shuttle)
- [kcptun](https://github.com/shadowsocks/kcptun/releases) [已停更]

### 路由器

- [Clash-Merlin](https://github.com/KOP-XIAO/Clash-Merlin/wiki)
- [fancyss](https://github.com/hq450/fancyss)
- [KoolClash](https://github.com/SukkaW/Koolshare-Clash/releases)
- [Clash for OpenWrt](https://github.com/frainzy1477/clash/releases)
- [Luci For Clash - OpenWrt](https://github.com/frainzy1477/luci-app-clash/releases)
- [OpenWRT-Shadowsocks](https://github.com/shadowsocks/openwrt-shadowsocks)
- [Padavan](https://www.right.com.cn/forum/thread-161324-1-1.html)

### V2Ray

- iOS
    - [Quantumult, Shadowrocket, Pepi](https://congcong0806.github.io/2018/04/20/SS/#ios-客户端-仅国区下架其他区可下载) ↑
    - [i2Ray](https://apps.apple.com/us/app/id1445270056) $3.99
- Windows
    - [v2rayN](https://github.com/2dust/v2rayN/releases)
    - [V2RayW](https://github.com/Cenmrev/V2RayW/releases)
    - [V2RayS](https://github.com/Shinlor/V2RayS/releases)
- macOS
    - [V2RayX](https://github.com/Cenmrev/V2RayX/releases)
    - [V2rayU](https://github.com/yanue/V2rayU/releases)
    - [V2RayC](https://github.com/gssdromen/V2RayC)
- Android
    - [Kitsunebi, BifrostV](https://congcong0806.github.io/2018/04/20/SS/#android-客户端) ↑
    - [v2rayNG](https://github.com/2dust/v2rayNG/releases)
    - [v2rayNG Google Play](https://play.google.com/store/apps/details?id=com.v2ray.ang)