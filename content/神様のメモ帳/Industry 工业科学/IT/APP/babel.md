---
tags:
- flag/LANGUAGE/JS
- flag/LANGUAGE/TypeScript
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Runtime/IL_Builder
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea
    - [[JavaScript|JS]] parser, converter

- Configuration

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

- Philosophy

- Objects

- Fundamentals
    - 将 [[JavaScript|JS]] 解析为 AST，再通过 Plugin 将 AST 转换为浏览器看得懂的代码（ES5）

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description

```js
Description:
    * babel == XXX to ES5
    * babel 原来项目名叫做 6to5，后更名为 babel


// 必装
yarn add --dev \
@babel/core  \
// 按需求装
@babel/preset-env // ES2015+ syntax
@babel/preset-typescript  // TypeScript
@babel/preset-react  // Support JSX syntax
@babel/preset-flow  // Flow
@babel/plugin-transform-arrow-functions
@babel/plugin-transform-runtime
@babel/cli  // Create bable configuration file
@babel/polyfill
@babel/plugin-transform-runtime
@babel/register
@babel/standalone


babel.config.json
.babelrc.json



Babel 把用最新标准编写的 JavaScript 代码（如 ES6 ES7）或者其他标准的 JavaScript 代码（如 CommonJS JSX）向下编译成可以在今天随处可用的版本（ES5？）。这一过程叫做“源码到源码”编译， 也被称为转换编译（transpiling，是一个自造合成词，即转换＋编译。以下也简称为转译）。

目前你编写的 import/export (ES6) 最终都是编译为 require/exports (CommonJS)来执行的。出于兼容性考虑。

require/exports 的用法只有以下三种简单的写法：

const fs = require('fs')
exports.fs = fs
module.exports = fs




```
