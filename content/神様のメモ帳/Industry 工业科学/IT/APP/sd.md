---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text/Implement__/TextProcessor/Replace
scoop: sd
commands:
  - sd
---

- Description
    - sd 是 [[sed]] 替代品
    - sd 用于文本替换

- Con
    - 非常离谱，双引号需要转义！

```bash
sd command
Examples:
    sd '^(.+)$' '$1' < a.txt    相当于 sed 's/^\(.\+\)$/\1/' < a.txt
    sd 'abc' 'bbc' file -p    相当于 sed 's/abc/bbc/' file
    sd 'abc' 'bbc' file    直接修改文件，相当于 sed -i
    sd '(?P<name>abc)' '${name}' < f.txt    命名分组

Usage:
    sd [options] <pattern> <repl> <files>
    sd <pattern> <repl> < files

Options:
    -p --preview    Output result into stdout and do not modify files
    -f --flags <flags>
        i     case-insensitive
        m     multi-line mode: ^ and $ match begin/end of line
        s     allow . to match \n
        U     swap the meaning of x* and x*?
        u     Unicode support (enabled by default)
        x     ignore whitespace and allow line comments starting with #
    -s --string-mode    精准匹配模式

```
