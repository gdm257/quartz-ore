---
tags:
  - flag/License/GPL
  - flag/Protocol/ARP
  - flag/Protocol/ICMP
  - flag/Protocol/TCP
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network/Implement__/Port/Scanner
commands:
  - nmap
ugly-cli: yes
---

## nmap

[网络扫描工具nmap - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7064323.html)

[计算机端口 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_port.html)

[怎样查看Linux端口占用 - Linux - 老鬼的博客(OldKing.net)](https://www.oldking.net/1307.html)

[ZMap 为什么能在一个小时内就扫描整个互联网？ - 知乎](https://www.zhihu.com/question/21505586/answer/18443313)

```bash
nmap command
Installation:
	* sudo yum install -y nmap
	* sudo apt install -y nmap

Description:
	* nmap 是一个 All-in-One 的网络扫描工具

Usage:
	* nmap [scan types] [options] <target>

Target:
	hostnames
	IP addrsses
	networks
	-iL <file>
	-iR <num hosts>
	--exclude <host>[,...]
	--excludefile <file>

Scan Type:
	-p <start_port>[-<end_port>]




Examples:
    nmap -p1-65536 localhost



sudo yum install -y nmap

nmap
nping

nmap <IP>
nmap localhost  #查看本地端口占用
nmap localhost -p1-65535  #1 到 65536 端口
nmap localhost -p1-10000
nmap localhost -p20-200,7777,8888
-v
-vv
--exclude 10.0.1.162
--exclude 10.0.1.162-163
--exclude 10.0.1.161,10.0.1.163

nmap 10.0.1.161-162
nmap 10.0.1.0/24
nmap -iL ip.txt

```