---
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

## mongod

[Sql Or NoSql，看完这一篇你就懂了 - 五月的仓颉 - 博客园](https://www.cnblogs.com/xrq730/p/11039384.html)

- Description
    - MongoDB 是最受欢迎的 NoSQL 数据库

- 流水帐
    - `db` 数据库
    - `collection` 表，对标 SQL 的 `table`
    - mongodb 貌似不允许创建空数据库，你必须创建一个表并插入一条数据，数据库才会真正生成
    - mongodb 貌似不需要 save……不对，应该还是有 session 的，只不过 GUI 都是一次性 session + commit，写代码估计才用得上回调 commit
    - mongodb 用户管理有点奇葩，user 是 db 的特殊的表，创建用户时需要切换到对应 db。这意味着 user 不能跨数据库。反观 MySQL，一个 user 可以管理多个 db

## DSL

```mongodb
Commands:
    show
    use <db_name>
        - 切换数据库/创建数据库
    db

Examples:
    show dbs

```

## 用户

[数据库 - mongodb用户权限管理最全攻略：用户的创建、查看、删除与修改，mongodb入坑之旅 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000015603831)

[mongo用户和权限管理 - 墨天轮](https://www.modb.pro/db/68487)




## mongo

## mongod

```bash

mongod  \
--config="D:\Portable\Figure\scoop\persist\mongodb\bin\mongod.cfg"  \
可选，因为配置里有：
--bind_ip="0.0.0.0" \
--port="27017" \
--dbpath="D:\Portable\Figure\scoop\persist\mongodb\data" \
--logpath="D:\Portable\Figure\scoop\persist\mongodb\log\mongod.log" \
--bind_ip_all
--noauth

安装为服务：
--config="D:\Portable\Figure\scoop\persist\mongodb\bin\mongod.cfg" \
--serviceName MongoDB \
--serviceDisplayName MongoDB \
--serviceDescription "MongoDB Server" \
--install
--remove

net start MongoDB
net stop MongoDB

```

## mongod.cfg

```ini
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: D:\Portable\Figure\scoop\persist\mongodb\data
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\Portable\Figure\scoop\persist\mongodb\log\mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1


#processManagement:

#security:

#operationProfiling:

#replication:

#sharding:

### Enterprise-Only Options:

#auditLog:

#snmp:

```

