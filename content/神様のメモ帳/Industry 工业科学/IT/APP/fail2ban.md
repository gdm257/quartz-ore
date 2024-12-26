---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## fail2ban

[fail2ban/fail2ban: Daemon to ban hosts that cause multiple authentication errors](https://github.com/fail2ban/fail2ban)

[FunctionClub/Fail2ban: 最简单的防止SSH暴力破解的脚本](https://github.com/FunctionClub/Fail2ban)

[Fail2ban配合Docker使用解决暴力破解 | 杂烩饭](https://zahui.fan/posts/7b28cbbc/)


```bash
wget https://raw.githubusercontent.com/FunctionClub/Fail2ban/master/fail2ban.sh && bash fail2ban.sh 2>&1 | tee fail2ban.log
#安装
#第一步：选择是否修改SSH端口。
#第二步：输入最多尝试输入SSH连接密码的次数
#第三步：输入每个恶意IP的封禁时间（单位：小时）
#安装完成后请会重启SSH服务，请重新连接SSH会话
#一旦你成功地测试了fail2ban之后，最后一个步骤就是在你的服务器上让其在开机时自动启动。在基于Debian的发行版中，fail2ban已经默认让自动启动生效。在基于Red-Hat的发行版中，按照下面的方式让自动启动生效。

#卸载
wget https://raw.githubusercontent.com/FunctionClub/Fail2ban/master/uninstall.sh && bash uninstall.sh

sudo fail2ban-client ping
#验证fail2ban是否成功运行
#正常运行，你可以看到“pong（嘭）”作为响应

sudo systemctl enable fail2ban #Fedora 或 CentOS/RHEL 7，自动启动
sudo chkconfig fail2ban on #CentOS/RHEL 6，自动启动

tail -f /var/log/fail2ban.log
#为了测试fail2ban是否能正常工作，尝试通过使用错误的密码来用SSH连接到服务器模拟一个暴力破解攻击。与此同时，监控 /var/log/fail2ban.log，该文件记录在fail2ban中发生的任何敏感事件

iptables -D fail2ban-SSH -s 192.168.1.8 -j DROP
#如果你想要从fail2ban中解锁某个IP地址，你可以使用iptables命令

fail2ban-client status
#为了检验fail2ban状态（会显示出当前活动的监狱列表）

fail2ban-client status ssh-iptables
#为了检验一个特定监狱的状态（例如ssh-iptables)
#上面的命令会显示出被禁止IP地址列表

```