---
tags:
- Label/Article/APP
---

所谓 shell，可看作 System Call（系统调用）、系统函数的封装。

既然是封装，我为什么不使用各个语言的标准库呢？

问得好，因为 shell 是以 `bash.exe` 这种「可执行文件」的形式来调用 System Call，而各个语言的标准库必须「编写源代码、编译、执行」。shell 是轻量的、交互式的。你总不能为每一行命令都用 C 写个可执行文件吧。

shell 并不是调用 System Call 的唯一方式，另一种常见的方式就是各个语言的标准库，其实很多标准库就是对 System Call、系统函数库的封装，最经典的莫过于 C。
