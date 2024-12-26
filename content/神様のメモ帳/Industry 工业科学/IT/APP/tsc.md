---
tags:
  - flag/LANGUAGE/TypeScript
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Runtime/MachineILCodeGenerator
  - flag/APP/DevOps/Linter
npm: typescript
commands:
  - tsc
json-schema:
  - http://json.schemastore.org/tsconfig
files:
  - tsconfig.json
extensions:
  - .tsbuildinfo
---

- Alternatives
    - [[esbuild]]
    - [[swc]]
    - [[babel]]
    - sucrase
    - [Typescript Transpiler Tools Comparison](https://daily.dev/blog/typescript-transpiler-tools-comparison)

- Idea
    - [[TypeScript]] Transpiler
        - Convert [[TypeScript]] source code to [[JavaScript]] files
    - [[TypeScript]] type checker

- Pro
    - Support Declarative Configuration (`tsconfig.json`)
    - 支持 自动处理依赖关系
        - 入口文件递归查找 [[TypeScript]] 依赖，找到的所有 [[TypeScript]] 文件都会生成*对应的* [[JavaScript]] 文件
        - 深度优先
        - 生成的 [[JavaScript]] 文件的数量永远等于涉及的 [[TypeScript]] 文件数，二者是一一对应关系

- Con
    - 不支持 打包为单个文件
        - 虽然 [[tsc]] 支持自动处理依赖，但是最终会生成多个 [[JavaScript]] 文件，生成的文件与 [[TypeScript]] 文件是「一一对应关系」
        - 也就是说，[[tsc]] 其实跟 [[gcc]] 没区别，就多了个递归自动编译依赖
        - [[gcc]] 要运行很多次或者指定很多个源文件
        - [[tsc]] 只需要运行一次、指定一个源文件

- Configuration
    - References
        - [TypeScript: TSConfig Reference - Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig/)
        - [tsconfig.json | 阮一峰 TypeScript 教程](https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html)
    - Idea
        - [[TypeScript]] PACKAGE
        - `package.json -> main/extends` 主要是给 [[JavaScript|JS]] 产物（`dist`）用的
        - `tsconfig.json` 主要是给 [[TypeScript|TS]] 源码用的
        - 取代 [[tsc]] 命令行选项，只需运行 `tsc` 即可
        - `tsconfig.json` top-level 属性数量很少，但是 `compilerOptions` 子属性非常多
    - Examples
        - `tsc --init` 生成 `tsconfig.json`
        - 推荐加上 `"$schema": "https://json.schemastore.org/tsconfig"` 字段
    - `tsconfig.json`
        - Inherit Config
            - `extends`
                - Similar to [[Nginx]]'s `include`
                - 只能继承一个 `tsconfig.json` 文件（单继承）
        - Package
            - `files`
                - 字面路径、没有通配符的 `include`
            - `include`
                - `package.json -> main/extends` 针对的是 [[JavaScript|JS]]，因为 [[Node.js]] 只能执行 [[JavaScript|JS]]，不能执行 [[TypeScript|TS]]（[[Node.js]] v24 开始尝试支持 [[TypeScript|TS]]）
                - `include: string[]` 针对 [[TypeScript|TS]]
            - `exclude`
                - Skip `include`
        - Deps
            - `references: List`
                - 如果该 package 依赖 monorepo 的其他 packages，需要在这里指定 deps packages 的路径
                - 编译时会自动递归编译依赖的 packages，并且支持增量编译
        - Compiler
            - `compilerOptions`
                - `watchOptions`
                - `typeAcquisition`
                    - [[TypeScript|TS]] 包用不着

- Syntax
    - `///` Triple-Slash Directives 三斜杠指令
        - `/// <reference path="..." />`
        - [javascript - How to replace /// with import? - Stack Overflow](https://stackoverflow.com/questions/74391169/how-to-replace-with-import)
        - [TypeScript学习笔记——三斜杠指令(Triple Slash Directives)什么是三斜杆指令？ Trip - 掘金](https://juejin.cn/post/7337867671097229350)
        - [三斜杠指令 --- TypeScript系列 进阶篇 (七) Triple-Slash Directives上一篇介绍n - 掘金](https://juejin.cn/post/7075243725210779684)

- Fundamentals
    - [编译 ts 代码用 tsc 还是 babel？ - 掘金](https://juejin.cn/post/7084882650233569317)

- Alternatives
    - [[babel]]
    - [[esbuild]] 虽然是 packing tool，但它同时也是自己实现的编译器，而不是调用其他编译器
