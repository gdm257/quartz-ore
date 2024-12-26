---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## netcat

```bash
readlink -f $(which nc)
看看，结果会有两种：
/bin/nc.traditional: 默认 GNU 基础版本，一般系统自带。
/bin/nc.openbsd: openbsd 版本，强大很多。

apt install netcat-traditional
apt install netcat-openbsd
sudo yum install -y netcat
不管是 gnu 版本还是 openbsd 版本，都有新老的区别，主要是传送文件时 stdin 发生 EOF 了，老版本会自动断开，而新的 gnu/openbsd 还会一直连着，两年前 debian jessie 时统一升过级，导致网上的所有教程几乎同时失效。

假设服务器 ip 为 192.168.1.2
nc 命令选项 主机 端口

// 端口开放
nc -vz <server-ip> 8080
nc -v -v -w 3 -z 192.168.1.2 8080-8083

// 传输测试
nc -l -p 8080 #server 监听 8080
nc 192.168.1.2 8080 #client 连接到 server
#两边就可以会话了，随便输入点什么按回车，另外一边应该会显示出来
#新版本一律要 CTRL+C 结束，老版本的 nc 只要 CTRL+D 发送 EOF 就会断开，不管是服务端还是客户端只要任意一边断开了，另一端也就结束了，但是 openbsd 版本的 nc 可以加一个 -k 参数让服务端持续工作。

// 文件传输


// 宽带测速
openbsd 版 1
nc -l -p 8080 > /dev/null
dd if=/dev/zero bs=1MB count=200 | /bin/nc.openbsd -n -N 103.95.207.135 8080
版 2
nc -l -p 8080 | pv
nc 103.95.207.135 8080 < /dev/zero

// 端口转发



// Windows
netstat -ano  #查看所有端口占用
netstat -aon|findstr "8081"
netstat -aon|findstr 8080

```