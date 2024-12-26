---
tags:
  - flag/License/Proprietary
  - Label/Industry-工业科学/IT/APP/Server/Service
  - flag/APP/Network/_Theme/VPS
---


## VPS

### BuyVM (FranTech)

> [!example] Reboot
> 重启，请在面板使用 `Forceful Reset`，强制重启、速度非常快


BuyVM 是 FrenTech 的子品牌。

BGP 路线，1000G 大带宽，不限流量，可买切片存储当大盘鸡，搭梯子看油管可 4K……最低配版常年缺货，堪称传家宝，2020 年还是月付 1.25 刀，2022 已经涨价到月付 3 刀而且还买不到。

我手上有一台拉斯维加斯机房，月付 1.25 刀的传家宝。2022.11 IP 被墙了，这次我想看看多久会解封。

256 G 切片存储月付 $1.25，库存挺多。

512 G 切片存储反倒是长期缺货，不过对我来说没什么用，我的 256 G 连一半都用不完。







注册购买挂载

这两就是同一家。

先在 FrenTech 注册账号。注意，他家很严，如果你打算用 paypal 付款就必须填相应 paypal 里的的邮箱与姓名。当然你用支付宝信息就可以填随意些了，不过最好还是填中国。大部分信息都无法更改。注册 ip 最好跟填的信息相同。

第二步，在 FrenTech 下单并支付（买完 CPU，才能买大硬盘块存储，并且二者地区要相同），支付完成后去 https://manage.buyvm.net，这是他家的管理面板。没看错，一个域名负责下单，一个域名负责面板，十分反人类。账号密码如果错误就点忘记密码，然后输入 FrenTech 注册时用的邮箱，之后就能重置密码，它会自动关联你的 FrenTech 账号。

第三步，面板找到 Storage Volumes，查看你购买的存储盘，后面有个齿轮，点击进入设置，选择：“Attach to Virtual Server”，确认挂载到的你的某个VPS上。

第四步，ssh 登录，先用 fdisk -l 可以看前面后台分配存储盘到VPS下成功没

fdisk -l
ls /dev/disk/by-id/

格式化硬盘：
`mkfs.ext4 -F /dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-<1234>`

挂载硬盘到：
```
mkdir -p ~/test
mount -o discard,defaults /dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-<1234> /<path>
mount -o discard,defaults /dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-4508 ~/test
```

查看挂载是否成功：
df -h

开机后自动挂载：
`echo '/dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-<1234> /root/test  ext4 defaults,nofail,discard 0 0' | tee -a /etc/fstab`


如果过程中出现错误：mkfs: failed to execute mkfs.ext4: No such file or directory
解决方法如下，需要安装 e4fsprogs



umount /root/test
umount -f /root/test
umount -l /root/test
如果失败，使用 fuser 命令
apt install psmisc
fuser -mv /root/test    # 查看使用该挂载的进程
fuser -cu /root/test    # 查看挂载文件进程
fuser -ck /root/test
fuser -mk /root/test




Note: If you try to mount the drive without formating it. you will get this error:

```bash
[root@localhost ~]# mount /dev/sda1 /data
mount: /dev/sda1 is write-protected, mounting read-only
mount: unknown filesystem type '(null)'
[root@localhost ~]# mount -t ext4 /dev/sda1 /data
mount: wrong fs type, bad option, bad superblock on /dev/sda1,
missing codepage or helper program, or other error

In some cases useful info is found in syslog - try
dmesg | tail or so.
```













- https://www.speedtest.net/result/10506683781.png
- https://browser.geekbench.com/v4/cpu/15913319
- https://clbin.com/ADzxI


管理面板跟个傻逼似的，shutdown 能成功 boot restart点了一万遍都是失败 去你的 什么玩意 shutdown以后还踏马一直显示online 重启比石头盘还难

重启放那睡了一觉起来终于成功，带宽终于恢复 G 口应有的样子。我去网上查了查，有不少 mjj 跟我遭遇一样，限速，重启才能恢复带宽，有人跑了 600 g，我才跑了 200 g 不到就这样了……

    长时间占满带宽会被限速吧 我长期跑10m/s没啥问题 现在差不多跑了5T了 2刀款
    貌似1小时内带宽不能长时间保持在100M 以上
    不过现在真的不适合挂 PT 了，buyvm 限制带宽到 100M ，带宽很悲剧，刚买的时候几乎是 G管，上下 20m/s 平常，总的来说很稳定的，所以一直留着它
    都是无限流量，拉斯维加斯的机器和网络都是升级的相对其它区域，拉斯维加斯的最好。2刀10块的现在还有
    一般凌晨1点 左右刷新库存
    先大致说一下他家的特点吧，buyvm工作人员上班后会补货,时间不确定，从晚上23:00~次日7:00差不多都有可能…低价机型2美元款补货量较少，而每月月初会比较大量的补货。低价机型应该是4人共享一个核心(其实我觉得也算不错了，只要别遇上太折腾的领居)，每加1.25美元可以增加256GB的块储存，块储存的读写速度要慢很多，但是毕竟便宜。

**实测 CPU 可以随意放飞自我**，连续几天 uptime 显示进程数高达 15 都没事

初步测试，**长时间上传下载同时跑 100 Mbps 不会被限速**

放飞自我测试，**长传下载同时 30 MB/s 跑了 25 min 没事**

Transferred:       43.621G / 43.621 GBytes, 100%, 29.761 MBytes/s, ETA 0s
Checks:               620 / 620, 100%
Transferred:          290 / 290, 100%
Elapsed time:      25m0.9s

2021/01/21 03:56:52 INFO  :
Transferred:       16.543G / 16.543 GBytes, 100%, 47.606 MBytes/s, ETA 0s
Transferred:          283 / 283, 100%
Elapsed time:      5m55.8s

Transferred:       10.950G / 10.950 GBytes, 100%, 31.367 MBytes/s, ETA 0s
Transferred:          183 / 183, 100%
Elapsed time:      5m57.4s

Transferred:       11.764G / 11.764 GBytes, 100%, 30.678 MBytes/s, ETA 0s
Transferred:          227 / 227, 100%
Elapsed time:      6m32.6s


shutdown 速度慢得很，几个小时后才能开机。Open VZ 超兽真严重。





### AkkoCloud

美国圣何塞 CN2 GIA

一句话：除了平均延迟 170、硬盘只有 15 G，其他什么都好！

国内少数地区丢包，10% 以内，其他还好。延迟实际平均 190，还能接受。宽带比较稳定，晚高峰都能稳定跑到 8k 甚至 1w，白天更好，正常能跑到 2w，也就是能看 4K 60FPS，8K 可以播得出来！


2021.06.21 akko ping ip 国内平均丢包率好几十。最近都是这个数。几个月前都是 0 丢包的。


### JustHost

入了台俄罗斯 Kazan 机房的，10 元 1 CPU 512 M 6G 200 Mbps，国内毫不意外的丢包率 100%，跑了下测速脚本看上去速度还不错，基本能跑满 200 M 带宽……说实话这台买来没几分钟就吃灰了，根本没任务跑。

### Digital-VM

[digital-vm：$9/月，10Gbps带宽，不限流量，日本/新加坡等12个机房 - 国外主机测评](https://www.zhujiceping.com/35609.html)


> 没什么印象了。


https://digital-vm.com/

KVM虚拟，SSD raid，10Gbps带宽，不限流量，自带一个IPv4，/64 IPv6；特别说明，solusvm里面显示的是限制20T流量/月，实际上官方的说法是在使用完20T之后发ticket继续获取20T...没有限制！

tos 基本可以无视，就版权需要注意。模糊说不允许滥用网络流量、硬件 IO。

有人说是 Onevps 套壳，价格都一样。
digital-vm和onevps两个的产品、定价和网站运作模式极为相似，很多人误以为digital-vm是onevps的马甲，其实这两家分别为不同公司，没有什么关系。

实测 gclone 搬运平均速度 7.5 MB/s，也就是有效带宽合计 140 Mbps这样……现在又跑到 20 MB/s 合计有效带宽 400 Mbps 了，还有待观察……又成了 13 MB/s，估计是不同时间段的原因，白天网速好点。夜晚真慢，下行速度已降到 1 MB/s，不懂是跑太久还是晚高峰。

rclone 跑了 12h，搬了 380 G；24h 搬了 470 G。

47 h 搬了 1.2 T 的 6pan
第一个 48 h 搬了 1.7 T 的 6pan
第二个 48 h 搬了 1.4 T 的 6pan，合计 96 h 3.1 T 6pan
第三个 48 h 搬了 1.3 T 的 6pan

100+ h 后直接被重启了，screen 没了，nload 查看流量被清零了，带宽也被限到 30 Mbps 左右了。奇怪的是，面板查信息时显示流量才消耗了 3.6 T，居然是 20 T 单向流量，有够良心。但为啥限我速？TOS 又没写时间限制，20 T 流量我连一半都没用到，我关机重启观察一天看看，不行就发工单……关机半小时后重启，跑了下测速脚本，恢复了，rclone 下载 gd，速度高达 50 MB/s，最后搬运 6pan，速度恢复正常。

流量统计太神奇了，怎么说我单向也跑了 10 TB，面板显示只用了 4.3 TB……



### OneVPS

onevps.cloud



TOS

使用我们的服务时，你应采取所有合理的步骤，以遵循数据保护法的规定。你不得进行我们认为违反本条款的任何活动，不得滥用我们的系统资源，包括：网络容量、CPU使用和存储。

人话，不滥用 CPU，随便跑。



体验

VPS 可选机房有：中国（香港）、新加坡、日本（东京）、美国（纽约、洛杉矶）、英国（伦敦）、荷兰（阿姆斯特丹）、瑞士（苏黎世）、德国（法兰克福）、澳大利亚（悉尼）。有些机房需要另外加钱。

我入了台德国（法兰克福），Paypal 付款（虽说可以用支付宝）。

面板显示流量只有 9.8 TB，估计是用完发工单。话说这家的默认 SSH 端口不是 22 而是 22122，这风控做的也是可以。网站足够简洁，用起来轻松。

还有发现个小技巧，选 768 M 那款要 $6，然而 $5 那款可以在选购界面加 $1 把内存提升到 768 M 甚至更高。



线路

速度慢，speedtest 150 M 也是没谁了，虽说这价格有点灵车……丢包略高，梯子肯定是不用想的了。

德国搬 OpenDrive……速度惨不忍睹，10 Mbps（满速 150），还好我半价 2 刀玩玩的。



### Hotiis

    路线不行，已退款，不会再买了。

东京单向 CN2 路线质量很一般。

延迟平均 200，丢包率很不稳定，有时丢包严重，有时能控制在 10% 以内。梯子与媒体服务器速度我还没测试，不过这路线我已经不想测了，反正也就上下行均为 20 Mbps 的带宽。

性能测试如下，总的来说很不错，硬件不会是瓶颈，硬盘也够大。

https://www.speedtest.net/result/10407290328.png
https://browser.geekbench.com/v4/cpu/15871685
https://clbin.com/kimLt

支持支付宝、微信、pp 银联、pp，估计是被薅坏了吧。



### RakSmart

双十一/黑五的爆款月付 $0.99 实在垃圾！

CPU 性能极差极差极差，单是 `NetworkManager` 占用 60% 的 CPU，跑个 `yum update` 半小时起步。顺便一提，`NetworkManager` 在正常 KVM VPS 的占用率一般都不超过 1%，即便是低配的 VPS。硬盘读写速度也慢的令人发指，单个大文件读取才 20 MB/s，小文件随机读写想都别想。

我对这家完全失去了信任。



### CloudCone

[官网](https://app.cloudcone.com)

[神代綺凜/CloudCone](https://moe.best/vps-domain/cloudcone.html)

[CloudCone 特惠](https://www.zhujiceping.com/36101.html)

[CloudCone 刚购买的VPS服务器IP被墙了怎么办？](https://cloudcone.cc/ban-ip-update.html)

[cloudcone：特价便宜VPS补货通知贴](https://www.zhujiceping.com/36101.html)


> 垃圾玩意，超兽严重，不愧是四大金刚。


【换 IP】

如果开到和谐IP，只能认栽，或者花2美元换IP，换IP请发ticket，如果说让你排队等候，可以直接在ticket里面update，据说可以优先处理，以上经验来自网友总结。


如果你的服务器处于关机状态，将只收取硬盘以及 IP 的费用，也就是说如果服务器闲置了又不想删掉的话可以关机省钱。（[官方说明](https://help.cloudcone.com/en-us/article/how-am-i-billed-for-compute-instances-x8afmx/ "官方说明")）  
不过这一计费机制只用于**普通实例**，如果是优惠套餐则有另外一套计费方案。（[官方说明](https://help.cloudcone.com/en-us/article/how-billing-works-for-promotional-plans-19bj5lr/?1513862131736 "官方说明")）


【TOS】

关于下 bt：

可以看TOS [https://cloudcone.com/policies/terms/](https://cloudcone.com/policies/terms/)
一般来说只要不要被投诉就可以，这家投诉管得严，接到任何投诉立即自动开工单处理的

下面这段说人话就是禁止 bt p2p，cpu 100% 不超过 2h，带宽 500Mbps 不超过 2h，IOPS（硬盘读写）不能太过频繁。

实测连续上传下载合计 640G（8h）没有滥用问题。

    Usage of 100% (burst CPU usage) of a vCPU core for longer than 2 hours (only applicable for Public Cloud Server Instances). There are various processes and activities which can cause this; these include but are not limited to: Perl Scripts, CGI, PHP, Python, HTTP and Malware.
    Usage of disk IOPS (burst DISK IOPS usage) of a Virtual Disk affecting other users within the same hypervisor (only applicable for Public Cloud Server Instances). There are various processes and activities which can cause this; these include but are not limited to: Perl Scripts, CGI, PHP, Python, HTTP, Malware and SWAP utilization.
    Run any file sharing, bit torrent or other P2P network services, client or server software.
    Use 500Mbps (Megabits per second) or more bandwidth throughput for longer than 2 hours, there are various processes and activities which can cause this; these include but are not limited to Proxies, Downloads and etc.



### CubeCloud

> 垃圾到了极点，号称 CN2 GIA 路线，实际速度还远远不如一般的 BGP，延迟高，SSH 经常断线，谁买谁倒霉。


www.cubecloud.net

TOS 比较宽松，就只有「禁止持续占用带宽」「禁止对CPU、带宽、硬盘资源消耗极大的软件」这种模糊的限制，当然 VPN 几乎所有服务商都是不允许的。

上了他家美洛 CN2 GIA 的车半年了，我只想说这线路经看不经用。几乎没见过丢包，去程回程都是 CN2，ping 国内实际平均 180，实际数值看上去不算烂。但是、但是，G 口带宽真是烂到家了，梯子实际平均才能跑 1k 左右……我都不敢相信这是 CN2 GIA。

神奇的是，梯子、视频等等确实慢（1080P 都看不了），但自建的音乐服务器倒是出奇的快，rclone 挂载 + 随机播放，居然跑到 10 MB/s 高达 10w 的速度，而且还是客户端的速度，也就是说峰值带宽还是挺高的，但播视频这种连续使用带宽的，除了烂就是烂。

哦网页还是能正常看的，毕竟他家不怎么丢包，延迟 200 内，将就点上网可以用的，漫画的话，需要点耐心，还有更重要的运气 ╮(￣▽￣")╭

## VPS

参考

[一些体验/评价不好的VPS商家或产品汇总 - Rat's Blog](https://www.moerats.com/archives/560/)

[IDC零基础系列——Hetzner独服使用Proxmox创建VPS | Senraの小窝](http://www.senra.me/create-vps-using-proxmox-in-hetzner-dedicated-server/)

[低价大盘鸡frantech (大硬盘VPS G口带宽不限流量 适合做私有网盘离线下载)](https://twoha.blogspot.com/2019/07/frantech-vps-g.html)

[低价大硬盘存储型VPS推荐 大盘鸡汇总](https://twoha.blogspot.com/2019/07/vps.html)

[不限流量VPS - 国外主机测评](https://www.zhujiceping.com/vps/buxianliuliang-vps)

[推荐些：大带宽VPS(最低1Gbps起)、大流量VPS、不限流量的VPS商家 - 国外主机测评](https://www.zhujiceping.com/35702.html)

[SpartanHost - Rat's Blog](https://www.moerats.com/archives/613/)

[VPS 购买经验总结](https://zhuanlan.zhihu.com/p/52925507)

[区分 ChinaNet, CN2, CN2 GT, CN2 GIA](https://zhuanlan.zhihu.com/p/52533834)

[总结：收集一些可以切换IP的VPS商家（或者动态IP的VPS）](https://www.zhujiceping.com/35961.html)

[Alipay Available VPS](http://www.hostcatalogue.com/alipay-available-vps/)

[好用的CN2 GIA VPS服务器商家整理与推荐2020 - VPS GO](https://www.vpsgo.com/cn2-gia-vps-tuijian.html)

[稳定靠谱的国内/国外便宜VPS云服务器商家整理与推荐 - VPS GO](https://www.vpsgo.com/vps-tuijian.html)

[2020 年最好用的香港 VPS 推荐和香港机房、商家整理 - 便宜VPS网](https://www.pianyivps.com/3229.html)

[VPS选购及线路推荐](https://xinbao.me/vps-recommendation/)


### 1. 香港

喵怕溺水

1. ping
2. TCP port
3. route
4. loss
5. bandwidth

阿里云

~~GigsGigsCloud~~（线路垃圾，还不如 CF）
    CLOUDLET XD(AntiDDOS)是洛杉矶高防VPS ，被D转高防，三网直连
    CLOUDLET V(LAX)是洛杉矶 CN2GIA中美最强大的线路 ，三网直连
    CLOUDLET V(HK)是香港CN2直连线路 ，三网直连
    CLOUDLET K(HK-CHINA)是香港直连线路，香港买的很好的产品，经常缺货 ，三网直连
    CLOUDLET K(Global)是只有移动直连（别买）
    CLOUDLET Basic(HK-Global)是openvz虚拟化的小鸡，不太建议了。毕竟现在KVM虚拟化是主流
    CLOUDLET K(SG-CHINA)是新加坡直连线路，三网直连
    CLOUDLET K(malaysia)是马来西亚直连线路 ，三网直连
    CLOUDLET Windows(HK)是win系统，位置香港，中国优化
    DEDICATED Server(SG)是新加坡直连独立服务器，三网直连
    DEDICATED Server是香港直连独立服务器 ，三网直连
    Virtual Dedicated Server是虚拟独立服务器，有香港/洛杉矶/新加坡，三网直连，带宽更有保证。

~~DMIT~~ 没有能用的了



### 2. 华商

喵没兴趣

CubeCloud CN2GIA 1G 65

RAKSmart 15M CN2 56

HostKVM

RAKSmart

GGC V LAX 60 下架

说实话我对国人 ISP 是很不放心的，一百个不放心。不过我就是馋它性价比 + 能用。要求不高，IP 能用一个季度就行。



### 3. 国外

SugarHosts

linode【信用卡】

CloudCone

HostDare

DigitalOcean


### 4. CN2

如果你是找建站美国VPS，那么老王推荐你最好是CN2 GIA，再次也要CN2 GT，已经在物理位置上落后了，线路再差那就没得玩了

我们常用的CN2 GIA VPS机房包括洛杉矶CN2 GIA、圣何塞CN2 GIA、香港CN2 GIA、新加坡CN2 GIA等，个人用的比较多的是洛杉矶CN2 GIA线路，带宽给的比较大，并且价格也比较合适。所推荐的机房都是VPS GO自己用的或者长久运营的靠谱VPS商家。

    传统163骨干网：这是最常见也是最普通的线路，也叫ChinaNet(AS4134)，没有针对电信用户优化的线路，一般走的就是这个承载网络类型（全程202.97节点），因为用的人多，线路也没有优化，所以在晚高峰会出现线路卡顿，以及丢包率高的情况。

    CN2 GT线路：GT是Global Transit的缩写，CN2 GT也是CN2线路的一种，但是是CN2线路中的中端产品，在CN2里的等级比较低，去程和回程都会有202.97传统节点的出现。去程 CN2 GT 的标志是本省到出口省用的是 202.97 节点，出口省到国际用的是 59.43 节点。也就是只用跨境才会使用 59.43。

    CN2 GIA线路：GIA是Global Internet Access的缩写，CN2 GIA自然也是CN2线路的一种，并且是CN2线路中的高端产品，在CN2里的等级最高，CN2(AS4809)，跨省也是 59.43，只有省内才用 202.97。CN2 GIA线路一般比较稳定，速度较快，丢包率低。

    QoS是一种控制机制，它提供了针对不同用户或者不同数据流采用相应不同的优先级，通俗一点讲，到了晚高峰，很多人抢着一起用国际出口的带宽，QoS就通过控制，让线路级别高的用户（政府用户/企业用户/CN2线路）先出去，而传统163骨干网可能优先级不够甚至会被直接丢弃，于是就出现了掉包率高的情况。因此，163骨干网和CN2优化线路的最明显的区别就是，前者属于可能被QoS的普通线路，而后者则是有优先出口权限的优化线路，而我们用起来的直观感受就是CN2线路相比于163骨干网更加的稳定，更快，丢包率低。

    CN2 GT和CN2 GIA都保证国家与国家之间的传输在CN2骨干网（59.43节点）上进行，即国际出口走59.43。CN2 GT 的省级出口为 202.97 节点，只有在国际出口时才会走59.43，对比上述两张图可以看到，从南京电信->上海电信，CN2 GT是202.97，而CN2 GIA则已经走59.43了

    去程路由判断就直接有traceroute在线工具（地址：https://tools.ipip.net/traceroute.php）测试即可，以下面的搬瓦工CN2 GIA为例，省级出口以上都是59.43高速节点，因此是CN2 GIA类型

    回程路线判断则需要自己的VPS上借助mtr工具，执行命令mtr -rw ip查看回程路由，依然以搬瓦工的CN2 GIA线路为例（依然保证省级出口以上都是59.43高速节点）

    尤其是电信没GIA没法用的


【洛杉矶 CN2 GIA】

HostDare提供电信CN2 GIA，移动联通直连线路，同时HostDare提供大硬盘服务器，最高450G硬盘容量

GigsGIgsCloud家的产品线比较多，洛杉矶CN2 GIA、高防洛杉矶CN2 GIA都有，洛杉矶也是三网CN2 GIA，1Gbps带宽。

HostDare year

Surga 10G 99 缺货

DMIT CN2 GIA的优势就是提供美国原生IP，价格不便宜，好像实际建站效果也不是很好，不少朋友给老王吐槽过他家的CN2 GIA不稳定。DMIT可以花钱购买高防IP

RFCHOST是一个国人商家，上海的一家公司，叫花卷科技，2015年成立。RFCHOST CN2 GIA用的是安畅机房，但是库存似乎不多，很多时候都是断货，价格也比较贵，并且一般没有优惠码

魔方云 CubeCloud 也同时提供CN2 GT线路和CN2 GIA线路，带宽是100Mbps，可以加钱升级为1Gbps。魔方云CN2 GIA采用KVM架构，纯SSD阵列，CN2 GIA接入，电信/移动/联通三网直连，1Gbps带宽。国人运营



【香港 CN2 GIA】

喵不选这个。

香港CN2机房一般特色就是比较贵，毕竟机房成本都比别的地方贵不少，而且一般很少三网CN2的，香港CN2基本都是电信CN2，联通和移动直连，不过直连的香港机房速度也是非常快的，老王用的不多，一般都是腾讯云、阿里云这两家的香港机房用的比较多。

【新加坡 CN2 GIA】

喵不了解。



### 5. 大盘鸡

在这里我想说除非是非常大的商家，不然那些不支持PayPal的小商家我们还是要尽量远离

有哪些独服推荐吗
给钱就办事
便宜大带宽无限流量 = hetzner
适中的带宽出口稳定的可以直接去leaseweb 流量非无限
去auction里面买
是没有setup fee的
总之看你给多少钱以及用途
开高配GCP to GD
多少速度都给你走

最近搞个项目，需要G口和SSD大盘鸡，比较了好几家最后决定试试hetzner，20T月流量应该够了。OVH虽然不限量但价格翻倍，其他商家应该没有能长时间占用带宽的了。Hetzner的Volume需要自己合并到根目录。
hetzner配置(2C+2G+20T+G口+90GB NVME = 5.5€)：



适用于我的个人总结，第一，BDRip 离线用大盘鸡最重要的是 tos 支持 bt；第二，不长时间占资源。版权不用管，反正我自己只看二次元，欧美鸡一般也不会管日本小姐姐。

本想入 FranTech（buy-vm），结果 Paypal 付款后一直不给过。没想到它的 tos 要求 payment details 跟账号 name/email 匹配……以后读 tos 时要注意一下。

www.kimsufi.com 人称KS，网上有人出 KS1，可以看看
俄罗斯，荷兰，罗马尼亚、立陶宛那些都可以无视DMCA
contabo.com
https://secure.hostsolutions.ro/aff.php?aff=595 hostsolutions无视版权bt的灵车。还是建议做PT和图床
Smarthost 宽松
nexusbytes.com
ShockHosting 略宽松
https://www.hostens.com/?affid=1034 AFF有百分之50折扣
https://www.ovh.ie/black-friday/
hosthatch.com Unmetered可以一直跑满宽带
Hostus 略宽松，禁止 Minecraft、FFMPEG、硬件资源滥用、网络滥用
Hostens TOS只说了不能做违反版权的事情
欧洲大盘鸡挂buyvm的卢森堡UltraVPS.eu
CrownCloud
online
virmach，tos 忒他喵的变态了
oneprovider： 好货不好找，pt吧知名盒子，不过现在依旧买不到
budgetvm这家真的垃圾，装个bt就说被dd了
Budgetnode 有黑历史。略宽松，禁止 长时间 100% CPU、版权smarthost：价格中规中矩


下面都是独立服务器！
OVH-官网：https://www.ovh.ie/ OVH 的官方站点，第一次购买要验证身份，支持身份证，验证完后免税！
OVH-soyoustart：https://www.soyoustart.com/ OVH 的中端品牌，法国站需要验证中国身份才可免税！
OVH-kimsufi: https://www.kimsufi.com/fr/serveurs.xml OVH 低端品牌，带宽一般都是 100M，目前有部分升级到 250M！
SYS 和 KS 库存监控：https://checkservers.ovh/ 支持邮件订阅，支持特价KS 系列监控，非常全面！
KS/SYS 系列免税：主要是需要给客服发工单申请，可以用身份证或者护照+银行卡英文账单免税，具体看人品！
注意事项：
①支持 paypal 支付，但 paypal 必须绑定的是信用卡，美区无税，欧元区需要免税，否则有 20%的税。
②购买时如果地址不能选择 China，可先选择 Hongkong，然后再联系客服更改。
③sys 系列及 OVH 官方机器基本都没有安装费，ks 系列一般有 6.99 欧到 9.99 欧不等的安装费。
online-官网：https://www.online.net/en online 官网。
online-scaleway：https://www.scaleway.com/ online 的子公司，专门卖 vps 的。
online-特价页面：https://www.online.net/en/special-offers 每年有活动的时候就是这个页面。




被干的其实很多都是自己资源使用太多被主机商干的，别听有些人瞎bb版权，自己下都没下过。心照不宣懂不懂啊，又不是做网站发布资源，只要不是下蜜罐谁投诉你，要是分辨资源都不会全找的蜜罐那我表示叹服

你美国鸡下日本片，没人管你，你美国鸡下载最新上线的美国大片，就会有机率收到版权警告邮件



### 6. NAT

（很遗憾，NAT 商家太少，高性价比的长期断货，目前看来是不用想了）

NAT VPS 与 VPS 的唯一区别：NAT 没有公网 IP，只有固定的内网 IP（内网指的是拥有公网 IP 的网关后面的局域网）。平时我买的 VPS 都是享有公网 IP 的。

「有公网 IP，但只能用特定端口」的说法是错误的。这里说的没有公网 IP，是真的没有公网 IP，如果你登录 NAT VPS 并用 ip 或 nload 命令查看本机 IP，就会发现根本没有公网 IP，只有固定的内网 IP（这个内网 IP 是由网关分配的）。

事实上，真正拥有这个公网 IP 的机器是一台网关。这个网关会把特定端口接受到的数据包转发给内网的某台机器（你的 NAT VPS）。是不是很眼熟？没错，这不就是我们平常家宽的上网步骤吗，不就是标准的 NAT 嘛。跟家宽联网的不同点就是网关的公网 IP 和端口是固定的，内网 IP 也是固定的。

联通的国际出口带宽是三大运营商中比较好的，看一些大神的文章了解到线路到亚太和俄罗斯都很不错，其中以北方联通最佳，NAT提供商的联通机器大都分布在徐州、许昌、枣庄等地

NAT VPS 中转 V2Ray：

假设 IP 为 1.1.1.1 的海外服务器 A 运行了 V2Ray（443 端口，域名为 loli.loli），你在 Qv2ray 中配置好了服务器 A 的 V2Ray 节点。这时你买了一台 IP 为 2.2.2.2 端口为 233 的 NAT VPS，要怎么操作才能中转呢？很简单，只需 2 步：

1. v2ray 客户端把节点的目标服务器从 loli.loli:443 改为 2.2.2.2:233（如果服务器 A 有 TLS，还需要把 TLS 的服务器改为 loli.loli）
2. NAT VPS 设置 socat 转发，把 2.2.2.2:233 转发到 loli.loli:443

这实质是对服务器 A 进行反向代理，客户端不会有感知，客户端会以为 NAT VPS 就是运行 V2Ray 的 VPS，实际上 NAT VPS 是进行了中间人攻击，

firewalld
UFW
iptables
socat（推荐这个）
haproxy，不要用，它不支持 UDP 转发


1. 异株湖：国人新商家（请自行判断是否灵车），提供美国安畅机房CN2线路VPS，也提供国内NAT VPS、独服等产品。无需实名，相对来说机器配置好，性价比高，美西CN2 GIA VPS也很给力。官网：https://www.eve.bz；

2. AkkoCloud：真·二次云，官网浓浓的二次元风格，卖萌撒娇。主营业务众多，美西、德国CN2 GIA年付VPS很给力，也提供国内大带宽NAT VPS和独服。官网：https://www.akkocloud.com；

3. 云筏科技：2019年成立的国人商家，国内业务主要是面向专业/科研领域的云计算、高性能计算，也提供虚拟主机、CDN服务；国外业务主要是大容量、大流量、高IO的KVM/NAT VPS，性价比很高。官网：https://www.cloudraft.cn；

4. CloudIPLC：从名字就可以看出，这家主营IPLC线路VPS，购买国内机器需要实名，官网：https://www.cloudiplc.com；

5. OLVPS：国内知名的NAT VPS商家，也提供OpenVZ和KVM VPS。原官网 t667.com 已被污染，目前可直接打开官网：https://olvps.com/；

6. UOvZ：国人vps商家，主营国内外vps，也提供独服、IPLC和NAT VPS。官网：https://www.uovz.com。



### 旧版

### 安全

信息量很高
身份证号
手机号
手机 IMEI 串号
网卡 MAC 地址
邮箱地址
家庭住址

信息量中等
工作单位
毕业学校
生日（包含“年月日”）
籍贯（精确到区县）

信息量很低
性别
星座
年龄
籍贯（精确到省份）

如果几个帐号在【公网 IP 地址】上表现出某种相似性，并且次数足够多，那这些帐号就有可能存在关联性。
◇原则1：“虚拟身份”的划分越细越好
◇原则2：对于匿名性要求很高的身份，包含的帐号要尽量少
◇原则3：一个“帐号”只能隶属【一个】身份
◇原则4：需要匿名的“虚拟身份”，其所属的“帐号”与其它身份的帐号必须【彻底隔离】
◇对于匿名性要求很高的身份，【不要】在手机上操作相关帐号


### 建站用途

0. ~~内存 512M 绝对不够，请找 1G。~~ 线路好 + 速度快，除了这两个其他什么也不要，要了你就买不起。这是用来作反代的，并跑一些无依赖的服务。
0. 延迟并没有想象中的那么重要，毕竟150ms和50ms的差距对我们人来说，感官上到底有多大的差距呢？所以在选择建站VPS时，延迟可以不用看的那么重要，主要是线路质量要高，不能掉包。
1. 所有VPS服务器都会超开，不超开的服务器你用不起。尽量选择KVM架构会好些，OpenVZ架构的服务器，可超开的数量更多。
2. 没有备案的只能选择国外机器。有备案的域名可选择性则比较大。
3. 域名没有备案的一般可选择的稳定地区主要有香港、日本、韩国、美国这四个地区。理想的地区线路优先度排序：香港>韩国>日本>美国
4. 很多日本的服务器到国内的线路是绕路走其他地区的，而不是直接直连到国内。tracert路由追踪可以检测出网络A点到B点之间经过的路由信息，从而判断出所走的网路线路。
5. 延时及路由测试，有可能你当时测试结果非常出色，但是后期线路是有可能更改的。所以说我们选择时候尽量选择高质量的线路。
6. 线路优先度CN2 GIA>CN2 GT>163直连
7. 国内：买阿里云腾迅云之类，基本没什么好测试的。尽量选北上广、河南、江苏等地的服务器。其他的什么陕西、贵州、山东、内蒙古等地尽量不要选。其他小厂商谨慎选择。购买前确认是否有IDC资质证书，不是营业执照。
8. 国内：服务器的线路选择问题，有BGP就选BGP，没有BGP选电信，电信带宽质量相当不错。联通和移动尽量不要选择。
9. 关于建站服务器的选购总结：很多网站发的VPS测评大多都不可靠。为什么不可靠？测评得出的下载速度，延时等，跟VPS的母服务器有关，可能当时母服务器只开了他一台VPS，这样测出的硬盘速度、带宽等都比较好但是你购买后这台服务器可是会不断的开VPS的，结果就是硬盘速度越来越差，带宽可用的越来越小。所以说顶多有个参考意义，不可当真。
10. 机房的QOS它限制了连接数等参数。你测速是测不出来滴，你买到机器测他个几小时也是能跑满低，但是你一上业务，并发高，连接数多，你放心，带宽绝对上不去。加钱吧少年。
11. 国内电信1G带宽价格在1万左右，低于此价格不要买。
12. 国内移动1G带宽价格在四千到5千左右，低于此价格不要买。
13. 美国1G独享不限流量，春带宽价格5000左右，低于不要买。


### 代理用途

0. 延时波动可以稍稍放宽。带宽要大。
1. 作为代理用途，我们需要的就是带宽大。这一点关系到价格问题，很多用户就没法选择香港、韩国、日本等地区的服务器了。有钱例外。
2. 美国的服务器带宽一般都能跑到2M每秒的速度，换算成带宽大概是20M带宽。很多服务器刚买回来不安装BBR或者锐速等网络优化软件的话，到国内可能只能跑个几百K左右。
3. 如果是普通的直连线路和CN2 GT线路建议选择锐速。如果是CN2 GIA的网络建议安装BBR。BBR是优化网络数据传输的，锐速则是比较暴力。直接多倍发包。一个数据多发几遍来提升网速。
4. 代理服务器只有国外可选，土豪就选香港、韩国、日本。非土豪买搬瓦工CN2 GIA、吃不起饭的买美国普通直连VPS。
5. 直连VPS推荐一家：Cloudcone


### 下载用途

波动大但带宽高。下载服务器推荐 [virmach](https://link.zhihu.com/?target=https%3A//billing.virmach.com/aff.php%3Faff%3D4414) 这家，他家的CPU使用限制基本可以无视。另外两个推荐这家的特点就是，带宽口大，10G的带宽口。实际使用大概能用30M左右的带宽，另一点就是硬盘大。


### 购买注意事项

下面的 First Name（名字）、Last Name（姓）、Company Name（公司名）、Address1、Address2、皆可随便写，不用填写真实信息，City、State、zip code（邮编）、手机号填写你自己对应的信息即可（注意：地区和ip还是严格对应的，比如你注册的ip在中国就不要写美国，对于地址你稍微虚构一下是可以的，比如你在南京，你写上海也是可以的，但不要太离谱，不然订单可能会被误判为欺诈）



### 国人或者华裔商家

https://www.hostkvm.com

日本东京/日本大阪可选，网络由SoftBank、KDDI、NTT和IIJ混合接入，四网BGP随机切换。大宽带，有提供了Windows 2003、2008、2012，支持支付宝！

 

https://www.hkserversolution.com

日本大阪机房，双软银线路，原生日本IP，只算单项流量，可支付宝

 

https://www.kvmla.com

日本东京、大阪机房，走软银，有中文版Windows系统，可支付宝

 

https://www.locvps.com

日本东京和大阪，基于Xen虚拟，提供Windows系统，带宽较小，适合建站，可以支付宝！

 

https://www.pzea.com

日本大阪机房，软银、KDDI等混合线路，有提供Windows系统，支持支付宝！

 

https://zheye.io

日本大阪机房，50Mbps带宽，支持Windows系统，支持支付宝！

 

https://www.jwdns.com

日本大阪机房，支持Windows和Linux系统，可以支付宝付款！

 

https://hxkvm.com

日本大阪机房，管理严格，100Mbps带宽，适合建站，可支付宝！

 

https://www.gke.cc

日本机房，高性能，限制带宽，适合建站等用途，有Windows系统，可以支付宝！

 

www.aoyouhost.com

日本机房，限制带宽，不限制流量，适合建站，可以支付宝！

 

https://sa.net/cn/

日本大阪和东京机房，机器接入1Gbps带宽，每个VPS限制100Mbps带宽，支持支付宝！




### 东方网络
1 级即可，5、60 个节点。2 级只是多了游戏节点。自从大概 5 月份遭受攻击以来，表现糟糕，现 7 月份，只有约一半能用，且都只有不到 10M 的速度，已经关闭注册，等 1、2 个月还不行只能弃了。有少数几个 100M 的机器。

### 喵帕斯
1 级只有 5、6 个节点，大部分能用，但只有 10M 速度，慎购。
2 级表现良好，各地区速度基本都能满足，冷门地区节点少，30 略贵。2 级喵帕斯与 JMS 二选一。

### JMS
稳定、高速、便宜、灵活！作为防失联的最终手段之一。但就怕没了、或清除过期用户。2 级喵帕斯与 JMS 二选一。

**被墙自动换 IP，无须担心 IP 被墙！！！**

要注意的是，Country 选项记得选择 **China**，付款方式选择 **Alipay**

打开 [https://justmysocks1.net/members/clientarea.php?action=products](https://justmysocks1.net/members/clientarea.php?action=products)

或者在 Just My Socks 官网菜单，选择 **Services > My Services**

[Just My Socks 官网](https://to.affpass.com/go/jms) (已被墙)
[Just My Socks 备用官网](https://to.affpass.com/go/jms)
[搬瓦工新手入门完全指南：方案推荐、机房选择、优惠码和购买教程](https://www.bandwagonhost.net/4518.html)



### 一些体验/评价不好的VPS商家或产品汇总

**1、Hosticated、x3host、TweNtion**

- 这三个应该是一家，`VPS`宣称不限流量，但流量限制严重。
- 退款时各种推脱。
- `paypal`争议后，就忽悠你取消争议，给你退款，但一直墨迹不退款。
- 对这样的商家，`Paypal`争议，没有得到退款，坚决不能取消争议！！！

**2、Hostodo的OpenVZ VPS**

- `Hostodo`的`KVM VPS`还能用，`OpenVZ VPS`超售的一塌糊涂，安装个系统都会莫名其妙宕机。
- 服务还不错，`tk`回复快。

**3、BudgetNode**

- 官网写的`3`天退款保证，但各种理由推脱，去`paypal`争议，直接删除账号。

**4、TragicServers的OpenVZ VPS**

- `TragicServers`的`KVM VPS`很不错，稳定且国内速度好，我一直在用，但`OpenVZ VPS`超售太多。
- 服务挺不错，回复及时。

**5、noez.de**

- 需要德国电话验证，但需充值后购买，退款还需要`5`欧费用。谨慎购买！！

**6、KrakenServers**

- 买的达拉斯`1G KVM`，结果最少有半个月`VPS`后台账号被删。发退款不回。
- `paypal`争议后，才积极联系，说可以换到洛杉矶节点。
- 这种商家，建站的话需要慎重。

**7、Ethernetserver**

- 褒贬不一，使用虚拟主机优惠码买的，极容易出问题。
- 要正规使用，建议原价购买或者`vps`的优惠购买。

**8、AlphaRacks**

- `OVZ VPS`超售严重，`kvm`好像好些。
- 不建议买`OVZ`。

**9、Golden-Hosts**

- 擅自更改套餐，服务器极不稳定，带宽稍微占时间长点就停止服务。
- 不建议使用。

**10、LetBox**

- 负面评价较多，安心建站不建议使用！
- 年付的`VPS`，在第七个月被删了，差评！

**11、HybridVM**

- 服务器上架后和购买时配置不同，更换后就长时间不上架（超过`10`天），不建议使用。

**13、My Server Planet Ltd**

- 见过最硬的盘，国内速度差!

**14、UniWeb Hosting**

- 纯粹的骗子，各种忽悠不要用`Paypal`，或者忽悠取消`Paypal`争议。

**15、LiteUnit**

- 据群友反映，更换域名后不承认之前的产品是他们的，各种推脱。

**16、hostslayer**

- 超售严重，不遵守自己制定的`TOS`。

**17、free-www**

- 灵车！！！

**19、Vastitude**

- 无故删账号。无故停机。带宽稍微占用时间长，就停机。

**20、Speedydot**

- 极度无诚信商家！

**21、Anonius**

- 机器动不动就关机，客服TK不理人。

**22、Inception hosting**

- 这家歧视国人，勿入！