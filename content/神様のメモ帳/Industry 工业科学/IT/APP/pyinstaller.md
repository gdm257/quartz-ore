---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackingTool/MachineCodePackingTool
pip: pyinstaller
---

- Alternatives
    - [Replacing pyinstaller with 100 lines of code](https://tushar.lol/post/packaged/)

- References
    - [利用pyinstaller打包Python程序为一个可执行文件 · 零壹軒·笔记](https://note.qidong.name/2020/12/pyinstaller/)
    - [谈谈 Pyinstaller 的编译和反编译 - 江风引雨の小po站](https://blog.luzy.top/posts/3136266189/)
    - [WithSecureLabs/python-exe-unpacker: A helper script for unpacking and decompiling EXEs compiled from python code.](https://github.com/WithSecureLabs/python-exe-unpacker)
    - [pyinstaller踩坑记，缺少依赖、打包错误或运行无效排查过程备忘 - 知乎](https://zhuanlan.zhihu.com/p/354609842)

- Installation
    - `pip install pyinstaller`
    - `pip install pycrypto`
        - 可选，支持 `--key` 加密功能

- Description
    * python 官方称 pyinstaller 这类工具为「冻结（frozen）」工具.
    * pyinstaller 将模块打包为二进制可执行文件.
    * pyinstaller 原理是打包整个 Python 环境：解释器、源码、依赖.
    * pyinstaller 缺点是打包速度慢、输出体积超大、启动速度慢.
    * pyinstaller 命令行能做到的，.spec 都能做到（因为会生成 .spec）.
    * .spec 能做到的，命令行可能做不到？
    * .spec 缺乏兼容性、规范性、可读性，根本不敢动.
    * .spec 我个人不推荐使用，尽量用命令行解决.
    * .spec 要用也只用命令行生成的，不要手动改.

- Test
    * `TypeError: __init__() got an unexpected keyword argument 'hooksconfig'`
        * Docker 镜像里的 pyinstaller 版本为 3.6
        * pyinstaller 3.6 不支持高版本 .spec 的 hooksconfig 参数.
        * 解决方法一：把 .spec 文件里的 hooksconfig 删了
        * 解决方法二：使用同版本 pyinstaller i.e. 3.6 生成 .spec 文件.
    - 路径问题
        - [Deal with file search on Pyinstaller frozen programs · Issue #902 · dynaconf/dynaconf](https://github.com/dynaconf/dynaconf/issues/902)
        - `__name__`: 没区别
        - `__file__`: 能用
        - `logger.debug(os.path.dirname(os.path.abspath(inspect.stack()[-1].filename)))`
    - Include
        - pyinstaller 默认只会 include 入口文件所需模块（递归），不会包含资源文件或未导入的模块

- Con
    - frozen 兼容性差
        - 很多第三方库需要打补丁
        - 所有 frozen tool 都有这个问题，都需要打补丁，pyinstaller 反而是处理得最好的
        - [build - Pyinstaller with PIL. ImportError: cannot import name _imaging - Stack Overflow](https://stackoverflow.com/questions/32760048/pyinstaller-with-pil-importerror-cannot-import-name-imaging)

```bash
pyinstaller command
Usage:
    pyinstaller [options] <spec-files|py-files>

Examples:
    pdm install
    pdm run pyinstaller args    之后简写为 pyinstaller args
    pyinstaller main.py
    pyinstaller main.spec
    pyinstaller *.spec
    pyinstaller --clean -y *.spec

Options:
    -D --onedir    打包为一个目录（默认行为）
    -F --onefile    打包为单文件，原理是自解压

    --distpath "./dist"    输出文件夹
    ~~--buildpath "./build"    临时文件夹~~
    --workpath "./build"
    --specpath "./"    Folder to store the generated spec file
    --clean    打包前清理临时缓存文件夹
    -y --noconfirm    覆盖输出文件夹，不要询问
    --log-level "INFO"
        TRACE, DEBUG, INFO, WARN, DEPRECATION, ERROR, CRITICAL

    -n --name "xxx"    default to the basename of first script
    --key 123456    混淆只针对 import 的模块，入口函数是明文
    -w --noconsole    禁用控制台窗口，只用于 GUI。对 *nix 无效
    -c --console
    --uac-admin    Windows ONLY
    -p --paths <DIR>[;DIR;...]
        * 可指定多次
        * add module search path, like PYTHONPATH
        * `;` for Windows
        * `:` for *unix
    --hidden-import "<module_name>"
        * 可指定多次.
        * 用于需要隐式导入（运行时导入）的依赖
        * 对诸如 Django 的 apps 非常有用
    -i --icon  <FILE.ico|FILE.exe|FILE.icns>
    --add-data "<SRC;DEST or SRC:DEST>"
        * 可多次指定.
        * src 可以是非二进制文件、目录.
        * `;` for Windows.
        * `:` for *nix.
    --add-binary "<src>:<dst>|<src>;<dst>"
        * 可多次指定.
        * src 是二进制文件.
        * `;` for Windows.
        * `:` for *nix.

    --collect-all "<module>"
        * 可多次指定.
        * Collect all submodules, data files, and binaries
        * from the specified package or module
    --collect-submodules "<module>"
        * 可多次指定.
        * Collect all binaries
    --collect-data "<module>"
        * 可多次指定.
    --collect-binaries "<module>"
        * 可多次指定.
```
