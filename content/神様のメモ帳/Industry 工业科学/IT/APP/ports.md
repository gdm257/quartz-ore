---
tags:
- flag/Platform/Linux独占
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Download
---

```bash
// 安装 Ports Collection
sudo portsnap fetch    #下载 Ports Collection 的压缩 snapshot 到 /var/db/portsnap
sudo portsnap extract    #解压 snapshot 到 /usr/ports


// 更新 Ports Collection
portsnap fetch
portsnap update
portsnap fetch update



安装的 Ports 可以使用 pkg delete 来删除 也可以在 Ports 目录下执行 make deinstall 命令

```