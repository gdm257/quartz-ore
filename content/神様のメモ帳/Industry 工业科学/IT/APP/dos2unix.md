---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## dos2unix

```bash
dos2unix command
Usage:
    dos2unix [-ud] [file]    不指定file则读取stdin，写入stdout

Options:
    -u    dos2unix \r\n 替换为 \n
    -d    unix2dos




\r\n 替换为 \n
find .  -exec dos2unix -k {} \;
find . ! -path ".git/*" -name "*.yaml" -exec dos2unix -k {} \;
find . ! -path ".git/*" -type f | xargs -i dos2unix -k
（注意：一定要有{}，标示参数；以“\;”结尾； {} 和\之间一定要有一个空格）

dos2unix 默认忽略二进制文件，所以放心 find

find的exec命令将为每一个参数单独执行一条命令；xargs命令将使用一条命令处理所有的参数；故效率上xargs会高。但是当遇到参数中存在空格时，xargs命令会出错，此时只能使用-i命令处理每一个参数

find / ! -path "/proc/*" ! -path '<ignor-path2>/*' -type f -size +500M
find 排除/proc 等目录，查找根目录下大于500M的普通文件
b - 块设备文件。
d - 目录。
c - 字符设备文件。
p - 管道文件。
l - 符号链接文件。
f - 普通文件。
```