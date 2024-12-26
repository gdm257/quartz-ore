---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
    - flag/APP/Process/_Theme/systemd
    - flag/APP/Process/_Theme/Service
---

## systemctl

[systemd.unit](https://www.freedesktop.org/software/systemd/man/systemd.unit.html#User%20Unit%20Search%20Path)


```bash
systemctl command:
Usage:
    systemctl [options] <subcommand> [args]

Options:
    -h --help
    --version

    --dry-run
    --quiet

    --user
    --system
    -t --type <type>
        * 指定 unit 的类型.
    --state <state>
        * 指定 unit 的状态.


Commands:
    daemon-reload
        * reload systemd manager configuration.
        * 增删改 unit file 需要 reload 并 restart 才能生效.
    daemon-reexec

    list-units
    list-sockets
        * 列出 socket units.
    is-active <pattern>...
    is-failed <pattern>...
    status <pattern...|pid...>
        * 查看 unit 状态.
        * 会显示 Description.
        * 会显示 Documentation.
        * 会显示 unit file path.
        * 会显示 unit 是否启用.
        * 会显示 进程信息.
        * 会显示 log.
    cat <pattern>...
    show <pattern...|job...>
    list-dependencies <unit>

    start <unit>...
    stop <unit>...
    kill <unit>...
    restart <unit>...
    reload <unit>...
    reload-or-restart <unit>...
    try-restart <unit>...
    try-reload-or-restart <unit>...

    list-unit-files
    is-enable <unit>
    enable <unit...|path...>
    disable <unit>...
    edit <unit>...
    get-default
        * get default target.
    set-default
        * set default target.


```