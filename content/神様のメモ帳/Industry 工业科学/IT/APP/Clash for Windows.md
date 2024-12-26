---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

[Configuration · Dreamacro/clash Wiki](https://github.com/Dreamacro/clash/wiki/configuration)


Description:
    * Clash == 路由分流器 + v2ray + SS/SSR Client
    * Clash for Windows == Clash (with GUI) + TUN
    * Clash 不能直接使用 ss/ssr/v2ray 订阅链接，必须转换成 Clash 格式的订阅链接才能用，工具 sub-web + subconverter 可以生成 Clash 订阅链接
    * Clash for Windows 从 0.11.2 版本开始原生支持 SSR 协议

Configuration:
    配置路径优先级顺序
    CFW_FOLDER/data
    ~/.config/clash

Installation:
    scoop install -g clash-for-windows
    Linux Server 不方便使用 CFW，只能使用 Clash Core
    *nix desktip 运行 Clash Premiun Installer 脚本，使得 Clash 支持 TUN
    clash.service
    Home directory at /srv/clash
    Please use clash core's 'tun.dns-hijack' to handle it
    systemctl enable clash
    systemctl start clash


[Hackl0us/GeoIP2-CN: 小巧精悍、准确、实用 GeoIP2 数据库](https://github.com/Hackl0us/GeoIP2-CN)

[alecthw/mmdb_china_ip_list: Geoip MaxMind Database for china ip list! This is also an example of generating MaxMind Database!](https://github.com/alecthw/mmdb_china_ip_list)


GeoIP:
    直接替换 CFW_FOLDER/data/Country.mmdb
    https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb
    https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb


[规则编辑 | Clash for Windows](https://docs.cfw.lbyczf.com/contents/ui/profiles/rules.html)

[Process-based Rule - Clash](https://lancellc.gitbook.io/clash/clash-config-file/rules/process-based-rule)


Rule:
    1. DOMAIN-SUFFIX：域名后缀匹配
    2. DOMAIN：域名匹配
    3. DOMAIN-KEYWORD：域名关键字匹配
    4. IP-CIDR：IP段匹配
    5. SRC-IP-CIDR：源IP段匹配
    6. GEOIP：GEOIP数据库（国家代码）匹配
    7. DST-PORT：目标端口匹配
    8. SRC-PORT：源端口匹配
    8. PROCESS-NAME
        - Clash for Windows v0.11.5+
        - 匹配完整的进程名方可生效，建议用任务管理查看进程名.
        - Windows 进程包括可执行文件后缀，一般需要添加 .exe 后缀.
        - 该规则不适用于 TAP 流量.
    8. PROCESS-PATH
    9. MATCH：全匹配（一般放在最后）
        - MATCH需要位于规则列表末尾
    * 用户界面暂不支持添加RULE-SET规则，请手动编辑配置文件

Rule Policy Group：
    1. DIRECT（Clash 内核自带）
    2. REJECT（Clash 内核自带）
    3. PROXY（不懂 CFW 内置的叫什么，貌似并不存在）
    4. REJECT-TINYGIF（不懂 CFW 内置的叫什么，貌似并不存在）
    5. auto（不懂 CFW 内置的叫什么，貌似并不存在）

Proxies:
    1. 手动选择策略组（select）
    2. 自行选择节点或连接策略（url-test）：根据 HTTP 延时选择最快的节点
    3. 故障转移策略组（fallback-auto）：在节点无法连通时自动切换到下一个节点
    4. 负载均衡（load- balance）：每个 eTLD 使用同一个节点

Mixin

要想通过 Mixin 全局代理，得先 cfw - Service Mode - Install。然后再开启 mixin。

一般不用 mixin 设置代理规则，而是用 parser， https://docs.cfw.lbyczf.com/contents/parser.html, 这个教程中 yaml 的使用也很方便，毕竟需要得对配置进行操作，有很多的选择项。

mixin 仅用来设置 Clash DNS

mixin 使用替换方式，不适合添加规则。

parser 可能会更好用点，可以试试最新出的 commands。

mixin设计的目的就是覆盖除了rules/proxy-groups/proxies外的其他内容的

mixin本来就不是设计给修改rules/proxies/proxy-groups的

开发者：
mixin 会对所有的订阅配置生效，而且结果保存在内存中，主要用于 dns 添加
可以试试 配置文件预处理方法
我在 #1072 中给出了类似的适配旧规则的方法。方便对不同订阅生效，可以参考
该方法还可以用于自定义规则，可以参考我写的 changeRule.js


```yaml
#不推荐这么用
mixin: # object
  rules:
   - DOMAIN-SUFFIX,hentai,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,hentai.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,ehgt.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,ehwiki.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,exhentai.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,e-hentai.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,hentaiverse.org,🇸🇬 狮城节点
   - DOMAIN-SUFFIX,lolineko.com,DIRECT
```


```js
module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {
  return content
}
```


TUN

[TUN 模式 | Clash for Windows](https://docs.cfw.lbyczf.com/contents/tun.html)


    TUN 方案想要直连时会很麻烦，仅临时对付一些 GUI 软件，或者在公司用。
    TUN 和 TAP 优先 TUN。


什么是 TUN？
TUN 就是创建一个虚拟网卡来当默认网卡，以此劫持流量。
TUN 原理很简单，修改路由表，使虚拟网卡的优先级变为最高。

原理大概是创建了一个 TUN 网卡， TUN 网卡劫持了上网网卡（如 eth0 WLAN 之类的）的 TCP/UDP 流量（所有流量）。~~因为网卡劫持 TCP/UDP 发生在 3 层，在此之前 DNS 解析已经完成了，所以只能分流 IP，没法分流域名。~~

~~如果想要连 DNS 也分流，那就要劫持 DNS（系统 DNS），即 Clash 会架设一个 DNS Server，将系统 DNS 设为这个 DNS Server，从而劫持。绝大部分的软件使用的是系统 DNS，所以都可以成功劫持，只有极少数软件如 Firefox 会使用自己的 DNS，从而无法被劫持，此时需要去 Firefox 手动更改 DNS 设置。~~

经实测，Firefox 直连时，DNS 由 Firefox 自己解析（猜测是因为 Firefox 使用的是自己的 DNS，不使用系统 DNS，而 Clash 只劫持了系统 DNS），但 IP 会被 Clash TUN 劫持（虽然劫持不到 DNS，但底层的流量会被 Clash TUN 自动创建的网卡所劫持）。Firefox 走 Clash 代理时，DNS 与 IP 都由 Clash 处理。

奇怪的是，Firefox 直连上不了外网，但大陆网站是正常的。理论上 TUN 可以进行 TCP/UDP 层面的代理，所以就算是直连也可以处理。所以我怀疑 Firefox 自带 DNS 污染，DNS 返回了错误的 IP，导致无法连上外网。

于是去查了查 network.trr.uri，果然用的是阿里的 DNS，改为 OpenDNS GoogleDNS CloudFlare 之类的 DNS 应该就没问题了。

PS：想取消网卡级 TCP/UDP 劫持，有以下几种方法：第一法是不要以管理员权限启动；第二是禁用 Mixin 开关，立即生效（如果用的是 Mixin）；第三是（如果用的是 config.yaml）

PPS：想取消 DNS 劫持，目测注释掉 `dns-hijack:` 相关内容就行，这段应该是用来劫持系统 DNS 的……**那这么说来好像并不需要手动更改系统 DNS 啊……**

PPS：TUN 工作模式如下，管理员权限 + 开启 TUN 配置（缺一不可），在打开 CFW 时会自动删除旧 Clash TUN 网卡，创建一个新的 Clash TUN 网卡(该网卡的的 DNS Server 会自动设为 198.18.0.2），同时劫持上网网卡；退出 CFW 时该网卡变为「拔网线」状态，同时取消对上网网卡的劫持。无权限或不开启，跟没 TUN 没区别

PPS：查看上网网卡是否被劫持，看任务栏 wifi 图标。正常没劫持时图标应该是 wifi 有几格信号；劫持时图标变为一台电脑，鼠标放上去显示「Clash Internet 访问」



[请问大家在内网环境下都是如何设置前置代理的？ · Issue #1632 · Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg/issues/1632)


Proxy Chains:
    - clash 已经支持relay(proxy chains)功能，变相实现前置代理了

```
# traffic: clash <-> http1 <-> vmess1 <-> ss1 <-> ss2 <-> Internet
proxy-groups:
- name: "relay"
  type: relay
  proxies:
    - http1
    - vmess1
    - ss1
    - ss2
```




Parser:

0.10.1版本更新后，支持使用JavaScript对下载后的配置文件进行预处理
0.11.10版本更新后，支持使用YAML对下载后配置文件进行简单预处理
parser可以同时用file和yaml吗
能同时用，但不建议。因为你不知道是哪个先执行。
你可以对同一个地址写多个parser，这样会按照顺序从上到下进行处理。
另外，如果file里的文件能被解析成yaml，那么就按yaml进行处理。

```yaml
parsers: # array
  - reg: https://.+$   # 正则匹配 url
    file: 'C:/Users/cfw/parser.yaml'
  - reg: .+$   # 对上一个parser执行的结果进行处理
    file: 'C:/Users/cfw/parser.js'
  - reg: .+$   # 对上一个parser执行的结果进行处理
    yaml:
      prepend-rules:    # rules最前面增加规则
        - DOMAIN-SUFFIX,google.com,🚀 节点选择
        - DOMAIN,test.com,DIRECT
        - DOMAIN,233.com,REJECT
      append-proxies:    # proxies最后面增加一个服务
        - name: test
          type: http
          server: 123.123.123.123
          port: 456
  - reg: .+$   # 对上一个parser执行的结果进行处理
    code: |
      module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
        const obj = yaml.parse(raw)
        return yaml.stringify(obj)
      }
```

```js
module.exports.parse = async function({ content, name, url }, { axios, yaml, notify }) {
  content.rules.unshift("DOMAIN-SUFFIX,233.com,DIRECT");
  return content;
}
```




```js
// parser.js
module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
  const obj = yaml.parse(raw)
  return yaml.stringify(obj)
}
```


```js
module.exports.parse = (raw, { yaml }) => {
  const rawObj = yaml.parse(raw)
  const { 'Rule': rules = [], 'Proxy Group':groups = [], 'Proxy': proxies = [] } = rawObj
  delete rawObj['Rule']
  delete rawObj['Proxy Group']
  delete rawObj['Proxy']
  rules.push("DOMAIN-SUFFIX,example.com,Others")
  rawObj['mode'] = 'Rule'
  return yaml.stringify({ ...rawObj, proxies, 'proxy-groups': groups, rules })
}

**注意**：

1. 修改 `url` 和为对应的订阅链接。
2. 如果有多个订阅，复制多份，保证 yaml 格式并相应修改对应链接。
3. 如果认为 `code` 内容太多，可以参考教程使用 `file` 参数。
4. 此仅为抛砖引玉，有更多的想法，都可以**结合 js 语法规则**在修改代码，使载入配置的同时对配置进行自定义。
5. 虽然能够成功修改配置文件中 `mode` 关键词，但缓存规则并不会被覆盖，V0.11.2 的版本依旧是采用**记住本地操作设置**。
```

```yaml
# parser.yaml
# 我不确定本文件的具体书写格式，请以实际为准
# https://www.npmjs.com/package/yaml
yaml:
  prepend-rules:    # rules最前面增加规则
   - DOMAIN,test.com,DIRECT
   - DOMAIN,233.com,DIRECT
  append-proxies:    # proxies最后面增加一个服务
   - name: test
     type: http
     server: 123.123.123.123
     port: 456
```

参数说明

|          键          | 值类型 |                  操作                   |
| -------------------- | ------ | --------------------------------------- |
| append-rules         | 数组   | 数组合并至原配置`rules`数组**后**        |
| prepend-rules        | 数组   | 数组合并至原配置`rules`数组**前**        |
| append-proxies       | 数组   | 数组合并至原配置`proxies`数组**后**      |
| prepend-proxies      | 数组   | 数组合并至原配置`proxies`数组**前**      |
| append-proxy-groups  | 数组   | 数组合并至原配置`proxy-groups`数组**后** |
| prepend-proxy-groups | 数组   | 数组合并至原配置`proxy-groups`数组**前** |
| mix-proxy-providers  | 对象   | 对象合并至原配置`proxy-providers`中      |
| mix-rule-providers   | 对象   | 对象合并至原配置`rule-providers`中       |
| mix-object           | 对象   | 对象合并至原配置最外层中                 |
| commands             | 数组   | 在上面操作完成后执行简单命令操作配置文件  |
