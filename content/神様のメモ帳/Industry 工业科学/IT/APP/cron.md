---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Process
---

[CRON表达式 - CRON表达式介绍和使用 | Java 全栈知识体系](https://www.pdai.tech/md/develop/cron/dev-cron-x-usage.html)

```bash
man crontab
ps aux | grep crond
crontab -l
crontab -e #编辑当前用户（$USER）的定时任务，任务执行时 $USER 为当前 $USER，所以会读取 ~/.bashrc
crontab -e -u root #编辑指定用户的定时任务
crontab -l -u root
sudo vim /etc/crontab #全局定时任务，写法稍微有点区别，需要手动指定用户（而 crontab -e 是用户级，不需要指定用户）

    *  *  *  *  * user-name command to be executed

颗粒度小于 1min 的，请用 systemd 定时器


//debian
apt install cron #大部分情况下Debian都已安装
/etc/init.d/cron restart #重启Crontab
systemctl status cron

//centos
yum install vixie-cron crontabs #安装Crontab
chkconfig crond on #设为开机自启动
service crond start #启动

//语法
minute   hour   day   month   week   command

minute： 表示分钟，可以是从0到59之间的任何整数。
hour：表示小时，可以是从0到23之间的任何整数。
day：表示日期，可以是从1到31之间的任何整数。
month：表示月份，可以是从1到12之间的任何整数。
week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。
command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。

在以上各个字段中，还可以使用以下特殊字符：

星号（*）：代表所有可能的值，例如month字段如果是星号，则表示 满足其它字段的制约条件后 都执行该命令操作。

逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”

中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”

正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。





// 日志
/var/log/cron.log

如果 cron 已经启动了，日志还不存在，需要配置一下 rsyslog。
sudo vim /etc/rsyslog.d/50-default.conf
cron.*  /var/log/cron.log #将cron前面的注释符去掉
#重启rsyslog
#sudo /etc/init.d/rsyslog restart
sudo service rsyslog restart
sudo service cron restart




```