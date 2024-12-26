---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
---

## journalctl

```bash
journalctl command
Usage:
    journalctl [options] [machines]
    journalctl <meta-switches>

Options:
    -M --machine <container>

    --user
    --system
    --unit <unit>
    --user-unit <unit>

    --quiet
    -n --lines <integer>
        * 显示多少行.

Switches:
    -h --help
    --version
    --disk-usage

Log File:
    * /var/log/syslog
        - 进程的默认 STDOUT & STDERR.




```