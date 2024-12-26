---
tags:
- Label/Article/APP
---

[用户和组管理 | 骏马金龙](https://www.junmajinlong.com/linux/user_and_group/)

[13.4 使用者身份切换 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/117.html)

[13.1 Linux 的帐号与群组 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/114.html)

[13.2 帐号管理 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/115.html)

[13.6 Linux 主机上的使用者讯息传递 | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/119.html)


```bash
————————————————————————————————
|                              |
|        User Management
|                              |
————————————————————————————————
View:
    * /etc/passwd
        用户名:占位符:uid:gid:用户注释信息:家目录:默认shell路径
        无敏感信息
        644 权限
        wc -l < /etc/passwd    # 查看用户数量
        awk 'BEGIN{FS=":";OFS="\t"}{$1=$1; print NR, $0}' \
            /etc/passwd    # 格式化输出用户信息
    * id

Password:
    * /etc/shadow
        保存着用户密码.
        000 该文件具有特殊属性，只有超级管理员能读写.
    * passwd
        用户能修改密码，是因为 passwd 的 suid 属性临时提升为root权限.

Create:
    * useradd    创建一个用户
    * newusers    批量创建用户

Delete:
    * userdel    删除一个用户

Modify:
    * usermod    modify a user account

Switch:
    * su

User Property:
    - uid (user id)
    - username
    - primary group
        * user 一定会属于某一个 primary group (默认与 uesr 同名)
    - supplementary groups
        * 组分为主组(primary group)和辅助组(secondary group)两种
          用户一定会属于某个主组，也可以同时加入多个辅助组
    - shell
        * 默认shell表示的是用户登录(如果允许登录)时的环境或执行的命令
        * shell为/sbin/nologin表示禁止该用户登录，因为该程序特殊
    - passwd
    - home
    - comment

User Type:
    1. 超级管理员
        * uid=0
        * 默认名为 root
        * 命令提示符是 # ,其他人为 $
    2. 系统用户
        * uid范围从201到999(不包括1000)
        * 老版本uid范围是1到499(centos 6)
        * 它们一般不用来登录，所以它们的shell一般是/sbin/nologin
        * 它们一般没有家目录
        * 也称虚拟用户、伪用户、假用户
        * 如果给这些用户授权登录口令+改shell，就可以登录，别这么做
    3. 普通用户
        * uid=1000+
        * 默认只能执行 /bin, /usr/bin, /usr/local/bin, $HOME 的文件

常见用户:
    * root (uid=0)
    * bin
    * daemon
    * mail
    * nobody
    * chrony
    * polkitd


————————————————————————————————
|                              |
|        Group Management
|                              |
————————————————————————————————
查看
追加 user
追加 group
剔除
创建
删除
重命名
组密码

List:
    /etc/group
        group-name:占位符:gid:users01,user02,user03,...


Group Password:
    /etc/gshadow

Group Properties:
    - gid (group id)
    - group name



```