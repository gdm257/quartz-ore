---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
---

- Installation
    - 

- Configuration
    - 

- Idea
    - 

- Fundamentals
    - 

- Usage
    - 

- Description
    - ssh-keygen

```bash

    # 公钥指纹
    ssh-keygen -E sha256 -lf /etc/ssh/ssh_host_dsa_key.pub
    ssh-keygen -E sha256 -lf /etc/ssh/ssh_host_ecdsa_key.pub
    ssh-keygen -E sha256 -lf /etc/ssh/ssh_host_ed25519_key.pub
    ssh-keygen -E sha256 -lf /etc/ssh/ssh_host_key.pub
    ssh-keygen -E sha256 -lf /etc/ssh/ssh_host_rsa_key.pub
    ssh-keygen -E md5 -lf /etc/ssh/ssh_host_dsa_key.pub
    ssh-keygen -E md5 -lf /etc/ssh/ssh_host_ecdsa_key.pub
    ssh-keygen -E md5 -lf /etc/ssh/ssh_host_ed25519_key.pub
    ssh-keygen -E md5 -lf /etc/ssh/ssh_host_key.pub
    ssh-keygen -E md5 -lf /etc/ssh/ssh_host_rsa_key.pub
    ssh-keygen -E sha1 -lf /etc/ssh/ssh_host_dsa_key.pub
    ssh-keygen -E sha1 -lf /etc/ssh/ssh_host_ecdsa_key.pub
    ssh-keygen -E sha1 -lf /etc/ssh/ssh_host_ed25519_key.pub
    sh-keygen -E sha1 -lf /etc/ssh/ssh_host_key.pub
    ssh-keygen -E sha1 -lf /etc/ssh/ssh_host_rsa_key.pub

```
