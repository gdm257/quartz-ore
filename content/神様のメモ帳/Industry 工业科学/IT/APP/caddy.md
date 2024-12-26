---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network
  - flag/License/Apache
scoop: caddy
choco: caddy
---

## Brief

- References

[Caddy Documentation](https://caddyserver.com/docs/)

[Caddy v2中文文档](https://caddy2.dengxiaolong.com/docs/)

[Caddy v1中文文档](https://dengxiaolong.com/caddy/zh/)

[Caddyfile Concepts — Caddy Documentation](https://caddyserver.com/docs/caddyfile/concepts)

[JSON Config Structure - Caddy Documentation](https://caddyserver.com/docs/json/)

[Caddyfile Directives — Caddy Documentation](https://caddyserver.com/docs/caddyfile/directives)

[Request matchers (Caddyfile) — Caddy Documentation](https://caddyserver.com/docs/caddyfile/matchers)

[placeholders - apps/http - JSON Config Structure - Caddy Documentation](https://caddyserver.com/docs/json/apps/http/#docs)

[Caddyfile Concepts \#placeholders — Caddy Documentation](https://caddyserver.com/docs/caddyfile/concepts#placeholders)

[Global options (Caddyfile) — Caddy Documentation](https://caddyserver.com/docs/caddyfile/options)

[Conventions \#network-addresses — Caddy Documentation](https://caddyserver.com/docs/conventions#network-addresses)

[Conventions \#durations — Caddy Documentation](https://caddyserver.com/docs/conventions#durations)

[Signals🔗 Command Line — Caddy Documentation](https://caddyserver.com/docs/command-line#signals)

[Exit codes🔗 Command Line — Caddy Documentation](https://caddyserver.com/docs/command-line#exit-codes)

[API — Caddy Documentation](https://caddyserver.com/docs/api)

[caddy-docker/Dockerfile.tmpl at master · caddyserver/caddy-docker](https://github.com/caddyserver/caddy-docker/blob/master/Dockerfile.tmpl)

[caddyserver/caddy: Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS](https://github.com/caddyserver/caddy)

[google/cel-spec: Common Expression Language -- specification and binary representation](https://github.com/google/cel-spec)

[Caddy v2 实现访问控制 - Cyrus's Blog](https://blog.xm.mk/posts/da50/)

[Caddy日志配置轮转和格式化 | mephisto.cc](https://mephisto.cc/tech/caddy_log/)

[动手撸个Caddy（十）| 一分钟搭建PHP服务器 | 飞雪无情的博客](https://www.flysnow.org/2021/08/29/caddy-in-action-php)

[动手撸个Caddy（九）| 设置头信息实现跨域 | 飞雪无情的博客](https://www.flysnow.org/2021/08/22/caddy-in-action-cros)

[Unrecognized subdirective websocket - Help - Caddy Community](https://caddy.community/t/unrecognized-subdirective-websocket/6493)

[Caddy V2 how to proxy websoket (v2ray websocket + tls) - Help - Caddy Community](https://caddy.community/t/caddy-v2-how-to-proxy-websoket-v2ray-websocket-tls/7040)

[Caddy设置静态文件缓存 | mephisto.cc](https://mephisto.cc/tech/caddy_static_cache/)

[动手撸个Caddy（八）| 利用缓冲提升反向代理的性能 | 飞雪无情的博客](https://www.flysnow.org/2021/08/15/caddy-in-action-stream-buffer)

[caddy配置反向代理和ssl证书申请 - turingguo - 博客园](https://www.cnblogs.com/turingguo/p/caddy.html)

- Installation
    - `scoop install caddy`

- Dependencies

- Edition
    * caddy v2
    * ~~caddy v1 已经停止维护几年了~~

- Idea
    * caddy 是一个 reverse proxy server，对标 [[Nginx]] [[apache]]
    * caddy 最吸引人的一点是它能「零配置 HTTPS」.

- Configuration
    * `/etc/caddy/Caddyfile`
    * `$XDG_CONFIG_HOME/caddy/Caddyfile`
    * `./Caddyfile`
    - Caddy 底层统一使用 JSON 作为配置.
    - Caddy 内置的 Adapter 能把 Caddyfile 转换成 JSON.
    - Caddy 有多种配置格式可选，不同的 Adapter 支持不同配置格式.
    - JSON 支持全部功能.
    - Caddyfile 有一套独特的 DSL.
    - Caddyfile 本质是 JSON 的 frontend.
    - Caddyfile 支持大部分功能，但是可读性强，用的人多.
    - Caddyfile 太由雅了！
    - 文件结构
        1. Global options block
            * `{}`
            * 只能指定一次.
            * 看了下，除了 log、order，用处不大.
        2. Snippets definition
            * `(<snippet_name>) {...}`
            * 可指定多次.
            * `import <snippet_name> [args]` 进行引用.
            * 弥补 Caddyfile 不支持拆分文件的缺陷.
        3. Site blocks
            * `<site_addr>[, <site_addr2>, ...] [matcher] {}`
            * 可指定多次.
            * Site examples
                - `localhost`
                - `example.com`
                - `:443`
                - `http://example.com`
                - `localhost:8080`
                - `127.0.0.1`
                - `[::1]:2015`
                - `example.com/foo/*`
                - `*.example.com`
                - `http://`

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem
    - [[xcaddy]]
    - Caddy V2 插件数量少，质量参差不齐，踩坑踩佛了，都想换回 [[Nginx]] 惹

- Philosophy
    * caddy 配置文件并没有本质上的提升，并不比 Nginx 更好用.
    * caddy 配置要想由雅，matcher 必须写的好，以及善用 snippet.
    * caddy 配置的「逻辑判断」（if）主要就是靠 matcher.
    * caddy 配置的「封装」，主要靠 snippet.

- Objects

- Fundamentals
    - 自动 HTTPS 原理是自动申请并部署证书，相当于内置 [[acme.sh]]
    - caddy HTTPS 零配置有点夸张，但确实你只需要指定域名
    * caddy 是用 [[Go|Go]] 写的，所以性能不可能超越 [[Nginx]] [[apache]]

- Architecture

- Pro
    * caddy 热重载 + 日志，调试不要太方便
    * caddy 支持 admin API 进行配置，不像 Apache/Nginx 只能用配置文件.

- Con
    * caddy 配置文件不能 include，跟 [[Nginx]] [[apache]] 没可比性.

- Test
    * caddy 主要是占领了「简洁易懂、功能强大的 Web Server」这块空白.

- Alternatives
    - [nginx-le/nginx-le: Nginx with automatic let's encrypt (docker image)](https://github.com/nginx-le/nginx-le)

- Description


## Examples

```bash
caddy command
Examples:
    caddy run  \
        --config "$XDG_CONFIG_HOME/caddy/Caddyfile"  \
        --adapter "caddyfile"  \
        --watch  \
        --environ
    caddy start  \
        --config "/etc/caddy/Caddyfile"  \
        --adapter "caddyfile"  \
        --watch
    caddy reload --config "$XDG_CONFIG_HOME/caddy/Caddyfile"
    caddy stop
```

## CLI

```bash
Usage:
    caddy <subcommand> [args]

Signals:
    * SIGINT    Graceful exit
                Send signal again to force exit immediately
    * SIGTERM    Graceful exit
    * SIGQUIT    Quit immediately (still cleanup locks in storage)
    * SIGUSR1    Ignored
    * SIGUSR2    Ignored
    * SIGHUP    Ignored
    - Caddy 进程支持接收以上信号.

Exit Codes:
    * 0    Normal exit.
    * 1    Failed startup.
           Do not automatically restart the process.
    * 2    Forced quit.
           Caddy was forced to exit without cleaning up resources.
    * 3    Failed quit.
           Caddy exited with some errors during cleanup.
    - Caddy 进程的退出状态码.

Subcommands:
    # 帮助信息
    help
    version
    environ
    build-info
    list-modules
    trust
        * 添加信任 CA
    untrust
        * 移除信任 CA
    validate
    fmt
        * Formats a Caddyfile.

    # 正式运行
    start|run [options]
        --config <file>
        --envfile <file>
        --pidfile <file>
        --watch
            * 监控 config file，有修改自动 reload caddy.
        --adapter <name>
        * start 后台运行.
        * run 前台运行.
    run
        --environ
            * Print environment.
    stop [options]
    reload [options]

    # 简单测试
    respond [options] [<status|body>]
        --listen [ip]:<port>
        --status <int>
            * HTTP return status code.
        --header <StringList>
        --body <string>
            * The body of the HTTP response.
        --access-log
            * Enable access log.
        --debug
        * 监听端口，对于任何请求，返回固定的响应.
        * 配置请用 respond 指令.
    reverse-proxy [options] --to <StringList>
        --from [<schema>://][host]:<port>[/path]
        --to [<schema>://][host]:<port>
        * 相当于 Nginx 的 proxypass.
        * 配置请用 reverse_proxy 指令.
    file-server [optoins]
        --listen [ip]:<port>
        --domain <domain>
        --root <dir>
            * 配置请用 root 指令.
        --browse
            * Enable directory browsing.
            * 相当于 Nginx 的 autoindex.
            * 不启用，则是允许从 root 按 uri 下载静态文件.
        --templates
            * Enable template rendering.
        --access-log
            * Enable access log.
        --debug
        * 配置请用 file_server 指令.
    trust
        * 信任指定证书.
    untrust

```

## DSL
### Comment

`# comment`

### Matcher

- Test
    - 紧跟在 Directive 后面的 Matcher 标记可以限制该指令的范围.
    - 配合 import，你可以把 Matcher 当成一个函数来用.

1. `*`
    - 通配符匹配器 catch-all matcher.
    - 匹配所有请求！
    - 注意，`*` 就是 matcher 的全部内容，`/foo/*` 这种不算.
2. `/path`
    - 路径匹配器 path matcher.
    - URI exact match 精准匹配（完全匹配）
    - 不是前缀匹配、后缀匹配、部分匹配.
    - 必须以斜杠「/」开头.
    - 允许使用通配符 `*`
    - `*` 匹配任意长度的任意字符，相当于 glob 的 `**`、正则的 `.*`
    - E.g.
    - /foo*
    - /*/foo
3. `@name {\n <<subdirective> [args]\n>... }`
    - 命名匹配器 named matcher，最强大、最灵活.
    - `@name` 支持组合多个条件，必须满足所有条件才算匹配.
    - `@one_line_named_matcher <subdirective> [args]`
    - `@jpg path *.jpg *.jepg`
    - @one_line_cel_expr_matcher `<cel_expr>`
    - @notFound `{err.status_code} == 404`
    - `expression <CEL_expr...>`
        - `CEL_expr`
            * 任一返回 true/false 的 CEL 表达式.
            * Common Expression Language 一门 DSL，支持复杂逻辑.
            * 表达式中，可以使用 {占位符}
            * 表达式中，可以使用大多数 named matcher 的子指令函数
            - E.g.
            - expression path_regexp("a") || path_regexp("b")
            - && 与
            - || 或
            - ! 非
            - `<condition>?<expr>:<expr>`
    - `path <path_expr...>`
        * ANY path_expr 完全匹配 URI，才算命中.
        * 注意，是完全匹配，而不是前缀匹配、后缀匹配、部分匹配.
        * 天坑！！！
        * 能不用就不用！
        * 尽量用 path_regexp 代替！
        * 大小写不敏感.
        * 格式
            - `/exact/path/or/file`
                - 不使用 `*`
            - `/prefix/path/*`
                - `*` at the end ONLY
                - 相当于前缀匹配
            - `*.suffix`
                - `*` at the beginning ONLY
                - 相当于后缀匹配
            - `*/contains/*`
                - `*` at the beginning and end
                - 同时前后缀匹配
            - `/path/to/*/middle`
                - 天坑！！！
                - 别用！！！
                - 不信你自己试试！
                - 请用 `path_regexp` 代替！
                - `*` in the middle ONLY
    - `path_regexp [name] <regexp>`
    - `remote_ip`


### Directive
#### args

1. args
    - 可以把一个指令看作一个 cli，其后跟 args.
    - 根据 args 的思维，arg 可以用双引号包裹，以支持带空格的 arg.
    - Caddyfile 的双引号，非常像 bash 的双引号，连换行符都是字面意思.
    - "双引号"中可以使用「\」对单个双引号进行转义，"\"foo\""
    - `反引号对` 可以代替"双引号对"，以避免频繁对双引号转义.

2. args - 环境变量
`{$SITE_ADDRESS}`
`{$DOMAIN:<默认值>}`

3. args - 占位符
    - `{args[0]}`
        - `{args.0}` 为旧语法，已停用
        * 传递给 snippet 的第1个 arg.
    - `{args[1]}`
        * 传递给 snippet 的第2个 arg.

4. Mics
```ini
Duration:
    ns (nanosecond)
    us/µs (microsecond)
    ms (millisecond)
    s (second)
    m (minute)
    h (hour)
    d (day)
    - 250ms
    - 24h

Size:
    k (kbyte)

Network Address:
    [<network>/]<address>
        network
            * TCP: tcp4, tcp6, tcp
            * UDP: udp4, udp6, udp
            * IP: ip4, ip6, ip
            * unix: unix, unixgram, unixpacket
        address
            * host
            * host:port
            * :port
            * /path/to/unix/socket
            - host 可以是 hostname/domain/IP
            - port 可以是单一端口如 443，或端口段如 8080-8085
            - `:0` 特殊端口表示随机选个可用的端口
    :8080
    127.0.0.1:8080
    localhost:8080
    localhost:8080-8085
    tcp/localhost:8080
    tcp/localhost:8080-8085
    udp/localhost:9005
    unix//path/to/socket

Placeholders:
    # 逻辑增强
    {vars.*}
    {args.*}
    {err.*}
    {re.*.*}
    {rp.*}
    {upstream_hostport}
    # Request URL
    {scheme}
    {hostport}
        {host}
            {labels.*}
        {port}
    {uri}
        {path}
            {dir}
            {file}
                {file.base}
                {file.ext}
            {path.*}
        {query}
            {query.*}
    # Request
    {method}
    {header.*}
        {header.*}
        {cookie.*}
    # Client
    {remote}
        {remote_host}
        {remote_port}
```

#### 1. 真正能返回响应、立即退出 site block の指令
- `abort [matcher]`
    * 终止 HTTP 处理链，关闭连接，阻止对客户端的任何响应.
- `respond`
    * 硬编码响应.
- `redir [matcher] <to> [code]`
    * 重定向
    * code 默认 302
- `reverse_proxy`
    * 不强制要求 upstream 存活，好评.
- `file_server`
    * 从磁盘提供文件.
- `acme_server`
- `php_fastcgi`
    * php_fastcgi 其实就是对 reverse_proxy 的封装.
    * php_fastcgi 支持 reverse_proxy 的所有子指令.
    * E.g.
    * php_fastcgi unix//run/php/php-version-fpm.sock
- `metrics`
- 指令分为两类，一类是返回响应的，一类是不返回响应的。
- 每个请求，只能且必须返回一次响应。
- 响应一旦返回，就会立刻退出 site block（根据文档推测的）
- 所以指令优先级非常重要。
- site block 概括就是：根据 matcher，修改属性，返回响应。

#### 2. 逻辑增强之 matcher 语法糖
- `route [matcher] {<directive>...}`
    * 本质是 matcher 的语法糖.
    * 结不结束 site block 与 route 本身无关，但与其里边的指令有关.
    * if 语句。理解为 if (matcher) {...}
- `handle [matcher] {<directive>...}`
    * 本质也是 matcher 的语法糖.
    * 只不过自动帮你实现了「有序互斥 matcher」的逻辑.
- `handle_path [path_matcher] {<directive>...}`
    * handle_path 是 handle 的真子集，是 path matcher 的语法糖.
    * handle_path 我不喜欢，它破坏了一致性.
    * 本来 path matcher 全是完全匹配的，handle_path 却是前缀匹配.
- `handle_errors`
    * 本质是 matcher 语法糖.
    * handle_errors 响不响应看里边写了什么指令.
- `error`
    * error 不返回响应，也不会立刻触发 handle_errors.
    * error 就一正常指令，按照指令优先级、从上到下这样正常执行.
    * error 只不过是配合 handle_errors 书写 matcher 的语法糖罢了.

#### 3. 逻辑增强之 URI 改写
- `rewrite`
- `uri`
- `try_files <file>...`

#### 4. 逻辑增强之 Request/Respond 改写
- `method`
- `request_header`
- `request_body`
- `header`
    * set or remove reponse header

#### 5. 逻辑增强
- `import [matcher] @<snippet> [args]`
- `vars [matcher] { <name> <value>\n ... }`

- `map`

#### 6. 修改设置
- `root <matcher> <path>`
- `templates`
- `push`
- `encode`
    * E.g.
    * encode zstd gzip
- `bind`
- `tls`
- `basicauth`
- `forward_auth`
- `log`
- `skip_log`
- `tracing`

#### 7. 第三方插件の指令
- github.com/sillygod/cdp-cache
http_cache {<subdirective>...}
    match_path /
    match_methods GET POST
    match_header
        - match_header Content-Type image/jpg image/png "text/plain; charset=utf-8"
    default_max_age
    * 根本没法用，连接都无法建立，还把正常连接搞崩了……
    * 不对，是直接把 caddy 给干退出了，退出状态码 2
