---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: sqlmodel
---

## Brief

- References
    - [SQLModel](https://sqlmodel.tiangolo.com/)
    - [tiangolo/sqlmodel: SQL databases in Python, designed for simplicity, compatibility, and robustness.](https://github.com/tiangolo/sqlmodel)

- Test
    - [How to specify a different name for the db table that a SQLModel refers to? · Issue #159 · tiangolo/sqlmodel](https://github.com/tiangolo/sqlmodel/issues/159)
    - Enum
        - [How to make enum column to work with SQLModel? · Issue #96 · tiangolo/sqlmodel](https://github.com/tiangolo/sqlmodel/issues/96)
    - Schema
        - [Setting PostgreSQL schema · Issue #20 · tiangolo/sqlmodel](https://github.com/tiangolo/sqlmodel/issues/20)
        - [Relationships with multiple schemas and same table names not working · Issue #448 · tiangolo/sqlmodel](https://github.com/tiangolo/sqlmodel/issues/448)
    - [[SQL Server]]
        - [How to specify schema when using SQLServer · Issue #163 · tiangolo/sqlmodel](https://github.com/tiangolo/sqlmodel/issues/163)

- Idea
    - ORM，就是它了！

- Fundamentals
    - sqlmodel 本质是 [[SQLAlchemy]] 的封装
    - sqlmodel 基于 [[SQLAlchemy]] 和 [[pydantic]]
    - ORM == Model + Session (Transaction) + Engine + CRUD
    - 入库及其逆过程（筛选出库）本来就是一件非常单纯的事情，做这件事情的第三方库，抽象能力只要达到了某个阈值，用起来越简单、越由雅越好（不然的话，人人都应该无脑 [[SQLAlchemy]]）。其中，[[sqlmodel]] 就是做的最好的，没有之一

- Users
    - [EstrellaXD/Auto\_Bangumi: AutoBangumi - 全自动追番工具](https://github.com/EstrellaXD/Auto_Bangumi)

- Author
    - [[FastAPI]] 同作者

- Con
    - v0.0.8 发布于 2022.08，已经停更一年多了，没有任何有效 commits，哪怕是 fix
    - 半成品，需要各种踩坑


## Objects

- Objects
    - `sqlmodel.SQLModel`
        - Class 相当于 Table
        - Instance 相当于 Row
        - Instance 也是一个 Pydantic 实例
    - `ScalarResult`
        - 只能迭代一轮，之后再迭代就没东西返回了


## API

- API
    - `sqlmodel.SQLModel`
        - 实例方法
        - `.dict() -> Dict[field_name, value]`
            - value 类型理论上同字段的 type annotation

    - `sqlmodel.Relationship`
        - `.__init__()`
            - `Relationship(back_populates="teams")` 像是在说：嘿，当前 table 变了，帮我自动更新其他 table 的对应 row(s) 的 teams 属性
