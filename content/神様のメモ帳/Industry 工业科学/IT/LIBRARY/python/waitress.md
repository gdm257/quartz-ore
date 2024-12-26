---
tags:
  - flag/License/ZPL
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/WSGI/Server
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: waitress
---

- References
    - [windows下使用nginx + waitress 部署django - 一灯编程 - 博客园](https://www.cnblogs.com/mooremok/p/17188510.html)

- Idea
    - [[WSGI]] Server

- Deps
    - `pip install types-waitress` for [[mypy]]

- CLI
    - `waitress-serve [options] <module_name>:<var_name>`

- Pro
    - 支持 [[Windows]]

- Con
    - 不支持 [[HTTP]] 2.0
