---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Create
---

```bash
umask command
Examples:
    umask
    # 0022
    # 查看 user file-creation mode mask
    # 后三个数字 022 为掩码
    # 则创建文件（夹）默认权限为 755

    umask 0022
    # 修改 umask，当前 shell 有效，建议写进 ~/.bashrc

```