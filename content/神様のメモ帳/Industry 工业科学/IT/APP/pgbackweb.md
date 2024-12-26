---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/Database/Backup
github: eduardolat/pgbackweb
---

- Alternatives
    - pgbackrest
    - wal-g

- Fundamentals
    - Backup
        - wrapper of `pg_dump` command
    - Restore
        - download dump file by [[wget]]
        - unzip archive by `unzip`
        - restore database by `psql`

- Pro
    - Easy to use
    - Support zero downtime
        - `pg_dump` does not require shutdown [[PostgreSQL|postgres]]

- Con
    - NOT Support backup encryption
        - `pg_dump` is literal
        - `PBW_ENCRYPTION_KEY` is not for backups
        - `PBW_ENCRYPTION_KEY` is only used for S3 password and postgres password within [[pgbackweb]]'s database
    - NOT Support incremental backup
        - `pg_dump` is full backup
        - 30 GB 需要 1 小时
        - 1.4 TB 大表需要 1 天以上
    - NOT Support S3 client
        - download dump file by [[wget]], which does not support [[alist]] S3 server
        - you should manually restore by `psql` command
