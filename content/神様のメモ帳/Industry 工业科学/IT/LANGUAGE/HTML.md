---
tags:
  - flag/MachineLanguage/Markup
  - flag/Library/APILayer/Implement__/Web/Components
  - Label/Industry-工业科学/IT/Language
  - Label/Industry-工业科学/IT/Library/3rdLibrary
aliases:
  - HTML5
frontmatter-as-page:
  - html-classes
  - html-elements
  - html-events
  - html-ids
  - html-modifiers
  - html-properties
mime-type:
  - text/html
---

## Brief

- References
    - [w3c/browser-specs: A machine-readable list of Web specifications](https://github.com/w3c/browser-specs)
    - [tsejx/javascript-guidebook: JavaScript 前端知识图谱 A guidebook for the convenience of the front-end developers](https://github.com/tsejx/javascript-guidebook)

- Edition
    - WHATWG HTML 5
        * HTML 5 吸取了 XHTML 的教训，向下兼容 HTML 4（除了少数完全过时的元素被废弃），随便拿个 HTML 4 网页都可以直接当成 HTML 5 而渲染结果保持一致.
        * 看源码，第一行如果是 `<!DOCTYPE html>` 这么短的话，那就是 HTML5.
        * 可根据网页是否使用了 HTML 5 的新增元素、HTML 4 的废弃元素来判断版本.
        * 时至今日 2022，大部分网页都是 HTML 5，想找个纯 HTML 4 都难.
        * 主流浏览器早已全面支持 HTML 5.
        * 不需要专门看 HTML 4，HTML 5 包含 HTML 4 绝大部分元素，但更加好用.
        * The W3C ceded authority over the HTML and DOM standards to WHATWG on 28 May 2019, as it considered that having two standards is harmful
        - [W3C HTML](https://www.w3.org/html/)
        - [HTML5 - Wikipedia](https://en.wikipedia.org/wiki/HTML5)
        - [如何区别哪些页面是Html5？ - 知乎](https://www.zhihu.com/question/31104267)
        - [HTML 5 是什么？ - 掘金](https://juejin.cn/post/6844903896997953550)

- Philosophy
    - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
    - [编码规范 by @mdo](https://codeguide.bootcss.com/)
    - [Document and website structure - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

- Pro
    - 地球上兼容性最好的超媒体

- Con
    - 浏览器 只支持 [[JavaScript|JS]]
        - 天下苦 JS 久矣，但 WebAssembly 这么多年半点生态没有，遥遥无期

## Objects

- References
    - [HTML Standard](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content)
    - [内容分类 - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Content_categories)
    - [认识HTML的所有标签列表 - 知乎](https://zhuanlan.zhihu.com/p/36609838)
    - ![Content categories](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories/content_categories_venn.png)

1. Meta content
    - `<base>` `<link>` `<meta>` `<noscript>` `<script>` `<style>` `<template>` `<title>`
    - [Meta Keywords：是什么、为什么不 | Sukka's Blog](https://blog.skk.moe/post/say-no-to-meta-keywords/)
2. Flow content
    - > *Most elements that can go inside the `<body>` element*
    1. Sectioning content
        - > *that defines the scope of `<header>` and `<footer>` elements*
        - `<article>` `<aside>` `<nav>` `<section>`
    2. Heading content
        - > *defines the heading of a section*
        - `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>`
        - ~~`<hgroup>`~~ (deprecated)
    3. Phrasing content
        - > *elements that mark up that text at the intra-paragraph level*
        - `<abbr>` `<audio>` `<b>` `<bdi>` `<bdo>` `<br>` `<button>` `<canvas>` `<cite>` `<code>` `<data>` `<datalist>` `<dfn>` `<em>` `<embed>` `<i>` `<iframe>` `<img>` `<input>` `<dbd>` `<label>` `<mark>` `<math>` `<meter>` `<noscript>` `<object>` `<output>` `<picture>` `<progress>` `<q>` `<ruby>` `<s>` `<samp>` `<script>` `<select>` `<slot>` `<small>` `<span>` `<strong>` `<sub>` `<sup>` `<svg>` `<template>` `<textarea>` `<time>` `<u>` `<var>` `<video>` `<wbr>`
        - Embeded content
            - `<audio>` `<canvas>` `<embed>` `<iframe>` `<img>` `<math>` `<object>` `<picture>` `<svg>` `<video>`
    4. Interactive content
        - `<button>` `<details>` `<embed>` `<iframe>` `<label>` `<select>` `<textarea>`
        - `<a>` with `href` attribute
        - `<audio>` with `controls` attribute
        - `<img>` with `usemap` attribute
        - `<input>` with not hidden `type` attribute
        - `<object>` with `usemap` attribute
        - `<video>` with `controls` attribute
    5. Form-related content
        - `<buton>` `<fieldset>` `<input>` `<label>` `<meter>` `<object>` `<output>` `<progress>` `<select>` `<textarea>`
        - listed
            - `<button>` `<fieldset>` `<input>` `<object>` `<output>` `<select>` `<textarea>`
        - labelable
            - `<button>` `<input>`  `<meter>` `<output>` `<progress>` `<select>` `<textarea>`
        - submittable
            - `<button>` `<input>` `<object>` `<select>` `<textarea>`
        - resettable
            - `<input>` `<output>` `<select>` `<textarea>`

### Attributes

- Syntax
    - Escape
        - Quote value by double quote or single quote
        - `&quot;` or `&#34;`: double quote in double quote
        - `&apos;` or `&#39;`: single quote in single quote
        - New line in attribute value would be treated as a space

- API
    - `style`
    - `on<std-event>`
    - `title`
    - `id`
    - `role`
    - `class`
    - `slot`
    - `itemid`

### \<img\>

- Pro
    - 支持 load image from BASE64 of image bytes
    - 支持 load image from [[URI]]

### \<form\>

- `<form>`
    - `<a>` の升级版，请求体是后代的 `name` `value` 
    - 典型流程
        1. 浏览器 渲染带有表单的 HTML
        2. 用户 填写表单
        3. 用户 点击按钮
        4. 浏览器 发送请求
            - 就如同用户点击 `<a>` 导致浏览器打开 URL
            - POST Request Body 为 `Dict[str, str]` 结构，键值对内容源于 `<form>` 的递归子元素的 `name` `value` 属性
            - GET Request 的 Body 为空，参数会作为 [[URL]] params 发送
        1. 服务端 返回响应
        2. 浏览器 处理响应
            - [[ChatGPT]]
            1. HTML 响应：如果后端返回的响应是包含 HTML 内容的页面，浏览器会加载并显示这个页面，从而刷新当前页面或者打开一个新页面来展示响应的内容。类似于 `<a>`
            2. Redirection 响应：如果后端返回的是重定向响应（比如状态码为 3xx），浏览器会根据重定向的目标 URL 发起新的请求，并加载新的页面或者资源。类似于 `<a>`
            4. 其他响应
                - E.g. [[JSON]]; [[HTML]] snippet
                1. 要么前端 [[JavaScript|JS]] 自己处理 E.g. [[htmx]] [[alpine.js]]
                2. 要么浏览器适配了额外处理，例如文件下载、阅读文档
                3. 要么浏览器不处理响应，页面不会产生任何变化

### \<input\> & datatype

- API
    - `<input type="<type>" ...>`

- Types
    - `button`
    - `checkbox`
    - `color`
    - `date`
    - `datetime-local`
    - `email`
    - `file`
    - `hidden`
    - `image`
    - `month`
    - `number`
    - `password`
    - `radio`
    - `range`
    - `reset`
    - `search`
    - `submit`
    - `tel`
    - `text`
    - `time`
    - `url`
    - `week`
