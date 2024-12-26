---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/License/MIT
  - flag/APP/Network
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - flag/APP/Layer/k8s/AddOns/IngressController
frontmatter-as-page:
  - traefik-http-rules
  - traefik-plugin-api
  - traefik-providers
  - traefik-services
  - traefik-tcp-rules
github-topics:
  - traefik-plugin
docker: traefik
docker-labels:
  - traefik.enable
  - traefik.docker.network
  - traefik.http.middlewares.<gzip>.compress
  - traefik.http.middlewares.<redir-https>.redirectscheme.scheme
  - traefik.http.middlewares.<redir-https>.redirectscheme.permanent
  - traefik.http.routers.<router-name>.middlewares
  - traefik.http.routers.<router-name>.entrypoints
  - traefik.http.routers.<router-name>.rule
  - traefik.http.routers.<router-name>.service
  - traefik.http.routers.<router-name>.tls
  - traefik.http.routers.<router-name>.tls.certresolver
  - traefik.http.services.<svc-name>.loadBalancer.server.port
traefik-tcp-rules:
  - "&&"
  - "||"
  - "!"
  - HostSNI(`domain`)
  - HostSNIRegexp(`regexp`)
  - ClientIP(`ip`)
  - ALPN(`protocol`)
traefik-http-rules:
  - "&&"
  - "||"
  - "!"
  - Header(`key`, `value`)
  - HeaderRegexp(`key`, `regexp`)
  - Host(`domain`)
  - HostRegexp(`regexp`)
  - Method(`method`)
  - Path(`path`)
  - PathPrefix(`prefix`)
  - PathRegexp(`regexp`)
  - Query(`key`, `value`)
  - QueryRegexp(`key`, `regexp`)
  - ClientIP(`ip`)
traefik-services:
  - ping@internal
  - noop@internal
  - dashboard@internal
  - api@internal
traefik-providers:
  - internal
  - docker
  - swarm
  - kubernetescrd
  - kubernetesingress
  - kubernetesgateway
traefik-plugin-api:
  - New()
  - CreateConfig()
  - Config{}
apiVersions:
  - traefik.io/v1alpha1
k8s-gatewayControllers:
  - traefik.io/gateway-controller
k8s-gatewayClasses:
  - traefik
k8s-gateways:
  - traefik-gateway
k8s-gateway-sectionNames:
  - web
version-gatewayapi:
  - 1.1.0
routers:
  - HTTPRoute
  - TLSRoute
  - TCPRoute
k8s-ingressControllers:
  - traefik.io/ingress-controller
---

## Brief

- References
    - [Traefik v3.0 Docker 全面使用指南：基础篇 - 苏洋博客](https://soulteary.com/2023/07/18/traefik-v3-docker-comprehensive-user-guide-basics.html)
    - [使用服务发现改善开发体验 - 苏洋博客](https://soulteary.com/2018/06/11/use-server-side-discovery-improve-development.html)
    - [更简单的 Traefik 2 使用方式 - 苏洋博客](https://soulteary.com/2020/12/02/easier-way-to-use-traefik-2.html)
    - [Traefik 2 使用指南，愉悦的开发体验 - 苏洋博客](https://soulteary.com/2020/01/28/traefik-2-user-guide-pleasant-development-experience.html)
    - [配置基于Traefik v2的 Web 服务器 - 苏洋博客](https://soulteary.com/2020/02/01/configure-traefik-v2-based-web-server.html)
    - [Traefik 入门使用 | Verne in GitHub](https://einverne.github.io/post/2021/09/traefik-introduction.html)
    - [请问k8s中，ingress可以实现跨namespace代理service吗？ - 知乎](https://www.zhihu.com/question/494808166)
    - [技术干货 | Traefik 结合 Authing 实现集中式身份认证管理 - Authing 身份云 IDaaS 用户管理云服务，实现统一身份认证及单点登录](https://authing.co/blog/342)
    - [Traefik 2 基础授权验证（后篇） - 苏洋博客](https://soulteary.com/2020/12/02/traefik-2-basic-authorization-verification-part-2.html)

- Version
    - 2023.08 traefik 3.0 还处于 beta 阶段，个人无所谓，生产请用 2.x
    - 2024.05 traefik 3.0 已经足够好用

- Pro
    - Support Stateless
    - Support TCP/UDP forward
    - Support specifying domains for certresovler
        - [Traefik Routers Documentation - Traefik](https://doc.traefik.io/traefik/routing/routers/#domains)
    - Support compiling plugins at runtime
        - [[caddy]] requires pre-compiling plugins by [[xcaddy]]
        - [[Traefik]] supports compiling plugins at runtime according to static config

- Con
    - NOT Support custom router rules directives
        - 因为 router 权重完全依靠 `rule`，而自带 rule 指令太少，又没法自定义
        - 所以 路由灵活性还不如 [[caddy]]，无法做复杂分流
    - NOT Support nesting routers
        - Routers 复用性差，无法嵌套，各种冗余（想想 [[CSS]]）
    - NOT Support limit by URI amount
        - 时间窗口、漏桶、并发，默认针对的是「请求次数（频率）」，而不是「URI 个数」
        - 我想要的，本质是论坛那种，每日只能下载「N 个不同资源」，相同资源的请求原则上不管，但为了防止 DDoS 还是要限制下总次数。需要自己写插件

- Idea
    - 我意识到了，Treafik 是必须的
    - 单个 Stack 时，Treafik 确实不如 [[caddy]] [[Nginx]]
    - 多个 Stack（`docker-compose.yml`），即跨网络/集群时，Treafik 的 Docker Sward Mode 极大节省维护所需的精力

- Installation
    - `docker pull traefik:latest` v2.x
    - `docker pull traefik:saintmarcelin` v2.x
    - `docker pull traefik:2.10` v2.10
    - `docker pull traefik:beaufort` v3.x

- Architecture
    - Clients
    - Traefik (Reverse Proxy)
        - Entrypoints
        - Routers
            1. UDP routers
            2. TCP routers
            3. HTTP routers
            - By default, routers listen to every entry points
            - Middlewares
                - Router 可挂载各种 Middlewares
                - if you declare a middleware using a Docker label, it resides in the Docker provider namespace
        - Services
            - Similar to [[Nginx]]'s `upstream`
            2. Specified services from configuration
            1. [[Traefik]] comes with services
                - `noop@internal`
                - `api@internal`
                - `dashboard@internal`
                - `ping@internal`
    - Backend
        - Real service
        - [[Traefik]] should access service directly

- Web
    - `http://host:9000/dashboard/`

- Ecosystem
    - Plugins
        - [[GitHub]] Plugin with `traefik-plugin` topic
        - Local Plugin from `./plugins-local/` within cwd
        - [Working with Traefik Plugins](https://plugins.traefik.io/install)

- Test
    - Performance
        - DDoS 会使 Traefik 占用极高的 RAM、一半 CPU Cores
        - RAM 几乎就是线性关系
        - [High memory usage during DoS - Traefik / Traefik v2 - Traefik Labs Community Forum](https://community.traefik.io/t/high-memory-usage-during-dos/16640)
    - Real IP
        - [Traefik Proxy with HTTPS - Docker Swarm Rocks](https://dockerswarm.rocks/traefik/#getting-the-client-ip)
        - [在Docker Swarm Mode中获得真实的客户IP – 目光博客](https://eyehere.net/2019/%E5%9C%A8docker-swarm-mode%E4%B8%AD%E8%8E%B7%E5%BE%97%E7%9C%9F%E5%AE%9E%E7%9A%84%E5%AE%A2%E6%88%B7ip/)
    - Multiple services in a docker container
        - 有 bug
        - 用 labels 创建 2 个 services，会导致 http router 失效
        - 我懂了，是 http router 使用了 `redirectscheme` 中间件，无法识别应该重定向到哪个 service
        - Solution: 手动为 router 指定 `service`，即便这没有任何实质性影响
    - `error: port is missing` for internal dashboard
        - you should create a service with whatever port
        - [docker - Traefik 2.0 "port is missing" for internal dashboard - Stack Overflow](https://stackoverflow.com/questions/58580782/traefik-2-0-port-is-missing-for-internal-dashboard)
    - `404 Not Found`
        - A request reaching an EntryPoint that has no Routers
        - An HTTP request reaching an EntryPoint that has no HTTP Router
        - An HTTPS request reaching an EntryPoint that has no HTTPS Router
        - A request reaching an EntryPoint that has HTTP/HTTPS Routers that cannot be matched
        - [Traefik Getting Started FAQ - Traefik](https://doc.traefik.io/traefik/getting-started/faq/)
    - `503 Service Unavailable`
        - Traefik returns a `503` response code when a Router has been matched but there are no servers ready to handle the request
    - `502 Bad Gateway`
        - Traefik returns a `502` response code when an error happens while contacting the upstream service
    - Logs for ACME
        - `Trying to challenge certificate for domain`
        - `lib=lego`
        - `acme: Registering account for`
        - `acme: Validations succeeded; requesting certificates lib=lego`

## Ecosystem

- References
    - [traefik/plugindemo](https://github.com/traefik/plugindemo)

- API
    - `.traefik.yml`
        - `displayName: str`
        - `type: "middleware"`
        - `import: str`
            - [[Go]] package url
            - If given a module url instead of package url, the default package name of module will be used. E.g. module `github.com/aaa/foo-bar` -> `pakcage foo_bar`
        - `summary: str`
        - `iconPath: <relative_path:str>` (optional)
        - `bannerPath: <relative_path:str>` (optional)
        - `testData`
    - API
        - A Traefik middleware plugin is just a [[Go]] package
        - Plugin dependencies must be vendored
        - Required
            1. `type Config struct {}`
            2. `func CreateConfig() *Config ()`
            3. `func New(ctx context.Context, next http.Handler, config *Config, name string) (http.Handler, error)`
                - provides an `http.Handler`
                - processing of requests and responses
        - Logs
            - `os.Stdout.WriteString("...")` or `os.Stderr.WriteString("...")`
    - Usage
        - Local plugin
            - `experimental.localPlugins.<plugin-name>.moduleName: github.com/foo/bar`
            - `./plugins-local/src/github.com/foo/bar/`
        - Remote plugin
        - Middleware
            - `middlewares.<midware-name>.plugin.<plugin-name>: PluginConfig`

### RateLimit

- Fundamentals
    - token bucket

- API
    - `http`
        - `middlewares`
            - `<middleware_instance_name>`
                - `rateLimit`
                    - `average: int = 0`
                    - `burst: int = 1`
                    - `period: int|str = 1`
                        - `1` to 1 second
                        - `1m` to 1 minute
                    - `sourceCriterion`
                        - `ipStrategy`
                            - `depth: int`
                            - `excludedIPs: List[str]`
                        - `requestHeaderName: str`
                        - `requestHost: bool`

### traefik-helm-chart

- Configuration
    - `ports`
        - `port` -> `Traefik entrypoint`
        - `containerPort` -> `Pod containerPort`
        - `hostPort` -> `Pod hostPort`
        - `exposedPort` -> `Service port`
        - `targetPort` -> `Service targetPort`
        - `nodePort` -> `Service nodePort`

## Data

- Logs
    - 没必要 `DEBUG` 级别，这些日志根本用不上，反而容易把有用的日志淹没

## Configuration

- References
    - [Traefik Docker Swarm Configuration Documentation - Traefik](https://doc.traefik.io/traefik/reference/dynamic-configuration/swarm/)
    - [Traefik Docker Configuration Documentation - Traefik](https://doc.traefik.io/traefik/reference/dynamic-configuration/docker/)
    - [Traefik Let's Encrypt Documentation - Traefik](https://doc.traefik.io/traefik/https/acme/#domain-definition)
    - [Internal Server Error with Traefik HTTPS backend on port 443 - Stack Overflow](https://stackoverflow.com/questions/49412376/internal-server-error-with-traefik-https-backend-on-port-443)

- Configuration (Providers)
    1. Static Configuration
        1. CLI
        2. [[YAML]]/[[TOML]] File
            - `/etc/traefik/`
            - `$XDG_CONFIG_HOME/`
            - `$HOME/.config/`
            - `./`
                - `traefik.yml`
                - `traefik.yaml`
                - `traefik.toml`
        - `entrypoints` `certresolvers` can ONLY be defined in static config
        - 其实静态配置也是由 provider 提供的，根据命令行选项的不同，traefik 自带名为 `internal` `<foo>.acme` 之类的 providers，它们提供的设置就是所谓的 static configuration
        - `foo@bar` 里的 `bar` 实际上就是 provider name，这也间接证明了各种 configurations 是由 provider 提供的
    1. Dynamic Configuration
        1. [[Docker]] container labels `services.<service_name>.labels`
        2. [[Docker Swarm]] service labels `services.<service_name>.deploy.labels`
        3. [[k8s]]
        4. [[nomad]]
        5. ...
        - Create/Update Routers/Services/Middlewares settings
        - 所谓动态，就是利用 Provider 的 API 监听 Events，回调修改 Configurations

- Syntax
    - [[Docker]] `labels`
        - `traefik.foo.bar=value` for string/int/float
        - `traefik.foo.bar=v01,v02` for list `[v01, v02]`
        - `traefik.foo.bar[0]=v01` `traefik.foo.bar[1]=v02` for list
        - `traefik.foo.bar[0].key01=v01` `traefik.foo.bar[0].key02=v02` for list of dict

### Gateway API

- `Gateway` listener ports must match the configured [EntryPoint ports](https://doc.traefik.io/traefik/routing/entrypoints/) of the [[Traefik]]
- [Traefik Kubernetes Gateway - Traefik](https://doc.traefik.io/traefik/routing/providers/kubernetes-gateway/)
- [Traefik全面使用指南：部署篇 | Solitudes](https://ysicing.me/traefik/helm-deploy)

### traefik service

```yaml
--entrypoints.http.address=:80
--entrypoints.https.address=:443
```

### upstream service

```yaml
labels:
    # enable traefik for this container
    - traefik.enable=true
    # proxy dashboard service
    - traefik.http.routers.dashboard.entryPoints=http
    - traefik.http.routers.dashboard.rule=Host(`foo.bar.com`)
    - traefik.http.routers.dashboard.service=dashboard@internal # use service-name or container-name or ip:port
    - traefik.http.routers.dashboard-ssl.entryPoints=https
    - traefik.http.routers.dashboard-ssl.rule=Host(`foo.bar.com`)
    - traefik.http.routers.dashboard-ssl.tls=true
    - traefik.http.routers.dashboard-ssl.tls.certresolver=lets-encrypt
    - traefik.http.routers.dashboard-ssl.service=dashboard@internal
    # proxy api service
    - traefik.http.routers.dashboard-api.entryPoints=http
    - traefik.http.routers.dashboard-api.rule=Host(`foo.bar.com`)
    && PathPrefix(`/api`)
    - traefik.http.routers.dashboard-api.service=api@internal
    - traefik.http.routers.dashboard-api-ssl.entryPoints=https
    - traefik.http.routers.dashboard-api-ssl.rule=Host(`foo.bar.com`)
    && PathPrefix(`/api`)
    - traefik.http.routers.dashboard-api-ssl.tls=true
    - traefik.http.routers.dashboard-api-ssl.tls.certresolver=lets-encrypt
    - traefik.http.routers.dashboard-api-ssl.service=api@internal
    # other
    - traefik.http.middlewares.gzip.compress=true
    - traefik.http.routers.dashboard.middlewares=gzip@docker
```
