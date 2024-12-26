---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## tr

```bash
tr 命令用于替换或删除文件中的字符
# 高频用法
grep 'rar$' ~ | tr '\n' '\0' | xargs -0 echo

稍微复杂点的可以用 sed 的 s 命令
sed 's/<regexp-pattern>/<repl>/g'

```
