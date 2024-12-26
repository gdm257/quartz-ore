---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/UserGroup
---

## chsh

FreeBSD 的默认 shell 并不是由 /etc/passwd 决定的，而是必须使用 chsh 命令指定。当 chsh 设置了一个无效的 shell，用户将无法登陆，即便 /etc/passwd 指定了正确的路径。于是，root 再也登不上去了。加上其他用户没有 sudo，这系统直接就废了。还好发现的早，没有重要数据，不然心态崩了