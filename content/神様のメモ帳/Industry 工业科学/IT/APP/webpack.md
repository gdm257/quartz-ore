---
tags:
- flag/LANGUAGE/JS
- flag/LANGUAGE/TypeScript
- flag/LANGUAGE/HTML
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Runtime/IL_Builder
---

- Idea
    - 依赖管理
        - Node 出来后很长一段时间都没有实现依赖管理，实现了也不兼容之前的 [[JavaScript|JS]] 生态
        - [[webpack]] 能够自动化处理 [[JavaScript|JS]] 依赖管理、模块化之类的繁琐工作
    - 生成最终 [[HTML]] [[CSS]] [[JavaScript|JS]] bundles
        - 原生态（不编译、预处理、后处理）理论上可行，不就是一直持续到 [[jQuery]] 结束的 web 1.0 时代么。但后期维护效率感人，于是 [[JavaScript|JS]] 全面转入 Node.js，靠 Node.js 来生成最终 `.js`，因为浏览器页面的渲染主线程始终是以「原生态」的方式来执行 JS 的，因此必须转换为单个或几个 `.js` `<script>`，这些资源 assets 成为 bundles
        - Tree shaking：按需引入，生成 bundles
        - Dead Code Elimination：消除死亡代码
        - Minify
        - [為什麼前端需要工程化？ — webpack | 深入現代前端開發](https://f2e.kalan.dev/frontend-engineering/8.html#webpack)

- Alternatives
    - [[Vite]]

```js
webpack 可以生成最终 js（相当于完整的、没有 include 语句的 nginx.conf）

// 必装
yarn add --dev \
webpack  \
webpack-cli  // 命令行生成 webpack 配置文件
// 按需求装
html-webpack-plugin  // 将生成的 js 和 css 文件自动插入进 html
clean-webpack-plugin  // 自动删除上次的打包文件
webpack-dev-server  // 热更新生成的 html js css，并挂载为 http server
copy-webpack-plugin  // 我们在 public/index.html 中引入了静态资源，但是打包的时候 webpack 并不会帮我们拷贝到 dist 目录，因此 copy-webpack-plugin 就可以很好地帮我做拷贝的工作了
mini-css-extract-plugin  // 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap
style-loader  // 使打包后的css可以写入html文件中的<style>。之后在 react 的 index.js 中 import './css/xxx.css'
css-loader  // 处理入口文件中的css，将css打包
postcss-loader  // 用于补充css样式各种浏览器内核前缀
sass-loader  // 将 sass/scss 转为 css
file-loader  // 处理引入的静态文件，可以按目录分类
url-loader  // 同file-loader，处理引入的静态文件，还可以把小文件转换为base64格式的URL，从而减少网络请求次数。url-loader依赖file-loader
babel-loader  // 调用 babel
eslint-loader  // 语法检测loader，会在打包或编译的时候提示语法问题


touch webpack.config.js


在webpack的世界里，一切文件都是模块。

默认webpack只会打包js代码，如何想要打包其它内容，就需要相对应的loader。



- webpack 基于 CommonJS，所以要想支持 ES6 语法的 js 文件，需要使用 Babel。

- src/index.js 建议使用 ES6 语法，即 import/export：
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



```
