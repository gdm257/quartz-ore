---
aliases:
  - ssh client
tags:
  - flag/APP/Network/Implement__/RemoteControl
  - flag/APP/Shell
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Command/CLI
scoop: openssh
commands:
  - ssh
ugly-cli: yes
---

- Configuration
    - `/etc/ssh/` or `C:/ProgramData/ssh/`
    - `$HOME/.ssh/`
        - 不能是个软链接
        * `chmod 700 ~/.ssh` 否则无法公钥登录
        - `config`
        - `known_hosts`
    - [利用 SSH 的用户配置文件 Config 管理 SSH 会话 - 奇妙的 Linux 世界](https://www.hi-linux.com/posts/14346.html)
    - [Windows SSH: Permissions for 'private-key' are too open - Super User](https://superuser.com/questions/1296024/windows-ssh-permissions-for-private-key-are-too-open)

- Examples
    - `ssh host ls -l` 相当于 exec
    - `ssh -o ProxyCommand="ssh jumphost nc %h %p" truehost` 跳板机
    - `ssh -o ProxyCommand="ssh jumphost -W %h:%p" truehost` 跳板机
    - `ssh -J jumphost truehost` 跳板机
    - `ssh truehost -J jump1,jump2:port,user@jump3:port` 跳板机
    - `ssh -o ProxyCommand="nc -x 127.0.0.1:1080 %h %p" truehost` socks proxy
    - `ssh -o ProxyCommand="nc -X connect -x 127.0.0.1:1080 %h %p" truehost` http proxy
    - `ProxyCommand ssh jumpserver socat - tcp:%h:%p` 如果跳板机禁用了 SSH 转发，还是有办法
    - [SSH 跳板机与代理](https://4ft35t.github.io/post/ssh-porxy/)
    - Windows - Services - OpenSSH Authentication Agent
    - [ssh转发代理：ssh-agent用法详解 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/10484531.html)

- CLI
    - `-p 22`
    - `-X` X11 forwarding
    - `-i /path/to/prikey`

- Fundamentals
    - [RSA密钥格式 | flyingice.github.io](https://flyingice.github.io/2020/07/09/encryption.html)
```bash
Public Key Format:
    * PEM (Privacy Enhanced Mail)
        -----BEGIN RSA PRIVATE KEY-----
        .{64}
        .{64}
        ...
        ...
        -----END RSA PRIVATE KEY-----
    * SSH1
        单行 `<密钥长度_int> 65537 <纯数字密钥> [comment]`
    * SSH2 - OpenSSH
        单行 `ssh-rsa <密钥>= [comment]`
    * SSH2 - IETF SECSH
        ---- BEGIN SSH2 PUBLIC KEY ----
        Comment: balabala
        .{50}
        .{50}
        ...
        ...
        ---- END SSH2 PUBLIC KEY ----
    * PPK (PuTTY Private Key)

Public Key Format:
    * PEM (OpenSSH2)    .pem
        -----BEGIN RSA PRIVATE KEY-----
        -----END RSA PRIVATE KEY-----
    * OpenSSH New Format
    * User Key File    .pri
    * SSH 密钥、GPG 密钥、SSL 证书密钥无法转换、互不通用
```
