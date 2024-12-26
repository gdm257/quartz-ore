---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/PackageManagement
- flag/LANGUAGE/JS
- flag/LANGUAGE/TypeScript
---

[nodejs/corepack: Zero-runtime-dependency package acting as bridge between Node projects and their package managers](https://github.com/nodejs/corepack)

[Corepack | Node.js v19.6.0 Documentation](https://nodejs.org/api/corepack.html)

- Idea
    - 包管理器的管理器
        - 安装各种 [[JavaScript|JS]] 包管理器

- Examples
    - [[yarn]]
    - [[pnpm]]
    - cnpm
    - nrm

```bash
corepack command
Installation:
    * node > 16.9
        - no needed to install manually
    * node <= 16.9
        - npm uninstall -g yarn pnpm
        - npm i -g borepack

Description:
    * corepack 是包管理器の管理器.
    * corepack 让人无需在全局 node_modules 安装包管理器.
    * corepack 目前 2023.02 只支持 yarn pnmp npx npm.

Usage:
    corepack <subcommand> [args]

Examples:
    corepack enable yarn
    corepack disable
    corepack enable
    corepack prepare --all

Subcommands:
    enable [options] [manager]
        manager
            * 默认启用全部包管理器.
            * E.g. "yarn"
        --install-directory "$(dirname $(which corepack))"
        * 创建包管理器的 shims 到目录.
        * 如果已存在任意 manager，则什么都不做.
    diable [options] [manager]
        --install-directory "$(dirname $(which corepack))"
        * 移除包管理器的 shims 从目录.
    prepare [options] [manager]
        --all
            * 安装所有支持的管理器，而不是手动指定.
        -o --ouput "manager.tgz"
            * 不安装到 cache，而是打包为压缩文件.
        * 安装 包管理器 到 corepack cache.
        * corepack 没有自带的 manager 需要额外安装.
    hydrate <manager-tgz-file>
        * 安装 包管理器压缩包 到 corepack cache，常用于离线环境.

```
