---
tags:
- Label/Industry-工业科学/IT/APP/Command/ShellBuiltin
- flag/APP/Shell/Implement__/cd
---

```bash
cd ~    # pwd: ~
pushd /    # pwd: /
popd    # pwd: ~

可以看出 pushd 与 cd 的作用一模一样，只不过 pushd 之后执行 popd 会返回到之前的目录。


```