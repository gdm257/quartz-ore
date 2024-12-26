---
aliases:
  - deb 分发包
  - deb 软件包
tags:
  - flag/APP/Download
  - Label/Industry-工业科学/IT/File
---

## deb 分发包

[利用cmake打deb包 · 零壹軒·笔记](https://note.qidong.name/2019/11/cmake-cpack-deb/#greetc)

[Debian 维护者指南](https://www.debian.org/doc/manuals/debmake-doc/index.zh-cn.html)

[Debian 新维护者手册](https://www.debian.org/doc/manuals/maint-guide/index.zh-cn.html)

[初识deb包的制作 - SAUCERMAN](https://saucer-man.com/operation_and_maintenance/484.html)

[Ubuntu上通过源码包编译安装软件包 · 零壹軒·笔记](https://note.qidong.name/2020/04/ubuntu-src-deb/)


```bash

// Arch

关于在 Arch 安装 deb 包：
1. 使用debtap将Deb包解压并打包成archliux package
yay -S debtap
sudo debtap -u 更新（如果没有科学上网，就先不要更新）
debtap xxx.deb
sudo pacman -U xxx.pkg
实测后，极其不建议安装 debtap，对虚拟机来说太占空间了，得不偿失



// Debian

sudo dpkg -i teamviewer_amd64.deb
sudo apt-get install -f


Dpkg是Debian及其衍生工具（如Ubuntu和Linux Mint ）的软件包管理器。 它用于安装，构建，删除和管理.deb包。 但与其他Linux软件包管理系统不同，它不能自动下载和安装具有依赖关系的软件包。

可以使用以下apt命令使用-f标志来解析和安装依赖项，该标志告诉程序修复中断的依赖关系。

sudo dpkg -r teamviewer 卸载包
sudo dpkg --purge teamviewer 卸载包并删配置


sudo apt install ./teamviewer_amd64.deb
sudo apt-get install ./teamviewer_amd64.deb

$ sudo apt-get remove teamviewer
$ sudo apt-get purge teamviewer
OR
$ sudo apt remove teamviewer
$ sudo apt purge teamviewer

gdebi是一个用于安装本地deb包的小命令行工具。 它可以即时解决和安装软件包依赖关系。 要安装软件包，请使用以下命令。

sudo gdebi teamviewer_13.1.3026_amd64.deb

要删除从gdebi安装的软件包，可以使用apt ， apt-get或dpkg命令，如图所示使用purge选项。

$ sudo apt purge teamviewer
OR
$ sudo apt-get purge teamviewer
OR
$ sudo dpkg --purge teamviewer

```