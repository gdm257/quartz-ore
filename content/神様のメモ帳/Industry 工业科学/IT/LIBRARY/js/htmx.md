---
tags:
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/DOM
  - flag/Library/APILayer/Implement__/Web/CSR-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
npm: htmx.org
html-properties:
  - hx-ext
  - hx-disable
  - hx-disinherit
  - hx-on*
  - hx-trigger
  - hx-get
  - hx-post
  - hx-delete
  - hx-patch
  - hx-validate
  - hx-prompt
  - hx-confirm
  - hx-indicator
  - hx-disabled-elt
  - hx-request
  - hx-history
  - hx-history-elt
  - hx-encoding
  - hx-headers
  - hx-params
  - hx-include
  - hx-vars
  - hx-swap
  - hx-swap-oob
  - hx-select
  - hx-select-oob
  - hx-sync
  - hx-target
  - hx-preserve
  - hx-boost
js-magic-helper:
  - htmx
  - htmx.config
  - htmx.onLoad()
  - htmx.defineExtension()
  - htmx.logAll()
  - htmx.closest()
  - htmx.findAll()
  - htmx.find()
  - htmx.takeClass()
  - htmx.addClass()
  - htmx.removeClass()
  - htmx.toggleClass()
  - htmx.values()
  - htmx.remove()
  - htmx.remove()
  - htmx.swap()
  - htmx.on()
  - htmx.trigger()
  - htmx.ajax()
html-events:
  - htmx:configRequest
  - htmx:confirm
  - htmx:timeout
  - htmx:abort
  - htmx:prompt
  - htmx:swapError
  - htmx:beforeSwap
  - htmx:afterSwap
  - htmx:xhr:loadstart
  - htmx:xhr:progress
  - htmx:xhr:abort
  - htmx:xhr:loadend
html-classes:
  - htmx-added
  - htmx-indicator
  - htmx-request
  - htmx-settling
  - htmx-swapping
http-request-headers:
  - HX-Boosted
  - HX-Current-URL
  - HX-History-Restore-Request
  - HX-Prompt
  - HX-Request
  - HX-Target
  - HX-Trigger-Name
  - HX-Trigger
http-response-headers:
  - HX-Location
  - HX-Push-Url
  - HX-Redirect
  - HX-Refresh
  - HX-Replace-Url
  - HX-Reswap
  - HX-Retarget
  - HX-Reselect
  - HX-Trigger
  - HX-Trigger-After-Settle
  - HX-Trigger-After-Swap
---

## Brief

- Alternatives
    - Web 1.0
        - [[Vanilla JS]]
        - [[jQuery]]
    - Web 2.0
        - JSON/RPC/GraphQL API
        - [[React]]/[[vue]]

- Con
    - Selector based
        - 最大的痛点，与组件化（web 2.0）格格不入，不兼容
        - `hx-target` with `previous` `this` `next` `previous <selector>` `next <selector>` `closest <selector>` reduces that pain
    - Stateless
        - HTMX is stateless and relies on the server side for state management
        - hard to create dynamic user experiences
        - 「swap html element from response」本质是 SSR
        - 只靠 [[HTML]] 能做的事情真的很少，swap html element 无法实现很多常见功能
        - [Django REST Framework and Vue versus Django and HTMX | TestDriven.io](https://testdriven.io/blog/drf-vue-vs-django-htmx/)

- References
    - [htmx ~ Reference](https://htmx.org/reference/)
    - [htmx ~ Documentation](https://htmx.org/docs/)

- Version
    - 1.x
    - 2.x
        - Removed all extensions from core htmx distribution
        - Removed `hx-on="event_name: script"`, use `hx-on:event_name="script"`
        - Removed `hx-sse`
        - Removed `hx-ws`
        - Added `htmx.swap()`
        - Deprecated support for IE browser
        - [</> htmx ~ htmx 1.x → htmx 2.x Migration Guide](https://htmx.org/migration-guide-htmx-1/)
        - [</> htmx ~ htmx 2.0.0 has been released!](https://htmx.org/posts/2024-06-17-htmx-2-0-0-is-released/?utm_campaign=Django%2BNewsletter&utm_medium=email&utm_source=Django_Newsletter_238)

- User
    - [[gitea]]

- Installation
    - [[HTML]]
        - `<script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>`
    - [[npm]]
        - `npm install htmx.org`

- Fundamentals
    - Event driven

- Idea
    1. swap element
    2. redirect
    3. refresh
    4. edit url
    5. add history
    6. trigger events
    7. run inline js
        - 虽然 trigger events & inline script 理论上非常灵活，但显然不适合作为核心技术栈
    - 其余的事，[[htmx]] 做不了（除非用 extension），请另寻他法

- Ecosystem
    - [lassebomh/htmx-playground: A simple code sandbox for playing around with HTMX. No setup needed!](https://github.com/lassebomh/htmx-playground)
    - [[JSON]] response 需要使用 HTMX 扩展来解析
    - [[forge-htmx]] 再次封装，很有意思
    - extension 能写的 hook functions 只有 5 个，并不多，不适合复杂需求
    - [htmx extensions](https://extensions.htmx.org/)
    - [htmx ~ Server-Side Examples](https://htmx.org/server-examples/)

- Configuration
    1. `htmx` global variable with `config` property
    2. `<meta name="htmx-config" content='{"defaultSwapStyle":"outerHTML"}'>`
    - [</> htmx ~ Documentation](https://htmx.org/docs/#config)

- Examples
    - [[htmx]] 及其背后的哲学无法大规模实现，因此只能以纯粹实用主义的方式使用
    - [</> htmx ~ Hypermedia-Driven Applications](https://htmx.org/essays/hypermedia-driven-applications/)
    - [</> htmx ~ 构建 SSR/HDA 应用程序的 10 个技巧 --- </> htmx ~ 10 Tips For Building SSR/HDA applications](https://htmx.org/essays/10-tips-for-ssr-hda-apps/)
    - [</> htmx ~ 示例 ~ 动画 --- </> htmx ~ Examples ~ Animations](https://htmx.org/examples/animations/)
    - [[Django]] API 直接 `Response(literal_str)`，HTMX 能直接用
    - [htmx ~ Examples](https://htmx.org/examples/)
    - [Django, HTMX and Alpine.JS: A Match Made In Heaven - DEV Community](https://dev.to/nicholas_moen/what-i-learned-while-using-django-with-htmx-and-alpine-js-24jg)
    - [Add instant database search with Django and HTMX 🕵️](https://www.photondesigner.com/articles/database-search-django-htmx)
    - [How to add serverless functions with Django in 6 mins (with HTMX and AWS Lambda) 🧠](https://www.photondesigner.com/articles/serverless-functions-django)
    - [Infinite scroll with django and htmx | Francisco Macedo](https://fmacedo.com/posts/1-django-htmx-infinite-scroll/)

- Users
    - [[PHP]] [[Python]] etc 后端社区非常热门

- Test
    - HTMX, when added to [[Django]], can be mostly tested using Django's testing tools
    - [Django REST Framework and Vue versus Django and HTMX | TestDriven.io](https://testdriven.io/blog/drf-vue-vs-django-htmx/)

- API
    - Event
    - Yet another mode
        - Register event
            - `hx-on:click="..."`
            - `hx-on:htmx:beforeRedirect="..."`
            - `hx-on:any_event="callback_script"`
            - Support Standard events
            - Support HTMX lifecycle
            - Support any events
        - Handle event
            - `hx-on:<event>="callback_script"`
            - Issue request?
            - Handle response?
    1. Register event
        - default event
            1. `change` for `<input>` `<textarea>` `<select>`
            2. `submit` for `<form>`
            3. `click` for other else
        - `hx-trigger` attribute
            - [hx-trigger Attribute](https://htmx.org/attributes/hx-trigger/)
            1. `event[filter] modifier modifier, event[filter] modifier modifier, ...`
                - event
                    1. Standard Events（浏览器原生事件）
                    2. htmx 提供的额外事件
                        - `load` - fires once when the element is first loaded
                        - `revealed` - fires once when an element first scrolls into the viewport
                        - `intersect` - fires once when an element first intersects the viewport. This supports two additional options
                            - `root:<selector>` - a CSS selector of the root element for intersection
                            - `threshold:<float>` - a floating point number between 0.0 and 1.0, indicating what amount of intersection to fire the event on
            2. `every 2s`
                - htmx 为实现 polling（轮询）提供的语法
                - 也可以用 `hx-trigger="load delay:2s" hx-swap="outerHTML"` 实现轮询。原理是每次替换自己（target），都会加载（load）自己，从而触发 `hx-trigger`
    2. Handle event
        1. Issue request
            - Request headers
                - request method
                    - `hx-post="URL"`
                    - `hx-get`
                    - `hx-delete`
                    - `hx-put`
                    - `hx-patch`
                    - `hx-head`
                    - `hx-connect`
                    - `hx-options`
                    - `hx-trace`
                    - 如果不指定属性值，默认请求当前网页
                - `HX-*` headers
                    - `HX-Boosted`
                    - `HX-Current-URL`
                    - `HX-History-Restore-Request`
                    - `HX-Prompt`
                    - `HX-Request`
                    - `HX-Target`
                    - `HX-Trigger-Name`
                    - `HX-Trigger`
            - Request body
                - `hx-include`
                - `hx-params`
                - `hx-encoding`
                - `hx-vals`
                - `hx-vars`
            - Confirm to issue
                - `hx-confirm="Are you sure?"`
        2. Show feedback to user once request issued
            - Add a sub element with `class="htmx-indicator ..."`
            - `.htmx-indicator` element only visible shortly, from request issued to request end
        3. Response by server
            - 30x
                - htmx 支持 自动重定向
                - htmx 重新 issue request of redirection URL
                - 可简单理解为覆盖了 `hx-<http_verb>` 的 URL 然后重新 issue request
            - 4xx
                - discard the response content
            - 5xx
                - discard the response content
            - 204
                - htmx will ignore the content of the response
            - 200 
                - HTML fragments instead of full HTML document
        4. Handle response of [[HTML]] fragments
            - pick element(s) from response as src
                - `hx-select="css_selector"`
            - select element as target
                - `hx-target="css_selector"`
                - `hx-target="this"`
            - update DOM about target
                1. `hx-swap="behavior modifier modifier modifier ..."`
                    - `innerHTML` 替换为 target 的子元素
                    - `outerHTML` 替换整个 target
                    - `afterbegin` 插入为 target 的第一个子元素
                    - `beforeend` 追加为 target 的最后一个子元素
                    - `beforebegin` 插入为 target 的上一个兄弟元素
                    - `afterend` 追加为 target 的下一个兄弟元素
                    - `delete` 删除 target，不管 response
                    - `none` 啥也不做，不管 response
                2. Morph Swaps (by extensions)

- Philosophy
    - [[HTML]] First
    - [[JavaScript|JS]] through [[HTML]]
    - MVC
        - [</> htmx ~ 模型/视图/控制器 （MVC） --- </> htmx ~ Model/View/Controller (MVC)](https://htmx.org/essays/mvc/)
    - [[htmx]] (REST/HATEOAS) DOES NOT be suitable to pure data APIs that will be consumed by code
        - 简单用用 [[htmx]] **简化代码** 就好，除此之外的，只能 [[JavaScript|JS]] 无法避免。要想用 [[htmx]] 彻底替代 JS，思维要求极高，别想了
        - 「通过 [[Django]] view 返回 [[HTML]]」是 [[htmx]] 的绝对正确使用方法，甚至很难找到更有用的
        - (JSON/RPC/GraphQL) API 对 [[htmx]] 毫无用处
        - 我并不喜欢 HATEOAS，也不看好。
        - TL;DR
        - 最开始，我只不过是把 [[htmx]] 视作对将常见 [[JavaScript|JS]] 封装到 [[HTML]]，就像 [[Tailwind CSS]] 那样，即 utility first。直到我开始思考「如果为 HTMX 设计可用的 API」，并读了 htmx 官方文档中的诸多 essays，才发现*不止如此*
        - [[htmx]] 实际上是原生 REST 和 HATEOAS 哲学的实践者，这些哲学与 JSON API 完全不同、格格不入。
        - 简单的说，行为的分歧与最后的问题是：从客户端还是服务器端的结构化数据生成 HTML
        - REST/HATEOAS 主张基于 HTML (Hypermedia) 的 SSR
        - 主流前端（web 2.0）主张基于 API 的 CSR
        - 我们根本无法使用 JSON/RPC/GraphQL，这样的 API 对 HTMX 毫无意义，是不可用的，如果你真的将 HTMX 作为核心技术栈，在开发过程中便会发现这点。
        - Because JSON is not a hypertext (hypermedia)
        - HTMX 需要什么样的响应？
        - 对于许多问题，超媒体通常比 SPA 方法复杂得多
        - REST/HATEOAS 试图系统地回答这个问题，其答案完全不同于、甚至反对主流的 GUI/CLI/Web，它力图为开发者提供**自然的**技术栈，但这种「自然」显然不太成功，至少相较于 Python 那种真正做到的自然来说。
        - 进一步就会发现，其失败来源于 HTML 本身的局限，在全是代码的世界里，HTML 这种完全基于模糊的人类语义的临时产物，根本上就无法契合精确明晰的数学世界。
        - 但如果不是 [[HTML]] 100% 通用，HATEOAS 也没有出现的条件。
        - 这一系列问题直指我为何讨厌前端、讨厌 web、讨厌 JavaScript 的深层核心！
        - [Trying HTMX: DRF or Django CBV's on the backend? : r/django](https://www.reddit.com/r/django/comments/xs44zp/trying_htmx_drf_or_django_cbvs_on_the_backend/)
        - [Taking HTML Seriously](https://intercoolerjs.org/2020/01/14/taking-html-seriously)
        - [Rescuing REST From the API Winter](https://intercoolerjs.org/2016/01/18/rescuing-rest.html)
        - [</> htmx ~ Hypermedia On Whatever you'd Like](https://htmx.org/essays/hypermedia-on-whatever-youd-like/)
        - [</> htmx ~ Hypermedia-Driven Applications](https://htmx.org/essays/hypermedia-driven-applications/)
        - [bblanchon/django-htmx-modal-form](https://github.com/bblanchon/django-htmx-modal-form)
        - [nanuxbe/drf_htmx_renderer](https://github.com/nanuxbe/drf_htmx_renderer)
    - ![从根本上重新定义全栈](https://htmx.org/img/memes/fullstack.jpg)
    - ![](https://htmx.org/img/memes/original.png)
    - ![](https://htmx.org/img/memes/drakearchitecture.png)
