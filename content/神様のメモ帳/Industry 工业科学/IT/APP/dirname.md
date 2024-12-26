---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Read
---

```bash
dirname command
Usage:
    dirname [options] <path>...

Description:
    * 打印指定文件的父目录（无论文件是否存在），每个文件一行

Examples:
    dirname main.py    # .
    dirname ./main.py    # .
    dirname foo/bar/    # foo
    dirname foo/bar     # foo
    dirname a/b/c    # a/b
    dirname /a/b/c    # /a/b
    dirname a/a1    a/a2    b/b1    b/b2    c/
    # a
    # a
    # b
    # b
    # .
    dirname .    # .
    dirname //    # /

```