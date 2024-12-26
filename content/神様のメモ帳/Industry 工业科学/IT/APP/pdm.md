---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackageManagement
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
  - flag/APP/DevOps/Publisher
github: pdm-project/pdm
commands:
  - pdm
pip: pdm
files:
  - pyproject.toml
---

## Brief

[PDM](https://pdm.fming.dev/)

[pdm-project/pdm: A modern Python package and dependency manager supporting the latest PEP standards](https://github.com/pdm-project/pdm)

[PEP 582的开发日志 | Frost's Blog](https://frostming.com/2020/04-12/pdm-pep582/)

[PEP 582 的开发日志(续) | Frost's Blog](https://frostming.com/2020/11-26/pdm-pep582-contd/)

[PDM 2.0 有什么新特性？ | Frost's Blog](https://frostming.com/2022/pdm-2/)

[Python打包指南2021 | Frost's Blog](https://frostming.com/2020/12-25/python-packaging/)

[划时代的 Python 包管理工具 -- PDM 原理篇 - Python社区](http://www.python88.com/topic/129455)

[Packaging Python Projects — Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)

[pdm-project/awesome-pdm: A curated list of awesome PDM plugins and resources](https://github.com/pdm-project/awesome-pdm?tab=readme-ov-file)

- Configuration
    - pdm 配置
        * 全局 pdm 配置 `C:/ProgramData/pdm/pdm/config.toml`
        * 用户 pdm 配置 `~/AppData/Local/pdm/pdm/config.toml`
        * ~~项目级 pdm 配置 `.pdm.toml`（旧版路径）~~
        * 项目级 pdm 配置 `pdm.toml`
        * 全局项目的 pdm 配置 `~/AppData/Local/pdm/pdm/global-project/config.toml`
        * 优先级：项目级 > 用户级 > 全局
    - 项目配置
        - `pyproject.toml`
        - `pdm.lock`
            - lock file 保证开发环境的一致性.
            - lock file 记录了第三方库的元数据，其中最重要的是版本哈希值.
            - 同一个库的不同版本，有着不同的哈希值.
            - lock file 保证安装的一定是记录下来的版本，即锁定（lock）版本.
        - `.pdm-python`
            - 该项目所使用的 python 解释器路径
    - global venvs location
        - `~/AppData/Local/pdm/pdm/venvs`
        - 可在 pdm 配置中通过 `venv.location` 修改

- pdm.toml
    - `python.use_pyenv`
        - `true` 安装依赖到 interpreter 所在环境
        - `false` 安装依赖到 PEP582/虚拟环境
    - `python.use_venv`
        - `true` 安装依赖到 interpreter 所在环境
        - `false` 安装依赖到 PEP582 `__pypackages__`
    - `venv.with_pip`
        - `true` 创建的虚拟环境带有 [[pip]]

- Test
    - pdm-backend
        - Include
            - `src-layer/<mypackage>` 里的所有文件（无论什么格式）都会被 included，这意味着我们不需要手动 include `.js` `.css` `.html` `toml` etc 资源文件，好评

- Fundamentals
    - [PDM 的内部实现(1) | Frost's Blog](https://frostming.com/2024/pdm-lockfile/)

- Alternatives
    - [[pip]]
    - [[poetry]]

- Description
    * pdm == python版yarn
    * pdm == 支持PEP582のportry
    * pdm == pip + virtualenv + setuptools
    * pdm 无法代替 pipx.
    * pdm 无法代替 virtualenvwrapper.
    * pdm 无法代替 pyenv.
    * PEP582 可理解为「安装依赖到 __pypackages__，但里边的依赖可被任意同次要版本解释器使用」.
    * PEP582 是一种隔离的 Python 环境，不带解释器.
    * 虚拟环境 是一类隔离的 Python 环境，带有解释器.
    * 核心原理 PYTHONPATH.
    * 核心原理 sys.path
    * 核心原理 python 命令行参数，涉及 site 标准库.
    * 核心原理 pip 命令行参数，涉及 site 标准库.
    * pdm 支持 PEP 621，仅此一家，再也不用写 setup.py 惹.
    * PyCharm: Mark `__pypackages__/<major.minor>/lib` as Sources Root.
    * VSCode:
        - 安装 Python 扩展.
        - 安装 Pylance 扩展.
        - Add Item `__pypackages__/<major.minor>/lib` to Setting `python.analysis.extraPaths` and `python.autoComplete.extraPaths`.

## CLI

```bash
pdm command
Usage:
    pdm [options] <command> [args]

Examples:
    pdm --pep582
    pdm config python.use_pyenv false
    pdm config pypi.url "https://pypi.tuna.tsinghua.edu.cn/simple"
    pdm init
    pdm use
    pdm run python -V
    pdm show loguru
    pdm add loguru
    pdm add mypy --dev
    pdm update loguru
    pdm update
    pdm update --dev
    pdm list --graph
    pdm info
    pdm config
    pdm install
    pdm sync
    pdm run flask run -p 5321
    pdm run pip -V
    pdm export -f setuppy -o setup.py
    pdm export -o requirements.txt
    pdm plugin add \
        pdm-packer==0.3.0
        pdm-publish==0.2.1
        pdm-venv==0.4.1
        pdm-version==1.0.0
        pdm-shell==1.0.0

Options:
    -h --help
    -v --version
    --pep582
        * Enable PEP 582 globally for Windows.
        * 其实就是修改 Windows 用户环境变量 PYTHONPATH.
    -v --verbose
    -c --config $PDM_CONFIG_FILE ".pdm.toml"
	-I --ignore-python
		* 无视 .pdm.toml 指定的 Python 解释器

Subcommands:
    init    生成项目配置
    export    转换成其他包管理器文件格式
        -g --global
    import
        -g --global
    add [options] <packages>
        -g --global
        --group <group>
        --dev
    remove [options] <packages>
        -g --global
        --dry-run
        --group <group>
        --dev
    update [optoins] <packages>
        -g --global
        --dry-run
        --group <group>
        --dev
        --prod --production
    lock    生成 pdm.lock
        -g --global
    list
        -g --global
        --graph    依赖关系可视化
        --json
        --freeze
    sync    安装依赖至 Python 环境（PEP582/venv，取决于 pdm 配置）
        -g --global
    install    安装依赖至 Python 环境（PEP582/venv，取决于 pdm 配置）
        -g --global
    build
    publish
    info    查看项目配置
        -g --global
    use    指定项目的 Python interpreter
        -g --global
    run <command> <args>
        -g --global
        --no-sync
        * pdm run 会自动追加 Python 环境到 PYTHONPATH.
            * PEP 582 追加 __pypackages__/x.y/lib
            * 虚拟环境根据不同实现进行追加.
    config [options] [<key> <value>]    查看、修改 pdm 配置
        --global    全局项目配置
        -d --delete    删除指定 key
    plugin
        add <plugins>
        remove <plugins>
        list
    venv
        create
        remove
        list
        active
        - 管理虚拟环境
    show <package>
        -g --global
        * 显示指定包的信息
        * pip search 替代品

Plugins:

# pdm-packer
pdm pack --main xxx.py:main
--main xxx.py:main  #指定入口为 xxx.py 的 main() 函数
-v  #显示详细信息
-c --compress    #压缩 zipapp，生成为 .pyc（默认为 .pyz）
-i --interpreter D:/Portable/virtualenvwrapper/python/Scripts/python    #指定 python 解释器，推荐，避免污染全局环境
--exe    #打包成 exe
-o xxx.pyz  #指定输出文件名
-o xxx.pyc
-o xxx.exe
pdm 环境下的打包方案，pyinstaller 替代品。
速度极快，是 pyinstaller 的百倍；
体积极小，还不到 pyinstaller 生成的文件的一半，这还是没有压缩的情况下；
缺点
1. 是必须手动指定程序入口 entry point，`if __name__ == '__main__'` 用不了
2. 目前无法加密
3. 不稳定，经常失败



pdm shell --memo
pdm shell


# pdm-venv
# 像 git 一样，只能在指定目录用
# 很鸡肋，还是得用 virtualenvwrapper
pdm plugin add pdm-venv
pdm venv create --name test 3.7
pdm venv remove abc
pdm venv list
eval $(pdm venv activate test)  #Bash/csh/zsh
eval (pdm venv activate for-test)  #Fish
Invoke-Expression (pdm venv activate for-test)  #powershell
# You can make your own shell shortcut function to avoid the input of long command. Here is an example of Bash:
pdm_venv_activate() {
    eval $('pdm' 'venv' 'activate' "$1")
}

# Create a virtualenv based on 3.8 interpreter
$ pdm venv create 3.8
# Assign a different name other than the version string
$ pdm venv create --name for-test 3.8
# Use venv as the backend to create, support 3 backends: virtualenv(default), venv, conda
$ pdm venv create --with venv 3.9
# C:\Users\11\AppData\Local\pdm\pdm\venvs\Capslock+-ySRjVoiM-test




// 报错
1. 系统无法访问此文件。
Creating a pyproject.toml for PDM...
[OSError]: [WinError 1920] 系统无法访问此文件。: 'C:\\Users\\11\\AppData\\Local\\Microsoft\\WindowsApps\\Micro
softEdge.exe'

解决：看了下，C:\\Users\\11\\AppData\\Local\\Microsoft\\WindowsApps\\ 全是空文件，删掉就好。


[Invoke Python in a inexistence path when I init a project · Issue #424 · pdm-project/pdm](https://github.com/pdm-project/pdm/issues/424)

You should remove the broken Python records in regedit, you can find all versions under HKEY_CURRENT_USER\SOFTWARE\Python\PythonCore

```

## Fundamentals

- CLI
    - [argparse 的高级用法 | Frost's Blog](https://frostming.com/2021/11-23/advanced-argparse/)
