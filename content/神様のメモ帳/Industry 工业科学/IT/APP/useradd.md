---
aliases:
- adduser
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/UserGroup
---

```bash
useradd command
Examples:
    useradd  \
        --user-group  \
        --create-home  \
        --shell '/bin/bash'  \
        loli
    useradd -D --shell /bin/bash

Usage:
    useradd [options] <username>
    useradd -D [options]

Options:
    -u --uid UID    name or ID of the primary group
    -g, --gid GROUP    name or ID of the primary group
    -G --groups GROUPS    list of supplementary groups
    -b --base-dir BASE_DIR
        base directory for the home directory
        E.g. --base-dir /home
    -d --home-dir HOME_DIR
        home directory of the new account
        E.g. --home-dir /home/loli
    -s --shell SHELL
        E.g. -s '/bin/bash'
    -c --comment COMMENT
    -k --skel SKEL_DIR
        骨架目录，是家目录的模板，直接复制一份当成家目录.
        新建的家目录的内容和骨架目录一模一样，
        软连接不会跟随，仍然是软连接文件，好评.
        还有一种方法，useradd 不要创建家目录，
        自己提前手动创建家目录.
    -e --expiredate EXPIRE_DATE
        E.g. -e '2016-08-20'
    -f --inactive INACTIVE    password inactivity period
    -K --key KEY=VALUE    override /etc/login.defs defaults
    -m --create-home    create the user''s home directory
    -M --no-create-home
    -U --user-group    create a group with the same name as the user
    -N --no-user-group
    -r --system    create a system account
    -D --defaults    print or change default useradd configuration

Description:
    -D 本质是读取或修改 /etc/default/useradd
    /etc/login.defs中的USERGROUP_ENAB
        useradd创建用户时，默认会自动创建一个和用户名相同的用户组.
    /etc/login.defs中的CREATE_HOME
        默认是否创建家目录

```
