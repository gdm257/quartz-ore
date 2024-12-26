---
aliases:
- subprocess
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/APILayer/Implement__/CLI/Process
---

[【Python】进程管理之 subprocess | 人间白玉楼](https://www.vksir.zone/posts/subprocess/)

> [!tldr]
> 请用 plumbum


```python
subprocess standard library
Description:
    * subprocess 还是不够易用，我现在 plumbum 一把梭.
    * subprocess 要么 .run()，要么 Popen.

API:
    # stdin/stdout/stderr
    .STDOUT
    .PIPE
    .DEVNULL
        * 相当于 /dev/null 文件.

    # process
    .Popen
        * 高级运行.
        .__init__(args)
            args: Tuple[str]
            executable=None
            stdin=None
                * file handle.
            stdout=None
            stderr=None
            close_fds=True
            universal_newlines=None
                * 
            cwd=None
            env=None
            shell: bool = False
                * True 表示通过 shell 执行命令.
            *,
            encoding=None
            text=None

    .run(args: str)
        args
        *
        stdin
        stdout
        stderr
        shell
        input
            * 传递给 Popen.communicate() 以及子进程的 stdin.
        timeout
        capture_output
        check
        errors
        text
        **kw
        * 简易运行.
        * run() 是对 Popen 的封装.
        * 以上显示的参数仅仅是最简单的一些.
        * 复杂的参数 **kw 传递给 Popen.


Examples:

如果你要在 windows 使用 subprocess 运行 .sh 脚本，一种亲测可行的方式是

    command = ' '.join(['D:/xxx.sh', arg1, arg2, ...])
    command_quote = shlex.quote(command)
    args=['xxx/git/bash.exe', '-c', command_quote]
    同时千万不要设置 shell=True

真滴别在 Windows 上用 shell 脚本，天坑！一定要用，建议 WSL

注意命令字符串的编码。在Python 3.3中,您可以使用shlex.quote返回字符串的shell转义版本



```
