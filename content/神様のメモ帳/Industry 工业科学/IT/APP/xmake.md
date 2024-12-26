---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/C
  - flag/LANGUAGE/CPP
  - flag/APP/DevOps/PackageManagement
frontmatter-as-page:
  - xmake
github: xmake-io/xmake
scoop: xmake
brew: xmake
commands:
  - xmake
---

## Brief

- References
    - [xmake](https://xmake.io)
    - [xmake vs cmake对比分析](https://tboox.org/cn/2019/05/29/xmake-vs-cmake/)
    - [介绍 - xmake](https://xmake.io/#/zh-cn/about/introduction)
    - [配置说明 - xmake](https://xmake.io/#/zh-cn/guide/configuration)
    - [xmake 博客](https://tboox.org/cn/category/#xmake)

- Ecosystem
    - [xmake-examples/awesome-xmake: 💕 A curated list of awesome XMake projects, plugins, examples and others](https://github.com/xmake-examples/awesome-xmake)

- Alternatives
    - [[make]]
    - [[cmake]]
    - [[xrepo]] vs `xmake require`

- Installation
    - Windows
        * `scoop install xmake`
    - Linux
        * `bash <(curl -fsSL https://xmake.io/shget.text)`

- Description
    * xmake 作用跟 make/cmake 一样，编译整个项目.
    * xmake 不依赖于 make/cmake.
    * xmake 不依赖于 Makefile/CMakeLists.txt.
    * xmake 只需要 xmake.lua 和一个 backend (gcc/clang) 就能完成编译.
    * xmake 安装依赖不污染全局环境，做法类似 node_modules.
    * xmake 不兼容 Makefile/CMakeLists.txt.
    * xmake 可以调用 make/cmake 从而兼容已有 Makefile/CMakeLists.txt.
    * xmake 给新项目、中小项目用用挺好的，大项目不可避免 cmake.
    * xmake 命令易用性完爆 make/cmake，但功能、生态远不如 cmake.
    * xmake 命令并不复杂，重要的是 xmake.lua.
    * xmake.lua 是编译配置，相当于 Makefile.
    * xmake.lua 是核心所在，自定义全靠该配置.
    * xmake.lua 易用性完爆 Makefile/CMakeLists.txt.

## Configuration

- Configuration
    - `$Env:LOCALAPPDATA/.xmake/`
        - `xmake.conf`
        - `repositories/`
    - `xmake.lua`

## CLI

```bash
xmake command
Usage:
    xmake <subcommand> [options] [args]

Examples:
    xmake update master
    xmake update dev
    xmake show -l toolchains    查看支持的工具链
    xmake global    查看全局xmake配置
    xmake global --mingw="$(scoop prefix mingw | tr '\\\\' '/')"
    xmake create --project "demo"
    cd demo
    xmake build
    xmake run
    xmake install
    xmake clean

Subcommands:
    update    更新xmake
    g global [option=value]...    批量修改全局xmake配置
    create
        -l --language {c,c++,...}
    f config <args>
        --export=<file>
        --import=<file>
        --menu
    f config <option=value>...    批量修改项目xmake配置
        -p --plat="auto"
        -a --arch="auto"
        --mingw=<mingw-sdk-dir>
        --sdk=<sdk-dir>
        --bin=<toolchain-bin-dir>
        --cc="gcc"
        --cxx="g++"
    b build    编译（默认命令）
        --dry-run
    r run    运行生成的可执行文件
    i install    安装到指定目录
    u uninstall    卸载
    c clean
    p package    Package target
    show
        -t --target=<target>    Show specific project information
        -l --list={toolchains,platforms,architectures,envs,...}

Options:
    -h --help
    --version
    -q --quiet
    -v --verbose
    -D --diagnosis    Print lots of diagnosis information
    -y --yes
    --confirm {yes,no,def}
    -p --project "./"    Change project directory
    -F --file "xmake.lua"
```
