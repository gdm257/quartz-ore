---
tags:
    - Label/Industry-工业科学/IT/APP/Command/ShellBuiltin
    - flag/APP/Text
---

```bash
echo command
Usage:
    echo options string

Options:
    -n    禁用 自动在末尾添加换行符
    -e    二次转义
          \\
          \a    alert (BEL)
          \b    backspace
          \c    produce no further ouput
          \e    escape
          \f    form feed
          \n    new line
          \r    carriage return
          \t    horizontal tab
          \v    vertical tab
          \0NNN    byte with ocatal value NNN (1-3 digits)
          \xHH    byte with hexadecimal value HH (1-2 digits)
          E.g. echo -n -e '\a' 会发出一声响铃
    -E    禁用 二次转义 (默认)


```