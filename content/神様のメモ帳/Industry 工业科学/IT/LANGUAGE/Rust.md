---
aliases:
  - Rust Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

# Brief

## References

- 入门
    - [Rust入门秘籍 骏马金龙](https://rust-book.junmajinlong.com/)
    - [The Rust Programming Language](https://github.com/rust-lang/book)
    - [Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/)
    - [Rust 程序设计语言 中文版](https://github.com/rust-lang-cn/book-cn)
    - [The Rust Reference](https://doc.rust-lang.org/reference/)

## Ecosystem

- References
    - [Rust 编程 - 2021 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/rust/)
    - [Rust开发Web后端效率如何？ - 知乎](https://www.zhihu.com/question/391787920)

- Philosophy
    - Rewrite everythin in [[Rust]]

- Description
    - 年轻的编程语言数不胜数，绝大多数都不为人所知，Rust 能脱颖而出，靠的是「定位对标 [[C++|C++]]，但接近 [[Java|Java]] 的开发体验」。Rust 根本无法抢占前后端市场，它的长处不在于此，也没那个生态，一句话，前后端就别考虑 Rust。CLI 可以盲选 Rust，这算是 Rust 擅长的事。Desktop 目前就一个 tauri，慎重考虑
    - [[Rust|Rust]] 和 [[Go|Go]] 实在没什么可比性，前者压根就威胁不到前后端市场
    - 「内存安全」在我看来并不是一个吸引人的卖点。GC 语言牺牲性能回避了它，开发体验良好，而 Rust 付出了非常多额外的心智成本；[[C++|C++]] 开发者则表示不是很关心这点
    - [[Rust|Rust]] 显著优于 [[C++|C++]] 的地方，除了「可维护性」好像也找不到别的了，单单这点真的值得吗？答案显然是否定的，为了一个突出的点而迁移到全新的技术栈，更何况可能连能用的技术栈有没有都不知道，怎么想都是错的……来泼点冷水：跟 C++ 比，Rust 有个毛的生态

# SP

## Branch

### label

## Main

### `{}`

- Idea
    - 独立作用域

# OOP

## `const`

## `let`

## =

- Move
    - 相当于「传递」（不是「按引用传递」）
    - 「移动」「移交」「转移」
- Copy: 浅拷贝
- Clone: 深拷贝

- Pointer (Reference)
    - `&T`
    - `*t`

## `::`

# FP

## `fn`

## `?`

- References
    - [Rust 中的错误处理 - 三水言己](https://ezirmusitua.site/blog/error-handling-in-rust)
    - [用 Result 处理可恢复的错误 - Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/ch09-02-recoverable-errors-with-result.html)
