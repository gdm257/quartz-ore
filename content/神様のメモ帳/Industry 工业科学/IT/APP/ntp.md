---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Kernel
---

## ntp

```bash
#改时区（可选）
rm -rf /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

#安装
apt install -y ntp ntpdate

systemctl stop ntp                #停止 ntp 服务
ntpdate us.pool.ntp.org           #同步 ntp 时间，或
/usr/sbin/ntpdate -u  ntp5.aliyun.com
systemctl start ntp               #启动 ntp 服务，或
ntpd
systemctl restart ntpd.service
#执行完成后，VPS 就有相对精确的时间设置了
#先用ntpdate做一次同步。然后使用ntpd做日常同步
#ntpdate +crontab缺点是可能会有时钟漂移、回滚的情况，十分不推荐
#ntp适合精度要求较高的情况，优点是时间不会漂移、回滚
```