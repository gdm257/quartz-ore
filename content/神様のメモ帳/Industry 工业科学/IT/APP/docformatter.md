---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
---

- References
    - 

- Installation
    - `pip install docformatter`
    - `pip install docformatter[tomli]`
        - use `pyproject.toml` or any `.toml` to configure `docformatter`, and Python < 3.11

- Version
    - 

- Configuration
    - `pyproject.toml` - `[tool.docformatter]`
        - 与大多数工具链一样，config 能代替 cli option
        - key 为命令行选项去掉 `-` 前缀
        - `black = true`
            - `pre-summary-space = true`
            - `wrap-descriptions = 88`
            - `wrap-summaries = 88`
            - black style 是这三项的简写
    - `setup.cfg` - `[docformatter]`
    - `tox.ini` - `[docformatter]`

- Data
    - 

- Usage
    - 

- Examples
    - 

- Users
    - 

- UI
    - 

- Idea
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
    - 

- Con
    - 

- Test
    - 

- Alternatives
    - 

- Description
    - 
