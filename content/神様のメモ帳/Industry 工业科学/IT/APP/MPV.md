---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/APP/Video/Implement__/VideoPlayer
---

[Players - Streamlink 5.3.0 documentation](https://streamlink.github.io/players.html)

- Version
    - 2024.06
        - mpv-lazy 的配置 + mpv.net-dw 的程序
            - npv.net-dw 基于 mpvnet，记得是对右键还是快捷键有增强来着
            - mpv-lazy 基于 mpv
            - mpv-lazy 有时候会在视频目录下生成日志文件，原因不明
    - 2024.07
        - mpv.net-dw 配置 + mpv.net-dw 程序
            - 我想要自定义的地方，作者都帮我弄好了，无脑默认，配置随便丢
            - 集成的第三方 OSC 脚本 `modernx.lua` 有 bug，光标 hover 会清除 cache，导致 stream 体验极差。建议直接删除，或者换 uosc
            - 研究了一下，是 [zydezu/ModernX](https://github.com/zydezu/ModernX) 分支的问题


```bash
mpv \
'https://www.bilibili.com/video/BV1CQ4y197xa'  \
'https://ecchi.iwara.tv/videos/ewr5rh283imzvqeg'  \
https://www.youtube.com/watch?v=7ePaVk7TKGM  \

--config-dir="~~/"  \
--cookies-file="~~/cookies/bilibili.com-Netscape"  \
--ytdl-format=<ytdl|best|worst|mp4|webm|...>  \
--ytdl-raw-options=<key>=<value>[,<key>=<value>[,...]]  \
传递参数给 ytdl
依旧无法大会员高码率，不知为何。进一步测试，这是 youtube-dl yt-dlp 的问题。最新版也不支持大会员内容。
try_ytdl_first=yes  \
--ytdl  \
ytdl_path=yt-dlp  \
ytdl_path=youtube-dl  \
--no-ytdl  \

字符画
-vo=caca  \
--no-config

--option=value and -option value and -option=value will also work.




辅助测试
yt-dlp [OPTIONS] [--] URL [URL...]
youtube-dl
辅助测试
curl  \
-b "D:\Portable\MPV\portable_config\cookies\bilibili.com.txt" \
"https://xxx.com/xxxx.mkv"

--list-formats  \
--cookies-from-browser "firefox:D:\Portable\Replace\RunningCheese_Firefox_V10_(x64)\Profiles"  \
--user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0" \
-f best*  \
--dump-user-agent        Display the current user-agent and exit
--config-location PATH
--proxy URL
--cookies FILE
--no-cookies-from-browser
--referer URL
-add-header FIELD:VALUE
-add-header FIELD2:VALUE
-add-header FIELD3:VALUE
```