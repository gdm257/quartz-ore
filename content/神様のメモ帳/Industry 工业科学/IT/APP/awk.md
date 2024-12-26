---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text
commands:
  - awk
functions:
  - exit()
  - toupper()
  - tolower()
  - gensub(pattern, repl, how, string)
  - sub()
  - substr()
  - gsub()
  - match()
  - length()
  - system()
  - split()
  - sqrt()
  - rand()
vars:
  - $0
  - $<n>
  - $<n+1>
  - FS
  - RS
  - NF
  - NR
  - FNR
  - FILENAME
  - OFS
  - ORS
  - OFMT
  - RT
  - IGNORECASE
  - CONVFMT
  - ARGV
  - ARGC
  - ENVIRON
---

## Description

[精通awk系列文章 | 骏马金龙](https://www.junmajinlong.com/shell/awk/index/)

[awk 命令，Linux awk 命令详解：文本和数据进行处理的编程语言 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/awk.html)

[The GNU Awk User’s Guide](https://www.gnu.org/software/gawk/manual/gawk.html)

[精通awk系列(9)：修改字段或NF引起的$0重新计算 | 骏马金龙](https://www.junmajinlong.com/shell/awk/field_modify/)

[learnbyexample/Command-line-text-processing: From finding text to search and replace, from sorting to beautifying text and more](https://github.com/learnbyexample/Command-line-text-processing)

[awk当中使用外部变量_awk_bioinfo的博客-CSDN博客_awk传入外部变量](https://blog.csdn.net/qq_36608036/article/details/100708815)


- grep sed awk 文本处理三剑客.
- grep 一般用来过滤文本.
- sed 一般用来替换文本.
- awk 一般用来过滤、替换、格式化文本.
- awk 是一个命令行程序.
- awk 是一门文本处理语言.
- awk 脚本通过 awk 命令执行.
- awk 命令的 stdout 就是执行 awk 脚本所产生的 stdout，类比 python 脚本的 stdout E.g. `awk 'BEGIN {print 1/4}'` 的 stdout 为 `0.25`
- 看啥文章，都不如直接看 `man awk`，这就是我看了几十篇高质量文章之后再 [[RTFM]] 的感想。看点极简的入门文章、RTFM 大致看懂，再找些实践型文章


## CLI

```bash
awk command
Usage:
    awk [options] [--] '<script>' [<var>"="<value>]... [files]
    awk [options] -f <scriptfile> [<var>"="<value>]... [files]
        * 如果不指定 file(s)、无 stdin，则进入交互模式

Options:
    -f --file <script-file>
        * 读取 awk 脚本
    -F --field-separator <str-or-regexp>
        * 自定义 Field Separator
    -v --asign <var>"="<value>
        * 赋值一个自定义变量，可多次指定

```

## Script

```bash

Script:
    - 格式为 `pattern { action statements } ...`
    - 默认为 `{ print }`
    - script 用于处理 Records
    - awk 会对每个 Record，都执行所有 `pattern {actions}`
    - 可利用空格、换行增强可读性，空白会被自动压缩、拼接
    - pattern 可省略，代表无需判断直接执行
    - E.g.
    - {...}
    - BEGIN {...} {...} END {...}
    - BEGIN { FS = \t } {print $0} END {}
    - BEGINFILE {print "处理文件"} {print}
    - $9 !~ /regexp/ {...}

Actions:
    - assignment statement
    - conditional statement (if 语句)
    - looping statement (for 语句)
    - operators statement
    - control statement
    - input/output statement
    - 类似其他语言的语句，赋值、分支、循环、函数、调用、运算符 etc

Patterns:
    - BEGIN
        - awk 启动时执行
        - 常用于简单计算、统计、添加表头、自定义变量（相当于 -v）
    - END
        - awk 退出前执行
        - 常用于简单计算、统计
        - 例如 END 之前只赋值数组，END 才产生 stdout，实现统计
    - BEGINFILE
        - 每读取一个文件之前执行
    - ENDFILE
        - 读取完一个文件之后执行
    - /regular expression/
        - egrep 风味の正则表达式
        - /regular expression/
        - something ~ /regular expression/
            - $0 ~ /regexp/
            - "foo" $1 $3 "bar" ~ /regexp/
        - something !~ /regular expression/
            - $2 !~ /regexp/
    - relational expression
        - pattern && pattern
        - pattern || pattern
        - ! pattern
        - pattern ? pattern : pattern
        - (pattern)
            - 小括号，目测是分组，将关系表达式化为一个 pattern
        - 自由组合以上表达式，即 relational expression
        - pattern 实际上能用的只有 /regular expression/
    - pattern1, pattern2
        - range pattern
        - It matches all input records starting with a record that matches pattern1, and continuing until a record that matches pattern2, inclusive (命中 pattern1 和 pattern2 的 Record 也被包括在内)

```


## Action Statements

```bash

Examples:
    awk '{print}' < a.txt    打印整个文件，相当于 cat a.txt
    awk '{$1=$1; print $0}'    格式化打印整个文件
    awk '{$1=$1; print NR, $0}'    带行号
    awk '{print $1, $3, $4}'    打印指定字段
    awk '{print $1 "\t" $3 "\t" $4}'    格式化打印指定字段
    awk '{print "Name: " $1 "\tAge: " $3}'
    awk '{if ( $0 !~ /^\s*$/ ) {print $0}}'    去除空行、空白行
    awk '...' 2> /dev/null    不显示 stderr

Variables:
    $0    当前 Record 的值
    $n    第 n 个 Field 的值，n 可以是 1 2 3 4 ...
    $(NF+1)    不存在的 $n 为空字符串 ""
    FS    Field Separator    默认为 "\s"
        E.g. 'BEGIN {FS="\s"; var01=233; var02="xxx"}'
    RS    Record Separator    默认为 "\n" 每行视作一个 Record
        E.g. 'BEGIN{RS=""}'    用空行分隔 Record
    NF    Number of (total) Fields    当前 Record 的 Field 总数
    NR    Number of (this) Record    第几个 Record，默认代表行号
        E.g. '{print NR, var01, var02, $0}'
    FNR    Record Number of File    各文件分别计数的 NR
    FILENAME    Name of current input file
    OFS    Output Field Separator    默认为 " "
    ORS    Output Record Separator    默认为 "\n"
    OFMT    Output Format    默认为 "%.6g" 数字输出格式
    RT    Record Termination
    IGNORECASE     忽略大小写 if it has a non-zero value
    OFMT    Output Format of Number    默认为 "%.6g"
    CONVFMT    Number Format for converting    默认为 "%.6g"
    ARGV    Array of cli args, indexed from 0 to ARGC-1
    ARGC    number of cli args
    ENVIRON    Array of env variables
    bash variables
        * `-v awk_var=$bash_var` 将 bash 变量赋值给 awk 内部变量
        * `'{print $bash_var}'` 直接引用外部变量，或 `$"bash_var"`
    P.S. awk 的变量充满了各种数据类型的隐式转换，请谨慎使用
    P.S. 修改 $0，将使用 FS 重新分割字段，所以会影响 $1、$2...
         修改 NF 或 $1 $2 ... 将根据 $1 到 $NF 来重新计算 $0,
         想要 OFS 生效，必须先修改 NF 的值或 $n(不包括$0) 的值.
         这将自动重新计算 $0 的值，否则 OFS 无法生效，示例:
             '{ NF += 1; NF -= 1; print $0 }'
             '{ $1 = $1; print $0 }'

Literal:
    str 转义序列
        "\\" 反斜杠\
        "\$" 美元符号$
        "\t" 制表符
        "\n" 换行符
        "\r" 回车符
        "\b" 退格符
        "\c" 取消换行

Array:
    常用于统计.

Functions:
    print "abc"    等同于 python 的 print('abc')
    print "\t"    等同于 python 的 print('\t')
    print NR "a" "b"    等同于 python 的 print(str(NR) + "a" + "b")
    print NR, "a", "b"    等同于 python 的 print(str(NR), "a", "b")
    printf
    exit(0)    结束进程，指定状态码
    toupper(str)
    tolower(str)
    gensub(pattern, repl, how, string)
        pattern: str
            - 正则表达式
            - 同 re.sub() 的 pattern
            - E.g.
            - `"\.log$"` 字符串字面量，用双引号包裹
            - `/\/.log$/` 字符串字面量，用斜杠包裹
        repl: str
            - 替换表达式
            - 同 re.sub() 的 repl
            - 反向引用文档说是 `"\0"` `"\1"` `"\2"` `"\9"`
            - 反向引用实际应该写成 `"\\0"` `"\\1"`
            - repl 里不能使用换行符 `\n`
        how: int | "g" | "G"
            - 要替换第几个匹配？
            - `"g"` 替换所有匹配项
            - `"G"` 替换所有匹配项
            - `1` 替换第 1 个匹配项
            - `2` 替换第 2 个匹配项
            - `N` 替换第 N 个匹配项
        string
            - 默认为 `$0`
            - 同 re.sub() 的 string
        - gensub(/pattern/, repl, "g", s) 等价于 re.sub()
    sub(/pattern/, repl, str)
    substr(str, n, <length>)
    gsub(/pattern/, repl, str)
    match(str, pattern [, array])
    length(str)
    length    也可以当变量，表示当前 Record 的字符数
    system(str)
        调用系统命令
        system("echo " $0)
    split(str, var[, separator])
    sqrt(num)    平方
    rand()    随机数
    function <func_name>(x, y) {return x + y}    自定义函数

for:
    for (...) {...}
    for (i=0; i<10; i++) {sum+=i; print i, sum}

while:
    while (...) {...}
    awk 'BEGIN {i=0; while (i<=10) {print i; i++}}'
    P.S. 可以使用 `break` 停止 for while 循环
    P.S. 可以使用 `continue` 进入下一次 for while 循环

if:
    if (...) {...} else if (...) {...} else {...}
    awk '{if (...) {...} else if (...) {...} else {...}}'
    awk '<condition> {...}'    if 简写
    awk 'BEGIN{} <condition> {...} END{...}'    if 简写
    awk '{...; <condition> {...}}' 错误，if简写 不能在 {} 里使用
    condition 除了用运算符，还可以用正则表达式

Regexp:
    awk '/<pattern>/ {print $0}'    regexp 是布尔表达式，其实就是 if 简写
    awk '/<pattern>/'    过滤掉未命中的 Record，相当于 grep <pattern>
    awk '!/<pattern>/'    过滤掉命中的 Record
    awk '$2 ~ /<pattern>/'    过滤掉未命中，只针对 $2 进行匹配
    awk '$2 !~ /<pattern>/'    过滤掉命中的
    ^    字符串开头（Record 开头）
    $    字符串结尾（Record 结尾）
    ^$    空 Record（空行）
    awk 不支持 \d

Operators:
    +
    -
    *
    /
    %
    =
    ++
    --
    >
    <
    >=
    <=
    ==
    !=
    &&    与
    ||    或
    !    非
    ()    提高优先级
    ;    语句分隔符
    ,    参数分隔符
    {}    代码块

```
