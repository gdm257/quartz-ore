---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/C
  - flag/LANGUAGE/CPP
  - flag/APP/DevOps/PackageManagement
github: xmake-io/xmake
scoop: xmake
commands:
  - xrepo
---

- References
    - [xrepo](https://xrepo.xmake.io)

- Fundamentals
    - [[xrepo]] 本质是 [[xmake]] 命令的封装

- Ecosystem
    - [xmake-io/xmake-repo: 📦 An official xmake package repository](https://github.com/xmake-io/xmake-repo)
    - [vcpkg packages](https://vcpkg.io/en/packages)

- Alternatives
    - [[xmake|`xmake require`]]
    - [[vcpkg]]

- Examples
    - `xrepo install tbox` install [[tbox]] package
    - `xrepo env --list`
    - `xrepo env shell`
    - `xrepo env quit`

- Objects
    - repo
        - `repo` == 包含了许多 packges 的 [[git]] 仓库
        - `repo` == [[scoop]] 的 bucket
        - `repo` 的每个包 都由 `xmake.lua` 定义如何安装，就像 [[scoop]] 的 app 是由 `.json` 来定义如何安装

- Configuration
    - `xmake.lua` 声明依赖
        - 对标 [[pdm]] 在 `pyproject.toml` 里声明依赖
    - [[xrepo]] 安装依赖
        - 指定 [[Build Backend]]
            - `--toolchain=<TOOLCHAIN>`
            - `--toolchain=mingw`
            - `toolchain` i.e. [[Build Backend]]
        - Windows 默认安装路径
            - `$env:LOCALAPPDATA/.xmake/packages/包名首字母小写/包名/v版本/哈希值/`
            - `$env:LOCALAPPDATA\.xmake\packages\z\zlib\v1.2.13\8c88f1ec2a0e4a8cacfa186369eaa744\lib\zlib.lib`
        - 可以看出，这些依赖算是 xmake 全局依赖，只有 [[xmake]] [[xrepo]] 能使用（当然，如果你肯手动指定依赖路径，也可以给别的 build frontend 使用，例如 [[make]] [[cmake]]）
    - lock 依赖
        - [[xmake]] 貌似并没有严格的 lock 机制，至少没有 lock file，只能通过指定版本号来保证兼容性
    - 导入依赖
        - [[xmake]] 在构建时，会自动导入 `xmake.lua` 里声明的依赖，简单来说就是自动指定依赖的安装路径，无需关心
