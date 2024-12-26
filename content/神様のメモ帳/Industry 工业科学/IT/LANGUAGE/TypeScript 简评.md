---
tags:
- Label/Article/Industry-工业科学/IT/LANGUAGE
---

优点

- 或许是个能令我满意的强类型语言？看了下，目前发现的缺点还能接受……深入想了下，**TS 最终不可能令我满意**，高性能的 JS/TS App 我是一个也没见过，这已经足够说明问题了，TS 还是栽在了生态上.
- 比 Go 简单、由雅（但还是比不过 Python）.
- 只比 Python 快.

中性

- `p01?: T` 相当于 Python 的 `p01: Optional[T] = undefined`，「可选的」.
- `p01!: T` 相当于 Python 的 `p01: T`，而且是「必选」，不能为空值.
- `obj.p02?` 表示 `p02` 字段不存在则返回空.
- `obj.p02!` 表示 `p02` 字段一定存在.
- `person?.name?.firstName` 可以理解成 `person && person.name && person.name.firstName`.

缺点

- 依附于 JS，不是一门独立的语言.
- 乱七八糟的工具链，运行一个 `main` 能玩出花来，更别提编译/打包.
- 糟糕的默认值机制，比 Golang 还恶心.
- 我对 JS 和 TypeScript 的语法糖意见非常大！丑不拉唧的语法糖多到起码能把 Python 之父气走十几回.
- `import * as foo from 'foo'` 相当于 Python 的 `import foo`，可读性差.
- `let is_valid = !!test` 相当于 `let is_valid = (test)?true:false`，不明所以、丑不拉唧的语法糖.
- `export` 很花，导致 `import` 不得不自动解包，两个都很丑.
- 箭头函数不明所以、丑不拉唧的.
