---
aliases:
  - postgres
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
frontmatter-as-page:
  - pg-extensions
scoop: postgresql14
TLS-ALPN:
  - postgresql
database:
  - postgres
  - template0
  - template1
  - pg_catalog
  - pg_database
db-tablespace:
  - pg_default
  - pg_global
db-schema:
  - public
db-role:
  - pg_database_owner
  - pg_read_all_data
  - pg_read_all_settings
  - pg_read_all_stats
  - pg_read_server_files
  - pg_write_all_data
  - pg_write_server_files
  - pg_monitor
  - pg_stat_scan_tables
  - pg_signal_backend
  - pg_execute_server_program
---

- References
    - [PostgreSQL now top developer choice ahead of MySQL, according to massive new survey • DEVCLASS](https://devclass.com/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/)
    - [Stack Overflow Developer Survey 2023](https://survey.stackoverflow.co/2023/)

- Ecosystem
    - [dhamaniasad/awesome-postgres](https://github.com/dhamaniasad/awesome-postgres)
    - [eduardolat/pgbackweb](https://github.com/eduardolat/pgbackweb)
    - [Pigsty](https://pigsty.io/zh/)
    - [electric-sql/pglite](https://github.com/electric-sql/pglite)
    - `pipx install pgcli`

- Version
    - 如同很多应用对 [[MySQL]] 要求的最低版本是 5.7，一般要求 [[PostgreSQL]] 最低版本为 10.x 或 12.x
    - 目前 2023 推荐 14.x
        - [PostgreSQL: Versioning Policy](https://www.postgresql.org/support/versioning/)
        - [strapi/strapi: 🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript/TypeScript, fully customizable and developer-first.](https://github.com/strapi/strapi)
        - [chartbrew/chartbrew: Open-source web platform used to create live reporting dashboards from APIs, MongoDB, Firestore, MySQL, PostgreSQL, and more 📈📊](https://github.com/chartbrew/chartbrew)

- Idea
    - RDBMS

- Objects
    - `Tablespace`
        - 让 tables 存储在不同的物理磁盘中
        - `Server - Database - Schema - Table` 负责逻辑上的使用，`Tablespace` 是物理上的存储
        - tables 默认存储到默认表空间中，default tablespace 一般对应着数据库文件夹
    - `Stored Procedure`
        - 可维护性 0
        - 可测试性 0
        - 可重用性 0
        - 可扩展性 0
        - 可移植性 0
        - 阿里巴巴 Java 开发手册明令禁止使用存储过程
        - 一句话，别用，老老实实代码里写业务
        - 本质上，存储过程 相当于将一堆 SQL 语句封装为一个函数
        - 存储过程是少有的 提倡别用、实际没人用、用了反而更糟、人人喊打的历史垃圾
        - [存储过程真的很难么？ - V2EX](https://www.v2ex.com/t/578730)
        - [为什么阿里巴巴Java开发手册里要求禁止使用存储过程？ - 知乎](https://www.zhihu.com/question/57545650)

- Con
    - table max size: 32 TB
    - table max records: 4,294,967,295
    - table max fields: 1600
    - field max size: 1 GB

```postgresql
Data Types:
    太他妈多了，上百种数据类型，没有 ORM 怎么活
    Number:
        smallint
        integer
        bigint
        decimal
        numeric
        real
        double precision
        smallserial
        serial
        bigserial
    Currency:
        money
    String:
        character varying(n), varchar(n)
        character(n), char(n)
        text
    Date:
        timestamp without time zone
        timestamp with time zone
        date
        time without time zone
        time with time zone
        interval
    Bool:
        boolean
    Enum:
        enum
    几何:
        point
        line
        lseg
        box
        path
        path
        polygon
        circle
    Network Address:
        cidr
        inet
        macaddr
```
