---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
---

- Alternatives
    - 请用 [[conda]] 代替，功能上是超集

```bash
Description:
    * virtualenv 创建的虚拟环境散布于各个角落，无法统一管理.
    * virtualenv 必须要进入虚拟环境路径才能激活虚拟环境，有些麻烦.
    * virtualenvwrapper 解决了这些问题，能够全局管理 virtualenv.
    * virtualenvwrapper 成为一个类似 conda 的存在，但比 conda 由雅多了.

Examples:
    #windows 只能通过 cmd 使用，连 ps 都用不了！
    mkvirtualenv <env_name>  #创建虚拟环境
        --python <python.exe路径>
        -r <requirements.txt>
    mktmpenv  #创建一个临时环境，deactivate 环境就删除
    workon <env>  #进入虚拟环境
    > deactivate  #退出虚拟环境
    rmvirtualenv <env>  #删除虚拟环境
    workon  #列出虚拟环境
    lsvirtualenv  #列出虚拟环境
    cpvirtualenv <env01> <env02>  #复制虚拟环境
    cdvirtualenv <env>  #进入虚拟环境目录
    allvirtualenv command arg01 arg02 ...  #对所有虚拟环境运行命令

Usage:
    - activate.bat
    - add2virtualenv.bat
    - cd-.bat
    - cdproject.bat
    - cdsitepackages.bat
    - cdvirtualenv.bat
    - deactivate.bat
    - folder_delete.bat
    - lssitepackages.bat
    - lsvirtualenv.bat
    - mkproject.bat
    - mkvirtualenv.bat
    - rmvirtualenv.bat
    - setprojectdir.bat
    - toggleglobalsitepackages.bat
    - virtualenvwrapper.bat
    - vwenv.bat
    - whereis.bat
    - workon.bat

Installation:
    # Windows 安装
    pipx install virtualenvwrapper-win
    WORKON_HOME 环境变量，虚拟环境的存储路径，默认 ~/Envs
    cd pipx/bin && virtualenvwrapper.bat

    # Linux 安装（不推荐，请用 pyenv）
    apt install -y python3-virtualenv
    apt install -y python3.8-venv
    pipx install virtualenvwrapper
    ~/.bash_profile
    export WORKON_HOME=~/Envs #设置virtualenv的统一管理目录
    export VIRTUALENVWRAPPER_PYTHON=~/.local/pipx/venvs/virtualenvwrapper/bin/python #指定python解释器，如果是pipx需要特别指定
    #export VIRTUALENVWRAPPER_VIRTUALENV_ARGS='--no-site-packages'
    #添加virtualenvwrapper的参数，生成干净隔绝的环境
    source ~/.local/bin/virtualenvwrapper.sh

```



[Python中的虚拟环境（Virtualenv）及其工作原理 · 零壹軒·笔记](https://note.qidong.name/2019/03/python-virtualenv/)


```bash
Description:
    * virtualenv 简称 venv，因为其包名就是这个.
    * virtualenv 本质是一种 python 虚拟环境，项目级只是一种实际应用.
    * virtualenv 原版的 cli 是照着「每个项目一个 python 环境」来设计的.
    * virtualenvwrapper 是 venv 的另一种应用，对 venv 进行全局管理.



pipx install virtualenv

# 魔改源码
git clone flexget
cd flexget
vim ./flexget/plugins/xxx/myplugin.py

# 全局安装源码
pipx install ./
pipx install ./ --force # 强制重装
pipx upgrade flexget # 更新出错暂时原因不明，目测是路径错误，建议重装

# 项目级
virtualenv ./ # 初始化虚拟环境（项目级）

./Scripts/pip install -e .  # Windows 安装依赖（项目级，操作都是项目级）
./Scripts/flexget execute  # Windows 运行代码
git pull
./bin/pip install --upgrade -e .  # Windows Upgrade

./bin/pip install -e .  # Linux 安装依赖
./bin/flexget execute  # Linux 运行代码
git pull
./bin/pip install --upgrade -e .  # Linux Upgrade


```
