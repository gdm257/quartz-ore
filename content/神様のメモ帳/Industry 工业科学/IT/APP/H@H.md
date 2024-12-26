---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Picture
---

[frosty5689/hath - Docker Image | Docker Hub](https://hub.docker.com/r/frosty5689/hath)


```bash
Java 7-9，或支持 SDK
至少 10 Mbps 的传出和传入带宽，且至少 200 KB/s 必须专用于 H@H
至少 10 GB 的磁盘空间（美国鸡挂了几个月才用了 7 G）
带宽（若有限制）至少为 300 MB/小时（看地区，亚洲流量大，其他区实际流量很小）
静态公网 IPv4 地址，能从互联网直接访问
一个开放端口，必须在1024-65534之间
应全天运行，但可以重新启动或偶尔长时间的停机
没有被 e 站阻挡（如韩国被阻挡）

sudo apt install default-jre
sudo apt-get install default-jre
wget https://repo.e-hentai.org/hath/HentaiAtHome_1.6.0.zip

screen -S hath
java -jar HentaiAtHome.jar

初次运行需要填写 id 和 key，然后按ctrl +a +d 即可关闭这个screen，让其在后台保持运行。
```