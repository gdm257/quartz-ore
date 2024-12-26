---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
commands:
  - ip
brew: iproute2
apt: iproute2
pacman: iproute2
yum: iproute
dnf: iproute
---

- CLI
    - `ip netns <subcommand> [args]`
    - `ip link <subcommand> [args]`
    - `ip addr <subcommand> [args]`
    - `ip route <subcommand> [args]`
    - `ip neighbor <subcommand> [args]`

- Installation
    - 大部分发行版自带 iproute2

- Alternatives
    - net-tools 较为过时

- Examples
    - `127.0.0.1` not work
        - fix LOOPBACK
        - `ip addr show`
        - `ip addr show lo`
        - `cat /etc/network/interfaces`
        - `ip route`
        - `sudo ip route add 127.0.0.0/8 dev lo`
            - 如果路由表没有 `127` 网段
        - `ip route`
        - `sudo iptables -L -v -n`
        - `ip addr show lo`
        - `sudo ip addr add 127.0.0.1/8 dev lo`
            - 如果 `lo` 没有 `127.0.0.1/8`
        - `sudo ip link set lo down`
        - `sudo ip link set lo up`

```bash
ip --help
ss --help

ip addr
#另一个常用命令是 ss


curl http://ip-api.com/line/?fields=query
#获取当前 IP


#net-tools 早已过时，建议用 iproute2 代替
#net-tools 包含 arp, ifconfig, netstat, rarp, nameif and route 命令
apt install net-tools
ps -ef

netstat -at
netstat -l
netstat -antp | grep 3306
route -n
```
