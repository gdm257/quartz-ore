---
tags:
- Label/Industry-工业科学/IT/APP/Distro
---

## FreeBSD

[The FreeBSD Project](https://www.freebsd.org/)

[FreeBSD Handbook | FreeBSD Documentation Portal](https://docs.freebsd.org/en/books/handbook/)

[FreeBSD Wiki Category](https://wiki.freebsd.org/CategoryCategory)

[FreeBSD Developers' Handbook | FreeBSD Documentation Portal](https://docs.freebsd.org/en/books/developers-handbook/)

[FreeBSD Porter's Handbook | FreeBSD Documentation Portal](https://docs.freebsd.org/en/books/porters-handbook/)

[FreeBSD 使用手册 | FreeBSD Documentation Portal](https://docs.freebsd.org/zh-cn/books/handbook/)

[FreeBSD 移植者手册 | FreeBSD Documentation Portal](https://docs.freebsd.org/zh-cn/books/porters-handbook/)

[IdeasPage - FreeBSD Wiki](https://wiki.freebsd.org/IdeasPage)

[FreeBSD Manual Pages](https://www.freebsd.org/cgi/man.cgi)

[IRC/Channels - FreeBSD Wiki](https://wiki.freebsd.org/IRC/Channels)

[Mailing Lists | The FreeBSD Project](https://www.freebsd.org/community/mailinglists/)

[User Groups | The FreeBSD Project](https://www.freebsd.org/usergroups/)

[The FreeBSD Forums](https://forums.freebsd.org/)

入门

- 安装镜像选 disc1 就好
- pkg 二进制分发包安装
- ports 源代安装

FreeBSD 与 Linux の表面区别

* 部分命令不一样 E.g. pw, chpass
* 部分配置方法与路径不一样
    * FreeBSD 改用户的默认 shell 应该用 chsh，改 /etc/passwd 是无效的
* 二进制分发包不一样
* FreeBSD 文档简单易懂

FreeBSD 与 Linux の深层次区别

* FreeBSD 支持卸载从 ports 安装的 make install
* FreeBSD 支持 ZFS
* FreeBSD 的 hypervisor 是 bhyve，而不是 KVM
* FreeBSD 的 Jail 类似 Linux 的 Cgroup 和 Namespace
* FreeBSD 的 Docker 不是很行，高度依赖 ZFS 和 Jail
* FreeBSD 的理念跟 Arch/Gentoo 很像
* FreeBSD 支持 ELF，但不能直接跑 Linux 的 ELF，源码跨平台，需要重新编译