---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text
commands:
  - xargs
---

## xargs

参考

[Linux xargs命令详解 | 骏马金龙](https://www.junmajinlong.com/shell/xargs/)

[shell高效处理文本(1)：xargs并行处理 | 骏马金龙](https://www.junmajinlong.com/shell/xargs_parallel/)

```bash
xargs command

Usage:
    xargs [options] <command> [args]
        1. xargs 若没有接受 stdin，则进入交互模式,
           随意输入字符，按 Ctrl-D 结束输入,输入内容将作为 stdin.
        2. xargs 若不指定 <command>，默认为 echo.

Description:
    xargs 让不支持 stdin 作为参数的 command 支持 stdin.
    xargs 读取管道传输过来的 stdin,
          分割为多组（批）（默认只有一组）,
          每组分割为多个参数（默认分隔符为 换行符、空格）,
          每次使用一组参数来执行 command,
          直到所有批次都执行完.
    P.S. 单引号和双引号的存在让处理变的很不受控制,
         经常会影响正常的分割和处理.
    P.P.S. -E似乎只能和独立的xargs使用，和-0、-d配合使用时都会失效.
           -E优先于-n、-L和-i执行.
    P.P.S. xargs 无法调用 bash 内置命令，例如 cd
           $ echo /etc  | xargs -i cd {}
           xargs: cd: No such file or directory

Options:
    -t --verbose    打印所执行的 commands
    -p --interactive    每次命令都询问是否执行，输入 y 回车才执行
    -r --no-run-if-empty    解析出的参数为空，则不执行命令
                            xargs 默认会跳过空行
    -a --arg-file <file>   read arguments from FILE, not stdin

    -L 1
        每 n 行作为一组参数,
        如果 stdin 被分成了多组参数，则会多次执行 command,
        每次使用一组参数,
        每组参数由 -0 -d 参数分隔符分割,
        默认将整个 stdin 作为一组参数,只执行一次 command.
        E.g.
            ls -l | xargs --verbose echo
            ls -l | xargs -L 1 --verbose echo

    -0 --null
        null 作为参数分隔符（为了处理带空格的文件）
        E.g.
            find . -print0 | xargs -0 --verbose echo
            # -print0 和 -0 处理带空格的文件

    -d "\n"
        自定义参数分隔符（为了处理带空格的文件）
        E.g.
            echo -e "a\tb\tc" | xargs -d "\t" --verbose echo

    -I {}
        在命令中使用 {} 指定插入参数的位置（默认插入到命令的最后）
        E.g.
            ls -l | awk '{print $9}' | xargs -I {} echo "发现: {}"
            ls -l | awk '{print $9}' | xargs -I {} echo 2333 {} xyz

Examples:
    # 配合管道使用
    grep -E 'rar$' ~ | xargs -d '\n' echo
        # -d '\n' 为了处理带有空格的文件

    sed 's/<pattern>/<repl>/gi'
    ls | sed 's/<正则pattern>/<repl>/g'

    # 直接使用
    $ xargs
    $ xargs echo
    hello (Ctrl + d)
    hello

```