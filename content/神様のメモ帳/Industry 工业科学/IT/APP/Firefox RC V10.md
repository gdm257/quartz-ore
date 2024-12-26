---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network/Implement__/Browser/Firefox
---

## Firefox RC V10

[无需任何插件或扩展，定制 Firefox 外观 @ 编程随想的博客](https://program-think.blogspot.com/2016/10/custom-firefox-theme-without-extension.html)

[UserChrome-Tweaks/compact-navbar-breakout.css at master · Timvde/UserChrome-Tweaks](https://github.com/Timvde/UserChrome-Tweaks/blob/master/navbar/compact-navbar-breakout.css)


#### 1.0. 版本说明

目前版本：内核 72.0.1 + 配置 70.0


=========================
            常见优缺点标准

=========================


PS：修改完配置后务必删除「Cache」文件夹再打开才能生效！

0. 书签打开后不关闭

0. Homepage 后台打开书签

0. Homepage 打开书签后不关闭

0. Fn 全局快捷键可用

0. 地址栏和搜索栏合并后，无 bug

1. 小火箭可用

1. Infinity 打开书签不关闭

1. 无需手动关闭系统代理

1. 「选项」有网络设置

1.  about:addons 页面完整性（Profile 控制）




=========================
       内核 76.0.1

=========================

【beta - 强行移植 Profiles 7201】
不同 1、无法输入中文，任何地方
不同 2、FireShot 旧版不兼容，装新版可用

【beta2 - 完全翻新】
缺陷 1、（已解决）无法输入中文，任何地方。不用 sandbox 就好了
缺陷 2、书签栏会自动关闭，点击书签后
优点 1、alt V 可以用了
infinity    moz-extension://6a865c6b-f145-40ef-b4a2-81af831e9e93/pages/newtab.html

【rc - 基于 beat2】
缺陷 2、书签栏会自动关闭，点击书签后
优化 细节



=========================
       内核 73.0.1 + 移植 70.0

=========================


【优点】

1. 没有致命硬伤

【缺点】

1. 小火箭按钮没反应。但是 about:addons - UC脚本 页面确实有加载 QuickOpen.uc.js 脚本

2. about:addons 图标文字挤在一起。是旧版配置直接移植到新版内核，不兼容的缘故

=========================
       内核 72.0.1 最终版

=========================

这是一个几乎没有缺陷的版本，除了不能用 infinity。这个版本的 Profiles 记得是强行移植自 6001 或 6801 或 7001。要不是零日，我还在用着旧版本。

6001 本是个接近完美的版本，infinity 可用、火箭可用、快捷键不冲突、书签没问题、后台打开没问题，唯二的缺点就是内核太低了、零日漏洞。

为了能用上沙拉查词，需要 65，于是升级。结果 6801 好像只有一个缺陷就是快捷键。本以为这个美观 + 实用 + 顺手的版本够用一两年，结果尼玛出来个零日，把我给气死。

更气人的是，内核升到 70 后，infinity 导致的书签问题、后台打开问题根本无解。要想解决只能强行移植 6X 的 Profiles。好吧，移植就移植，移植后发现尼玛 infinity 还是无解......真不懂 Mozzila 是怎么搞的，兼容性差的令人发指！

兼容性也不是那时候才有的，从 50+ 就开始了，直到 57 彻底翻新成量子，直接用新语言把 Firefox 重写了一遍......

说真的 Firefox 的各种坑、兼容性、大毛病、小毛病、只能用恶心来形容，体验只能用难受来概括。要不是不得不用，这种一点都不稳定的玩意我碰都不碰。要我说，Chrome 的使用体验能追上 Firefox 60，我立马把 Firefox 丢进垃圾桶......但 Chrome 的主页只能用制杖来形容，还他妈改不了，把我给恶心炸了。自定义度低无所谓，但你做的这么垃圾还不给人定制，爷不奉陪！

呼，总结下来就是，**操蛋的零日！操蛋的兼容性！操蛋的内核最低 65！把我完美无缺的 6001 搞没了，我真是想把他头都给打爆！**



=========================
               内核 72.0.1 + 手动

=========================


【优点】

0. 修复了零日漏洞

1. about:addons 页面正常

1. 小火箭（QuickOpen.uc.js）可用

1. 「选项」有插件、主题页面

【缺点】

1. 书签自动关闭且新配置无法修复，直接移植就配置才行，目前没找到解决方法。perfs.js、user.js 试过都没用

2. about:addons 移除了「UC脚本」页面，和配置有关，移植的 70.0 会显示。




#### 1.1. about:config

```
用户偏好 Profiles\V10\user.js
菜单 Profiles\V10\chrome\Local\_addmenu.js
快捷键 Profiles\V10\chrome\Local\_KeyChanger.uc.js
标签页 Profiles\V10\chrome\SubScript\Tabplus.uc.js
鼠标手势 Profiles\V10\chrome\SubScript\MouseGestures.uc.js
图标按键 Profiles\V10\chrome\SubScript\ButtonEventListener.uc.js

//小火箭 - 自定义设置 - 偏好配置

//标签选项
pref("browser.link.open_newwindow.restriction", 0);//新标签页打开链接,而不是窗口
pref("browser.bookmarks.openInTabClosesMenu", true);//点击书签不关闭菜单
pref("browser.tabs.loadBookmarksInTabs", true);//书签栏非覆盖打开
user_pref("browser.tabs.loadBookmarksInBackground", true);//书签在后台打开
user_pref("browser.tabs.loadDivertedInBackground", true);//外部链接后台打开
pref("browser.search.openintab", true);//搜索栏在新标签页打开
pref("browser.urlbar.openintab", false);//地址栏覆盖当前打开
pref("browser.tabs.loadInBackground", true);//中键点击链接后台打开

//功能去除
user_pref("browser.backspace_action", 0);//退格键返回上页

# user_pref(key,value) 等同于从about:config修改，删除之后，修改的设置仍然有效。
# pref(key,value) 删除之后，修改的设置也将失效。

//快捷键
keys['Alt+V'] =function() {let url = readFromClipboard();
try {
            switchToTabHavingURI(url, true);
          } catch (ex) {
            var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
            if (!reg.test(url)) {
              url = 'https://www.google.com/search?q=' + encodeURIComponent(url) + '&safe=off';
            } else {
              if (url.substring(4, 0).toLowerCase() == "http") {
                url = encodeURIComponent(url);
              } else {
                url = 'http://' + encodeURIComponent(url);
              }
            }
            switchToTabHavingURI(url, true);
          }
          e.preventDefault();
          e.stopPropagation();
}; //打开剪切板地址（新版）
```

[ 扫盲 Firefox 定制——从“user.js”到“omni.ja” ](https://program-think.blogspot.com/2019/07/Customize-Firefox.html)


> 随着我认知的提高，这些很多都过时了，仅供参考，不要照做。
> 我现在 All in `user.js`，不再手动配置 about:config
> 2022.10.12 Firefox 配置终于令我满意，唯一的瑕疵就是书签菜单会被关闭


注意：about:config设置存在profile文件夹的prefs.js文件中，但是不要直接修改！

关闭 WebRTC **必改**
media.peerconnection.enabled 改为 false

network.trr.mode **必改**
改为 3
0-标准 Firefox安装中的默认值
1-启用DoH，但 Firefox 依据哪个请求更快返回选择使用DoH或者常规DNS
2-启用DoH，常规DNS作为备用
3-启用DoH，并禁用常规DNS
5-禁用DoH

network.trr.uri
DoH URL，不支持 DoT
https://208.67.220.220/dns-query
https://doh.pub/dns-query
https://223.5.5.5/dns-query
https://mozilla.cloudflare-dns.com/dns-query（Firefox 默认）
https://dns.google/dns-query
https://dns.adguard.com/dns-query
https://dns-family.adguard.com/dns-query
https://dns.quad9.net/dns-query
https://dns9.quad9.net/dns-query
https://doh.dns.sb/dns-query

退格键-**必改**
browser.backspace_action 值从1改成0

后台打开外部？链接-**必改**
browser.tabs.loadDivertedinbackground 选择True=后台打开；False=前台打开

当前标签右侧打开书签（**关键**！！！）
browser.tabs.loadBookmarksInTabs 选择True=右侧新标签打开；False=覆盖当前；默认 true

后台打开书签（**关键**！）
browser.tabs.loadBookmarksInBackground 改为True=后台打开；False=前台打开
注：True生效的前提是：书签新标签打开（browser.tabs.loadBookmarksInTabs为True）

禁用IPv6
network.dns.disableIPv6 改为True

打开书签后书签列表不关闭（地址栏、搜索栏合并后可能无效）
browser.bookmarks.openInTabClosesMenu 的值改为 true=打开后不关闭

新标签中开启搜索结果
browser.search.openintab 改为True

链接后台打开
browser.tabs.loadInBackground

关闭最后一个标签页后不关闭窗口-
browser.tabs.closeWindowWithLastTab 改为False

地址栏在新标签页打开
browser.urlbar.openintab 改为，true=新标签打开，false=覆盖打开

消除搜索关键词后弹出的「您是要访问XX吗」
browser.urlbar.dnsResolveSingleWordsAfterSearch 值从 1 改为 0


#### 1.2. 扩展
about:debugging#/runtime/this-firefox
Profiles\V10\extensions

扩展：
Dark Mode (WebExtension)
Wappalyzer
Video DownloadHelper
Video Speed Controller
二维码（生成及识别）
Download Star（批量下图）
Copy Selected Tabs to Clipboard（by  Piro (piro_or)）
FireShot
History Master
SessionBox
Cookie Quick Manager
Cookiebro
Page load time
~~Load Time~~
百度网盘万能助手
Web / Social Media / Time Tracker
BurningMoth AddSearch（by Spencer T⋆ Obremski）
CopyTabTitleUrl
Enhancer for YouTube™
YouTube Unblocker
IDM Integration Module
RSSHub Rader
Add custom search engine
mozlz4-edit（by Siarhei Kuzeyeu）
pakku：哔哩哔哩弹幕过滤器
HTTP Header Live
Cookies and Headers Analyser
Tamper Data for FF Quantum
HackBar V2
cookies.txt (by Lennon Hill)
音乐解锁（by IXarea Dev Group）
WebRTC Control (by Bernard)
Flash Player 2022
Buster: Captcha Solver for Humans
Selenium IDE

可选扩展：Markdown Here；MaoXian Web Clipper；passifox；Checkmarks；Song Identifier；ehunter；WallPage New Tab (by visu4l)

废弃：Surdingkeys；Yomichan；TabNav；Evernote Web Clipper；KeePassXC-Browser by KeePassXC Team；Email Notifer；Wikiwand；Gitako - Github file tree；Tile Tabs WE；floccus bookmarks sync; newtab. urlEX；

~~infinity~~ 代替品：

终于找到**完美方案**了：使用 firefox 自带主页，配合奶酪的「用户脚本」which 能自定义自带主页的样式 through `newtab.css`。

`D:\Portable\Replace\RunningCheese_Firefox_V10_(x64)\Profiles\chrome\css\newtab.css` 的 `body` 里加上

`background-image: url(../newtab/00.png) !important;`

然后将背景图片放到目录 `D:\Portable\Replace\RunningCheese_Firefox_V10_(x64)\Profiles\chrome\newtab`，并重命名为 `00.png`。jpg 图片同理

还有，在 firefox - 设置 - 主页 - 禁用各种显示项

于是除了一张图片什么都没有的主页完成了。

~~[WallPage New Tab – by visu4l | Get this Extension for 🦊 Firefox (en-US)](https://addons.mozilla.org/en-US/firefox/addon/wallpage-new-tab/)~~
~~newtab. urlEX~~
~~Cool Pics- NewTab Page~~
~~New tab override~~

书签备份
暴力猴
搜索引擎备份 search.json.mozlz4
SwitchOmega配置
闪耀拖拽 配置
S3.Translator配置
沙拉查词 配置（至少 65.0）
uBlock Origin 配置
广告净化器 配置

www.baiduyun.wiki
github.com/syhyz1990/baiduyun

拖拽滚动无法一直滚动：
扩展 Scool Anywhere 设置 - Momentum - 勾选 infinite scroll。

> 1. 连接超时 www.xxx.org 的服务器响应时间过长
Proxy SwitchOmega：自动切换模式-切换规则-添加条件-域名通配符，www.xxx.org 与 softs.wtf，socks 5。此时成功上绅士。

> 2. 该附加组件无法安装 因为它似乎已损坏
此时千万不要去想着这个插件有问题，可能是Firefox的版本问题。在Firefox45之后的新版本安装插件时都要进行签名认证，未经验证的都不能安装。
about:config，搜索“xpinstall.signatures.required”，该值默认是true，双击该行将其值改为false。重启继续安装插件即可。


#### 1.3. 脚本
暴力猴(不包括 RC V10 里的)：iZhihu；知乎网页助手，5大功能集于一身；Yet Another Weibo Filter（改名 药方）；CNKI 中国知网 PDF 全文下载（特制版）；My Novel Reader；Github 助手；RSSHelper；Pixiv 增强；YouTube Player Controls；TSDM打工；Enhanced dmhy；动漫花园批量下载(dmhy)；dmhy tree view；动漫花园(dmhy.org) - 联盟搜寻；百度网盘直链下载助手（by syhyz1990）；bilibili merged flv+mp4+ass+enhance（作者 Xmader）；github、码云 md文件目录化；youtube双语字幕；显示B站视频av号、BV号、弹幕CID；秒传链接提取；购物党比价工具【精简版】（by chenzelin01）；nHentai 助手（by 神代綺凜）；哔哩哔哩(B站|Bilibili)收藏夹Fix（by Mr.Po）；EX标签汉化（by otakus）;HentaiVerse汉化；

KF Online助手：[https://gitee.com/miaolapd/KF_Online_Assistant](https://gitee.com/miaolapd/KF_Online_Assistant)
xstyle：Bilibili 哔哩哔哩 Nekopara（綺凜）

#### 1.4. 反馈

0. （已解决）为啥读不出插件？我佛了，原来是一定要原来的路径才行……新版RC一换路径所有插件直接加载不出。60最终版可以任意目录，70最终版也可以随意目录。

0. （已解决）关于账户配置问题，可以创建一个快捷方式，目标一栏末尾加个空格再加「-no-remote -p」，选择 default 账户，启动。配置本体为「RC文件夹\Profiles\V10」，「\Profiles\V10\AppData\Mozilla\Firefox\profiles.ini」存有配置名称与路径

1. （已过期）设置高级修改失败。我进入 about:config 修改后，没关闭浏览器时修改还是有效的，关了再开就复原了。有时候是所有项目都这样，有时只有"browser.tabs.loadBookmarksInBackground"这项修改不了。尝试过重装 RC 还是不行。

1. （已过期）然后在用前两天你推荐的 Surfingkeys 时也出现这样的问题，修改不了此扩展的设置，而我在 Chrome 上修改 Surfingkeys 却能成功。各种尝试均无法修复。
RC 文件夹属性是 部分只读，与其他文件夹并无区别。换了地方也无法修改。猜测是重装系统迁移软件时造成的权限问题。

2. （已解决）某些网站无法打开。比如逗比根据地的逗比云（尝试过关扩展）。我在 Chrome，Firefox(便携版)，世界之窗上都能打开。SwitchOmega 用 Socks5 模式即可。

3. （已解决）"Windows Script Host 错误：无效字符"（或 错误：语法错误）。点击“火箭图标—>系统工具—>关联记事本”让Notepad2代替默认的笔记本程序，然后找到任意一个.js文件，右键“属性”，在打开方式中选择Notepad2。简单来说，就是要把 .js 文件的默认打开方式改为 Notepad2。按上面还是不行的话，控制面板-程序--默认程序-默认应用-按文件类型指定默认应用-.js-Notepad2。

4. 使用新版 RC 时有些习惯设定被改变：**新标签页中无法后台打开书签**；点击一个书签后就**书签列表自动消失（已解决）**：about:config - browser.bookmarks.openInTabClosesMenu 的值改为 true；**无法在后台打开搜索结果（可无视）**；（已解决）拖拽滚动无法一直滚动：扩展 Scool Anywhere 设置 - Momentum - 勾选 infinite scroll；

5. 没有找到支持的视频格式和MIME类型。

6. （已解决）上不了 E-Hentai：**重点是删除相应 cookies**。带有 e-hentai 或 exhentai 的，e-hentai.org、forums.e-hentai.org。我怀疑的：getfireshot.com、ghbtns.com、ntaow.com、google.cn。然后能进表站即成功。

7. （已解决）ESET SSL Filter SA 中间人证书：ESET - 设置 - 高级设置 - web 和电子右键 - web 访问保护 - web 协议 - 禁用 https 检查

8. （已解决）连接不安全：Chrome - 右键 - 检查 - security 中查看问题所在

9. （已解决）外部打开 URL 无反应：任一 html 文件 - 右键 - 打开方式 - 选择默认程序 - Firefox - 勾选始终使用该应用程序打开 .html。如果不行，再删除浏览器的 Cache 文件夹

9. （无解）沙拉查词的谷歌翻译无结果，其他翻译都有结果：经过直连、Clash、换节点等测试，发现这应该是个 **IP 问题**。translate.google.com 需要魔法上网，并且有概率对 IP 有要求，有些 IP 经常不返回结果，跟网速无关。translate.google.cn 国内外节点都能用，同样有概率限制 IP，这完全取决于谷歌……看脸，无解

10. （待验证）BigBlueButton 无法显示老师的摄像头：设置 - 常规 - 性能 - 取消勾选 使用推荐的性能设置 - 取消勾选 自动启用硬件加速

11. 记一次 DNS 污染导致大量国内网站被墙——结论：多重启几次
简书、csdn、思否、甚至 bilibili 等网站打不开。经过排查，确定是 DNS 污染，返回的 IP 根本 ping 不通。

然后各种排查、测试。反正就是 clash 死都打不开。clash 直连模式也是用 clash 的 DNS 的，如果 clash 没有配置 DNS，用的是系统 DNS。

系统 DNS 在 wifi 那里设置。当然用 dns jumper 修改 intel ac8265 更方便。

最玄学的是，clash 和系统 dns 即便一模一样，clash 都打不开，用系统 dns 可能打得开。

于是我 clash 不配置 DNS（即自动调用系统 DNS），现在倒又行了，先观察一下，刚刚明明死都打不开的。

目前系统 DNS 设置为阿里云 DNS，貌似能用。……果然，半小时之后有不行了。

意外发现，qv2ray 貌似能用。也就是说有可能是 clash 的问题。

基本破案了，最终发现，是 clash-for-windows 的 DNS 实现有问题，虽然指定了 DNS，但还是被污染了，目测没有使用到指定 DNS，不知道用了什么鬼 DNS。不信你随便打开个简书的网址。有可能是系统 DNS，但系统 DNS 的实现没问题，所以还是能打开。



又有一个问题，现在 TUN 模式或 TAP 模式不知为何无法翻墙了。我利用 Sukka 的 IP 检测，发现 TUN 确实生效了，因为 firefox 开直连，能检测出代理的 ip。但 firefox 开直连却没法翻墙……日了狗了。Google 是直接没响应，一些外网是警告证书不正确。……？明明检测出我代理 IP 了，说明请求是代理 IP 发的，那为什么直接访问外网的时候反倒不行了？……草了，重启后开始是不行的，然后多试几次有他妈的行了。我发现重启后开 TUN 时任务栏的 wifi 图标会变成一个方方正正的显示器+插头，这可以看作是「TUN 真正生效的标志」，重启前就没有变这个图标，所以 firefox 直连一直上不了外网。

……好了，但没完全好。虽然全局代理是生效了，但 firefox 报错不安全了。太玄学了，刚刚明明还好好的。

总之，TUN & TAP 算是废了，已经没法全局代理了。

总结这么几大段的问题：

1. Clash for Windows 的 DNS 有 bug，导致国内网站 DNS 污染，连不上
2. TUN & TAP 半失效，没法全局代理了。


13. （待解决）CFW 开启 TUN 对 Firefox 无效：firefox 独有的安全机制使其「无代理时无法被全局代理」，clash 全局代理时会报错 PR_END_OF_FILE_ERROR。查了查，可能是 ocsp 的问题，于是修改相关设置，结果还是不行。问题很明显，肯定是 ssl 设置过于严格导致无法建立连接，但很难确定到底是具体哪个设置出了问题。
security.ssl.enable_ocsp_stapling
security.ssl.enable_ocsp_must_staple

14. （已解决）怎么消除搜索关键词后弹出的“您是要访问XXXX吗”？
about:config
browser.urlbar.dnsResolveSingleWordsAfterSearch 值从 1 改为 0

15. （已解决）自定义右键菜单？
隐藏右键菜单某些项目的方法：
- 打开文件 `Profiles/chrome/userChrome.css`，文件不存在则新建
- 通过 css 来对特定 class 附加 `diplay: None` 或 `visibility: collapse` 属性，即可隐藏特定菜单项

```css
/*
可以将各种 css 代码分成多个 css 文件，
在 userChrome.css 通过 @import 引入即可，类似 nginx 的 include
@import url(./css/menu.css);
@import url(./css/popup.css);
@import url(./css/navbar.css);
@import url(./css/sidebar.css);
@import url(./css/urlbar.css);
@import url(./css/tabbar.css);
@import url(./css/bookmark.css);
@import url(./css/windows7.css);
*/

/*########### 取消隐藏 ##########*/

/*Open in Side View*/
#side-view_mozilla_org-menuitem-_open-in-sidebar,
#side-view_mozilla_org-menuitem-_open-link-in-sidebar {
    display: None
}


/*########### 隐藏 ##########*/


```


#### 1.5. 需求
1. （已解决）爬图绅士漫画
几个大方向：扩展、脚本。脚本由于需要 Python 爬虫基础，故先不考虑。这里先收集了比较可能的扩展：Download Star（可行，推荐！）、图片助手（ImageAssistant）、Fatkun、img2tab。
奶酪方案：Download Star，批量保存当前网页图片，支持条件选择。Chrome 用 Image Downloader。
2. 自动化工具    Wildfire，让工作实现操作自动化，iMacros 的最佳替代。
3. （已解决）小号管理    SessionBox，更多轻松的管理小号，让你在同一网站同时登录多个账户。
4. 访问限制    Block Site，限制自己上网时间，限制自己访问一些指定网站，适合工作的时候使用。
5. [自定义搜索引擎添加方法](https://blog.csdn.net/zeyutang/article/details/1903603)

#### 1.6. 更新
**新增扩展**：沙拉查词、广告净化器、Side View、视频弹出工具、找回已关闭的标签页、Paste N GO 一键粘贴并搜索、Aria2 manager、
**移除扩展**：S3. Translator、uBlock Origin、Sidebar Note、
**漏洞**：Firefox 72.0.1 或 Firefox 68.4.1 ESR 之前的版本受到一个零日漏洞的威胁（可被钓鱼网站利用）

新版升级：

1. 新增 管理扩展快捷键
2. 新增 应用程序处理选项
3. 新增 夜间模式
4. 修复 新主题
5. 修复 右键菜单
6. 修复 全局快捷键冲突
7. 支持 与旧版火狐同时打开

新版遗憾：

1. 主页无法后台打开
2. 右键菜单
3. 搜索引擎
4. 更新检查设置
5. 快捷键
6. 书签图标缓存

#### 1.7. 代理

|   Chrome   | Bilibili | Google  |
| ---------- | -------- | ------- |
| 直连       | 正常流量 | 正常流量 |
| 系统代理    | 正常流量 | 机场     |
| AutoSwitch | 正常流量 | 机场     |

|  旧版V10   | Bilibili | Google  |
| ---------- | -------- | ------- |
| 直连       | 正常流量 | 正常流量 |
| 系统代理    | 正常流量 | 机场     |
| AutoSwitch | 正常流量 | 机场     |


|  新版V10   | Bilibili | Google |
| ---------- | -------- | ------ |
| 直连       | 机场     | 机场   |
| 系统代理    | 机场     | 机场   |
| AutoSwitch | 机场     | 机场   |
新版V10 指 2019-05-27（内核 67.0）及之后
旧版V10 指 2019-04-03（内核 64.0）及之前


方案一
在cmd中使用系统代理
netsh winhttp import proxy source=ie
如何取消代理
netsh winhttp reset proxy

方案二
set http_proxy=http://proxy.com:port/
set http_proxy_user=username
set http_proxy_pass=password

如：
set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080
上面命令是设置环境变量，不用担心，这种环境变量只会持续到 cmd 窗口关闭，不是系统环境变量

测试是否成功：
curl https://www.google.com

用完怎么关掉呢
set http_proxy=
set https_proxy=


#### DNS & Proxy

Firefox 主打隐私，然而很多细节完全是在泄露隐私。请你严格按照下面的说明进行设置：

* 设置 - 隐私与安全 - 取消勾选「查询 OCSP……」
* about:config - network.trr.mode 改为 3
* about:config - network.trr.uri 改为 https://doh.opendns.com/dns-query
* 设置 - 常规 - 网络设置 - 选择「不使用代理服务器」
* 安装 SwithyOmega 扩展，配置代理

这样的话，Firefox 就不会调用系统 DNS，也不会直连了（受 SwithyOmega 控制），更不会使用那垃圾的 OCSP。再配置好 Clash，于是你就再也不怕公司的流量监控了，至少技术层面是安全的。




这些系统 DNS 请求是 Clash 发的还是 Firefox 发的？

使用迷糊客户端，没有发现 调用 WLAN 网卡的 DNS Server 请求。
使用 Firefox，发现了 调用 WLAN 网卡的 DNS Server 请求。
我看出来了，就是 Firefox 这个傻逼，禁用 DoH 后（`network.trr.mode = 5`），即便设置 SwitchyOmega 代理，Firefox 自己依旧进行 DNS 解析。而且我开了 TUN，Firefox 直接无视路由表，调用「WLAN 网卡」的 DNS Server。
Chrome 就不会这样，设置代理后 Chrome 就不管 DNS 了。
~~fuck~~……真的，我要气死了
通过抓包，我发现了一件更离谱的事，OCSP 使用的是 HTTP，虽说这是 [OCSP 自身的弊端](https://sspai.com/post/63649)……那我还用 OCSP 干嘛？


#### userChrome Script

[2020年代仍有Firefox userChrome JS脚本（介绍、简略教程、资源） - garywill - 博客园](https://www.cnblogs.com/garyw/p/14245879.html)

[benzBrake/FirefoxCustomize: Ryan 收集的 Firefox 个性化相关资源](https://github.com/benzBrake/FirefoxCustomize)


折腾了不同浏览器这么长时间，可以说，Firefox 与 Chrome 的最大区别在于 Firefox 支持 UC 脚本。是 UC 脚本让 Firefox 足够灵活与自由（当然还有不追踪用户隐私）。

- Settings
- about:config
- Extension
- Greasemonkey Script
- userChrome Script

