---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
---

[dashingsoft/pyarmor: A tool used to obfuscate python scripts, bind obfuscated scripts to fixed machine or expire obfuscated scripts.](https://github.com/dashingsoft/pyarmor)

[使用PyArmor保护Python代码 | Escape](https://www.escapelife.site/posts/c2c0a0fd.html)


```bash
pyarmor command
Usage:
    pyarmor [options] <subcommand> [args]

Examples:
    pyarmor o main.py
    pyarmor p main.py

Subcommands:
    help
    o obfuscate    生成混淆代码 Too big code object, the limitation is 32768 bytes in trial version
    p pack    调用 pyinsaller 进行打包
    l licenses
    i init
    c config
    b build
    hdinfo

Options:
    -h --help
    version

Installation:
    pip install pyarmor

Desciption:
    * 免费版，任意 .py 文件最大不能超过 32 KB，否则无法混淆或打包.
    * 32 KB 太小了，随便找了几个开源项目都无法混淆，我写的 yidm 也不行.

```
