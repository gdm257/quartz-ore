---
aliases:
  - Anaconda
  - Miniconda
tags:
  - flag/License/BSD
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackageManagement
  - flag/LANGUAGE/Python
winget: Anaconda.Miniconda3
frontmatter-as-page:
  - conda
---

## Brief

- References
    - [一篇文章带你上手Conda、Poetry与Pdm，轻松搭建Python虚拟多版本复杂开发环境 | Well404的妙妙屋](https://blog.well404.top/2022/08/17/%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83/)

- Version
    - miniconda
        - base 环境仅包含必要包
    - anaconda
        - base 环境自带很多非必要包
        - 自带 GUI 包管理器
        - 不推荐

- Idea
    - 不只是 [[Python|Python]] 虚拟环境，还有 Python, R, Ruby, Lua, Scala, Java, JavaScript, C/ C++, FORTRAN
    - 我愿称之为「虚拟环境级 [[scoop]]」

- Fundamentals
    - [pip和conda可以混用吗？ - 知乎](https://www.zhihu.com/question/335765022)

- Pro
    - 完整的 Python 环境
        - conda 的 `python` 包并不是虚拟环境，而是完整的 Python（interpreter、built-in libraries、site packages）
        - 因此可以用来制作「分发包」或「内网离线部署包」
    - 支持 用户级环境，可取代 [[virtualenvwrapper]]
    - 除了 conda 本身，不需要任何依赖
    - 支持 从网络安装任意版本的 Python/Node etc 到 conda 环境
    - 支持 搭建多语言环境，即 conda env == python env + node env + R env + ...

- Con
    - `conda install` 安装的是 conda package，而非 `python package`
    - 不支持 [[pyproject.toml]] 为主的 PEP 621/631，而是自己搞了一套包声明文件，兼容性差
    - [[PowerShell|PowerShell]] 命令行中无法通过 `activate` 命令激活环境

- Alternatives
    - condaforge/miniforge
    - [[mamba|mamba/micromamba]]
        - [[mamba]] 负责全局虚拟环境管理
        - [[rye]] 拥有除此以外的全部功能
