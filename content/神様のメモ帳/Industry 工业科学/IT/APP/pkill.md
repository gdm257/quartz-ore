---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
---

```bash
pkill command
Usage:
    pkill [options] <pattern>

Examples:
    pkill -g 1234    杀死 PGID 为 1234 的进程

Options:
    -e --echo    display what is killed
    -c --count    count of matching processes
    -g --pgroup <PGID,...>    match listed process group IDs
    -s --session <SID,...>    match session IDs
    -P --parent <PPID,...>    match only child processes of parent
    -u --euid <ID,...>    match by effective IDs
    -U --uid <ID,...>    match by real IDs
    -i --ignore-case
    -f --full    use full process name to match
    -x --exact    match exactly with the command name

```