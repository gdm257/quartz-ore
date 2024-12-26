---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Layer
---

[PXE+kickstart无人值守安装CentOS 6 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/6442024.html)

[PXE+kickstart无人值守安装CentOS 7 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7342919.html)

[第4章 DHCP服务 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7324199.html)

[使用 PXE 和 Configuration Manager 部署 Windows 10 (Windows 10) - Windows Deployment | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/deployment/deploy-windows-cm/deploy-windows-10-using-pxe-and-configuration-manager)

[从不同网络上的 PXE 服务器启动 - Configuration Manager | Microsoft Docs](https://docs.microsoft.com/zh-cn/troubleshoot/mem/configmgr/boot-from-pxe-server)

[服务器网络启动方式探索Part1：Legacy启动篇 | C0reFast记事本](https://www.ichenfu.com/2021/11/28/server-net-boot-part-1-legacy/)

[服务器网络启动方式探索Part2：UEFI启动篇 | C0reFast记事本](https://www.ichenfu.com/2021/12/25/server-net-boot-part-2-uefi/)

[一步步搭建PXE网络装机 | 某科学的最后之作](https://yunfwe.github.io/2018/06/03/2018/%E4%B8%80%E6%AD%A5%E6%AD%A5%E6%90%AD%E5%BB%BAPXE%E7%BD%91%E7%BB%9C%E8%A3%85%E6%9C%BA/)



```bash

PXE 负责给 client 发送系统内核。
cobbler 是 PXE 的替代品。
kickstart 负责安装系统时自动应答。

PXE 原理是 Lagacy BIOS 固件执行时不读取 MBR，而是使用网卡作为 client，与服务器交互自动安装系统

PXE网卡的ROM内置了对dhcp和tftp协议的支持，允许客户机通过网络从远程服务器下载引导镜像，并加载安装文件或者整个操作系统。




【搭建 PXE Server】

// 1. 搭建 DHCP Server
sudo apt install -y isc-dhcp-server
sudo yum install -y dhcp

$ vim /etc/dhcp/dhcpd.conf    # 修改标注的两个参数即可，超时也可酌情修改
ddns-update-style none;
default-lease-time 259200;
max-lease-time 518400;
# 必须配置一个地址池，其和DHCP服务器自身IP在同一网段
option routers 172.16.10.10;
option domain-name-servers 172.16.10.10;
subnet 172.16.10.0 netmask 255.255.255.0 {
        range 172.16.10.11 172.16.10.100;
        option subnet-mask 255.255.255.0;
        next-server 172.16.10.10;    # 就是TFTP的位置
        filename "pxelinux.0"; # 告知得从TFTP根目录下载的boot loader文件名
}

DHCP主要是提供客户端网络参数与TFTP的位置，以及boot loader的文件名。
其中PXE上专门为PXE客户端下载的boot loader文件名称为pxelinux.0。



// 2. 搭建 TFTP Server
sudo apt install -y tftpd-hpa
sudo yum install -y tftp-server
sudo apt install -y dnsmasq 同时实现了 DHCP、TFTP、DNS 三种服务器，懒得分开装可以用这个，不过我没配置过

boot loader文件pxelinux.0以及内核相关的配置文件(目录pxelinux.cfg下)主要都是由TFTP来提供的




// 3. 搭建 HTTP/FTP/NFS Server
    miniserve
    apache autoindex
    nginx autoindex




```