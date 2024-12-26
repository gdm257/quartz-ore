---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Create
---

[Linux 管理文件系统 (3)：mount 挂载各种文件系统 | 骏马金龙](https://www.junmajinlong.com/linux/fsmgr_mountfs/)

[mount(8): mount filesystem - Linux man page](https://linux.die.net/man/8/mount)

[fstab(5): static info about filesystems - Linux man page](https://linux.die.net/man/5/fstab)

[mount bind 功能详解 | 骏马金龙](https://www.junmajinlong.com/linux/mount_bind/)


```bash
mount command
Description:
    * mount 挂载 文件系统 到 Linux rootfs.
    * rclone 挂载 网络文件系统 到 Linux rootfs.
    * umount 取消挂载.

Usage:
    mount [--types <types>] [--options 挂载选项] <source> <dir>
        * 该目录必须已存在，可不为空，挂载后原目录被暂时屏蔽.
    mount {--help|--version|--show-lables|--all}

Meta-switches:
    -h --help
    -V --version
    -l --show-labels
    -a --all
        * 挂载 fstab 里的所有 filesystem.
        * 默认会跳过已挂载的挂载项.

Source:
    <device>
        * E.g. "/dev/sda"
    <directroy>
        * bind 挂载选项可达到目录硬链接的效果.
        * mount --bind 与硬链接很大的不同点就是，他不会增加源文件的引用次数，相应的删除时自然也不会减掉引用次数，在删除绑定的文件时，系统会提示“cannot remove 'bindlink': Device or resource busy”，这是由mount本身的机制引起的，挂载点的取消只能通过umount来进行.
    <file>
    UUID=<uuid>
    LABEL=<label>
    PARTUUID=<uuid>
    PARTLABEL=<label>
    - 可用 blkid/fdisk 命令查看分区信息.

Options:
    -T --fstab "/etc/fstab"
    -f --fake    dry run
    -v --verbose

    -t --types <fs-types>
        * 欲挂载文件系统类型.
        * 可指定多种类型，用英文逗号分隔.
        * 不用-t时默认会调用blkid来获取文件系统类型.
        * E.g.
        * `none` 占位，一般用于 swap、bind.
        * `ext4` 目前用的最多.
        * `ext2`/`ext3`/ext4/vfat/fat/iso9660

    -o --options <options>
        * 一些挂载选项.
        * 可指定多个选项，用英文逗号分隔.
        bind
            * 原理是在内存维护了一张表.
            * 访问 bind link 时，系统直接从内存读取原始文件的inode.
            * 非常灵活，可实现目录硬链接的效果.
        loop  挂载镜像文件，如iso文件
        ro    只读挂载
        rw    读写挂载
        auto  相当于mount -a
        dev   如果挂载的文件系统中有设备访问入口则启用它，使其可以作为设备访问入口
        defaults == rw,suid,dev,exec,auto,nouser,async,and relatime
        async 异步挂载，只写到内存
        sync  同步挂载，通过挂载位置写入对方硬盘
        atime 修改访问时间，每次访问都修改atime会导致性能降低，所以默认是noatime
        noatime 不修改访问时间，高并发时使用这个选项可以减少磁盘IO
        nodiratime   不修改文件夹访问时间，高并发时使用这个选项可以减少磁盘IO
        exec/noexec  挂载后的文件系统里的可执行程序是否可执行，默认是可以执行exec，优先级高于权限的限定
        remount  重新挂载，此时可以不用指定挂载点。
        suid/nosuid 对挂载的文件系统启用或禁用suid，对于外来设备最好禁用suid
        _netdev 需要网络挂载时默认将停留在挂载界面直到加载网络了。使用_netdev可以忽略网络正常挂载。如NFS开机挂载。
        user  允许普通用户进行挂载该目录，但只允许挂载者进行卸载该目录
        users  允许所有用户挂载和卸载该目录
        nouser  禁止普通用户挂载和卸载该目录，这是默认的，默认情况下一个目录不指定user/users时，将只有root能挂载



Configuration:
    * /etc/fstab
        - filesystem table file
        - 可完全取代命令行选项，并且还可以批量挂载，也应该这么做.
        - 配合 systemd/SysV 实现自动挂载，绝大多数发行版都配置好了.
        - 配置错误很可能会导致开机失败，请用 mount -a -v [-f] 充分测试.
    * /etc/mtab
        - 已挂载的 fs 表，用来查看已挂载的 fs 及其挂载参数.
        - table of mounted filesystems.
    * /etc/filesystems
        - 没见过，不用管.
        - a list of filesystem types to try.

    # Examples
    /src-dir /dst-dir none bind
        * --options bind (mount --bind) 在 fstab 的写法.

    LABEL=cloudimg-rootfs   /        ext4   defaults        0 0
        * 来自 WSL1 的 /etc/fstab.

    UUID=xxxxxx /media/e ntfs defaults 0 0
    UUID=884eef-aeed-cb986f1  /media/sdb2    ext4 defaults 0 2
    /dev/sda4 /media/Code ntfs users,auto,rw,dev,exec,umask=002  0  0
    /dev/hda2 /media/windows ntfs-3g defaults,locale=en_US.utf8  0  0


    # /etc/fstab
    # 注释
    # 每一行由 6 个参数组成
    # <File System> <Mount Point> [FS Type] [Options] [Dump] [Pass]
    Source
        * 同命令行参数 source，写法相同.
        * 欲挂载的文件系统.
    Mount Point
        * 同命令行参数 dir，写法相同.
        * 要挂载为哪个目录.
    File System Type
        * 命令行参数 --types，写法相同.
        * 欲挂载の文件系统类型.
        * fstab 里一般只指定一种 FS type，反正我是没见过指定多种的.
    Options
        * 同命令行参数 --options，写法相同.
        * 挂载选项.
        * 默认值 `defaults`
    Dump
        * {0|...}
        * 数字0表示不使用bump程序对它进行备份.
        * 自定义其实无需考虑那么多，Dump & Pass 直接设置为 0 就行.
    Pass
        * {0|1|2}
        * 数字0禁止磁盘检查.
        * 数字1表示开机优先检查磁盘，用于根分区 /
        * 数字2表示开机不优先检查此磁盘，一般用于普通分区.
        * 自定义其实无需考虑那么多，Dump & Pass 直接设置为 0 就行.

```