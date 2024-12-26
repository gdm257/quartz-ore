---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Network
---

```bash
nssm install miniserve "D:/Portable/scoop/persist/cmder-full/bin/miniserve.exe"
nssm set miniserve AppParameters "-D -v -z -i 192.168.1.11 -i 127.0.0.1 -p 2380 -c zenburn -t miniserve E:/"
nssm set miniserve AppStdout "D:/Temp/logs/miniserve.log"
nssm start miniserve

D:/Portable/scoop/persist/cmder-full/bin/miniserve.exe -D -v -z -i 192.168.1.11 -i 127.0.0.1 -p 2380 -c zenburn -t miniserve E:/

结论出来了，miniserve 不支持非 ASCII 编码的 URL。
nginx 支持，所以还是 nginx 做 url decoder 吧……





字节：poweramp + nginx + hfs，听不了的个别曲子用 fb2k upnp

好难受，现在有 2 个选择：hfs chfs
hfs 支持盘根目录，但只支持 GBK
chfs 不支持盘根目录，nginx 部分字符乱码（完全不影响使用），但 URL 编码支持 UTF-8
算了，优先 chfs 听歌吧，反正平时用不着 hfs
……半天不到，chfs 自动挂了两次……稳定性渣得一匹，决定废除，日用还是 hfs，听不了的歌 fb2k 解决



mini-sftp-server
miniserve    URL 必须编码才能用
hfs    URL 必须编码才能用
chfs
simple-http-server    URL 必须编码才能用
simple-http-server --index -p 2390 --threads 4 -- E:/
lighttpd    看上去不错，但根本启动不了

```