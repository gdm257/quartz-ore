---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
- flag/APP/DevOps/Linter
- flag/APP/DevOps/Formatter
pip: ruff
---

## Brief

- References

- Installation
    - `pip install ruff`
    - [Integrations - Ruff](https://docs.astral.sh/ruff/integrations/)

- Version
    - 

- Idea
    - [[Python|Python]] linter & formatter
    - [FAQ - Ruff](https://docs.astral.sh/ruff/faq/#which-tools-does-ruff-replace)

- Configuration
    - `pyproject.toml`
        - `I`
        - `S`
        - [Configuring Ruff - Ruff](https://docs.astral.sh/ruff/configuration/)
        - [Settings - Ruff](https://docs.astral.sh/ruff/settings/)
        - [Rules - Ruff](https://docs.astral.sh/ruff/rules/)
    - `ruff.toml`
    - `.ruff.toml`
    - `$env:APPDATA/ruff/ruff.toml`
    - `~/.config/ruff/ruff.toml`
    - `# comment suppression`
        - lint
            - `# [ruff: ]noqa: {code[, ...]}`
            - `# noqa` ignore all violations
            - `# noqa: F841`
            - `# noqa: E741, F841`
            - `# ruff: noqa`
            - `# ruff: noqa: F741, F841`
        - format
            - `# fmt: on` `# yapf: enable`
            - `# fmt: off` `# yapf: disable`
            - `# fmt: skip`
        - isort
            - `# isort: skip_file`, `# isort: on`, `# isort: off`, `# isort: skip`, and `# isort: split`
            - `# ruff: isort: skip_file`
        - [Format suppression](https://docs.astral.sh/ruff/formatter/#format-suppression)
        - [Error suppression](https://docs.astral.sh/ruff/linter/#error-suppression)

- Data
    - 

- Examples
    - 

- Users
    - 

- Author
    - 

- GUI
    - 

- CLI
    - [Configuring Ruff - Ruff](https://docs.astral.sh/ruff/configuration/#command-line-interface)

- DSL
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 由雅！
    - 全面超越 [[flake8]]
    - 内置 40+ plugins，不用像 [[flake8]] 那样折腾一大堆插件了
    - 平替 [[black]]，只需设置好 `line-length`
    - 支持 转换 [[flake8]] 配置为 ruff 配置，只需通过工具  [flake8-to-ruff](https://pypi.org/project/flake8-to-ruff/)

- Con
    - 不支持 [[Python|Python 2]]

- Test
    - 

- Alternatives
    - 

- Description
    - 
