---
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

- Ecosystem
    - `pipx install litecli`

4 种存储类：

- NULL
- INTEGER    无符号整型
- REAL
- TEXT    字符串（UTF-8 UTF-16BE UTF-16LE）
- BLOB    目测直接存储 bytes

SQLite 的存储类稍微比数据类型更普遍。INTEGER 存储类，例如，包含 6 种不同的不同长度的整数数据类型。

每个存储在 SQLite 数据库中的值都具有一个存储类



5 个亲和类型 & 字段声明类型：

- INTEGER
    INT
    INTEGER
    TINYINT
    SMALLINT
    MEDIUMINT
    BIGINT
    UNSIGNED BIG INT
    INT2
    INT8
- REAL
    REAL
    DOUBLE
    DOUBLE PRECISION
    FLOAT
- TEXT
    CHARACTER(20)
    VARCHAR(255)
    VARYING CHARACTER(255)
    NCHAR(55)
    NATIVE CHARACTER(70)
    NVARCHAR(100)
    TEXT
    CLOB
- NUMERIC
    NUMERIC
    DECIMAL(10,5)
    BOOLEAN
    DATE
    DATETIME
- NONE
    BLOB
    no datatype specified

为了最大化SQLite和其它数据库引擎之间的数据类型兼容性，SQLite提出了"类型亲缘性(Type Affinity)"的概念。在表字段被声明之后，SQLite都会根据该字段声明时的类型为其选择一种亲缘类型，当数据插入时，该字段的数据将会优先采用亲缘类型作为该值的存储方式，除非亲缘类型不匹配或无法转换当前数据到该亲缘类型，这样SQLite才会考虑其它更适合该值的类型存储该值。

字段的亲缘性是根据该字段在声明时被定义的类型来决定的

当数据插入时，该字段的数据将会优先采用亲缘类型作为该值的存储方式。



SQLite中的数据类型被视为数值的一个属性。因此对于一个数据表列而言，即便在声明该表时给出了该列的类型，我们在插入数据时仍然可以插入任意类型，比如Integer的列被存入字符串'hello'。针对该特征唯一的例外是整型的主键列，对于此种情况，我们只能在该列中存储整型数据。

SQLite并没有提供专门的布尔存储类型，可以使用整型的 0 和 1 代替。
SQLite也同样没有提供专门的日期时间存储类型，代替方法
    TEXT: "YYYY-MM-DD HH:MM:SS.SSS"
    REAL: 以Julian日期格式存储
    INTEGER: 以Unix时间形式保存数据值