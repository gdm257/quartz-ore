---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Read
---

```bash
fd command
Usage:
    fd [options] <pattern> <path>

Examples:
    fd -d 1 '.' ./    相当于 ls，但是每个一行

Options:
    -h    Short help
    --help    Full help
    -d --max-depth 1     深度。默认为 none 无限递归；1 为本层即 ls -l
    -g --glob    glob search，默认为正则
    -p --full-path    Search full abs. path (default: filename only)
    -t --type {f,d,l,x,e,s,p}
        (f) file
        (d) directory
        (l) symlink
        (p) pipe
        (s) socket
        (e) empty
        (x) executable
    -a --absolute-path    Show absolute instead of relative paths

Description:
    fd == find + grep

```