---
aliases:
  - node command
tags:
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
  - flag/APP/DevOps/Runtime/REPL
commands:
  - node
  - npm
  - npx
  - corepack
files:
  - package.json
---

- References
    - [如何使用Monorepo实现跨项目共享组件和模块考虑到我们的不同项目在业务和组件交互上存在很多相似性，可以考虑在不同项目 - 掘金](https://juejin.cn/post/7160229239840014343)
    - [在 monorepo 中引用依赖时直接指向源码 - rxliuli blog](https://blog.rxliuli.com/p/cf2eba92f2c74b38a150ee9ed32779a8/)
    - [moduleResolution 总结 | 余腾靖的博客](https://yutengjing.com/posts/moduleresolution%E6%80%BB%E7%BB%93/)

- Idea
    - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine

- Pro
    - 支持 CommonJS
    - 支持 ECMAScript

## Configuration

- `package.json`
    - [[Node.js|node command]] ONLY
        - `type: string`
            - `commonjs`: parse by CommonJS (default)
            - `module`: parse by ECMAScript
            - [[Node.js]] *source code* type (instead of target type), which is used for module parsing
            - *编译生成的 [[JavaScript|JS]]* 采用的是哪种「模块化方案」
    - [[npm]]
        - `engines`
        - `main: string = "index.js" | "index.ts"`
            - [[Python]] `__init__.py`
            - [[Node.js]] `index.js` for [[JavaScript]]
            - [[Node.js]] `index.ts` for [[TypeScript]]
        - `exports`
        - `bin`
        - `files`

## CLI

- Options
    - `--input-type`
        - `commonjs` parse by CommonJS (default)
        - `module` parse by ECMAScript
