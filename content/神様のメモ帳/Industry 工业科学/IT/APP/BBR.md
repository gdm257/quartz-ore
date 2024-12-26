---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## bbr.sh

```bash
// 秋水逸冰 - teddysun.com/489.html
于是我根据目前三大发行版的最新内核，开发了一键安装最新内核并开启 TCP BBR 脚本

自带的内核版本是Linux 4.9及以上的系统已经内置BBR但默认为关闭状态。4.19 已经默认开启 BBR，例如 Debian 10+ Ubuntu 20.04。

经测试，BBR 确实有明显效果，不过本身就很烂的线路（辣鸡 CubeCloud），也只是稍稍优化罢了（从连 2K 视频一帧都放不出来，到能放出画面了，虽说卡的不行），不可能有数量级的提升，而且垃圾线路感觉都稳定多了，虽然还是跑不动。本身就不错的线路，开启后会更好些。总之开就是了。

安装：
wget --no-check-certificate -O /opt/bbr.sh https://github.com/teddysun/across/raw/master/bbr.sh
chmod 755 /opt/bbr.sh
/opt/bbr.sh

安装完重新登录检验下
uname -r

sysctl net.ipv4.tcp_available_congestion_control
返回值一般为：
net.ipv4.tcp_available_congestion_control = bbr cubic reno
或者为：
net.ipv4.tcp_available_congestion_control = reno cubic bbr

sysctl net.ipv4.tcp_congestion_control
返回值一般为：
net.ipv4.tcp_congestion_control = bbr

sysctl net.core.default_qdisc
返回值一般为：
net.core.default_qdisc = fq

lsmod | grep bbr
返回值有 tcp_bbr 模块即说明 bbr 已启动。注意：并不是所有的 VPS 都会有此返回值，若没有也属正常。


权限要求：root 用户
系统支持：CentOS 6+，Debian 8+，Ubuntu 16+
虚拟技术：OpenVZ 以外的，比如 KVM、Xen、VMware
内存要求：≥128M
日期　　：2020 年 6 月 23 日


```