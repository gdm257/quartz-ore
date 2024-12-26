---
aliases:
  - redis-server
tags:
  - flag/MachineLanguage/Query
  - flag/License/BSD
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network
  - Label/Industry-工业科学/IT/Language
scoop: redis
ports:
  - "6379"
protocol-scheme:
  - redis
  - rediss
---

## Brief

- References
    - [Documentation | Redis](https://redis.io/docs/)
    - [RedisJSON | Redis](https://redis.io/docs/stack/json/)

- Idea
    * redis 是一个 key-value 型 NoSQL 数据库.

- Configuration
    - 不支持 自动搜索配置文件

- DSL
    - 见 [[redis-cli#DSL]]

- Objects
    - redis 数据库结构极其简洁 `List[Dict[str, Value]]`
        - db0
            foo: value
            bar: value
            ...
        - db1
        - db2
        - ...
    - Value datatype
        - Strings: String
            - 最多能存储 512 MB
            - Literal
                * 不用引号包裹
                * Doubly-quoted Escape Sequences
                    - `\\`
                    - `\"`    双引号"
                    - `\t`
                    - `\n`
                    - `\r`
                    - `\a`    alert
                    - `\b`    backspace
                    - `\xhh`    any ASCII character
                * Single-quoted Escape Sequences
                    - `\'`    单引号'
                    - `\\`
        - Lists: List[String]
        - Sets: Set[String]
        - Sorted sets: OrderedSet[String]
        - Zset
        - Hashes: Dict[String, String]
        - Bitmaps
        - Bitfields
        - Streams
        - Geospatial
        - HyperLogLog
        - 自定义数据类型

- Con
    - 不支持 懒加载
        - Redis 初始化时会一次性加载所有持久化数据，容易撑爆内存，虽然能够通过 LRU etc 策略丢弃部分数据来释放内存
        - 不支持 超大容量，毕竟物理内存有限

- Test
    - redis 学习的关键在于 部署、数据类型、REPL、常用内置命令、函数用法.
