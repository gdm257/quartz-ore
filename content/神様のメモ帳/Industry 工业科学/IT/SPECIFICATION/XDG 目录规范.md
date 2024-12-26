---
aliases:
- XDG Base Directory Specification
tags:
- Label/Article/Industry-工业科学/IT/APP/OS/Linux
---

[XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)

[Linux 整理魔法：整理 Linux 家目录 - 双猫CC](https://catcat.cc/post/wn3np/)


XDG 目录规范主要是针对「用户级」的，而 FHS 规范主要是针对「系统级」「全局」的，二者并不冲突。

FHS 则是规定了「系统配置」「系统依赖」「系统软件」应该放在哪，换句话说，FHS 告诉你「根目录应该有哪些文件夹，各个文件夹应该是做什么的」。

XDG 可以充分隔离「系统配置」与「用户配置」，具体地说，XDG 规劝所有软件「自动分级读取配置，全局配置、用户配置、当前配置，优先级越来越高，高优先级覆盖低优先级。至于这几种配置的默认位置，请大家读取 `XDG_xxxxx` 环境变量」。换句话说，`XDG_xxx` 环境变量类似 Windows 的 `%APPDATA%` `%TEMP%` 环境变量。
