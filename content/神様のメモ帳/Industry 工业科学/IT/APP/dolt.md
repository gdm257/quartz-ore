---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
    - flag/APP/Network
---

## Brief

[dolthub/dolt: Dolt – Git for Data](https://github.com/dolthub/dolt)

[Dolt Documentation](https://docs.dolthub.com/introduction/what-is-dolt)

[DoltHub Home | DoltHub](https://www.dolthub.com/)

[So You Want Git for Data? | DoltHub Blog](https://www.dolthub.com/blog/2020-03-06-so-you-want-git-for-data/)

[后续开发计划 Roadmap - Dolt](https://docs.dolthub.com/other/roadmap)


- Installation
    - `docker pull dolthub/dolt:latest`
    - `scoop install dolt`
    - Go binary release

- Configuration
    - `~/.dolt` 用户级 dolt 配置。对标用户级 git 配置
    - `.dolt` 项目级 dolt 配置。对标 `.git` 文件夹

- Description
    - dolt 是一个 version control SQL database
    - dolt 做到了 [Git for Data](https://www.dolthub.com/blog/2020-03-06-so-you-want-git-for-data/)
    - dolt 运行为 sql-server 时，对外表现为一个 MySQL Server，目测版本为 MySQL 8.0，反正不是 MySQL 5.7
    - dolt 提供了 table 级别的 Git 版本控制，用官方的话说，dolt 就像 Git 和 MySQL 生出的孩子
    - dolt 命令行实现了非常多与 git 相同的子命令，并且有着相同的语法
    - table of dolt == file of git
    - git 子命令所需要的 file 参数，在 dolt 子命令里被替换为 table。例如 `git add file01 file02 file03` 对标 `dolt add table01 table02 table03`
    - dolt 的版本控制是 table 级别，table 之于 dolt，file 之于 git，理解这点非常重要
    - DoltHub 是一个分享 dolt 数据库的平台，对标 GitHub、GitLab，GitHub 的仓库相当于 DoltHub 的数据库
    - DoltLab 是自建的 DoltHub


## CLI

```bash
dolt command
Usage:
    dolt <subcommand> [args]

Examples:
    dolt sql-server
    dolt sql-client
    dolt config -h
    dolt init --name gdm257 --email 257@gdm.anonaddy.com
    dolt config --local --set user.name gdm257
    dolt config --local --set user.email gdm257@gdm257

Subcommands:
    # 兼容 MySQL 8.0.11
    sql-server
        -H --host "localhost"
            * E.g. "0.0.0.0"
        -P --port 3306
        -r --readonly
        -l --loglevel "info"
    sql-client
    sql
        * 执行 SQL 语句
    # dolt
    docs
    version
    ls
    schema
    table
        import
            -c --create-table <table> <file>
            -u --update-table <table> <file>
            -r --replace-table <table> <file>
            - 导入文件里的数据到 table
            - 支持导入 JSON/CSV/Parquet
            - 支持导入 MySQL
            - 支持导入 Postgres
            - 支持导入 Pandas Dataframe
            - 支持导入 Spreadsheets
        export
        rm
        mv
        cp
    backup
    dump
    migrate
    login
    creds
    read-tables
    constraints
    # 兼容 git
    config
    init
        * 自带 2 个 database: <folder_name>, information_schema
    clone
    add
    clean
    commit
    revert
    status
    log
    diff
    tag
    branch
    checkout
    reset
    merge
    merge-base
    cherry-pick
    remote
    clone
    fetch
    pull
    push
    filter-branch
    blame
    gc
    conflicts

```


## docker-compose

```yaml
version: 3
services:
    dolt:
        image: dolthub/dolt:latest
        restart: always
        # entrypoint: ["tini", "--", "/usr/local/bin/dolt"]
        commands: [
            "sql-server",
            "--host", "0.0.0.0",
            "--port", "3306",
        ]

```


## sql

[Supported Clients - Dolt](https://docs.dolthub.com/sql-reference/supported-clients)

[MySQL兼容性 SQL Language Support - Dolt](https://docs.dolthub.com/sql-reference/sql-support)

[后续开发计划 Roadmap - Dolt](https://docs.dolthub.com/other/roadmap)

[Support PostgreSQL · Issue #4840 · dolthub/dolt](https://github.com/dolthub/dolt/issues/4840)


dolt 说是能当 MySQL Server，但实际上 SQL 的各种 feature 都不支持，更别说 MySQL 专有的 feature 了。你实际用用就懂了，一堆报错，全都是不支持的 keyword 和 statement。但偏偏 sql-server 还是数据的主要来源（另一个是 import）。

一句话，replicate 我不知道，但 sql server 简陋到根本没法用，别说 ORM，常见的手写 CURD 都不支持，这还怎么用？


## import data

[Importing Data - Dolt](https://docs.dolthub.com/guides/import)






## replica

[MySQL to Dolt Replication - Dolt](https://docs.dolthub.com/guides/binlog-replication)

[Dolt Binlog Replication Preview | DoltHub Blog](https://www.dolthub.com/blog/2023-02-17-binlog-replication-preview/)


dolt 可作为已存在的 MySQL 或 MariaDB 的 replica（复制品），也就是说，对外，仍然由 MySQL 或 MariaDB 提供服务，只是将 dolt 作为支持版本控制的备份


## Git For Data

[Git For Data - Dolt](https://docs.dolthub.com/introduction/getting-started/git-for-data)


