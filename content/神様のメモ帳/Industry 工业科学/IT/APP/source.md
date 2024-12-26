---
tags:
    - Label/Industry-工业科学/IT/APP/Command/ShellBuiltin
    - flag/APP/Shell
---

> [!tldr]
> source 狗都不用

> [!error]
> 终于找到一个可能的原因了，那就是 CR LF 换行符百分百会报错。请用 [[dos2unix]] 转换为 LF 换行符

这是一个极度危险、极度玄学的命令，即便语法层面没有任何问题，source 完全有可能引发令人疑惑的报错，尤其是 `: command not found`




```bash
source xxx.sh
sh xxx.sh
bash xxx.sh
./xxx.sh


```