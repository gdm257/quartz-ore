---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: pyodbc
---

## Brief

- Idea
    - 一个实现了 ODBC API 的 Python 接口库

- Dependencies
    - ODBC Driver
        - [[Windows]] 自带  ODBC Driver Manager i.e. `ODBC Data Sources`
        - [[Windows]] 自带一个 [[SQL Server]] 的 driver i.e. `SQL Server`
        - 所有 OS 都可以手动安装 [[SQL Server]] 的 driver e.g. `ODBC Driver 18 for SQL Server`

- Installation
    - macOS M2
        - [[conda]]/virtualenv 虚拟环境皆失败，一导入就报错。必须使用 System Interpreter（Python 3.11），非常玄学
        - `pip install --no-binary=:all: pyodbc`

- API
    - [PEP 249: Python Database API Specification v2.0](https://peps.python.org/pep-0249/)

- Objects
    - Connection
    - Cursor
    - [PEP 249: Python Database API Specification v2.0](https://peps.python.org/pep-0249/)
