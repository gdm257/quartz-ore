---
tags:
- flag/License/BSD
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Network
scoop: redis
---

## Brief

- References
    - [Redis command arguments | Redis](https://redis.io/docs/reference/command-arguments/)

- Installation
    - `scoop install redis`

- Version
    - 

- Idea
    - [[Redis|Redis]] Client

- Configuration
    - 

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

- Shortcuts
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - [[redis-cli|redis client]] 通过 [[#DSL]] 来与 [[redis-server]] 交互，从而 CRUD

- Architecture
    - 

- Pro
    - 

- Con
    - 

- Test
    - 

- Alternatives
    - 更推荐用 [[iredis]]，支持语法高亮、命令补全 etc

- Description
    - 


## DSL

- Description
    - DSL 支持 函数
    - 命令 大小写不敏感.
    - 命令 总数好几百，记不完的.
    - 命令 返回结果只针对当前 DB，除非特别声明.
    - `<key>` 指键名，是无引号包裹的字符串.
    - `<db>` 指 database number，是一个整数，从 0 开始索引.
    - `<directive>` 指 redis 内置指令.

- Commands
```redis
HELP <command>
    * 查看命令语法.
CLEAR
    * 清屏.
PING [string]
    * 测试连通性.
    * 成功则输出 `<string>`，无入参则输出 `PONG`.

CLIENT
    ID
    INFO
    KILL
SHUTDOWN
FLUSHDB
FLUSHALL
SAVE
BGSAVE

SELECT <db>
    * 切换到 db.
DBSIZE
    * 当前 DB 的键值对总数.
KEYS <glob-pattern>
    * 当前 DB 满足条件的 keys.
    * glob-pattern 大小写敏感.
    * E.g.
    * KEYS *    时间复杂度 O(n) 慎用
    * KEYS ????
EXISTS <key>...
    * 当前 DB 是否存在 keys.
    * `1` (int): 至少存在一个.
    * `0` (int): 全都不存在.
TYPE <key>
GET <key>
SET <key> <value>
TTL <key>
    * 查看 key 生命周期.
    * `-1` 永不过期.
PERSIST <key>
    * 永不过期.
EXPIRE <key> <seconds>
RENAME <key> <new_key>
DEL <key>...
MOVE <key> <db>
GETDEL <key>
GETSET <key> <value>

HLEN <key>
HKEYS <key>
HVALS <key>
HGET <key> <field>
HDEL <key> <field>
    HSET <key> <field_value>
```
