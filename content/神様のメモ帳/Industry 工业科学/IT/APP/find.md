---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Read
---

```bash
find . -maxdepth 0 | grep *.rar
find ./ -type f    只列出文件
find ./ -type d    只列出目录

fd 是 find 的替代品，相当于 find + grep。
find 可以列出指定目录及其子目录的所有文件。



1．命令格式：

find pathname -options

2．命令功能：

用于在文件树种查找文件，并作出相应的处理

3．命令参数：

pathname: find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。
-print： find命令将匹配的文件输出到标准输出。
-exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' {  } \;，注意{   }和\；之间的空格。
-ok： 和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。
find .  -exec dos2unix -k {} \;
find . ! -path ".git/*" -name "*.yaml" -exec dos2unix -k {} \;
find . ! -path ".git/*" -type f | xargs -i dos2unix -k
find . -exec python -m opencc -c s2t -i {} -o {} \;

4．命令选项：

-maxdepth 0 最深包括第 0 层的对象，第 0 层为指定文件夹下
-mindepth 1 最浅包括第 1 层的对象，第 1 层为指定文件夹的子文件夹下
-print0 配合 xargs -0 使用，避免文件名带有空格时会出错
-name   按照文件名查找文件。
-perm   按照文件权限来查找文件。
-prune  使用这一选项可以使find命令不在当前指定的目录中查找，如果同时使用-depth选项，那么-prune将被find命令忽略。
-user   按照文件属主来查找文件。
-group  按照文件所属的组来查找文件。
-mtime -n +n  按照文件的更改时间来查找文件， - n表示文件更改时间距现在n天以内，+ n表示文件更改时间距现在n天以前。find命令还有-atime和-ctime 选项，但它们都和-m time选项。
-nogroup  查找无有效所属组的文件，即该文件所属的组在/etc/groups中不存在。
-nouser   查找无有效属主的文件，即该文件的属主在/etc/passwd中不存在。
-newer file1 ! file2  查找更改时间比文件file1新但比文件file2旧的文件。
-type  查找某一类型的文件，诸如：
b - 块设备文件。
d - 目录。
c - 字符设备文件。
p - 管道文件。
l - 符号链接文件。
f - 普通文件。
-size n：[c] 查找文件长度为n块的文件，带有c时表示文件长度以字节计。-depth：在查找文件时，首先查找当前目录中的文件，然后再在其子目录中查找。
-fstype：查找位于某一类型文件系统中的文件，这些文件系统类型通常可以在配置文件/etc/fstab中找到，该配置文件中包含了本系统中有关文件系统的信息。
-mount：在查找文件时不跨越文件系统mount点。
-follow：如果find命令遇到符号链接文件，就跟踪至链接所指向的文件。
-cpio：对匹配的文件使用cpio命令，将这些文件备份到磁带设备中。

另外,下面三个的区别:

-amin n   查找系统中最后N分钟访问的文件
-atime n  查找系统中最后n*24小时访问的文件
-cmin n   查找系统中最后N分钟被改变文件状态的文件
-ctime n  查找系统中最后n*24小时被改变文件状态的文件
-mmin n   查找系统中最后N分钟被改变文件数据的文件
-mtime n  查找系统中最后n*24小时被改变文件数据的文件
```