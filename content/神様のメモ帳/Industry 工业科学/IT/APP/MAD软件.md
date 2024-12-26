---
tags:
  - flag/APP/Video/_Article/MAD
  - flag/APP/Video/_Article/MMD
  - Label/Article/APP
---

## MAD软件

[新人向MMD资源较详细全面索引 - 哔哩哔哩](https://www.bilibili.com/read/cv7185607)


    Adobe 创作全家桶，是设计师的工具.
    JetBrains 编程全家桶，是程序员的工具.
    Autodesk 工程全家桶，是工程师的工具.


#### 视频媒体工具

【抽取工具】
MKVExtractGUI2
gMKVExtractGUI
HD Stream Extractor
eac3to

【压制工具】
AVS
AVS+
VS
Anime4KCPP
waifu2x

【封装（混流）工具】
MKVToolNix
MP4Box

【剪切/合并工具】
MeGUI
MKVToolNix
SMMVSplitter
LosslessCut

【剪辑工具】
After Effects
Premiere
万兴神剪手
Gyroflow 平稳化抖动的视频

【字幕工具】
aegisub
TimeM
Arctime

【辅助工具】
MediaInfo
avspmod
vsedit

【编码（转码）工具】
【复合型（啥都能干型）工具】
FFmpeg（开源，生产级，业界最强，垄断地位，绕不开的存在）
MeGUI
格式工厂
小丸工具箱

PS：不在列的软件不建议单独使用，尤其是 Media Coder，难用的一批。


#### 无损剪切

> 原理是以关键帧为单位进行无损剪切。
> 无损剪切惟有一种用途，剪素材供以后使用。

mkvtoolnix，按照关键帧重新封装，完全无损
要按帧剪切没有任何工具做得到，必须重编码

MKV：mkvcutter + mkvtoolnix
avi/mp4: avidemux，全部选项选copy
wmv: cutassisant + asfbin
mpg/mpg2:smartcutter
以上均为win免费工具，无须重编码

Boilsoft Video Splitter 不重新编码直接剪
只有MPEG2和H.264可以无损。都可以用ffmpeg解决。流复制，无损。

```
ffmpeg -ss <from> -to <to> -i <in> -map 0 -c copy <out>
能无损切割 265？
BoilsoftVideoSplitterPortable
按关键帧分割：ffmpeg -ss <time> -t <time> -i input.mp4 -vcodec copy -acodec copy output.mp4
按时间点分割：ffmpeg -i input.mp4 -ss <time> -t <time> -vcodec copy -acodec copy output.mp4
如果要裁剪两秒之间的位置，将秒数位写成小数即可。
比如：-ss <01:10:01.513> 就是裁剪视频 1 时 10 分 01 秒和 1 时 10 分 02 秒之间的某一点。
```


#### 重封装

[MKVToolNix - Document](https://mkvtoolnix.download/docs.html)

[MKVToolNix - Reddit](https://www.reddit.com/r/mkvtoolnix/)

[MKVToolNix - FAQ](https://gitlab.com/mbunkus/mkvtoolnix/wikis/FAQ)

[MP4Box - Document](https://gpac.wp.imt.fr/mp4box/mp4box-documentation/)

[利用MeGUI实现批量转换视频](https://www.cnblogs.com/TianFang/archive/2012/12/04/2802101.html)

编码测试

|       重封装       | 8bit | 10bit |    h.265     | 批量 |
| ----------------- | ---- | ----- | ------------ | ---- |
| **MeGUI**         | 1    | 1     | 1(extract 0) |      |
| **MKVExtractGUI** | 1    | 1     | 1            | cli  |
| **MKVToolNix**    | 1    | 1     | 1            |      |
| gMKVExtractGUI    | 1    | 1     | 1            |      |
| MkvToMp4          | 1    | 1     | 0            | 1    |
| MediaCoder        | 1    | 0     | 0            |      |
| 小丸工具箱         | 1    | 0     | 0            |      |

PS：8bit 指 h.264 8bit；10 bit 指 h.264 10 bit；h.265 指 h.265 10bit

PPS：色深与位深同时存在，相对独立，8 bit、16 bit、24 bit、32 bit 指的是不同の色深，但这些色深の共同点就是他们每个通道の深度是 8 bit，即 8 bit 位深。10 bit 位深对应の色深为 10 bit、20 bit、30 bit。色深即整体色彩の深度，位深即单个通道の深度

PPS：10 bit 又叫 Hi10P

PPS：PNG 8 为透明通道只有 0 和 255 两个值，即透明和不透；PNG 24 透明通道有中间值半透

PPS：正如 H.264 是 MPEG-4 的 part 10，H.265 是 MEPG-H 的 part 2

PPS：WebM是以mkv为基础，专为谷歌VP8/VP9编码视频开发的封装格式（其中音频仅支持Opus编码）；所以webm文件可以当作mkv文件来提取轨道

PPS：XXX to MKV，推荐 MKVToolNix

PPS：MKV to MP4 ，推荐 AVC 用 MKVToMP4、HEVC 用 MKVExtractGUI2+MeGUI-Tools-Muxer-MP4 Muxer





#### MikuMikuDance

mmd本体（ver739，ver910～）
拥有模型之后就可以通过mmd编辑动作了。739是最稳定最能实现大部分功能的版本，但是新版本可以使用外亲功能并且优化了工程文件的使用。
mmd只是一个动作编辑器，并不能制作模型或是编辑模型，因此你需要一个可建模的3d软件如c4d，max，水杉之类的，这三者都有对应的直接输出pmx文件的插件或是功能，可以节省很多时间。

Unity3D
因为MMD软件停止更新，可以说未来Unity3d将会代替MMD做渲染工作。

PmxEditor （ver139，ver222都需要）
可以把PE说成3dmax、maya、 blender专业软件的迷你版，你要用到的法线修改、重叠点合并、旋转、挤出、刷权重、绑定骨骼全部都可以在这一个软件里面做出来。正常情况下如果你直接去学习3D建模是非常困难的，因为你之前所学的小学课本上根本就没有这方面的知识，所以当你学完PE后在去学其他3D软件知识就会重叠在一起，最少你也能通过mmd和pe培养出3D空间感。
pmx是mmd专用的模型文件，这意味着你需要下载一个pmxeditor为你编辑或是修改模型。其中139有将老格式转化为新格式的功能，以备不时之需。

mme
mmd 的特效插件，安装后可使用各种mmd专用特效

faceandlips
mmd负责大部分的动作编辑，fal主要专精于口型，表情的编辑

avisync
如果你需要在mmd中导入视屏背景作为动作参考，那么你需要下载一个avisync

GIMP
在日本大家都是用GIMP，反而且PS的人少。

ZBrush
动漫建模可以用拓补建模或雕刻建模，而ZBrush是用来做一些高细节的模型，比方说沟沟坎坎，前突后翘的小姐姐。

Marvelous Designer
MD就是大名鼎鼎的布料解算软件