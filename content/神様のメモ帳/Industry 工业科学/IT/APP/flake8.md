---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
- flag/APP/DevOps/Linter
pip: flake8
---

- References
    - [Using Black with other tools - Black 22.12.0 documentation](https://black.readthedocs.io/en/stable/guides/using_black_with_other_tools.html)

- Installation
    * `pip install flake8`

- Idea
    - flake8 是 linter，检查潜在的代码错误

- Configuration
    * `.flake8` - `[flake8]`
    * `setup.cfg` - `[flake8]`
    * `tox.ini` - `[flake8]`
    - 键名为 option 去掉 `-` 前缀.

- Description
    * flake8 是 linter，而不是 formatter.
    * [[black]] 出来之前，flake8 一般配合 yapf 使用，yapf 才是 formatter

- Alternatives
    - 更推荐使用 [[ruff]]

- Con
    - 虽说 flake8 采用 [[GPL]] 协议发布，但其实是可以用于发布闭源项目的，因为发布时 flake8 并不是依赖，运行时也用不到
