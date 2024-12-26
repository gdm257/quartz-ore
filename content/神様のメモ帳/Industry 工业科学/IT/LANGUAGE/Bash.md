---
aliases:
  - Bash
  - Bash Specification
  - sh
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
vars:
  - $?
---

# Brief

- Version
    - 5.0+

## References

[awesome-cheatsheets/bash.sh at master · skywind3000/awesome-cheatsheets](https://github.com/skywind3000/awesome-cheatsheets/blob/master/languages/bash.sh)

[Bash Reference Manual `man bash`](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)

[Bash 5.0 参考手册](https://xy2401.com/local-docs/gnu/manual.zh/bash.html)

[Shell：Shell系列文章 | 骏马金龙](https://www.junmajinlong.com/shell/index/)

[Bash 脚本教程 - 网道](https://wangdoc.com/bash/)

[the-art-of-command-line/README-zh.md at master · jlevy/the-art-of-command-line](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)

[GitHub - awesome-lists/awesome-bash: A curated list of delightful Bash scripts and resources.](https://github.com/awesome-lists/awesome-bash#shell-script-development)

### shell 类型

`man bash`

[bash启动时加载配置文件过程 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7417651.html)

[13.5 使用者的特殊 shell 与 PAM 模块 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/118.html)


```bash
shell 类型有 3 种:
A1. 正常 SSH（如 xshell）     交互式 + login shell
A2. screen -S ac             交互式 + non-login shell
B1. xshell 中 bash xxx.sh    非交互式 + non-login shell
B1. crontab bash xxx.sh      非交互式 + non-login shell
B2. 不存在                   非交互式 + login shell


case "$0" in    # $0 判断 login / non-login
    -*)
        echo "login shell";;
    *)
        echo "non-login shell";;
esac


case "$-" in    # $- 判断 交互式 or 非交互式
    *i* )
        echo "interactive shell";;
    * )
        echo "non-interactive shell";;
esac


# $0 判断 login / non-login
# -bash    其中的前缀 '-' 表示 login shell
# bash    没有 '-' 前缀，non-login shell

# $- 判断 交互式 or 非交互式
# himBHs    其中的“i”选项表示 interactive shell
# 没有'i'    非交互式

```

`man bash` 明确定义

> A **login shell** is one whose first character of argument zero is a -, or one started with the  --login option.
> An  **interactive shell** is one started without non-option arguments (unless -s is specified) and without the -c option whose standard input and error are both connected to terminals (as  determined  by isatty(3)), or one started with the -i option.  PS1 is set and $- includes i if bash is interactive, allowing a shell script or a startup file to test this state.


交互式 shell：大多数用户最熟悉的。
非交互式 shell：如执行脚本。以shell script(非交互)方式执行。在这种模式下，shell不与你进行交互，而是读取存放在文件中的命令,并且执行它们。当它读到文件的结尾EOF，shell也就终止了。
当 shell 执行一个脚本，或者通过命令行将命令传送过去执行，这时就是非交互，非登录的 shell。这种 shell 无处不在，在程序调用另外一个程序时非常常见


### .bashrc

[Bash 启动环境 - Bash 脚本教程 - 网道](https://wangdoc.com/bash/startup.html)

[千万别混淆 Bash/Zsh 的四种运行模式 - 知乎](https://zhuanlan.zhihu.com/p/47819029)

[登录式 shell 和非登录式 shell 区别 | Verne in GitHub](https://einverne.github.io/post/2019/01/login-shell-vs-non-login-shell.html)

[理解 bashrc profile 优先级及区别 | Verne in GitHub](https://einverne.github.io/post/2017/03/bashrc-profile.html)

[10.4 Bash Shell 的操作环境： | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/90.html)


```bash
// 启动文件
login shell 会读取启动文件
    # WSL Ubuntu 20.04
    * any shell
        1. /etc/profile
            - /etc/bash.bashrc
                * do nothing if non-interactively
                - # /usr/share/bash-completion/bash_completion
                - # /etc/bash_completion
                    - /usr/share/bash-completion/bash_completion
            - /etc/profile.d/*.sh
                - /etc/profile.d/bash_completion.sh
                    - /usr/share/bash-completion/bash_completion
                - /etc/profile.d/update-motd.sh
                    - $HOME/.hushlogin
    * login shell
        2. $HOME/.profile
            - $HOME/.bashrc
                - ~/.bash_aliases
                - # /usr/share/bash-completion/bash_completion
                - # /etc/bash_completion
                    - /usr/share/bash-completion/bash_completion
        3. $HOME/.bash_logout

    # VPS CentOS 7
    * any shell
        1. /etc/profile
            - /etc/profile.d/*.sh
            - /etc/profile.d/sh.local
    * login shell
        2. $HOME/.bash_profile
            - $HOME/.bashrc
                - /etc/bashrc
                    * non-login shell
                        - /etc/profile.d/*.sh
        3. $HOME/.bash_logout


- 如果 $HOME/.bash_profile 或 $HOME/.bash_login 存在，$HOME/.profile 不会被加载.
- 在大多数发行版中，存储个人用户永久性 bash shell 变量的地方是$HOME/.bashrc文件。这一点适用于所有类型的shell进程。但如果设置了 BASH_ENV 变量，那么记住，除非它指向的是$HOME/.bashrc，否则你应该将非交互式 shell 的用户变量放在别的地方.
- cron进程执行的shell脚本是不会自动加载用户目录下的.profile文件，所以需要脚本自己加载所需要的环境变量。

`bashrc`用于交互式`non-login shell`
`profile`用于交互式`login shell`


非登入shell加载启动脚本的顺序：
~/.bashrc → /etc/bashrc → /etc/profile.d

登入shell加载启动脚本的顺序为：
/etc/profile → /etc/profile.d → ~/.bash_profile → ~/.bashrc → /etc/bashrc

login shell 会读取不同的配置文件，比如 bash 会读取 /etc/profile ， ~/.profile，~/.bash_profile 等配置文件。而 zsh 会是 /etc/zprofile 和 ~/.zprofile

non-login shell 只会读取 ~/.bashrc 配置。

交互式 non-login shell：
如果启动了一个bash shell而没有登入系统（如在CLI提示符中键入bash）
当你在已经存在的终端 session 中开启一个 shell，比如在 screen, Tmux, X terminal 等中，会得到一个交互式，非登录 shell，这时 shell 会读取对应的配置（~/.bashrc for bash, /etc/zshrc and ~/.zshrc for zsh)

```


### 命令行解析流程

[Shell脚本深入教程：Bash解析命令行和eval命令★★★ | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_cmdline_parse_eval/)

```bash
bash 脚本，如典型的 simple command 是一行一行执行的，每一行都有一个完整的周期，每一行的「命令行解析」流程如下:

    - 在终端中键入命令，敲回车
    - bash 读取输入，交给词法解析器处理
    - 词法解析阶段
        - ...
        - ...
        - 别名替换
        - 检测是否是赋值语句
        - ...
    - Expansions (word扩展阶段)
        - 大括号扩展
        - 波浪号扩展
        - 变量替换
        - 算术替换
        - 命令替换
        - 单词拆分
        - 引号移除
    - 执行解析出来的命令，完成后返回 Exit Status
    - 等待下一个命令，然后又开始一个新周期

PS:
    * 赋值语句在词法解析阶段就开始处理了，之后还会经过 Expansion.
    * 如果要执行的命令是eval命令，则会回到从头开始解析(可理解为跳转到「词法解析阶段」，但移除eval这个token)。eval命令有二次解析的功能：第一轮解析已经将该扩展的扩展该替换的替换了，第二轮还可以再次扩展替换。

```


### Commands

```bash
Callable の使用形式:
    1. Simple Command 简单命令
    2. Pipelines 管道 | |&
    3. Lists of Commands 命令队列 && || ; & |
    4. Compound Commands 复合命令 () {} for if
    5. Coprocesses 协同进程 coproc
    * 相关解析发生在「命令行解析」的「词法解析阶段」.
    * sleep 配合 pstree 能很好地帮助我们理解这些概念.
	* [<var>=<value>]... <callable> [args]



一个深刻的问题：bash 里有「表达式」吗？
没有。
虽说你可以把 $() ${} 等 Expansion 看作表达式，但实质上这些所谓的「表达式」，Expansion 之后全都变成最朴素的字符串。Expansion 的最后一步是 Quote Removal 证明了这点。
所以 case 后边跟的其实是一个 string 字符串（官方手册管叫 word，其实一个 word 就是一个 string），而不是 Shell Command。

```


### Expansion

`man bash` /Expansion

`man bash` /Quoting

[Shell脚本深入教程：Bash解析命令行和eval命令★★★ | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_cmdline_parse_eval/)

[SHELL脚本--多命令逻辑执行顺序 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/5915106.html)

[Bash 的模式扩展 - Bash 脚本教程 - 网道](https://wangdoc.com/bash/expansion.html)

[Shell脚本深入教程：Bash命令替换 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_cmd_substitution/)

[shell的命令替换和命令组合 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7401591.html)

[Shell脚本深入教程：Bash进程替换 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_process_substitution/)

[Shell脚本深入教程：Bash路径通配规则 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_glob/)


```bash
Expansionの先后顺序:
    1. Brace Expansion 大括号扩展 {}
    2. Tilde Expansion 波浪号扩展 ~ ~+ ~-
    3. Shell Parameter Expansion 参数扩展(变量替换) ${} $1 $@
    4. Command Substitution 命令替换 $() ``
    5. Arithmetic Expansion 算术扩展 $(())
    6. Process Substitution 进程替换 <() >()
    7. Word Splitting 单词拆分
    8. Filename Expansion 文件名扩展 ? * [:alpha:]
    9. Quote Removel 引号移除

Parameter Expansion:
    * ${var} 普通变量
    * $1    魔法变量 Position Parameter
    * $@    魔法变量 Special Parameter
    * 更应该叫变量替换 Variable Substitution.
    * 参数这种叫法太反直觉了，就应该叫变量.
    * ${...} 的 {} 是可选的.
    * ${} 中要想使用花括号作为字符串，要么用双引号包裹，
        要么用反斜杠转义，但别同时用.
    * 「变量替换」里不能使用 变量替换、命令替换、参数扩展，请配合 eval.

Command Substitution:
    * $(Shell Commands)

Process Substitution:
    * 「<(cmd)」「>(cmd)」会被替换成形如 '/dev/fd/63' 的字符串.
    * '/dev/fd/xx' 是个管道文件.
    * 「<(cmd)」：cmd 的 fd=1 重定向到 '/dev/fd/xx'.
    * 「>(cmd)」：cmd 的 fd=0 重定向到 '/dev/fd/xx'.
    * cmd01 >(cmd02)：cmd01 与 cmd02 不是后代关系.
    * 管道、进程替换都不够灵活.
    * 重定向最灵活，但只能重定向到文件.
    * 而进程替换是个管道文件，所以 重定向+进程替换 消除了重定向的缺点.
    * E.g. file <(pwd)
    * E.g. file >(pwd)
    * E.g. ls -l <(echo hello)
    * E.g. ls -l >(echo hello)
    * E.g. sed 's/hello/hi/' < <(echo 'hello')

Filename Expansion:
    * [abc] [^abc] [!abc] [a-z]
	* 「*」任意长度的任意字符，「/」「.」除外
	* 「?」单个字符，有点玄学，不建议用


```


### Callable

`man bash`

[Shell内置命令、外部命令、别名、函数、保留关键字优先级 | 骏马金龙](https://www.junmajinlong.com/shell/call_order/)

[bash内置命令的特殊性，后台任务的"本质" - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/9183819.html)

[我对alias的重新认识：通过alias让rm更安全 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7385133.html)


```bash
Callable Object:
    1. alias
    2. shell keyword (E.g. if, for, case, while)
    3. function
    4. shell builtin command
    5. 外部命令
    P.S. shell 里可调用的东西有 5 种，
         这样的 callable 对象在参考手册里通常被称为「命令 command」,
         但这容易跟「builtin command」和「外部命令」混淆，
         阅读时请根据上下文辨别。

Callable 优先级:
    alias >
    keyword >
    function >
    builtin command >
    external command
    对于同名 external command，其所在目录在 $PATH 中越靠前，优先级越高.

PATH:
    # 临时使用
    # 用户级
    # ~/.bashrc
    # ~/.profile or ~/.bash_profile
    # 系统级
    # /etc/bash.bashrc or /etc/bashrc
    # /etc/profile or /etc/bash_profile
    # /etc/environment
    # source
    可以推测出Linux加载环境变量的顺序如下：
    1. `/etc/environment`
    2. `/etc/profile`
    3. `/etc/bash.bashrc`
    4. `/etc/profile.d/test.sh`
    5. `~/.profile`
    6. `~/.bashrc`

Reserved words:
    ! case  coproc  do done elif else esac fi for function if in select then until while { } time [[ ]]

相关命令:
    * type
    * whereis
    * which
    * alias
    * unalias
    * builtin    调用内置命令
    * command    调用外部命令


别名是静态常量。
别名的值在 alias 命令执行完成后就固定了，不会改变，除非再次执行 alias。
所以「别名不需要 Expansion」（Expansion 意味着动态、不固定）
所以「别名替换 完成后才会进行 Expansion」是合理的
所以「别名替换 发生在 词法解析阶段」而「Expansion 属于 word扩展阶段」
称为word扩展是因为下面这些操作都可能会改变word(即token)的数量
虽然别名是静态的，但因为别名替换早于 Expansion，所以别名里的特殊字符仍然可能被 Expansion 改变，从而拥有动态性。例如：
    alias a='${dynamic_var}'
    type a # a is aliased to '${dynamic_var}'
    dynamic_var="echo"
    a "hello"
    # 别名扩展后变为: `${dynamic_var} "hello"`
    # Expansion 后最终变为: `echo hello`
    dynamic_var="wc" # 最终等价于 `wc hello`

```


### 子shell

[Shell脚本深入教程：Bash解析命令行和eval命令★★★ | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_cmdline_parse_eval/)

[Shell脚本深入教程：Shell环境和子Shell的概念(★★★) | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_env/)

[bash内置命令的特殊性，后台任务的"本质" - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/9183819.html)


- 部分 Expansion 会产生子 shell.
- Shell Commands 中，Compound Commands 的 Command Grouping 命令分组 `(cmd; cmd)` 会产生子 shell.
- 我没记错的话，bash 直接执行「外部命令」的话，子 shell 是会被 exec 的，那子 shell 的环境有意义吗？经验给出了答案，有。很多软件会把环境变量作为配置。但是我不明白，软件是怎么获取到的？明明子 shell 被 exec 后环境应该被清空了.
- [[ChatGPT]] 不是每个前台命令都会创建子 shell。大多数前台命令都不需要创建子 shell，因为它们直接在当前 shell 中运行。只有在需要使用子 shell 的情况下，才会创建子 shell。这通常是因为命令需要在执行过程中进行环境变量或其他 shell 设置的更改，而这些更改只应影响该命令而不是整个 shell



### 退出状态码

```bash
Exit Status
Description:
    * bash 执行每个命令都会有对应的进程退出状态码.
    * 特殊变量 $? 表示最近一个命令的退出状态码.
    * exit status 也叫 return status.

Code:
    * 0
    * 1
    * 2
    * between 0 and 255

Script:
    * 脚本什么时候会退出？
        * 正常执行完整个脚本
        * 主动执行 exit 命令
        * 如果命令执行出错呢？
            * 取决于是否设置了 set -e

另外，在Shell脚本中，所有条件判断(比如if语句、while语句)都以0退出状态码表示True，以非0退出状态码为False。

exit命令可用于退出当前Shell进程，比如退出当前Shell终端、退出Shell脚本，等等。

exit 0  # 正常退出
exit    # 默认为 0
exit 1

exit [n]    退出当前shell，在脚本中应用则表示退出整个脚本.数值n表示退出状态码
return [n]    退出整个循环.数值n表示退出的循环层次
break [n]    进入下一次循环.n表示继续执行向外退出n层的循环
continue [n]    退出整个函数。n表示函数的退出状态码
return，它并非只能用于function内部，
如果return用在function之外，但在source命令的执行过程中，则直接停止该执行操作，并返回给定状态码n
如果return在function之外，且不在source的执行过程中，则这是一个错误用法

```


### glossary

field vs token?
    token 是 shell 命令行解析的单位.
    field 是 expansion 的单位.
    expansion 只是 shell 解析的其中一个步骤.

metacharacter 哪去了？我怎么觉得它是 redirection？


field
    A unit of text that is the result of one of the shell expansions.
token
    It is either a word or an operator.
    A sequence of characters considered a single unit by the shell.
word
    就是一个字符串.
    A sequence of characters treated as a unit by the shell.
    Words may not include unquoted metacharacters.
operator
    A control operator or a redirection operator.
control operator
    A token that performs a control function.
    ||
    &&
    &
    ;
    ;;
    ;&
    ;;&
    |
    |&
    (
    )
    \<newline\>
metacharacter
    A character that, when unquoted, separates words.
    |
    &
    ;
    (
    )
    <
    >
    \<space\>
    \<tab\>
    \<newline\>


- token
    * word
    * operator
        * control operator
        * redirection operator

# 结构化并发

## `&`

# SP

## Loop

### for

[Shell脚本深入教程：Bash流程控制语句 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_flow_control/)

```bash
# for in
for i in <words>; do
    ...
    break
done

set -- a b c
for i do echo $i;done
for i;do echo $i;done

in关键字后是默认使用空格分隔的一个或多个元素
如果省略 `in <words>`，则等价于 `in "$@"`




# for
for (( expression; expreesion; expression )); do
    ...
    continue
done


# while
while test_cmd_list; do
    ...
done
while循环，开始时会测试test_cmd_list，如果测试的退出状态码为0，则执行一次循环体语句cmd_list，然后再测试test_cmd_list，一直循环，直到测试退出状态码非0，循环退出。


# until
# 相当于 while not condition
until condition; do
    ...
done
很少用


# select
select i in cat dog sheep mouse; do
    echo "序号" $REPLAY "的内容是" $i
    break
done

select i; do
    ...
    break
done
select 相当于 input() 让用户多选一，但无论选什么都执行同一段代码，只是输入的值不一样.
用户做出选择后select会执行相关命令，执行完命令后会再次让用户选择。所以，应该在命令尾部使用break命令来终止select。
如果省略 `in <words>`，则等价于 `in "$@"`
$REPLAY 一般是序号值，但用户可以不按常理出牌，随意输入，所以REPLY保存的不一定是序号。

```

### `while`

### `until`

### `select`

## Branch

### `if`

[Shell脚本深入教程：Bash测试命令 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_test/)

[6. 退出与退出状态 - 高级Bash脚本编程指南中文版(原著Revision10)](https://linuxstory.gitbook.io/advanced-bash-scripting-guide-in-chinese/zheng-wen/part2/06_exit_and_exit_status)

[Shell脚本深入教程：Bash流程控制语句 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_flow_control/)

[shell测试命令test、\[ \]、\[\[ \]\] - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7427357.html)

- Description
    - callable 的 exit code 为 0 表示判断成立（true），运行紧跟着的代码块；否则表示判断不成立（false），跳过代码块
    - `[]` 是 [[test|test command]] 的语法糖
    - `[[]]` 是一种 Expansion，这意味着你需要注意解析顺序
    - `[[]]` 算是一种非常特殊的 callable

```bash
if statement
Usage:
    # 多行式
    if callable; then
        ...
    elif callable
    then
        ...
    else
        ...
    fi
    # 单行式
    if callable; then xxx; elif callable; then xxx; else xxx; fi



case statement
Usage:
    case expression in
        pattern)
            ...;;
        (pattern)
            ...;;
        pattern01 | pattern02 )
            ...
            ...;;
        start)
            echo "start"
            echo "start";;
        (stop )
            echo "stop";;
        ( restart )
            echo "restart";;
        *)
            ...
            ...
            ...;;
    esac

每个小分句中的pattern部分都使用括号『()』包围，只不过左括号『(』不是必须的
pattern支持通配模式匹配，可使用『|』分隔多个通配模式，表示满足其中一个模式即可
最后一般会定义一个能匹配其它任意条件的默认分支，即(*)
除最后一个分支外，每个分支都建议以;;结尾
    ;;结尾符号表示小分句执行完成后立即退出case语句
    ;&表示继续执行下一个小分句的命令体，而无需进行匹配动作，并由此小分句的结尾符号来决定是否继续操作下一个小分句
    ;;&表示继续向后(不止是下一个，而是一直向后)匹配小分句，如果匹配成功，则执行对应小分句中的command部分，并由此小分句的结尾符号来决定是否继续向后匹配

```

### `case`

## Main

### Simple Command

```bash
Simple Command:
    * 一个简单命令仅由多个被空白分隔的 单词(word) 组成.
    * 简单命令使用频率最高.

```

### Pipelines

[SHELL脚本--管道和重定向基础 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7325378.html)

[10.6 管线命令 （pipe） | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/92.html)


```bash
sleep 999 |& echo

* 重定向本质是修改单个 Shell Command 的文件描述符所指向的文件.
* Pipeline 本质是修改两边的 Shell Command 的文件描述符所指向的文件.
* 「cmd01 | cmd02」将 cmd01 的 fd=1 指向「cmd02 的 fd=0 所指」.
* 「cmd01 |& cmd02」则是 cmd01 fd=1 fd=2 都指向 cmd02 fd=0 所指.
* 管道不能自定义 fd，只有以上两种模式.
* 管道两端的命令是兄弟进程.
* 管道左边命令的 fd=1 指向了匿名管道 'pipe:[1234]'
* 管道右边命令的 fd=0 指向了匿名管道 'pipe:[1234]'
* 这种是「匿名管道」.
* 管道的退出状态是其中的最后一个命令的退出状态.

```


### Lists of Commands

`man bash` /Lists of Commands

[bash内置命令的特殊性，后台任务的"本质" - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/9183819.html)

[16.2 工作管理 （job control） | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/140.html)

[SSH 断开后使进程仍在后台运行 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/sshBackstage.html)

[在终端中把命令放到后台执行 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/backtty.html)

> A list is a sequence of one or more pipelines separated by one of the operators ‘;’, ‘&’, ‘&&’, or ‘||’, and optionally terminated by one of ‘;’, ‘&’, or a \<newline\>.


```bash

* 「&&」「||」的退出状态码是 最后一个被执行的命令的退出状态码.


```

### Compound Commands

`man bash` /Compound Commands


### Coprocesses

`man bash` /Coprocesses

### `#`

- Objects
    - Single-line comment `# comment`
    - End-of-line comment `command # comment`
    - Shebang Line `#!/usr/bin/env bash` at start-of-file
        - Specify script interpreter for `./script.sh` calling
        - Equals to `bash ./script.sh`

- Examples
    - `cat /etc/shells`
    - `/bin/sh`
    - `/bin/bash`
    - `/usr/bin/bash`
    - `/bin/rbash`
    - `/usr/bin/rbash`
    - `/bin/dash`
    - `/usr/bin/dash`
    - `/usr/bin/tmux`
    - `/usr/bin/screen`

- Con
    - 不支持 多行注释
        - Bash 的一些特性，可以取巧实现多行注释，但是，别闲的蛋疼去用取巧的多行注释

```bash
: '
多行注释1
多行注释2
仅作展示，请勿实际使用
'

: <<'EOF'
注释1
注释2
仅作展示，请勿实际使用
EOF

____='
注释1
注释2
仅作展示，请勿实际使用
'
```

# OOP

## `readonly`

- Idea
    - Readonly variable can not be changed nor unset

- Syntax
    - `readonly var01="value"`

## `local`

- Idea
    - Local variable only can be used in current function

- Syntax
    - `local var01="value"` can only be used in a function

## `export`

- Idea
    - Environment variable

- Syntax
    - `export ENV_01="value"`
    - `export var01`
        - 将普通变量导出为环境变量

- Scope
    - 子Shell进程可以继承父Shell中的环境变量
    - sub shell can override env variable by `export`

- CLI
    - `env` 查看环境变量
    - `printenv` 查看环境变量
    - `printenv ENV_01` 查看环境变量

## global

- Idea
    - Global variable

- Syntax
    - `var01="value"`

- Scope
    - shell 的变量都是全局变量，包括函数里的变量（除非使用 `local` 命令）.
    - 全局变量作用域为当前 shell.
    - `source` 时相当于 Python 的 `from xxx import *`.

## =

- Idea
    - Assignment statement

- Syntax
    - 等号两边不能有空格

- Objects
    - Left Value
    - Right Value
        - String
        - bash 只有字符串这一种数据类型
        - 右值在运行时最终会变为一个字符串
        - Expansion 引用变量时需要用特殊语法

- Variable Expansion
    - `${var01}` `$var01`
    - `${#var01}` number of byte

- References
    - [Shell脚本深入教程：Bash变量 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_var/)

## `unset`

- Idea
    - 变量注销

- Syntax
    - `unset var01`
    - 不能带 `$`，因为 `$var01` 相当于解引用，而 `var01` 则是变量本身

## 魔法变量

`man bash` /Shell Parameters

[Shell脚本深入教程：Bash变量 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_var/)

[理解$0和BASH_SOURCE | 骏马金龙](https://www.junmajinlong.com/shell/bash_source/)

[获取shell脚本所在目录 | 骏马金龙](https://www.junmajinlong.com/shell/get_script_dir/)

[浅析 Linux 的国际化与本地化机制 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_locale.html)

```bash
Shell Parameters:
    1. Positional Parameters
    2. Special Parameters
    没错，魔法变量的正式名称是「参数（Parameter）」，这反人类的叫法…

Positional Parameters:
    $1    传给脚本的第 1 个位置参数
    $2    传给脚本的第 2 个位置参数
    $3    传给脚本的第 3 个位置参数
    $N    传给脚本的第 N 个位置参数
    ${N}  规范写法

Special Parameters:
    $0    当前脚本名 或 shell 名称
    $#    位置参数的个数
    $*    传给脚本的所有参数合并成一个字符串
    $@    扩展为位置参数，
          "$@"会将每个位置参数单独引起来，
          "$@"等价于"$1" "$2" "$3"...
    $?    最近一个前台命令的退出状态码
    $_    最近一个前台命令的最后一个参数
         （还有其它情况，该变量用的不多，所以不追究了）
    $!    最近一个后台命令的进程PID
    $$    当前Shell的进程PID
          在某些子Shell(如小括号()开启的子Shell)下，会被继承。
          如果可以，建议使用 $BASHPID
    $-    当前Shell环境的一些特殊设置，比如是否交互式

```

## 环境变量

[env 命令，Linux env 命令详解：显示系统中已存在的环境变量 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/env.html)

[export 命令，Linux export 命令详解：为shell变量或函数设置导出属性。 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/export.html)


```bash

常见の环境变量:

BASHPID：Bash 进程的进程 ID。
BASHOPTS：当前 Shell 的参数，可以用shopt命令修改。
DISPLAY：图形环境的显示器名字，通常是:0，表示 X Server 的第一个显示器。
EDITOR：默认的文本编辑器。
HOME：用户的主目录。
HOST：当前主机的名称。
IFS：词与词之间的分隔符，默认为空格。
LANG：字符集以及语言编码，比如zh_CN.UTF-8。
PATH：由冒号分开的目录列表，当输入可执行程序名后，会搜索这个目录列表。
PS1：Shell 提示符。
PS2： 输入多行命令时，次要的 Shell 提示符。
PWD：当前工作目录。
RANDOM：返回一个0到32767之间的随机数。
SHELL：Shell 的名字。
SHELLOPTS：启动当前 Shell 的set命令的参数，参见《set 命令》一章。
TERM：终端类型名，即终端仿真器所用的协议。
UID：当前用户的 ID 编号。
USER：当前用户的用户名。



```

# FP

## Operators

[Shell脚本深入教程：Bash支持的运算操作 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_op/)

[Shell脚本深入教程：Bash数值运算 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_number_cal/)


```bash
bash 的运算符并不是什么加减乘除，了解过 bash 的数学运算会发现，加减乘除本质上是通过「字符串」来调用，而非「运算符」。bash 里的运算符几乎全都是用来分隔、控制 shell commands 的。运算符的作用跟高级语言很不一样，得注意。


重定向符号的优先级大于管道



```



## function

```bash
(
    set -x
    $sh_c 'docker version'
) || true
这算是匿名函数吗？
不，官方参考手册中找到了，这叫「命令组合」


```


## Redirection

`man bash` /Redirection

[重定向的时候shell在干什么？ - 知乎](https://zhuanlan.zhihu.com/p/142978922)

[SHELL脚本--管道和重定向基础 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7325378.html)

[linux - Bash技巧：介绍重定向输入输出等十种重定向操作符的用法_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000022100439)


```bash
每个「进程」都有一张独立的「文件描述符表」，用于存放文件描述符。
「文件描述符的值（file descriptor number）」是一个非负整数。
「文件描述符表」可简化为一个字典 Dict[int, str]。
「重定向」的本质是修改「文件描述符」所指向的「文件」。
按惯例，shell 创建一个进程时，会自动
    fd_table[0] = /dev/fd/0 或 /dev/stdin
    fd_table[1] = /dev/fd/1 或 /dev/stdout
    fd_table[2] = /dev/fd/2 或 /dev/stderr
严格来说不准确，fd 不仅仅有文件路径，还有读写模式等各种属性。
/dev/fd/0 和 /dev/stdin 实质为同一文件，其他同理。
让我们来 fd 指向的文件：
ls -l /dev/fd/
    0 -> /dev/tty2
    1 -> /dev/tty2
    2 -> /dev/tty2
    3 -> /proc/4276/fd
嗯，Linux 一切皆文件，tty 也是文件，写入该文件的内容会显示在终端上。
就这么简单吗？当然不是，里边藏有黑魔法，让我们继续看下去。
ls -l /dev/fd /dev/std*
    /dev/fd -> /proc/self/fd
    /dev/stderr -> /proc/self/fd/2
    /dev/stdin -> /proc/self/fd/0
    /dev/stdout -> /proc/self/fd/1
/dev/fd 软连接到了其他目录，继续追查。
ls -l /proc/self
    /proc/self -> 4276
最终 /dev/fd 实际是软连接到了 /proc/4276/fd
但这就结束了吗？
不，这里有一个没被注意到的黑魔法。
如果我们「同时」打开多个终端，
随便什么方法，screen 也好，tmux 也好，多个 ssh 登录也好，
会发现不同 tty 查看 ls -l /proc/self 会指向不同的文件夹！
这导致不同 tty 的 /dev/fd/{0,1,2} /dev/std{in,out,err} 指向不同文件。
不同的 tty，相同的路径，软连接到不同的文件！
堪称魔法！
不用多说，该魔法肯定是 Linux 的虚拟文件系统（VFS）的机制了。
怎么实现的先不说，这样我们就能弄懂一个疑问了：
「既然整个系统里不同程序都往 /dev/stdout 或 /dev/fd/1 写内容，那为什么当前终端只显示当前终端所执行的命令的输出？其他程序写入的 /dev/stdout 为什么在当前终端不显示？明明写入的是相同的路径，为什么不会串呢？」
因为黑魔法。/dev/fd 根据 tty 的不同，最终指向不同文件夹。


上面说了一大堆，只是解释了 /dev/fd 的魔法，还没涉及重定向。我们继续。
程序里调用 print() 之类的函数时，我们总要把内容写入到哪里吧，写到哪里呢？答案是写到「文件描述符」。
再说一遍，是写到「文件描述符」，而不是「文件」。
写到文件描述符后，底层函数库会写入 fd 指向的文件 /dev/fd/{1,2}.
那么这里有一个问题，如果我们把文件描述符所指向的文件修改了会怎样？
问得好，这就是「重定向」的本质！
    fd_table[1] = ./1.log
那么内容将不再写入 /dev/fd/1 而是写入 ./1.log
「重定向」的本质是修改「文件描述符」所指向的「文件」。
前面说过，进程初始化时，有 3 个自动生成的文件描述符 0、1、2
姑且称为 fd=0 fd=1 fd=2 ... fd=n
让我们从本质的视角看看所谓的 Redirection.

ls -l
    文件描述符 fd=0 默认指向文件 /dev/fd/0
    文件描述符 fd=1 默认指向文件 /dev/fd/1
    文件描述符 fd=2 默认指向文件 /dev/fd/2

ls -l > ./1.log
    文件描述符 fd=0 指向文件 /dev/fd/0
    文件描述符 fd=1 指向文件 ./1.log
    文件描述符 fd=2 指向文件 /dev/fd/2

ls -l    >log.txt    2>&1
    文件描述符 fd=0 指向文件 /dev/fd/0
    文件描述符 fd=1 指向文件 log.txt
    文件描述符 fd=2 指向文件 log.txt

ls -l    2>&1    >log.txt
    文件描述符 fd=0 指向文件 /dev/fd/0
    文件描述符 fd=1 指向文件 log.txt
    文件描述符 fd=2 指向文件 /dev/fd/1

cat    >log.txt    <<< hello
    文件描述符 fd=0 指向文件 /dev/fd/0
    文件描述符 fd=1 指向文件 log.txt
    文件描述符 fd=2 指向文件 /dev/fd/1
    将字符串 "hello" 写入 fd=0 即写入 /dev/fd/0


完整语法如下：

> 覆盖式
    cmd 1> file    fd=1 指向 file
    cmd  > file    「cmd 1> file」的简写
    cmd 2> file    fd=2 指向 file
    cmd n> file    fd=n 指向 file
    cmd 2>&1    fd=2 指向「fd=1 所指向的文件」
    cmd m>&n    fd=m 指向「fd=n 所指向的文件」
    cmd >& file    「cmd 1>file 2>&1」的简写
    cmd 1>file 2>&1    fd=1 fd=2 都指向 file
>| 同「>」
>> 追加式
    cmd 1>> file    fd=1 指向 file，追加模式
    cmd  >> file    「1>>」的简写
    cmd 2>> file    fd=2 指向 file，追加模式
    cmd n>> file    fd=n 指向 file，追加模式
< 读取式
    cmd 0< files    读取 files，将内容写入 fd=0
    cmd  < files    「0<」的简写
    cmd n< files    读取 files，将内容写入 fd=n
    cmd <& 
    cmd <&- 
<< Here Document
    cmd << Custom_EOF
    ...
    Custom_EOF
    读取 string，写入 fd=0

    cmd 0<< EOF
    ...
    EOF
    读取 string，写入 fd=0

    cmd n<< EOF
    ...
    ...
    ...
    EOF
    读取 string，写入 fd=n

    cmd <<- 

<<< Here String
    cmd <<< string
    读取 string，写入 fd=0

    cmd 0<<< string
    读取 string，写入 fd=0

    cmd n<<< string
    读取 string，写入 fd=n

<> 读写模式
    
&> 
&>> 

```

## Signal

[Shell脚本深入教程：trap信号捕捉用法详解 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_trap/)

# Datatype

## str

### 字面量

[shell中$后加引号有什么用($"string"和$'string') - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/8454364.html)

[Bash中Here Document的各种语法姿势 | 骏马金龙](https://www.junmajinlong.com/shell/shell_heredoc/)

[Shell脚本深入教程：Bash解析命令行和eval命令★★★ | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_cmdline_parse_eval/)


```bash

# 1. 不使用引号
不使用引号，凡是有特殊含义的都会生效.
一些引号外の转义序列:
    * `\ `    空格
    * \"    "双引号
    * \'    '单引号
    * \*
    * \$
    * \[
    * \]
    * \!

# 2. 双引号 "abc" $"abc"
如果没有特殊定制 bash 环境，$"xxx" 与 "xxx" 完全等价.
双引号内可以执行命令替换、变量替换、反斜线转义、算术运算等，但不能执行大括号扩展、波浪号扩展、通配符路径扩展等

双引号内所有字符皆为字面符号，除了
    "    "双引号 字面量为 "\""
    \    双引号里的转义序列。反斜杠 字面量为 "\\"
    $    扩展。美元符号 字面量为 "\$"
    `    扩展。反引号 字面量为 "\`"
    !    History expansion
         启用 History expansion 后的转义行为非常非常奇怪，
         建议直接 set +H 禁用 History expansion，一劳永逸

双引号里の转义序列:
    \\    \
    \$    $
    \`    `
    \"    "
    \n    newline
    反斜线后边跟着除此以外的字符，都不会进行转义 E.g. "\t" 等价于 '\t'；无论是否启用 History expansion，"\!" 都等价于 "\\!"，即不进行转义，只不过启用 History expansion 后 ! **可能**会进行一次扩展（行为相当诡异，手册也说不清楚），目测发生在别名扩展的前面或后面，优先级相当高


# 3. 单引号 'abc'
单引号 'xxx' 类似 Python 的 """abc"""，所见即所得、能换行。
单引号内所有Shell扩展和替换都不执行
但 xxx 不能带有单引号，哪怕用反斜杠转义也不行。


# 4. 转义单引号 $'abc'
相比 'xxx'，转义单引号 $'xxx' 支持 ANSI C 标准的某些反斜线序列，亲测:
    * \'    '单引号
    * \\    反斜杠
    * \n    新行
    * \r    换行
    * \a    发出响铃
    * \b    退格删除
    * \e    转义字符 (不属于 ANSI C)
    * \f    走纸换页
    * \t    水平制表符
    * \v    垂直制表符
    * \0NNN    byte with ocatal value NNN (1-3 digits)
    * \xHH    byte with hexadecimal value HH (1-2 hex digits)
    * \uHHHH
        Unicode (ISO/IEC 10646) character
        whose value is the hexadecimal value HHHH (1-4 hex digits)
    * \UHHHHHHHH
        Unicode (ISO/IEC 10646) character (1-8 hex digits)
    * \cx    a control-x character


# 7. Here document
$ cat << custom-token
str
str
str
custom-token

$ cat << _EOF_
${var}
_EOF_

Here 文档本质是重定向。即将多行字符串重定向输出给某个命令.

Here 文档支持变量替换、反斜杠转义，但不支持通配符扩展，单双引号会变成字面值，也就是普通字符.


# 8. Here string
$ cat <<< 'abc'

Here 字符串 是 Here 文档的变体，本质还是重定向，看例子就能理解.


# 其他转义
set +H    # 将 ! 当作普通字符，不需要转义，否则感叹号 ! 会引发很多问题


```


### 拼接

```bash
字符串串联
a="hello""world"    # python: a = 'hello' + 'world'
a="hello""_""world"    # python: 'hello' + ' ' + 'world'

```


### 分割

参考

[dd、split、csplit命令 | 骏马金龙](https://www.junmajinlong.com/shell/dd_split_csplit/)


split
csplit
dd

### 合并

join

### 统计

${#var}    字符数
wc    行数    单词数    字节数
awk

### 过滤

grep
awk
sd
uniq

### 替换

```
sd
awk
VERSION="${VERSION#v}" # strip "v" prefix if present
```


### locale

```bash
locale -a

```

## int

[Shell脚本深入教程：Bash数值运算 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_number_cal/)

[Shell脚本深入教程：Bash支持的运算操作 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_op/)

[SHELL脚本--数学运算和bc命令 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7231870.html)

[bc 命令，Linux bc 命令详解：算术操作精密运算工具 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/bc.html)

[dc 命令，Linux dc 命令详解：任意精度计算器 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/dc.html)

[expr 命令，Linux expr 命令详解：一款表达式计算工具 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/expr.html)


```bash
真・整数类型:
    declare -i num01 num02 num03
    num01="2"
    num02="4"
    num03="(num01 + num02 * num02 - num02) / 2"
    declare -i 等价于 typeset？
    declare -i声明整数类型的变量，声明后就能直接参与数值运算


let command:
    n1="10"
    let "n2 = n1 * 2 / 5 + 30"
    let命令只能单独作为一个命令行运算


$(()) $[]:
    n1="10"
    echo $(( "(n1 + 20) * 3" ))
    echo $[ "(n1 + 20) * 3" ]
    $(())和$[]可以在命令内部进行运算，运算完成后会进行算术替换：即将运算结果替换到命令行中


小数运算:
    上述方法都只能进行整数运算，
    但如果真的需要进行精确到小数的运算，可以用其他工具，比如
    bc、awk、perl

```



## boolean

```bash
type true false

```

## list

[Shell脚本深入教程：Bash数组基础 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_array/)

[Shell脚本深入教程：Bash操作变量和数组元素的方式 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_op_var_arr/)

```bash
bash 数组更像是 list 而非 tuple.
```
