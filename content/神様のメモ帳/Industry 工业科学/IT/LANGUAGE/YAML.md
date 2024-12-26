---
tags:
  - flag/MachineLanguage/ExchangeFormat/Hierarchical
  - Label/Industry-工业科学/IT/Language
---

[The Official YAML Web Site](https://yaml.org/)

[YAML Ain’t Markup Language (YAML™) Version 1.2 Revision 1.2.1 (2009-10-01)](https://yaml.org/spec/1.2.1/)

[YAML 语言教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/07/yaml.html)

[YAML parser for JavaScript - JS-YAML](https://nodeca.github.io/js-yaml/)


- Comment `#`
    - 单行注释
    - 行尾注释
- Sequence/List `[]`
- Mapping/Hashes/Dictionary `{}`
- Scalar
    - String
    - Number
        - Integer
        - 浮点数
    - Boolean
    - `null`
    - *日期*
    - *时间*



[[ChatGPT]]
在 YAML 中，一个文件可以包含多个文档。每个文档之间由三条连续的短横线“---”进行分隔，而每个文档则由一个或多个 YAML 标记构成。

一个 YAML 文档指的是在一个 YAML 文件里按照格式进行排版后的、有层次结构的内容。一个 YAML 文件可以包含一个或多个这样的文档。每个文档都可以看做是一个单独的 YAML 数据结构。

一般来说，一个 YAML 文件只会包含一个 YAML 文档，但是有时也会使用多个文档来表示多个对象。 

需要注意的是，当读取 YAML 文件时，可以一次性读取整个文件，并将包含的所有文档解析为相应的数据结构。







它的基本语法规则如下。

> - 大小写敏感
> - 使用缩进表示层级关系
> - 缩进时不允许使用Tab键，只允许使用空格。
> - 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

`#` 表示注释，从这个字符一直到行尾，都会被解析器忽略。

YAML 支持的数据结构有三种。

> - 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
> - 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
> - 纯量（scalars）：单个的、不可再分的值

纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量。

> - 字符串
> - 布尔值
> - 整数
> - 浮点数
> - Null（默认值）
> - 时间
> - 日期


YAML 1.2:
    - Revision 1.2.2      # Oct 1, 2021 *New*
    - Revision 1.2.1      # Oct 1, 2009
    - Revision 1.2.0      # Jul 21, 2009

所以，放心大胆地用 YAML 1.2.1
YAML 是 JSON 的超集。
YAML can therefore be viewed as a natural superset of JSON, offering improved human readability and a more complete information model.
bring YAML into compliance with JSON as an official subset.
Unquoted numeric values are a superset of JSON's numeric production.


```yaml
boolean:
    - TRUE  #true,True都可以
    - FALSE  #false，False都可以
float:
    - 3.14
    - 6.8523015e+5  #可以使用科学计数法
int:
    - 123
    - 0b1010_0111_0100_1010_1110    #二进制表示
null:
    nodeName: 'node'
    parent: ~  #使用~表示null
    empty:    # the empty scalar as “null”
string:
    - 哈哈
    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符
    - newline
      newline2    #字符串可以拆成多行，每一行会被转化成一个空格
date:
    - 2018-02-17    #日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime: 
    -  2018-02-17T15:02:31+08:00    #时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区






# Scalars
type:
  - 'string'
  - "string"
  - 257
  - 0.1
  - true
  - ~  # Null
  - 2001-12-14t21:59:43.10-05:00  # ISO8601 time
  - 1976-07-31  # date
  - 'It\'s right.'

  # 多行字符串可以使用|保留换行符，也可以使用>折叠换行，类似 shell 的行尾「\」
  - this: |
      Foo
      Bar
  - that: >
      Foo
      Bar

  # +表示保留文字块末尾的换行，-表示删除字符串末尾的换行
  - s1: |
      Foo
  - s2: |+
      Foo
  - s3: |-
      Foo

  # 字符串之中可以插入 HTML 标记
  - message: |

      <p style="color: red">
        段落
      </p>
  # { message: '\n<p style="color: red">\n  段落\n</p>\n' }

# 锚点&和别名*，可以用来引用
original:
  age: 18

anchor_dict:
  &key_age age: &value_age 18

use_in_dict:
  key: *key_age
  value: *value_age

anchor_list:
  - &value_e00 0
  - &value_e01 1
  - &value_e02 2

use_in_list:
  - a
  - *value_e01
  - b
  - *value_e02
  - c
  - d
  - e

# `<<` unpacking dict (not support list)
dict: &value_dict
  key01: "hello"
  key02: "world"
  key03: "foo"
  key04: "bar"

unpack_dict:
  key00: 0
  key01: 1
  <<: *value_dict
  key02: 2
  key03: 3


# TL;DR
defaults: &defaults
  adapter:  postgres
  host:     localhost
development:
  database: myapp_development
  <<: *defaults  # `<<` 相当于解包，`*defaults` 此处相当于字典
test:
  database: myapp_test
  <<: *defaults
# 等同于
defaults:
  adapter:  postgres
  host:     localhost
development:
  database: myapp_development
  adapter:  postgres
  host:     localhost
test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
# 再例如
ex:
  - &showell Steve
  - *showell
  # [ 'Steve', 'Steve' ]
var:
  &key_name age: 18 &key_value
quote:
  field: *key_name # "age"
  value: *key_value # 18


# Block sequences
list:
  - anime
  - comic
  - 257
  - ['anime', 'comic', 257]
  -
   - anime
   - comic
   - 257
  - key01: anime
    key02: comic
    key03: 257

# Mappings
dict:
  name: A
  age: 17
  one: {name: 'A', age: 17}

```
