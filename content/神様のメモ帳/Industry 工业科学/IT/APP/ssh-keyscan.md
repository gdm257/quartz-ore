---
tags:
- flag/APP/Network
- Label/Industry-工业科学/IT/APP/Command/CLI
---

- Installation
    - 

- Configuration
    - 

- Idea
    - 读取 [[sshd|SSH Server]] 的公钥并写入 `~/.ssh/known_hosts`

- Fundamentals
    - 

- Usage
    - 

- Description
    - ssh-keyscan

```bash
ssh-keyscan command
Usage:
    ssh-keyscan [options] [host | addrlist namelist]

Examples:
    ssh-keyscan -t dsa,rsa,ecdsa,ed25519 -p 22 <host>
    ssh-keyscan -t ECDSA 1.1.1.1 >> ~/.ssh/known_hosts
    ssh-keyscan -t ECDSA -p 22 127.0.0.1 2>/dev/null | ssh-keygen -E sha256 -lf -

```
