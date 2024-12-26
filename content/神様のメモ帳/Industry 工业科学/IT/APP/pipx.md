---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackageManagement
commands:
  - pipx
pip: pipx
---

- References
    - [How pipx works - pipx](https://pypa.github.io/pipx/how-pipx-works/)

- Environments
    - PIPX_HOME
        * `~/.local/pipx`
    - PIPX_BIN_DIR
        * `~/.local/bin`
    - PIPX_DEFAULT_PYTHON
        * `python`
        * 我发现有更好的办法，不需要改环境变量，`${PIPX_HOME}/shared/pyvenv.cfg`
            - `home = d:\portable\scoop\apps\python37\current`
            - `include-system-site-packages = false`
            - `version = 3.7.9`

- Data
    - Pakcages
        - `pipx list --json > pipx.json`
        - `pipx install-all pipx.json`

- Description
    - pipenv == python 版 docker
    - pipx == python 版 flatpak/docker
    - flatpak == linux 版 portabal apps
    - pipenv 安装的包在全局无法使用
    - pipx 更多是想在全局安装**CLI/GUI**工具，类似 apt/flatpak
    - pipx 安装的每个应用都拥有独立的虚拟环境，类似 flatpak 的沙盒
    - pipx 只能部分替代 pip
    - pipx 无法安装 library (e.g. requests)
    - pipx 只能安装带有二进制可执行文件の python 应用（e.g. pyinstaller）
    - pipx 将每个应用的 exe 链接到公共 bin 目录，默认是 ~/.local/bin，可使用环境变量 PIPX_BIN_DIR 进行更改


```bash
pipx command
Usage:
    pipx <subcommand> [args]

Options:
    -h --help
    --version

Subcommands:
    environment
        * 查看虚拟环境保存位置.

    install <package> [options]
        --python /bin/to/python
        --suffix /path/to/SUFFIX
        -f --force
        --include-deps
            * 将依赖的可执行文件添加进 bin 目录，默认不添加.
        -e --editable
            * 默认不可编辑.
        --verbose
    inject <package> [dependences]
        * 向已安装的 package 虚拟环境追加安装其他依赖.
        * 相当于 pipx runpip <package> [dependences]
    upgrade
    upgrade-all
    reinstall
    reinstall-all
    uninstall
    uninstall-all
    runpip [--verbose] <package> <pip_args>
        * 相当于 pdm run pip.
        * 在 package 虚拟环境里运行 pip.
    run
        * 一次性运行指定 package.
        * 支持 PEP 582.
    list
        * 相当于 scoop list.
    ensurepath -f
        * 相当于 scoop reset.



// 使用
pipx install rdbtools  #安装 rdbtools
--python /path/to/python.exe  #must python 3.6+
--include-deps  #安装 jupyter etc 有很多依赖的软件时会用到


pipx upgrade rdbtools
pipx uninstall rdbtools
pipx list
pipx inject rdbtools python-lzf  #Installs packages to an existing pipx-managed virtual environment.


pipx run rdbtools arg01 arg02 ...
有时，你可能希望运行特定的 Python 程序，但并不实际安装它。

```
