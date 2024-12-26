---
tags:
- flag/LANGUAGE/JS
- flag/LANGUAGE/TypeScript
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
---

[从 nvm 迁移到 nvs | Unknown Me](https://ukn.me/cong-nvm-qian-yi-dao-nvs.html)

[NVS —— js 实现的node版本管理工具 - 掘金](https://juejin.cn/post/6961679951925870623)

[nvs使用的注意事项 | 个人博客 | 一个coder的成长记录](https://betgar.github.io/2019/06/06/nvs-usage-considerations/)

- Test
    - Windows 推荐 [[nvm]]
    - Linux 推荐 [[nvs]]


```bash
nvs command
Examples:
    nvs ls-remote
    nvs add node/lts    # 下载 lts 版本的 Node.js
    nvs menu    # 交互式 add
    nvs    # 交互式 add
    nvs rm lts
    nvs ls
    nvs alias node19 19.4.0
    nvs migrate lts 17
    # 运行
    nvs run lts cli.js --help
    nvs exec lts ls -l
    nvs exec lts npm list

Installation:
    * Linux
        export NVS_HOME="$HOME/.nvs"
        git clone https://github.com/jasongin/nvs "$NVS_HOME"
        source "$NVS_HOME/nvs.sh" install
        #安装，追加 source 到 ~/.bashrc, ~/.profile, or ~/.zshrc
        # source nvs.sh 用于:
        # 定义 nvs 函数
        # PATH += ~/.nvs/default/bin
        # 或者你可以手动安装
        echo '''export NVS_HOME="$HOME/.nvs"; [ -s "$NVS_HOME/nvs" ] && . "$NVS_HOME/nvs"''' >> ~/.bashrc
    * Windows
        - scoop install -g nvs
        - 不推荐在 Windows 平台使用.
        - PS/cmd ONLY.

Subcommands:
    ls-remote
    add node/<version>
    menu
    ls
    alias <alias> <version>    版本别名
    use <version>
        - PATH -= ~/.nvs/default/bin
        - PATH += ~/.nvs/node/x.x.x/x64/bin
    rm <version>
    link <version>    设置默认 node 版本
        - ~/.nvs/default -> ~/.nvs/node/x.x.x/x64
    unlink <version>
        - PATH -= ~/.nvs/default/bin
    which <version>    full path of node command
    migrate <version-a> <version-b>
        - 迁移全局的 node_modules (from a to b)
    nvs auto off
    nvs auto on
        # cd 或 pushd 时，
        # 会自动读取 cwd 及上N级目录下的 .node-version or .nvmrc，
        # 然后自动 nvs use 到文件里指定的版本
        # 不支持 cmd.exe
    run <version> <js-file> <args>
    exec <version> <command> <args>

Description:
    * nvs use <version> 原理是每次将**不同的**路径（取决于 version）添加进 PATH.
    * nvs 不固定的 PATH，针对不同 shell 需要不同的 .bashrc，这致使 nvs 难以在 windows 工作，我也不推荐这么做，windows 上请用 nvm，它的原理更适合在 windows 是使用，nvs 更适合命令行友好的 *nix.

```
