---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
---

[pyenv 神器原理分析 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1593478)

[Python版本管理神器-pyenv - 知乎](https://zhuanlan.zhihu.com/p/36402791)

[pyenv/pyenv: Simple Python version management](https://github.com/pyenv/pyenv)

[pyenv/pyenv-installer: This tool is used to install `pyenv` and friends.](https://github.com/pyenv/pyenv-installer)

[pyenv/pyenv-virtualenv: a pyenv plugin to manage virtualenv (a.k.a. python-virtualenv)](https://github.com/pyenv/pyenv-virtualenv)

[pyenv-win/pyenv-win: pyenv for Windows.](https://github.com/pyenv-win/pyenv-win)


```bash
pyenv command
Description:
	* pyenv == python 版 nvm/nvs/scoop
	* pyenv 是 python 多版本管理工具，更像 nvs
	* pyenv 是便携软件，不需要安装.
	* pyenv 需要执行一段脚本才能生效，所以需要注入 .bashrc
	* pyenv 如何激活 python 环境？
	* pyenv 将 python 文件夹加入 PATH，并设置 PYTHONPATH

Installation:
	# Linux
	curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
	echo '
	# pyenv
	export PYENV_ROOT="$HOME/.pyenv"
	export PATH="$HOME/.pyenv/bin:$PATH"
	eval "$(pyenv init -)"    # 启用 shims 和 shell integration
	# eval "$(pyenv virtualenv-init -)"    # 自动激活虚拟环境 (不推荐，严重影响 shell 速度)
	' >> ~/.bashrc
	exec $SHELL #restart shell
	source ~/.bashrc
	pyenv update #update
	rm -r ~/.pyenv; vim ~/.bashrc #uninstall

	# windows 太残废，不推荐
	scoop install -g pyenv
		不能自动切换，也不能激活，十分鸡肋，亲测
		你就当 windows 没有 pyenv 吧
		唯一能做的就是 `pyenv exec command args`


Usage:
	pyenv <subcommand> [args]

Subcommands:
	help [subcommand] -h --help
	--version
		* 查看 pyenv 版本
	install -l --list
		* 列出 可安装的 Python 版本
	install [options] <version>...
		-f --force
		-v --verbose
		-k --keep
		-p --patch
		* 安装 Python 指定版本
		- pyenv install 3.7.9 3.8.10
	uninstall <version>...
		* 删除 Python 指定版本
	versions
		* 列出 已安装的 Python 版本

	global <versions>
		* echo <version> >> ~/.pyenv/version
		- echo $"3.5.2\n3.6.8" >> ~/.pyenv/version
		- 设置 默认 Python 版本，启用 pyenv 会自动激活
	local <versions>
		* 等价于 echo <versions> >> ./.python-version
		* 工作在该文件夹及其子文件夹，pyenv 会自动切换 Python 版本


	activate <version>
		* 激活 Python 指定版本
	deactivate <version>
		* 取消 激活


	virtualenvs
		* 列出 创建的虚拟环境
	virtualenv <python_version> <venv_name>
		* 创建 虚拟环境 which 使用指定的 Python 版本，并指定虚拟环境名称
		- pyenv virtualenv    3.8.10    python38-venv
	uninstall <virtual_env_name>
	virtualenv-delete <virtual_env_name>
		* 删除 虚拟环境，跟 uninstall 效果一样
	activate <venv_name>
		* 激活 虚拟环境
	deactivate
		* 取消 激活


	version
		* 查看 激活的 Python 版本
	rehash
		* update shims folder
	exec <command> [args]




Plugins:
	# pyenv-virtualenv plugin
	git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
	echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc # 激活默认虚拟环境

```
