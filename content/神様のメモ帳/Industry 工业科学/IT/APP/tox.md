---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Testing
pip: tox
---

- References
    - 

- Installation
    - 

- Version
    - 

- Configuration
    - `tox.ini`
        - 推荐
        - `[testenv]`
            - 通用 settings，自动继承给 `[testenv:xxx]`，但是每项设置都可以被覆盖
    - `pyproject.toml`
        - 十分不推荐
    - `setup.cfg`
        - 不推荐
    - [Configuration - tox](https://tox.wiki/en/stable/config.html)

- Data
    - 

- Usage
    - 

- Examples
    - 

- Users
    - [django-webpack-loader/tests/tox.ini at master · django-webpack/django-webpack-loader](https://github.com/django-webpack/django-webpack-loader/blob/master/tests/tox.ini)

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
    - 只支持 [[Python|Python]]
    - 不支持 [[JavaScript|JS]] etc 语言环境

- Test
    - 

- Alternatives
    - [[hatch]]

- Description
    - 
