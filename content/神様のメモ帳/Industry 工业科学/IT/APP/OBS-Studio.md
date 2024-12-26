---
tags:
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/APP/Video
---

## OBS-Studio

Q:「窗口」选中 Chrome 是黑屏的？
A:
chrome://flags/#use-angel - Choose ANGLE graphics backend
 - 选择 OpenGL。重启 Chrome，重新添加窗口。
如果 chrome 全黑了，使用 chrome.exe -disable-gpu 打开，然后 Choose ANGLE graphics backend 改成 D3D11。记得保证正确的核显驱动、独显驱动。
firefox - 设置 - 常规 - 性能 - 取消勾选 使用推荐的性能 - 取消勾选 自动启用硬件加速

Q:「显示器采集」黑屏？
A: windows 设置 - 系统 - 显示 - 图形设置 - 浏览 - 选择 obs64.exe - 选项 - 核显 or 独显，自己试试，笔记本一般选核显。不过核显占用整体偏高，不适合录游戏直播。
最好的办法还是安装好核显驱动、独显驱动，使用默认设置（独显工作）。

Q: 如何静音笔记本的录音麦克风？
A:
方法 1 - OBS - 混音器 - 静音 麦克风。如果想静音音频内录同理，也可以用来调音量。
方法 2 - OBS - 场景 - 删除 麦克风。如果想静音音频内录同理。

Q: 聚焦哪个窗口，就录制哪个窗口？
A: 自动的话，无解。只能使用显示器采集间接达到效果。