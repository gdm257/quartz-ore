---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text/Implement__/TextProcessor/Replace
commands:
  - sed
---

- Version
    - 千万别用 Git for Windows 自带的 sed！
    - 千万别用 Git for Windows 自带的 sed！
    - 千万别用 Git for Windows 自带的 sed！
        - `echo '[foo]' | sed -e 's#[]\/$*.^[]#\\&#g'`
        - `\[foo\]` 预期输出
        - `\[foo\]` [[Linux]] 自带 sed 实际输出
        - `&foo&` Giw for Windows 自带 sed 实际输出！
            - 简单案例里，replace pattern 可用 `\\` 代表一个反斜杠，这是预期行为
            - 但是在「**某些情况下**」，replace pattern 里边要用 `\\\\` 代表一个反斜杠
            - match pattern 好像也是「某些情况」需要这样转义，我依稀记得数次遭遇该情况，每次都痛苦地测试了一个小时的 pattern，最终放弃，使用 [[awk]] 的函数或者 [[sad]]/[[sd]] 来代替

- Alternatives
    - Pipeline Style
        - [[cat]] | [[sd]]
    - Find Style
        - [[fd]] | [[sad]]
        - [[ruplacer]] --type ...

- Syntax
    - match_pattern
        - `sed -e 's/[]\/$*.^[]/\\\\&/g' | sed -e 's/\$/\\\\$/g'`
            - `]\/$*.^[` 任一字符需要使用反斜杠进行转义
            - `sed "$(echo 'xxx' | sed -e 's/[]\/$*.^[]/\\&/g')"`
    - replace_pattern
        - `&` 匹配到的内容（注意，是匹配，不是捕获）
        - `\1` 分组捕获第 1 组
        - `\2` 分组捕获第 2 组
        - `\\` 反斜杠

[sed修炼系列(一)：花拳绣腿之入门篇 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7488469.html)

[sed修炼系列(二)：sed武功心法(info sed翻译+注解) - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7478188.html)

[sed修炼系列(三)：sed高级应用之实现窗口滑动技术 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7496916.html)

[sed修炼系列(四)：sed中的疑难杂症 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7499309.html)

[SoptikHa2/desed: Debugger for Sed: demystify and debug your sed scripts, from comfort of your terminal.](https://github.com/SoptikHa2/desed)

```bash
落：绝大部分情况下，更推荐用 awk，写起来舒服很多.
awk 的替换函数貌似不能反向引用，我可能还得用 sed.
我宣布我又行了，awk 替换 `{$0=gensub(/pattern/, "\\1", $0); print $0}`
又不行了，直接查找替换文件内容还是得靠 sed -i
又行了，`sd pattern repl file` 能直接修改文件
sed 的原理跟 awk 基本是一样的，读取流 - 分割 - 使用命令循环处理.
sed 的核心在于编写循环中每次迭代所使用的「命令」.
sed 只支持以换行为分隔符，这意味 sed 只适合操作文本文件.
sed [-i] [-n] 's/pattern/repl/gi' 对我来说几乎是唯一用法


正则写法    sed命令行写法
[0-9]    [0-9]
\[LoliHouse\]    \[LoliHouse\]
(aaa)    \(aaa\)
(a|b)    \(a\|b\)
\(C99\)    (C99)
a{3}    a\{3\}
a+    a\+
a*    a*
^.*$    ^.*$
分组引用    \1 \2 \3 ...


案例
re.sub(r'^(.+)$', r'mv "\1" /f01/.', every_line)
sed "s:^\(.\+\)$:mv \"\1\" /f01/.:gi"
sed "s/^\(.\+\)$/mv \"\1\" \/f01\/./gi"



PS：默认情况下，^ $ 分别代表 每行的开头、每行的结尾。因为 sed 是对每一行执行一次指令。

PPS：sed s/pattern/repl/gi 的 `s/pattern/repl/gi` 可以用单引号、双引号包裹


script 动作
s    替换（最常用）
c    替换命中的行
d    删除命中的行
p    打印命中的行（一般配合 -n 选项使用）
q    退出 sed
a    追加（为当前行的下一行）
i    插入（为当前行的上一行）

expr;expr;expr;...
s/pattern/repl/flags
s|pattern|repl|flags
/pattern/d
/pattern/p
/pattern/c\repl
/pattern/a\text
/pattern/i\text
/pattern/q


    在shell里用sed，如果有 $ .* 这样的特殊字符，单引号要换成双引号才可以

sed [OPTIONS] <SCRIPT> [INPUT_STREAM]
sed '<command>/<regexp-pattern>/<repl>/<flags>'    # 常用写法
sed 's/rar$/zip/g'    # 用 s 命令替换，相当于 Python 的 re.sub()
sed '/<regexp>/d'    # 删除匹配的行
sed '2d'    # 删除第 2 行
sed '5,7d'    # 删除第 5-7 行
sed '<script01>;<script02>;<script03>;...'    # 上面的每种用法都是一个表达式。可以将多个表达式写在一起，用分号分隔，等价于 sed '<expression01>' | sed 'expression02' | sed 'expression03' | ...。另一种方法是多次使用 -e 参数
-e <expression01> -e <expression02>
-f <script-file>
-i    #直接修改文件，不在终端输出
INPUT_STREAM 输入流(可以是文件、标准输入)
SCRIPT 所谓的sed脚本
SCRIPT 这部分的写法比较灵活，大致有以下几种：
# 一行式。多个命令使用分号分隔
sed Address{cmd1;cmd2;cmd3...}

# 多个表达式时，可以使用"-e"选项，也可以不用，但使用分号分隔
sed Address1{cmd1;cmd2;cmd3};Address2{cmd1;cmd2;cmd3}...
sed  -e 'Address1{cmd1;cmd2;cmd3}' -e 'Address2{cmd1;cmd2;cmd3}' ...

# 分行写时
sed Address1{
    cmd1
    cmd2
    cmd3
}
Address2{
    cmd1
    cmd2
    cmd3
}


pipx install sedsed
学习sed的过程中，推荐使用"sedsed"调试工具

这是sed的一个循环的过程：

    读取输入流的一行到模式空间。
    对模式空间中的内容进行匹配和处理。
    自动输出模式空间内容。
    清空模式空间内容。
    读取输入流的下一行到模式空间。

如果使用编程结构来描述，则大致过程如下：

for ((line=1;line<=last_line_num;++line))
do
    read $line to pattern_space;
    while pattern_space is not null
    do
        execute cmd1 in SCRIPT;
        execute cmd2 in SCRIPT;
        execute cmd3 in SCRIPT;
        ……
        auto_print;
        remove_pattern_space;
    done
done

sed是一个流式编辑器程序，它读取输入流(可以是文件、标准输入)的每一行放进模式空间(pattern space)，同时将此行行号通过sed行号计数器记录在内存中，然后对模式空间中的行进行模式匹配，如果能匹配上则使用sed程序内部的命令进行处理，处理结束后，从模式空间中输出(默认)出去，并清空模式空间，随后再从输入流中读取下一行到模式空间中进行相同的操作，直到输入流中的所有行都处理完成。由此可见，sed是一个循环一个循环处理内容的。

sed基本上就是玩正则模式匹配


```
