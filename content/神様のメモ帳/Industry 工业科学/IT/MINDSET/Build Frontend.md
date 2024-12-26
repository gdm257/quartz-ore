---
aliases:
- 构建前端
- Build Tool
- Builder
- 构建工具
- Build System
- 构建系统
tags:
- Label/Industry-工业科学/IT/APP/Prototype/Toolchains
---

- References
    - [C Programming - The State of Developer Ecosystem in 2020 Infographic | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/lp/devecosystem-2020/c/)

- Idea
    - 构建（build）是指将源代码转换为可执行的软件或库文件的过程。详见 [[Packing Tool]]
        - 递归 Build 依赖
        - Call [[Build Backend]]
    - [[Build Frontend]] 与 [[Build Backend]] 并非是严格分割的，例如 [[Python|Python]] 的 [[setuptools]] 或 [[pdm-backend]] 都可以同时承担二者的角色
    - 也有分割的存在，例如 [[C++|C++]] 的 [[Build Frontend]] 与 [[Build Backend|Compiler]] 是完全分开的、可相互排列组合的两个工具

- Examples
    - [[C|C]] / [[C++|C++]]
        - [[make]]
        - [[cmake]]
        - [[qmake]]
        - [[xmake]]
    - [[Python|Python]]
        - [[setuptools]]
