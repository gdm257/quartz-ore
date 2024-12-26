---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## iredis

[laixintao/iredis: Interactive Redis: A Terminal Client for Redis with AutoCompletion and Syntax Highlighting.](https://github.com/laixintao/iredis)


```bash
iredis command
Installation:
    * pip install iredis

Description:
    * iredis is a redis cli client.
    * iredis 支持 语法高亮、命令补全.

Usage:
    iredis [options] [redis-commands]
        redis-command
            * one-off excuting similar with docker-compose exec.
            * 不指定命令则进入交互模式.
                - exit or Ctrl+D 退出

Options:
    -h --help
    --version

    --iredisrc " ~/.iredisrc"
    --url <url>
        * Connectoin URL.
        * redis[s]://[[username]:[password]]@localhost:6379/0
        * unix://[[username]:[password]]@/path/to/socket.sock?db=0
    -u --username <user>
        * will be ignore if redis version < 6.
    -a --password <passwd>
    -h "127.0.0.1"
    -p 6379
    -n <integer>
        * database number.
    -d --dsn <alias>
        * 配置好的 redis connection，类似 ssh config 里的 Host.

    --decode
        * decode response, default is No decode.
        * will output all bytes literals.
    --encode "utf-8"
    --raw
        * raw.
        * auto enable when STDOUT is a tty.
    --no-raw
        * force format output.
    --prompt '{port} DB{db}> '
        * {username} {host} {port} {path} {db}
        * {client_name} {client_addr} {client_id}
        * default to "{host}:{port}> "

Configuration:
    * /etc/.iredisrc
    * ~/.iredisrc
    * ./.iredisrc


```