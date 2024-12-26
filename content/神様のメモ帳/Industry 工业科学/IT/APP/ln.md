---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Create
---

## ln

```bash
ln command
Examples:
    ln -s dir/* dir/.*    -t dst/ #批量软链接




// ln

针对文件：
ln src dst
ln dir1/* dir2
-s 软连接（默认为硬链接）
-n 把符号链接视为一般目录
-v 显示过程
-f 强制
-b 删除覆盖已有链接
Windows 上 -s 参数无法正常工作，会报错

针对目录：
ln -d dir1 dir2
在 dir2 下创建一个名为 dir1 的链接
针对目录需要超级用户权限

```