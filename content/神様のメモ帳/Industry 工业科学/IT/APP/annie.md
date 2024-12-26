---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
commands:
  - lux
  - annie
aliases:
  - lux
---

## annie

```bash
annie command
Description:
	* annie 已改名为 lux
	* annie 是视频下载工具
	* annie 对标 youtube-dl
	* annie 支持 数十个常用的视频网站

Usage:
	lux [options] <subcommand> [args]

Options:

# 下载
lux \
-C  \
-n 1  \
-p  \
-o 'E:/'  \
-c "D:/User/Desktop/cookies.txt"  \
-F "D:/User/Desktop/url.txt"  \
-d  \

lux -d -C -c "rpdid=|()kY)u~kYY0J'ul~)k|~l||; LIVE_BUVID=e1be3835b109bd397f7e32c6a897f598; LIVE_BUVID__ckMd5=8932d19a195346f9; buvid3=BFB466A0-0566-42DC-800F-2935A53E1E4653927infoc; CURRENT_QUALITY=116; PVID=1; CURRENT_FNVAL=4048; blackside_state=1; fingerprint=7ab0d3222bd7c1273bfc61332f5a6c96; buvid_fp_plain=undefined; fingerprint3=5091c6f2f6ff5667e6a56eb0c00dabf2; fingerprint_s=51d9658b3dd8ecfce8a91a5b9d832d13; CURRENT_BLACKGAP=1; video_page_version=v_old_home; i-wanna-go-back=-1; b_ut=5; balh_server_inner=__custom__; balh_is_closed=; balh_mode=default; bp_t_offset_5940909=632889651913293831; sid=4xv3ka46; bili_jct=7fb5bb86faf23fe1c4a8ae14b70ca232; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; innersign=0" -o 'E:/' -p -n 1 -F "D:/User/Desktop/url.txt"

"_uuid=144F6DDC-0B84-FFF5-768F-E799608329FF04597infoc; buvid3=BFB466A0-0566-42DC-800F-2935A53E1E4653927infoc; LIVE_BUVID=e1be3835b109bd397f7e32c6a897f598; stardustvideo=1; sid=4xv3ka46; rpdid=|()kY)u~kYY0J'ul~)k|~l||; LIVE_BUVID__ckMd5=8932d19a195346f9; im_notify_type_5940909=0; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; bili_jct=7fb5bb86faf23fe1c4a8ae14b70ca232; PVID=1; bp_t_offset_5940909=632889651913293831; CURRENT_FNVAL=120; SESSDATA=69b0d0db%2C1662219324%2C6d32e%2A31"


-p 可以下载全部分P


# 查看
lux \
-i  \
-c '/d/User/Desktop/cookies.txt'  \
-F "/d/User/Desktop/url.txt"  \
-d  \

lux -i -F "D:/User/Desktop/url.txt" -c 'D:/User/Desktop/cookies.txt' -d

-c "sid=jx1bs8mb; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; SESSDATA=0d865ade%2C1631012302%2Caa36e%2A31"

Netscape cookies 可以通过扩展 EditThisCookie（Chrome）或 Export Cookies（Firefox）导出。




// 安装
go install github.com/iawia002/lux #annie改名为lux
go get github.com/iawia002/annie #Install via go get
scoop install annie #Windows 安装

// 二八
查质量 annie -i -c "sid=lqzwxb3q; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; SESSDATA=4d8a3f75%2C1599112881%2C1722c*31;" -F "/d/User/Desktop/url.txt"

annie -C -c "_uuid=98D8C26D-D80D-72EB-D3B2-3A6C9ACB39A273936infoc; buvid3=BFB466A0-0566-42DC-800F-2935A53E1E4653927infoc; LIVE_BUVID=e1be3835b109bd397f7e32c6a897f598; stardustvideo=1; sid=lqzwxb3q; rpdid=|()kY)u~kYY0J'ul~)k|~l||; LIVE_BUVID__ckMd5=8932d19a195346f9; im_notify_type_5940909=0; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; bili_jct=61359a5ecaa8d4347d7728ae86455218; PVID=2; bp_t_offset_5940909=373673643791265493; CURRENT_FNVAL=16; SESSDATA=4d8a3f75%2C1599112881%2C1722c*31" -o /d/User/Desktop -n 1 -F "/d/User/Desktop/url.txt"
下载速度比简易 cookies 的块。顺便一句，cookies 的 CURRENT_QUALITY=112，经过观察 112 就是指画质 1080P+，116 是 1080P60。不过貌似对下载不影响，112 时，也会自动下载画质更高的 116。CURRENT_QUALITY=112;

annie -C -c "sid=lqzwxb3q; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; SESSDATA=4d8a3f75%2C1599112881%2C1722c*31;" -o /d/User/Desktop -n 2 -F "/d/User/Desktop/url.txt"
试了下，会自己下载 1080+。尴尬的是，下完后，我发现 Annie 下的 364M，而唧唧下的才 104M！岂不是说以前我特么都白下了？！



// 指南
annie [OPTIONS] URL [URL...]
OPTIONS：
-o <path> 输出目录
-O <filename> 输出文件名
-i 显示视频质量，但不下载，有 cookies 才能读取到 1080+
-f <number> 选择画质，由高到底，116（1080P60）、112（1080+）、80（1080）、74（720P60）、64（720）、32（480）、16（360）
-C 同时下载 captions，小破站下的是 xml 弹幕
-p 下载播放列表
-F <file> 从文件读取 URLs，而不是直接用 URL
-n <number> 线程数，默认 10
-c "key1=value1; key2=value2" 使用 cookies
-r <URL> Use specified Referrer
-d debug mode
-j print the extracted data in JSON format
HTTP_PROXY="socks5://127.0.0.1:1080/" annie -i https://www.youtube.com/watch?v=Gnbch2osEeo #使用代理
HTTP_PROXY="http://127.0.0.1:1087/" annie -i https://www.youtube.com/watch?v=Gnbch2osEeo

引号问题，都可以加，自己灵性一点。

1080P+ 问题，经过测试，批量下载时，有部分视频会探测不到 1080P+，再次执行就能识别，所以尽量 1080P+ 提前分类好。

第一个视频下载很快，第二开始就慢了，下载多个视频时加个时间间隔可能可以解决这个问题。

批量下载断点续传问题，已经下好了几个，ctrl c 取消，再重新下载，是否接着下载？会的。不过同一个视频前后画质解析结果不一样，可能导致重新下载（因为默认下载的是最高画质）。

批量下载问题，txt 文件有些链接不知为何无法检测（可能是视频刚上线没多久）。经过测试，txt 第一行会无效，所以开头要空一行，结尾最好也空一行。

画质问题，Annie 会自动下最高画质，这里的最高画质貌似是「体积最大」，如「https://www.bilibili.com/video/BV1Hz411B7D6」自动下的是 121M 的 720P 而不是 110M 的 1080P。这种算是特例，谁知道 b 站的 ffmpeg（也许？）用了什么神奇的参数。

分 P 问题，

互动视频问题，

外挂字幕问题，

收藏夹批量下载，




// 查看 cookies
F12 - Console - 输入命令 document.cookie

"_uuid=98D8C26D-D80D-72EB-D3B2-3A6C9ACB39A273936infoc; buvid3=BFB466A0-0566-42DC-800F-2935A53E1E4653927infoc; LIVE_BUVID=e1be3835b109bd397f7e32c6a897f598; stardustvideo=1; sid=lqzwxb3q; rpdid=|()kY)u~kYY0J'ul~)k|~l||; LIVE_BUVID__ckMd5=8932d19a195346f9; im_notify_type_5940909=0; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; bili_jct=61359a5ecaa8d4347d7728ae86455218; PVID=2; bp_t_offset_5940909=373673643791265493; CURRENT_QUALITY=112; CURRENT_FNVAL=16; SESSDATA=4d8a3f75%2C1599112881%2C1722c*31"

有人是只用以下四项下载 1080P+
"sid=lqzwxb3q; DedeUserID=5940909; DedeUserID__ckMd5=97c6c7e14871cfe5; SESSDATA=4d8a3f75%2C1599112881%2C1722c*31;"

但 Annie 作者是这么说的「一般可以在 Chrome 的 network 里面的 request headers 里面找到」「你在 chrome 里面把 request 头里面的所有 cookie 都复制上」「Chrome -> Network -> Request Headers -> Cookie」「Chrome 用 cookies.txt 这个插件可以直接下载 cookies」
```

