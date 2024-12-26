---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/TypeScript
  - flag/APP/DevOps/PackageManagement
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
  - flag/APP/DevOps/Scaffold_Boilerplate
files:
  - package.json
  - yarn.lock
  - .bandit
commands:
  - yarn
---

- Configuration
    - `package.json`
        - `resolutions`

```bash
yarn command
Usage:
    yarn <command> [args]

Examples:
    yarn config set registry https://registry.npm.taobao.org/
    yarn config set registry https://registry.npmjs.org/
    yarn config set proxy "http://127.0.0.1:7890"
    yarn config set https-proxy "http://127.0.0.1:7890"
    yarn config delete proxy
    yarn config delete https-proxy
    yarn init
    yarn add pxder
    yarn add --dev webpack webpack-cli
    yarn remove pxder
    yarn install
    yarn list
    yarn exec ls -l

Subcommands:
    help
    version
    init    创建 package.json
    add    添加依赖（修改 package.json）
        --dev    添加到开发依赖组
    upgrade    更新依赖（修改 package.json）
    remove    移除依赖（修改 package.json）
    list    列出依赖
    install    安装依赖，生成项目的 node_modules
    why <pkg>    为什么这个依赖会被安装
    run    运行 package.json 定义的 script 命令
    exec <command> [args]    执行 cli 命令
    autoclean
    clean cache
    global <subcommand> [args]    管理全局 node_modules
        add <pkgs>
        remove
        list
        upgrade

Installation:
    * Windows
        - scoop install -g yarn
    * node
        - npm i -g borepack # if node < 16.10
        - corepack enable # 即可

Description:
    * yarn == node_moudules 管理器 + runner + packer + publisher
    * yarn 可独立安装，不依赖 node.js
    * yarn 可以管理 node 的 node_moudules.
    * yarn 可以管理项目的 node_moudules.
    * 环境变量 `NODE_PATH` 作为全局 node_modules 文件夹.
    * 每个项目应该使用独立的 node_modules.
    * 共享 node_modules 一般只用于切换全局 node 版本时保留安装的 cli.
    * Linux 不方便共用 node_modules，因为 yarn 很难独立于 node 之外.
    * 虽然可以通过修改 ~/.npmrc 的 prefix 来共用，但不推荐.
    * Linux 的 yarn global add 安装 GUI/CLI 到 /usr/local/bin

```


参考

[Binutils - GNU Project - Free Software Foundation](https://www.gnu.org/software/binutils/)

[jaywcjlove/linux-command: Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。https://git.io/linux](https://github.com/jaywcjlove/linux-command)

[Linux 命令大全 | 菜鸟教程](https://www.runoob.com/linux/linux-command-manual.html)

[KALI LINUX 工具大全概览（长期更新中。。。） - GKLBB - 博客园](https://www.cnblogs.com/GKLBB/p/14317288.html)

[chiwent/awesome-linux-software-cn: Linux 优秀软件资源大全中文版：一些针对 Linux 发行版的非常棒的应用程序、实用工具以及其它相关材料。A curated list of awesome applications, softwares, tools and other materials for Linux distros.](https://github.com/chiwent/awesome-linux-software-cn)

[luong-komorebi/Awesome-Linux-Software: 🐧 A list of awesome Linux softwares](https://github.com/luong-komorebi/Awesome-Linux-Software)

[金步国作品集](http://www.jinbuguo.com/)

[鳥哥私房菜 - 基礎學習篇目錄 - for CentOS 7](https://linux.vbird.org/linux_basic/centos7/)

[鸟哥的Linux私房菜：基础学习篇 第四版 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/index.html)

[散尽浮华 - 博客园](https://www.cnblogs.com/kevingrace/)

[奇妙的 Linux 世界](https://www.hi-linux.com/)

[Debian -- 说明文档](https://www.debian.org/doc/index.zh-cn.html)

[UNIX 缩写习惯 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter04/30_unix.abbreviation.html)

[ibraheemdev/modern-unix: A collection of modern/faster/saner alternatives to common unix commands.](https://github.com/ibraheemdev/modern-unix)

[LINUX常用100条命令总结 | 好派笔记](https://www.haopython.com/home/790/)

[LINUX性能观察工具整理（全） | 好派笔记](https://www.haopython.com/baseyw/755/)

[LINUX&WINDOWS应急响应排查 | 好派笔记](https://www.haopython.com/baseyw/jichu/1068/)


《Linux内核设计的艺术：图解Linux操作系统架构设计与实现原理》

《UNIX环境高级编程》

[The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/index.html)

[中文翻译 — The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/translations/zh_CN/index.html)

[操作系统系列文章 | 骏马金龙](https://www.junmajinlong.com/os/index/)

[Linux系列文章 | 骏马金龙](https://www.junmajinlong.com/linux/index/)

[【系统架构师修炼之道】（12）：操作系统基础知识——操作系统的原理，类型和结构 - SegmentFault 思否](https://segmentfault.com/a/1190000003692840)

[sunym1993/flash-linux0.11-talk: 你管这破玩意叫操作系统源码 — 像小说一样品读 Linux 0.11 核心代码](https://github.com/sunym1993/flash-linux0.11-talk)

[The Linux Kernel documentation — The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/)

[HelloGitHub 编程语言排行榜](https://hellogithub.com/report/tiobe/)

[在笔记本上搭建高性价比的 Linux 学习环境：基础篇 - 苏洋博客](https://soulteary.com/2022/06/21/building-a-cost-effective-linux-learning-environment-on-a-laptop-the-basics.html)
