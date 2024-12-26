---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## proxychains-ng

```bash
// 安装
sudo yum install -y proxychains-ng
sudo pacman -S proxychains-ng
yay -S \
v2ray \
aur/qv2ray \
electron-ssr \


sudo vim /etc/proxychains.conf 全局配置
$HOME/.proxychains/proxychains.conf 用户级配置





// ProxyChains-ng
porxychains4 curl https://api.myip.com/
proxychains4  -q /bin/bash 如果想要 shell 中执行的命令自动使用代理

proxychains-ng 支持多种代理模式,默认是选择 strict_chain。

    dynamic_chain ：动态模式,按照代理列表顺序自动选取可用代理
    strict_chain ：严格模式,严格按照代理列表顺序使用代理，所有代理必须可用
    round_robin_chain ：轮询模式，自动跳过不可用代理
    random_chain ：随机模式,随机使用代理




// ProxyChains for Windows
https://github.com/shunf4/proxychains-windows

proxychains -f "D:/Portable/scoop/apps/proxychains/current/proxychains.conf"





// 解决proxychains不支持yay的问题

Get https://aur.archlinux.org/rpc.php?arg%5B%5D=petal&type=info&v=5: dial tcp 224.0.0.1:443: connect: network is unreachable

解决方法：
sudo vim /etc/proxychains.conf
将 proxy_dns #注释掉，大概在第 52 行

我试了，还是不行，会出错。

由于 go 语言问题, 直接使用 proxychains yay 命令会报网络错误

需要使用gcc-go重新编译yay和proxychains, 命令如下:
# 安装 gcc-go 替代默认的 go 
yay -S gcc-go

# 克隆 PKGBUILD 并使用 makepkg 重新编译 yay:
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# 另一种重新编译 yay
yay -S gcc-go (replace go)
yay -S yay (or yay-git)

# 克隆 proxychains-ng 并编译安装:
git clone https://github.com/rofl0r/proxychains-ng.git
cd proxychains-ng
./configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
sudo make install-config

如果老是失败，可以用 export 临时给 yay 设置代理


```
