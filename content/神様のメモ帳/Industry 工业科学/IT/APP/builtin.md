---
tags:
    - Label/Industry-工业科学/IT/APP/Command/ShellBuiltin
    - flag/APP/Shell
---

## builtin

[execline: a small scripting language](https://skarnet.org/software/execline/)

[skarnet/execline: The execline scripting language](https://github.com/skarnet/execline)

[lukaszlach/commando: Container registry which provides you all the commands you need in a lightweight Alpine image. DevOps and SysOps best friend. https://command-not-found.com](https://github.com/lukaszlach/commando)


```bash
builtin shell built-in
Description:
    * builtin 用于调用 shell 内置命令（shell builtin）.
    * shell builtin 只存在于 bash，换其他 shell 可能就没法用了.
    * execline 软件包提供了许多与 shell builtin 同名的二进制可执行文件.
    * shell builtin 优先级高于 command，因此不必担心 execline 有副作用

Usage:
    builtin --help
    builtin <shell-builtin> [args]
        * args 会被直接传递给 shell-builtin.



```