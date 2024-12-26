---
aliases:
  - Html with Targeted Manipulation Zones
tags:
  - flag/License/MIT
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/DOM
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: Kalabasa/htmz
npm: htmz
---

- Alternatives
    - [[htmx]]
        - Functionally, [[htmz]] is a proper subset of [[htmx]]

- Architecture
    - `<iframe name=htmz>`
    - `<a href="/backend/api#foo" target=htmz>`
    - `<xxx id="foo">` to be replace by DOM manipulation

- Idea
    - **htmz** lets you swap page fragments using vanilla HTML code
    - htmz gives you the power to create modular web user interfaces with the familiar simplicity of **plain HTML**
    - Enable you to load HTML resources within _any element_ in the page

- Pro
    - Do I really need [[htmx]]?
        - [[htmz]] does be more simple and light

- Con
    - Support `<a>` `<form>` ONLY
        - [[htmz]] 完全依靠浏览器的原生行为，没有进行任何魔改与事件监听
        - 纯 [[HTML]] 只有 `<a>` `<form>` 才能动态地发出请求（没算 `<link>` `<img>` `<iframe>` etc，因为这些是静态的、非交互式的）
    - only one destination per response
        - [[htmx]] 还能通过 CSS Selector 批量选择 target elements
        - [[htmz]] 每个请求只能针对一个 element

- Installation
    1. `npm install --save-dev htmz`
    2. `npx htmzify ./path/to/my/index.html`
        - 插入一个 `<iframe>` 元素，其中包好 [[htmz]] 的全部实现代码（JS 部分为 [[Vanilla JS]]），极度简短，总共 166 bytes
        - `<iframe hidden name=htmz onload="setTimeout(()=>document.querySelector(contentWindow.location.hash||null)?.replaceWith(...contentDocument.body.childNodes))"></iframe>` 大概长这样

- Philosophy
    - Plain HTML
        - HTML As The Engine Of Application State
        - [[htmz]] 受到 [[htmx]]、Comet 的启发，ONLY HTML，NO JavaSript
    - Zero dependencies
        - 166 bytes in total
        - Zero JS bundles to load
        - _Just an inline HTML snippet_
        - 真正意义上的零依赖，无需 bundle、无需 CDN
        - 或者说仅 166 bytes 的依赖已通过 `<iframe>` 嵌入进 HTML
    - No filter
        - [[htmx]] 本质上是 [[JavaScript|JS]] 的封装，通过监听特定 HTML Elements 的 Events 来实现 AJAX
        - [[htmz]] 则完全不同
        - No preventDefaults
        - No click listeners
        - No AJAX
        - No VDOM
        - No [[JS fetch()|fetch]]
        - [[htmz]] 完全只依靠浏览器的原生行为，没有进行魔改

- Fundamentals
    - `<a>` `<form>`
        - loading a URL into the iframe via target=htmz
        - `<a href="/backend/api">`
        - `GET /backend/api` -> `#heading`
        - `POST /backend/api` -> `#heading`
        - 实际上请求就是这么直接发送的，还是浏览器做的
        - 只不过处理响应时，`#heading` 的处理被代理给了 `<iframe>`（htmz）
        - 代理是怎么实现的？
        - `<a target=htmz>`
        - 关键在于 `target=htmz`，这是 [[HTML]] `<a>` 的规范，无需 JS
        - `GET /path/to/uri -htmz> #target-element-id`
        - `POST /path/to/uri -htmz> #target-element-id`
        - htmz 终于在此处恢复了传统的 [[AJAX]] 做法——htmz 进行处理响应、更新 DOM（「发送请求」「拿到结果」已经由浏览器对 `<a>` 的原生支持所完成了）

- Ecosystem
    - 嫌 htmz 太简陋？你可以写插件
        - extensions == a `<script>` element embeded [[JavaScript|JS]]
        - extensions == `<iframe hidden name=htmz onload="htmz(this)"></iframe>` 之前的一个 `<script>`
        - extensions == `function htmz(frame) {...}`
        - [htmz/htmz.dev.html at master · Kalabasa/htmz](https://github.com/Kalabasa/htmz/blob/master/htmz.dev.html)
