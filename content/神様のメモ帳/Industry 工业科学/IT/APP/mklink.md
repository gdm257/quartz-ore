---
tags:
- Label/Industry-工业科学/IT/APP/Command/CmdBuiltin
- flag/APP/File/CRUD/Create
---

```bash
// mklink

MKLINK [[/D] | [/H] | [/J]] NewLink ExsitTarget

无参数  文件符号链接
/D      目录符号链接
/J      目录联接
/H      文件硬链接
Link    链接名称
Target  引用的路径(相对或绝对)

经过测试，/d /j 差别没有网上说的那么大。无论是哪个，都可以理解为「无法被复制、不会跳转到 src 的快捷方式」

硬链接只能在同一个分区下创建，而软连接不受限制
快捷方式实际上是拥有lnk后缀的普通文件
符号链接（Symlink，Softlink）实际上是 .symlink 后缀的文件，是对文件或目录的引用，实际上符号链接本身是一个“记录着所引用文件或目录的绝对或相对路径”的特殊文件，通过符号链接的操作都会被重定向到目标文件或目录。可以跨盘符，可以跨主机，可以使用UNC路径、网络驱动器。
windows 貌似没有软连接，只有快捷方式和符号链接
btw，YAC 的数据库不支持符号链接、快捷方式，意味着「缓存封面」「本体不占用本地空间」绝对无法同时满足。

复制它，跟复制 src 没区别，而不是再生成个快捷方式。

修改它，相当于直接修改 src。

移动它，丝毫不会影响 src，此时明显看出就是快捷方式。

删除它，丝毫不会影响 src，此时明显看出就是快捷方式。

/j 必须绝对路径方式创建。/d 可以使用相对路径或绝对路径。

mklink /D dira tdir 和 mklink /J dirb tdir 创建 dira、dirb 对相对目录的 tdir 的符号链接和目录联接，之后将 dira、dirb 移动到其它目录下，则访问 dira 时会提示“位置不可用”，访问 dirb 时仍然正常指向 tdir

```