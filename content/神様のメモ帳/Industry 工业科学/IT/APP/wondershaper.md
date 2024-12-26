---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## wondershaper

```bash
//安装
限速还挺准确的
原理的话，网上比较详细的解释是WonderShaper使用tc来定义流量调整命令，使用QoS来处理特定的网络接口，对特定网卡进行带宽限速的脚本。
https://github.com/magnific0/wondershaper

直接安装：
sudo apt install -y wondersharper

手动安装：
apt install -y make git 安装依赖
git clone https://github.com/magnific0/wondershaper.git
cd wondershaper
sudo make install



//使用
wondershaper -h
wondershaper -s -a eth0
wondershaper -s -a <adapter>

ipconfig #查看本机的网卡
ip addr
route

比如我要限制eth0网卡速度，使用命令：
wondershaper -a eth0 -u 102400 #限制上传带宽为 100 Mbps
wondershaper -a eth0 -d 102400 #限制下载带宽为 100 Mbps
wondershaper -a eth0 -d 102400 -u 102400 #限制上传和上传均 100 Mbps

取消限速：
wondershaper -c -a eth0

PS：不需要对网卡 docker0 进行限速。所有容器虽然都通过 docker0，但 docker0 是用 eth0 上网的，查看 nload 也会发现 docker0 流量永远都是 0




//开机自启
systemctl enable wondershaper

启动时，默认调用的配置文件为/etc/conf.d/wondershaper.conf

vim /etc/conf.d/wondershaper.conf
[wondershaper]
# Adapter
#
IFACE="eth0"

# Download rate in Kbps
#
DSPEED="10240"

# Upload rate in Kbps
#
USPEED="10240"

#参数依次为网卡、下载、上传限制

```
