---
tags:
  - flag/License/GPL
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/APP/Command/TUI
  - flag/APP/Shell
  - flag/APP/Shell/Implement__/Shell
  - flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
  - flag/LANGUAGE/Bash
  - flag/Feature/GNU-Readline
files:
  - .bashrc
commands:
  - bash
---

## Brief

`man bash`

[Shell脚本深入教程：升级bash 5.0 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/bash_update/)

- Shortcuts
    - `set -o vi` 启用 [[Vim]] 模式
    - Support GNU Readlin (Command Line Edting / Line Editing Control Sequences)

```bash
bash command
Usage:
    bash [options] [command_string | file]
    bash [options] -c <command> [args]
    bash [options] <file>
    bash [options] <file>

Options:
    -c <command> [args]    运行命令
    -s    read commands from stdin
    -i    interactive shell
    -l --login
        Make bash act as if it had been invoked as a login shell
    -n    不运行脚本，只检查是否有语法错误
    -v verbose    输出每一行语句运行结果前，会先输出该行语句
    -x    每一个命令处理之前，先输出该命令，再执行该命令
    -r restricted    shell becomes restricted
    # multi-character options
    --rcfile <file>
    --norc
    --noprofile
    P.S. 多字符选项必须出现在单字符选项被识别之前.

Files:
    * /bin/bash
    * /etc/profile
        * The systemwide initialization file,
          executed for login shells
    * /etc/bash.bashrc
        * The systemwide per-interactive-shell startup file
    * /etc/bash.logout
        * The systemwide login shell cleanup file,
          executed when a login shell exits
    * ~/.bash_profile
    * ~/.bashrc
    * ~/.bashlogout
    * ~/.inputrc: Individual readline initialization file
    * /etc/inputrc

Installation:
    git clone https://git.savannah.gnu.org/git/bash.git

Description:
    * bash 兼容 sh.

```

## bash 定制

[Bash 脚本 set 命令教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/11/bash-set.html)

[定制 shell 提示符 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter02/11_shell.ps1.html)

[关闭终端响铃 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/wordless.terminal.html)

[Shell脚本深入教程：Shell脚本带颜色输出 | 骏马金龙](https://www.junmajinlong.com/shell/script_course/shell_color/)



```bash
相关命令:
    * set
    * shopt

终端响铃:
    sudo vim /etc/inputrc
    set bell-style none
    在使用终端自动补全功能时会发出讨厌的嘟嘟声

TODO: 键盘绑定

```

### 提示符

man bash - PROMPTING

[Linux命令行提示符颜色格式设置_wx612da90ba9aee的技术博客_51CTO博客](https://blog.51cto.com/u_15349750/3710902)

```bash
echo $PS0
echo $PS1
echo $PS2
echo $PS3

# 自用 PS1
user_host="\n\[\e[32m\]\u@\h\[\e[00m\]"
working_dir="\[\e[33m\]\W\[\e[00m\]"
PS1="${user_host} ${working_dir}\n\$ "


颜色设置
\[\e[字体颜色数字;背景颜色数字m\]内容\[\e[00m\]
\[\033[字体颜色数字;字体颜色数字m\].....\[\033[0m\]
类似于 html 标签，总之就是用一对标记将「内容」包裹起来。
\e 与 \033 是等价的，可以互换、混用。
颜色可以嵌套，例如里层会覆盖外层同名设置。例如外层定义了字体颜色F1、背景颜色B1，里层定义了字体颜色F2，最终效果是 F2 + B1。

F 字体颜色     B 背景颜色     颜色     其他格式
30             40             黑色     代码     含义
31             41             红色     0         OFF
32             42             绿色     1         高亮显示
33             43             黄色     4         underline
34             44             蓝色     5         闪烁
35             45             紫红色     7         反白显示
36             46             青蓝色     8         不可见
37             47             白色

内容的写法详见 man bash 的 /PROMPTING

# E.g. bash.exe
\[\033]0;$TITLEPREFIX:$PWD\007\]\n\[\033[32m\]\u@\h \[\033[35m\]$MSYSTEM \[\033[33m\]\w\[\033[36m\]`__git_ps1`\[\033[0m\]\n$ 

# E.g. ubuntu wsl
\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$



```

### 历史记录

```bash

history
!!
!499
!abc
Ctrl-R


```


### 自动补全

参考

[bash中的自动补全机制 - SegmentFault 思否](https://segmentfault.com/a/1190000022203453)

[Bash命令自动补全的原理 - 张小凯的博客](https://jasonkayzk.github.io/2020/12/06/Bash%E5%91%BD%E4%BB%A4%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8%E7%9A%84%E5%8E%9F%E7%90%86/)

[编写Bash自动补全脚本 | Escape](https://www.escapelife.site/posts/22db372f.html)


```bash
Bash命令自动补全的原理
Bash自动补全是通过内置命令 complete 实现的
默认的补全脚本保存在 /etc/bash_completion.d 目录下
source /etc/bash_completion.d/xxx
即可补全命令




```