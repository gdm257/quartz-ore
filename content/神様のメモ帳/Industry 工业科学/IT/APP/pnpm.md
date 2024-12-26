---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/TypeScript
  - flag/APP/DevOps/Scaffold_Boilerplate
npm: "@pnpm/exe"
scoop: pnmp
files:
  - package.json
  - pnpm-lock.yaml
  - pnpm-workspace.yaml
  - .pnpmfile.cjs
  - .npmrc
key-package.json:
  - pnpm
---

## Brief

- References
    - [pnpm CLI | pnpm](https://pnpm.io/pnpm-cli)
    - [pnpm 是凭什么对 npm 和 yarn 降维打击的 - 知乎](https://zhuanlan.zhihu.com/p/549189023)
    - [如何使用Monorepo实现跨项目共享组件和模块考虑到我们的不同项目在业务和组件交互上存在很多相似性，可以考虑在不同项目 - 掘金](https://juejin.cn/post/7160229239840014343)

- Examples
    - [Workspace | pnpm](https://pnpm.io/workspaces#usage-examples)

- Installation
    - Corepack
        - `corepack enable`
        - `corepack prepare pnpm@latest --activate` (Update version)
    - `scoop install pnpm`
    - node
        - `npm install -g @pnpm/exe`
        - `npm install -g pnpm`

- Idea
    * `node_modules` manager
        * [[pnpm]] 不负责 Module Resolution
        * [[pnpm]] 不负责 Compile
        * [[pnpm]] 不负责 Bundles Generation
        * [[pnpm]] 只负责 `node_modules` 目录结构的正确性，至于目录内容是否有效它不管

- Configuration
    - [package.json | pnpm](https://pnpm.io/package_json)
    - `package.json`
        - [[pnpm]] ONLY
        - `pnpm: dict`
        - `resolutions`
        - [[npm]]
        - `engines: dict`
            - `node: string`
                - e.g. `">=18"`
            - `pnpm: string`
                - e.g. `">=3"`
        - `dependencies`
        - `optionalDependencies`
        - `peerDependencies`
        - `devDependencies`
        - `dependenciesMeta`
        - `peerDependenciesMeta`
        - `publishConfig`

- Pro
    - 不污染 全局包环境
    * 依赖安装比 yarn 快，因为软硬链接.
    * 依赖空间比 yarn 小，因为软硬链接.
    * 仅此而已，没别的了，没什么先进的，夸大其词.
    * 避免 幻影依赖

- Con
    - 不支持 全局包管理。没错，这点甚至不如 [[npm]]
    - 全局项目 聊胜于无，又不适合添加进 PATH

- Test
    - `Issues with peer dependencies found`
        - [peers 是如何被处理的 | pnpm](https://pnpm.io/zh/8.x/how-peers-are-resolved)
        - [javascript - pnpm peer dependencies auto-install - Stack Overflow](https://stackoverflow.com/questions/72468635/pnpm-peer-dependencies-auto-install)
        - [从pnpm工具了解整个npm包核心管理原理 | Qborfy知识库](https://qborfy.com/today/20230219.html)
        - [WARN  Issues with peer dependencies found，pnpm peer dependencies auto-install - 牛奔 - 博客园](https://www.cnblogs.com/niuben/p/16881087.html)
        - [pnpm 安装依赖 时修复Issues with peer dependencies found：如何修复“Issues - 掘金](https://juejin.cn/post/7241014307705618493)
        - [由 pnpm 处理 peerDependencies 的机制导致的 nestjs 依赖重复问题使用 pnpm works - 掘金](https://juejin.cn/post/7147349974055911432)
        - [pnpm does not warn about issues with peer dependencies if the lockfile is up to date · Issue #7087 · pnpm/pnpm](https://github.com/pnpm/pnpm/issues/7087)
        - 简单来说，[[pnpm]] 支持同一个包的多版本共存，每个包都能拿到 `package.json` 声明的特定版本的依赖。除了 `peerDependencies`
        - 如果不同包的 `peerDependencies` 指向了同一个包的不同版本，[[pnpm]] 只会安装声明中的最高的那个版本，然后所有包共享同一个版本
        - E.g.
            - `pkg01` 的 `peerDependencies` 要求 `rollup@2`
            - `pkg02` 的 `peerDependencies` 要求 `rollup@3`
            - [[pnpm]] 只会安装 `roolup@3`
            - `pkg01` `pkg02` 共享 `roolup@3`
            - 这种情况 [[pnpm]] 日志会有警告（warn），因为 `pkg01` 没拿到想要的版本的依赖
        - 为了解决该问题，我们需要让 [[pnpm]] 安装所有需要版本的 `peersDependencies`
            - `pnpm config set --location project auto-install-peers true`
            - 或手动 `.npmrc` -> `auto-install-peers = true`
            - ……好像并没有用，查了下文档，`auto-install-peers` 默认值就是 `true`
