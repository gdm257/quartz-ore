---
aliases:
  - ANSI SQL
  - Standard SQL
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

## Brief

- Idea
    - Manipulate **NDArray based on Muti-Dimensional Vector**
        - [[numpy]]

- References
    - [关系数据库概述 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1177760294764384/1179613436834240)
    - [那些年我们追过的 MySQL 规范 | CHEGVA](https://chegva.com/5798.html)
    - [树形菜单的实现方式 - 掘金](https://juejin.cn/post/7272628880178855975)

- Version
    - [春眠不觉晓，SQL 知多少？ - 知乎](https://zhuanlan.zhihu.com/p/110882130)

- Idea
    - [[SQL|Standard SQL]] 虽然对 RDBMS 方言没什么约束力，但在数据类型方面则是代表着极致的兼容性——所有 RDBMS 都会实现 [[SQL|Standard SQL]] 规定的数据类型

- Fundamentals
    - 关系代数
        - 操作符
            - Selection 选择
            - Projection 投影
            - Union 合并
            - Intersection 交
            - Difference 差
            - Cartesian Product 笛卡尔积
            - Natural Join 自然连接
            - Renaming 重命名
        - [【动画解释】关系数据库de关系代数小记 - 知乎](https://zhuanlan.zhihu.com/p/422844408)
    - 表关系
        - 一对一
            - 本质是种 特殊的多对一
            - Foreign Key 实现
            - 普通字段 实现
            - 中间表 实现
            - E.g. `身份证号` & `person` 是一对一关系
        - 多对一 aka 一对多
            - 本质是种 特殊的多对多
            - Foreign Key 实现
            - 普通字段 实现
            - 中间表 实现
            - E.g. `身份证号` & `班级` 是多对一关系
            - E.g. [[静读天下]] の `book` & `分类`
            - [为什么大多数互联网公司不用外键约束 - 知乎](https://zhuanlan.zhihu.com/p/205619095)
            - [项目开发过程中要不要使用外键 - 知乎](https://zhuanlan.zhihu.com/p/361598771)
        - 多对多
            - 中间表 实现
            - E.g. [[静读天下]] の `book` & `tag`
            - E.g. `身份证号` & `课程` 是多对多关系
            - [数据库设计中如何处理多对多关系 - 墨天轮](https://www.modb.pro/db/436353)
            - [多对多关系](https://help.claris.com/archive/help/18/fmp/zh/index.html#page/FMP_Help/many-to-many-relationships.html)
            - [数据库怎么设计多对多的数据表 - 知乎](https://zhuanlan.zhihu.com/p/51375393)
            - [多对多关系指导 - Power BI | Microsoft Learn](https://learn.microsoft.com/zh-cn/power-bi/guidance/relationships-many-to-many)
            - [管理多对多关系的最佳实践 - Amazon DynamoDB](https://docs.aws.amazon.com/zh_cn/amazondynamodb/latest/developerguide/bp-adjacency-graphs.html)
    - 表连接
        - 自然连接
            - 就是那种最简单的 `WHERE`，不涉及其他 table
        - 外连接
            - 左外连接
            - 右外连接
            - 全外连接
        - 内连接
            - 等值连接
            - 自连接（自然连接）
                - [请问数据库中的自连接怎么理解？ - 知乎](https://www.zhihu.com/question/290782386)
                - [SQL 自连接的魅力\_披头\_InfoQ写作社区](https://xie.infoq.cn/article/1950bb2bf2f57e7c6f86b9032)
        - 交叉连接
        - [【动画解释】关系数据库de关系代数小记 - 知乎](https://zhuanlan.zhihu.com/p/422844408)
        - A "**foreign key**" just means that this column will have the **key** to identify a row in a **foreign** table
        - [Create Connected Tables - SQLModel](https://sqlmodel.tiangolo.com/tutorial/connect/create-connected-tables/)

- Pholosophy
    - [MySQL 避「坑」指南 —— 你能设置出正确的主键吗？ - 掘金](https://juejin.cn/post/7240872478780178491)
    - [MySQL——百亿大表拆分实践 - 掘金](https://juejin.cn/post/7069231909179490341)
    - Model
        - Hierachical Model
        - Network Model
        - Relational Model
        - Not Only SQL Model
            - Key-value Model
            - Document Model
    - Denormalized Model（扁平化模型）
        - 将复杂的数据结构转化为简单的表格
    - Normalized Model（规范化模型）
        - 1NF
            - 关系R 的所有属性均为简单属性，即每个属性不可再分
        - 2NF
            - 关系R 满足第一范式，且每个非主键字段完全依赖于主键
        - 3NF
            - 关系R 满足第二范式，且非主键字段之间不存在依赖关系
            - 一个基本的关系型数据库要满足 1NF
            - 一个完整的关系型数据库要满足 3NF
    - Transaction
        - Atomicity 原子性
        - Consistency 一致性
        - Isolation 隔离性
        - Durability 持久性
    - 约束
        - `Primary Key` 肯定得加
        - `Foreign Key` 阿里直接禁用
        - `CHECK` 别加
        - `NOT NULL` 别加。没收益，还影响兼容性
        - `DEFAULT` 别加。没必要
        - `UNIQUE` 只能说加不加都行，看情况

- Pro
    - table 本身简单易懂

- Con
    - table 之间的关系很复杂，理解困难，但这正是 RDB 的灵魂所在
    - 「数据库」本质是一种通用的「序列化」手段，但并不是所有「数据结构」「数据体系」都适合序列化为「关系模型」「表及其关系」，例如「图」处理起来就很复杂
    - [【译】SQL 就这？我们能做得更好 - 知乎](https://zhuanlan.zhihu.com/p/462564530)

- Description
    - SQL 之于 [[MySQL]]/[[PostgreSQL]]/[[SQLite]]，就好比 [[Markdown]] 之于 CommonMark/GFM
    - SQL 采用了关系模型。数据库按照数据结构来组织、存储和管理数据，实际上，数据库一共有三种模型：
        - 层次模型
        - 网状模型
        - 关系模型
    - 100% 严格遵守 SQL 标准的那是一个没有，大家都对 SQL 语法进行了扩展，造成了各种各样的 SQL 方言
    - 即便如此，标准 SQL 也是值得学习的，因为所有 SQL 数据库都支持标准 SQL。也就是说，如果只使用标准 SQL，完全可以做到「数据库无关」（但这肯定不是最具性价比的选择，反而可能严重影响开发效率，需要根据实际情况权衡，这时候 ORM 的价值就体现出来了）。其次，标准 SQL 涵盖了最重要、最核心的功能，不得不学。


## DSL

- References
    - [SQL by SQLite](file:///D:/Portable/scoop/apps/zeal/current/docsets/SQLite.docset/Contents/Resources/Documents/sqlite/lang.html)

- **_C_** RUD
    - C
        - `VALUES` (new)
        - `INSERT INTO`
        - `INSERT INTO SELECT` (new)
        - `SELECT INTO` (new)
        - `CREATE` (new; support field, table, scheme, db, High-D level)

- C **_RUD_**
    - New
        - `FROM` (new)
        - `USE` (new)
    - Process
        - `WHERE` (Pipeline i.e. foreach)
            - number
                - `>`
                - `<`
                - `>=`
                - `<=`
                - =
                - `<>`
            - string
                - Start with
                - End with
                
                - Contain
                - Not Contain
                
                - `LIKE`
            
            - Is Empty
            - Not Empty
            
            - Is
            - Is Not
            
            - `BETWEEN`
            
            - `IN`
            - `JOIN`
            
            - `AND`
            - `OR`
            - `NOT`
            
            - `GROUP BY` (2D Array -> 3D Array)
                - `HAVING`
            - `ORDER BY`
            
            - `TOP`
            - Tail
            - `LIMIT`
            - `OFFSET`
    - R
        - `SELECT`
            - `UNION`
            - Pipeline thinking
            - [[Excel]] function thinking
            - [[Excel]] expression thinking
    - U
        - `UPDATE`
        - `ALTER` (support field, table, scheme, db, High-D level)
    - D
        - `DELETE`
        - `DROP` (support field, table, scheme, db, High-D level)
