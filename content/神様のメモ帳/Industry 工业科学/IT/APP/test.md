---
aliases:
- test
- test command
tags:
- Label/Industry-工业科学/IT/APP/Command/ShellBuiltin
- flag/Platform/Linux独占
- flag/APP/Shell
---

<iframe src="https://wangdoc.com/bash/condition#判断表达式" allow="fullscreen" allowfullscreen="" style="height: 100%; width: 100%; aspect-ratio: 4 / 3;"></iframe>

- Installation
    - shell built-in

- Configuration
    - 

- Data
    - 

- Usage
    - CLI

- Idea
    - 

- Fundamentals
    - 封装常用判断为 CLI 的参数

- Philosophy
    - 

- Description
    - `[]` 是 [[test|test command]] 的语法糖
    - `[[]]` 本质并不是 test command，而是一种 Expansion，这意味着你需要注意解析顺序
    - `[[]]` 兼容 `test` 命令，所以你可以简单理解为增强版 `test`
    - `[[]]` 算是一种非常特殊的 callable
    - 使用否定操作符 `!` 时，最好用圆括号确定转义的范围 E.g. `if [ ! \( $INT -ge $MIN_VAL -a $INT -le $MAX_VAL \) ]; then ...; fi`

```bash
test command
Usage:
    test args
    [ args ]
    [[ args ]]

Description:
    * [] 是 test 的语法糖.
    * [[]] 是对 [] 的功能扩充，但老版本的bash或精简版bash可能不支持.

Options:
    -f
    -z
    -r
    -gt
    -lt

```
