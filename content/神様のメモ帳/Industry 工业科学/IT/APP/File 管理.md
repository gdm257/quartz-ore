---
tags:
- Label/Article/APP
---

[Linux Linux 查看硬盘信息方法总结 command not found 未找到命令 Linux 查看硬盘信息方法总结详解 Linux 查看硬盘信息方法总结未找到 Linux 查看硬盘信息方法总结安装 - CommandNotFound ⚡️ 坑否](https://commandnotfound.cn/linux/1/390/Linux-%E6%9F%A5%E7%9C%8B%E7%A1%AC%E7%9B%98%E4%BF%A1%E6%81%AF%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93)


————————————————————————————————
|                              |
|        Virtual File System
|                              |
————————————————————————————————

[VFS(一) 虚拟文件系统概述 - 知乎](https://zhuanlan.zhihu.com/p/260949737)

[Linux上文件的权限管理 | 骏马金龙](https://www.junmajinlong.com/linux/linux_perm/)

[理解Effective UID(EUID)和Real UID(RUID) | 骏马金龙](https://www.junmajinlong.com/linux/euid_ruid/)

[Linux中umask深入理解 - 魏传柳](https://langzi989.github.io/2017/09/13/Linux%E4%B8%ADumash%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3/)

[4.6 新文件的默认用户与用户组_周老五的博客-CSDN博客](https://blog.csdn.net/zhoulaowu/article/details/14128785)

[用户和组管理 | 骏马金龙](https://www.junmajinlong.com/linux/user_and_group/)

[安全模型与权限 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_permission.html)


- chmod
- chown
- chgrp
- ACL
- umask, fmask, dmask
- 查看权限 ls -l


```bash
Linux Virtual File System 有七类文件类型

    普通文件(-)
    目录(d)
    软链接(l)
    套接字(s)
    字符设备(c)
    块设备(b)
    管道(p)

为什么不能有目录硬链接？
    因为目录下必须有名为「..」的文件，文件类型为目录，记录的是父目录的 inode。所以 Linux 不支持目录硬链接。如果支持了，可能出现多个父目录，「..」记录哪个？


DAC（自主访问控制）有哪些权限属性？

    - 所属用户
    - 所属用户组
    - 421 读,写,执行
    - suid, sgid, sbit

文件のrwx
    r: 可读
    w: 可修改
    x: 可执行

目录の421
    r: 能正常 ls -l
    w: 
    x: 

文件の421
    r: 
    w: 
    x: 

user group:
    所属 user 与所属 group 相互独立，互不影响，
    因为 group 是方便文件分享而生的一个属性
    （回想鸟叔举的例子，给不同小组的学生分享文件权限）。

SUID:
    用于二进制可执行文件，执行时获得 owner user 权限
    E.g. /usr/bin/passwd

SGID:
    用于目录。
    该目录下新建的文件和目录，自动改为该目录的属组。

SBIT:
    用于目录。
    该目录下新建的文件和目录，仅 root 和自己可删除。
    E.g. /tmp

修改这些属性的命令:
    - chown
    - chgrp
    - chmod


默认权限:
    * 平时创建文件时，我们很少会指定拥有者与用户组，
    * 但任何文件都有所属的 user 和 group，
    * 那么必定有某种默认值机制决定了新文件的属性。
user:
    - 进程の有效 user id
group:
    * (不同 distro 的处理方式不同)
    - 进程の有效 group id
    - 文件所在目录の group id
    * POSIX.1标准允许选择：
    （1）新文件的组ID可以是进程的有效组ID；
    （2）新文件的组ID可以是它所在目录的组ID。
    * Linux ext2和ext3文件系统：
    （1）新文件所在目录的S_ISGID位为1，则新文件的组ID为目录的组ID
    （2）新文件所在目录的S_ISGID位为0，则新文件的组ID为进程的有效组ID
rwx:
    - umask 针对 file & dir 即 user file-creatiopn mode mask
    - fmask 针对 file
    - dmask 针对 dir


```


————————————————————————————————
|                              |
|        Filesystem Hierarchy Standard
|                              |
————————————————————————————————

[Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)

[文件系统层次结构标准 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86)

[Linux 目录配置 | Linux 系统教程（笔记）](https://zq99299.github.io/linux-tutorial/tutorial-basis/05/03.html#linux-%E7%9B%AE%E5%BD%95%E9%85%8D%E7%BD%AE%E7%9A%84%E4%BE%9D%E6%8D%AE-fhs)

[关于linux下/srv、/var和/tmp的职责区分_frcoder的博客-CSDN博客_linux srv](https://blog.csdn.net/u012107143/article/details/54972544)

Kernal

- /boot
- /root
- /selinux

OS

- /etc
- /usr
- /usr/bin
- /usr/sbin
- /usr/lib
- /srv/www

User

- /home
- /usr/local
- /usr/share
- /opt

IO

- /media
- /mnt
- /dev
- /var
- /tmp
- /lost+found
- /run
- /sys
- /proc



————————————————————————————————
|                              |
|        File System
|                              |
————————————————————————————————

[硬盘分区的 UUID — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_uuid.html)

[inode 索引节点 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_inode.html)

[Linux硬链接与软连接实现对比 - 知乎](https://zhuanlan.zhihu.com/p/43505308)

————————————————————————————————
|                              |
|         LVM
|                              |
————————————————————————————————

逻辑卷

说人话就是 中间层。逻辑卷是 VFS 与物理磁盘之间的中间层。ZFS 其实可看作一种 Distro 原生支持的逻辑卷。




————————————————————————————————
|                              |
|        SELinux
|                              |
————————————————————————————————

MAC（强制访问控制）：SELinux 复杂，且会降低性能，因此生产环境基本不开


DAC（自主访问控制）有哪些权限属性？

- 所属用户
- 所属用户组
- 421 读,写,执行
- suid, sgid, sbit
