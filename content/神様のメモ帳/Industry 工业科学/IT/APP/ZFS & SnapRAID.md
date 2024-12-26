---
tags:
- Label/Article/Industry-工业科学/IT/APP/OS/Linux
---

## ZFS & SnapRAID

[ZFS 入门指北：规划与创建存储池 - Leo's Field](https://szclsya.me/zh-cn/posts/storage/zfs-setup/)

[目录级别的冗余存储：SnapRAID | wzyboy’s blog](https://wzyboy.im/post/1186.html)


比起 ZFS，我还是觉得依靠协议的存储会更靠谱，因为一个协议本身就是对多个存储设备的整合。这么看来 ZFS 不过是在内核层面进行整合，webdav nfs 是在软件层面进行整合

FUSE 运行在用户空间，ZFS 是内核级 FS

rclone 挂载对于本地文件的平均速度能达到 320+ MB/s，对服务器而言，根本达不到这个速度，瓶颈在 HDD，而不是 rclone。因此个人用户没必要 ZFS。

公司？FreeBSD 这种不兼容原本工作流的东西，有钱的大公司才会用。