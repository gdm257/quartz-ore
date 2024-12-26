---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/License/Apache
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Plugin/Caddy
commands:
  - xcaddy
---

[caddyserver/xcaddy: Build Caddy with plugins](https://github.com/caddyserver/xcaddy)

[Caddy Plugins](https://caddyserver.com/download)

[greenpau/caddy-security: 🔐 Authentication, Authorization, and Accounting (AAA) App and Plugin for Caddy v2. 💎 Implements Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0 (Github, Google, Facebook, Okta, etc.), SAML Authentication. MFA/2FA with App Authenticators and Yubico. 💎 Authorization with JWT/PASETO tokens. 🔐](https://github.com/greenpau/caddy-security)

[hairyhenderson/caddy-teapot-module: ✨ A Caddy (v2) module which responds with "418 I'm a teapot" to all requests.](https://github.com/hairyhenderson/caddy-teapot-module)

[caddy反向代理缓存（reverse proxy cache）](https://bjun.tech/blog/xphp/66)

[sillygod/cdp-cache: a caddy 2 proxy cache plugin](https://github.com/sillygod/cdp-cache)

[porech/caddy-maxmind-geolocation: Caddy v2 module to filter requests based on source IP geolocation](https://github.com/porech/caddy-maxmind-geolocation)

[caddy-ext/ratelimit at master · RussellLuo/caddy-ext](https://github.com/RussellLuo/caddy-ext/tree/master/ratelimit)

[greenpau/caddy-trace: Request Debugging Middleware Plugin for Caddy v2](https://github.com/greenpau/caddy-trace)

[imgk/caddy-trojan: Caddy module for trojan proxy](https://github.com/imgk/caddy-trojan)

[mohammed90/caddy-ssh: Caddy-SSH is a general-purpose, extensible, modular, memory-safe SSH server built in Go](https://github.com/mohammed90/caddy-ssh)

[abiosoft/caddy-exec: Caddy v2 module for running one-off commands](https://github.com/abiosoft/caddy-exec)

[mholt/caddy-l4: Layer 4 (TCP/UDP) app for Caddy](https://github.com/mholt/caddy-l4)

[klzgrad/forwardproxy: Forward proxy plugin for the Caddy web server](https://github.com/klzgrad/forwardproxy)

[mastercactapus/caddy2-proxyprotocol](https://github.com/mastercactapus/caddy2-proxyprotocol)

[mholt/caddy-webdav: WebDAV handler module for Caddy](https://github.com/mholt/caddy-webdav)

[动手撸个Caddy（十二）| 插件开发之HelloWorld | 飞雪无情的博客](https://www.flysnow.org/2021/09/21/caddy-in-action-extending-caddy)

[动手撸个Caddy（十三）| 插件开发之Caddyfile参数 | 飞雪无情的博客](https://www.flysnow.org/2021/09/25/caddy-in-action-extending-caddy-params)

[动手撸个Caddy（十四）| 插件开发之自定义全局配置 | 飞雪无情的博客](https://www.flysnow.org/2021/10/24/caddy-in-action-extending-global-options)


```bash
xcaddy command
Description:
    * xcaddy 用于编译 caddy，使其支持第三方插件.

Usage:
    xcaddy build [caddy_version] [options]
        caddy_version
            - E.g.
            - "latest"
            - "v2.0.1"
            - "master"
            - "a58f240d3ecbb59285303746406cab50217f8d24"
        --output "caddy"
        --with <module[@version][=replacement]>...
            * 要集成进 caddy 的插件.
            * 可多次指定.
            * E.g.
            * --with "github.com/porech/caddy-maxmind-geolocation"
        * 编译 caddy，使之能使用第三方插件.
    xcaddy [args]
        * 代替 go run，开发插件时使用.
        * args 传递给 caddy.

Plugins:
    --with "github.com/caddy-dns/cloudflare"  \
    --with "github.com/sillygod/cdp-cache"  \
        # 要求 go 1.17 & caddy v2.4.1
        # 废了，用不了！
        # 自己构建，直接 panic 证书信息，目测版本太旧了
        # 现成的镜像，不给 pull
    --with "github.com/hairyhenderson/caddy-teapot-module"  \
    --with "github.com/porech/caddy-maxmind-geolocation"  \
    --with "github.com/RussellLuo/caddy-ext/ratelimit"  \
        # 要求 caddy v2.4.5+?
    --with "github.com/greenpau/caddy-security"  \
        # 要求 caddy v2.6.2+?
    --with "github.com/imgk/caddy-trojan"  \
        # 要求 caddy v2.6.2+?
    --with "github.com/abiosoft/caddy-exec"  \
    --with "github.com/mholt/caddy-l4"  \
        # 要求 caddy v2.6.2+?
    --with "github.com/greenpau/caddy-trace"  \
    * 目录需要有 .go 文件，包名随意，只要在 init() 注册插件就好.

```
