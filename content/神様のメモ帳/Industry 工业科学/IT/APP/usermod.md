---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/UserGroup
---

## usermod

```bash
usermod command
Usage:
    usermod [options] <user>

Examples:
    usermod -a -G sudo loli    # 将 loli 追加进 sudo 用户组
    usermod -a -G wheel loli    # 将 loli 追加进 wheel 用户组



usermod -l new_username old_username #更改用户名
usermod -d /home/new_username -m new_username #更改家目录
usermod -c "First_name Last_name" username #更改显示名称

```