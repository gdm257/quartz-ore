---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## V2Ray

[Project V](https://www.v2ray.com/)

[UUID Generator](https://www.uuidgenerator.net/)

[v2ray的模板们](https://github.com/KiriKira/vTemplate)

[V2Ray 配置生成器](https://intmainreturn0.com/v2ray-config-gen/)

[VeekXT | 支持 4.x 版本的配置文件生成器](https://www.veekxt.com/utils/v2ray_gen)

[Ping and TCP port check 测试网站 搬瓦工出品](http://ping.pe/)

[推荐使用的几种组合的传输速率对比 v2ray-doc/v2ray speed test v4.27.2.md at master · badO1a5A90/v2ray-doc](https://github.com/badO1a5A90/v2ray-doc/blob/master/v2ray%20speed%20test%20v4.27.2.md)

[什么是中继/中转节点？以及中继节点的架构特点和作用 - DuyaoSS-机场测速和简介](https://www.duyaoss.com/archives/2741/)

[高级路由设置 | Qv2ray](https://qv2ray.net/manual/route.html#%E5%85%A8%E5%B1%80%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99)

[Routing 路由 | V2Fly.org](https://www.v2fly.org/config/routing.html)

[Hackl0us/GeoIP2-CN: 最小巧、最准确、最全面、最实用的中国大陆 GeoIP2 数据库及 IP 地址段](https://github.com/Hackl0us/GeoIP2-CN)

[alecthw/mmdb_china_ip_list: Geoip MaxMind Database for china ip list! This is also an example of generating MaxMind Database!](https://github.com/alecthw/mmdb_china_ip_list)

[Loyalsoldier/v2ray-rules-dat: 🦄 🎃 👻 V2Ray 路由规则文件加强版，可代替官方 geoip.dat 和 geosite.dat 规则文件，兼容 Trojan-Go。Enhanced edition of V2Ray rules dat files, compatible with Trojan-Go.](https://github.com/Loyalsoldier/v2ray-rules-dat)

[v2fly/domain-list-community: Community managed domain list. Generate geosite.dat for V2Ray.](https://github.com/v2fly/domain-list-community)

[ACL4SSR/ACL4SSR at master](https://github.com/ACL4SSR/ACL4SSR/tree/master)

[Loyalsoldier/clash-rules: 🦄️ 🎃 👻 Clash Premium 规则集(RULE-SET)。](https://github.com/Loyalsoldier/clash-rules)

[sherpya/geolite2legacy: MaxMind GeoLite2 (CSV) to Legacy format converter](https://github.com/sherpya/geolite2legacy)

[配置文件预处理 · Clash for Windows](https://docs.cfw.lbyczf.com/contents/parser.html)

[Clash for Windows 自定义规则整合 - iBug](https://ibug.io/cn/2020/07/clash-for-windows-custom-rules/)

[新版CFW利用Parser或Mixin功能，支持旧格式Clash配置文件 · Issue #1092 · Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg/issues/1092)

[V0.11.5 无法获取policies和rules，在0.9.5的版本以及0.8.4版本都可以。 · Issue #1072 · Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg/issues/1072)

[电信/联通/移动？国内主流运营商国际线路浅谈-Puresys纯净系统-软件下载](https://www.puresys.net/3707.html)

[聊聊Tun 透明代理的多种实现方式，以及如何避免 routing loop | 胖成煤气罐](https://www.chaochaogege.com/2021/08/01/57/)

[Ubuntu「一键」设置代理 | Sukka's Blog](https://blog.skk.moe/post/enable-proxy-on-ubuntu/)

[njzydark/Mellow: A V2Ray client with TUN support.](https://github.com/njzydark/Mellow)

[Quantumult X 小白系列教程 · erdongchanyo/Rules](https://github.com/erdongchanyo/Rules/tree/main/Quantumult%20X)



### 管理

安装：
wget https://install.direct/go.sh
sudo bash go.sh
sudo bash go.sh -f # 强制重装
bash go.sh -h # 查看帮助

无论是 VPS 还是个人电脑，时区是什么无所谓，因为 V2Ray 会自动转换时区，但是时间一定要准确。

如果你的服务器架构是 OpenVZ，那么使用上面的命令有可能修改不了时间，直接发工单联系 VPS 提供商的客服吧，就说你在 VPS 上运行的服务对时间有要求，要他们提供可行的修改系统时间的方法。

使用 WebSocket 是因为搭配 Nginx / Caddy / Apache 只能用 WebSocket，使用 TLS 是因为可以流量加密，看起来更像 HTTPS。

docker 与 直接安装的目录一样：
/usr/bin/v2ray/v2ray：V2Ray 主程序；
/usr/bin/v2ray/v2ctl：V2Ray 工具，很少用；
/etc/v2ray/config.json：配置文件；
/usr/bin/v2ray/geoip.dat：IP 数据文件
/usr/bin/v2ray/geosite.dat：域名数据文件


测试配置文件
v2ray -test


启动
v2ray --config=/etc/v2ray/config.json
v2ray -config /etc/v2ray/config.json
或者用 systemd 等工具把 V2Ray 作为服务在后台运行



### 协议


V2Ray 哪个协议好

没啥需求就用 TCP
追求更加安全就用 WS + TLS，有域名就行
ISP 多作怪用动态端口
小鸡网络不好就用 mKCP mkcp估计永远凉了 以前用的时候真快


**速度优先**：VMess 协议、mKCP 协议、Mux.Cool 协议，内部路由分流
**隐私优先**：TLS (完整实现，非伪装)
**稳定优先**：HTTP 伪装、BT 伪装等，以及 Mux.Cool 协议。

V2Ray 在设计时已考虑到多个功能相互组合的使用，比如你可以使用 VMess + TLS 来达到隐私和速度的双重保证，或者使用 VMess + Mux 来提升速度和稳定性。也考虑到不同的用户的需求不同，V2Ray 的所有功能都可以选择打开或关闭，不会把任何一个功能强加给用户。不同的配置可以达到不同的效果，而在 V2Ray 中，你只需要一个配置文件就可以应对这些不同的需求。




分析一个软件是否安全的过程称为“Threat modeling”
一个代理（翻墙）协议可能具备的三要素。任何一个翻墙协议都具备以上三要素中的几个或全部。
一、传输：能在 A、B 两个主机之间建立一条安全可靠的通信通道，用于传输数据；
二、协议：对于将要传输的数据，能将这些数据的目的地告知代理服务器；
三、内容：可以对传输的数据进行优化，比如压缩、合并等。


顺便整理一下常用协议所具备的要素，仅供参考：

- HTTP/1.1: 协议

- HTTP/2 (不带 TLS): 协议+内容

- TLS: 传输

- Shadowsocks: 传输+协议。AEAD 只是强化了传输，并没有添加新的要素。

- ShadowsocksR: 传输+协议

- KcpTun: 传输+内容

- [GoProxy](https://github.com/phuslu/goproxy "This link will take you away from steemit.com"): 等价于 HTTP/2 + TLS，即传输+协议+内容

- VMess (V2Ray): 传输+协议

- mKCP (V2Ray): 传输

- WebSocket (V2Ray): 传输

- Mux (V2Ray): 协议+内容

ws tcp 还是推荐chacha20  因为防火墙连大企业的合法vpn 因为用了AES 也封 aes 这个有特征了。单加密性能上讲 手机端chacha x86 pc端 aes。不，只要手机CPU支持AES硬解，速度就快。armv8都支持chacha20 auth_aes128_md5



### VLESS

总之一句话，等 v2fly clash subconverter 完善 vless 了，就把 Vmess on WS with TLS (Nginx) 换成 Vless on WS with TLS (Nginx) 就是了，会有一两成速度的提升，如果还在用 Vmess，就不要加密（别选 auto aes-128-gcm chacha20-poly1305），因为套了 TLS 之后加密没意义。

### XTLS

最近 v2flay 4.29 更新了一个黑科技 XTLS，说是能让硬路由大幅提升速度甚至翻倍，我心里一惊，讨论群一翻，说是什么缝合 TLS、内层 TLS、外层 TLS balabala，总之愣是没把原理看明白。于是上网搜了几篇博文，一看，嗨，本质不就是把 v2ray server 当作 NAT 嘛，还嚷嚷着什么 the future，还以为多大牛逼呢。总之先摘抄一段：

当我们使用基于 TLS 的代理浏览 HTTPS 网站、刷手机 APP 时，其实是两层 TLS：外层是代理的 TLS，内层是网站、APP 的 TLS。

XTLS 做了什么？
从第二个内层 TLS data record 开始，数据不二次加解密，直接转发，且从外面看还是一条连贯的普通 TLS。
Write 和 Read 妥善处理非预期数据和中间人攻击等，对任何干扰的反应与普通 TLS 表现一致。
服务端无法被主动探测出差异：VLESS 在验证 UUID、该用户请求且可以用 XTLS 后才会开启它的特殊功能。
这个黑科技的效果？
1.其实 XTLS 就是无缝拼接了两条货真价实的 TLS，因此绝大多数流量无需二次加解密了（安全代理中性能最强，没有之一）。
2.对路由器、服务器等中间设备特别友好：降低了 90% 以上的加解密开销，几乎只剩流量转发。对于手机，则是减少耗电。
3.链式代理的革命：即使多个 XTLS 嵌套，绝大多数流量也始终只需加解密一次（类似 TOR 的网络应该非常需要 XTLS）。

VLESS + XTLS 对于硬路由等无AES硬解设备，会有网速翻倍或CPU使用率减半等奇效。

这和 NAT 有什么区别？果然科技以起名为本。还说什么 the future，XTLS 就是拿来给代理用的，正常人直接就与 server 建立 TLS 连接了，哪有搞个跟 v2ray 链式节点一样的需求？

### vmess:// 链接

`vmess://xxxxxx`

Qv2ray 生成的链接不够标准，建议用 V2rayN 生成。

### v2rayN

地址：ng.lolineko.com
协议：ws
伪装类型：none
**伪装域名：不填**
**路径：/nekopoi-cdn**
**底层传输安全：tls**
allowInsecure：默认 true
alterld：推荐 6，数值设置成客户端小于等于服务端即可，越大越占服务器内存

### conf.json

conf.json 可用配置全览：
{
  "log": {},    //建议使用
  "api": {},        //内置的远程控置 API
  "dns": {},    //内置的 DNS 服务器
  "stats": {},    //当此项存在时，开启统计信息
  "routing": {},    //路由
  "policy": {},    //本地策略
  "reverse": {},    //反向代理
  "inbounds": [],    //入站协议
  "outbounds": [],    //出站协议
  "transport": {}    //如何与其他服务器建立网络连接
}

### outbounds 分流

"AsIs": 只使用域名进行路由选择。默认值。
"IPIfNonMatch": 当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配；
    当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；
    解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名；
"IPOnDemand": 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配；

```json
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "your.web.site",
            "port": 443,
            "users": [
              {
                "id": "******-***-***-***-***************",
                "alterId": 64,
                "email": "you@your.web.site",
                "security": "auto"
              }
            ]
          }
        ],
        "servers": null,
        "response": null
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": null
        },
        "tcpSettings": null,
        "kcpSettings": null,
        "wsSettings": {
          "connectionReuse": true,
          "path": "/youpath",
          "headers": null
        },
        "httpSettings": null,
        "quicSettings": null
      },
      "mux": {
        "enabled": true,
        "concurrency": 8
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": null
      },
      "streamSettings": null,
      "mux": null
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": {
          "type": "http"
        }
      },
      "streamSettings": null,
      "mux": null
    }
  ],
```

### Nginx 站点配置

```nginx
    # 基础部分
    listen 443 ssl;
    listen [::]:443 ssl; #IPv6
    root /home/test/wwwroot/hacg.monster;
    index index.html index.htm index.nginx-debian.html;
    server_name hacg.monster;


    # ssl 部分
    ssl on; #慎用，会让 typecho 失效
    ssl_certificate /usr/local/nginx/conf/ssl/hacg.monster/fullchain.cer;
    ssl_certificate_key /usr/local/nginx/conf/ssl/hacg.monster/hacg.monster.key;
    ssl_protocols         TLSv1.2 TLSv1.3;
    #版本1 ssl_ciphers           HIGH:!aNULL:!MD5;
    ssl_ciphers           ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
  ssl_session_timeout 1d; #不需要
  ssl_session_cache shared:MozSSL:10m; #不需要
  ssl_session_tickets off; #不需要
  ssl_prefer_server_ciphers off; #不需要


    # v2ray start
    location /nekopoi {

      #非 ws 请求返回 404
      if ($http_upgrade != "websocket") { # WebSocket协商失败时返回404
          return 404;
      }

      proxy_redirect off;
      proxy_pass http://v2ray:4552;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $host;

      # Show real IP in v2ray access.log
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    #v2ray end



        #安全性 location start

        #正则匹配 jpg 等后缀
        location  .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }


        #正则匹配 js、css
        location  .*\.(js|css)?$
        {
            expires      12h;
        }


        #正则匹配 带有 /.well-known 的路径（证书验证）
        location  /.well-known
        {
            allow all;
        }


        #正则匹配 带有 /. 的路径（安全性）
        location  /\.
        {
            deny all;
        }

        # location end

```


### Nginx 军哥主配置

```
# Nginx 默认配置 /usr/local/nginx/conf/nginx.conf
user  www www;

worker_processes auto;
worker_cpu_affinity auto;

error_log  /home/wwwlogs/nginx_error.log  crit;

pid        /usr/local/nginx/logs/nginx.pid;

#Specifies the value for maximum file descriptors that can be opened by this process.
worker_rlimit_nofile 51200;

events
    {
        use epoll;
        worker_connections 51200;
        multi_accept off;
        accept_mutex off;
    }

http
    {
        include       mime.types;
        default_type  application/octet-stream;

        server_names_hash_bucket_size 128;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile on;
        sendfile_max_chunk 512k;
        tcp_nopush on;

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml application/xml+rss;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        #limit_conn_zone $binary_remote_addr zone=perip:10m;
        ##If enable limit_conn_zone,add "limit_conn perip 10;" to server section.

        server_tokens off;
        access_log off;

server
    {
        listen 80 default_server reuseport;
        #listen [::]:80 default_server ipv6only=on;
        server_name _;
        index index.html index.htm index.php;
        root  /home/wwwroot/default;

        #error_page   404   /404.html;

        # Deny access to PHP files in specific directory
        #location  /(wp-content|uploads|wp-includes|images)/.*\.php$ { deny all; }

        include enable-php.conf;

        location /nginx_status
        {
            stub_status on;
            access_log   off;
        }

        location  .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location  .*\.(js|css)?$
        {
            expires      12h;
        }

        location  /.well-known {
            allow all;
        }

        location  /\.
        {
            deny all;
        }

        access_log  /home/wwwlogs/access.log;
    }
include vhost/*.conf; #引用 vhost 文件夹里的所有 .conf 文件的代码
}

```

###  v2ray的TLS流量可被简单特征码匹配精准识别（附PoC) #704 

[v2ray的TLS流量可被简单特征码匹配精准识别（附PoC) · Issue #704 · v2ray/discussion](https://github.com/v2ray/discussion/issues/704)

PC 方案 1：将 v2ray-core 更新至 4.23.2 及以上
PC 方案 2：配置客户端 outbound - streamSettings - tlssettings - AllowInsecureCiphers = false
Android 方案 1：配置客户端 outbound - streamSettings - tlssettings - AllowInsecureCiphers = false
Android 方案 2：坐等作者更新内核

此次问题的严重性在于该强特征完全由客户端发起，也就是服务器是无法控制的，如果不解决，可能搞死一大批机场，或者迫使机场禁用 v2ray 的 tls。

不使用v2ray的tls就不受影响，但本人使用的 wss 是受影响的。


### DNS

支持 IP、域名、DoH，不支持 DoT。
