---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/Platform/Linux独占
- flag/APP/Process
---

[torfsen/python-systemd-tutorial: A tutorial for writing a systemd service in Python](https://github.com/torfsen/python-systemd-tutorial)

[Systemd系列文章 | 骏马金龙](https://systemd-book.junmajinlong.com/)

[systemd时代的开机启动流程(UEFI+systemd) | 骏马金龙](https://www.junmajinlong.com/linux/systemd/systemd_bootup/)

[Systemd 入门教程：命令篇 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)

[Systemd 入门教程：实战篇 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html)

[可能是史上最全面易懂的 Systemd 服务管理教程！( 强烈建议收藏 ) - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1516125)

[systemd时代的开机自启动任务 | 骏马金龙](https://www.junmajinlong.com/linux/systemd/auto_tasks_on_boot/)

[CentOS7使用systemctl添加自定义服务 - 简书](https://www.jianshu.com/p/79059b06a121)

[Linux 守护进程的启动方法 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/02/linux-daemon.html)

[17.1 什么是 daemon 与服务 （service） | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/148.html)


- Configuration
    - Service Unit
        - `[Unit]`
            - `Description`
            - `Documentation`
            - `After`
                - space separated
            - `Wants`
                - space separated
            - `Requires`
                - space separated
        - `[Service]`
            - [systemd.service](https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html)
            - `Type: notify`
            - `ExecStart`
                - entrypoint commands
            - `ExecStartPre`
            - `ExecStartPost`
            - `ExecCondition`
            - `ExecReload`
            - `ExecStop`
            - `ExecStopPost`
            - `TimeoutStartSec: <int>`
            - `RestartSec: <int>`
            - `Restart: no|always|on-success|on-failure|on-abnormal|on-abort|on-watchdog`
            - `StartLimitBurst: <int>`
            - `StartLimitInterval`
                - e.g. `60s`
            - `LimitNPROC: infinity`
            - `LimitCORE: infinity`
            - `TasksMax: infinity`
            - `Delegate: yes | no`
            - `KillMode: process`
            - `OOMScoreAdjust: <int>`
        - `[Insall]`
            - `WantedBy`
                - space separated
                - e.g. `multi-uesr.target`

```bash
systemd commands:
    systemctl
    journalctl
    systemd-analyze
    systemd-cgls
    systemd-cgtop
    systemd-run
    systemd-cat

Unit File:
    * Unit file 是 ini 文件.
    * Service unit file 文件名为 xxx.service

System Unit Search Path:
    /etc/systemd/system.control/*
    /run/systemd/system.control/*
    /run/systemd/transient/*
    /run/systemd/generator.early/*
    /etc/systemd/system/*
    /etc/systemd/system.attached/*
    /run/systemd/system/*
    /run/systemd/system.attached/*
    /run/systemd/generator/*
    …
    /usr/lib/systemd/system/*
    /run/systemd/generator.late/*

User Unit Search Path:
    ~/.config/systemd/user.control/*
    $XDG_RUNTIME_DIR/systemd/user.control/*
    $XDG_RUNTIME_DIR/systemd/transient/*
    $XDG_RUNTIME_DIR/systemd/generator.early/*
    ~/.config/systemd/user/*
    $XDG_CONFIG_DIRS/systemd/user/*
    /etc/systemd/user/*
    $XDG_RUNTIME_DIR/systemd/user/*
    /run/systemd/user/*
    $XDG_RUNTIME_DIR/systemd/generator/*
    $XDG_DATA_HOME/systemd/user/*
    $XDG_DATA_DIRS/systemd/user/*
    …
    /usr/lib/systemd/user/*
    $XDG_RUNTIME_DIR/systemd/generator.late/*


Service:
    # 注释
    [Unit]
    Description=blahblah

    [Service]
    ExecStart=command args
        * external command
        * .sh
        * .zsh (shebang line needed)
        * .py (shebang line needed)



```







简明の开机自启:
    systemctl status rc-local
        # 查看 rc-local.service 文件的路径
    cat /lib/systemd/system/rc-local.service
        # 查看自启脚本的路径 ConditionFileIsExecutable=/etc/rc.local
        # 不同发行版的路径可能不同，debian 10 为 /etc/rc.local
    vim /etc/rc.local
        # 把开机要执行的命令放这里面，最后一句最好为 exit 0
    chmod +x /etc/rc.local
        # 执行权限必须要有，否则 rc-local.service 不会运行.
        # 文件默认没有执行权限.
        # 如果你不需要自定义 Unit，rc.local 就足够了，简单直接.



sysvinit    /etc/init.d/、/etc/rc.X
upstart    /etc/init
systemd    /usr/lib/systemd

/etc/systemd/system
/run/systemd/system
/lib/systemd/system
这三个目录的配置文件优先级依次从高到低，如果同一选项三个地方都配置了，优先级高的会覆盖优先级低的。

用户和三方软件定义的配置文件一般在/usr/lib/systemd/system

开机时，Systemd只执行/etc/systemd/system目录里面的配置文件（不会执行 /usr 的）。这也意味着，如果把修改后的配置文件放在/etc的目录，就可以达到覆盖原始配置的效果。

1. vim /usr/lib/systemd/system/rclone-mount.service
2. sudo systemctl enable rclone-mount
（等同于 ln -s /usr/lib/systemd/system/rclone-mount.service /etc/systemd/system/rclone-mount.service ）
~# systemctl enable rclone-mount
Created symlink /etc/systemd/system/multi-user.target.wants/rclone-mount.service → /lib/systemd/system/rclone-mount.service.




systemd 已经成为大多数 Linux 发行版的选择，作为 pid=1 的进程，我们想要开机自启就得按照 systemd 的规则去配置。




service命令其实是去/etc/init.d目录下，去执行相关程序

systemd是Linux系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。systemd对应的进程管理命令是systemctl

systemctl命令兼容了service，即systemctl也会去/etc/init.d目录下，查看，执行相关程序

查看开机启动列表
systemctl list-unit-files | grep enable

关闭Docker开机启动:
systemctl disable docker.service
systemctl disable docker

sudo systemctl start docker
sudo systemctl restart docker
sudo systemctl status docker
sudo systemctl stop docker


[sysvinit/sysvinit.md at master · limingth/sysvinit](https://github.com/limingth/sysvinit/blob/master/pdf/sysvinit.md)

[详解 Linux 初始化过程 Init 系统 - 奇妙的 Linux 世界](https://www.hi-linux.com/posts/45475.html)


再谈 SysV (System V init) 与 systemd 启动方式

systemd对应的进程管理命令是systemctl
SysV 用的是 service
systemctl命令兼容了service的Unit

从 Ubuntu 16.04、CentOS 7 开始，systemd 成为了它们的默认启动方式。