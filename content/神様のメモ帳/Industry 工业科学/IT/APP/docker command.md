---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer
scoop: docker
files:
  - Dockerfile
---

## Configuration

- `docker pull` proxy
    - `export http_proxy=http://host:port`
    - `export https_proxy=http://host:port`

## CLI

[Docker run reference](https://docs.docker.com/engine/reference/run/)

[Docker 运行参考](https://docs.docker.com.zh.xy2401.com/engine/reference/run/)

- `docker stop`
    - docker stop命令执行的时候，会先向容器中PID为1的进程发送系统信号SIGTERM，然后等待容器中的应用程序终止执行，如果等待时间达到设定的超时时间，或者默认的10秒，会继续发送SIGKILL的系统信号强行kill掉进程。在容器中的应用程序，可以选择忽略和不处理SIGTERM信号，不过一旦达到超时时间，程序就会被系统强行kill掉，因为SIGKILL信号是直接发往系统内核的，应用程序没有机会去处理它。在使用docker stop命令的时候，我们唯一能控制的是超时时间
- `docker kill`
    - 接着我们来看看docker kill命令，默认情况下，docker kill命令不会给容器中的应用程序有任何gracefully shutdown的机会。它会直接发出SIGKILL的系统信号，以强行终止容器中程序的运行。
    - 用docker kill命令，可以简单粗暴的终止docker容器中运行的程序，但是想要优雅的终止掉的话，我们需要使用docker stop命令，并且在程序中多花一些功夫来处理系统信号，这样能保证程序不被粗暴的终止掉，从而实现gracefully shutdown。

```bash
docker command
Usage:
    docker [options] <subcommand> [args]

Options:
    -h --help
    -v --version

Subcommands:
    help [subcommand]
    version
    pull [optoins] <image>[:<tag>|@<digest>]
    image <command> [args]
        ls
        rm <images>
    run
        --rm
            * 退出后自动删除容器
        -i --interactive
        -t --tty
        -v --volume
        --read-only
        -p [ip:]<master_port:container_port>
            * 可多次指定
        network <nework>
        -u --user <username_or_uid>
    exec

```

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea

- Configuration
    - `.dockerignore`

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
