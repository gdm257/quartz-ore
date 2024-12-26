---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
commands:
  - wget
---

## wget

```bash
wget command
Usage:
    wget [options] <urls>

Installation:
    sudo yum install -y wget

Options:
    -O <file>    保存为文件
    -P <dir>    保存到目录
    -x    force creation of directories
    -b --background    后台运行。如果没有 -o，输出自动重定向到 wget-log
    -q    quiet
    -c    恢复下载
    --user-agent="xxx"
    --limit-rate=1m

Description:
    * wget supports HTTP, HTTPS, FTP protocol.
    * wget v1.18 修复了一个严重漏洞.

Configuration:
    * /etc/wgetrc
    * .wgetrc

```