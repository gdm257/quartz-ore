---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Update
---

## mv

```bash
mv command
Usage:
    mv [options] <src>    <dst> -T    重命名模式
    mv [options] <src>... -t <dst>    丢进去模式
    mv [options] <src>... <dst>    (without -t/-T) 有歧义，极度不推荐

Examples:
    mv a.txt 'b.txt'      -T # 重命名 file
    mv VCB6  'VCB-Studio' -T # 重命名 dir
    mv -n file1 file2 dir1/ dir2/ -t 'dir' # 丢进去模式
    mv vcb-6/* vcb-6/.* -t 'vcb' #合并文件夹。丢进去模式の应用

Options:
    -n    不覆盖已存在文件
    -f    强制、覆盖
    -i    交互式

Description:
    * 更多笔记详见 cp 命令.
    * mv 不支持 'dir/.'，所以 mv 无法直接合并文件夹.
    * mv 能直接操作目录，不需要 -r.
    * mv 相比 cp 还少了许多选项.




建议使用 mv 命令之前先执行
set +H
否则感叹号 ! 会引发很多问题，执行之后 ! 就可以当作普通字符了，不需要转义

如果目标路径不存在，mv 相当于 **重命名**
如果目标路径已存在，mv 相当于 **移动到**
mv src-file non-exists-file    文件重命名
mv src-file non-exists-folder/    会报错
mv src-file exists-folder    将文件移动到文件夹
mv src-folder non-exists-folder    文件夹重命名
mv src-folder non-exists-folder/    文件夹重命名
mv src-folder exists-folder    将文件夹移动到文件夹


```