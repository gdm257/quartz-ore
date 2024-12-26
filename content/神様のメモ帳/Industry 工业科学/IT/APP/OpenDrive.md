---
tags:
  - flag/APP/Network
  - flag/License/Proprietary
  - Label/Industry-工业科学/IT/APP/Server/Service
---

【TOS】

经过两个月的摸索，终于确定：一开始不会限速，你大概能满速跑两三天（存了大概 5 T），逐渐被限制上传速度，慢慢降到每天 250 G，然后我跑了一个多月，存了共 11 T。然后我彻底到只剩 5 T（彻底清空回收站），有趣的事情发生了，一分钟前还是 2 MB/s 的 rclone 立刻就跑到了 10 MB/s。也就是说，Personal Unlimited 到 6 T 左右就会被 OpenDrive 盯上，逐渐限速，我估计到 20 T 可能就该被删号了。

要点全在第五条，Personal Unlimited $10/month 明确说了是假无限，还不允许媒体文件数量占太大比例，并且一旦容量超过某个值、或占用过多宽带，就直接删你账户了（会先限速）。虽然没明确说是超过多少 TB，但根据 reddit、我大半个月的上传体验、官方定价，，估计超过 20 T 就危险了，100 T 那是铁定会被删号的。

想大量存媒体文件、无限容量、不限上传速度，可以，请换 Custom or Reseller or Enterprise plans，价格嘛，最具性价比 Reseller 要 $60/month。

至于速度，表面上取消速度限制，但根据 TOS 第 5 条它实际上还是会限速，每天能上传 250 G。

5. Restrictions:

You are permitted to store, manipulate, analyze, reformat, print, and display the Content only for your personal use. Unauthorized use of the Service, or the resale of the Services without OpenDrive’s prior written consent, is expressly prohibited. You shall not copy, license, sell, transfer, transmit, make available, distribute, publish, or assign this license or the Content in any format to any third party. Personal Unlimited plans are priced for and intended for normal personal use only. Business Unlimited plans are priced for and intended for normal office use only. The purpose is to allow users a “set-it-and-forget-it” option for typical behavior. This means backing up a users personal computer(s) or laptop(s) for person plans, or office computer(s), laptop(s) and/or office server(s) for business plans. It does not mean storing and/or streaming unlimited amounts of media, or backing up entire home/office NAS/SANs, or backing up an entire campus/data center of servers. Instead, Custom, Reseller or Enterprise plans should be used and are entirely appropriate for these use cases. Excessive storage on an Unlimited plan may result in network speeds being gradually limited. Any excessive use of storage or bandwidth on Unlimited plans is subject to us requiring that use be modified to comply with this standard. Failure to comply will result in immediate termination of your account and removal of all stored files.


【付款】

支持信用卡（不支持银联）和 Paypal（可用银联储蓄卡、银联信用卡），不需要信息对得上，付钱了就好，所以注册信息可以随意填。


【rclone】

注意，6.25 MB/s 跑一天也就才 500 T，低于这个速度的就完全没效率可言了。

初步测试，可同时 2 台异国服务器上传，速度互不影响。
建议选美国鸡（这点非常重要），不然根本上传不动。
线程数 最低为 4，再低瓶颈就不是带宽而是进程数了
块大小 1024k 2048k 3072k 一般比较合适，具体哪个自己比较
综合考虑，4–8 线程（根据文件数量与大小），3072k，这样设置才能跑满带宽
（目前 rclone 速度 20 MB/s，OpenDrive 上行 200，下行 150）

gclone copy \
--drive-server-side-across-configs  \
--ignore-existing  \
--ignore-errors   \
-v --stats 30s  \
--transfers 16 \
--rc-addr localhost:4444    \
--opendrive-chunk-size 2048k \
"sss:test/[3D] [STUDIO FOW]" \
"od:[3D]/[3D] [STUDIO FOW]"


搬运速度一天比一天慢。刚开始我还以为是主机商限速，但测试了才发现宽带根本不是瓶颈，真正的瓶颈在于 OpenDrive 给我上传限速！第一天 1+ TB，一周后减到 200+ G 每天。

等了 12 小时，再试速度还是很慢，30 Mbps。

等了 24 小时，30 Mbps……操蛋。

看来限速的关键因素并不是时间，而是流量+IP……又或者是 OpenDrive 自家的 CDN 太过垃圾，希望不是这种吧，宁愿是限速，目前看来也更有可能是限速，因为下行速度还是很快的，就上行垃圾。

rclone 6 MB/s 速度跑了 32h 710G，速度从 6 直接降到 0 了。于是 ctrl c 重新跑，又没问题了，不好判断是不是限速。

零速度时有个一个神奇的技巧：停止全部上传，先本地在 cmder 跑（20 线程，挂代理，狮城或美国都行），大概率有十几 Mbps 的速度；然后去 VPS 跑，线程可以调高一点，此时立马就有速度了（5 MB/s 左右）。

Transferred:        6.299T / 6.345 TBytes, 99%, 4.252 MBytes/s, ETA 3h7m21s
Errors:              4215 (retrying may help)
Checks:             23173 / 23173, 100%
Transferred:       100874 / 110866, 91%
Elapsed time:  431h32m27.4s

rclone log

```log
2020/10/31 11:24:36 INFO  : 
Transferred:        2.218T / 2.824 TBytes, 79%, 2.836 MBytes/s, ETA 2d14h11m39s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42443 / 52483, 81%
Elapsed time:  227h47m57.4s
Transferring:
 *                  汉化单行本分类合集/汉字/M/[鰻丸] 火熱雙唇.zip: 91% /226.396M, 900.686k/s, 22s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 67% /559.438M, 66.541k/s, 46m47s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 19% /305.355M, 60.140k/s, 1h9m37s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip: 18% /135.921M, 24.944k/s, 1h15m53s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 65% /815.035M, 31.550k/s, 2h33m38s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 68% /644.404M, 25.687k/s, 2h13m48s
 *          汉化本子合集/00014001-00015000/d-14767.rar: transferring
 *          汉化本子合集/00015001-00016000/d-15358.rar:100% /94.246M, 413.731k/s, 0s
 *          汉化本子合集/00015001-00016000/d-15359.rar: 49% /122.650M, 886.667k/s, 1m11s
 *          汉化本子合集/00015001-00016000/d-15360.rar: transferring
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 98% /143.451M, 27.973k/s, 1m29s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 73% /144.591M, 56.051k/s, 11m26s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 85% /223.808M, 71.536k/s, 7m35s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 63% /395.088M, 53.173k/s, 46m14s
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 96% /134.878M, 36.888k/s, 2m29s
2020/10/31 11:17:36 INFO  :
Transferred:        2.214T / 2.819 TBytes, 79%, 2.832 MBytes/s, ETA 2d14h12m10s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42392 / 52432, 81%
Elapsed time:  227h40m57.4s
Transferring:
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 96% /134.878M, 36.888k/s, 2m29s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 64% /559.438M, 49.435k/s, 1h8m51s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 14% /305.355M, 24.757k/s, 2h59m29s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip:  7% /135.921M, 22.813k/s, 1h34m12s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 自動ポルノ.zip: 11% /116.573M, 87.477k/s, 20m12s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 63% /815.035M, 46.273k/s, 1h50m50s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 66% /644.404M, 29.889k/s, 2h4m42s
 *          汉化单行本分类合集/汉字/M/[魔狩十織] ソロハンター達の生態.zip: 44% /323.088M, 81.299k/s, 37m41s
 *          汉化本子合集/00014001-00015000/d-14759.rar: 98% /42.707M, 84.190k/s, 8s
 *          汉化本子合集/00015001-00016000/d-15352.rar:100% /41.686M, 26.066k/s, 0s
 *          汉化本子合集/00015001-00016000/d-15353.rar: 38% /50.393M, 78.573k/s, 6m42s
 * C97/C97汉化合集 第3弹 [漫之学园资…and Order) [黑锅汉化组].zip: 85% /32.638M, 93.422k/s, 50s
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 88% /143.451M, 63.120k/s, 4m26s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 62% /144.591M, 46.916k/s, 19m51s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 77% /223.808M, 33.980k/s, 25m1s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 59% /395.088M, 60.655k/s, 45m19s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.116_2013-11.zip: 89% /329.735M, 62.102k/s, 9m49s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.118_2014-01.zip: 41% /322.591M, 22.971k/s, 2h20m51s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.121_2014-04.zip: 83% /203.716M, 85.550k/s, 6m43s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.122_2014-05.zip: 66% /228.734M, 108.683k/s, 12m2s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.123_2014-06.zip: 56% /236.884M, 93.021k/s, 19m3s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.124_2014-07.zip: 37% /245.899M, 42.955k/s, 1h0m45s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.125_2014-08.zip:  9% /685.499M, 56.122k/s, 3h8m41s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.126_2014-09.zip:  2% /735.589M, 39.137k/s, 5h13m34s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.127_2014-10.zip:  3% /750.128M, 93.897k/s, 2h11m20s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.128_2014-11.zip:  1% /676.013M, 101.955k/s, 1h51m49s
 * 汉化单行本分类合集/汉字/M/[睦月] この…気漢化組][MJK-17-D560].zip: 87% /697.985M, 13.588k/s, 1h48m0s
 * 汉化单行本分类合集/汉字/M/[美矢火] 純…気漢化組][MJK-17-D470].zip: 27% /792.426M, 34.182k/s, 4h45m18s
 * 汉化单行本分类合集/汉字/M/[蜜キング] …なりカノジョ。[4K[S版]掃圖組].zip: 67% /311.931M, 48.669k/s, 35m2s
 * 汉化单行本分类合集/汉字/M/[馬鈴薯] か…ストカード 可愛女孩 [風與彧製作].zip: 68% /242.607M, 38.990k/s, 33m58s
 * 汉化单行本分类合集/汉字/M/[魔窟亭 (長…ーガズムユニットEX-魔法戦士あかり.zip: 48% /256.800M, 95.783k/s, 23m39s
 * 汉化单行本分类合集/汉字/M/[魔童貞] ぜ…ちな話 全都是好色的故事[中国翻訳].zip: 41% /255.693M, 78.780k/s, 32m12s

2020/10/31 11:18:06 INFO  :
Transferred:        2.214T / 2.819 TBytes, 79%, 2.832 MBytes/s, ETA 2d14h11m55s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42392 / 52432, 81%
Elapsed time:  227h41m27.4s
Transferring:
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 96% /134.878M, 37.092k/s, 2m0s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 64% /559.438M, 37.956k/s, 1h29m13s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 15% /305.355M, 27.384k/s, 2h41m38s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip:  8% /135.921M, 20.087k/s, 1h46m8s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 自動ポルノ.zip: 13% /116.573M, 104.278k/s, 16m27s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 63% /815.035M, 63.896k/s, 1h19m52s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 66% /644.404M, 21.101k/s, 2h55m50s
 *          汉化单行本分类合集/汉字/M/[魔狩十織] ソロハンター達の生態.zip: 45% /323.088M, 95.788k/s, 31m33s
 *          汉化本子合集/00014001-00015000/d-14759.rar:100% /42.707M, 20.405k/s, 0s
 *          汉化本子合集/00015001-00016000/d-15352.rar:100% /41.686M, 3.760k/s, 0s
 *          汉化本子合集/00015001-00016000/d-15353.rar: 43% /50.393M, 94.100k/s, 5m8s
 * C97/C97汉化合集 第3弹 [漫之学园资…and Order) [黑锅汉化组].zip: 94% /32.638M, 110.161k/s, 15s
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 89% /143.451M, 62.757k/s, 4m12s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 62% /144.591M, 32.216k/s, 28m23s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 78% /223.808M, 50.866k/s, 16m12s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 59% /395.088M, 42.499k/s, 1h4m17s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.116_2013-11.zip: 89% /329.735M, 46.370k/s, 12m47s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.118_2014-01.zip: 41% /322.591M, 20.104k/s, 2h40m5s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.121_2014-04.zip: 84% /203.716M, 102.002k/s, 5m8s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.122_2014-05.zip: 67% /228.734M, 89.837k/s, 14m6s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.123_2014-06.zip: 57% /236.884M, 107.447k/s, 16m1s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.124_2014-07.zip: 38% /245.899M, 35.154k/s, 1h13m44s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.125_2014-08.zip:  9% /685.499M, 43.171k/s, 4h4m54s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.126_2014-09.zip:  2% /735.589M, 59.291k/s, 3h26m33s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.127_2014-10.zip:  4% /750.128M, 102.724k/s, 1h59m33s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.128_2014-11.zip:  1% /676.013M, 87.419k/s, 2h9m55s
 * 汉化单行本分类合集/汉字/M/[睦月] この…気漢化組][MJK-17-D560].zip: 87% /697.985M, 15.017k/s, 1h36m35s
 * 汉化单行本分类合集/汉字/M/[美矢火] 純…気漢化組][MJK-17-D470].zip: 28% /792.426M, 25.335k/s, 6h24m15s
 * 汉化单行本分类合集/汉字/M/[蜜キング] …なりカノジョ。[4K[S版]掃圖組].zip: 68% /311.931M, 39.034k/s, 43m15s
 * 汉化单行本分类合集/汉字/M/[馬鈴薯] か…ストカード 可愛女孩 [風與彧製作].zip: 68% /242.607M, 32.268k/s, 40m31s
 * 汉化单行本分类合集/汉字/M/[魔窟亭 (長…ーガズムユニットEX-魔法戦士あかり.zip: 49% /256.800M, 79.903k/s, 27m43s
 * 汉化单行本分类合集/汉字/M/[魔童貞] ぜ…ちな話 全都是好色的故事[中国翻訳].zip: 42% /255.693M, 93.543k/s, 26m40s

2020/10/31 11:18:10 INFO  : 汉化本子合集/00015001-00016000/d-15352.rar: Copied (new)
2020/10/31 11:18:20 INFO  : 汉化本子合集/00014001-00015000/d-14759.rar: Copied (new)
2020/10/31 11:18:34 INFO  : 汉化单行本分类合集/.yacreaderlibrary/covers/c04c6d6eb15045dc73c48d9eb39f2293375e8943171795952.jpg: Copied (new)
2020/10/31 11:18:36 INFO  :
Transferred:        2.214T / 2.819 TBytes, 79%, 2.832 MBytes/s, ETA 2d14h13m16s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42395 / 52435, 81%
Elapsed time:  227h41m57.4s
Transferring:
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 97% /134.878M, 57.716k/s, 51s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 64% /559.438M, 23.383k/s, 2h24m6s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 15% /305.355M, 24.875k/s, 2h57m15s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip:  8% /135.921M, 17.652k/s, 1h59m48s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 自動ポルノ.zip: 15% /116.573M, 87.446k/s, 19m8s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 63% /815.035M, 43.365k/s, 1h57m17s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 66% /644.404M, 47.673k/s, 1h17m17s
 *          汉化单行本分类合集/汉字/M/[魔狩十織] ソロハンター達の生態.zip: 46% /323.088M, 79.415k/s, 37m24s
 *          汉化本子合集/00014001-00015000/d-14761.rar:  0% /6.458M, 0/s, -
 *          汉化本子合集/00015001-00016000/d-15353.rar: 49% /50.393M, 94.781k/s, 4m34s
 *          汉化本子合集/00015001-00016000/d-15354.rar:  5% /26.705M, 118.203k/s, 3m38s
 * C97/C97汉化合集 第3弹 [漫之学园资…and Order) [黑锅汉化组].zip:100% /32.638M, 51.133k/s, 0s
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 89% /143.451M, 54.459k/s, 4m31s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 63% /144.591M, 21.902k/s, 40m58s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 79% /223.808M, 62.222k/s, 12m50s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 59% /395.088M, 28.455k/s, 1h35m25s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.116_2013-11.zip: 89% /329.735M, 34.810k/s, 16m32s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.118_2014-01.zip: 42% /322.591M, 20.165k/s, 2h38m20s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.121_2014-04.zip: 86% /203.716M, 86.694k/s, 5m33s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.122_2014-05.zip: 68% /228.734M, 108.607k/s, 11m11s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.123_2014-06.zip: 58% /236.884M, 93.021k/s, 18m3s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.124_2014-07.zip: 38% /245.899M, 56.420k/s, 45m29s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.125_2014-08.zip:  9% /685.499M, 29.410k/s, 5h58m54s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.126_2014-09.zip:  2% /735.589M, 56.979k/s, 3h34m38s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.127_2014-10.zip:  4% /750.128M, 93.315k/s, 2h11m9s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.128_2014-11.zip:  1% /676.013M, 105.124k/s, 1h47m33s
 * 汉化单行本分类合集/汉字/M/[睦月] この…気漢化組][MJK-17-D560].zip: 87% /697.985M, 15.484k/s, 1h32m34s
 * 汉化单行本分类合集/汉字/M/[美矢火] 純…気漢化組][MJK-17-D470].zip: 28% /792.426M, 17.346k/s, 9h20m15s
 * 汉化单行本分类合集/汉字/M/[蜜キング] …なりカノジョ。[4K[S版]掃圖組].zip: 68% /311.931M, 33.769k/s, 49m29s
 * 汉化单行本分类合集/汉字/M/[馬鈴薯] か…ストカード 可愛女孩 [風與彧製作].zip: 68% /242.607M, 25.027k/s, 51m33s
 * 汉化单行本分类合集/汉字/M/[魔窟亭 (長…ーガズムユニットEX-魔法戦士あかり.zip: 50% /256.800M, 95.587k/s, 22m43s
 * 汉化单行本分类合集/汉字/M/[魔童貞] ぜ…ちな話 全都是好色的故事[中国翻訳].zip: 43% /255.693M, 109.617k/s, 22m17s

2020/10/31 11:18:50 INFO  : C97/C97汉化合集 第3弹 [漫之学园资源部]/(C97) [タマラン (タマラン)] アビビビッ☆改 (Fate Grand Order) [黑锅汉化组].zip: Copied (new)
2020/10/31 11:18:53 INFO  : 汉化本子合集/00014001-00015000/d-14761.rar: Copied (new)
2020/10/31 11:19:02 INFO  : 汉化单行本分类合集/※目录/假名/7.ま行/[マーシーラビット] 偶像調教.jpg: Copied (new)
2020/10/31 11:19:06 INFO  :
Transferred:        2.214T / 2.820 TBytes, 79%, 2.833 MBytes/s, ETA 2d14h15m17s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42398 / 52438, 81%
Elapsed time:  227h42m27.4s
Transferring:
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 98% /134.878M, 60.982k/s, 31s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 65% /559.438M, 69.678k/s, 47m52s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 15% /305.355M, 23.609k/s, 3h6m2s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip:  9% /135.921M, 17.304k/s, 2h1m14s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 自動ポルノ.zip: 35% /116.573M, 756.798k/s, 1m42s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 63% /815.035M, 25.692k/s, 3h17m18s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 66% /644.404M, 62.368k/s, 58m40s
 *          汉化单行本分类合集/汉字/M/[魔狩十織] ソロハンター達の生態.zip: 53% /323.088M, 766.353k/s, 3m21s
 *          汉化本子合集/00015001-00016000/d-15353.rar: 87% /50.393M, 680.680k/s, 9s
 *          汉化本子合集/00015001-00016000/d-15354.rar: 73% /26.705M, 654.762k/s, 11s
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 90% /143.451M, 47.310k/s, 4m51s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 65% /144.591M, 74.389k/s, 11m36s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集…ク エグゼ 19) [空気系☆漢化].zip: 27% /12.846M, 279.195k/s, 34s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 79% /223.808M, 37.546k/s, 20m49s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 60% /395.088M, 52.854k/s, 50m53s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.116_2013-11.zip: 90% /329.735M, 29.109k/s, 19m11s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.118_2014-01.zip: 42% /322.591M, 57.992k/s, 54m37s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.121_2014-04.zip: 97% /203.716M, 728.777k/s, 8s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.122_2014-05.zip: 77% /228.734M, 717.091k/s, 1m13s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.123_2014-06.zip: 67% /236.884M, 743.741k/s, 1m45s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.124_2014-07.zip: 39% /245.899M, 63.131k/s, 40m15s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.125_2014-08.zip:  9% /685.499M, 19.397k/s, 9h3m16s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.126_2014-09.zip:  2% /735.589M, 49.340k/s, 4h7m31s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.127_2014-10.zip:  7% /750.128M, 743.503k/s, 15m58s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.128_2014-11.zip:  4% /676.013M, 696.490k/s, 15m44s
 * 汉化单行本分类合集/汉字/M/[睦月] この…気漢化組][MJK-17-D560].zip: 88% /697.985M, 17.386k/s, 1h21m27s
 * 汉化单行本分类合集/汉字/M/[美矢火] 純…気漢化組][MJK-17-D470].zip: 28% /792.426M, 68.695k/s, 2h20m58s
 * 汉化单行本分类合集/汉字/M/[蜜キング] …なりカノジョ。[4K[S版]掃圖組].zip: 68% /311.931M, 25.561k/s, 1h4m43s
 * 汉化单行本分类合集/汉字/M/[馬鈴薯] か…ストカード 可愛女孩 [風與彧製作].zip: 69% /242.607M, 78.830k/s, 15m56s
 * 汉化单行本分类合集/汉字/M/[魔窟亭 (長…ーガズムユニットEX-魔法戦士あかり.zip: 58% /256.800M, 737.085k/s, 2m26s
 * 汉化单行本分类合集/汉字/M/[魔童貞] ぜ…ちな話 全都是好色的故事[中国翻訳].zip: 51% /255.693M, 701.978k/s, 3m1s
 * 汉化单行本分类合集/汉字/M/[鰻丸] 2番…気漢化組][MJK-15-D147].zip:  0% /877.506M, 682.654k/s, 21m52s

2020/10/31 11:19:17 INFO  : 汉化本子合集/00015001-00016000/d-15353.rar: Copied (new)
2020/10/31 11:19:18 INFO  : 汉化本子合集/00015001-00016000/d-15354.rar: Copied (new)
2020/10/31 11:19:24 INFO  : 作者汉化合集/漫之论坛近期发布 作者汉化合集4 [漫之学园资源部]/[桂井よしあき] 汉化合集 [漫之 学园资源部]/[桂井よしあき] 天使学園の寮姦性活 sidestory -リリス姉妹の休日- (コミック エグゼ 19) [空気系☆漢化].zip: Copied (new)
2020/10/31 11:19:25 INFO  : 成人向け漫画雑誌/COMIC LO/COMIC_LO_Vol.121_2014-04.zip: Copied (new)
2020/10/31 11:19:26 INFO  : 汉化单行本分类合集/.yacreaderlibrary/covers/c05c74bf793f6879548300e87642c03fa49f510b322996958.jpg: Copied (new)
2020/10/31 11:19:36 INFO  :
Transferred:        2.215T / 2.820 TBytes, 79%, 2.833 MBytes/s, ETA 2d14h13m33s
Errors:                76 (retrying may help)
Checks:             21355 / 21355, 100%
Transferred:        42403 / 52443, 81%
Elapsed time:  227h42m57.4s
Transferring:
 *                 汉化单行本分类合集/汉字/M/[馬鈴薯] うらはら.zip: 99% /134.878M, 61.565k/s, 14s
 *                汉化单行本分类合集/汉字/M/[美矢火] オトメヒメ.zip: 65% /559.438M, 50.203k/s, 1h6m6s
 *               汉化单行本分类合集/汉字/M/[魔訶不思議] JS規格.zip: 16% /305.355M, 26.923k/s, 2h42m30s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 禁距離恋愛.zip: 11% /135.921M, 45.662k/s, 45m11s
 *              汉化单行本分类合集/汉字/M/[魔訶不思議] 自動ポルノ.zip: 58% /116.573M, 904.793k/s, 54s
 *          汉化单行本分类合集/汉字/M/[睦月] 恋えっち [4K掃圖組].zip: 63% /815.035M, 20.243k/s, 4h9m34s
 *          汉化单行本分类合集/汉字/M/[綿貫ろん] 明日もきっと想うひと.zip: 66% /644.404M, 37.629k/s, 1h36m47s
 *          汉化单行本分类合集/汉字/M/[魔狩十織] ソロハンター達の生態.zip: 61% /323.088M, 919.278k/s, 2m17s
 *          汉化本子合集/00014001-00015000/d-14762.rar:  4% /171.367M, 871.127k/s, 3m12s
 *          汉化本子合集/00015001-00016000/d-15355.rar: 14% /49.865M, 894.467k/s, 49s
 * C97/C97汉化合集 第3弹 [漫之学园资… Re Dive) [無邪気漢化組].zip: 14% /86.772M, 914.311k/s, 1m23s
 * C97/C97汉化合集 第3弹 [漫之学园资…シ)] 冬虫夏草6 [不咕鸟汉化组].zip: 91% /143.451M, 46.286k/s, 4m35s
 * 作者汉化合集/漫之论坛近期发布 作者汉化合集… 告白Lovers [空気系☆漢化].zip: 65% /144.591M, 44.287k/s, 19m6s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.114_2013-09.zip: 79% /223.808M, 20.889k/s, 36m36s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.115_2013-10.zip: 60% /395.088M, 55.189k/s, 48m16s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.116_2013-11.zip: 90% /329.735M, 22.359k/s, 24m13s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.118_2014-01.zip: 42% /322.591M, 36.999k/s, 1h25m8s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.122_2014-05.zip: 88% /228.734M, 851.511k/s, 31s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.123_2014-06.zip: 79% /236.884M, 899.747k/s, 56s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.124_2014-07.zip: 39% /245.899M, 41.521k/s, 1h0m47s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.125_2014-08.zip: 10% /685.499M, 66.224k/s, 2h38m37s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.126_2014-09.zip:  2% /735.589M, 42.559k/s, 4h46m33s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.127_2014-10.zip: 10% /750.128M, 896.016k/s, 12m44s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.128_2014-11.zip:  8% /676.013M, 900.326k/s, 11m40s
 * 成人向け漫画雑誌/COMIC LO/COMI…LO_Vol.129_2014-12.zip:  3% /290.457M, 694.096k/s, 6m51s
 * 汉化单行本分类合集/汉字/M/[睦月] この…気漢化組][MJK-17-D560].zip: 88% /697.985M, 15.523k/s, 1h29m34s
 * 汉化单行本分类合集/汉字/M/[美矢火] 純…気漢化組][MJK-17-D470].zip: 28% /792.426M, 44.594k/s, 3h36m46s
 * 汉化单行本分类合集/汉字/M/[蜜キング] …なりカノジョ。[4K[S版]掃圖組].zip: 69% /311.931M, 21.870k/s, 1h14m51s
 * 汉化单行本分类合集/汉字/M/[馬鈴薯] か…ストカード 可愛女孩 [風與彧製作].zip: 70% /242.607M, 50.773k/s, 24m24s
 * 汉化单行本分类合集/汉字/M/[魔窟亭 (長…ーガズムユニットEX-魔法戦士あかり.zip: 68% /256.800M, 868.252k/s, 1m34s
 * 汉化单行本分类合集/汉字/M/[魔童貞] ぜ…ちな話 全都是好色的故事[中国翻訳].zip: 61% /255.693M, 907.447k/s, 1m49s
 * 汉化单行本分类合集/汉字/M/[鰻丸] 2番…気漢化組][MJK-15-D147].zip:  3% /877.506M, 903.101k/s, 16m0s
```