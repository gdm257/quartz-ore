---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE
- flag/LANGUAGE/Python
pip: isort
---

> 更推荐使用 [[ruff]]

[isort](https://pycqa.github.io/isort/)

[isort 井井有条 —— Python 导入格式化工具 - muzing的杂货铺](https://muzing.top/posts/38b1b99e/)

[10.1 让 Python 代码变得更好的工具 - 少数派](https://sspai.com/post/72754)

[Config Files - isort](https://pycqa.github.io/isort/docs/configuration/config_files.html)

[Using Black with other tools - Black 22.12.0 documentation](https://black.readthedocs.io/en/stable/guides/using_black_with_other_tools.html)

- Idea
    * isort 用于排序 Python 文件的 import 语句

- Configuration
    * `.isort.cfg`
    * `pyproject.toml` - `[tool.isort]`
    * `setup.cfg`
    * `tox.ini`
    * `.editorconfig`
    - 配置文件可代替大部分 Options
    - 键名是对应 Option 去掉 `-` 前缀，再将 `-` 替换为 `_`

```bash
isort command
Usage:
    isort [options] [files]

Examples:
    isort --profile "black" foo.py    black风格的导入

Options:
    -h --help
    -V --version
    -v --verbose
    -q --quiet
    --settings-file <file>    指定配置文件
    --check-only    只检测排序是否正确
    --profile {black|django|pycharm|google|attrs,...}    内置代码风格
    --ac --atomic    如果输出代码有语法错误则不保存回文件
    --skip <file>
        * 可指定多次.
    --skip-glob <pattern>
        * 可指定多次
    --gitignore
    --skip-gitignore

```
