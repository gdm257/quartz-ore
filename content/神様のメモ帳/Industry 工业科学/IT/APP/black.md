---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Formatter
pip: black
---

[五彩斑斓的 Black —— Python 代码格式化工具 - muzing的杂货铺](https://muzing.top/posts/a29e4743/)

[Black 22.12.0 documentation](https://black.readthedocs.io/en/stable/)

- Alternatives
    - 更推荐 [[ruff]]

- Configuration
    * `pyproject.toml` - `[tool.black]`
    - 键名为 option 去掉 `--` 前缀
    - flag 选项的值为 `true`/`false`
    - 配置文件可以代替命令行参数


```bash
black command
Usage:
    black [options] <file-or-dir>...

Description:
    * black 零妥协的 Python 代码格式化工具.
    * black 的可配置项非常少，我喜欢.
    * black 的可读性高，我喜欢.

Examples:
    black --skip-string-normalization xxx.py

Options:
    -h --help
    --version
    --verbose
    -S --skip-string-normalization    不要将字符串字面量改为双引号包裹
    -l --line-length 88
    --exclude <regpexp-pattern>
        * 如果没有指定 --exlude，black 会自动读取 .gitignore
    --include "(\.pyi?|\.ipynb)$"
        * Only includes files and folders matched by regexp.
        * 先计算 exclude，再计算 include.
    -t --target-version [py33|py34|py35|py36|py37|py38|py39|py310|py311]

Installation:
    * pip install black[d]
    * IntelliJ IDEs
        * 新版方案（推荐）
        - pip install black[d]
        - IDE 安装 BlackConnect 插件
        - IDE - File -> Settings -> Tools -> BlackConnect
        - macOS: IDE - File -> Settings -> Tools -> BlackConnect
            - 勾选 Trigger on code reformat
            - 保存设置
        - IDE - Code -> Reformat Code
        * 旧版方案（不推荐）
        - IDE -> File -> Settings -> Tools -> External Tools
        - 添加一个工具，配置 black 命令行参数
        - Program: `black`
        - Arguments: `-S $FilePath$`

```
