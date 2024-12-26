---
aliases:
  - Google Drive
  - Drive File Stream
tags:
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Server/Service
---

[Python Quickstart  |  Google Drive API  |  Google Developers](https://developers.google.com/drive/api/v3/quickstart/python?authuser=3)

[Google Drive/One和OneDrive 储存空间过期后多久删文件 - 知乎](https://zhuanlan.zhihu.com/p/342431917)


> [!info]
> gmail/google drive 相关服务停用 2 年，账号里的数据才可能被删除


imouto-project@googlegroups.com
loli-project@googlegroups.com
touhou-project@googlegroups.com
loli-love@googlegroups.com

harem@lolineko.com
house@lolineko.com
lolihaven@googlegroups.com
jump@lolineko.com



管理入口：

1. [Admin 管理控制台](https://admin.google.com/u/6/ac/home?hl=zh)
2. [Google API Console](https://console.developers.google.com/)

【允许 google groups 添加域外成员】

Admin - 侧栏 - Apps - G Suite - Groups for Business - Sharing Settings - Creating Groups - 勾选 2 项「Groups owners can allow incoming email from outside the organization」「Group owners can allow external menber」

【允许 开放分享】

默认开放分享（只有个人盘的文件才能创建分享链接）

Admin - 侧栏 - Apps - G Suite - Groups for Business - Drive and Docs - 一大堆开关

【允许 创建团队盘】

默认允许创建团队盘，开关在：

Admin - 侧栏 - Apps - G Suite - Groups for Business - Drive and Docs - Sharing Settings - 一大堆开关

【允许 gd to td 文件迁移】

Admin - 侧栏 - Apps - G Suite - Groups for Business - Drive and Docs - 一大堆开关

【查看 所有团队盘】

Admin - 侧栏 - Apps - G Suite - Groups for Business - Drive and Docs - Manage shared drives

【自定义 成员等级权限】

同上，或在每个盘的管理成员的设置里也可以。不过貌似只能限制「viewer」「commenter」的下载、成员能否上传。



```yaml

年鉴
2010：https://drive.google.com/drive/folders/1biHNO0lbdIBYEddi61IMBTL61WDnfVqM?usp=sharing
--drive-root-folder-id 1biHNO0lbdIBYEddi61IMBTL61WDnfVqM

2011:  https://drive.google.com/drive/folders/1QqtjhAFHftZykClkCqpzt1PfIDrW7GP6?usp=sharing


2010
Transferred:      527.071G / 3.512 TBytes, 15%, 954.726 MBytes/s, ETA 54m51s
Transferred:         1319 / 7878, 17%


Transferred:        3.672T / 5.140 TBytes, 71%, 917.840 MBytes/s, ETA 27m56s
Transferred:         9026 / 12922, 70%
Elapsed time:    1h9m55.2s
Transferring:
 * 2011年10-12月/猎人（全职猎人201… Chap] - mawen1250.mkv:  0% /1.013G, 0/s, -
 * 2011年10-12月/猎人（全职猎人201… Chap] - mawen1250.mkv:  0% /847.744M, 0/s, -
 * 2011年10-12月/猎人（全职猎人201… Chap] - mawen1250.mkv:  0% /978.685M, 0/s, -
 * 2011年10-12月/猎人（全职猎人201…ap] - mawen1250.sc.ass:  0% /42.912k, 0/s, -
 * 2011年10-12月/猎人（全职猎人201…ap] - mawen1250.sc.ass:  0% /54.260k, 0/s, -


rc 命令相当于对正在运行的 rclone 发送 exec
rclone rc 更新整个文件夹缓存：
rclone rc vfs/forget --rc-addr 127.0.0.1:2569

或者单个文件、文件夹：
rclone rc vfs/forget file=hello file2=goodbye dir=home/junk

rclone rc vfs/refresh
rclone rc vfs/refresh dir=home/junk dir2=data/misc


忧郁的弟弟 1.6 TB
汉化单行本（魔王 437 vol）1.3 TB




[里番] DISCOVERY ディスカバリー社合集
[里番] 鈴木みら乃社合集
[里番] POND POP
[里番] 1969-1990
ASMR中文

[MC]
[隐士猫 Yeraph.com]
[竹子社][アトリエかぐや]
CM3D2
R18

MUSIC
EVA

作者汉化合集
高清漫画全套本

[3D]
$ gclone size "sss:test/[3D]/"
Total objects: 2412
Total size: 314.967 GBytes (338193000696 Bytes)

[里番]
$ gclone size "loli-anime:[里番]"
Total objects: 38238
Total size: 5.020 TBytes (5519211484823 Bytes)

[里番]
$ gclone size "sss:test/[里番]/"
Total objects: 34564
Total size: 4.819 TBytes (5298021289451 Bytes)

[里番1960-1990]
2020/06/22 15:12:00 INFO  : Google drive root 'test/[lifan]1969-1990': Waiting 2020/06/22 15:10:53 INFO  :
Transferred:      651.877G / 651.877 GBytes, 100%, 410.981 MBytes/s, ETA 0s
Transferred:         2912 / 2912, 100%
Elapsed time:      27m4.2s


[ASMR中文]
$ gclone size "sui-5:ASMR中文"
Total objects: 6235
Total size: 424.464 GBytes (455764283354 Bytes)


[极客时间]
$ gclone size "sss:test/极客201910"
Total objects: 6493
Total size: 245.790 GBytes (263915257230 Bytes)

[MANGA]
$ gclone size "loli-comic:"
Total objects: 166383
Total size: 9.982 TBytes (10975233320049 Bytes)

$ gclone size "sui-5:[MANGA]"
Total objects: 138280
Total size: 7.367 TBytes (8100543866642 Bytes)

[漫之学园资源部]
2020/06/22 17:21:02 INFO  :
Transferred:        1.430T / 1.430 TBytes, 100%, 205.159 MBytes/s, ETA 0s
Transferred:        11219 / 11219, 100%
Elapsed time:    2h1m51.0s

[汉化本子合集]
Total objects: 44077
Total size: 2.915 TBytes (3204551191285 Bytes)


[konachan]
2020/05/31 05:33:11 INFO  :
Transferred:      214.287G / 214.287 GBytes, 100%, 3.851 MBytes/s, ETA 0s
Transferred:       242988 / 242988, 100%
Elapsed time:  15h49m43.3s

2020/06/01 07:12:43 INFO  :
Transferred:        1.541M / 1.541 MBytes, 100%, 240.865 kBytes/s, ETA 0s
Checks:            242982 / 242982, 100%
Transferred:            2 / 2, 100%
Elapsed time:         6.5s



[Yande.re至五月合集]
Size: 700g+ (15g*53)
Count: 536000+ files
Link: https://drive.google.com/folderview?id=1JZ6r8mLirVTNxXXv14jggyBpP02e9F2J


[39、动漫无损音乐合集]
二级文件夹数 1511
Total objects: 136879
Total size: 2.701 TBytes (2970234825198 Bytes)
Checks:            125143 / 125143, 100%
Transferred:         3090 / 3090, 100%
Elapsed time:     18m34.6s


[Lossless]
Total objects: 143360
Total size: 2.821 TBytes (3101828076103 Bytes)
gclone size "sui-5:Music [Lossless]"



[MUSIC]
root@vm925796:~# gclone size sui-7:MUSIC
Total objects: 92756
Total size: 3.963 TBytes (4357345273743 Bytes)

[Novel]
51.6 GB
186,665 个文件
14,871 个文件夹


[垃圾场]
$ gclone size "sss:test/垃圾场"
Total objects: 918
Total size: 189.978 GBytes (203986962885 Bytes)



[ANK-Raws]
2020/05/29 07:51:00 INFO  :
Transferred:        8.969T / 8.969 TBytes, 100%, 181.618 MBytes/s, ETA 0s
Checks:            212687 / 212687, 100%
Transferred:       212756 / 212756, 100%
Elapsed time:   14h23m0.8s

[BDRip]
$ gclone size "sss:test/[BDRip]/"
Total objects: 14833
Total size: 3.322 TBytes (3652959072355 Bytes)

[BDMV]
Transferred:        4.988T / 4.988 TBytes, 100%
Transferred:        11454 / 11454, 100%
Elapsed time:    1h42m4.4s

[fch1993]
$ gclone size "sss:test/[fch1993]/"
Total objects: 3388
Total size: 246.500 GBytes (264677725606 Bytes)

[LittleBakas]
$ gclone size "sss:test/[LittleBakas]/"
Total objects: 4334
Total size: 1.139 TBytes (1252605210731 Bytes)

[LoliHouse]
$ gclone size "sss:test/[LoliHouse]/"
Total objects: 41218
Total size: 918.609 GBytes (986348407578 Bytes)

[mawen1250]
$ gclone size "sss:test/[mawen1250]/"
Total objects: 4528
Total size: 997.066 GBytes (1070591431312 Bytes)

[Moozzi2]
$ gclone size "sss:test/[Moozzi2]/"
Total objects: 4747
Total size: 2.130 TBytes (2342317880175 Bytes)

[philosophy-raws]
$ gclone size "sss:test/[philosophy-raws]/"
Total objects: 46756
Total size: 4.277 TBytes (4702292210915 Bytes)

[Snow-Raws]
2020/05/28 16:25:49 INFO  : 
Transferred:        9.544T / 9.544 TBytes, 100%, 768.711 MBytes/s, ETA 0s
Transferred:        38384 / 38384, 100%
Elapsed time:   3h36m59.1s

[VCB-Studio]
$ gclone size "sss:test/[VCB-Studio]/"
Total objects: 69327
Total size: 5.915 TBytes (6503804031484 Bytes)

[VCB-Studio]6
$ gclone size "sui-7:[VCB-Studio]6/"
Total objects: 75896
Total size: 7.639 TBytes (8398737853192 Bytes)

[VCB-Studio]7
$ gclone size "sui-7:[VCB-Studio]2/"
Total objects: 2878
Total size: 127.802 GBytes (137226433314 Bytes)

至此，BDRip 高达 45 T（不包括 anime 系列），搭建本地的成本可以续 6 年 gd（每年 8 T）……也就是 6 年才回本，所以我是不会搭 BDRip 本地数据中心的，根本不合算。

[bangumi]
Total objects: 6738
Total size: 3.245 TBytes (3568360060848 Bytes)

[anime-01]
Total objects: 43267
Total size: 16.869 TBytes (18547520986176 Bytes)


[anime-02]
Total objects: 8636
Total size: 1.422 TBytes (1563510063171 Bytes)
自带略缩图

[anime-03]
1.Animes[NFO]
AnimeKayo
HorribleSubs
2020/07/21 09:04:12 INFO  :
Transferred:       53.505T / 53.505 TBytes, 100%, 1.516 GBytes/s, ETA 0s
Transferred:       143010 / 143010, 100%
Elapsed time:   10h2m31.8s


[anime-04]
2020/08/02 18:03:05 INFO  :
Transferred:       13.002T / 13.002 TBytes, 100%, 1.407 GBytes/s, ETA 0s
Transferred:        39582 / 39582, 100%
Elapsed time:   2h37m43.9s

[新番计划]
$ gclone size "anime-new:新番计划"
Total objects: 8748
Total size: 2.097 TBytes (2305300825628 Bytes)

```




mklink /d D:\Temp\DriveFS C:\Users\<用户名>\AppData\Local\Google\DriveFS


0. id？
alum.ccu.edu.tw
alum.ccu.edu.tw-2
gmail-edu.co（旧）
swccd.edu（测）
otago.ac.nz（主）

0AIAg8dMUFpi5Uk9PVA
0ALqNiXy2Ho6NUk9PVA
0ANDauyust_fnUk9PVA
0ACl21wpfI5zcUk9PVA
0AEXbZZnnYsoVUk9PVA

1. -s、-spi、-sp、-d、dp 到底怎么用？
-sp 本地夹
-s 共享夹
-s td夹
-sp 本地单文件？
-s 共享单文件
-s td单文件
-d 必不可少，就是 td 盘根目录 id
-dp -dp path/to/td，想放到 td 中某目录下；如果想放到根目录，不使用 -dp 参数就行

2. -sp 指定文件夹时，文件夹本身是否会被拷贝进去？
不会。指定 /root/test，test 中有 3 个文件，-dp 指定 dst/ab，效果时 3 个文件直接传到 dst/ab 下。

3. 个人 PC 上用时，怎么连接代理？
export http_proxy='http://127.0.0.1:1080'
export https_proxy='http://127.0.0.1:1080'
临时的，重启后无效。

4. 上传、拷贝的必要准备？
第一，accounts 文件夹里的 SA 已经添加进源 TD 和目标 TD。
第二，能上外网。
第三，没了，其他都不需要。

3. 账号张三创建的项目和 SA，这些 SA 能直接读取张三的个人 gd 吗？

4. 注册正规学校 edu 车稳，还是自建域名的车稳？
结论是正规 edu 稳。正规学校 edu 邮箱开的团队盘，学校管理员同样看到得到团队盘内容，但是学校管理员估计没那种时间一个一个看过来，**就算是 edu 邮箱被封了，开到其他号的团队盘极大概率依然安然无恙**。再看看自建域名欺骗谷歌的车，风险有：域名持有者（即管理员）删你号、谷歌把这个域名 ban 了。正规学校风险全在第一点，不用担心域名失效。但如前面所说，管理员可能删你号，但不一定删你开的团队盘，如果把 edu 号从创建的 td 里移除，或许就更安全了，因为 td 是属于域名的，不过我没用过 g suite 管理员所以不能坑定。
