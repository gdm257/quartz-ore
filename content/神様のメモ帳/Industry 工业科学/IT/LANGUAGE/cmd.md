---
aliases:
  - cmd Specification
  - Batch
  - Command Shell
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Windows 批处理脚本指南](https://ettingshausen.github.io/cmd/2017/12/09/guide-to-windows-batch-scripting.html)

[Windows commands | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)

[Windows 命令 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)

[微软免费极品小工具集 Sysinternals Suite - 70 多款实用绿色 Windows 系统维护软件 - 异次元软件下载](https://www.iplaysoft.com/windows-sysinternals-suite.html)

[Linux MS-DOS vs. Linux 和 Unix command not found 未找到命令 MS-DOS vs. Linux 和 Unix详解 MS-DOS vs. Linux 和 Unix未找到 MS-DOS vs. Linux 和 Unix安装 - CommandNotFound ⚡️ 坑否](https://commandnotfound.cn/linux/1/225/MS-DOS-vs.-Linux-%E5%92%8C-Unix)


## Toolchains

### .bashrc

create a registry key called `AutoRun` under `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor` and set the path to bat script as value E.g. `"D:\.home\Documents\Command Prompt\AutoRun.cmd"`


### 扩展名

.bat/.cmd 后缀没什么大区别，推荐使用 .cmd 后缀。


## Namespace

## :: 注释

```cmd
REM 单行注释
:: 单行注释，不能在 for 循环中使用



```


## 标识符

```cmd
SET var=value
SET /var=1+1    开启算术运算
echo %var%

SETLOCAL
SET v=Local Value
ECHO %v%

DOS不需要声明变量
未声明/未初始化变量的值是空字符串或""

%1    相当于 bash $1
%2    相当于 bash $2

```


## pointer

## str
### 编码

**推荐以 utf-8 编码保存，同时加上 `chcp 65001`，换行符为 windows 的 CR LF**

如果脚本文件以 utf-8 编码保存，那在脚本开头加上一行 `chcp 65001` 即可解决中文乱码问题。

如果脚本以 ANSI（GB2312/GBK）保存，直接运行即可。



## int

## bool


## list

tuple 都没有，更别提 list


## array

批处理并没有定义数组这种数据结构，需要自己实现。



## dict

不用想了，劝退。


## 运算符


## for

## if


## function

## Pipe

## redirect

## IO

```cmd
@ECHO OFF
ECHO ON

```




### ~~VPS 索引~~

### ~~Typecho~~

[typecho-fans/plugins: Typecho开源插件集群](https://github.com/typecho-fans/plugins)

[ylqjgm/LoveKKComment: Typecho 评论邮件通知插件](https://github.com/ylqjgm/LoveKKComment)

[CommentReminder: Typecho 评论邮件提醒插件 - Wis Chu](https://wischu.com/archives/781.html)

[handsome神代綺凜式魔改主题插件 - Sanakeyの小站](https://keymoe.com/archives/31/)

[typecho一款萌萌的返回顶部插件 - Sanakeyの小站](https://keymoe.com/archives/26/)

[Sanakey/MoeTop: typecho一款萌萌的返回顶部插件](https://github.com/Sanakey/MoeTop)

[typecho 模板 Handsome 主题美化教程 - 喵斯基部落](https://www.moewah.com/archives/3012.html)

[Handsome魔改备忘录 - 凉心‘s Blog](https://www.lxink.cn/31.html)

[typecho修改后台留下的安全漏洞 - 小狼的小站](https://blog.tama.guru/save/2021/typecho_1.html)

[Typecho的SEO、robots与sitemap - 丛林小二](https://www.ttker.com/archives/39.html)

[超仿B站播放器 - さくら荘丨樱花庄](https://www.muyu.love/150.html)

[Typecho主题Handsome自定义添加表情包 - 喵斯基部落](https://www.moewah.com/archives/3345.html)

[Typecho主题Handsome魔改记录(持续更新) - 斩天邪-Peter的博客](https://www.zhpeter.com/114/)

[本博客基于Handsome主题的一些小修改教程 - Rat's Blog](https://www.moerats.com/archives/628/)

[Mozzie主题文档 - Mozzie | 陈睿](https://www.npmrundev.com/archives/28/?cid=28)

[handsome —— 一款typecho主题 - 友人C](https://www.ihewro.com/archives/489/)

[精选Typecho主题 支持代码高亮typecho主题 - Typecho开发者中文网 - 免费主题精选插件下载](https://www.typechodev.com/themes/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98/Blogecho.html)

[精选Typecho主题 Typecho纯文字主题LaShi - Typecho开发者中文网 - 免费主题精选插件下载](https://www.typechodev.com/themes/%E6%9E%81%E7%AE%80%E4%B8%BB%E9%A2%98/LaShi.html)

[精选Typecho主题 图片主题Lpisme - Typecho开发者中文网 - 免费主题精选插件下载](https://www.typechodev.com/themes/%E5%9B%BE%E7%89%87%E4%B8%BB%E9%A2%98/Lpisme.html)

[精选Typecho主题 绿色葡萄响应式主题 - Typecho开发者中文网 - 免费主题精选插件下载](https://www.typechodev.com/themes/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98/GreenGrapes.html)

[typecho插件：Menutree自动生成文章目录插件 | 挖模板](https://www.wamuban.com/plugin/2081.html)

[Typecho主题模板站](https://typecho.me/)

[哪些 Typecho 主题让你拍案叫绝？ - 知乎](https://www.zhihu.com/question/55808592)

[Typecho插件](https://plugins.typecho.me/)
[Typecho源码分析1 - 开篇、整体流程分析 - 觅而获 | Huspy's Blog](https://www.mierhuo.com/code/248)

[typecho流程原理和插件机制浅析（第一弹） - 兜兜 - SegmentFault 思否](https://segmentfault.com/a/1190000000449033)

[lnmp1.4安装及部署typecho或其它博客教程 - Rat's Blog](https://www.moerats.com/archives/61/)

[lnmp环境typecho伪静态及后台404配置 - Rat's Blog](https://www.moerats.com/archives/32/)

[WordPress、Typecho等博客批量修改文章图片和文件链接地址 - Rat's Blog](https://www.moerats.com/archives/337/)

[TypExport-Typecho数据导出工具,可搬家转换到wordpress博客 - Rat's Blog](https://www.moerats.com/archives/243/)

[Typecho主题设置总结 - SAUCERMAN](https://saucer-man.com/operation_and_maintenance/28.html)

[插件  给typecho博客文章底部添加版权信息 - Xcnte' s Blog](https://www.xcnte.com/archives/356/)

[js 网页输入框打字特效（懒人版） - 神代綺凜の萌化小基地](https://moe.best/modification/js-input-effect.html)


### ~~基础~~

[骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/)

[521xueweihan/HelloGitHub: 分享 GitHub 上有趣、入门级的开源项目](https://github.com/521xueweihan/HelloGitHub)

[Unix哲学 - 字节之上](https://www.topbyte.cn/2010/09/unix-philosophy/)

[Shell：Shell系列文章 | 骏马金龙](https://www.junmajinlong.com/shell/index/)

[精通awk系列文章 | 骏马金龙](https://www.junmajinlong.com/shell/awk/index/)

[Rclone 进阶使用教程 - 常用命令参数详解 - P3TERX ZONE](https://p3terx.com/archives/rclone-advanced-user-manual-common-command-parameters.html)

[Rclone 文档部分翻译 - 链滴](https://ld246.com/article/1600853705300)

[如何使用rclone同步远程云盘 | 大象无形，大音希声](http://zhangzr.com/2018/11/08/rclone/)

[可能是全网最基础的创建telegram bot的教程 - 知乎](https://zhuanlan.zhihu.com/p/30450761)

[Google企业邮箱申请试用及购买方法 - 简书](https://www.jianshu.com/p/bd57c2ad2cd6)

[软件版本号 – 就是这个范儿](https://www.thisfaner.com/p/version-rule/)

[Linux下使用grep命令查找文件中的特定文本 - 运维学习笔记博客](https://www.imydl.tech/linux/776.html)

[用好TCP/IP 的瑞士军刀Netcat - 运维学习笔记博客](https://www.imydl.tech/linux/881.html)

[XShell客户端快捷键和常用命令收集 - 运维学习笔记博客](https://www.imydl.tech/linux/734.html)

[mount --bind和硬连接的区别 - 洋之悟 - 博客园](https://www.cnblogs.com/yzwone/p/12722185.html)

[mount 挂载目录_zyllong的专栏-CSDN博客_挂载目录](https://blog.csdn.net/zyllong/article/details/69375296)

[mount bind功能详解 | 骏马金龙](https://www.junmajinlong.com/linux/mount_bind/)

[Linux管理文件系统(3)：mount挂载各种文件系统 | 骏马金龙](https://www.junmajinlong.com/linux/fsmgr_mountfs/)

[systemd时代的/etc/fstab | 骏马金龙](https://www.junmajinlong.com/linux/systemd/systemd_fstab/)


### ~~折腾~~

[systemd path：实时监控文件和目录的变动 | 骏马金龙](https://www.junmajinlong.com/linux/systemd/systemd_path/)

[CloudIPLC NAT 主机的正确食用方法 - 神代綺凜の随波逐流](https://moe.best/vps-domain/cloudiplc-nat.html)

[利用 NAT VPS 进行流量中转 | Silearner](https://blog.chaos.run/dreams/nat-vps-port-forwarding/#%E4%BD%BF%E7%94%A8-socat-%E8%BF%9B%E8%A1%8C%E4%B8%AD%E8%BD%AC)

[Base16 Terminal Colors for Visual Studio Code](https://glitchbone.github.io/vscode-base16-term/#/)

[Aria2 Pro - 更好用的 Aria2 Docker 容器镜像 - P3TERX ZONE](https://p3terx.com/archives/docker-aria2-pro.html)

[gdtool/cloudflare-workers-blog: A Blog Powered By Cloudflare Workers and KV](https://github.com/gdtool/cloudflare-workers-blog)

[kasuganosoras/cloudflare-worker-blog: Cloudflare workers + Github 实现的动态博客系统，使用边缘计算，无需服务器](https://github.com/kasuganosoras/cloudflare-worker-blog)

[EtherDream/jsproxy: 一个基于浏览器端 JS 实现的在线代理](https://github.com/EtherDream/jsproxy)

[Berkeley-Reject/workers-proxy: Lightweight JavaScript reverse proxy built with Cloudflare Workers.](https://github.com/Berkeley-Reject/Workers-Proxy)

[MSYS2 和 mintty 打造 Windows 下 Linux 工具体验 - Creaink - Build something for life](https://creaink.github.io/post/Computer/Windows/win-msys2.html)

[利用AirExplorer来实现Onedrive for business分享链接文件及文件夹批量下载-蜜桃猫](https://peachcat.org/archives/992)

[整理媒体文件建立EMBY媒体库 - 哔哩哔哩](https://www.bilibili.com/read/cv3285956)

[在jellyfin10.5.5中解决ASS字幕无法正常显示的问题_NAS存储_什么值得买](https://post.smzdm.com/p/aoo89e76/)

[Crypt](https://rclone.org/crypt/)

[Routes | Cloudflare Workers](https://developers.cloudflare.com/workers/about/routes/)

[botgram/shell-bot: Telegram bot that executes commands and sends the live output](https://github.com/botgram/shell-bot)

[out386/aria-telegram-mirror-bot: A Telegram bot to download files via HTTP(S)/BitTorrent and upload them to Google Drive](https://github.com/out386/aria-telegram-mirror-bot)

[lzzy12/python-aria-mirror-bot: A telegram bot for all your mirror needs](https://github.com/lzzy12/python-aria-mirror-bot)

[404 NOT FOUND | 某个不存在哒博客](https://404edublog.tk/)

[每日一Vim](https://liuzhijun.iteye.com/category/270228)

[简明 Vim 练级攻略](https://coolshell.cn/articles/5426.html)

[WordPress、Typecho等博客批量修改文章图片和文件链接地址](https://www.moerats.com/archives/337/)

[传说中图片防盗链的爱恨情仇 - 掘金](https://juejin.im/post/5cb6eaf951882532a376875e)

[使用Fail2ban禁止垃圾采集爬虫，保护Nginx服务器 - 运维学习笔记博客](https://www.imydl.tech/lnmp/149.html)

### ~~无用~~

[Linux 常用命令全拼](https://www.runoob.com/w3cnote/linux-command-full-fight.html)

[Cygwin系列（十）：折腾终端1 - 知乎](https://zhuanlan.zhihu.com/p/99963508)

[解放程序员双手之Supervisor - 知乎](https://zhuanlan.zhihu.com/p/63340417)

[iwestlin/gd-utils: Google Drive 百宝箱](https://github.com/iwestlin/gd-utils)

[从零开始自主搭建全套 Seedbox 环境 (1) - 下载篇 - R酱小窝 ~ 个人博客](https://blog.rhilip.info/archives/754/)

[2018年PT站发种观察报告 - R酱小窝 ~ 个人博客](https://blog.rhilip.info/archives/1049/)

[Pt Analytics](https://api.rhilip.info/ptanalytics.html)

[基于Pt-Board的国内Pt站点大数据分析 - R酱小窝 ~ 个人博客](https://blog.rhilip.info/archives/839/)

[TeleShellBot：通过Telegram机器人远程执行shell命令 - Rat's Blog](https://www.moerats.com/archives/327/)

[介绍几款 Windows DD 镜像 | 秋水逸冰](https://teddysun.com/545.html)

[自制 Linux 可用的 Windows dd包 - 神代綺凜の随波逐流](https://moe.best/tutorial/dd-diy.html)

[扫盲 netcat（网猫）的 N 种用法——从“网络诊断”到“系统入侵” @ 编程随想的博客](https://program-think.blogspot.com/2019/09/Netcat-Tricks.html)

[理解inode - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2011/12/inode.html)

[Cmder入门配置 – 就是这个范儿](https://www.thisfaner.com/p/cmder/)

[VPS使用BaiduPCS-Go高速下载百度网盘的文件，支持上传/离线下载等操作 - Rat's Blog](https://www.moerats.com/archives/738/)

[Linux VPS使用ipset快速屏蔽指定国家的IP访问 - Rat's Blog](https://www.moerats.com/archives/584/)

[如何使用 FirewallD 开启 IP 白名单 | 秋水逸冰](https://teddysun.com/566.html)

[一款二次元的Web多人在线网络聊天系统：Fiora安装及使用 - Rat's Blog](https://www.moerats.com/archives/978/)

[使用Aira2下载文件后自动上传到Google Drive网盘 - Rat's Blog](https://www.moerats.com/archives/482/)

[RSSHub：一个轻量、易于扩展的RSS生成器，支持B站/微博/网易云音乐等 - Rat's Blog](https://www.moerats.com/archives/587/)

[小工具推荐——Bindp (为Linux程序绑定 IP 地址和端口) | Senraの小窝](http://www.senra.me/tools-recommendation-linux-bindp-rebind-ip-and-port-for-application/)

[NAT 主机的正确食用方法 - 神代綺凜の萌化小基地](https://moe.best/vps-domain/cloudiplc-nat.html)

[使用EH Forwarder Bot实现Telegram同时收发多个微信/QQ消息](https://www.moerats.com/archives/931/)

[锐速&BBR究竟哪家强？个人PC有必要上锐速吗？ - 神代綺凜の萌化小基地](https://moe.best/gotagota/compare-serverspeeder-and-bbr.html)

[谷歌BBR TCP BBR 魔改版（加强版） for Debian/Ubuntu - 神代綺凜の萌化小基地](https://moe.best/yoimono/linux-bbr-powered-vicer.html)

[Linux VPS使用Webbench/Apache-ab进行网站压力测试 - Rat's Blog](https://www.moerats.com/archives/606/)

[一款非常好用的Web端SSH工具：GateOne安装教程 - Rat's Blog](https://www.moerats.com/archives/582/)

[被骗几十万总结出来的Ddos攻击防护经验！ - 知乎](https://zhuanlan.zhihu.com/p/22953451)

[十个最常见的 Web 网页安全漏洞之首篇 - Xcnte' s Blog](https://www.xcnte.com/archives/600/)

[十个最常见的 Web 网页安全漏洞之尾篇 - Xcnte' s Blog](https://www.xcnte.com/archives/604/)

### ~~废弃~~

[Windows 支持 OpenSSH 了！ - sparkdev - 博客园](https://www.cnblogs.com/sparkdev/p/10166061.html)

[Linux 命令大全](https://www.runoob.com/linux/linux-command-manual.html)

[Linux 系统中常用操作命令 | 秋水逸冰](https://teddysun.com/351.html)

[Windows下使用OpenSSH搭建ssh服务端 | 钟潘的博客](https://zhongpan.tech/2019/08/09/012-using-openssh-to-build-ssh-server-upder-windows/)

[Xshell、Xftp 5、6 解决“要继续使用此程序,您必须应用最新的更新或使用新版本” - JasonCeng - 博客园](https://www.cnblogs.com/JasonCeng/p/11673999.html)

[Linux VPS使用WonderShaper限制服务器上传/下载带宽 - Rat's Blog](https://www.moerats.com/archives/937/)

[fail2ban 防止SSH暴力破解 一键脚本 - 神代綺凜の萌化小基地](https://moe.best/yoimono/fail2ban.html)

[如何使用 fail2ban 防御 SSH 服务器的暴力破解攻击 - 运维学习笔记博客](https://www.imydl.tech/lnmp/147.html)

[Filtering](https://rclone.org/filtering/)

[E站H@H客户端最全安装与使用指南 - 槐序二三煊の博客](https://www.sukeycz.com/course/HentaiAtHome-Install)

[CentOS 搭建 H@H 客户端 | Lxnet - 文章](https://blog.lxns.org/post/89)

[SMTP - Simple Mail Transfer Protocol in Zoho Mail](https://www.zoho.com/mail/help/zoho-smtp.html)

[(1) MARVELTDSTE - Google 网上论坛](https://groups.google.com/forum/#!forum/marveltdste)

[API version 1 | Chevereto V3](https://v3-docs.chevereto.com/API/V1.html)

[API V1 - Chevereto-中文文档](https://ch.cndrew.cn/cn/API/API%20V1/#api_4)

[自定义chevereto上传用户和上传相册 - 槐序二三煊の博客](https://www.sukeycz.com/course/uPic-Chevereto-imageuploads)

[Chevereto WordPress上传工具 代码版 - Chevereto开心版 - 萝莉论坛](https://www.loli.vc/topic/12212/#comment-15975)

[WordPress编辑器中添加“上传到Chevereto图床”按钮 – Spiritの小站](https://spiritx.xyz/843.html)

[修改 Chevereto 使其 API 支持相册、描述 – 笨笨.Blog](https://www.myluoluo.com/chevereto-api-album-description.html)

[在Debian/Ubuntu上使用rclone挂载OneDrive网盘 - Rat's Blog](https://www.moerats.com/archives/491/)

[Ampache 私人云音乐搭建和使用 - BFDZ](https://www.bfdz.ink/2019/01/13/121/)

[使用Plexdrive/Rclone+Google Drive搭建无限容量的媒体库，适用于Plex/Emby/Jellyfin等](https:/www.moerats.com/archives/870/)

[在Debian/Ubuntu上使用rclone挂载Google Drive网盘 - Rat's Blog](https://www.moerats.com/archives/481/)

[Linux下 top 命令的使用 - 运维学习笔记博客](https://www.imydl.tech/linux/661.html)

[使用静态ffmpeg二进制文件秒安装ffmpeg - Rat's Blog](https://www.moerats.com/archives/719/)

[常见TCP/UDP端口参考表 - 常用参考表对照表 - 脚本之家在线工具](http://tools.jb51.net/table/tcp_udp_port)

[Linux VPS纯净版Debian/Ubuntu/CentOS/Windows系统一键安装脚本 - Rat's Blog](https://www.moerats.com/archives/574/)

[如何在 WinSCP 中使用 sudo ](https://linux.cn/article-10616-1.html)

[Linux VPS一键添加/删除Swap虚拟内存 - Rat's Blog](https://www.moerats.com/archives/722/)

[SSH密钥安装器升级，一键安装VPS密钥安全登录 - Rat's Blog](https://www.moerats.com/archives/381/)

[Linux VPS服务器SSH端口一键修改脚本 - Rat's Blog](https://www.moerats.com/archives/394/)

[通过Auth.log来查看VPS服务器是否被扫描和暴力破解 - Rat's Blog](https://www.moerats.com/archives/64/)

[CentOS和Debian/Ubuntu 安装Fail2ban服务来防止暴力破解FTP/SSH - Rat's Blog](https://www.moerats.com/archives/153/)

[NetData 一个超酷炫的Linux性能实时监控探针 - 神代綺凜の萌化小基地](https://moe.best/yoimono/netdata.html)

[一款强大好用的图床程序：chevereto安装教程 - Rat's Blog](https://www.moerats.com/archives/390/)

[Hellohao，纯粹的图片存放驿站](http://www.hellohao.cn/?p=201)

[wisp-x/lsky-pro: ☁️Lsky Pro - Your photo album on the cloud.](https://github.com/wisp-x/lsky-pro)

[使用Searx搭建一个私人的搜索引擎平台，可展现Google/Bing等70多种搜索网站的搜索结果 - Rat's Blog](https://www.moerats.com/archives/875/)

[一个去中心化的图片分享平台：ipfs.pics搭建教程 - Rat's Blog](https://www.moerats.com/archives/792/)

[一键备份脚本backup.sh | 秋水逸冰](https://teddysun.com/469.html)

[Rclone 750G自动换号– AutoRclone使用教程 - G Suite items](https://gsuitems.com/index.php/archives/13)

[Rclone高级玩法--利用服务账号突破日流量750G限制 - Jialezi `s blog](https://blog.jialezi.net/?post=153)

[Folderclone谷歌Google Drive共享云端硬盘转存相互转移拷贝复制文件的正确姿势](https://567899.xyz/google_drive_folderclone.html)

[Sheldonsix/A-python-script-of-AutoRclone-or-gclone: 提取 accounts 里面 json 文件的文件名和邮箱，便于查询和添加到 Google groups](https://github.com/Sheldonsix/A-python-script-of-AutoRclone-or-gclone)

[eBesucher：利用闲置的VPS服务器挂机赚钱教程 - Rat's Blog](https://www.moerats.com/archives/326/)

[docker compose 部署迁移 Chevereto 图床程序教程 - 思有云 - IOIOX](https://www.ioiox.com/archives/80.html)

[使用Forsaken Mail搭建一个临时邮箱系统，即收即毁 - Rat's Blog](https://www.moerats.com/archives/723/)

[每日自动将你的网站备份到Github](https://moe.best/gotagota/backup-to-github.html)

[Debian 9/Ubuntu 17+添加rc.local开机自启的方法 - Rat's Blog](https://www.moerats.com/archives/623/)

[一款多平台的免费增量备份工具：Duplicati安装教程 - Rat's Blog](https://www.moerats.com/archives/776/)

[donwa/gclone: rclone mod](https://github.com/donwa/gclone)

[一款跨平台的快速，简单，干净的视频下载器：Annie，支持Bilibili/Youtube等多个网站 - Rat's Blog](https://www.moerats.com/archives/935/)

[如何在GPG中使用Duplicity将数据备份到DigitalOcean空间](https://www.howtoing.com/how-to-use-duplicity-with-gpg-to-back-up-data-to-digitalocean-spaces)

[frp 内网穿透神器搭建 萌新也看得懂的教程系列 - 神代綺凜の萌化小基地](https://moe.best/tutorial/frp.html)

[sish：一个开源、轻量且类似于Servo/Ngrok的内网穿透工具 - Rat's Blog](https://www.moerats.com/archives/1002/)

[使用Docker安装OpenTracker，自建BT Tracker服务器 - Rat's Blog](https://www.moerats.com/archives/730/)

[如何基于 Docker 在服务器上部署 Seafile Community 版本 - 掘金](https://juejin.im/post/5c9631bff265da60f85ffa3b)

[一款开源免费且类似Emby的个人媒体服务器：Jellyfin安装教程 - Rat's Blog](https://www.moerats.com/archives/859/)

[Simple Torrent：一个支持边下边播、无版权限制和自动上传的BT离线下载程序 - Rat's Blog](https://www.moerats.com/archives/1023/)

[自建Git服务器系列——Gitea(Gogs的孪生兄弟) | Senraの小窝](http://www.senra.me/self-hosted-git-server-gitea-a-different-fork-of-gogs/)

[gclone 搬山之术 | HE-SB-技术栈](https://tech.he-sb.top/posts/usage-of-gclone/)

[自建Syncthing中继服务器(私密传输或造福大众) | Senraの小窝](http://www.senra.me/deploy-syncthing-relay-server-for-yourself-or-the-public/#more-1369)

[使用CoolQ Telegram Bot X转发/合并QQ群和Telegram群之间的消息](https://www.moerats.com/archives/805/)

[GPG 的正确使用姿势 | Mogeko`s Blog](https://mogeko.me/2019/068/)

[Wireshark 网络抓包工具 - Xcnte' s Blog](https://www.xcnte.com/archives/760/)

[Linux下杀毒软件ClamAV的安装和使用 - 运维学习笔记博客](https://www.imydl.tech/linux/738.html)

[分享2款网站程序源码/主题等后门检测工具](https://www.moerats.com/archives/706/)

[ProjectSECURITY：一款多功能强大的网站安全程序 - Rat's Blog](https://www.moerats.com/archives/231/)

[安全产品之RASP · xianlimei/yiwei.github.io Wiki](https://github.com/xianlimei/yiwei.github.io/wiki/%E5%AE%89%E5%85%A8%E4%BA%A7%E5%93%81%E4%B9%8BRASP)

[BadMod V2.0：一款用于扫描网站并自动执行渗透的工具 - Xcnte' s Blog](https://www.xcnte.com/archives/133/)

[2019 年道德黑客入侵的 21 个基本工具 - Xcnte' s Blog](https://www.xcnte.com/archives/633/)

[常见web安全攻防总结 - Xcnte' s Blog](https://www.xcnte.com/archives/351/)

[防御CC攻击的两种方法 | YaLei Blog](https://www.liuyalei.top/289.html)

[DDOS deflate 抵御DDOS攻击 - Rat's Blog](https://www.moerats.com/archives/143/)

[DDoS deflate 一个防御DDoS的纯Shell脚本 修复BUG&汉化 - 神代綺凜の萌化小基地](https://moe.best/technology/ddos-deflate.html)

[jgmdev/ddos-deflate: Fork of DDoS Deflate with fixes, improvements and new features.](https://github.com/jgmdev/ddos-deflate)

[CC-Attack-Protector：Linux VPS防CC攻击一键脚本，带微信提醒 - Rat's Blog](https://www.moerats.com/archives/484/)

[通俗讲述CC攻击 - Xcnte' s Blog](https://www.xcnte.com/archives/477/)

[漫画告诉你什么是DDoS攻击？ - Xcnte' s Blog](https://www.xcnte.com/archives/474/)

[DDOS 攻击的防范教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/06/ddos.html)


### ~~borg~~

```bash
老牌备份应用，Python 写的，不支持 windows。整体设计跟 restic 一模一样，不过 restic 更简洁些，还跨平台。

wget https://github.com/borgbackup/borg/releases/download/1.0.12/borg-linux64
sudo cp borg-linux64 /usr/local/bin/borg
sudo chown root:root /usr/local/bin/borg 将指定文件的拥有者改为指定的用户或组
sudo chmod 755 /usr/local/bin/borg
BorgBackup 是没有配置文件的，所有配置项都是在运行的时候通过命令行参数或是环境变量来改变；
同仓库，chunk 级去重；
支持 AES-256 加密；


borg init --encryption=repokey /opt/backup/borg_sample
borg create --stats /opt/backup/borg_sample::first /opt/data/
borg create --stats /opt/backup/borg_sample::second /opt/data/
borg create -v -p -s /mnt/borgs/DS-Test::mounta-{now:%Y-%m-%d-%s} .
borg list /opt/backup/borg_sample/
borg list /opt/backup/borg_sample::first
borg prune -v --list --dry-run   --keep-last=10 /home/test001/backup
保留最新的10个版本 试运行--dry-run

加密：init 时用 --encryption=repokey 缩写 -e repokey，回车后会要求输入密码
压缩：默认 lz4，速度快、压缩比低，足够了 --compression lz4。--compression zlib,9 高压，最高 9
维持：prune
增量：
分卷
命名
恢复
查看

```




### ~~chrony~~

```bash
下一代 NTP

```


### ~~direnv~~

```bash
# 1. 下载二进制文件
apt install direnv
scoop install -g direnv


# 2. 注入 shell
Bash
vim ~/.bashrc
eval "$(direnv hook bash)"

ZSH
eval "$(direnv hook zsh)"

# 3. 使用
mk mydir
cd mydir
vim .envrc

#!/bin/bash
export myenv=lksdjflksj



direnv 可以根据当前目录自动加载或卸载环境变量。

direnv是shell的环境切换器。 它知道如何挂钩到bash，zsh，tcsh和fish shell来根据当前目录加载或卸载环境变量。 这允许项目特定的环境变量而不会污染〜/ .profile文件。

在每次提示之前，direnv检查当前目录和父目录中是否存在“.envrc”文件。 如果文件存在（并被授权），则将其加载到bash子shell中，然后所有导出的变量将被direnv捕获，然后提供给当前shell。



```

### ~~duplicity~~

chmod 0777 ~/test/dcity.sh
chmod 0777 ~/test/.env.conf

```bash


    弃坑，Bug 太多了，请用 Restic


// 迁移

首先是 restore，这步已经成功，不多说了。迁移完成并上线后需要继续备份，这时遇到了 3 个报错，第一是 gpg 公钥没有 passphrase，第二是 gpg 解密失败因为没有 secret key，第三是 hostname 与之前的不一致了，摘要报错如下：

ERROR 1
. Error processing remote manifest (op-duplicity-inc.20200924T170002Z.to.20200925T184940Z.manifest.gpg): GPG Failed, see log below:
. ===== Begin GnuPG log =====
. gpg: encrypted with 2048-bit RSA key, ID 982887E48DB657CD, created 2020-04-23
. "LoliNeko (lolineko.com) <loli.neko2022@gmail.com>"
. gpg: public key decryption failed: No passphrase given
. gpg: decryption failed: No secret key
. ===== End GnuPG log =====

ERROR 31 GPGError
. GPGError: GPG Failed, see log below:
. ===== Begin GnuPG log =====
. gpg: 982887E48DB657CD: There is no assurance this key belongs to the named user
. gpg: [stdin]: encryption failed: Unusable public key
. ===== End GnuPG log =====
. 

ERROR 3 'vm925796.akkocloud.com' 'CubeCloud-2020328938'
. Fatal Error: Backup source host has changed.
. Current hostname: vm925796.akkocloud.com
. Previous hostname: CubeCloud-2020328938
. 
. Aborting because you may have accidentally tried to backup two different data sets to the same remote location, or using the same archive directory.  If this is not a mistake, use the --allow-source-mismatch switch to avoid seeing this message



第三个问题好解决，报错说了加上参数 --allow-source-mismatch 即可。还有种方法是给变量 HOSTNAME 赋值，据说 duplicity 是读取 $HOSTNAME 来判断的。

第一第二个问题就麻烦了，第一个问题说是缺少口令，我让脚本把变量 PASSPHRASE 打出来，并没有问题。第二个问题就更加扯了，我都 restore 成功了，跟我说没有私钥，没有私钥我是怎么解密（恢复数据）成功的？

更魔幻的是，--dry-run 时第一第二个问题不会报错，正式跑就报错。

经过一番测试，终于解决。总结下来这几个报错需要做好 2 点：一是加上参数 --allow-source-mismatch；二是应该信任对应的 gpg 证书，如何操作放下面了。

报错 GnuPG: there is no assurance this key belongs to the named user
gpg --edit-key xxxxxx
gpg> trust

做好之后多次亲测成功，话说这 --dry-run 真坑，跟实际运行完全不一样嘛。理论上这是 gpg 的锅，我猜可能是 --dry-run 没有真正去备份文件，因此没使用到 gpg 密钥对，所以 --dry-run 没有报错；等到真正跑时发了请求，gpg 就给报错了。

……2022 年更新，第二个问题又复现了，--allow-source-mismatch 和信任证书都没用。于是重新查，找到这个：

[How can I fix this gpg error with Backup (deja-dup, duplicity)? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/532845/how-can-i-fix-this-gpg-error-with-backup-deja-dup-duplicity)

Add the following to ~/.gnupg/gpg.conf:
use-agent
pinentry-mode loopback

And to your ~/.gnupg/gpg-agent.conf:
allow-loopback-pinentry







duplicity

手打命令行参数：
    --verbosity=5 \
    --encrypt-key "loli.neko2022@gmail.com" \
    --log-file "$HOME/test/dcity-remove.log" \
    --name="x-monster" \
    --file-prefix="op-" \
    --volsize=3072 \

Commands:
  cleanup <target_url>
  collection-status <target_url>
  full <source_dir> <target_url>
  incr <source_dir> <target_url>
  list-current-files <target_url>
  restore <source_url> <target_dir>
  remove-older-than <time> <target_url>
  remove-all-but-n-full <count> <target_url>
  remove-all-inc-of-but-n-full <count> <target_url>
  verify <target_url> <source_dir>
  什么都不加等同于 full 或 incr（甚至是 restore），它会自动根据 option 判断是 full 还是 incr（它会自动根据 SRC DST 的形式判断你是备份还是恢复 restore，因为备份的 SRC 是路径 /path/to/src，DST 是 xxxx://path/to/dst；而恢复的正好相反，SRC 是 xxxx://path/to/src，DST 是路径 /path/to/dst，如果没指定恢复日期，默认恢复到最新的那份，大概吧，我在 -v 5 级的日志里搜索「Last full backup date」可以找到最新的完整备份，然后往下翻，可以看到程序所读取到的最新增量备份文件名，确实是最新的）

缺点是默认文件命名相当蛋疼。还有就是不能跨平台，文档少（不过挺容易摸索出来的，我已经写了相当详细的文章了），除此都很完美。哦对了，Deja-dup 是 duplicity 的圖形介面前端工具，名字也很有趣，就是法語 Deja Vu 既視感的變化，它被内置在 Ubuntu 中。

更蛋疼的是，各种 remove-xx 命令一点用都没有，笑死，根本删不掉备份，即便 collection-status 正常显示，remove 死活检测不到备份。因此建议一个 full 备份到底，每年把所有备份删掉然后开启一个新 full。

说说跨平台，因为我的备份策略注重灾备、容错，但高可用随缘，采用的是「打包机器上**已存在**的文件」，所以跨平台的优势并不明显。非要说，那就是跨平台 restore 比较方便。dcity 需要从虚拟机复制出来，或者先 restore 到 vps，再从 vps 上拉下来。但我为什么不直接拉 vps 呢？不能这么做有 2 种可能，第一是 vps 炸了，第二是我需要旧版本。前者，我干嘛不直接在 vps 上恢复，要拉到本地，没事找事？后者，说实话 Acronis、git、手动备份配置，用了这么久，我就没有专门找过旧版本，换句话说我不怎么需要版本控制，基本也没用过。灾备本身就是低收益，维护配置就是高成本、低收益中的低收益，完全不划算。



// 手动安装
apt install -y duplicity #最简单直接不折腾

依赖可以看 tar 里的 requirements.txt 文件
依赖：yum install gcc-c++ librsync python-lockfile python-urllib3 python-setuptools python-devel librsync-devel
E: Unable to locate package gcc-c+
E: Could not find any package by regex 'gcc-c+'
E: Unable to locate package librsync 应该用 librsync1
E: Unable to locate package python-devel
E: Unable to locate package librsync-devel

tar xvf duplicity-0.7.07.tar.gz
cd duplicity-0.7.07
pip install -r requirements.txt 只能安装 python 里的依赖，还是不行
python setup.py install
echo $?
duplicity -V
旧版 v0.7.11 (2016/12/31) 可以 apt install -y duplicity
新一点 sudo apt add-repository ppa:duplicity-team/ppa
添加源后能 0.7.19 2019/04



// 参数
-t time, --restore-time=time, --time=time
--restore-time "2002-01-25"
--restore-time "2017-01-01T19:53:52"
时间：7Y 7W

--copy-links
--dry-run
--encrypt-key=gpg-key-id
--encrypt-secret-keyring=path
--encrypt-sign-key=gpg-key-id

--full-if-older-than 1W \
--no-encryption \
--exclude-device-files \
--exclude /mnt \
--exclude /tmp \
--exclude /proc \
--exclude /lost+found \
--exclude /media \
--exclude /run \
--exclude /sys \
/ file:///media/backup/ \
--force \

--include=shell_pattern
--include-filelist=filename
--include-regexp=regular_expression
--include-regexp=(www\/typecho|data\/mysql5)


必须排除：/sys、/proc（因为这两者是虚拟文件系统）和设备文件
建议排除：/tmp和/lost+found
按需排除：/mnt和/media

```



### ~~duplicacy~~

```bash
使用角度而言，跟 duplicati 没有本质区别，都需要单独的配置文件。无需跨平台请用 duplicity

// CMD Version
wget https://github.com/gilbertchen/duplicacy/releases/download/v2.4.1/duplicacy_linux_x64_2.4.1
cp duplicacy_linux_x64_2.4.1 /usr/local/bin/duplicacy
chomod +x /usr/local/bin/duplicacy

// Web Version
wget https://acrosync.com/duplicacy-web/duplicacy_web_linux_x64_1.2.1
cp duplicacy_web_linux_x64_1.2.1 /usr/local/bin/duplicacy-web
chmod +x /usr/local/bin/duplicacy-web


```


### ~~duplicati~~

```bash
结论是：如果无需跨平台，请用 duplicity

有个致命的缺点，你无法从单独的文件名看出线性关系。也就是说，只有备份文件，是无法从中读取到任何信息，你需要这个备份的配置信息（一个数据库文件），不然你永远无法使用这些备份文件。但这个数据库文件是单独的、反复修改的，上传方案会变复杂，备份迁移也会变得困难。只能写脚本，复制一份 + 重命名，或用 git，要么不优雅、要么复杂。


// 安装
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian stretch main" | sudo tee /etc/apt/sources.list.d/mono-official.list
sudo apt-get update
sudo apt-get install mono-devel
sudo apt install mono-devel
wget https://updates.duplicati.com/beta/duplicati_2.0.5.1-1_all.deb
dpkg -i duplicati*.deb
如果安装报错，使用该命令修复一下就自动安装成功了：
apt-get -f install -y


#无需密码访问
/usr/bin/mono /usr/lib/duplicati/Duplicati.Server.exe --webservice-interface=any
#访问需输入密码moerats，可自定义其它密码，修改最后面参数即可
/usr/bin/mono /usr/lib/duplicati/Duplicati.Server.exe --webservice-interface=any --webservice-password=moerats

systemctl enable duplicati
systemctl start duplicati


mono /usr/lib/duplicati/Duplicati.CommandLine.exe \
    backup file:///home/yui/test/dup01/ \
    /home/yui/test/test/ \
    /home/yui/test/test2/ \
    --backup-name=test \
    --dbpath=/home/yui/.config/Duplicati/OWUNVFSMJK.sqlite \
    --encryption-module=aes \
    --compression-module=zip \
    --dblock-size=50mb \
    --passphrase="I&whV/,7j;:_}tjTMj1GP@*t?ThMWKS,%=RVqcUp" \
    --keep-versions=7 \
    --disable-module=console-password-input

```


### ~~monkeysphere~~

```bash
apt install monkeysphere

提供了工具 pem2openpgp 将 ssh private key 添加为 gpg key 的 subkey。


# 将其他格式的私钥文件修改为 PEM 格式（覆盖原文件）
ssh-keygen -p -m PEM -f <private-key-file>

# PEM 格式的 SSH key 转 gpg key
pem2openpgp


```

### NETFLIX-VERIFY

[sjlleo/netflix-verify: 流媒体NetFlix解锁检测脚本 / A script used to determine whether your network can watch native Netflix movies or not](https://github.com/sjlleo/netflix-verify)



### ~~netsh~~

```bash
netsh 转发效率极低，有时还不成功，不推荐使用。
tcptunnel 也不好用，经常闪退。

找到个好用的
https://github.com/snail007/goproxy  #看上去很强
https://github.com/HirbodBehnam/PortForwarder  #亲测可用
Linux iptables 无敌


windows 端口转发工具

// 查看所有代理配置
netsh interface portproxy show all

// 添加本地8080端口代理到WSL的80端口
netsh interface portproxy add v4tov4 listenport=2556 listenaddress=0.0.0.0 connectport=2558 connectaddress=127.0.0.1
netsh interface portproxy add v4tov4 listenport=2556 listenaddress=0.0.0.0 connectport=2558 connectaddress=192.168.2.100

// 删除8080这条代理
netsh interface portproxy delete v4tov4 listenport=8080 listenaddress=0.0.0.0


```


### ~~nssm~~

```bash
一句话，如果参数的值有空格，那你可以放弃 nssm 了。引号的转义太恐怖了，官方文档、文章看了好久试了好久都没弄明白，堪称玄学。

一句话，如果是 python java npx pip 之类的东西，nssm 和 winsows service 根本不能用。请用手写 winsw 配置文件。


// Windows 原生命令行

sc create nginx binpath= "D:\Portable\scoop\apps\nginx\current\nginx.exe" Type= share start= auto
sc create Frpc binpath= "\"D:\Portable\Figure\frp\frpc.exe\" -c=\"D:\Portable\Figure\frp\frpc.ini\"" [Type= share] Start= auto
sc start Frpc
sc delete Frpc
注意，option 的等号后面要有空格
如果命令中的需要进行双引号的嵌套，使用反斜杠加引号 \ 来进行转义处理





// Windows 原生自启动
创建一个bat文件，将快捷方式放到 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp 目录下，这个方式需要用户登录才能自启动



HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
或
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
下新建一个字符串值型注册表

"cmd /c \"cd '%NGINX_HOME%' ; nginx\""
我不确定是否需要转义，整个值最好用双引号包裹。

HKEY_CLASSES_ROOT
HKEY_CURRENT_USER
HKEY_LOCAL_MACHINE
HKEY_USERS
HKEY_CURRENT_CONFIG

HKEY_CLASSES_ROOT包含了所有应用程序运行时必需的信息，比如驱动程序，com组件等，没有它，计算机是不能启动的。访问HKEY_CLASSES_ROOT目录下的所有子健需要管理员权限。

HKEY_LOCAL_MACHINE保存了注册表里的所有与这台计算机有关的配置信息，只是一个公共配置信息单元。换句话说，写在HKEY_LOCAL_MACHINE目录下面的子健，当前计算机上的用户是都可以进行读访问的，如果要进行写访问，还是需要管理员权限。

HKEY_CURRENT_USER管理系统当前的用户信息。在这个根键中保存了本地计算机中存放的当前登录的用户信息，包括用户登录用户名和暂存的密码。在用户登录Windows时，其信息从HKEY_USERS中相应的项拷贝到HKEY_CURRENT_USER中。每个用户（管理员和非管理员）都可以直接对这个目录下的所有子健进行读写访问，不需要提权。





// 安装服务
nssm install Frpc
nssm install Frpc D:\Portable\Figure\frp\frpc.exe
nssm set Frpc AppDirectory D:\Portable\Figure\frp
nssm set Frpc AppParameters -c frpc.ini
nssm set Frpc Description "Frp Client"
nssm edit Frpc

nssm set Jenkins AppDirectory C:\Jenkins
nssm set Jenkins AppStdout C:\Jenkins\jenkins.log
nssm set Jenkins AppStderr C:\Jenkins\jenkins.log
nssm set Jenkins AppStopMethodSkip 6
nssm set Jenkins AppStopMethodConsole 1000
nssm set Jenkins AppThrottle 5000

nssm set Navidrome AppStdout "C:\Services\navidrome\navidrome.log"
nssm set Navidrome AppStderr "C:\Services\navidrome\navidrome.log"
nssm set Navidrome AppRotateFiles 1
nssm set Navidrome AppRotateSeconds 86400
nssm set Navidrome AppRotateBytes 10240


要是参数无效，直接
nssm install Frpc "D:\Portable\Figure\frp\frpc.exe -c=D:\Portable\Figure\frp\frpc.ini"

Win + R，输入 services.msc，打开服务窗口。
可以看到 Aria2 服务已经被成功安装。
选中 Aria2，右键，属性，可以看到如下图所示，单击【启动】按钮，即可启动 Aria2 服务。

nssm start <servicename>
nssm stop <servicename>
nssm restart <servicename>
nssm status <servicename>
nssm processes <servicename>

// 卸载服务
nssm remove Aria2 confirm

```




### ~~pipenv~~

```bash
# Debian
sudo apt install pipenv

# Windows
pip install pipenv
pip install --user pipenv # 官方写法，会安装到 C 盘，不推荐

pipenv 是 python 官方推荐的包管理工具，集成了 virtualenv、pyenv 和 pip 三者的功能于一身，类似于 php 中的 composer
```



### RegionRestrictionCheck

[lmc999/RegionRestrictionCheck: A bash script to check if your VPS's IP is available for various OTT platforms](https://github.com/lmc999/RegionRestrictionCheck)


这个脚本是我最近查看各类 VPS 评测网站时发现的，相比前面的检测脚本来说，最大的特点就是够全，除了我们常用的 Netflix Youtube Steam 检测外还包含了很多限定国家/地区的服务平台检测（比如 Bilibili，HBO，BBC），适合想全面了解自己 VPS 解锁状况的朋友使用。




### ~~rdiff-backup~~

```bash
感觉像是备份界的 git，因为 rdiff-backup 保留了旧版的文件，加上 restore，完全就像是 git reset。但遗憾的是，我从官方文档中，并没有发现有支持加密、压缩......也就是说，它更像一个同步软件，而不是备份，备份要求的是可以放到网盘那种有隐私风险的地方，加密必不可少。要加密恐怕得自己写脚本调用 tar 之类的。但说实话，备份文件不自带加密，用起来会无比麻烦，所以，放弃。

sudo apt install python3 python3-setuptools python3-pylibacl python3-pyxattr curl
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python3 get-pip.py
sudo pip3 install rdiff-backup

rdiff-backup [options] <source> <target>

rdiff-backup /etc \
    --print-statistics \ #打印摘要统计信息
    --include-special-files \ #包含所有的设备文件、fifo 文件、socket 文件和链接文件
    --exclude /etc/cockpit \
    --exclude /etc/bluetooth \
    /media/aaronkilik/Data/Backup/mint_etc.backup

rdiff-backup -r 2014-05-14T11:30:00 172.16.10.35::/home/kevin/test 172.16.10.35::/home/kevin/old

```


```sh
#!/bin/bash 
#This is a rdiff-backup utility backup script 
#Backup command 
rdiff-backup --print-statistics --remote-schema 'ssh -C %s "sudo /usr/bin/rdiff-backup --server --restrict-read-only  /"'  root@192.168.56.102::/var/logs  /backups/192.168.56.102_logs.back 
#Checking rdiff-backup command success/error 
status=$? 
if [ $status != 0 ]; then 
#append error message in ~/backup.log file 
echo "rdiff-backup exit Code: $status - Command Unsuccessful" >>~/backup.log; 
exit 1; 
fi 
#Remove incremental backup files older than one month 
rdiff-backup --force --remove-older-than 1M /backups/192.168.56.102_logs.back 

```










### ~~unzip~~

```bash
这里用的是 cmder 版 unzip，测试了下和 linux 上的没啥区别
apt install unzip
unzip abc.zip
unzip -l abc.zip
unzip -O cp936 test.zip

用来测试很方便
没有 utf-8 信息，文件名绝对是乱码，windows 上也是这样。例如纯 gbk 编码的 zip。


总结：

只要有 utf-8 path，就强制对文件名使用 utf-8，即便你指定了其他编码。现在的软件比较智能，无论是直接使用 utf-8，还是直接使用其他编码但附加 unicode extra path。包括 unzip 7z winrar bandizip。以上说的是 zip 文件。

Winrar 压缩时肯定用了 utf-8，并且大概率用的是直接编码用 gbk 并附上 unicode extra path 的方式。因为它的注释用的是 gbk，即默认编码（ANSI）。

bandizip 编码可以设置，要么全为 GBK，要么在 GBK (ANSI) 基础上加 Unicode Extra Path，要么全为 UTF-8。

我的理解是，压缩包可以简单分为两部分，文件头、被压缩文件的内容。

文件头包括所有被压缩文件的文件名、目录结构、注释等，可以说是文本数据，所以需要正确的编码，如果指定的编码不正确，解压出来的文件名会是乱码。

被压缩的文件的内容是真正的数据，但是，这不包括原始的文件名，因为文件名并不是文件的内容，文件名完全依靠文件头来记录。

```



### ~~wine~~

```bash
wine占用资源太多
是的，所以不用wine尽量不要用
太麻烦了，教程都写不清楚，懒得用



在Ubuntu上安装Wine 5.0
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine64 wine32
wine --version

在Ubuntu上安装Wine 6.0
sudo dpkg --add-architecture i386
sudo apt update
wget -qO- https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -
sudo apt install software-properties-common
sudo apt-add-repository "deb http://dl.winehq.org/wine-builds/ubuntu/ $(lsb_release -cs) main"  #Ubuntu 20.10使用groovy
sudo apt install --install-recommends winehq-stable
sudo apt install aptitude && sudo aptitude install winehq-devel    #如果出错，请手动安装依赖
sudo apt-get install ...


winecfg
将出现一个对话框，询问您是否要安装Wine-Mono封装：
单击“安装”按钮，安装将启动。 完成后，将出现一个新的对话框，提示您安装Gecko。 再次单击“安装”按钮。
安装完成后，将显示Wine配置对话框。 在这里，您可以配置各种Wine设置。 在大多数情况下，默认设置应该足够。 完成后，关闭对话框。
下载 windows 应用安装包
Windows应用程序安装在~/.wine/drive_c/目录中。




```



### ~~wsl2host~~

```bash
WSL2 的网络结构就是 VirtualBox 的 host 模式。子系统与 windows 单独组成一个局域网，所以必须做端口转发。这个网络的 IP 段是动态的，每次启动都不一样。

wsl2host 能够注册为一个服务，自动获取子系统的 IP，并记录到 hosts。这样就能像 docker-compose 一样，通过固定域名即可访问子系统。也就是另类的 DDNS。

1. 先将 C:\Windows\System32\drivers\etc\hosts 的只读属性取消。

2. wsl2host.exe install
wsl2host.exe remove

3. net stop wsl2host
说实话每秒百分之零点几的 CPU 占有率不是很值，而且每秒都在 fork 进程，看上去就很糟。hosts 只需要写入一次，不需要一直写入。虽然可以实时监控新的 wsl，但大部分时间性能都浪费了，所以还是禁用服务。


cat /etc/resolv.conf    获取 windows 在这个局域网中的 IP


nslookup lanraragi.wsl
nslookup fedora.wsl
dig lanraragi.wsl
dig fedora.wsl
dig <dist_name>.wsl

> win10 端想要访问 wsl2 的端口的话，直接通过 localhost:xxx 就能访问到 wsl2 中对应的 xxx 端口，会自动进行转发。
> 局域网的话则可以通过 win10 局域网 ip:xxx 的方式访问到 wsl2 中的端口。

？？？

```



### ~~Bench.Monster~~

```
curl -LsO bench.monster/speedtest.sh; bash speedtest.sh

# Benchmark & The US Speedtest

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -us

# Benchmark & Europe Speedtest

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -eu

# Benchmark & Middle East Speedtest

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -me

# Benchmark & Asia Speedtest

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -asia

# Benchmark & South America Speedtest

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -sa




[More Arguments]

curl -LsO bench.monster/speedtest.sh; bash speedtest.sh -Argument

-info or -i # System Information

-io # I/O Test

-gb # GeekBench CPU v4 Test

-gb5 # GeekBench CPU v5 Test

-speed # Global Speedtest

-a or -all # System info, I/O & Global Speedtest

-us or -USA # System info, I/O & The US Speedtest

-eu or -Europe # System info, I/O & Europe Speedtest

-me or -Middle-East # System info, I/O & Middle East Speedtest

-asia # System info, I/O & Asia Speedtest

-sa # System info, I/O & South America Speedtest

-ua or -ukraine # System info, I/O & Ukraine Speedtest

-ru or -russia # System info, I/O & Russia Speedtest

-ip # IP info

-about # Show about
Source code

https://github.com/laset-com/speedtest
```


### ~~bench.sh~~

```bash
// 秋水逸冰 综合测试脚本 一度开发
wget -qO- bench.sh | bash
#或者
curl -Lso- bench.sh | bash
#或者
wget -qO- 86.re/bench.sh | bash
#或者
curl -so- 86.re/bench.sh | bash
#bench.sh 既是脚本名，同时又是域名。所以不要怀疑我写错了或者你看错了
```

### ~~SuperBench.sh~~

```bash
// 二度开发 SuperBench.sh
wget -qO- --no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superbench.sh | bash
#或者
curl -Lso- -no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superb
```

### ~~Zbench.sh~~

```bash
不好用

// 三度开发 Zbench.sh
#叫填服务商，输入服务器 ip
#中文版
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/ZBench/master/ZBench-CN.sh && bash ZBench-CN.sh
#英文版
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/ZBench/master/ZBench.sh && bash ZBench.sh
#运行
bash ZBench-CN.sh
```

### ~~LemonBench~~

```bash
// LemonBench
curl -fsL https://ilemonra.in/LemonBenchIntl | bash -s fast
curl -fsSL https://ilemonrain.com/download/shell/LemonBench.sh | bash
wget -qO- https://ilemonrain.com/download/shell/LemonBench.sh | bash
#全面综合检测脚本
#由于测试用时较长，为防止发生SSH断线意外，推荐放在screen中运行！
```

### ~~superspeed.sh~~

```bash
// Superspeed.sh 三网测速

最新：
bash <(curl -Lso- https://git.io/superspeed)

wget https://raw.githubusercontent.com/oooldking/script/master/superspeed.sh && chmod +x superspeed.sh && ./superspeed.sh
测试服务器到全国北方南方，电信，联通，移动的速度
```


### ~~UnixBench~~

```bash
// UnixBench.sh CPU跑分
wget --no-check-certificate https://github.com/teddysun/across/raw/master/unixbench.sh
chmod +x unixbench.sh
bash unixbench.sh
秋水逸冰大佬写的性能检测脚本

> Raksmart 特惠月付 0.99 刀的"爆款" VPS
> UnixBench 单核跑分 31.4
正常来说至少好几百，1200 算是性能不错，杜甫达到 2000 也正常……有人说 UnixBench 单核跑分才 31.4 你敢信？超兽的 OpenVZ 都自愧不如。算是刷新了我的认知下限
什么概念？
随便一个 apt/yum 命令要跑半小时，恨不得 cd 都卡。
NetManager 进程能占用 50% 以上的 CPU。






Akko 年付 CN2 GIA
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: vm1115570.akkocloud.com: GNU/Linux
   OS: GNU/Linux -- 5.4.164-1.el7.elrepo.x86_64 -- #1 SMP Mon Dec 6 12:28:33 EST 2021
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel Core Processor (Broadwell, IBRS) (4190.3 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   10:50:36 up 78 days, 18:33,  2 users,  load average: 0.71, 0.21, 0.08; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu Feb 02 2023 10:50:36 - 11:18:45
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       16198079.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4019.5 MWIPS (10.0 s, 7 samples)
Execl Throughput                               2286.7 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        295212.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           77004.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        856758.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                              427422.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 102192.6 lps   (10.0 s, 7 samples)
Process Creation                               5850.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   3045.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    421.8 lpm   (60.1 s, 2 samples)
System Call Overhead                         330430.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   16198079.5   1388.0
Double-Precision Whetstone                       55.0       4019.5    730.8
Execl Throughput                                 43.0       2286.7    531.8
File Copy 1024 bufsize 2000 maxblocks          3960.0     295212.3    745.5
File Copy 256 bufsize 500 maxblocks            1655.0      77004.0    465.3
File Copy 4096 bufsize 8000 maxblocks          5800.0     856758.4   1477.2
Pipe Throughput                               12440.0     427422.6    343.6
Pipe-based Context Switching                   4000.0     102192.6    255.5
Process Creation                                126.0       5850.8    464.3
Shell Scripts (1 concurrent)                     42.4       3045.4    718.3
Shell Scripts (8 concurrent)                      6.0        421.8    703.0
System Call Overhead                          15000.0     330430.7    220.3
                                                                   ========
System Benchmarks Index Score                                         573.0







BuyVM 2刀传家宝

   #    #  #    #  #  #    #          #####   ######  #    #   ####   #    #
   #    #  ##   #  #   #  #           #    #  #       ##   #  #    #  #    #
   #    #  # #  #  #    ##            #####   #####   # #  #  #       ######
   #    #  #  # #  #    ##            #    #  #       #  # #  #       #    #
   #    #  #   ##  #   #  #           #    #  #       #   ##  #    #  #    #
    ####   #    #  #  #    #          #####   ######  #    #   ####   #    #

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com


1 x Dhrystone 2 using register variables  1 2 3 4 5 6 7 8 9 10

1 x Double-Precision Whetstone  1 2 3 4 5 6 7 8 9 10

1 x Execl Throughput  1 2 3

1 x File Copy 1024 bufsize 2000 maxblocks  1 2 3

1 x File Copy 256 bufsize 500 maxblocks  1 2 3

1 x File Copy 4096 bufsize 8000 maxblocks  1 2 3

1 x Pipe Throughput  1 2 3 4 5 6 7 8 9 10

1 x Pipe-based Context Switching  1 2 3 4 5 6 7 8 9 10

1 x Process Creation  1 2 3

1 x System Call Overhead  1 2 3 4 5 6 7 8 9 10

1 x Shell Scripts (1 concurrent)  1 2 3

1 x Shell Scripts (8 concurrent)  1 2 3

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: localhost: GNU/Linux
   OS: GNU/Linux -- 4.19.0-14-amd64 -- #1 SMP Debian 4.19.171-2 (2021-01-30)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 3900X 12-Core Processor (7585.7 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   17:23:11 up 26 days, 23:28,  3 users,  load average: 0.33, 0.58, 1.17; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu Feb 02 2023 17:23:11 - 17:51:08
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       34372452.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7903.4 MWIPS (8.8 s, 7 samples)
Execl Throughput                               4059.3 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        924598.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          282373.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1698998.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1915877.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 237973.7 lps   (10.0 s, 7 samples)
Process Creation                              10472.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   7704.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    956.1 lpm   (60.1 s, 2 samples)
System Call Overhead                        2606337.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   34372452.1   2945.4
Double-Precision Whetstone                       55.0       7903.4   1437.0
Execl Throughput                                 43.0       4059.3    944.0
File Copy 1024 bufsize 2000 maxblocks          3960.0     924598.8   2334.8
File Copy 256 bufsize 500 maxblocks            1655.0     282373.2   1706.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    1698998.7   2929.3
Pipe Throughput                               12440.0    1915877.1   1540.1
Pipe-based Context Switching                   4000.0     237973.7    594.9
Process Creation                                126.0      10472.5    831.2
Shell Scripts (1 concurrent)                     42.4       7704.4   1817.1
Shell Scripts (8 concurrent)                      6.0        956.1   1593.5
System Call Overhead                          15000.0    2606337.1   1737.6
                                                                   ========
System Benchmarks Index Score                                        1540.5



======= Script description and score comparison completed! =======

```


### ~~FileZilla Server~~

> 垃圾玩意，一点也不好用

使用逻辑相当感人，弄了好久才懂。

打开 FileZilla Server 后，弹出窗口叫你填 IP、port、password，其实就是菜单栏的「connect to server」。这一步的逻辑：ip 决定监听地址、端口决定如何访问管理员 web ui。ip 建议 localhost（也就是 127.0.0.1）。端口随便，用不到的。连接失败，就是你 ip 选的不好，使用正确的 ip 很重要，反正真正监听的 ip 在连接成功后还可以添加。

连接成功，按自己的要求添加用户。

edit - settings 中，设置监听的端口，客户端访问的就是这个端口。

最重要的是，在 edit - settings - ip bindings 中，设置真正的监听地址，即客户端需要访问的地址。按道理，「*」代表全部，即「0.0.0.0」，已经够了，但保险还是手动添加地址。之后即可正常使用。


### ~~Ampache-docker~~

```bash

【Management】

Catalog Name: 随便起名，但别使用任何 % 字段
Filename Pattern: read filenames for **tag** information, it also defines how ampache will **sort/rename files** in this collection.
Folder Pattern: This defines the **directory structure** starting from the Path of the catalog up to the filenames, again used for **tag** information on read and **sort/rename**.
Gather Art: yes，开启后会自动在 Artist 界面添加能搜到的艺术家简介，建议开启。


    Add -- This looks for new files under the catalogs base path
    Verify -- This looks at existing files only and makes sure that the tags in the files are still accurate
    Clean -- This removes any orphaned artists,albums etc and also removes any songs that are no longer readable by ampache
    Update -- This performs a clean, then verify and lastly an Add. This is useful if you would like to do everything at once.
    Gather Art -- This looks for album art from all of the locations in config/ampache.cfg.php

There are 5 user levels on Ampache. They are as follows.

    Guest - Read only access, guest users can look at the interface but they can not stream
    User - Standard user can modify its own settings, stream music and use ampache. Most users should be set to this level
    Content Manager - Added ability to make some additional setting changes not open to normal users
    Catalog Manager - Everything except for user management
    Admin - Everything



http://ampache-host/ampache/server/xml.server.php

/rest/jukeboxControl.view?u=loli&p=enc:3230323232303232&v=1.2.0&c=android&action=stop

/rest/stream.view?u=loli&p=enc:3230323232303232&v=1.2.0&c=DSub&id=300000022&maxBitRate=0



【SubSonic API】
我踏马懂为啥 subsonic client 播放不了了，感情是 nginx 重写 / 参数出了问题。

http://your-server/rest/ping.view?u=loli&p=123456&v=1.12.0&c=myapp #明文版
http://your-server/rest/ping.view?u=joe&p=enc:736573616d65&v=1.12.0&c=myapp #base编码版

http://your-server/rest/ping.view?u=joe&p=sesame&v=1.12.0&c=myapp`
http://your-server/rest/ping.view?u=joe&t=26719a1196d2a940705a59634eb18eab&s=c19b2d&v=1.12.0&c=myapp


访问 http://your/ampache/location:port/rest/ping.view
如果结果为：
```
<?xml version="1.0" encoding="UTF-8"?>
<subsonic-response xmlns="http://subsonic.org/restapi" status="failed" version="1.13.0">
  <error code="10" message="Missing Subsonic base parameters"/>
</subsonic-response>
```

If you get successfully this XML message, you can now add your server on a Subsonic client, adding http://localhost/ampache as web server url.






【upnp】
If your installation is within a subfolder '/ampache' you must take care for your Rewrite Rules within '[ampachepath]/play/.htaccess'.

You should broadcast the server periodically calling http://localhost/ampache/upnp/?btnSend=Send+SSDP+broadcast or php bin/broadcast.inc with a cron (every 1-2 minutes recommended).

You need to set the http_host option within config/ampache.cfg.php to broadcast via broadcast.inc.

You need to enable (remove leading semicolon) ;websocket_address = "ws://localhost:8100" in config/ampache.cfg.php.

【WebDAV API】
The base address to setup on your client is http://localhost/ampache/webdav/index.php/





settings - streaming - transcoding：default / never / always
settings - streaming - Playback Type：web player / localplay / stream / democratic / none
- localplay 应该是播放「本地」的音乐，不要用，也用不了
- democratic 没搞懂，民主参加是什么鬼，反正用不了



settings - streaming - trasncode bitrate: 640 / 320
settings - options - Localplay Type：mpd / httpq / none

【web player】
1. default：
效果同 always。

2. never：
一切正常，已证实不转码，直接传的原档 flac。但并非一次性传完，而是先传一段 60s 左右的，播放一半后再传下一段。加载了多少会在音量条右侧有个时间，代表已缓存的量能播多少分钟多少秒。播放条下方不会有波形图。优点是不消耗服务器 CPU，缺点是对网络要求高。

3. always：
一切正常，已证实转码 mp3，码率可以自行设置数值，单位为 kbps。
实际上设置为超过 320 的数值，效果和 320 是一样的，实际宽带码率在 320 - 480 kbps，也就是每分钟 3MB 左右大小。但是能清楚看到 ffmpeg 参数指定了 640K（举例）这个数，所以最终效果完全是由 ffmpeg 决定的。
播放条下方会出现波形图，跳转迅速。
CPU 会飙到 85% 以上，一首歌要用 5 - 30 秒，同时在 htop 里可以看到 ffmpeg 进程的命令及占用。
320kbps这个比特率，没错，是MP3的上限。至于为什么，好像就是当初MP3开发的时候设定的值，其中具体的原因比较专业，我这个外行就不随便说了。
LAME团队好像已经很久没有管320kbps CBR的死活了。因为他们有一个共识：320kbps CBR的MP3也就那样了，音质再高也高不过无损，编码效率和文件大小也达到极限了——换句话说就是，320K已经没什么开发的价值了。
码率几乎是决定 mp3 效果的唯一因素，对于普通用户就是如此。
320的mp3听起来有点缩水的感觉，总体比較干，没有wav文件听起来鲜活充满动感，末端细节、泛音和空间感上，分离度上也不及无损文件来的素养高，只是在音色上已经算是相当接近了，仅仅是表现力上面差一些，数码味道比較浓重。


【转码】
其实服务器的转码设置可以被客户端的设置给覆盖的，默认就是允许覆盖。

ffmpeg -i /media/1-中文/[仙剑奇侠传三] 杀破狼 - JS.flac -vn -b:a 320K -c:a limp3Lame -f mp3 pipe:1






【智能列表】
用 <Filename> 字段，也就是完整路径。
Filename
    /media/1-Elfen Lied/Konishi Kayo & Kondoo Yukio - .Lilium - Moka Version.flac

key 的有效期默认 7h，左侧栏 - admin - system - Share links default expiration days (0=never) - 改为 0



```


### ~~Ampache-nginx~~

```bash


// web installing
http://music.lolineko.com/install.php
如果程序安装包解压在网站根目录，web 路径留空，不用填。
点击查看文件栏，然后点击第一行配置文件后面的写。如果提示写入错误，请检查 config 目录权限。

http://music.lolineko.com/test.php

```


### ~~Airsonic~~

```bash
// 相比 ampache 的优缺点

优点：

1. 搭建简单，设置简单
2. 能按文件夹结构进行索引，十分方便，ampache 就做不到
3. 各方面均衡，没有较大的短板
4. 免费开源，必须赞
5. 主题多，颜值高，界面比 ampache 舒服多了
6. 扫描歌曲快
7. 支持 player 管理

缺点：

1. 没有智能歌单，更新歌单比较麻烦
2. java 平台运行的，CPU 占用高
3. java 平台运行的，web 界面巨慢巨卡（客户端不卡）
4. 文档少且不详细
5. 客户端无法控制转码设置

其实还有些二者共同优点，这里就不说了。接下来看看 ampache 的优点：

1. 基于传统的 LAMP，没有额外进程，占用低
2. 支持智能歌单，创建、更新歌单很方便
3. 可以直接设置转码码率
4. 官方文档很详细
5. 免费开源，持续开发了近 20 年，成熟稳定
6. 支持直接设置转码码率

缺点：

1. 部署坑很多，例如 nginx 反代一堆 rewrite，需要极度正确地传递参数否则用不了，自己修改 location 十分麻烦，对 mysql 和 php 的插件有要求，搞不好要手动编译...
2. 再说一遍，坑很多
3. 界面简陋，按钮又小，web 用起来十分难受，GitHub 上也没几个主题可以用
4. 要设置的东西很多很繁琐，很多时候不看文档根本不懂怎么设置
5. 不读文档很多东西都不会用（没错，我全看完了），例如 ACL
5. folder 层级被强制设为 Artist - Album，用起来十分不方便
6. folder 可能删除不干净，剩下的项目无法被删除
7. 因为已经成熟稳定，这些缺陷不大可能改进


// 流媒体

流媒体视频封装：mp4 ts flv mkv rmvb
流媒体音频封装：flac mp3
流媒体视频编码：h264
流媒体音频编码：aac
不支持：avi
在国内，任何流媒体服务都要拿到网络视听许可证，所以不能公开分享。


// 取消转码

字节：不用管 players 的设置，只要把 transcoding 里的转码 delete 就好（默认有 4 个），保存就立即生效。

我把默认的 4 组命令备份了下来：

mp3 audio    ogg oga aac m4a flac wav wma aif aiff ape mpc shn    mp3    ffmpeg -i %s -map 0:0 -b:a %bk -v 0 -f mp3 -

flv/h264 video    avi mpg mpeg mp4 m4v mkv mov wmv ogv divx m2ts    flv    ffmpeg -ss %o -i %s -async 1 -b %bk -s %wx%h -ar 44100 -ac 2 -v 0 -f flv -vcodec libx264 -preset superfast -threads 0 -

mkv video    avi mpg mpeg mp4 m4v mkv mov wmv ogv divx m2ts    mkv    ffmpeg -ss %o -i %s -c:v libx264 -preset superfast -b:v %bk -c:a libvorbis -f matroska -threads 0 -

mp4/h264 video    avi flv mpg mpeg m4v mkv mov wmv ogv divx m2ts    mp4    ffmpeg -ss %o -i %s -async 1 -b %bk -s %wx%h -ar 44100 -ac 2 -v 0 -f mp4 -vcodec libx264 -preset superfast -threads 0 -movflags frag_keyframe+empty_moov -

自己写的 m4a 转 flac
ffmpeg -i %s -map 0:0 -c:a flac -v 0 -f flac -

Any formats that are supported natively by that player will not get transcoded (fixes #437, partially implemented in #1124), UNLESS:

    There is a bitrate limit that would otherwise be violated OR
    The fetch request has specified a different desired format OR
    The user has specifically enabled a different transcoder rule for that player that produces a format that has a higher preference according to the player''s settings OR
    The "Always transcode" option has been enabled for that player.
    The content to be served needs to be split out of a larger file




// 挂载

apt install -y fuse
必须安装fuse

gclone mount    \
"sss:"   \
/root/test/x-monster/remote/gd  \
--umask 0000  \
--allow-non-empty  \
--allow-other        \
--dir-cache-time 12h  \
--buffer-size 32M      \
--vfs-read-chunk-size 64M    \
--vfs-read-chunk-size-limit 1G \
--daemon    \

df -h
fusermount -qzu /root/test/x-monster/remote/gd #卸载

```


### ~~acme.sh~~

放弃，实在麻烦而且跨容器并不由雅。

这些变量可以不必写到 dockercompose 中. 而是每次部署时单独指定, 这样就可以部署不同的证书了

docker exec -it   -e DEPLOY_DOCKER_CONTAINER_KEY_FILE=xxxxxx \
    acme.sh  --deploy   xxxxx

情况 1，nginx 和 acme.sh 是不同容器。这些变量可以不必写到 dockercompose 中. 而是每次 exec 部署时单独指定, 这样就可以部署不同的证书了：

```
- DEPLOY_DOCKER_CONTAINER_KEY_FILE=/etc/nginx/ssl/example.com/key.pem
- DEPLOY_DOCKER_CONTAINER_CERT_FILE="/etc/nginx/ssl/example.com/cert.pem"
- DEPLOY_DOCKER_CONTAINER_CA_FILE="/etc/nginx/ssl/example.com/ca.pem"
- DEPLOY_DOCKER_CONTAINER_FULLCHAIN_FILE="/etc/nginx/ssl/example.com/full.pem"
- DEPLOY_DOCKER_CONTAINER_RELOAD_CMD="service nginx force-reload"
```


docker-compose.yml 文件：

```yml
version: '3.4'
services:
  web:
    image: nginx
    container_name: nginx
    labels:
      - sh.acme.autoload.domain=example.com

  acme.sh:
    image: neilpang/acme.sh
    container_name: acme.sh
    command: daemon
    volumes:
      - ./acmeout:/acme.sh
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DEPLOY_DOCKER_CONTAINER_LABEL=sh.acme.autoload.domain=example.com
      - DEPLOY_DOCKER_CONTAINER_RELOAD_CMD="service nginx force-reload"
```


### ~~bgmi~~

```bash
可玩性不高，不大适合我。唯一有用的就是通过 --download 将搜索结果添加到 aria2，因为会打印结果比较好测试，一次性的也不用配置什么。
bgmi search 'xxx' --regex-filter 'pattern' --download



pipx install bgmi
bgmi install  #下载前端
bgmi config TORNADO_SERVE_STATIC_FILES 1
bgmi cal --download-cover  #下载当季番的封面
bgmi_http --port=2591 --address=0.0.0.0  # HTTP 前端
bgmi config ARIA2_RPC_URL 'http://localhost:6800/rpc'
bgmi config ARIA2_RPC_TOKEN 'token:123456'
bgmi source bangumi_moe  #选择源{bangumi_moe,mikan_project,dmhy}



bgmi cal  #显示本周播出的当季番
bgmi search '为美好的世界献上祝福！' --regex-filter '.*动漫国字幕组.*为美好的世界献上祝福！].*720P.*'
    --regex-filter REGEX  #很有用
    --download  #Add to download
    --dupe  #Show duplicated episode
    --count COUNT  #The max page count
    --min-episode min_episode
    --max-episode max_episode
bgmi add "进击的巨人 第三季" "刃牙" "哆啦A梦"
bgmi add "高分少女" --episode 0
    --not-ignore
bgmi delete --name "Re:CREATORS"
bgmi add <bangumi name>  #订阅番组
bgmi delete <bangumi>  #取消订阅番组
bgmi update  #更新已订阅
bgmi list  #查看订阅
bgmi update --download
bgmi update "从零开始的魔法书" --download 2 3
bgmi update "时钟机关之星" --download
bgmi fetch "Re:CREATORS"
bgmi filter "Re:CREATORS" --subtitle "DHR動研字幕組,豌豆字幕组" --include 720P --exclude BIG5
bgmi filter "Re:CREATORS" --regex "(DHR動研字幕組|豌豆字幕组).*(720P)"




~/.bgmi/bgmi.cfg
global_filter = Leopard-Raws, hevc, x265, c-a Raws, U3-Webu
enable_global_filter = 1



```

### ~~dufs~~

```python
scoop install -g dufs

没有理由不用 miniserve。

dufs 搜索功能因为 rclone 文件索引太慢而完全没法用，只会白白消耗服务器资源。打包下载……虽说我试了下是客户端请求多久，server 就下多久，不会像 DFS 那样消耗多余的流量，但碰到不懂的小白一直下，流量一天就爆表了。


```


### ~~H5ai~~

_h5ai文件夹应当与你要显示的文件同级，而不是把文件放到这个文件夹里


### ~~hfs~~

```bash
nssm install hfs

D:\Portable\盘姬工具箱\ProfessionTools\httpdataserver.exe \
-a "hfs.ini" \
-i "D:\Portable\盘姬工具箱\ProfessionTools" \
-q \
-d 1 \



-a <FILENAME>
    Load an additional ini file, which will eventually overwrite settings in the main ini file.
    This file doesn''t have to be a full ini, it can also be a single line.

-i <PATH>
    load/save hfs.ini in folder <PATH>

-q
    Just quit. This is useful combined with only one instance , because if HFS is already running, a call to hfs -q causes the running HFS to quit.

-d <X>
    Waits at start for <X> tenths of second.


```


### ~~Jellyfin~~

jellyfin支持直接从emby迁移，但是只支持emby 3.5.2以及以前的版本

最后安装好了，就自行去后台设置，转码那里还需要你填上ffmpeg路径，一般为/usr/bin，可使用which ffmpeg查看路径

发现使用jellyfin在播放外挂ASS字幕的视频时，字幕无法正常显示，会出现一个个的方框。经过多方查询后并没有得到有效的解决办法，大部分网友们选择将ass字幕替换成scr字幕以规避此问题。

用记事本打开ass格式的字幕文件，发现ass字幕格式中自带对字幕字体进行了声明。

考虑jellyfin为linux内核，且为国外开发人员开发，猜测其内置字体库对中文字体支持不佳，所以尝试将相应中文字体挂载到jellyfin字体库中。

作为不懂linux的小白，此时只能依靠百度了。。。经查询/usr/share/fonts目录为linux的字体库目录，所以尝试一下将中文字体导入该目录中，看看效果。

1.在使用jellyfin客户端（包括网页、os客户端、安卓客户端等）进行串流时，请记得检查字幕设置，在没有选择烧录特效字幕的情况下，无法正常显示ass等特效字幕。
2.为了体验ass等特效视频，建议提前下载字幕常用字体库存放到NAS中，临时遇到无法正常显示的问题时候，也可以通过查看ass文件中对字体的声明，下载相应字体。字幕常用字体也就那么多，总比一个个重新找scr字幕来的快捷。
3.使用此方法在jellyfin中显示ass字幕的前提是服务端需将字幕烧录进视频流中，即对播放视频进行转码，所以利用核显能对视频进行硬解是必要前提（软解实在是太痛苦了）。蜗牛星际自带的J1900 CPU对HEVC 10bit视频的解码能力非常堪忧，所以在不更新硬件的前提下，貌似只能将将外挂的ass字幕一个个替换成scr格式了。


/usr/share/fonts

首先为楼主的研究精神点赞，但是楼上说的 fc-cache -f -v 对这种情况是没有效的，这条命令只是刷新一下字体缓存而已，你重启docker container有一样的效果，无需多做一件事情。jellyfin播放视频，中文字幕方块字的本质是webplayer没有正确加载字幕导致的（貌似CJK都会这样），所以烧录字幕有效，因为jellyfin server已经读取加载到字体了，但是webplayer没有。这个问题目前还有待修复，乐观估计可能还要个把月，讨论的issue链接https://github.com/jellyfin/jellyfin-web/issues/934


### ~~mango~~

```bash
mango admin user update admin -p 12345678 --admin

# list the users
mango admin user list

# create a new user with admin access
mango admin user add -u new_user -p 123456 --admin

# rename the user
mango admin user update new_user -u new_name --admin

# remove admin access
mango admin user update new_name

# delete the user
mango admin user delete new_name
```


### ~~openssh~~

```
// windows 可选功能
如果设置 - 应用 - 可选功能 - OpenSSH 服务器 安装失败，请在 services 开启「windows update」，至少得到手动。如果还是失败，去 GitHub 上搜 openssh 32 windows。

C:\ProgramData\ssh\ssh_host*key files. All the key files in this folder should ONLY be owned by following 2 system users:

BUILTIN\Administrators
NT AUTHORITY\SYSTEM

这些文件只能SYSTEM和Administrators组访问，可以手动设置权限或执行：

icacls administrators_authorized_keys /inheritance:r
icacls administrators_authorized_keys /grant SYSTEM:`(F`)
icacls administrators_authorized_keys /grant BUILTIN\Administrators:`(F`)




// windows ssh server
我发现 scoop install -g win32-openssh 自带有注册为服务的脚本，安装后运行就好

https://github.com/PowerShell/Win32-OpenSSH/releases

%PROGRAMDATA%\ssh\sshd_config 默认

如果登陆用户属于administrators组，还需要创建%PROGRAMDATA%\ssh\administrators_authorized_keys文件

net stop sshd
net start sshd

本质是 C:\Windows\System32\OpenSSH\sshd.exe 无参数启动



// 公钥登录

ssh-keygen 生成密钥对
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

然后注释掉 sshd_config 的最后两行：
#Match Group administrators
#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys





// win 10 安装 openssh server
https://github.com/PowerShell/Win32-OpenSSH/releases

下载安装包，解压到 C:\Program Files\，在 cmd 中执行：

powershell.exe -ExecutionPolicy Bypass -File "C:\Program Files\OpenSSH\install-sshd.ps1"

C:\Program Files\OpenSSH\sshd.exe
-p 4452
-f config-file
-c cert-file
-h key-file
-E log-file

Start-Service sshd 启动 ssh 服务器

还有种方法：控制面板 - 系统和安全 - 管理工具 - 服务 - 开启 OpenSSH SSH Server 服务

WindowsDirectory\System32\openssh

\HKEY_LOCAL_MACHINE\SOFTWARE\OpenSSH

%programdata%\ssh\sshd_config

C:\Users\username\.ssh\id_ed25519

卸载：
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```


[Connection reset by 127.0.0.1 port 22 on Windows Server 2012 R2 · Issue #1249 · PowerShell/Win32-OpenSSH](https://github.com/PowerShell/Win32-OpenSSH/issues/1249)

找到原因了，说出来及其玄学。

简单的说，scoop 下的 win32-openssh 要想正常运行，必须复制一份 OpenSSH 到 C:\Windows\System32\OpenSSH。

你是不是在想，其实运行的不是 scoop/apps/win32-openssh/current/sshd.exe，而是 C:\Windows\System32\OpenSSH\sshd.exe？

我能明确告诉你，不是。在运行的就是 scoop/apps/win32-openssh/current/sshd.exe，但 C 盘那里的文件不能没有。

我先 ssh 登上了 sshd server，然后试着给 C:\Windows\System32\OpenSSH\ 文件夹重命名，结果是可以重命名的，并且重命名后现有 ssh 可以正常使用，说明正在运行的 sshd 不是 C 盘这个，而是 scoop 下的那个。于是试着给 scoop/apps/win32-openssh/ 文件夹重命名，结果是失败的。

结论很明显了，运行的 sshd.exe 是 scoop 下的。

但玄学就玄学在，如果你没有 C:\Windows\System32\OpenSSH\，你的 ssh 就不可能成功登录。一旦成功登录，你把 C:\Windows\System32\OpenSSH\ 删了都能继续使用……

于是我怀疑，会不会与系统环境变量有关？

一查，Path 里有个 C:\Windows\System32\OpenSSH\。可能是这个 Path 导致了错误的调用？

删除这条。再试……结果没有任何改变。重启，再试，依旧没有变化。还真就必须要有 C:\Windows\System32\OpenSSH\

突然，我灵机一动，删 Path 后无效，会不会是因为只有注册为服务时才使用了 Path 进行配置，之后的启动是根据配置来的，而不是 Path。

于是立即 uninstall-sshd.ps1 删除服务。

再次确认环境变量没有 OpenSSH 相关内容。

install-sshd.ps1 安装为服务。

ssh -v xx@127.0.0.1

回车

输入密码

然后……

成了！

至此，终于搞懂是怎么一回事了，原来是 install-sshd.ps1 安装脚本会扫描环境变量，应该是根据 Path，如果以前有安装过 OpenSSH 又没清理干净，就会配置成以前的路径，导致错误调用（虽然并没有真正的调用执行，但没有一定不行）

上边那个 issue 里的仁兄很可能犯了跟我一样的错误，移到其他目录时无法正常使用。

说真的这个脚本也该背锅

如果我删除了 C:\Windows\System32\OpenSSH\，就会这样

$ sudo ./install-sshd.ps1
**** 警告: 无法找到发布者 OpenSSH 资源，或者无法
通过 EventLog 服务帐户 (NT SERVICE\EventLog) 访问这些资源。

[SC] SetServiceObjectSecurity 成功
[SC] ChangeServiceConfig2 成功
[SC] ChangeServiceConfig2 成功

看来这个「无法找到发布者 OpenSSH 资源」就是罪魁祸首了。

Warning: Publisher OpenSSH resources could not be found or are not accessible to the EventLog service account 

然后我通读脚本，发现……我看不懂，powershell 没专门学简直像在看天书，可读性差得离谱。随便学一门 c c++ python java bash 之类的语言，会一个就能看懂其他的，不说会写，起码你看源码大概猜出他在干嘛。但 powershell 是真看不懂他在做啥，语法比 java 还要夸张，一个简单的命令有几层嵌套，只能通过注释瞎猜。

确定问题后继续找 issue：[win32-openssh@7.7.2.0p1-Beta + pshazz@0.2018.04.22: = Ignoring Agent + System.IndexOutOfRangeException · Issue #2537 · lukesampson/scoop](https://github.com/lukesampson/scoop/issues/2537)

I assume that you're using Windows 10 build 1803 (or above), which has a built-in OpenSSH located in C:\Windows\System32\OpenSSH.

原来这么设计是故意的，脚本使用了 win10 1803 起内建的 OpenSSH

没办法，看来 OpenSSH 还是没法便携化。



### ~~sftpgo~~

```bash
// 介绍
sftp ftp http の server
支持 虚拟目录
支持 多用户
支持 用户个性化权限
支持 便携化
支持 防火墙（类似 fail2ban，只能防 SFTP, FTP and WebDAV）
可惜 webdav 太残废了，没法用，而且一定要登录才能访问网页，不然完美了

迁移：只需要备份 sftpgo.json、sftpgo.db。sftpgo.json 是通用设置（例如 ip port），sftpgo.db 则是用户数据（包括用户、密码、权限、虚拟目录等设置）。

更新：只需要备份 sftpgo.json、sftpgo.db。在启动新版 sftpgo 之前，最好执行一次初始化命令 initprovider 来更新路径信息。不过也可以让程序自己处理。



// 初始化数据库
sftpgo  \
initprovider  \
--config-file  "sftpgo.json" \

可以用来创建数据库，或者是更新、迁移后更新数据库的路径等信息。

Before starting the SFTPGo server please ensure that the configured data provider is properly initialized/updated.


// sftpgo.json
common - idle_timeout: 90    cookies 有效时间（分钟）


// 运行
./sftpgo  \
serve  \
--config-file  "sftpgo.json"  \

http://127.0.0.1:8080/web/admin
http://127.0.0.1:8080/web/client/files


// 管理员
http://127.0.0.1:8080/web/admin

默认创建的新数据库是没有管理员的，推荐第一种方式，访问 http 的 <ip>:<port>/web/admin 来创建管理员。

To start using SFTPGo you need to create an admin user, you can do it in several ways:

    by using the web admin interface. The default URL is http://127.0.0.1:8080/web/admin
    by loading initial data
    by enabling create_default_admin in your configuration file. In this case the credentials are admin/password



// 开机自启
sftpgo.exe service --help
sftpgo service install --help
sftpgo service install --config-file "sftpgo.json"
sftpgo service status
sftpgo service start
sftpgo service reload
sftpgo service rotatelogs
sftpgo service stop
sftpgo service uninstall


```


### ~~SearX~~

内存占用：100M，因为是 python 写的，所以有点大
CPU：忽略惹



### ~~tachidesk~~

```bash

```


### ~~vnc~~

linux vnc 太难搞了，我选择 X11

```bash

xtigervncviewer
vncserver
vncserver -kill :1    #port: 5900+1
gedit ~/.vnc/xstartup
chmod u+x ~/.vnc/xstartup

如果需要将附加选项传递给 VNC 服务器，则可以创建一个名为 config 的文件，并为每行添加一个选项。这是一个例子：
文件 ~/.vnc/config
geometry=1920x1084
dpi=96


sudo nano /etc/systemd/system/vncserver@.service
sudo systemctl daemon-reload
sudo systemctl enable vncserver@1.service
符号 1 后面的数字 @ 定义了运行 VNC 服务的显示端口。这意味着 VNC 服务器将侦听端口 5901 ，正如我们在上一节中讨论的那样。
sudo systemctl status vncserver@1.service

[Unit]
Description=Remote desktop service (VNC)
After=syslog.target network.target

[Service]
Type=simple
User=buzheng
PAMName=login
PIDFile=/home/%u/.vnc/%H%i.pid
ExecStartPre=/bin/sh -c '/usr/bin/vncserver -kill :%i > /dev/null 2>&1 || :'
ExecStart=/usr/bin/vncserver :%i -geometry 1440x900 -alwaysshared -fg
ExecStop=/usr/bin/vncserver -kill :%i

[Install]
WantedBy=multi-user.target





// 1、安装桌面环境
#先别装，确认没桌面了再装
#安装一个即可
apt install ubuntu-gnome-desktop
apt install kubuntu-desktop
apt install xfce4 不推荐

// 2、VNC Server
sudo apt install -y tigervnc-standalone-server tigervnc-common

vncserver #生成配置
vim ~/.vnc/xstartup
chmod u+x ~/.vnc/xstartup

// 启动

vncserver -h
vncserver #启动
:1 #决定端口
-dry-run
-verbose
-PasswordFile ~/.vnc/passwd
-localhost yes|no

VNC的默认端口是5900，而远程桌面连接端口则是5900+n（n是参数 :<number> 指定的）。如果使用“vncserver :1”命令启动VNC Server，那么 viewer 目标端口应该是5901。

vncserver -list
vncserver -kill

```


### ~~webdav~~

```bash
残疾玩意，已废弃，请用 webdav-cli

client 下载速度能到 16 MB/s

1. 控制面板 - 程序 - 启用或关闭功能 - 点亮「IIS」、勾选「IIS - 万维网服务 - 安全性 - 基本身份认证」、勾选「IIS - 万维网服务 - 常见 HTTP 功能 - WebDAV 发布」
2. 开始菜单 - Windows 管理工具 - 打开 IIS
3. IIS 侧栏 - <主机名>-网站-Default Web Site
4. 「身份认证」禁用匿名认证，启用基本认证
5. 「WebDAV 创作规则」添加规则，全部内容、指定用户 11、全部权限，并在右侧启用 WebDAV
6. 右侧「基本设置」设置 webdav 根目录对应的物理目录
7. 右侧「虚拟目录」
8. 右侧「启动」或 net start webclient
9. 将 webclient 服务的属性设为「自动」，即可开机自启

IIS 的物理目录或虚拟目录不支持 C: D: 之类的根目录

在默认情况下，Windows只支持http访问，如果要开启https访问，可以通过修改注册表下的HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters的BasicAuthLevel为2，就可开启https访问，最后通过下方命令重启webdav服务即可

Windows原生挂载webdav后，只支持最大50M的读写，也就是说如果打开或者编辑一个超过50M的文件就会提示”文件超过限制大小”，无法访问编辑。我们可以通过修改注册表\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters的FileSizeLimitInBytes值改为十进制的”4294967295″即可从原来的50M修改为4G（然而我没遇到报错，懒得改了）

```


### ~~YAC~~

已废弃

1. docker run -d -p <port>:8080 -v <comics folder>:/comics --name=yacserver muallin/yacreaderlibrary-server-docker
2. docker exec yacserver YACReaderLibraryServer create-library <library-name> /comics
3. docker exec yacserver YACReaderLibraryServer  update-library /comics
4. start, create-library, update-library, add-library, remove-library, list-libraries

速度大概一天 8 - 9k



D:\Portable\scoop\apps\yacreader\current\YACReaderLibraryServer.exe

--help
--version
--port # 临时监听端口，不写进配置文件
--loglevel <error/warn/debug/info/trace>


start
create-library Comics /comics
create-library <名字> </路径>
update-library
add-library Gammenon /comics
add-library "[Note]" "E:/[Note]"
remove-library
list-libraries
set-port 2557 # 永久监听端口，会写进配置文件

You can set a permanent port by running YACReaderLibraryServer set-port port. This writes the port into the config file so it is used on the next startup.


