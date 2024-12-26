---
tags:
    - Label/Industry-工业科学/IT/APP/GUI/Desktop
    - flag/APP/Text
---

## MisakaTranslator 御阪翻译器



1. `Textractor不存在或启动失败`

别用 LE 启动游戏，MisakaTranslator 会无法 hook。同时将游戏启动文件对应的 `xxxxxxxx.exe.le.config` 删除，这是使用 LE 后自动产生的。

用 LE 启动过的程序，即便删除了 `xxx.exe.le.config`，也还是无法 hook。

……好像不是 LE 的锅。

解压个新的直接 hook 成功。即便是 LE 运行的也能 hook。

**锁定是 `settings.ini` - `LE` 的问题，LE 路径不能带有字符 `.`**



2. `settings.ini` 无法修改

我发现，
Lily 启动器打开御阪翻译时读取的设置是 `<lily)>/settings/settings.ini`；
Sandboxie `C:\Windows\SysWOW64\settings\settings.ini`
正常双击打开的是 `<Misaka>/settings/settings.ini`；

一句话，`<起始进程のcwd>/settings/settings.ini`

如果用 Lily 启动器打开，`起始进程のcwd` 就是 `LilyMain.exe` 所在目录，无法更改，哪怕你指定了起始目录，目测是御阪翻译的代码有问题，因为其他的依靠 `./setting.ini` 的程序一点问题也没有。

综上，你只能使用 `MisakaTranslator-WPF.exe` 的快捷方式。

Update：Lily 有解决办法了，需要勾选「始终以管理员身份运行」