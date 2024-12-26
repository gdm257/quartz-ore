---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Shell
---

## locale

```bash
LANG 配置优先级
~/.bashrc > /etc/profile > /etc/locale.conf, /etc/sysconfig/i18n

export LANG="en_US.UTF-8"
export LANGUAGE="en_US.UTF-8"
locale #得到当前系统编码设置
对 bash zsh 都有效，中文换成 zh_CN.UTF-8

.bashrc: 每次终端登录时读取并运用里面的设置。
.xinitrc: 每次startx启动X界面时读取并运用里面的设置
.xprofile: 每次使用gdm等图形登录时读取并运用里面的设置
根据自己的选择，在这些文件里设置中文的 locale
如果你希望修改整个系统的编码和语言信息，可以修改系统的配置文件修改LANG，而如果你不希望影响其他用户直接在你自己的~/.bashrc中配置LANG即可


```