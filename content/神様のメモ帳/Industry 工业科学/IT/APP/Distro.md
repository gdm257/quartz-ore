---
tags:
- Label/Article/APP
---

[CentOS 6、7之间的差异 — notes 0.0.1 文档](https://notes-by-yangjinjie.readthedocs.io/zh_CN/latest/os/centos-redhat/CentOS6%E5%92%8C7%E7%9A%84%E5%B7%AE%E5%BC%82.html)

[CentOS6和CentOS7的区别(干货) - 知乎](https://zhuanlan.zhihu.com/p/130892963)

[centos6和centos7的主要区别和版本选择_哈哈灾难的博客-CSDN博客_centos6与centos7的区别](https://blog.csdn.net/ct_666/article/details/112304713)

[Centos8和7的区别（参照redhat） - iwalkman - 博客园](https://www.cnblogs.com/iwalkman/p/11781234.html)

[Gentoo 上手体验 – Leo3418 的个人网站](https://leo3418.github.io/zh/2020/11/20/gentoo-hands-on.html)


```bash
Linux
Distro:
    CentOS 6
        * 太老了，没必要，除非你非 SysV 不可
        * 软件装起来有点麻烦
    CentOS 7/8
        * Cent OS 7 是一次大更新，体验跟 CentOS 6 有很大区别
        * 兼容 CentOS 6 的管理工具，除了 SysV
        * CentOS 8 的支持结束时间比 CentOS 7 要早
        * 实际体验，CentOS 7 软件包旧的要死，git 还停留在 1.x，很多重要软件都必须编译，手动安装更是家常便饭，很多软件包根本就没有，而 CentOS 8 就有
        * RHEL8使用nftables取代了iptables框架
        * RHEL8 使用 dnf 取代了 yum，其 yum 只是 dnf 的软连接
        * 综上，能不用就不用
    Ubuntu 16.04/18.04/20.04/22.04
        * Ubuntu 16.04 是一次大更新
        * 20/22 用着没区别
        * 几年使用下来，除了 ppa 源，跟 Debian 没有任何区别
    Debian
    FreeBSD
        * 纯命令行，体验不错
        * 作 server，用着觉得跟 Debian 没什么区别
        * 虽然 BSD 不是 Linux，但用起来差不多，就一起记了
    Arch
        * 体验接近 FreeBSD
    CentOS Stream
        * CentOS 已死，别用
    OpenSUSE
        * 平平无奇，没有用的欲望
    Gentoo
        * 听说很折腾，我觉得没必要
    Manjaro
        * 有坑，我是不会再碰了，宁愿直接 Arch，反正我水平够
        * DNS 解析巨慢无比，不知为何
    * 自用，我选 CentOS 7/CentOS 8/Debian/Ubuntu，都一样
    * 生产，我没得选，一般是 CentOS 678/Ubuntu/



开口就是「稳定」「企业级」「风险」系

- CentOS
- RHEL
- openSUSE
- RockyLinux
- AlmaLinux

「玩具」系

- Ubuntu
- Debian

「纯净」「稳定」「简单」系

- FreeBSD

……都是 Linux，鄙视链要不要这么卷，除了惯性，我没看到任何决定性的证据（唯一可能的是硬件驱动，但这年头了驱动肯定不会缺，即便买的奇奇怪怪的硬件，要缺大家会一起缺）。

现在 Docker 都打通了，还在那吹，实在搞不懂。

安全性？大多数公司都懒得更新，追求稳定，没挂就行

天天吹稳定性，我就问，「不稳定」是啥样的？

这个年头了，开发和运维还搞对立，实在想不通。

还有，「多年积累」是好事，但稍微有个 5 年就够了，7、8 年完全足够，25 年跟 7、8 年没有本质区别。

……用本质说话，拜托了，一个根基不存在玄学的行业也能卷出玄学，真是操蛋。

我的评价是，Windows Server 是最好的选择。





Manjaro 有毒！！！！！！！！！！！！！！！！！！
DNS 解析巨慢无比
speedtest 虽然略低，但勉强算正常
原来网络问题全是 manjaro 的锅
Ubuntu 一点问题没有~
折磨死我
重装了几次以为是配置出错
没想到是系统自带 defuff
Manjaro 是什么垃圾东西，不知道~
老老实实用 **Ubuntu** ~~真香~~
舒舒服服
一个小时搞定
什么问题也没有
输入法只要安装系统时设定语言为中文就能自带



```