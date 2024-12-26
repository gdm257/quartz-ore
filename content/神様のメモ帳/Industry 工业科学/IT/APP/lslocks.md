---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Read
---

[使用 lsof, lslocks, fuser 指令列出目前鎖定中的 file locks | EPH 的程式日記](https://ephrain.net/linux-%E4%BD%BF%E7%94%A8-lsof-lslocks-fuser-%E6%8C%87%E4%BB%A4%E5%88%97%E5%87%BA%E7%9B%AE%E5%89%8D%E9%8E%96%E5%AE%9A%E4%B8%AD%E7%9A%84-file-locks/)

[Linux的进程间通信-文件和文件锁 | Zorro’s Linux Book](https://zorrozou.github.io/docs/books/linuxde-jin-cheng-jian-tong-4fe1-wen-jian-he-wen-jian-suo.html)


```
testuser@localhost ~ $ fuser -u /home/testuser/.config/sublime-text-3/Index/LOCK
/home/testuser/.config/sublime-text-3/Index/LOCK: 16323(testuser)
testuser@localhost ~ $ ps aux | grep 16323
testuser 16323  0.0  0.5 1739384 167364 ?   Ssl  Feb23   1:36 subl

```