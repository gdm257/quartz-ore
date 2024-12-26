---
aliases:
  - Chromium
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Network
frontmatter-as-page:
  - chrome
---

## Brief

- References
    - W3C
    - [性能优化之html、css、js三者的加载顺序](https://mp.weixin.qq.com/s/hrxEb5hpiTcE9F4KadwZ9w)
    - [前端知识点大全 | 知识铺的博客](https://geek.zshipu.com/post/css/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E5%85%A8/)

- Edition
    - [[catsxp]]
    - [[Brave]]
    - [Statcounter Global Stats - Browser, OS, Search Engine](https://gs.statcounter.com/)
    - [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

- Alternatives
    - [[Firefox RC V10]]

- Data
    - `User Data/`
        - `Default/`
            - `Bookmarks`
            - `Favicons`
            - `History`
            - `Web Data`
                - 搜索引擎

- Author
    - [[Google]]

- Ecosystem
    - [ChromeDevTools/awesome-chrome-devtools](https://github.com/ChromeDevTools/awesome-chrome-devtools)
    - [unsearchapp/unsearch](https://github.com/unsearchapp/unsearch?tab=readme-ov-file)

- Fundamentals
    - Render
        1. Parse [[HTML]]
            - 遇到 [[JavaScript|JS]]：DOM/CSSOM 是边解析边生成，而 JS 可能改变它们，所以遇到 JS 时，渲染主线程要执行完 JS 才继续，此时 DOM/CSSOM Tree 解析会暂停
            - 遇到 [[CSS]] 将其交给预解析器（预解析线程），解析完再把结果交给渲染主线程，更新 CSSOM Tree
        2. Recalculate style 样式计算
            - 计算 [[CSS]] 属性值，将尽可能多的相对值计算为绝对值
            - 有些相对值例如百分比 `width` `height` 在这步无法转换为绝对值
        3. Layout 布局计算
        4. Layer 分层
            - 堆叠上下文有关的 [[CSS]] 属性可能影响分层（Layer）结果
        5. Paint 绘制
        6. Tiling 分块
        7. Raster 光栅化
        8. Draw 合成
            - [[CSS]] `transform` 全都发生在这步
                - `transform` 性能友好，因为其效果的实现完全不会执行前 7 步
        - 整个渲染过程非常复杂，涉及的内容非常多。整个执行过程会被分为多个子阶段。输入的 HTML 经过这些子阶段，会最终输出页面像素信息。我们把整个处理流程叫做渲染流水线或者关键渲染路径（Critial Rendering Path）。大致包括这几个阶段：构建 DOM 树，样式计算，布局计算，分层，绘制，分块，光栅化和合成。负责整个渲染过程的模块叫做渲染引擎。
        - 渲染进程负责标签页中发生的所有事，它的核心任务就是将 HTML，CSS 以及 JS 转化成用户可以交互的页面。在渲染进程中，主线程（main thread）负责处理绝大部分发送给用户的代码。合成线程（compositor）和光栅线程(raster)负责更高效流畅的渲染页面。

- Architecture
    - Process Model
        - [[Chrome]] 采用多进程、多线程架构
            - 可通过浏览器自带的 `Task manager` 查看 processes
        - 主要的进程
            1. Browser Process
                - [[Chrome]] 本质是个 GUI APP，程序入口必然是运行 GUI Framework，Browser Process 就是该主进程，最根源的 Event Loop 就在这里
                - 每个 Process 至少有一个 Thread
                    - i.e. Main Thread
                    - Process 可以简单理解为一块专属的内存空间
                    - Thread 是代码真正的执行单元
                    - 主线程结束，进程就结束
                - Browser Thread
                    1. GUI Framework
                    2. UI 交互
                    3. 子进程管理
            1. Network Process
                - Network Thread
            2. Rendering Process
                - Threads
                    - Redering Main Thread
                    - 合成线程
                - Each tab has a redering process
                    - 支持 防止一个 Tab 崩溃从而影响其他 Tabs 甚至是 Browser
                    - 每个 Tab 一个 Process 会影响性能，[[Google]] 说未来可能会改为每个 Site（Domain）一个 Process
                - Rendering Thread
                    - Rendering Process only has one Thread
                        - [[HTML]] 解析与渲染
                        - [[CSS]] 解析与应用
                        - [[JavaScript|JS]] 解析与执行
                        - 渲染线程 是浏览器中最繁忙的线程
                    - Why not 多线程？
                        - 多线程面对繁杂的 Tasks 需要频繁切换上下文，性能不如单线程的事件循环
                    - 单线程 执行 Tasks
                        - Rendering Thread 面对如此多的繁杂的任务，如何调度是个重要的问题
                        1. Thread 启动创建一个 Event Loop 和 Message Queue (FIFO)
                        2. Event Loop 是一个永不结束的 `for` 循环，其在 Chromium 源码中叫 Message Loop。每次循环从 Message Queue 取出第一个 Task 执行。不同队列的读取逻辑由浏览器自己实现
                        3. 执行 Task 可能产生新的 Tasks，Thread 会将 callback function 封装为 Task 对象并 Put 到 Message Queue
                        4. 其他 Processes 的 Threads 也可以向 Message Queue 加入 Tasks。例如 Browser Thread 的 UI 交互事件、Network Thread 返回网络资源、计时器线程的 callback
                        5. Message Queue 是 FIFO。但不同的类型的 Tasks 会 PUT 到不同 Message Queue，不同的消息队列是有优先级的，W3C 规定浏览器必须有「微队列」，其他队列浏览器自己决定
                            1. 延时队列，优先级「中」，计时器相关任务
                            2. 交互队列，优先级「高」，用户交互事件回调
                            3. 微队列 microtask queue，优先级「最高」`Promise` `MutationObserver`
                            4. other queue，浏览器自己实现
                        6. 
                    - 单线程 永不阻塞
                        - Rendering Thread 通过「异步」的方式执行 Task，因此永不阻塞
                        - TL;DR
                        1. 「同步」执行 Task，指的是Thread 必须执行完当前 Task 才继续执行 Next Task
                        2. 「异步」执行 Task，指的是 Thread 执行 Task 过程中遇到阻塞，将任务交给其他 Thread 处理，自身立马结束 Task，转而执行 Next Task——渲染线程永不阻塞
                        3. 其他 Thread（例如计时器线程、network thread）去执行，拿到返回值后，该 Thread 将 callback function 封装为 Task 对象加入 Message Queue，从而继续任务
                    - [[JavaScript|JS]] 是一门「单线程语言」
                        - [[JavaScript|JS]] 的解析与**执行**都是由 Rendering Thread 完成，换句话说，[[JavaScript|JS]] 完全运行在 Rendering Thread 上
                        - 或者说，[[JavaScript|JS]] 的执行只不过是 Rendering Thread 的 Task 的 Callback
                        - 不是因为 JS 只能单线程，而是因为单个 Rendering Thread 性能最高

- Pro
    - Compatibility

- Con
    1. 没法右键关闭标签页（GreenChrome 可以了）
    2. 网页缩放比例太操蛋，要么过小，要么太大
    3. KeePass 没法匹配
    4. 主页与标签页令人费解，顺序逻辑很操蛋
    5. 擅自隐藏 https 与 www
    6. 扩展管理难用得一批
    7. 书签栏没法居中
    8. Google 是世界上最大的广告公司
    9. 扁平化的 UI 可读性糟糕极了，一点对比度与层次感也没有
    10. 很难自定义，十分恶心
    11. 书签栏没法双击收起
    12. 打开书签会强制覆盖当前页面，恶心
    13. 书签显示不完整，麻烦的一批

## API

### Extension

- References

- Edition
    - MV3
    - ~~MV2 (depreciated)~~

- Configuration
    - `manifest.json`
        - 目录结构里唯一固定的文件
        - relative to the extension's root
        - [Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/)
        - [chrome插件最新版本开发指南来了 - 掘金](https://juejin.cn/post/7051466934948200461)

- API
    - [【干货】Chrome插件(扩展)开发全攻略 - 我是小茗同学 - 博客园](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
    - [【干货】Chrome插件(扩展)开发全攻略-好记的博客](http://blog.haoji.me/chrome-plugin-develop.html)

- Data
    - `.crx`
    - `unpacked extension` (developer mode)

## Web

### CORS

### CSP

- References
    - [CSP的今世与未来 - 知乎](https://zhuanlan.zhihu.com/p/23011855)

### CSRF

- Idea
    - Cross-Site Request Forgery
    - 一种攻击方式，简单说就是用户访问「恶意网站（虚假网站）」时，浏览器执行恶意网站的代码，这些代码会向「真实网站」发送请求，因此叫「跨站请求伪造」

- Solutions
    - Anti CSRF Token
        - 最常见
    - JSONP
        - 比较少见

- Pro
    - 拒绝 恶意网站发送的请求
        - 恶意网站 指的是「浏览器标签页打开的 URL 是恶意网址，而非真实网址的 URL」

- Con
    - CSRF Token 有用的前提是没被 XSS 攻击或 SQL 注入
    - 无法防范 真实网站的假按钮
        - 如果攻击者能「在真实网站上嵌入一个发送恶意请求的按钮」，意味着「XSS 攻击成功」或「SQL 注入成功」，意味着「能在真实 Tab 执行任意 JS 代码」，自然也能轻易从 DOM 中读取到 CSRF Token，然后发送请求
        - 服务端会认为该请求合法，因为 CSRF Token 是 Session 级别
        - 都能在真实 Tab 里执行任意代码了，那这段「恶意代码」和「合法代码」浏览器是无法区分的
        - 所以才叫做 **Cross-Site** Request Forgery

- Test
    - 同「源」的源，以当前 Tab 为主
        - 假设 `<iframe>` 产生一个发送给 `https://example.com` 请求，如果**当前浏览器标签页**并不是 `https://example.com/...`，那么算跨源。此时，`example.com` 的 cookies 能否被用于 `<iframe>`，取决于浏览器是否「禁用第三方 cookies」

### XSS

- Objects
    - 反射型
    - 存储型
    - DOM型

### `X-Frame-Options`

### `X-Content-Type-Options`

### Referrer

### Cookie

- Idea
    - 浏览器发送的每个请求都自动带有对应 site 的 cookies

### Session

- Fundamentals
    - 一般用 cookies 实现
    - server side 需要保存 session

### JWT

- JSON Web Token

- Syntax
    - `header.payload.signature`
        - `header` 通用数据项
        - `payload` 数据，不同用户必须不同
        - `signature` 对 header payload 进行签名

- Pro
    - Server 不需要保存 JWT
        - JWT 只需验证签名，因此 server 只需保存一个用于签名的密钥即可

### SSO

- Single Sign On
    - 单点登录

- Idea
    - 不同服务共用一套账号系统，用户只需登录一次

- Architecture
    - Central Authentication Service
    - Service
        - Service 会从 CAS 拿到一个唯一的「服务标识」
        - Service 拿到 Client 发送的 ST，为验证 ST 是否合法，会主动向 CAS 发送请求进行验证，验证通过，才与 Client 建立 session。后续 Service 与 Client 通信只依靠 Session，无需 CAS/ST/TGTT
        - ST 是服务相关的，不同 Service 的 ST 互不通用
    - Service Client
        - 成功登录 CAS 拿到 TGT Ticket（放在 cookies 里）
        - 访问某个 Service 时，需要通过 TGT Ticket 获取 Service Ticket，才能用 ST 成功访问 Service

### `ETag`
