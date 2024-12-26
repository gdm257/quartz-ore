---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

```bash
grep command
Usage:
    grep [options] [--] <regexp_pattern> <files>
        1. 如果不指定 file(s) 则进入交互模式.

Options:
    -F --fixed-strings    精确匹配，不使用正则或通配符（fgrep）
    -G --basic-regexp    基础正则表达式（grep 默认）
    -E --extended-regexp    扩展正则表达式（egrep）
    -P --perl-regexp    Perl正则表达式
    -i --ignore-case    忽略大小写
    -Z    输出时用引号包裹带空格的行
    -l    只显示文件名
    -n    输出行号
    -v    匹配反选（过滤掉匹配的行）
    -v <str>    排除包含 str 的
        E.g. -v grep    通常配合 ps 命令使用

Description:
    grep 一般用于过滤文本.
    grep 正则默认启用了全局模式.
    grep 常用于打印文本文件（或标准输入）中的匹配的行至 stdout.
    ripgrep（rg 命令）是 grep 的一个代替品.
        1. 速度快
        2. 健全的默认值以及彩色的输出结果
        3. 默认使用 --extended-regexp

Settings:
    GREP_COLORS 环境变量    高亮字符串的匹配部分，并配合 flags:
        1. grep --color auto ...
        2. grep --color always ...

Examples:
    find ~ | grep rar
    rg -s artful /etc/*
    grep -s artful /etc/*
    grep -R artful /etc/* 递归
    grep -Ril artful /etc/*
    grep -Ril --include=\*.conf bash /etc/*
    grep -Ril --exclude=\*.conf bash /etc/*
    grep --exclude-dir=/etc/grub.d -Rwl artful /etc/*

```
