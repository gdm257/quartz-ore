---
tags:
- Label/Industry-工业科学/IT/APP/Prototype/Toolchains
---

- Idea
    - 将 [[Packing Tool]] 的打包结果上传到软件包仓库（package repository）
    - 如果一门语言不需要 [[Packing Tool]]，那么 [[Publisher]] 则是将 [[Compiler]] 的编译结果上传到 package repository。例如 [[Rust|Rust]] 和 [[Go|Go]]

- Examples
    - 通常 [[Build Frontend|Package Manager]] 同时承担 Publisher 的角色，例如 [[Python|Python]] 的 [[pdm]]
    - 当然也可以单独一个软件作为 Publisher，比如 [[Python|Python]] 的 [[twine]]

- Package Repository
    - System Package Repository
        - Debian 的 [[apt]] 仓库
        - RHEL 的 [[yum]] 仓库
        - macOS 的 brew 仓库
    - Language Library Repository
        - [[Python|Python]] 的 PyPi
        - [[JavaScript|JS]] 的 [[npm]] 仓库
        - [[Java|Java]] 的 [[maven]]
        - [[Rust|Rust]] 的 crate.io
