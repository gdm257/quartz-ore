---
tags:
- flag/License/BSD
- flag/LANGUAGE/MySQL
- Label/Industry-工业科学/IT/APP/Command/TUI
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Network/Implement__/DB/Client
pip: mycli
---

- Installation:
    * `pip install mycli`

- Description
    - mycli 是一个命令行 [[MySQL]] 客户端

```bash
mycli command
Usage:
    mycli [options] [database]

Options:
    # via TCP/IP
    -H --host <host>
    -p --port <port>

    # via IPC
    -S --socket <socket_file>

    # via SSH Tunnel
    --ssh-host <ssh_host>
    --ssh-port <ssh_port>
    --ssh-user <ssh_user>
    --ssh-password <ssh_password>
    --ssh-key-filename <file>

    # options
    -u --user <user>
    -a --password <password>

```