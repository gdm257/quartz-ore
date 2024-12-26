---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/PackingTool/MachineCodePackingTool
pip: nuitka
---

[Nuitka User Manual — Nuitka the Python Compiler documentation](https://nuitka.net/doc/user-manual.html)

[Nuitka之乾坤大挪移-让天下的Python都可以打包 - 知乎](https://zhuanlan.zhihu.com/p/137785388)

[一行代码的Python加密和&加速-nuitka打包pyd技巧谈 - 知乎](https://zhuanlan.zhihu.com/p/146181540)

[Nuitka打包pyd-平平无奇之太祖长拳 - 知乎](https://zhuanlan.zhihu.com/p/358733170)

[AtrributeError: type object 'type' has no attribute '__signature__' in modeuls PySide2 · Issue #746 · Nuitka/Nuitka](https://github.com/Nuitka/Nuitka/issues/746)

[mahmoud/awesome-python-applications: 💿 Free software that works great, and also happens to be open-source Python.](https://github.com/mahmoud/awesome-python-applications)

[Nuitka打包exe之天山折梅手 CAM-CAD界的PythonOOC缚擒记 - 知乎](https://zhuanlan.zhihu.com/p/305685374)

[Python打包exe的王炸-Nuitka - 知乎](https://zhuanlan.zhihu.com/p/133303836)

[python的打包神器——Nuitka](https://www.lixiaofei2yy.website/python%E7%9A%84%E6%89%93%E5%8C%85%E7%A5%9E%E5%99%A8nuitka)

[Relative import · Issue #869 · Nuitka/Nuitka](https://github.com/Nuitka/Nuitka/issues/869)

- Idea
    - nuitka 对标 [[pyinstaller]]

- Usage
    - `python -m nuitka` 来运行 nuitka，以锁定 python 解释器

- Fundamentals
    - nuitka 将 Python 程序编译为 C/C++，从而加速与反破解
    - 如果不带 `--standalone` 或 `--onefile`，nuitka 就只编译，不打包，相当于 [[setuptools]]

- Pro
    - nuitka 的打包的可执行文件速度比 pyinstaller 快不少

- Con
    - 编译速度非常慢，半小时起步
    - 对 C 扩展支持较差，给 [[PyQt5]] 打了不知多少补丁了
    - ~~不支持 relative import（能打包但运行会报错）。包括 `from . import xxx` `from ..A import B`（运行报错 `ImportError: attempted relative import with no known parent package`）、`import foo` 但是 foo 不能在 PYTHONPATH 里找到（运行报错 `ModuleNotFoundError: No module named 'foo'`）。这意味着，只有像 flexget 这种规范的项目打包后才能成功运行，一旦使用 relative import，那基本上就与二进制可执行文件无缘了.~~
    - 我仔细看了看 nuitka 的 issues，问题真的多，nuitka 不支持很多很多第三方库，而且是运行时才报错，这是个天坑。例如官方为了兼容 PySide2，不断特殊处理，上插件，打补丁，工作量一看就很大，还只对商业版提供，当然开源版也享受了部分成果

- Test
    - [[nuitka]] 看着由雅，用着难受，我选 [[pyinstaller]]
    - nuitka 对 PySide2 支持很差，我复现了个几年前的 issue，还没修好.
    - 有成功率这么一说，相同的命令，这次不行，下次又行了，玄学
    * 没必要 nonfollow import，太丑陋了，而且违反 DRY，慢就慢点吧.
    * nonfollow import 方案有个致命缺点，无法检测出局部导入，导致打包出来的 dist 其实是不完整的，而且运行到那行代码才会报错 `ModuleNotFoundError: No module named 'xxx'`。这要求所有 import 都必须是全局导入（包括第三方库、你写的模块），并且最好写在每个文件的开头.


## CLI

```bash
nuitka command
Usage:
    python -m nuitka [options] <module-or-pkg>

Options:
    # 帮助
    -h --help
    --version

    # 常用
    --run    编译并运行
    --module    编译为模块，而不是程序
    --standalone    内嵌 Python 解释器，方便在其他机器运行
    --onefile    打包为单文件，而不是文件夹
    --mingw64    C Compiler 使用 MinGW64
    --windows-disable-console    运行 exe 无弹窗（请只于 GUI 程序）
    --windows-icon-from-ico "./logo.ico"
    --output-dir="./"
    --output-filename="<program_name>"    只适用于 --onefile
    --report="dist/nuitka-report.xml"
    --show-memory --show-progress    展示整个安装的进度过程
    --main="<PATH>"    可指定多次

    # 资源文件
    --include-package-data="<package>[:<file-glob-pattern>]"
        * 可多次指定.
        * 自动把指定文件复制进 xxx.dist/<pakage> 文件夹，
          可通过 sys.argv[0] 或 __file__ 或 cwd 读取文件.
        * 如果 --onefile，则是将文件内嵌进单可执行文件，
          运行时自解压进 %TEMP%/ONEFIL~N/<package>，
          可通过 __file__ 读取资源文件，
          一定不能通过 cwd 读取.
        * pattern 的相对路径是相对于 package 文件夹.
    --include-data-files="<glob-pattern>=<dst-folder>"
        * 可多次指定.
        * 自动把指定文件复制进 xxx.dist/<dst-folder>，
          可通过 sys.argv[0] 或 __file__ 或 cwd 读取文件.
        * 如果 --onefile，则是将文件内嵌进单可执行文件，
          运行时自解压进 %TEMP%/ONEFIL~N/<dst-folder>，
          可通过 __file__ 读取资源文件，
          一定不能通过 cwd 读取.
        * pattern 的相对路径是相对于 cwd.
    --include-data-dir="<dir>=<dst-folder>"
        * 可多次指定.
        * 自动把指定文件夹复制、重命名为 xxx.dist/<dst-folder>，
          可通过 sys.argv[0] 或 __file__ 或 cwd 读取文件.
        * 如果 --onefile，则是将文件内嵌进单可执行文件，
          运行时自解压进 %TEMP%/ONEFIL~N/<dst-folder>，
          可通过 __file__ 读取资源文件，
          一定不能通过 cwd 读取.
        * dir 的相对路径是相对于 cwd.
    --noinclude-data-files="<glob-pattern>"
        * 可多次指定.
        * 取消资源文件的导入.
        * pattern 的相对路径是相对于 cwd.

    # 插件
    --plugin-list    查看可用的插件
    --enable-plugin=<plugin>,<plugin>,...
        pyside2,
        multiprocessing,

    # 控制要编译哪些模块
    --follow-stdlib
    --follow-imports
    --nofollow-import-to=MODULE/PACKAGE    可多次指定
    --nofollow-imports    已失效，请用 --nofollow-import-to
    --follow-import-to=MODULE/PACKAGE    可多次指定

```

## Snippets

```python
pdm add --dev nuitka
~~pdm add --dev ordered-set zstandard~~ 已自带
pdm use
pdm lock
pdm install
pdm run python -m nuitka <args>    之后简写为 nuitka <args>
nuitka --plugin-list    查看支持的插件
mkdir dist

# 通用模板
pdm run python -m nuitka  \
    --onefile  \
    --standalone  \
    --mingw64  \
    --output-dir="dist"  \
    --report="dist/nuitka-report.xml"  \
    <module-or-package>  \
    --output-filename="<name>.exe"  \
    --include-package-data="<package>[:<file-glob-pattern>]"  \
    --show-memory --show-progress  \
    --enable-plugin="<plugin>,<plugin>,..."  \
    # nonfollow 一般没必要
    --follow-stdlib  \
    --follow-imports  \
    --nofollow-import-to=email  \
    --nofollow-import-to=yaml  \
    --nofollow-import-to=fire  \
    --nofollow-import-to=loguru  \
    --nofollow-import-to=tenacity  \
    --nofollow-import-to=PySide2  \
    --nofollow-import-to=httpx  \
    --nofollow-import-to=simple-parsing  \

# yidm
pdm run python -m nuitka  \
    --onefile  \
    --standalone  \
    --mingw64  \
    --output-dir="dist"  \
    --report="dist/nuitka-report.xml"  \
    yidm.py  \
    --output-filename="yidm.exe"  \
    --enable-plugin="pyside2"  \    报错，不知为何
    --show-memory --show-progress  \

# gita (--include-package-data)
改源码，将相对导入改写为绝对导入
pdm run python -m nuitka  \
    --onefile  \
    --standalone  \
    --mingw64  \
    --output-dir="dist"  \
    --report="dist/nuitka-report.xml"  \
    gita  \
    --output-filename="gita.exe"  \
    --include-package-data="gita:*.json"  \
    --show-memory --show-progress  \

# gita (--include-data-files)
改源码，将相对导入改写为绝对导入
pdm run python -m nuitka  \
    --onefile  \
    --standalone  \
    --mingw64  \
    --output-dir="dist"  \
    --report="dist/nuitka-report.xml"  \
    gita  \
    --output-filename="dist/gita.exe"  \
    --include-data-files="gita/*.json=gita/"  \
    --show-memory --show-progress  \


```
