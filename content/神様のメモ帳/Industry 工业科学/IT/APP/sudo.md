---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Shell
---

[sudo命令实现原理简析 - 知乎](https://zhuanlan.zhihu.com/p/100404099)

[后台程序员福利，运维不愿多给root权限？咱有办法 - 知乎](https://zhuanlan.zhihu.com/p/97810572)

[FreeBSD Install sudo Command To Execute Commands - nixCraft](https://www.cyberciti.biz/faq/freebsd-install-sudo-command/)

[How To Add, Delete, Grant Sudo Privileges to user on FreeBSD - nixCraft](https://www.cyberciti.biz/faq/how-to-add-delete-grant-sudo-privileges-to-users-on-freebsd-unix-server/)

```bash
visudo command

sudo command
Options:
    -h --help
    -l --list    列出当前用户 sudo 权限

Configuration:
    /etc/sudoers #sudo 用户文件
    /etc/sudoers.d/
    /var/log/auth.log #sudo 日志

visudo:
    # 注释
    <user>    ...
    %<group>    ...




apt install sudo
sudo cat /etc/sudoers | grep ALL= #查看 sudo 用户
sudo usermod -a -G sudo <user> #将用户拉近 sudo 用户组
sudo visudo #/etc/sudoers 只能用该命令编辑
<user> ALL=(ALL) ALL #/etc/sudoers 中添加这行，添加 sudo 用户
%<group> ALL=(ALL) ALL #/etc/sudoers 中添加这行，添加 sudo 用户组
    第一个 `ALL` 指示允许从任何终端、机器访问 `sudo`
    第二个 `(ALL)` 指示 `sudo` 命令被允许以任何用户身份执行
    第三个 `ALL` 表示所有命令都可以作为 root 执行
    <user> ALL=(ALL) NOPASSWD: ALL #无密码执行 sudo
    <user> ALL=(ALL) NOPASSWD: /bin/echo /bin/ls #只允许 sudo 执行 echo、ls 命令
sudo -u <another_user> whoami #以另一个用户身份执行命令
sudo bash #解决正常 sudo 无法执行 Shell 内置命令的问题，相当于临时切换成 root 的终端，exit 退出 bash
sudo <>; <>; <>; ... #sudo 多命令执行
sudo whoami 可以看出，执行命令的用户实际上是 root
```