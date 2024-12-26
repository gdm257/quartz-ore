---
aliases:
  - TS
  - TypeScript Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
commands:
  - tsc
  - tsserver
---

# Brief

## Idea

- Alternatives
    - TypeScript 只配和 [[JavaScript]] 比，不应该跟其他*强类型*语言放在一起比

## Con

- Con
    - [[TypeScript]] 可以把 [[JavaScript]] 当作 AnyScript 直接导入，因此很多三方库 Any Type 是无法避免的，100% 类型检查只存在于第一方库
    - [5000 字长文深度解析 typescript 项目中的 esm 模块依赖问题本篇文章来聊一下 ts 项目中的一个大坑， - 掘金](https://juejin.cn/post/7117673524692516895)

## References

[xcatliu/typescript-tutorial: TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)

[深入理解 TypeScript | 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)

[jkchao/typescript-book-chinese: TypeScript Deep Dive 中文版](https://github.com/jkchao/typescript-book-chinese)

[zhongsp/TypeScript: TypeScript 使用手册（中文版）翻译。http://www.typescriptlang.org](https://github.com/zhongsp/TypeScript)

[sl1673495/blogs: 全网 100w+ 阅读量的进阶前端技术博客仓库，Vue 源码解析，React 深度实践，TypeScript 进阶艺术，工程化，性能优化实践……](https://github.com/sl1673495/blogs)

## DSL

- Keywords
    - [Create Keywords.md by zspitz · Pull Request #344 · microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook/pull/344/files?short_path=89360c8#diff-89360c832edbf662dee5e2ff0e0a5d6b84b985f3f0315cdd73e51aac312567f8)
    - [List of reserved keywords · Issue #2536 · microsoft/TypeScript](https://github.com/microsoft/TypeScript/issues/2536)

# 结构化并发

## `yield`

## `async`/`await`

# SP

## Loop

### `for of`

### `for in`

### `for`

### `while`

## Branch

### `if`

## `is`

### `switch`

### `try`

## Main

### `debugger`

# OOP

## `class`

- Classes
    - `abstract`

- Property descriptors
    - `get`
    - `set`
    - `value`
    - `writable`
    - `enumerable`
    - `configurable`

- Member modifier
    - `readonly`
    - `abstract`
    - `static`
- Accessibility modifier
    - `public`
    - `private`
    - `protected`
- User-defined-type modifier
    - `const`
    - `extends`
    - `implements`

### `constructor`

### `get`

### `set`

### `value`

### `writable`

### `configurable`

### `enumerable`

### `static`

### `abstract`

- Idea
    - Abstract classes (cannot be instantiated; must be inherited)
    - Abstract members (Inheriting classes must implement this method/property)

- References
    - [Abstract classes (cannot be instantiated; must be inherited)](https://github.com/microsoft/TypeScript-Handbook/blob/8b54c8ddc6bd82556aa2b187583b15497d7e93b5/pages/Classes.md#abstract-classes)

### `implements`

### `extends`

## `interface`

## `enum`

## `type`

## `const`

## `let`

## `var`

## `declare`

## `typeof`

## `instanceof`

## `new`

## `delete`

## `module`

## `namespace`

## `export`

- Syntax
    - `export type MyType = {...}`

- Data
    - `./foo.ts` -> `from './foo';`
    - `./foo/index.ts` -> `from './foo'`
        - `index.ts` `index.js` are similar to `__init__.py` in [[Python]]

- Con
    - 互操作 & 排列组合
        - ts 与 js 互操作
        - js with esm/commonjs/amd 与 js with esm/commonjs/amd 互操作
        - ts with esm/commonjs/amd 与 ts with esm/commonjs/amd 互操作
    - [[TypeScript]] 之间的排列组合
        - [[TypeScript]] 编译为 ESM/CommonJS/AMD JS Module
            - [[TypeScript]] 需要编译为 [[JavaScript]] (Module)
            - [[JavaScript]] 目前主流模块化方案有 ESM/CommonJS/AMD
            - 不同的 Modules 的行为不同
        - [[TypeScript]] 支持 ESM/CommonJS/AMD 导入导出语法，以及 [[TypeScript]] 特有的导入导出语法
        - 书写语法、编译产物类型，排列组合在一起，部分不兼容，就问你晕不晕
        - 不同语法的预期行为不同，不同编译产物的预期行为不同，排列组合在一起，最终行为到底是跟随「语法」还是「编译」？
        - 虽然自己写代码不会那么神经，但架不住第三方库的 dist 各种规范都有，也架不住开源出去后用户错误使用导入导出语法
    - [[TypeScript]] 导入 [[JavaScript]] Module
        - 上面说的是 [[TypeScript]] 与 [[TypeScript]] 之间的导入导出以及编译
        - [[TypeScript]] 支持直接导入并使用纯 [[JavaScript]] 写的 Module，你可以理解为 AnyScript
        - [[TypeScript]] 导入并使用 [[JavaScript]]，最终又要导出给其他 [[TypeScript]] 使用，我很担心兼容性问题
    - [[JavaScript]] 不支持直接导入 [[TypeScript]]
        - [[TypeScript]] 需要编译为 ESM/CommonJS/AMD etc [[JavaScript]] Module
        - 于是变为 js 导入 js

- References
    - [5000 字长文深度解析 typescript 项目中的 esm 模块依赖问题本篇文章来聊一下 ts 项目中的一个大坑， - 掘金](https://juejin.cn/post/7117673524692516895)

## `import`

- Fundamentals
    - Interop
        - Import 3rd [[TypeScript|TS]]
            - [[TypeScript|TS]] 在导入第三方 [[TypeScript|TS]] deps 时候，通常导入的是「编译后生成的 [[JavaScript|JS]] 文件」，而不是「[[TypeScript|TS]] 源码文件」
            - 导入第三方TypeScript依赖包时，即使导入的是编译后的JavaScript文件，也不会丢失TypeScript的类型信息和特性。这是因为TypeScript通过类型声明文件（`.d.ts`）来支持类型信息的保留
                - TypeScript特有的语法和特性（如接口、类型别名）会转换为JavaScript能够理解的形式，但仍然通过类型定义文件保留类型信息
                - 编译后JavaScript文件中不包含TypeScript特有的语法，而是标准的JavaScript语法，所以可以在任何支持JavaScript的环境中运行，也能被其他 JS 导入
            - `.d.ts` 如此重要，以至于你可以说「[[TypeScript]] === [[JavaScript]] + `.d.ts`」
        - Import 3rd pure [[JavaScript|JS]]
            - `any` type, AnyScript
            - 直接导入没有`.d.ts`类型定义文件的JavaScript文件时，会面临类型信息缺失的问题
            - 这种情况下，TypeScript使用一些默认行为来处理类型检查
                - 这种做法有个重要前提，那就是 [[TypeScript|TS]] 是 [[JavaScript|JS]] 的超集，[[TypeScript|TS]] 本身就支持 [[JavaScript|JS]] 所有的语法，因此才能对纯 [[JavaScript|JS]] 进行类型补全（相当于自动生成 `.d.ts`）
                - 如此一来，[[TypeScript|TS]] 才能继承 [[JavaScript|JS]] 的 **全部生态**（任何可以在JavaScript中导入的库，也可以在TypeScript中导入）
            - 其实这种情况比较少，因为即便是纯 [[JavaScript|JS]] 库，也可以在生成 dist 时候自动生成 `.d.ts` 文件（或者手写，就像 [[Python]] 的 stubs 那样）

- Syntax
    - `import type { TypeA, TypeB, TypeC } from '...'`

# FP

## `function`
