---
aliases:
  - w2
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
  - flag/APP/Network/_Theme/PacketCapture
npm: whistle
commands:
  - w2
  - whistle
---

[关于whistle · GitBook](https://wproxy.org/whistle/)

[avwo/whistle: HTTP, HTTP2, HTTPS, Websocket debugging proxy](https://github.com/avwo/whistle)

[Whistle 实现原理 —— 从 0 开始实现一个抓包工具-技术圈](https://jishuin.proginn.com/p/763bfbd6e447)

```bash
w2 command
Examples:
    w2 start --port 2685 --socksPort 2686 --dnsServer https://doh.pub/dns-query
    w2 ca    安装根证书
    w2 proxy    设为系统代理
    w2 status
    w2 stop

Usage:
    w2 [options] <subcommand> [args]

Subcommands:
    help
    start
    run    调试模式启动
    stop
    restart
    status
    exec
    ca    安装根证书
    proxy    设为系统代理
    use/add [file]    rules文件 (.whistle.js by default)

Options:
    -h --help
    -D, --baseDir ~/.WhistleAppData
        set the configured storage root path
    -H, --host boundHost    INADDR_ANY by default
    -p, --port 8899    8899 by default
    -P, --uiport 2684    port of webui

Rules:
    # 注释
    pattern operator01 operator02 operator03
    <pattern> <operator-protocol>://<uri>

Rule Examples:
    /.*/ http-proxy://127.0.0.1:7890    # http 后置代理
    /./ http-proxy://127.0.0.1:7890    # http 后置代理
    /.*/ socks://127.0.0.1:7890    # socks 后置代理
    baidu.com 127.0.0.1    # hosts

Pattern:
    # 域名匹配
    - www.google.com
    - http://www.google.com
    - https://www.google.com
    - https://www.google.com/
    - [{http,https,ws,wss,tunnel}://][sub.]domain.com[/]
    # 路径匹配
    - www.google.com/search
    - [{http,https,ws,wss,tunnel}://][sub.]domain.com/path[/to/xxx]
    # 精确匹配
    - $domain.com/only/this/path    任何协议
    - $http://domain.com/only/this/path    指定协议
    - !$...    非
    # 正则匹配
    - /[\w\d]+.google.com/i
    - /[\w\d]+.google.com/
    - /pattern/i
    - !/pattern/i    非

Protocols:
    太多了

DNS:
    * w2 无论是否 `/./ socks://ip:port`，w2 都进行 DNS 解析.
    * w2 设置了 http/socks 代理如 clash，clash 自己会做 DNS 解析.
    * 我猜，http/socks 代理最终使用的是自己的 DNS 解析结果.
    * 基于上一点，w2 有代理时，w2 自己做 DNS 解析纯属多余.

Description:
    * Whistle 的 DNS 有严重问题，启动时务必手动指定 --dnsServer <IP>
    * webui 没有 Fiddler 好看，但总比 Charles 强.
    * 比 Fiddler 自己写脚本友好多了.
    * 比 mitmproxy 友好多了，简单易用.
    * Tree View 相当于 charles 视图，赞，可以丢掉 charles 惹.
    * 我宣布，whistle 已经全方面超越 fiddler、charles 成为抓包首选了.
    * 高级功能很强大、很灵活，高级操作全靠配置 rules.
    * rule 的概念与我的 yac2lanraragi 的 rule 非常像.
    * rule 的匹配方式多种多样.
    * rule 命中后的操作很丰富，修改请求响应 etc.
    * 支持插件系统.


Root Certificate

Android 的 https 越来越难抓了，不 root 根本没法安装根证书。装了根证书，在 wifi 里配置 Fiddler etc 代理即可抓包 https。
安装根证书就完了吗？不，很多 App 根本不信任系统里用户安装的证书，就行 Firefox 那样，然后这些 App 还不能手动安装证书——这些 App 无论如何也无法抓包。

Windows：直接双击 .crt 证书文件 - 安装证书 - 当前用户/本地计算机都行 - 下一页 - 自定义证书存储 - 浏览 - 选择「受信任的根证书发布机构」- 一路确定即可


Firefox 的 HTTP(S) 代理/抓包问题：

1. Firefox 只使用内置 CA，抓包软件的根证书装系统上没用，得装 Firefox 里
2. Firefox 禁用代理，使用 SwitchOmega.
3. about:config - network.trr.mode 改为 3
4. about:config - network.trr.uri 改为 https://doh.opendns.com/dns-query


```
