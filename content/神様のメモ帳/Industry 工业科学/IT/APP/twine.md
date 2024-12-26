---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Publisher
---

[使用Twine库来发布新包 | Escape](https://www.escapelife.site/posts/139a936f.html)

我比较懒，直接用 pdm publish 就算了，懒得配置 twine

```bash
# pip install setuptools wheel twine

# 0. 编写 setup.py

# 1. 构建分发包
1. python setup.py sdist bdist_wheel --universal  # 生成源码包、二进制包

1. python setup.py sdist [--formats=gztar,zip]  # 生成源码包

python setup.py bdist  # 构建所有格式二进制分发包
python setup.py bdist_wininst  # exe
python setup.py bdist_rpm  # rpm 包
python setup.py bdist_egg  # egg 包

# 2. 上传到分发包到 Pypi
twine upload dist/*
# 正确的方法应该用twine工具，python setup.py sdist bdist_wheel register upload 已经过时了

# 3. 安装分发包
python setup.py install  # 安装方式
python setup.py develop  # 该方法不会真正的安装包，而是在系统环境中创建一个软链接指向包实际所在目录。这边在修改包之后不用再安装就能生效，便于调试


pip install setuptools
distutils == Python 包分发工具
setup.py == distutilsの核心
setuptools == 增强版 distutils
无论你用哪个，核心在于编写 setup.py


Python 包的分发可以分为两种：
1. 以源码包的方式发布
2. 以二进制包形式发布（egg/wheel）

发现 pypi 上的 pdm-packer 依旧停留在 0.3.0，最新的 commit 还没有版本 tag，也就是没上传到 pypi。于是不得不手动从模块源码来安装包。

git clone https://github.com/frostming/pdm-packer
cd pdm-packer/
pdm export --format setuppy -o setup.py  #生成的文件可能只能在当前 OS 使用，不能跨平台

# 安装方法二
cd pdm-packer/
pipx runpipx pdm install .  #在虚拟环境内执行 pip install .

# 安装方法一
cd pdm-packer/
/path/to/pipx/venvs/pdm/Scripts/python setup.py install

不懂是 pdm-packer 的问题还是 pipx 的问题，安装后 pdm-packer 引用了 pipx/bin/pdm-script.py，但这不是 pipx install pdm 会共享的。

所以暂时回退 pdm==1.12.8，等待 pdm-packer 更新。



distutils是python的一个标准库（distribute utils分发工具），由python官方开发的打包工具，其精髓在于setup.py，它是模块分发与安装的指导文件。

setuptools 是 distutils 增强版，不包括在标准库中。大部分 Python 用户都会使用更先进的 setuptools 模块。

distribute 是 setuptools 有一个分支版本，分支的原因可能是有一部分开发者认为 setuptools 开发太慢了。但现在，distribute 又合并回了 setuptools 中。因此，我们可以认为它们是同一个东西。

还有一个大包分发工具是 distutils2，其试图尝试充分利用distutils，detuptools 和 distribute 并成为 Python 标准库中的标准工具。但该计划并没有达到预期的目的，且已经是一个废弃的项目。

因此，setuptools 是一个优秀的，可靠的 Python 包安装与分发工具。


```
