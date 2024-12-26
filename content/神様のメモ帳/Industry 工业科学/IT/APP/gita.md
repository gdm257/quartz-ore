---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## gita

[nosarthur/gita: Manage many git repos with sanity 从容管理多个git库](https://github.com/nosarthur/gita)


```bash
gita command
Usage:
    gita <subcommand> [args]
    gita <option>

Examples:
    gita clone https://github.com/nosarthur/gita    就是 git clone
    gita clone https://github.com/nosarthur/gita -C ./
    gita add ./gita
    gita add dir01 dir02 dir03
    gita ll
    gita ls | tr ' ' "\n"
    gita super fetch    fetch current branch of all repos
    gita super fetch --all    fetch all branch of all repos
    gita super repo01 repo02 repo03 fetch --all
    gita fetch gita    相当于 gita super fetch
    gita fetch dir01 dir02 dir03
    gita fetch    fetch all repos within gita

Options:
    -h
    -v

Subcommands:
    add <path>...
    clone <url>
    rm <repo>...
    clear
    ls [repo-name]
    ll
    group

Installation:
    pip install gita

Description:
    * 从容管理多个 git 仓库.
    * 配置存储在 ~/.config/gita

```