---
tags:
- Label/Industry-工业科学/IT/APP/Command/TUI
- flag/APP/File/CRUD/Read
---

```bash
fzf command
Usage:
    [... | ] fzf [options] [> file]
    [... | ] fzf [options] [| <cli>]

Examples:
    cat $(fzf)
    cat $(fd json -t f | fzf)
    fd -t d -t f | fzf

Options:
    -f --filter <pattern>    过滤，非交互
    -1 --select-1    自动选择第一个，非交互
    -0 --exit-0    如果列表为空则立即退出
    -m    多选模式 Tab & Shift Tab
    -e --exact    精准匹配
    --height 75%    占终端窗口的高度
    --border    显示边框
    --print0    打印时以 \0 为分隔符
    --read0    解析为列表时以 \0 为分隔符

Search:
    abc    模糊匹配
    'abc    '精准匹配
    !abc    反选精准匹配
    ^abc    正则^
    abc$    正则$
    !^abc    反选^
    !abc$    反选$
    go$ | rb$ | py$    正则(go$|rb$|py$)

Description:
    fzfの核心: 列出 - 选择 - 打印.
    执行 `fzf` 进入交互式环境，浏览文件列表，选择文件后回车，会打印选择文件.
    列出: 如果有 STDIN E.g. 管道、重定向，那么直接将 STDIN 解析为列表（默认分隔符为换行符，--read0 指定分隔符 \0）；如果没有 STDIN，那么将默认命令 `find` 的执行的输出 STDOUT 作为 fzf 的输入，之后同理.
    选择: 默认为交互式，-m 配合 Tab 多选，--filter 为非交互式多选.
    打印: 默认换行符为分隔符，--print0 改为 \0.

```