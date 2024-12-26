---
tags:
- flag/APP/Process
- flag/APP/Shell
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/Platform/Linux独占
---

- Installation
    - [[coreutils]]

- Idea
    - Allows for a process to live when the terminal gets killed

- Fundamentals
    - 运行一个进程，但让该进程忽略挂起信号，并默认将 stdout 和 stderr 重定向至 `~/nohup.out`
    - `&`（可选）只是为了不阻塞当前 shell session
    - [[ChatGPT]]
    - nohup命令的原理是在执行指定命令时，使用了一种叫做"忽略挂起信号"的方法。在Linux/Unix系统中，当用户注销时，挂起信号（SIGHUP）会被自动发送给正在运行的进程。这意味着，在后台运行的进程会被强制终止。但是，通过使用nohup命令，会将挂起信号忽略掉，从而可以让该进程在后台持续运行而不受影响。
    - nohup 命令只会创建一个新进程。该进程负责启动用户指定的命令，并将其放到后台运行。在执行指定命令时，nohup 命令会将 SIGHUP 信号设置为忽略，以保证该进程在用户退出时不会被强制终止。因此，使用 nohup 命令时，并不会因为创建多个进程而导致系统性能下降或资源耗尽等问题。
    - 可以的。nohup 命令实际上是通过 fork 和 exec 来实现的。当用户在终端中执行 nohup 命令时，系统会先通过 fork 创建一个新进程，然后在新进程中通过 exec 来执行用户指定的命令，并将其放到后台运行。在此期间，nohup 命令会将 SIGHUP 信号设置为忽略，以保证该进程在用户退出时不会被强制终止。因此，使用 fork 和 exec 实现 nohup 命令的过程中，只会创建一个新进程，而不会因为创建多个进程而导致系统性能下降或资源耗尽等问题。

- Usage
    - 

- Description
    - 

```bash
nohup command
Examples:
    nohup ttyd bash &
    nohup command args 1>stdout.txt 2>stderr.txt &

```
