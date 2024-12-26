---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## ~~PySimpleGUI~~

[PySimpleGUI/PySimpleGUI: Launched in 2018. It's 2023 and PySimpleGUI is actively developed & supported. Create complex windows simply. Supports tkinter, Qt, WxPython, Remi (in browser). Create GUI applications trivially with a full set of widgets. Multi-Window applications are also simple. 3.4 to 3.11 supported. 325+ Demo programs & Cookbook for rapid start. Extensive docs](https://github.com/PySimpleGUI/PySimpleGUI)

[PySimpleGUI](https://www.pysimplegui.org/en/latest/)



我终于可以确定，丢弃 pysimplegui 是个明智且正确的选择，并且不可惜

11.1K Stars

看了一下，PySimpleGUI 兼容 `tkinter` `Qt` `WxPython` `Remi`，这种兼容貌似并不是简单的 iframe，目测是底层用了好几种实现方式，就像 wayland 支持 x11 是因为底层重新实现了 x11。

优点是可利用的资源更丰富，但这对目前的我来说并不是优点，因为我没有其他技术栈的积累。

缺点嘛，为了兼容性，界面不是很好看的样子，API 看上去简单，目测不够灵活。

因此暂时不碰。

文档不咋滴

功能不咋滴

灵活性不咋滴



pysimplegui 确实超级 simple，已经到达简陋的地步了。几乎完全没有进行抽象设计，例如需要自己手动获取事件，手动解析事件，手动回调----这都不能称之为回调，因为就是在 if 里写一段代码……真的足够原始，所以真的很简单。

我的直觉告诉我，虽然易懂，但太简陋了，没有什么上升空间。只适合我的 yidm 这种程度的项目，复杂点的一定会变成屎山，毕竟关于事件循环与回调，我没有任何经验

果然，被 DearPyGui 完爆了