---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/LANGUAGE
    - flag/LANGUAGE/Python
---

[Project Jupyter | Home](https://jupyter.org/)


```bash
jupyter-notebook command
Usage:
    jupyter-notebook [options]
    jupyter notebook [options]

Description:
    * 我不喜欢 jupyter notebook，明显 jupyter lab 更好.


pipx install jupyter
jupyter notebook  # 在 CMD 启动 notebook
http://127.0.0.1:8888
http://127.0.0.1:8889

~/.jupyter/jupyter_notebook_config.py
c.NotebookApp.ip = '*'  # 开启所有的IP访问，即可使用远程访问
c.NotebookApp.open_browser = False  # 关闭启动后的自动开启浏览器
c.NotebookApp.port = 8889  # Default 8888
c.NotebookApp.token = '123456'  # Default '<generated>'


// notebook 代码中安装第三方库
如果 jupyter 是用 pipx 安装的，那可以直接 inject
!pipx inject jupyter PyYAML

import sys
!{sys.executable} -m pip install numpy

import sys
!conda install --yes --prefix {sys.prefix} numpy

import sys
sys.path
sys.executable

!echo $PATH
!type python
!type type
!type ls
!type -a python
!type -a conda
!type -a pip
!type pip
!conda env list
!jupyter kernelspec list



// PyCharm
随便打开一个项目 - 随便一个文件夹 - 鼠标右键 - New - Jupyter Notebook - 打开 .ipynb 文件 - 随便写点能执行的语句 - 运行 - 叫你填写 URL - http://127.0.0.1:8889/?token=123456


// golang
gophernotes 是 Jupyter 的 Go 内核。Windows 只能通过 docker 或 wsl 安装

gomacro relies on the `plugin` package when importing third party libraries. This package is only supported on Linux and Mac OS X currently.

除了 go，jupyter 还有各种内核：
sparkmagic是一个可以用于连接远端spark,让我们通过jupyternotebook来使用spark的工具.
作为Lisp的方言,scheme确实不简单.我安装的是基于ipython的calysto_scheme,它本质上是用python解析执行scheme语句.
最先进最全能的开源关系数据库postgresql也有对应的内核postgres_kernel.
jupyter-c-kernel是一个简单的C语言内核,它的外部依赖只有gcc.
C++ 有 cling，安装完成后集成进 jupyter。jupyter kernelspec install cling
Rust 有 evcxr_jupyter
Javascript(jp-babel)
R
Scala



// jupyter
ipython 主要用来替代 python 原生交互命令行，也就是在 cli 环境下使用。如果是 gui，更推荐使用基于 ipython 的 ipython notebook，Ipython Notebook现在改名了就叫Jupyter Notebook了，常被简称为 jupyter。虽然 jupyter 包括许多产品，但大家提到 jupyter 时一般指的是 jupyter notebook。

开发过程更推荐使用 jupyter 这种 gui，方便调试。

jupyter notebook 默认读取配置 $user/.jupyter/jupyter_notebook_config.py，若不存在，则以默认配置运行

jupyter notebook --port 2562 [--no-browser]
jupyter notebook --generate-config #生成默认配置文件


// vscode
想要在 vscode 上使用 jupyter：

1. 安装 jupyter，可以通过 pip install notebook；
2. vscode 安装扩展「python」并重启。
3. VSCode - Command Palette - 搜索「Jupyter」


```
