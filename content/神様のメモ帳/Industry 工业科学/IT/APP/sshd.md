---
aliases:
  - OpenSSH
  - sshd
  - SSH Server
tags:
  - flag/APP/Network/Implement__/RemoteControl
  - flag/APP/Shell
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Command/CLI
ports:
  - "22"
---

- References
    - [一个SSH 公钥登录失败的问题及解决经验-阿里云开发者社区](https://developer.aliyun.com/article/530396)

- Tools:
    sshd    ssh server
    ssh    ssh client
    ssh-keygen    生成、管理和转换密钥
    ssh-agent    存储私钥
    ssh-add    将私钥添加到服务器允许的列表中
    [[ssh-copy-id]]    上传公钥指纹到服务器
    ssh-keyscan    帮助从许多主机收集公用 SSH 主机密钥
    sftp    提供安全文件传输协议的服务，通过 SSH 运行
    scp    在 SSH 上运行的文件复制实用工具

- Installation
    - Windows
        - `C:/ProgramData/ssh/sshd_config`
            - change Port
            - disable password auth
            - comment rules of `Match Group administrators`
        - `~/.ssh/authorized_keys`
        - PowerShell (Administrator)
            - `$env:SCOOP/apps/openssh/FixUserFilePermissions.ps1`
            - `$env:SCOOP/apps/openssh/FixHostFilePermissions.ps1`
        - `Start-Service sshd`
        - Enjoy.
        * 2022-09 Windows 的 OpenSSH 就是个残废，bug 一堆，千万别折腾
        * OpenSSH 用的 shell 是 command shell (cmd.exe)
        - 不需要从 Windows 应用可选功能里安装 OpenSSH Client/Server
        - 不需要！
    - [安装 OpenSSH | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse)

- Configuration
    * `~/.ssh`
        * `authorized_keys`
            * 每行一个用户公钥
            * SSH2 OpenSSH 格式，以 ssh-rsa 开头的那种
            * `chmod 600 ~/.ssh/authorized_keys`
    * [[GitHub]] pubkey
        * `umask 022`
        * `mkdir ~/.ssh`
        * `chmod 700 ~/.ssh`
        * `cd ~/.ssh`
        * `ghuser=foo curl https://github.com/${github}.keys >> ~/.ssh/authorized_keys`
        * `chmod 700 ~/.ssh/authorized_keys`
    * [OpenSSH Server configuration for Windows | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_server_configuration)
    * [Windows OpenSSH 服务器启用密钥登录 - 知乎](https://zhuanlan.zhihu.com/p/404179039)

- Usage
    - `sudo $(which sshd) -D -d -p 1234`
        - 前台运行一个新的 sshd 进程
        - 修改 sshd 配置后不要直接重启，以防配置错误导致 sshd 无法运行，从而无法连接服务器
    - `sudo sshd -t`
        - 检查配置文件是否有简单错误

- Test
    - ["Permission denied (publickey,password,keyboard-interactive)." · Issue #1358 · PowerShell/Win32-OpenSSH](https://github.com/PowerShell/Win32-OpenSSH/issues/1358)

```bash
Configuration:
    * /etc/ssh/
        * 全局 sshd、ssh client 配置
        * C:/ProgramData/ssh/ 用于 Windows 的 OpenSSH

/etc/ssh/sshd_config:
    Port 12345 #默认端口号为22，可以添加多行开多个端口
    HostKey /etc/ssh/ssh_host_rsa_key #主机私钥，可拥有多个不同私钥
    HostKey /etc/ssh/ssh_host_ecdsa_key
    HostKey /etc/ssh/ssh_host_ed25519_key
    PubkeyAuthentication yes #启用密钥认证方式
    AuthorizedKeysFile .ssh/authorized_keys #用户的 RSA/DSA 公钥，该相对路径相对于用户的 home 目录，登录哪个用户就是是哪个的 home 目录
    PasswordAuthentication no #禁用使用密码方式认证
    PermitRootLogin no #禁止 Root 账户登录
    PermitRootLogin yes #允许 Root 账户登录
    PermitRootLogin prohibit-password #随机密码
    UseDNS no #检查远程主机名是否与其 IP 地址真实对应。建议改成“no”，否则可能导致ssh连接很慢
    UsePAM yes #启用 PAM 认证


// 0.5 一键 SSH 端口更换脚本
wget https://www.moerats.com/usr/down/sshport.sh #下载脚本
bash sshport.sh #执行脚本即可
systemctl reload sshd #平滑重启 ssh server


// 0.8.1 启用公钥登录
su root
cd /etc/ssh
sed -i "/RSAAuthentication no/c RSAAuthentication yes" /etc/ssh/sshd_config
sed -i "/PubkeyAuthentication no/c PubkeyAuthentication yes" /etc/ssh/sshd_config


// 0.8.2 禁用SSH密码登录
su root
cd /etc/ssh
sed -i "/PasswordAuthentication yes/c PasswordAuthentication no" sshd_config


// 公钥认证之添加公钥
user="gdm257" && mkdir -p -m 700 ~/.ssh && curl https://github.com/$user.keys >> ~/.ssh/authorized_keys


// 0. SSH 服务
ssh -p 4551 root@173.82.219.195 #登录 ssh 服务器
sudo service restart sshd #CentOS
service ssh restart #Debian
/etc/init.d/ssh reload #平滑重启
/etc/init.d/ssh restart

systemctl enable sshd.service 开机启动
systemctl start sshd.service 立即启动
systemctl restart sshd.service 立即重启
```
