---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/Platform/Windows独占
- flag/License/MIT
- flag/APP/Layer
---

- Installation
    - `scoop install lxrunoffline`

```bash
lxrunoffline command
Usage:
    lxrunoffline <command> [args]

Examples:
    lxrunoffline set-uid -n ubuntu -v 1000 # set UID of default user

Commands:
    move
    duplicate
    unregister
    register
    get-dir
    export-config -n <distro> [-f <output-xml-file>]
    import-config
    summary -n <distro>
    get-kernelcmd -n <distro>
    set-kernelcmd
    get-flags -n <distro>
    set-flags
    get-env -n <distro>
    set-env
    add-env
    remove-env
    get-uid -n <distro>
    set-uid -n <distro> -v <uid>


lxrunoffline i -n lanraragi -d 'D:/Portable/WSL/lanraragi' -f 'D:/Portable/WSL/lanraragi-0.7.9.tar'
lxrunoffline i -n <WSL名称> -d <安装路径> -f <安装包路径>.tar.gz
list  #列出已安装发行版

lxrunoffline  #查看帮助
lxrunoffline run -h  #查看 run 命令帮助

```
