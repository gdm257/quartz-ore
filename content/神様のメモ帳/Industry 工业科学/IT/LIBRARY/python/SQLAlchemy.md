---
tags:
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/SQLite
  - flag/LANGUAGE/PostgreSQL
  - flag/LANGUAGE/MySQL
  - flag/LANGUAGE/T-SQL
  - flag/LANGUAGE/Oracle
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: sqlalchemy/sqlalchemy
pip: SQLAlchemy
---

## Brief

- References
    - [SQLAlchemy架构笔记 | nettee 的 blog](https://nettee.github.io/posts/2016/SQLAlchemy-Architecture-Note/)
    - [SQLAlchemy Unified Tutorial — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/tutorial/index.html)
    - [Glossary — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/glossary.html)
    - [PEP 248 – Python Database API Specification v1.0 | peps.python.org](https://peps.python.org/pep-0248/)
    - [【译】如何让数据库工效翻十倍 - 知乎](https://zhuanlan.zhihu.com/p/463569000)

- Version
    - 2.0
        - 原生支持 type annotations，用过再也回不去了
        - 兼容 [[dataclasses]]
        - better performance
        - [python - Type annotations for sqlalchemy model declaration - Stack Overflow](https://stackoverflow.com/questions/72954928/type-annotations-for-sqlalchemy-model-declaration)
        - [What’s New in SQLAlchemy 2.0?](https://docs.sqlalchemy.org/en/20/changelog/whatsnew_20.html)
        - [SQLAlchemy 2.0 - Major Migration Guide](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html)
    - 1.4

- Idea
    - ORM

- Installation
    - 1.4
        - `pip install sqlalchemy[mypy]~=1.4.52`
        - [[mypy]] plugin `sqlalchemy.ext.mypy.plugin`
    - 2.0
        - `pip install sqlalchemy`

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
    - 

- API
    - 

- Mobile
    - 

- DSL
    - 

- Shortcuts
    - 

- Philosophy
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 不支持 异步（协程）
    - Model 类必须有 primary key(s)，即便数据库的 table 实际上是没有的，你也不得不硬指定个主键

- Test
    - [Mypy / Pep-484 Support for ORM Mappings — SQLAlchemy 1.4 Documentation](https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html)
    - logger
        - [Overview — loguru documentation](https://loguru.readthedocs.io/en/stable/overview.html#entirely-compatible-with-standard-logging)
        - [Duplicate logs with SQLAlchemy after intercept · Issue #765 · Delgan/loguru](https://github.com/Delgan/loguru/issues/765)
        - [Engine Configuration — SQLAlchemy 1.4 Documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#configuring-logging)

- Alternatives
    - 

- Description
    - 

## API

- `sa`: SQLAlchemy


## Objects

### `Engine`

- Idea
    - `Connection` manager

- Test
    - only one Engine object should be created for every db server instance

- Installation
    - `sqlalchemy.create_engine() -> Engine`
        - _Parameters_
        - `db_url: str`
        - `echo=False` do not log to stdout

- Fundamentals
    - Engine holds a connection pool `sqlalchemy.pool.Pool`

- API
    - `sqlalchemy.engine.Engine`

- References
    - [Connection Pooling - Multiple processes — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/core/pooling.html#pooling-multiprocessing)
    - [Establishing Connectivity - the Engine — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/tutorial/engine.html)

### Database URL

- Database URL
    - `<dialect>[+<DBAPI>]://<username:password>@<host>[:port]/[dbname][?params]`
    - `<dialect>[+<DBAPI>]://<username:password>@<dsn>/[dbname][?params]`
        - dialect
            - required
            - E.g. `sqlite`, `mysql`, `postgresql`, `oracle`, `mssql`
        - DBAPI
            - optional
            - every dialect has a default DBAPI
        - host
            - required
    - `sqlite+pysqlite:///:memory:`
    - `sqlite://<nohostname>/<path>`
    - `sqlite:///foo.db`  相对路径
    - `sqlite:////absolute/path/to/foo.db`  绝对路径 Unix/Mac
    - `sqlite:///C:\\path\\to\\foo.db`  绝对路径 Windows
    - `sqlite:///C:\path\to\foo.db`
    - `sqlite://`  :memory: 内存
    - `postgresql://scott:tiger@localhost/mydatabase`
    - `postgresql+psycopg2://scott:tiger@localhost/mydatabase`
    - `postgresql+pg8000://scott:tiger@localhost/mydatabase`
    - `mysql://scott:tiger@localhost/foo`
    - `mysql+mysqldb://scott:tiger@localhost/foo`
    - `mysql+pymysql://scott:tiger@localhost/foo`
    - `oracle://scott:tiger@127.0.0.1:1521/sidname`
    - `oracle+cx_oracle://scott:tiger@tnsname`
    - `mssql+pyodbc://scott:tiger@mydsn`
    - `mssql+pymssql://scott:tiger@hostname:port/dbname`
    - `mssql+pymssql://scott:tiger@hostname:port/dbname?schema=dbo`
    - [Engine Configuration — SQLAlchemy 1.4 Documentation](https://docs.sqlalchemy.org/en/14/core/engines.html)

### `Model`

- References
    - [ORM Mapped Class Configuration — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/orm/mapper_config.html)
    - [Relationship Configuration — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/orm/relationships.html)

- Examples
    - [ORM Quick Start — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/orm/quickstart.html)
    - [ORM Configuration — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/faq/ormconfiguration.html)

Table and Column are not good targets for direct subclassing

    - Model
        - 必须有 primary key
            - [ORM Configuration — SQLAlchemy 2.0 Documentation](https://docs.sqlalchemy.org/en/20/faq/ormconfiguration.html#faq-mapper-primary-key)
        - `__table_args__ = {"schema": "dbo"}`
        - `__table_args__ = {"schema": "foo.bar"}`
            - [[SQL Server]] 的 Schema 可通过 Model 指定，也可通过 engine 的 database url 指定
            - [python - sqlalchemy map table from mssql database with "prefix-namespaces" - Stack Overflow](https://stackoverflow.com/questions/46277437/sqlalchemy-map-table-from-mssql-database-with-prefix-namespaces)
            - [support three-part SQL Server schema names / auto-aliasing again (or just document synyonyms ?) · Issue #5364 · sqlalchemy/sqlalchemy](https://github.com/sqlalchemy/sqlalchemy/issues/5364)
