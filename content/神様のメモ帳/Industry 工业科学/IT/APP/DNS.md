---
tags:
  - Label/Industry-工业科学/IT/TCP_IP/Protocol/7-应用层
records:
  - A
  - AAAA
  - CNAME
  - MX
  - TXT
---

> [!warning] 2023.12
> 被运营商突然 DNS 阻断，国外公共 DoH/DoT 都用不了
> 阿里全是污染，诈骗中心警告

## Brief

- References
    - [👀 DNS 小记 - Gufeng Shen](https://gufeng.sh/note/dns/)

    - [如何选择适合的公共 DNS？(2020) | Sukka's Blog](https://blog.skk.moe/post/which-public-dns-to-use/)

    - [浅谈在代理环境中的 DNS 解析行为 | Sukka's Blog](https://blog.skk.moe/post/what-happend-to-dns-in-proxy/)

    - [DNS 服务器类型 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/dns/dns-server-types/)

    - [什么是负载平衡？| 负载平衡器如何运作 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/what-is-load-balancing/)
    - [什么是基于 DNS 的负载平衡？| DNS 负载平衡 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/what-is-dns-load-balancing/)

- Fundamentals
    - 缺少 DoH/DoT 加密会被中间人（DNS Leak），我坚决不用

- Test
    - DNSPod：准确、快速、稳定，国内首选
    - Aliyun：稳定，但污染很难受，国内备选
    - 红鱼：已全面失效

    - CF：快速、稳定，国外首选
    - OpenDNS：快速、稳定，国外首选
    - Google：稳定、不快不慢，国外备选

    - DoH 默认端口为 443
    - DoT 默认端口为 853
    - DoT/DoH 实际效果差不多
    - 普通 DNS 默认端口为 53

- Objects
    - DNS Entry
        - `A`: [[IPv4]]
        - `AAAA`: [[IPv6]]
        - `CNAME`: another domain


## CFW

[疑问 有关clash dns 解析中fallback组的意义的疑问 · Issue #968 · Dreamacro/clash](https://github.com/Dreamacro/clash/issues/968)

- fallback 的意义在于，当域名没被域名规则匹配时，需要解析成 IP 再去匹配 IP 规则，这里的「解析成 IP」就要用 nameserver 和 fallback，fallback 可以防止 nameserver 有域名污染。因此 fallback 最好都是国外 DNS Server，无污染。当然不同 DNS 模式细节不同，但简单来说就是这样

```yaml
mixin: # object
  ################
  #              #
  #     DNS      #
  #              #
  ################
  dns:
    enable: true
    nameserver:
      - tls://1.12.12.12:853 # DNSPod
    fallback:
      - tls://1.0.0.1:853 # CF
      - tls://208.67.220.220:853 # OpenDNS
  ################
  #              #
  #     TAP      #
  #              #
  ################
  # dns:
  #   enable: true
  #   enhanced-mode: redir-host # 或 fake-ip
  #   listen: 0.0.0.0:53
  #   nameserver:
  #     - 223.5.5.5

```


## 流水帐

摸鱼的纯 DoT/DoH，请用 rubyfish。
日用的纯 DoT/DoH，DNSPod + rubyfish。

Clash DNS Server 支持 IP、域名、DoH、DoT，亲测，全都能用。

Clash 的 DNS 行为：无论代理还是直连、TUN 还是普通模式，都会对 nameserver 和 fallback 的 DNS Server 发出查询请求。

Android 可以通过开关重连 wifi 来清除 DNS 缓存。

手机纯 DoH 封面加载变慢了，但还是能加载出来。纯 rubyfish 部分封面加载缓慢，而且国内直连延迟很高，用起来很卡。google 直接部分图片加载失败。看来加载不出来的图片是被 google 抢答了，造成 DNS 污染。

TL;DR

旁路由最适合的场景是需要在尽量不改动原有网络布局的前提下，增加科学上网等功能。甚至可以理解为类似二级路由

在科学上网领域，旁路由其实就是透明代理，或者说是全局代理（严格说应该是全局劫持），三者等价。我更喜欢叫全局代理，好理解



要想 摸鱼 没有隐患，必须 全局DoH

要想 全局DoH

第一，全局代理。有完美解决方案。Android 代理软件本来就是全局代理。Windows Linux macOS 需要开启 TUN 来全局代理，Linux 也推荐用 TUN，iptables 不仅配置麻烦容易出错，且节点只支持静态 IP、域名，订阅就没法用了。路由器当透明代理就不说了，反正公司里一般办不到。

第二，启用 DNS，配置 nameserver、fallback，并且 DNS Server 必须全是 DoT/DoH
doh 和 dot 可以解决网关、运营商收集 DNS 请求和抢答的问题，但是无法解决 DNS 服务器自己存在的问题，我们只能选择信任 DNS 服务器

第三，必须严格完成上述要求，否则域名信息就会泄漏给公司网关，摸鱼就会被发现。
原因是：翻了下之前的 issue，好像 clash 只是先匹配规则，能匹配到国外的域名直接远程解析，不动用内置 dns。
匹配不到，则并发调用 nameserver/fallback查询（可能被公司网关、运营商中间人攻击），返回结果用 geoip 匹配，匹到国内的用 nameserver，匹不到用 fallback 的结果
准确的说，nameserver 返回的GeoIP 不是 CN 的时候就会取 fallback DNS 的值。此时Clash实际上并不会向代理服务器发送这个IP地址，而是直接将host发送给代理服务器，在代理服务器中进行DNS解析，这样可以让请求获取到更合适的IP地址，更好的利用CDN资源。
规则里匹配到需要走 Proxy 的, 干脆就不使用解析到的 IP, 会直接向代理服务器发送域名, 这样也就解决了 CDN 的问题
而规则里匹配 DIRECT 的, 则向解析到的 IP 直接发起连接

```yaml
dns:
      enable: true
      ipv6: false
      # listen: 0.0.0.0:53
      # enhanced-mode: redir-host # 或 fake-ip
      # # fake-ip-range: 198.18.0.1/16 # 如果你不知道这个参数的作用，请勿修改
      # fake-ip-filter: # fake-ip 白名单列表
      #   - '*.lan'
      #   - localhost.ptlogin2.qq.com

      nameserver:
        - 1.2.4.8
        - 114.114.114.114
        - 223.5.5.5
        - tls://13800000000.rubyfish.cn:853
        #- https://13800000000.rubyfish.cn/

      fallback: # 与 nameserver 内的服务器列表同时发起请求，当规则符合 GEOIP 在 CN 以外时，fallback 列表内的域名服务器生效。
        - tls://13800000000.rubyfish.cn:853
        - tls://1.0.0.1:853
        - tls://dns.google:853

        #- https://13800000000.rubyfish.cn/
        #- https://cloudflare-dns.com/dns-query
        #- https://dns.google/dns-query

      fallback-filter:
        geoip: true # 默认
        ipcidr: # 在这个网段内的 IP 地址会被考虑为被污染的 IP
          - 240.0.0.0/4
# 1. clash DNS 请求逻辑：
    #   (1) 当访问一个域名时， nameserver 与 fallback 列表内的所有服务器并发请求，得到域名对应的 IP 地址。
    #   (2) clash 将选取 nameserver 列表内，解析最快的结果。
    #   (3) 若解析结果中，IP 地址属于 国外，那么 clash 将选择 fallback 列表内，解析最快的结果。
    #
    #   因此，我在 nameserver 和 fallback 内都放置了无污染、解析速度较快的国内 DNS 服务器，以达到最快的解析速度。
    #   但是 fallback 列表内服务器会用在解析境外网站，为了结果绝对无污染，我仅保留了支持 DoT/DoH 的两个服务器。
    # 
    # 2. clash DNS 配置注意事项：
    #   (1) 如果您为了确保 DNS 解析结果无污染，请仅保留列表内以 tls:// 或 https:// 开头的 DNS 服务器，但是通常对于国内域名没有必要。
    #   (2) 如果您不在乎可能解析到污染的结果，更加追求速度。请将 nameserver 列表的服务器插入至 fallback 列表内，并移除重复项。
    # 
    # 3. 关于 DNS over HTTPS (DoH) 和 DNS over TLS (DoT) 的选择：
    #   对于两项技术双方各执一词，而且会无休止的争论，各有利弊。各位请根据具体需求自行选择，但是配置文件内默认启用 DoT，因为目前国内没有封锁或管制。
    #   DoH: 以 https:// 开头的 DNS 服务器。拥有更好的伪装性，且几乎不可能被运营商或网络管理封锁，但查询效率和安全性可能略低。
    #   DoT: 以 tls:// 开头的 DNS 服务器。拥有更高的安全性和查询效率，但端口有可能被管制或封锁。
    #   若要了解更多关于 DoH/DoT 相关技术，请自行查阅规范文档。



# 什么是 Fake IP？
# 当用户发送 DNS 请求时，代理并不发送请求到远程 DNS 服务器，而是为每个域名返回一个唯一假 IP。在指向这些假 IP 的流量发送到代理时，按查询得到的域名重置当前连接的目标。
# Fake IP 我基本理解了，不推荐任何情况下使用。「为了省去等待 DNS 解析结果的那几十毫秒，自行使用 Fake IP 进行 DNS 污染」，不但不由雅，而且不稳定。透明代理一旦出现问题，那就是相当于直接断网。风险太大，真没必要，个人使用没必要省时间，生产环境更要追求稳定性。
# 对于浏览器之类的可以自行设置代理的软件，Fake IP 毫无用处。
# Fake IP 是给「真・全局代理」使用的。
# 简单的说，要想对目标服务器建立 TCP 连接，必须知道目标服务器 google.com 的 IP；要想知道 IP，就得进行一次 DNS 解析，于是 CFW 想办法进行完成了解析并得到 IP，将 IP 返回给被代理程序；程序向 IP 发起 TCP 连接，这个请求被透明代理劫持，根据目标 IP 匹配规则，之后就是正常的 CFW 代理流程了。
# Fake IP 的作用就是「被透明代理の程序在未完成真正的 DNS 解析前，就建立 TCP 连接」。真・全局代理 CFW，或者叫透明代理，接收到被透明代理的应用的 DNS 请求时，直接返回一个 Fake IP，透明代理的应用得到这个 Fake IP 以为就是真正的 IP，于是会向 Fake IP 发起 TCP 连接。CFW 会接收到这个 TCP 请求，解析发现目标 IP 居然是 Fake IP，于是转封请求，改为 Fake IP 对应的真正域名，然后就是正常 CFW 代理流程。
# 看到了吗，与其说是 Fake IP 优化了流程，不如说是「透明代理天生比手动指定代理多了几个步骤」，「Fake IP 模式减少了透明代理的多余步骤，使透明代理和指定代理拥有相同的效率」，所以我才说「Fake IP 对指定了 CFW 代理的程序毫无用处」，因为人家本来就没有多余步骤。
# 而在 Fake IP 模式下，浏览器、应用程序都是对 Fake IP 发起连接，如果没有代理客户端对连接进行重新封转，那么这部分流量就不能被发往真实的目的 IP，因此所有流量都必须经过代理客户端，而根据端口、设备的分流就需要由代理客户端自己实现。


```

## 国内 DoT

[Public DNS+——DNSPod推出的域名递归解析服务](https://www.dnspod.cn/products/publicdns)

- tls://1.12.12.12:853 # DNSPod
- tls://120.53.53.53 # DNSPod
- tls://dot.pub:853 # DNSPod
- *tls://223.5.5.5:853 # Aliyun*
- *tls://223.6.6.6:853 # Aliyun*
- *tls://dns.alidns.com:853 # Aliyun*
- ~~tls://dns.rubyfish.cn:853 # 红鱼~~
- ~~tls://v6.rubyfish.cn:853 # 红鱼~~
- ~~tls://13800000000.rubyfish.cn:853 # 红鱼~~

## 国内 DoH

[Public DNS+——DNSPod推出的域名递归解析服务](https://www.dnspod.cn/products/publicdns)

- https://1.12.12.12/dns-query # DNSPod
- https://120.53.53.53/dns-query # DNSPod
- https://doh.pub/dns-query # DNSPod
- https://dns.pub/dns-query # DNSPod
- https://sm2.doh.pub/dns-query # DNSPod (国密)
- *https://223.5.5.5/dns-query # Aliyun*
- *https://223.6.6.6/dns-query # Aliyun*
- *https://dns.alidns.com/dns-query # Aliyun*
- https://dns.twnic.tw/dns-query
- ~~https://dns.rubyfish.cn/dns-query # 红鱼~~
- ~~https://v6.rubyfish.cn/dns-query # 红鱼~~
- ~~https://13800000000.rubyfish.cn/ # 红鱼~~

## 国内普通 DNS

[Public DNS+——DNSPod推出的域名递归解析服务](https://www.dnspod.cn/products/publicdns)

- 119.29.29.29 # DNSPod
- 119.28.28.28 # DNSPod
- *223.5.5.5 # Aliyun*
- *223.6.6.6 # Aliyun*
- *114.114.114.114 # 南京信风*
- *114.114.115.115 # 南京信风*

## 国外 DoT

[DNS over TLS · Cloudflare 1.1.1.1 docs](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-tls/)

- tls://1.0.0.1:853 # CF
- tls://1.1.1.1:853 # CF
- tls://one.one.one.one:853 # CF
- tls://1dot1dot1dot1.cloudflare-dns.com:853 # CF
- tls://208.67.220.220:853 # OpenDNS
- tls://208.67.222.222:853 # OpenDNS
- tls://dns.opendns.com:853 # OpenDNS
- tls://8.8.8.8:853 # Google
- tls://8.8.4.4:853 # Google
- tls://dns.google:853 # Google
- tls://dot.sb:853 # dns.sb

## 国外 DoH

[Make API requests to 1.1.1.1 over DoH · Cloudflare 1.1.1.1 docs](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/)

[OpenDNS - Cisco Umbrella Enhances Support of DNS Over HTTPS - Cisco Umbrella](https://umbrella.cisco.com/blog/enhancing-support-dns-encryption-with-dns-over-https)

- https://1.1.1.1/dns-query # CF
- https://1.0.0.1/dns-query # CF
- https://one.one.one.one/dns-query # CF
- https://cloudflare-dns.com/dns-query # CF
- https://dns.cloudflare.com/dns-query # CF
- https://208.67.220.220/dns-query # OpenDNS
- https://208.67.222.222/dns-query # OpenDNS
- https://doh.opendns.com/dns-query # OpenDNS
- https://familyshield.opendns.com/dns-query # OpenDNS FamilyShield
- https://doh.familyshield.opendns.com/dns-query # OpenDNS FamilyShield
- https://dns.google/dns-query # Google
- https://dns64.dns.google/dns-query # Google
- https://194.242.2.2/dns-query # Mullvad(主)
- https://194.242.2.3/dns-query # Mullvad(主)
- https://doh.sb/dns-query # dns.sb

## 国外普通 DNS

[What is 1.1.1.1? | Cloudflare](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/)

[Public DNS  |  Google Developers](https://developers.google.com/speed/public-dns/)

- 1.0.0.1 # CF
- 1.1.1.1 # CF
- 208.67.220.220 # OpenDNS
- 208.67.222.222 # OpenDNS
- 8.8.8.8 # Google
- 8.8.4.4 # Google

## 网关

- 192.168.1.1 # 路由器
