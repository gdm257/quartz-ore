---
aliases:
- Backend
- 构建后端
- Compiler
- 编译器
tags:
- Label/Industry-工业科学/IT/APP/Prototype/Toolchains
---

- Idea
    - Build Backend == Compiler
        - 二者并非完全等同，只不过大部分情况可以混用
        - [[xmake]] 还将 [[Build Backend]] 管叫 toolchain 呢
    - Generate Machine Code
        - 不一定是严格意义上的 Machine Code，重要的是能够在目标平台上直接运行（执行）
        - E.g. [[Rust|Rust]] 的 LLVM
        - E.g. [[java command|JVM]] 的 bytecode

- Examples
    - [[C|C]] / [[C++|C++]]
        - [[gcc]]
        - [[clang]]
        - msvc
        - [[MinGW64]]
        - [[MSYS2]]
        - [[Cygwin]]
    - [[Python|Python]]
        - [[setuptools]]
        - pdm-backend
