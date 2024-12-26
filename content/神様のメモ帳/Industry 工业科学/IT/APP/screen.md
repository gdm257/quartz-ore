---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Shell
commands:
  - screen
ugly-cli: yes
---

## screen

[SSH 断开后使进程仍在后台运行 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/sshBackstage.html)

[在终端中把命令放到后台执行 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter06/backtty.html)

[Linux screen 命令 command not found screen 未找到命令 screen 命令详解 screen 命令未找到 screen 命令安装 - CommandNotFound ⚡️ 坑否](https://commandnotfound.cn/linux/1/365/screen-%E5%91%BD%E4%BB%A4)


```bash
apt install -y screen
apt install -y tmux

// screen
screen -dmS ac1 rm -rf /
screen rclone copy gdrive:A onedrive:B
screen command
screen -S name
screen -r [-d] name
screen -x 12345
screen -X -S name quit #强制退出
screen -ls
screen -d name
screen -r name #进入会话
screen -U #utf8模式
Ctrl+a d #分离
Ctrl+a w #子会话列表
Ctrl+a [ #进入屏幕滚动状态（复制模式），可以按 ↑ PgUp 来查看屏幕历史输出
Ctrl+a Esc #进入屏幕滚动状态（复制模式），可以按 ↑ PgUp 来查看屏幕历史输出

exit
-m            ignore $STY variable, do create a new screen session.
-d (-r)       Detach the elsewhere running screen (and reattach here).
-dmS name     Start as daemon: Screen session in detached mode. 貌似不会跟已有的会话冲突，运行完后会话不会出现在 screen -ls

有些系统下screen 你不开启session直接运行程序脚本就是无法运行，这条命令相当于打空了，我反正不知道原因，正常的linux系统不会，要确定 可以直接screen -dm command 然后原地screen -ls 来看看程序究竟运行没有


非 root 用户没有权限の问题
chmod 777 /run/screen
mkdir ~/.screen && chomod 700 ~/.screen
export SCREENDIR=~/.screen





// shell
tmux #启动
tmux new -s <session-name> #启动时给会话命名
tmux ls #查看会话
tmux at -t <会话>
tmux attach -t <会话编号or会话名> #接入对话
tmux kill-session -t <会话>
tmux rename-session -t <会话> <新名字>

// tmux 会话
c、B 前缀
c、D 退出，或者输入 exit
^D 分离会话，就是退出 tmux 但不关闭当前会话
$ 重命名当前会话
s 选择会话列表
tmux switch -t <会话>

// tmux 窗格
^% 左右分离窗格
^“ 上下分离窗格
^{ 前移窗格
^} 后移窗格
^; 上个窗格
^x 关闭窗格
q 显示窗格编号


// tmux 窗口
c 新建窗口，此时当前窗口会切换至新窗口，不影响原有窗口的状态
p 切换至上一窗口
n 切换至下一窗口
w 窗口列表选择，注意 macOS 下使用 ⌃p 和 ⌃n 进行上下选择
& 关闭当前窗口
, 重命名窗口，可以使用中文，重命名后能在 tmux 状态栏更快速的识别窗口 id
0 切换至 0 号窗口，使用其他数字 id 切换至对应窗口
f 根据窗口名搜索选择窗口，可模糊匹配

// tmux 翻頁
[ 進入複製模式

```