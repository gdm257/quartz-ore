---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Process
commands:
  - ps
ugly-cli: yes
---

## ps

```bash
apt install lsof


ps -ajx
ps -aux
ps -ef
ps -ef | grep root
ps -auxwwf #分支
ps -lu root
pgrep -l str
lsof -i:3306
lsof -p <id>
kill PID

与Linux传统的top相比，htop更加人性化。它可让用户交互式操作，支持颜色主题，可横向或纵向滚动浏览进程列表，并支持鼠标操作。

sar -u
free -m


// Windows
start /b a.bat 后台运行
tasklist
taskkill /im tomcat7.exe
taskkill /pid 12345
-t 结束该进程
-f 强制结束

wmic process where name=“进程名称” call terminate 这个不需要知道进程的PID

```