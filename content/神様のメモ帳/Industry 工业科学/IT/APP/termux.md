---
tags:
- flag/LANGUAGE/Bash
- flag/Platform/Android独占
- Label/Industry-工业科学/IT/APP/Command/TUI
- flag/APP/DevOps/Runtime/REPL
---

https://www.reddit.com/r/termux/

https://groups.io/g/termux


# Compile

https://wiki.termux.com/wiki/Getting_started

https://stageguard.top/2019/08/15/run-docker-on-qemu-alpine/


粗看了一下，termux 原理跟 MINGW64 真的非常像。termux 并不是什么虚拟机，无法提供各种 Linux 内核机制，termux 不过是利用了 Android 原生的功能。

你可以这么理解，将 GNU 软件的源码用 Android NDK 交叉编译，也就是编译为 Android 原生应用。termux 做的就是运行这些应用、获取应用的输出。于是 termux 顺理成章地以终端模拟器的方式运行这些应用、打印应用的输出。

可以看出，termux 做的事跟虚拟机关系不大，顶多是给交叉编译的应用一个 ecosystem（主要是 rootfs）。rootfs 就是一堆静态文件（参考 WSL 1），对 rootfs 的修改主要是由交叉编译的应用控制的。

从头到尾，都是这堆交叉编译的原生应用在运行，termux 只不过是个终端模拟器，并没有增加中间层来虚拟化。所以我说 termux 跟 MINGW64 很像，而不是像 Cygwin，因为 Cygwin 用 dll 这个中间层虚拟出了一个 POSIX 系统。要知道，MINGW64 提供的一堆原生应用可以直接用 cmd.exe 进行调用呢，同理，termux 提供的交叉编译的原生应用理论上可以直接通过 adb 或其他 Shell 来调用，当然没人会这么做就是了。

termux 做的事也跟 MINGW64 一样，调用工具链。这意味着，我们能用 termux 做什么事，完全取决于交叉编译的应用本身，交叉编译的应用有哪些，我们就能做什么事。

那么官方声称的 1000+ 交叉编译的包与应用有哪些呢？

下载工具
网络请求工具
self-host server
cli client
文本处理工具
各语言的编译器与解释器
Shell
X11 Client i.e. GUI App
PRoot
QEMU

无外乎就这几种。

termux 不是中间层，倒是 PRoot 是个中间层，PRoot 这个中间层让运行 Ubuntu etc distro 成为可能。具体原理我还没弄懂，但可以肯定的是它提供了一个中间层。

有了 QEMU，确实有无限可能，但意义不大。有用的软件大都交叉编译好了，没找到的，说明 Android 根本没这机制，例如 cgroup 和 namespace，本身就不存在编译的可能性。

另外，我不是很懂放着 Android App 不用，玩 termux 桌面环境的人是什么心态。你说玩 X11 转发还能理解，毕竟 Android App 无法直接访问 termux 的 rootfs。桌面环境……那就纯粹是玩了。



# ====== 下载 ======
## pkg

termux-change-repo

# === Process 管理 ===

## .bashrc

```bash
termux 作为终端模拟器默认使用的是 Bash Shell，支持 ~/.bashrc

```


## Service

https://wiki.termux.com/wiki/Termux-services


```bash
pkg install termux-services

sv up <service>
sv down <service>
sv-enable <service>
sv-disable <service>


```

## 调用 termux

https://github.com/termux/termux-app/wiki/RUN_COMMAND-Intent

## 环境

```
// 2、

vim ~/.vimrc
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030
source .vimrc

ln -s /data/data/com.termux/files/home/storage/shared/tencent/QQfile_recv QQ



```



## 功能

```
// 3、

音量减 -> Ctrl键
Ctrl + A -> 将光标移动到行首
Ctrl + C -> 中止当前进程
Ctrl + D -> 注销终端会话
Ctrl + E -> 将光标移动到行尾
Ctrl + K -> 从光标删除到行尾
Ctrl + U -> 从光标删除到行首
Ctrl + L -> 清除终端
Ctrl + Z -> 挂起（发送SIGTSTP到）当前进程
Ctrl + alt + C -> 打开新会话（仅适用于 黑客键盘）

音量加 -> 特殊键.
音量加 + E -> Esc键
音量加 + T -> Tab键
音量加 + 1 -> F1
音量加 + 2 -> F2
音量加 + 3 -> F3
音量加 + 0 -> F10
音量加 + B -> Alt + B，使用readline时返回一个单词
音量加 + F -> Alt + F，使用readline时转发一个单词
音量加 + X -> Alt+X
音量加 + W -> 向上箭头键
音量加 + A -> 向左箭头键
音量加 + S -> 向下箭头键
音量加 + D -> 向右箭头键
音量加 + L -> | （管道字符）
音量加 + H -> 〜（波浪号字符）
音量加 + U -> _ (下划线字符)
音量加 + P -> 上一页
音量加 + N -> 下一页
音量加 + . -> Ctrl + \（SIGQUIT）
音量加 + V -> 显示音量控制
音量加 + Q -> 切换显示的功能键视
音量加 + K -> 切换显示的功能键视图

termux-setup-storage

#模拟 root 环境
termux-chroot
输入exit可回到普通用户的文件系统

echo $HOME
/data/data/com.termux/files/home

echo $PREFIX
/data/data/com.termux/files/usr

echo $TMPPREFIX
/data/data/com.termux/files/usr/tmp/zsh
```



## rclone

```
mkdir -p ~/.config/rclone
cp ~/storage/downloads
vim ~/.config/rclone/rclone.conf

rclone mount    \
"sss-pure:"   \
~/remote/gd  \
--umask 0000  \
--allow-non-empty  \
--allow-other        \
--dir-cache-time 12h  \
--buffer-size 32M      \
--transfers 6          \
 --vfs-read-chunk-size 64M \
 --vfs-read-chunk-size-limit 1G \
--low-level-retries 200  \
--daemon    \

--read-only

fusermount -qzu ~/remote/gd

```


## foobar2000

```bash

ncat --sh-exec "ncat 45.9.10.63 43207" -l 43207  --keep-open  \
&  #如需后台加上这行



```
