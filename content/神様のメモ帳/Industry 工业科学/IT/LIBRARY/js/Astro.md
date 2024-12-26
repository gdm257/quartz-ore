---
tags:
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/TypeScript
  - flag/Library/APILayer/Implement__/Web/SSG-Framework
  - flag/Library/APILayer/Implement__/Web/SSR-Stateless-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
extensions:
  - .astro
npm-create:
  - astro@latest
html-properties:
  - client
  - is
  - set
  - class
  - define
  - timeout
  - data-astro-cid-*
  - data-astro-source-file
  - data-astro-source-loc
  - data-vite-dev-id
npm: astro
files:
  - astro.config.mjs
  - package.json
  - tsconfig.json
---

## Brief

- References
    - [javascript - 从零开始使用 Astro 的实用指南 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000043804878)
    - [withastro/roadmap · Discussions · GitHub](https://github.com/withastro/roadmap/discussions?discussions_q=)

- Ecosystem
    - [.doom.d/modules/lang/astro at main · edmundmiller/.doom.d](https://github.com/edmundmiller/.doom.d/tree/main/modules/lang/astro)
    - [Setting up Doom Emacs for Astro Development • Edmund Miller](https://edmundmiller.dev/posts/emacs-astro/)

- Fundamentals
    - SSR
        - [On-demand Rendering Adapters | Docs](https://docs.astro.build/en/guides/server-side-rendering/)
        - [[Astro]] 本质上是个「静态网站生成器」
        - [[Astro]] 主要用于生成静态内容，而**不能处理动态请求**
            - [[Astro]] 不启用 SSR Adapter 那就是「静态网站生成器」，此时 [[Astro]] 完全等价于「托管了一堆静态文件的 [[Nginx]]」
            - [[Astro]] 开启 SSR Adapter 才能处理动态请求，此时 [[Astro]] 完全等价于「正在运行的 [[Django]]/[[Flask]]/[[GoFrame]]/[[Gin]]」
            - [[Astro]] 相比 [[Django]]/[[Flask]]/[[Gin]]/[[GoFrame]] etc 更灵活的地方在于「*部署*」：[[Astro]] 的「模板系统」是「*多平台*」的。SSR 的实现会交给具体的 SSR Adpater 去做。官方提供了许多 SSR Adpater 例如 Netlify Adpater。理论上你完全可以写一个 [[Django]] Adapter，用 [[Django]] 来运行 [[Astro]] project，甚至可以写一个 [[Nginx]] Adapter 来赋予单独的 [[Nginx]] 拥有 SSR 能力。而原生 [[Django]] 项目就只能用 [[Django]] 包来运行，换 [[Nginx]] 就运行不了 [[Django]] 项目。无论用哪个 SSR Adapter，浏览器用户是感知不到的。但对于运维，就能够对接不同的 PaaS 平台
            - SSR Adapter 既是进步也是退步。进步在于可以对接不同平台，让平台本身拥有 SSR 能力。退步在于需要反复造轮子，对于传统 SSR [[Django]] 项目，一个 [[Django]] 包就能到处跑。[[Astro]] 这种 SSR 设计，要「处处」都有对应的 SSR Adapter，否则没法跑，实在是「处处」不起来
            - SSR Adapter 可以打个比方：[[go template]] 写的 web，但是不想用 [[go template]] 这个 [[Go]] package 来运行，非要 PaaS 平台（Netlify/Verel）原生就能够处理 [[go template]] 语法，并保持一样的效果。[[Astro]] 实际上更加激进，官方就不提供 [[go template]] 这样的原生运行方法（`astro dev` 能跑但只能用在开发环境），生产环境强制你用 SSR Adapter，换句话说，官方不提供 [[Node.js]] 平台的生产级 SSR Adapter
            - [[Astro]] component 定位相当于 [[django-components]]
        - 不要被「可以集成 [[vue]]/[[React]]」迷惑了，[[Astro]] 比 [[Django]] 还要静态！
        - 网页里的动态部分，依靠的是 [[vue]]/[[React]] etc 来接管
        - 直接用 [[vue]]/[[React]] 是提前在 [[HTML]] 打上 `#app` ID
        - [[Astro]] 所谓的集成只不过是帮你绑定好要渲染的元素而已，相当于随机生成 `#random-id`，供 [[vue]]/[[React]] 接管
        - [[Astro]] 的 component，原理跟 [[Django]] template syntax 及其第三方 component（例如 [[django-components]]）是一样的
        - 并且作为「静态网站生成器」，不得不将动态部分交给 CSR
    - CSR
        - 严格来说，「[[Astro]] 的 CSR」与「[[Django]] template 使用 CSR」并没有本质区别，都是利用 [[vue]]/[[React]] 本身的注册机制（例如 [[CSS]] id 选择器）
        - [[Django]] template 集成 [[vue]]/[[React]]，需要手动规划 [[HTML]] 元素的 id，然后在 template 中引入对应 [[JavaScript|JS]]/[[CSS]] bundles
        - [[Astro]] 集成 [[vue]]/[[React]]，其实就是 [[Astro]] 帮你做了这件事
        - **Island 不是 SSR**
            - [[Astro]] 实际上就是在说「能用 SSR template（例如 [[Django]] template）就用 SSR template，实在不行的时候再用 [[vue]]」
            - SSR template（例如 [[Django]] template）嵌入 [[vue]] component 需要手动处理，麻烦。嵌入 [[React]] 也需要处理，而且处理方式不同。总之嵌入 CSR 纯手动，真是不优雅
            - 这样吧，我在 SSR template 里弄个 *Island*，意思是说这里对应一个 CSR 组件，叫 SSR Adpater 不要渲染。还不仅限于 [[vue]]，还支持 [[React]]/[[alpine.js]] etc

- Deps
    - [[Node.js]]
        - `v18.17.1` or `v20.3.0` or higher
        - `v19` is not supported

- Artchitecture
    - Island
        - **In Astro, an "island" refers to any interactive UI component on the page.** Think of an island as an interactive widget floating in a sea of otherwise static, lightweight, server-rendered HTML.
        - Multiple islands can exist on a page.
        - An island always runs in isolation from other islands on the page.
        - Islands can still share state and communicate with each other, even though they run in different component contexts. This flexibility allows Astro to support multiple UI frameworks like React, Preact, Svelte, Vue, and SolidJS
        - [Astro Islands | Docs](https://docs.astro.build/en/concepts/islands/)
    - 水合时机
        - Frontmatter
            - Fixed [[HTML]]
            - Frontmatter fetching from Repo Collection
            - Frontmatter fetching from Backend API
        - Router
            - **Reverse Proxy**
            - Gateway
                - Compared to reverse proxy, Gateway is more powerful. For example, SSO
            - **Router Library**
                - Static Router
                - Dynamic Router Template
                - Dynamic Router Function
        - CSR
            - Fixed [[HTML]]
            - CSR fetching from DOM
            - CSR fetching from Router
                - Generally, this is only use to pull bundles
            - CSR fetching from Backend API
        - **Backend**
            - Fixed [[HTTP]]
            - Provide data from Repo Collection
            - Provide data from Database

- Philosophy
    - **UI-agnostic**
        - [[Astro]] could integrate with any web UI framework(library) such as [[React]]/[[vue]]/[[alpine.js]]/[[htmx]]
        - This probility requires implementation of related API sush as Island's API to ingegrate a new UI framework
        - 这并不意味着能在 [[React]] 组件里嵌套 [[vue]] 组件，这是不可能的
        - [[Astro]] 只是允许没有「后代关系」的 Elements 托管给不同 UI 框架
    - Performance first
    - MPA
    - SSR
        - SSR is *fast* than CSR
        - By default, Astro will automatically render every UI component to just HTML & CSS, **stripping out all client-side JavaScript automatically.**
        - Turning any static UI component into an interactive island requires only a `client:*` directive.
            - E.g. `<MyReactComponent client:load>`
            - This component is now interactive on the page
            - Astro then automatically builds and bundles your client-side JavaScript for optimized performance
        - default static output mode, these pages are generated at build time
        - In SSR mode, a page will be generated on request for any route that matches
        - Static (SSG) Mode: Because all routes must be determined at build time, a dynamic route must export a `getStaticPaths()` that returns an array of objects with a `params` property. Each of these objects will generate a corresponding route

- Con
    - ONLY Support browser
        - Astro was designed for building content-rich *websites*
        - No [[Electron]]/[[Node.js]]/ReactNative

- API
    - [Authentication](https://docs.directus.io/reference/authentication.html)
        - All data within the platform is private by default
        - You must include an *access token* in every request, or configure permissions for the *public role*
        - Access Tokens
            - Temporary Token (JWT)
                - short expiration time
                - The tokens are returned with a refresh token that can be used to retrieve a new access token via the refresh endpoint/mutation
            - Session Token (JWT)
                - combine both a refresh token and access token in a single *cookie*
                - you cannot refresh these after they have expired
            - Static Tokens
                - Seem like API token
                - Never expire
                - Saved as plain-text within `directus_users.token`
        - Using access token
            1. `directus_session_token=<token>` cookie
            2. `?access_token=<token>` query parameter
            3. request's `Authorization: Bearer <token>` Header
    - Nested relational fields
        - `?fields=*`
        - `*`
        - `*.*`
        - `*.*.*`
        - `*,foo.*`
        - `*,foo.*,bar.*`
        - `*.*,foo.*`
        - `foo,bar`
        - [Relational Data](https://docs.directus.io/reference/introduction.html#relational-data)
        - [Global Query Parameters | Directus Docs](https://docs.directus.io/reference/query.html#fields)
    - `/server/specs/oas`
        - OpenAPI Spec
        - [Server | Directus Docs](https://docs.directus.io/reference/system/server.html)
        - [OpenAPI 3.0 Spec — Generate Directus API Clients (SDKs) · Issue #2255 · directus/directus](https://github.com/directus/directus/issues/2255)

- [Template Directives](https://docs.astro.build/en/reference/directives-reference/)
    - Final [[HTML]] output never includes directives directly
    - Client Directives
        - `client:load`
        - `client:idle`
        - `timeout`
        - `client:visible`
        - `client:media`
        - `client:only`
        - custom client directive
    - Script & Style Directives
        - `is:global`
        - `is:inline`
        - `define:vars`
    - Advanced Directives
        - `is:raw`
    - Common Directives
        - `class:list`
        - `set:html`
        - `set:text`

- Test
    - [Dev Toolbar | Docs](https://docs.astro.build/en/guides/dev-toolbar/)

- Ecosystem
    - [directus-labs/awesome-directus](https://github.com/directus-labs/awesome-directus)

```
http {
  server {
    listen 80;
    server_name   _;

    root   /usr/share/nginx/html;
    index  index.html index.htm;
    include /etc/nginx/mime.types;

    gzip on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    error_page 404 /404.html;
    location = /404.html {
            root /usr/share/nginx/html;
            internal;
    }

    location / {
            try_files $uri ${uri}.html $uri/index.html =404;
    }
  }
}
```

## Configuration

- Configuration
    - `astro.config.mjs`

## Data

### Project

- Data
    - [Project Structure](https://docs.astro.build/en/basics/project-structure/)
    - `package.json`
    - `tsconfig.json`
    - `astro.config.mjs`/`astro.config.ts`/`astro.config.cjs`
        - integrations to use
        - build options
        - server options
    - `public/`
    - `src/`
        - `pages/`
            - required
            - Static Route
                - `src/pages/index.astro` -> `/`
                - `src/pages/foo.astro` -> `/foo`
                - `src/pages/foo.astro/index.astro` -> `/foo`
                - `src/pages/foo/bar.astro` -> `/foo/bar`
                - `src/pages/foo/123.md` -> `/foo/123`
            - Dynamic Route
                - `src/pages/[foo]/asdf.astro` -> `/动态/asdf`
            - [新型web框架Astro快速构建内容网站 - Stephen's Blog](https://www.stephen520.cn/blog/10290)
        - `content/`
            - store content collections and a configuration file
            - No other files are allowed inside this folder
        - `components/`
            - reusable units
            - These could be Astro components, or UI framework components like React or Vue
        - `layouts/`
            - Astro components that define the UI structure shared by one or more *pages*
        - `styles/`
            - store your [[CSS]] or [[SASS]] files
            - As long as your styles live somewhere in the `src/` directory and are *imported correctly*, Astro will handle and optimize them


### dist

- Data
    - `dist/`
        - astro output: `server` mode
            - `@astro/node` adpater
                - `standalone` adapter mode
                    - `/dist/server/entry.mjs`
                        - [[Node.js]] entrypoint script
                        - HTTP server
                - `middleware` adapter mode
                    - 简单说，类似于编译为一个处理 urls/apis 路由的 [[Django]] application，于是可以通过后端框架来部署 [[Astro]] 项目。灵活性非常强
                    - 只不过不是 [[Django]]，而是 [[Node.js]] 生态的后端框架
                    - E.g. [[Express]], Fastify

## Syntax

- TL;DR
    - Astro [[HTML]]
        - 组件级，当 Web 1.0 SSR Component Template 来写
        - 你只能手动管理 classes/id 以保证不会冲突
        - 表达式 `{}` 作为 [[Astro]] 组件属性值，为变量传递
        - 表达式 `{}` 作为 [[HTML]] 标签属性值，为字符串传递（隐式类型转换）
    - Astro [[CSS]]
        - `<style>` 组件级，当 Web 2.0 来写
        - 虽然 class/id 仍然是字面值，但通过自动注入 `[data-astro-cid-xxxxxxx]` 来保证 `<style>` 绝对不会作用于其他组件
    - Astro [[JavaScript|JS]]/[[TypeScript|TS]] frontmatter
        - 辅助 SSR，当 Web 1.0 SSR Template Language 来写（same as [[jinja2]]）
    - Astro [[JavaScript|JS]]/[[TypeScript|TS]] `<script>`
        - 全局级，当 Web 1.0 来写
        - 你只能用 CSS Selector 来获取元素
        - 但是支持 [[TypeScript]] 和 `import`（自动 bundle）
        - 想要完整 Web 2.0 的 [[JavaScript|JS]]/[[TypeScript|TS]] 体验，请用 Island
    - Island `client:*`
        - 组件级，当 Web 2.0 CSR 来写
        - E.g. [[vue]]/[[React]]/[[alpine.js]]/[[htmx]]

- [[JavaScript]]/[[TypeScript]] frontmatter
    - Keywords
        - `import`
            - `.css`
                - as it is `<style>...</style>` in this `.astro`
            - `.astro`
                - componentization
                - rendered when building or SSR
            - `.js` `.ts`
                - ESM?
            - npm `module`
                - ESM? CommonJS?
        - `return`
            - NOT Support [[Astro]] components
            - [Compiler support syntax like Typescript JSX (inline markup) · withastro/roadmap · Discussion #833](https://github.com/withastro/roadmap/discussions/833)
            - [Support JSX syntax for Astro components · withastro/roadmap · Discussion #716](https://github.com/withastro/roadmap/discussions/716)
        - `export`
            - `export const partial = true`
                - Support [[HTML]] fragment for [[htmx]]

- [[HTML]] elements
    - `<style>`
        - Scoped styles by auto injecting `data-astro-cid-*` attribute to [[HTML]] elements and appending `[data-astro-cid-*]` to selectors
            - Inject into ALL [[HTML]] elements in THIS `.astro` component
            - BUT NOT include elements that replace `<slot>`
            - NOT inject to parent component
            - 使用「随机 [[HTML]] 属性名」作为组件级 [[CSS]] 的唯一标识符比较少见，像 [[vue]]/[[React]] 用的都是「随机类名」。理论上类名性能更好，但现代浏览器都对属性名进行了优化，该场景几乎不弱于类名，压根就不会成为性能瓶颈，除非真的是远古浏览器
        - Global styles by `<style is:global>` i.e. [[HTML]] native style
        - Global styles by `selector :global() {...}`
        - Dynamic [[CSS]] variables by `<style define:vars={{var1, var2}}>`
        - [Styles & CSS | Docs](https://docs.astro.build/en/guides/styling/)
    - `<script>`
        - Simplest CSR script
        - Astro processes and bundles `<script>` tags, adding support for importing [[npm]] modules, writing [[TypeScript]], and more
        - Inline [[JavaScript|JS]] by `<script is:inline>` without processing
        - [Scripts and Event Handling | Docs](https://docs.astro.build/en/guides/client-side-scripts/)

- [[HTML]] attributes
    - `id`
        - literal?
        - Yes, as literally.
    - `class`?
        - literal?
        - Yes, as literally.
    - `class:list`
        - Dynamic classes (fixed in *building or SSR*. NOT CSR)
        - Useful for [[Tailwind CSS]] etc atomic libraries
        - Guess it's recursive for iteration
        - E.g.
        - `class:list={["flex", "flex-col"]}`
        - `class:list={["flex", {"grid": false, "flex-col": true}]}`
        - `class:list={{'flex last:ml-auto': '// chirldren layout', 'py-3 bg-[rgb(26,42,117)]': '// box model',}}`
            - Each key as classes
            - Value is checked boolean to enable/disable this key?
            - `//` just for readable, not required
        - [passing-a-class-to-a-child-component](https://docs.astro.build/en/guides/styling/#passing-a-class-to-a-child-component)
        - [html - Can I pass additional classes to an Astro component from parent? - Stack Overflow](https://stackoverflow.com/questions/75933212/can-i-pass-additional-classes-to-an-astro-component-from-parent)
    - `style`
        - `<p style={{ color: "brown", textDecoration: "underline" }}>My text</p>`
        - `<p style="color: brown; text-decoration: underline;">My text</p>`
    - `client:*`
    - `is:*`
    - `set:*`
    - `define:*`
    - `timeout`

## API

- Variables
    - `Astro`
        - `.generator: string`
        - `.props`
        - `.self`
            - Recursive Component
            - `const { RecursiveComponent } = Astro.self`
            - `<RecursiveComponent>`
            - `<Astro.self>`
