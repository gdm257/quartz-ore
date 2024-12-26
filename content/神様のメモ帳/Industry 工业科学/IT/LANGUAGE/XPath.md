---
tags:
  - flag/LANGUAGE/HTML
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

## Brief

- References
    - [xpath cover page - W3C](https://www.w3.org/TR/xpath/)
    - [XML Path Language (XPath) 3](https://www.w3.org/TR/xpath-3/)
    - [XQuery and XPath Data Model 3](https://www.w3.org/TR/xpath-datamodel-3/)
    - [XPath 教程](https://www.w3school.com.cn/xpath/index.asp)    
    - [XPath | MDN](https://developer.mozilla.org/zh-CN/docs/Web/XPath)

- Examples
    - right strip `.zip` for `text()`
        - `substring-before(//a[@href]/text(), '.zip')`
    - attribute value contains string
        - `//a[@href[contains(., '.zip')]]`

- Edition
    * XPath 3.1 为目前 2022.10 最新版本.
    * XPath 3.1 是 3.0 的超集.
    * XPath 3.0 是 2.0 的超集.
    * 因此直接看 XPath 3.1 的文档即可.
    * XPath 3.0 只要 function name 不是 `map` `array`，就可以直接当 3.1 的表达式来用.
    * XPath 2.0 只要 function name 不是 `function` `namespace-node` `switch`，就可以直接当 3.1 的表达式来用.

- Idea
    - 查询语言，针对 XDM E.g. [[XML]] [[HTML]]

- Users
    - [[xidel]]

- Philosophy
    * XPath 是一门表达式语言 Expression Language
        - XPath 返回值取决于节点类型
    - XPath 只存在单个表达式
        - XPath 不存在「语句」的概念，不存在多个逻辑语句，更没有赋值语句
        - XPath 无论多复杂，最终都会 fallback 为「单个表达式」
    * XPath 被设计为内嵌到宿主语言 Host Language
        - E.g. XSLT or XQuery
    * Case-sensitive

- Objects
    * Expression 由 keywords, symbols, operands 组成
        * Operand 是一个 expression
            * XPath 3.1 allows expressions to be nested with full generality
        - XPath Expression 没有严格的分类，网上各种文章所说的「绝对路径表达式」「相对路径表达式」「通配符表达式」etc 它们只是为了帮助理解和使用。语法解析器只认 token，不会有什么所谓的表达式分类

- Fundamentals
    - 想象一下，Expression 会被解析为一个个 [[Where-Object]]，将所有 Nodes 作为输入，依次穿过这些 Pipelines，得到剩下的 Nodes

# OOP

## XPath 节点

- Objects
    1. 元素节点 `<el>`
    2. 属性节点 `@<attr>`
    3. 文本节点 `<function>()`
    4. 命名空间节点 `namespace-uri()`
    5. 处理指令节点 `processing-instruction()`
    6. 注释节点 `comment()`
    7. 根节点 `/`
        - 树的根被称为文档节点或者根节点

- 节点关系
    1. 长辈（Ancestor）
        - Parent 也算 Ancestor
    2. 父（Parent）
    3. 同胞（Sibling）
    4. 子（Children）
    5. 后代（Descendant）
        - Children 也算 Descendant


# FP

## Function

- 节点函数
    * 在 predicate 里使用这些函数，可理解为会自动调用返回对象的 `.to_string()` `.to_int()` 方法
    - `last()`: 返回节点集合中最后一个节点的位置
    - `position()`: 返回节点集合中当前节点的位置
    - `id(string) -> object`: 返回具有指定 id 值的第一个节点

- 提取型函数
    - `text()`: element inner content
    - `count(node-set)`: 返回节点集合中节点的数量
    - `sum(node-set)`: 返回节点集合中所有节点的数值之和
    - `round(number)`: 返回最接近 number 的整数
    - `floor(number)`: 返回小于或等于 number 的最大整数
    - `ceiling(number)`: 返回大于或等于 number 的最小整数
    - `name()`: 返回节点的名称
    - `local-name()`: 返回节点的本地名称
    - `namespace-uri()`: 返回节点的命名空间 URI
    - `normalize-space(string)`: 返回字符串的副本，其中所有连续的空白字符被替换为一个空格
    - `translate(string, abc, XYZ)`: 返回字符串的副本，其中所有在第二个字符串中出现的字符都被替换为第三个字符串中对应的字符
    - `substring-after(string, pattern)`: 返回 `string` 字符串中 `pattern` 字符串之后的部分
    - `substring-before(string, pattern)`: 返回 `string` 字符串中 `pattern` 字符串之前的部分
    - `substring()`
    - `string-length(string)`: 返回字符串的长度

- 布尔函数
    - `true()`
    - `false()`
    - `not(expr)`
    - `boolean(object)`
        - 如果对象是布尔值，则返回对象。否则，返回 false
    - `starts-with(@id, "post")`
    - `contains(text(), "hello")`
        - E.g. `div[contains(text(), "abc")]`
        - E.g. `div[contains(string01, string02)]`
    - `lang(string)`
        - 如果节点的语言属性等于字符串，则返回 true
    - `matches()`
        - E.g. `matches(string, regexp)`


## Operator

- 表达式运算符
    - `|`
        - Expression Union
        - 表达式の并集
        - `//div | //tr` All "div" elements and all "tr" elements

- 节点运算符
    - `*`
        - `*`: 所有元素节点
        - `@*`: 所有属性节点
    - `标签名`
        - E.g. `span` `div`
        - 你可以将「标签名」理解为「零元运算符」，标签名同时也是一个「表达式」
    - `.` this node
    - `..` parent node
    - `@`
    - `::`
        - E.g. `/element01/<axes_name>::element03`
    - `[]` similar to [[SQL]] where
    - `/` child
    - `//` descendant

- 逻辑运算符
    - `and`: 逻辑与
    - `or`: 逻辑或

- 比较运算符
    - `>`
    - `<`
    - `>=`
    - `<=`
    - =
    - `!=`
        - 貌似不管用，可用 `not()` 函数代替

- 数值运算符
    - `+`
    - `-`
    - `*`
    - `div`
    - `mod`


### `[Predicate]`

- References
    - [Xpath 轴 函数 谓语](https://lzc6244.github.io/2019/12/16/Xpath-%E8%BD%B4-%E5%87%BD%E6%95%B0-%E8%B0%93%E8%AF%AD.html)

- Idea
    - 相当于 `.where()` 方法
    - 相当于 [[Python|Python]] 列表推导式
    - 我管叫 Filter Expression
    - 与其说是谓语，不如说是形容词（定语）

- Fundamentals
    - foreach + if == Pipeline

- Philosophy
    - 支持 多谓语
        - E.g. `//div[@class][@href]`
        - 可想象成 Pipeline，结果取交集

```xpath
//track[not(trackNum)]    无 trackNum 子标签的 track
/bookstore/book[1]
/bookstore/book[last()]
/bookstore/book[last()-1]
/bookstore/book[position()=2]
/bookstore/book[position()<3]
/bookstore/book[position()!=4]
//title[@lang]
//title[@lang='eng']
//title[not(@lang)]
/bookstore/book[price>35.00]
    All "book" elements whose child element "price" is large than 35.00
/bookstore/book[price>35.00]/title
    All "title" elements which satisfy some conditions
/bookstore/book[price>35]/price
//div[contains(@class,"Number Skill")]
    All div elements including class stared with "Number Skill" E.g. <div class="Number Skill 007"></div>
//div[contains(@href, "forum-")]
    All div elements whose @href includes string "forum-" ("forum-" in @href)
//div[start-with(@class, "head abc")]
    All div elements whose @class start with string "head abc" (re.search('^head abc', @class))
```


### Axes::

|      轴名称       |         表达式         |                    描述                    |
| ----------------- | ---------------------- | ----------------------------------------- |
| ancestor          | ./ancestor::*          | 选取当前节点的所有先辈节点（父、祖父）       |
| ancestor-or-self  | ./ancestor-or-self::*  | 选取当前节点的所有先辈节点以及节点本身       |
| descendant        | ./descendant::*        | 返回当前节点的所有后代节点（子节点、孙节点） |
| child             | ./child::*             | 返回当前节点的所有子节点                    |
| parent            | ./parent::*            | 选取当前节点的父节点                        |
| following         | ./following::*         | 选取文档中当前节点结束标签后的所有节点       |
| following-sibling | ./following-sibling::* | 选取当前节点之后的兄弟节点                  |
| preceding         | ./preceding::*         | 选取文档中当前节点开始标签前的所有节点       |
| preceding-sibling | ./preceding-sibling::* | 选取当前节点之前的兄弟节点                  |
| self              | ./self::*              | 选取当前节点                               |
| attribute         | ./attribute::*         | 选取当前节点的所有属性                      |
