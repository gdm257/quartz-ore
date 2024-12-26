---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Network
---

[Tor Check](https://check.torproject.org/)

[torrc examples](https://gist.github.com/0x9090/f2a1d6069f0c330e3a2b)

[torrc(5) — tor — Debian testing — Debian Manpages](https://manpages.debian.org/testing/tor/torrc.5.en.html)

[tor/torrc.sample.in at main · torproject/tor](https://github.com/torproject/tor/blob/main/src/config/torrc.sample.in)

[configurations/torrc at master · 0xdea/configurations](https://github.com/0xdea/configurations/blob/master/tor/torrc)

[Tor Project Forum - Defend yourself against tracking and surveillance. Circumvent censorship.](https://forum.torproject.net/)

[I am having trouble connecting to Tor, and I can’t figure out what’s wrong. | Tor Project | Support](https://support.torproject.org/connecting/connecting-2/#common-log-error-3-failed-to-complete-tls-handshake)

[详解Tor Bridge及Pluggable Transport（Part 1）-安全客 - 安全资讯平台](https://www.anquanke.com/post/id/194480)

[Yawning/obfs4: The obfourscator (Courtesy mirror)](https://github.com/Yawning/obfs4)


```bash
tor command
Usage:
    tor [options]

Options:
    -h --help
    --version
    -f --torrc-file FILE

Description:
    * Tor 是加入 Tor Network 的工具.
    * tor 可简单理解为自带节点的 v2ray.
    * tor 启动后会自动连上 tor 网络，将其监听的端口作为代理即可使用.
    * SSL 握手错误，非常玄学，申请并配置 bridge，才能用，不懂是不是机场 ban 了 tor 网络直连，导致只能用 bridge.

Configuration:
    * torrc

    # scoop 安装自带
    DataDirectory "D:/Portable/scoop/apps/tor/current/Data/Data"
    GeoIPFile "D:/Portable/scoop/apps/tor/current/Data/Tor/geoip"
    GeoIPv6File "D:/Portable/scoop/apps/tor/current/Data/Tor/geoip6"

    # 监听端口
    SocksPort 9057
    ControlPort 9058

    # 前置代理
    Socks5Proxy 127.0.0.1:7890
    # 或者 HTTPProxy 127.0.0.1:1088
    # 大陆无法直连 tor 网络，所以你仍然需要给 tor 一个 ss/v2ray 前置代理

    # Bridge
    UseBridges 1
    ClientTransportPlugin obfs4 exec D:/Portable/scoop/apps/tor-browser/current/TorBrowser/Tor/PluggableTransports/obfs4proxy.exe managed
    bridge obfs4 95.217.133.142:1082 8E9A39B77D43E0D32EAAB5BFEAC22BB74BC3CE22 cert=y3oESenn+w91XlVfmQ97u98+DUuwCSFBhgCNWrY0cQKJaHuImkADqehFZucTOo4tjQUiGA iat-mode=0
    bridge obfs4 51.68.94.50:42692 C7377F5083EA3F4BEF0A78FD4F4596896AF919E4 cert=u/sE+sTzkMonFm4d16daqriYheIoeYpDHAZeTD7KIZf554YLa9CZwnM5kO7KeFNxbtt9cA iat-mode=0
    bridge obfs4 213.54.144.43:80 7CAADEC09A95C5CB84E65B7F0D201E87103AF80F cert=l6SOEMHloGNHksDsYNvZJqkm9nCunJoSZ+jyvoH9ZheCmha4l+ymweCIdE9cuMyuWnYzVg iat-mode=0








torrc 文件也就是 tor 的配置文件，上面找好的网桥，添加到 torrc 里就可以使用了。

torrc 配置文件尽量简洁，可用网桥不要填太多，建议 10 个左右，太多的话不利于排错，而且会拖慢整体速度。

网桥这一块并不能成为tor安全环境的重点环节，因现在的网站基本都是SSL加密，网桥是无日志的，即使是蜜罐也不能拿你怎么办；靠蜜罐抓人相当于守株待兔，收益与成本明显不成正比；再说，人家设置蜜罐节点干嘛不去自由国家，就非得傻愣愣地在你们知道的几个专制国家设置蜜罐？

```