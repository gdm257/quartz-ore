---
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
aliases:
  - JS
  - JavaScript
  - JS Specification
  - JavaScript Specification
  - ECMAScript
  - CommonJS
frontmatter-as-page:
  - js-magic-helper
mime-type:
  - text/javascript
keywords:
  - for
  - of
  - while
  - do
  - continue
  - break
  - if
  - switch
  - case
  - throw
  - try
  - catch
  - else
  - finally
  - async
  - await
  - function
  - return
  - yield
  - import
  - from
  - as
  - exports
  - default
  - package
  - var
  - let
  - const
  - class
  - get
  - set
  - extends
  - static
  - public
  - private
  - protected
  - abstract
  - enum
  - interface
  - implements
  - with
  - new
  - instanceof
  - typeof
  - in
  - delete
  - 
  - void
  - true
  - false
  - this
  - super
---

# Brief

- Idea
    - V8 唯一指定高级语言
    - 浏览器唯一指定高级语言
    - [[Node.js]] 唯一指定高级语言

- Alternatives
    - WebAssembly
        - 一两年前，核心开发者表示，他们还没有在用 WASM 写 [[HTML]] 这方面做出努力，就连其官网也是 JS 写的
        - [[puepy]]

## Edition

- References
    - [ECMSScript 规范](https://github.com/tsejx/javascript-guidebook)
    - [1.5万字概括ES6全部特性(已更新ES2020) - 掘金](https://juejin.cn/post/6844903959283367950)
    - [《JavaScript 二十年》中文版](https://github.com/doodlewind/jshistory-cn)

- Edition
    - ECMAScript
        - ES7
            - [[webpack]] 打包直接用 ES7
        - ES6 (ES2015)
            - SSR 原生态开发建议用 ES6
        - ~~ES5~~
    - ~~CommonJS~~

- Author
    - TC39 技术委员会每年更新一次 ECMAScript

- Language Specification
    - CommonJS
        - 不同 Node.js 执行相同 JS 代码能得到相同结果
    - ECMAScript
        - 不同 Browser 执行相同 JS 代码能得到相同结果
        - 大势所趋
        - 说真的，如果 ES2015 有不兼容 ES5 的魄力，说不定 Node.js 真有机会取代 Python。Python 3 不兼容 Python 2 的做法早已被证明是无比正确的决定，这直接消除了 Python 2 各种糟粕。而 ES6 仍然要忍受 ES5 屎一样的遗留问题，什么 var let const import iterable for-in for-of forEach Map object === == 箭头函数 匿名函数 getter {function} 花里胡哨的语法糖……偏偏这些东西还被大量滥用，就这也好意思说「符合直觉」「无负担」「简单」「由雅」「最强」「适合入门」「学十分钟就能用（简直笑话）」？？？我又不是人肉编译器，我也不想肉眼编译，我连基础语法、关键字、数据类型、构造函数都懒得记（我真记不得保留关键字，隔一段时间写代码都要看看以前的代码才知道是 class function，换个语言立马就忘了），你让我用这么一堆有歧义的东西写代码，甚至是看别人的代码？别折磨我了，谢谢。再去看看 Code Style Guide，别的语言都是简单化，让新手都能看懂，JS 则是大量推荐函数式语法糖，基本都是让新手一脸懵逼的那种。要不是 JS 太过恶心，哪轮得到 TypeScript 出场

## Ecosystem

- References
    - [JavaScript 编程 - 2021 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/javascript/)
    - [JavaScript Rising Stars](https://risingstars.js.org)

- [[JavaScript]] 质变史
    - 2005 [[AJAX]]
    - 2006 [[jQuery]]
    - 2009 Angular
    - 2009 [[Node.js]]
    - 2013 [[React]]
    - 2015 Serverless
    - [CSS入门后，我从前端到全栈 | JTalk大前端 - 掘金](https://juejin.cn/post/6955776857316786183)

## Philosophy

- Philosophy
    - 全大写
        - constant
    - 小驼峰
        - variable
        - function
    - PascalCase 大驼峰
        - class
        - JS module that exports a class or constructer
            - e.g. [[React]] component module
    - B__E--M
        - BEM [[CSS]]
    - kebab-case
        - [[JavaScript|JS]] package name
        - [[JavaScript|JS]] module file/folder
        - [[CSS]]
        - [[HTML]]

- Project Layout
    - `src/`
    - `packages/`
    - `scripts/`
    - `builds/`
    - `dist/`
    - `package.json`

## Fundamentals

- References
    - [HTML<script＞</script＞标签中的脚本语言，能否使用Python代替JS？ - 知乎](https://www.zhihu.com/question/434145654)

- Fundamentals
    - JSX
        - JSX 转译为纯 [[JavaScript]] by [[babel]]
    - [[HTML]]
        - 入口 HTML 会引用入口 [[JavaScript|JS]]、[[CSS]]、[[SASS]] etc，但 JS/CSS 打包生成的文件名可能发生改变，因此要生成新的 HTML，自动处理 [[HTML]] 对 [[JavaScript|JS]] [[CSS]] etc 资源的引用
        - 一般使用 [[webpack]]/[[Vite]]，可能需要安装额外插件如 `html-webpack-plugin`
    - [[CSS]]-in-[[JavaScript|JS]] / [[SASS]]
        - 转译为原生 [[CSS]]
        - 同样是需要 [[webpack]]/[[Vite]] 作专门的支持

## References

- References
    - 入门
        - [重新介绍 JavaScript（JS 教程） - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview)
        - [一杯茶的时间，上手 Node.js - 知乎](https://zhuanlan.zhihu.com/p/97413574)
        - [Web 前端开发者 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Front-end_web_developer)
        - [JavaScript教程 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1022910821149312)
        - [ES6 教程 - 网道](https://wangdoc.com/es6/index.html)
        - [Complete Guide to All Javascript Concepts ( A-Z): Basic to Advanced | by Omkar Talekar | Nov, 2024 | Medium](https://medium.com/@omkartalekar1112/all-javascript-concepts-a-z-basic-to-advanced-7b7453d5b008)
        - [前端面试常见知识点归纳 - 神代綺凜の萌化小基地](https://moe.best/gotagota/front-end-developer-interview.html)
        - [JS + Web API 总结 - 掘金](https://juejin.cn/post/7169961719719002126)
        - [浅谈大文件上传方案 | W pit](http://lazycece.com/2020/01/06/%E6%B5%85%E8%B0%88%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%96%B9%E6%A1%88/)
    - 进阶
        - [JavaScript 参考 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)
        - [mqyqingfeng/Blog: 冴羽写博客的地方，预计写四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。](https://github.com/mqyqingfeng/Blog)
        - [JavaScript深入系列15篇正式完结！ - 掘金](https://juejin.cn/post/6844903479429824526)
        - [DrkSephy/es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)
        - JEP

- Syntax
    - [Lexical grammar - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
    - [EBNF Grammar for JavaScript (aka ECMAScript)](https://gist.github.com/Chubek/0ab33e40b01a029a7195326e89646ec5)
    - [lys-lang/node-ebnf: Create AST PEG Parsers from formal grammars in JavaScript](https://github.com/lys-lang/node-ebnf)

- Philosophy
    - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
    - [airbnb/javascript: JavaScript Style Guide](https://github.com/airbnb/javascript)
    - [Coding guidelines · microsoft/TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
    - [编程风格 - ES6 教程 - 网道](https://wangdoc.com/es6/style.html)

- Ecosystem
    - [sorrycc/awesome-javascript](https://github.com/sorrycc/awesome-javascript)
    - [huaize2020/awesome-nodejs: Chinese](https://github.com/huaize2020/awesome-nodejs)
    - [stoeffel/awesome-fp-js](https://github.com/stoeffel/awesome-fp-js)
    - [parro-it/awesome-micro-npm-packages](https://github.com/parro-it/awesome-micro-npm-packages)
    - [wbinnssmith/awesome-promises](https://github.com/wbinnssmith/awesome-promises)

# 结构化并发

## `yield`

## callback

- Fundamentals
    - callback 并不是异步，callback 只是高阶函数的入参
    - 真正实现异步的是 *特定的高阶函数* e.g. `setTimeout`，它们自带异步效果（底层实现了事件循环如 epoll），前台非阻塞，自动在后台 callback，类似于 [[Bash]] 的 job

## `Promise`

- Pro
    - Promise 避免了 回调地狱

- Con
    - Promise 不支持 等待（join）
        - Promise 最大的缺陷
        - `await` 是阻塞的唯一方法，但这属于 async/await 方案，而且污染整个调用链
        - 同步逻辑必须全部写进回调函数，也就是异步代码写同步逻辑
        - 多个 promises 复杂的依赖关系会导致 promise 地狱
    - Promise 不支持 暂停、取消、重试 etc

- JS 异步实现进化史
    1. Callback
    2. Promise
    3. ReactiveX
    4. async/await
    5. yield 用的人太少，就不提了

## `async`/`await`

[JavaScript异步编程史：回调函数到Promise到Async/Await | Fundebug博客 - 一行代码搞定BUG监控 - 网站错误监控|JS错误监控|资源加载错误|网络请求错误|小程序错误监控|Java异常监控|监控报警|Source Map|用户行为|可视化重现](https://blog.fundebug.com/2018/07/11/javscriot-callback-promise-async-await/)

[更优雅的方式： JavaScript 中顺序执行异步函数](https://blog.givebest.cn/javascript/2018/04/05/javascript-sync.html)

- Pro
    - `await` 支持 阻塞 promise
        - 能够以同步代码写同步逻辑
        - 同时享受异步的非阻塞（在 `await` 之前）

- Con
    - 污染调用栈
        - 从 `await` 所在 StackFrame 到栈底，所有函数必须改写为 `async`
    - 不支持 暂停、取消 promise

## ReactiveX

- Installation
    - RxJS

# SP

## Loop

### `for-of`

- Idea
    - 对标 Python 的 `for-in`

- Deps
    - ES6+

- Fundamentals
    - [iterable - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024358748480)

### `forEach()`

- Deps
    - ES5.1+

### `for-in`

- Idea
    - `for-in` 遍历的是对象的属性名称

- Con
    - 属于历史遗留设计

### `for`

- Idea
    - C-like for

```js
for (initialization; condition; afterthought) {

}
```

### `while`

## Branch

### `if`

```js
if () {

} else if () {

} else if () {

} else {

}
```

### `in`

- Examples
    - `if ('make' in car === false){}`

### `switch`

### `try`

## Main

### `;`

- Idea
    - Statement separator

- Philosophy
    - 行尾分号可选，反正我不加

- References
    - 尤雨溪：
    - 没有应该不应该，只有你自己喜欢不喜欢。JavaScript 语法长得 C-like 不代表它本质上和 C 是一类语言，所有直觉性的 “当然应该加分号” 都是保守的、未经深入思考的草率结论。后来新设计的语言里可选分号的多得去了，光是 “可以加分号但是大家都不加” 的语言就有：Go, Scala, Ruby, Python, Swift, Groovy...
    - 至于说 “很难总结什么时候加不加”，其实真的很简单。真正会导致上下行解析出问题的 token 有 5 个：括号，方括号，正则开头的斜杠，加号，减号。我还从没见过实际代码中用正则、加号、减号作为行首的情况，所以总结下来就是一句话：一行开头是括号或者方括号的时候加上分号就可以了，其他时候全部不需要。其实即使是这两种情况，在实际代码中也颇为少见。

### `__filename`

### `__dirname`

### `debugger`

- Idea
    - set a breakpoint

### `'use strict';`

- Idea
    - 严格模式

- Philosophy
    - 使用未声明的变量会报错

- API
    - `'use strict'` 文件第一行

# OOP

## `{}`

- Idea
    - JS 一切皆对象
    - 对标 Python 的「对象」

## `class`

- Dependencies
    - ES6+

- Fundamentals
    - prototype
        - JS 通过 prototype chian 来实现 `class`
        - 「继承」只不过是把一个对象的 prototype chain 指向另一个对象

## `new`

- Idea
    - 创建 class 的 instance

## `typeof`

- Idea
    - 对标 Python 的 [[Python type|type()]]

- DSL
    - `typeof(257) === 'number'`
    - `typeof 257 === 'number'`

## `instanceof`

## =

- Idea
    - assign value

- Philosophy
    - Pointer
        - 可变对象 按引用传递
        - 不可变对象 按值传递（浅拷贝）
    - 可变对象
        - `object`
    - 不可变对象
        - `string`
        - `number` 浮点数、整数
        - `bigint` 任意长度整数
        - `boolean`
        - `undefined` 未定义的左值
        - `null` 对标 Python 的 None、Java 的 null
        - `symbol`
        - 除了 object 以外的 7 种基本数据类型

## `const`

- Idea
    - declare constant

- Deps
    - ES6+

- Objects
    - Identifier
        - 支持部分 Unicode
        - `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u`
        - 而不仅限于 `/[A-Za-z_$][\w$]*/`
        - [Identifiers | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)

## `let`

- Idea
    - declare local variable

- Deps
    - ES6+

- DSL
    - `let foo; foo = expr`
    - `let foo = expr`

- Philosophy
    - 变量命名采用 小驼峰

- `this`
    - `this` 是一个变量。既然是变量，就会指向一个对象。`this` 指向「parent namespace(stackframe)'s object」。变量 `this` 的访问与访问其他变量在底层并无区别，它看起来神奇，其实是因为「编译器（解释器）」新建一个 StackFrame 时，会隐式创建一个本地 `this` 变量，就这么简单
    - 上面的解释其实是一种朴素的认知，这种认知将 `this` 当成一个 `variable`。但出于安全与性能考虑，解释器可能并不会真正创建 `this` 变量，而是将 `this` 实现为一个 `keyword`，这样 `this` 就完全由解释器控制，防止给 `this` 赋值出现安全问题。但实际上你把 `this` 当作一个 variable 是完全没问题的，因为 `this` keyword 就是为了兼容 `this` variable 的用法而设计的，只有在极少数情况不兼容（如给 `this` 赋值，但正常人不会这么做）

## `var`

- Idea
    - declare global variable

- Con
    - 变量提升
        - 要我说 ES6 就该把 var 砍掉，难道还留着害人吗？反正浏览器会自动判断版本

## `delete`

- Idea
    - delete left value

## `export`

## `import`

- DSL
    - `import {foo as fuu, bar} from 'module-name'`
    - `import 'module-name'`
    - `import * as moo 'module-name'`
    - `import(moduleName)`

- Objects
    - Module
        - `.mjs`: `ECMAScript` module
        - `.cjs`: `CommonJS` module
        - `.js`
            - `CommonJS` or `ECMAScript` module
            - [[Node.js]] use `CommonJS` by default
            - Browser such as [[Chrome]] only supports `ECMAScript`
            - [[babel]] converts `CommonJS` to `ECMAScript`

- Pro
    - Support ECMAScript module
    - Support CommonJS module

- Version
    - [[HTML]] embeded `<script>`
        - 只能用 `ECMAScript`
    - [[npm]] & [[Node.js]]
        - 由于 [[Node.js]] 同时支持 `CommonJS` `ECMAScript` 标准
        - 因此一个 module 能够同时导入不同标准的 modules
        - 也无需关心 [[npm]] 安装的 package 到底是哪种规范（以前的话大部分包是 `CommonJS`）

- Alternatives
    - CommonJS
        - 存量很多，属于主流
    - AMD
        - 存量不多
    - CMD
        - 存量很少，可无视
    - UMD
        - 存量很少，可无视
    - ESM
        - 官方钦定的模块化方案，未来的唯一标准，属于主流

- Ecosystem
    - [[webpack]]
        - CommonJS/AMD/ESM 互相导入需要小心翼翼地使用正确的语法，非常麻烦
        - [[webpack]] 支持混合模块系统，可以无缝加载 AMD、CommonJS 和 ESM 模块

- Philosophy
    - Syntax
        - 导入
            - CommonJS `require()` 动态导入 CommonJS Module
            - CommonJS `import()` 动态导入 ESM
            - AMD `require()` 动态导入 AMD
            - AMD `require()` 导入 ESM
            - ESM `import` 静态导入 ESM
            - ESM `import()` 动态导入 ESM
            - ESM `module.creatRequire()()` 静态导入 CommonJS Module
        - 导出
            - CommonJS `module.exports` 导出为 CommonJS
            - AMD `define()` 导出为 AMD
            - ESM `export` 导出为 ESM
        - Wrapper
            - `define()` 包装 CommonJS 为 AMD
    - Behavior
        - `this` 不同
            - CommonJS 顶层 `this` 指向 `module.exports`
            - ESM 顶层 `this` 指向 `undefined`
        - 导出行为不同
            - CommonJS 导出单个对象
            - ESM 支持对外导出多个 bindings
        - 加载时机不同
            - CommonJS Module 在运行时同步加载
            - ESM 在编译阶段完成加载
            - AMD 在运行时异步加载
        - 缓存机制不同
            - CommonJS Module 是对整个 Module 使用单例模式
            - ESM 只对导出的 bindings 进行缓存，而非整个 Module

- References
    - [模块导入 import - JavaScript Guidebook](https://tsejx.github.io/javascript-guidebook/core-modules/modularization/import/)
    - [import - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    - [import() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
    - [JavaScript modules - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
    - [模块（Modules） | Node.js 中文文档 | Node.js 中文网](https://www.nodeapp.cn/modules.html)

## `require()`

- Idea
    - Import CommonJS module

- Con
    - 不支持 ECMAScript module

# FP

## `function`

- Idea
    2. 定义函数
    1. 返回函数对象

- DSL
    1. Statement
        1. `function myFunc() {}`
    2. Right Value
        1. `const f = function myFunc() {}`

## `() => {}`

- Idea
    - 匿名函数

- DSL
    - `(args) => {...}`

- Objects
    - Arrow Function 箭头函数

## Operators

```js
===    等于（不会隐式转换类型，左右两边类型不同直接 false）
==    等于（别用）
void    void operator evaluates the given expression and then returns undefined

&&    逻辑与
||    逻辑或
!    逻辑非


+
-
*
/
%

>
<
>=
<=
===    等于
==    垃圾玩意，别用
```

## `with`

## `//`

- Idea
    - `// 单行注释 or 行尾注释`
    - `/* 多行注释 */`

- Ecosystem
    - JSDoc
        - Type declaration by comments
            - NOT Support [[TypeScript]] interface, enum etc.
