---
aliases:
  - Regular Expression
  - regex
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

## Brief

[正则表达式引擎/风味对比](https://deerchao.cn/tutorials/regex/diffs.html)

[Perl正则表达式超详细教程 | 骏马金龙](https://www.junmajinlong.com/perl/perl_re/)

[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)

[learn-regex/README-cn.md at master · ziishaned/learn-regex](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md)


```bash
Regular Expression
Examples:
    [^\d\D]    匹配 任意字符，包括换行符

Nesting:
    [[:alpha:]]
    [^[:alpha:]]
    ab|cd|efg    二选一 嵌套 二选一
    ((hellow) (world))    分组 嵌套 分组
        $1    第 1 个左括号分组 "hellow world"
        $2    第 2 个左括号分组 "hellow"
        $3    第 3 个左括号分组 "world"

Flags:
    g    GlobalSearch 全局模式 (可以匹配成功无限次)
    i    IgnoreCase 忽略大小写
    m    Multiline 多行模式 (`^`每行开头，`$`每行结尾)
    Singleline 单行模式 (`.`匹配任意字符，包括换行符)

Escape:
    \    \\
    .    \.
    *    \*
    ?
    +
    {
    }
    (
    )
    |
    [    \[
    ]    \]

Grammar:
    # 0. 注释
    (?#comment)

    # 1. 分支
    abcd|efg    二选一（优先级很低）

    # 2. 分组捕获
    (pattern)    自动命名分组
    (?<name>pattern)    命名分组
    (?:pattern)    匹配，但不捕获文本，不会分配组号
    Python & Ruby 反向引用
    \0
    \1
    \2
    \9
    \<9>    许多工具只支持到 $9
    \g<name>    命名分组の反向引用
    Node 反向引用
    $0
    $1
    $2

    # 3. 零宽断言
    (?=exp) 	匹配 exp 的开始位置,
                也可以理解为该位置的后面紧挨 exp.
    (?!exp) 	匹配后面跟的不是 exp 的位置,
                也可以理解为该位置的后面没有紧挨exp.
    (?<=exp) 	匹配 exp 的结束位置,
                也可以理解为该位置的前面紧挨 exp.
    (?<!exp) 	匹配前面不是 exp 的位置,
                也可以理解为该位置的前面没有紧挨 exp.
    P.S.    ?<=exp 与 ?<!exp 的 exp 开头与结尾,
            不允许使用 .+ 等动态的元字符.
    P.P.S    ?=exp 与 ?!exp 的 exp 可随意使用 .+ 等动态的元字符.
    # 锚定
    ^    字符串开头（多行模式时表示 每行开头）
    $    字符串结尾（多行模式时表示 每行结尾）
    \<    单词开头处
    \>    单词结尾处
    \b    单词的边界处（开头或结尾） \bword\b == \<word\>
    \B    单词的非边界处

    # 4. 字符类（POSIX 标准）
    [:alpha:]    [a-zA-Z]
    [:upper:]    [A-Z]
    [:lower:]    [a-z]
    [:digit:]    [0-9]
    [:xdigit:]    [0-9a-fA-F]
    [:alnum:]    [0-9a-zA-Z]
    [:blank:]    空格（空格、制表符）
    [:space:]    \s 空白（空格、制表符、换行符、回车 etc）
    [:punct:]    ASCII 标点符号
    [:graph:]    [:alnum:] + [:punct:]
    [:print:]    打印类字符 [:alnum:] + [:punct:] + space
    [:cntrl:]    控制类字符（ASCII 000-037、177 DEL）

    [=a=]    等价类。a 及其长得像 a 的字符（拉丁文 a 之类的）
    [.xyz.]    排序类
    # 元字符
    .    任意单个字符，默认无法匹配换行符
    [abc]
    [abc]
    [^abc]
    [-]    匹配 -，将 - 放到中括号内的 开头或结尾
    []]    匹配 [，将 [ 放到中括号内的 结尾
    [^]    匹配 ^，将 ^ 放到中括号内的 非开头
    [-abc]
    [abc-]
    [abc^]
    [ab^c]
    [a^bc]
    [abc]]
    []abc^-]    匹配 ] ^ - a b c
    []ab^c-]    匹配 ] ^ - a b c
    []a^bc-]    匹配 ] ^ - a b c
    []^-]    匹配 ] ^ -
    []^]    匹配 ] ^
    [-^]    匹配 - ^
    []-]    匹配 ] -
    # 反斜线序列
    \s    [:space:] 空白
    \S    [^[:space:]] 非空白
    \d    [0-9] 数字
    \D    [^0-9] 非数字
    \w    [_[:alnum:]] == [_0-9a-zA-Z]
    \W    [^_[:alnum:]] == [^_0-9a-zA-Z]
    \n    换行符
    \t    制表符
    \<    单词开头处
    \>    单词结尾处
    \b    单词的边界处（开头或结尾） \bword\b == \<word\>
    \B    单词的非边界处

    # 5. 量词
    ?    {0,1}
    *    {0,}
    +    {1,}
    *?    {0,}? 非贪婪
    +?    {1,}? 非贪婪
    {7}
    {3,7}
    {3,7}?
    {3,}
    {,7}

平衡组/递归匹配:
    平衡组的一个最常见的应用就是匹配HTML.

Compatibility:
    grep
        不支持 \t
        不支持 \d

    sed
        不支持 \d

    BRE 需要转义而 ERE 可以不转义的：
        ERE    BRE
        ?      \?
        +      \+
        {      \{
        }      \}
        (      \(
        )      \)
        |      \|
        我个人推荐一律按 BRE 进行转义，兼容性最强.

    Basic Regular Expression
        基础正则表达式 grep sed VSCode IDE 默认
    Extended Regular Expression
        扩展正则表达式 grep -E, sed -r, awk
    Advance Regular Expression
        各个编程语言的正则实现
        1. Perl    grep -P
        2. Python    import re

```

## Philosophy

- Architecture
    * Match Type 和 Pattern Type 可以自由排列组合

- Match Types
    * 部分匹配
        * 字符串 包含 Pattern
    * 前缀匹配
        - 必须 从字符串开头 从左到右 进行匹配
    * 后缀匹配
        - 必须 从字符串结尾 从右到左 进行匹配
    * 完全匹配
        - Pattern 必须 从头到尾 匹配整个字符串

- Pattern Types
    * Literal
        - 没有任何特殊语法，单纯的字面意思
    * RegExp
        - 简单、灵活、通用
    * Glob
        - 描述路径（层级）会比较方便
    * Env
        - 允许使用环境变量
    * f-string
        - 允许使用变量
    * Property string
        - 搜索属性
        - 一般形为 `property_name:value`
    * Combine
        - 组合其他 pattern
        - E.g. 允许 RegExp Pattern 使用变量
        - E.g. 允许 Glob Pattern 使用变量
    * Conditional
        * Any Pattern Type
        * NOT Conditional
        * NONE Conditional...
        * Conditional AND Conditional
        * Conditional OR Conditional
