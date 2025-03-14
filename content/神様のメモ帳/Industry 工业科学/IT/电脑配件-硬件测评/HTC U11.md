---
tags:
- Label/Industry-工业科学/IT/Hardware/Phone
---

- References
    - [How to Open Recovery Mode in HTC U11 - Exit Recovery Mode - YouTube](https://www.youtube.com/watch?v=h-Q8S9kTBQM)

> 全局DC + 2K + 舒适色彩 + Android 最强白色 + Android 偏暖色温 == 地上最强 2K LCD

xzp = xz2p > r3 = r5g >= u11 >= u11+ >= u12+ ? g6 > g7

r3 异形屏得减分，u11 全局dc得加分。如果这两点你都不在意，那 r3 更好。r5g 没必要，毫无性价比。
目前没亲眼看到 r3，而 xzp 极致的 ppi、优秀的暗场表现、舒适的 sRGB、良好的通透性，足以让我把它排第一，有机会入 r3 再更新。不过估计没机会了，要 DC 没 DC，要 ppi 比不过 XZP，要性能没性能，要续航没续航，主力机也没法做，，色彩、通透性、白平衡估计也无法显著超越，据酷友说调色还太艳丽过饱和，没有入手的动力。

排名未知：
雷蛇手机1
雷蛇手机2
荣耀v8
荣耀v9

解锁BL（最好买已解锁的）
刷入TWRP

移动4G VoLTE  速度 10M，能刷B站
电信 26M

记录一次玄学事件：
能上网，但就是不能打电话发短信。基带没有掉。
卸载几个 xp 模块，手机卡换了个卡位。短信电话是好了，但网络不行了，玄学。改回较深的卡位，网络好了，结果短信电话就不行了……
然后刷了那个 pixel volte，全都正常了


屏幕完爆 mate10。色彩、白色色温略优于 xz2p。白色色温逊于 7p。ppi 相比 4K 还是有明显差距。

作为 mate10 的替代品，我很满意。看的舒服、流畅跟手。对比度甩几条街，爽爆了，床上看漫画能看到很多之前看不清的细节，更重要的是终于能看清全局的构图了，之前偏色、色温、对比度拉跨导致只能聚焦在一块地方，看文字得盯着看。

屏幕缺点：
暗场跟 7p 一样拉跨，缺失细节。
灰色是暗绿，连灰都不是。
白色偏黄，看上去不自然，跟 7p 比有明显差距，但在 Android 中已经是王者了。
红色过饱和，即使这样整体色彩也好过 xz2p。
对比度不如 xz2p，但完爆华为。
sRGB 模式居然远不如 P3 模式，很奇葩，还是后者舒服又好看。
断触，打音游难受。

ppi 没有 xz2p 高，这点还是很容易看出来的，甚至都不用对比，一眼就能感觉到。从这个角度，xzp xz2p 是无敌的。对比 mate10，ppi 感觉差不多，但画面更干净、看的更清晰，总之就是很舒服，不像 mate10 越看越糊。人偶频道可以当作屏幕 ppi、整体观感测试工具了，还是比不过 xz2p，差距蛮大的。

AppOps：虽是类原生系统，但阉割严重，AppOps 与权限开关几乎融为一体。更糟糕的是，一些应用权限开关设定后，再设置 AppOps 根本无效（adb 已授权），一刷新就变回原样，或者干脆直接就无效。所幸由于整改，目前必须授予权限才能使用的 App 不多了，只要拒绝并记住就能搞定大部分。

相机硬件比想象的要差，但相机软件优化绝佳。慢动作、长焦、分辨率、黑暗环境感光都挺差，同时属于比较无脑的那种，自动模式基本没什么可调的，就连对焦都是全自动，手动点击对焦都没什么反应。色温、调色、曝光都很还原，必须好评。日用完全可以取代 mate10。才知道原来是当年的 DXO 排名第一。

续航：
音游 100% / 4小时
ACG 日用亮屏 14% / 1小时
WiFi 待机 6% / 1小时

待机耗电有点高，当主力机有点伤，下次测试看看。

待机耗电无论怎么优化，只要不关机，每小时约 6%。基本可以确定为酷友所说的小板（三大金刚）漏电，是硬件问题。

关机就一点都不漏电了。

待机耗电（黑阈激进 + wifi + clash etc 4 主力服务 + 快图 + 微信）8.5h约40 即速度为180mA约5%
听说移动网络待机很耗电
听说待机发热是小板漏电
日用耗电 2h 18
音游耗电 4h 100
视频耗电 1h 20 推测 4.5h 85
ACGMN 耗电
开屏平均 推测 1h 18
1h 视频 + 1.5h 日用 = 耗电 40

充电速度 18W 略慢，3h 充满，跟 xz2p 一样。

关于杀后台的APP 有两个 1 BOOST＋ (因为国行集成在安全助手里面了貌似没有自己清理的功能了) 2 设置 电源 电池优化 把你被杀过的后台APP 点成未优化 3安全助手 云端省电设置成 永不休眠即可

无解，内存不足就会杀，就算添加到白名单也不行，我玩王者切出来回个微信，就把我王者杀了

你能做的：
关闭手机管家里的云端省电；
针对某个 app 禁用电池优化；
允许自启动；
后台上锁；

~~扬声器糊的不行，声场也窄，低音高音毫无亮点，就是糊，解析、细节就更不用说，总之是真听个响。妥妥的差评。~~

刷了 RROS，一直以为听个响是扬声器的问题，后来发现是系统自带的 AudioFX 默认开启了，还来了个增强低音的均衡器，关掉瞬间就舒服多了。

一句话，U11 扬声器同 Mate10 一个水平，Mate10 纯净柔软，U11 无短板、更平淡有力，我更享受 Mate10 的听感（除了黑乐谱）（虽然层次感是短板）。

扬声器性能略胜 Mate10，不过 Mate10 的纯净、柔软还是更极致点，听感也还是 Mate10 更享受点（不过 U11 比 XZ2P 舒服多了）。

扬声器实际表现不错，合格。整体风格依旧属于清水，三频均衡，尤其是没有偏向低音，好评。相比 Mate10，音色相同，听感相似，不过 U11 三频更平淡、清晰、稳定、有力，不像 Mate10 还有点纯净、柔软的感觉，解析略优，声场更大。低音更足，但绝不是那种无脑重低音，反而，鼓点等低频并没有突兀，只是低音更清晰了。中高音（女声）是我喜欢的风格，平淡，但不混杂，而是听感纯净、略带柔软。



官方国行固件 Android 9，双卡双待，打电话与上网都没问题。2019 年就停更了。




突然没法发短信，除了发短信其他一切正常。

各种控制变量，Xopsed Magisk 网络设置 etc，都不行。

最后发现很可能是强制打盹的锅。一关闭，短信就可以发出去了，重启都不用。之后再启用强制打盹也能正常发短信。

总之有点玄学，暂且归为强制打盹的蜜汁 bug









屏幕
电话
短信
移动数据
WiFi

RROS 默认色温偏冷
ruu（官方）默认色温偏暖
LeeDrOiD 该 ROM 只用于修复基带，不直接使用，刷完基带再刷其他 ROM
这就是唯一的区别，而且不是硬件区别，而是 OS 层面的色彩管理驱动造成的
好在 RROS 提供了色彩管理选项「设置 - 显示 - Live Display」
LiveDisplay 没有直接提供「色温/白平衡」调节选项
LiveDisplay -「图片调整」提供了「色相」「饱和度」「亮度」「对比度」
「色相」别调，默认即可
「对比度」别调，默认即可
**「亮度」增加 1%**
**「对比度」增加 3%**
显示效果基本等同于官方 ROM（双盲级别）


官方：
官改：我是没看出跟官方有什么区别
LineageOS：如果想体验 Android 11+ 可以试试，我是一点也不感兴趣
RROS：默认色彩管理参数与官方 ROM 不一致，需要在设置里调「1% 饱和度、3% 亮度」才与官方 ROM 观感保持一致。我更喜欢官方默认色彩管理。已停更，最终版本 Android 10

HTC U11 必须禁用 SELinux，不然电信卡根本读不出来，更别说电信 VoLTE。