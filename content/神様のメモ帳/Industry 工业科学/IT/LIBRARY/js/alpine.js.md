---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/DOM
  - flag/Library/APILayer/Implement__/Web/CSR-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: alpinejs/alpine
npm: alpinejs
js-magic-helper:
  - $data
  - $store
  - $el
  - $refs
  - $root
  - $id
  - $nextTick
  - $watch
  - $dispatch
  - $event
  - Alpine
html-properties:
  - x-data
  - x-model
  - x-modelable
  - x-id
  - x-ref
  - x-ignore
  - x-init
  - x-on
  - x-effect
  - x-cloak
  - x-show
  - x-transition
  - x-bind
  - x-text
  - x-html
  - x-for
  - x-if
  - x-teleport
html-events:
  - alpine:init
  - alpine:initialized
---

- References
    - [HOWTO: 如何学习 Alpine.js - 白宦成](https://www.ixiqin.com/2021/02/17/a-how-to-open-directory/)
    - [如何上手学习 Alpine.js - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000039218018)

- Idea
    - 像写 [[Tailwind CSS]] 一样写 [[JavaScript|JS]]
    - Data driven & Event driven
        - [[htmx]] 只做简单的 7 件事
        - [[alpine.js]] 只做通用的 2 件事

- Examples
    - 如果你已经有一个静态页面，但希望在其中添加一些交互性功能而不想引入整个大型框架，那么可以使用 Alpine.js 来为现有页面增加交互性
    - [Archive • Alpine.js Weekly • Buttondown](https://buttondown.email/alpinejs/archive/)
    - [Django, HTMX and Alpine.JS: A Match Made In Heaven - DEV Community](https://dev.to/nicholas_moen/what-i-learned-while-using-django-with-htmx-and-alpine-js-24jg)
    - [Datepicker with TailwindCSS and AlpineJS](https://codepen.io/mithicher/pen/VwvZaxm)
    - [AlpineJS: Simple Folder Tree](https://codepen.io/ScottWindon/pen/RwabppB)
    - [Recursive JSON Explorer In Alpine.js 3.13.5](https://www.bennadel.com/blog/4611-recursive-json-explorer-in-alpine-js-3-13-5.htm)
    - [Recursive Template Rendering In Alpine.js 3.13.5](https://www.bennadel.com/blog/4603-recursive-template-rendering-in-alpine-js-3-13-5.htm)
    - [Creating A Template-Outlet Directive In Alpine.js 3.13.5](https://www.bennadel.com/blog/4602-creating-a-template-outlet-directive-in-alpine-js-3-13-5.htm)

- Ecosystem
    - [HyperJS - Code Examples and Guides of Functionality with Alpine JS | HyperJS](https://js.hyperui.dev/)
    - [markmead (Mark M)](https://github.com/markmead)
    - [alpine-collective/awesome: 🚀A curated list of awesome resources related to Alpine.](https://github.com/alpine-collective/awesome)
    - [Alpine Toolbox - Resources and Examples for Alpine.js](https://www.alpinetoolbox.com/)
    - [抛弃React和Vue，让前端工程返璞归真 - ChlorineC's Blog](https://chlorinec.top/2024/03/30/Development/front-end-without-toolchain/)

- Installation
    - CDN
    - NPM
        - `import Alpine from 'alpinejs'`
        - `window.Alpine = Alpine` (Optional)
        - `Alpine.start()`

- Philosophy
    - 组件化
    - [[JavaScript|JS]] in [[HTML]]
        - 只需将 Alpine.js 文件引入到 HTML 中，然后在元素上添加指令和表达式即可
        - 其实算是把 [[JavaScript|JS]] 写在 Component 内部
    - [[OOP|OOP]]
        - `x-data` 完美契合 OOP 的「封装」特性
    - [Lightweight Javascript Framework Review (For Django Developers)](https://saashammer.com/blog/lightweight-javascript-framework-review-for-django-developers/)

- Fundamentals
    - Event driven
        - 大量的 events & callback
        - 原理上跟 [[htmx]] 一模一样，只不过 events 条件不一样，callback 做的事不一样，这就是本质区别
    - [alpine.js使用及原理简介 - 掘金](https://juejin.cn/post/6930811299907502093)
    - [Alpine.js的x-data底层实现原理讲解 - 掘金](https://juejin.cn/post/7258092924684320823)

- Architecture
    - 将 callback 挂载为 HTML element 的 attributes，形成 IOC

- Pro
    - 支持 [[JavaScript|JS]] 表达式，表达能力强

- Con
    - NOT Support [[WebSocket]]
    - NOT Support Recursive Component directly
        - [Recursive component · alpinejs/alpine · Discussion #751](https://github.com/alpinejs/alpine/discussions/751)
