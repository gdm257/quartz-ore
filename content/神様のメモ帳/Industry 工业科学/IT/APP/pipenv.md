---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
---

```bash
// 安装
# Debian
sudo apt install pipenv

# Windows
pipx install pipenv


// 使用
# pipenv 命令类似 git，必须在有 Pipfile 的目录才能使用
mkdir newproject
cd newproject

# 从 requirements.txt 创建虚拟环境
打开 requirements.txt
正则
^(.+)$
替换为
pipenv install $1 ;  \



# 创建虚拟环境
pipenv install  # 如果当前目录没有 Pipfile，类似 git init，会新生成 python 解释器，生成 Pipfile，可以指定特定 python 版本--python 3.7
pipenv install  # 如果当前目录有 Pipfile，（新生成 python 解释器），安装 Pipfile 所有包
pipenv install --dev  # 如果当前目录有 Pipfile，新生成 python 解释器，安装 Pipfile [dev-packages] 所有包
--skip-lock
pipenv install PyYAML
pipenv install requests==2.26.0
pipenv install requests  # Install package and add to Pipfile [packages]
pipenv install --dev requests  # Install package and add to Pipfile [dev-packages]
pipenv uninstall --dev requests  # Uninstall package and remove from Pipfile [dev-packages]
pipenv uninstall --all  #卸载所有包
pipenv --rm  #删除当前项目对应虚拟环境
pipenv graph  # 查看依赖树
pipenv shell  # pipenv run shell
pipenv run pip list  # 查看依赖列表
pipenv run python hello.py
pipenv run <command>  # docker exec nginx command
pipenv run pip freeze > requirements.txt
pipenv lock -r --dev > requirements.txt
pipenv lock  #生成 Pipfile.lock

# 查看虚拟环境信息
pipenv --where
pipenv --venv  #查看虚拟环境信息
pipenv --py  #查看 python 版本
pipenv --clear  #清除缓存

# C:\Users\<user>\.virtualenvs\<project-name>-0Ma-dfMG
创建虚拟环境是绑定项目的，绑定的项目的路径可以查看 .project 文件。


// 介绍
pipenv 是 python 官方推荐的包管理工具，集 virtualenv、pyenv 和 pip 三者的功能于一身，类似于 php 中的 composer。

Pipfile 是用来替代原来的 requirements.txt

Pipfile.lock 则包含你的系统信息，所有已安装包的依赖包及其版本信息，以及所有安装包及其依赖包的 Hash 校验信息。

举个例子，刚才我们安装了 Django 2.0.2 的版本，即目前（2018.2.27）的最新版本。但可能 Django 以后还会有更新，比如某一天 Django 更新到了 2.1 版本，这时如果我们想要重新部署本项目到另一台机器上，假如此时不存在 Pipfile.lock 文件，只存在 Pipfile文件，由于 Pipfile 文件中标识的 Django 依赖为 django = “*”，即没有版本限制，它会默认安装最新版本的 Django，即 2.1，但由于 Pipfile.lock 文件的存在，它会根据 Pipfile.lock 来安装，还是会安装 Django 2.0.2，这样就会避免一些库版本更新导致不兼容的问题。

我们知道，为了方便管理 python 的虚拟环境和库，通常使用较多的是 virtualenv 、pyenv 和 pip，但是他们不够好用或者说不够偷懒。于是 requests 的作者 Kenneth Reitz 开发了用于创建和管理 python 虚拟环境的工具 —- pipenv。

它能够自动为项目创建和管理虚拟环境，从 Pipfile 文件中添加或者删除包，同时生成 Pipfile.lock 文件来锁定安装包的版本和依赖信息，避免构建错误。

pipenv 主要解决了以下问题：

- 不用再单独使用 virtualenv、pyenv 和 pip 了，现在它们结合到了一起。
- 不用再维护 requirement.txt 了，使用 Pipfile 和 Pipfile.lock 来代替。
- 可以在开发环境使用多个 python 版本。
- 在安装的 pyenv 条件下，可以自动安装需要的 python 版本。
- 安全，广泛地使用 Hash 校验，能够自动曝露安全漏洞。
- 随时查看图形化的依赖关系。


```
