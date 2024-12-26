---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Obsidian/Plugin
  - flag/APP/Picture/Implement__/Diagrams/Whiteboard
frontmatter:
  - excalidraw
  - excalidraw-plugin
extensions:
  - .excalidraw
---

- Alternatives
    - [[Obsidian Excalidraw]] vs [[Obsidian Diagrams.net]]
        - 画一张简单的 [[UML]] 图表——[[Obsidian Diagrams.net]]
            - [[draw.io]] 真的顺手
            - [[draw.io]] 画 Model 效率高
            - [[draw.io]] 支持 一键式美化
            - [[draw.io]] 支持 [[MathJax]]
            - [[draw.io]] 支持 内置丰富的 Nodes/Edges，模拟 [[UML]] 很方便
        - 用「可视化笔记」实现「第二大脑」——[[Obsidian Excalidraw]]
            - [[Obsidian Excalidraw]] 支持嵌入 [[Obsidian]] 的 note/media，兼容性非常强
            - [[Obsidian Excalidraw]] 支持 Index 性质的 可视化笔记
            - [[Obsidian Excalidraw]] 支持 真实稿纸 性质的 可视化笔记
            - 「可视化笔记」复杂度远超 [[UML]]，简单的建模已经行不通了（包括图论、树形、关系型 etc），其性质更接近现实中的稿纸，那么用兼容 [[Obsidian]] 笔记的 [[Obsidian Excalidraw]] 就顺理成章了，几乎就是 [[Obsidian]] 版 [[OneNote]]

- References
    - [Excalidraw --在Obsidian上绘画【玩转Obsidian的保姆级教程】 - 知乎](https://zhuanlan.zhihu.com/p/405168267)
    - [Obsidian 插件之 Excalidraw - 知乎](https://zhuanlan.zhihu.com/p/387969823)

- Idea
    - [[Obsidian Canvas]] 的超集
    - [[excalidraw]] in [[Obsidian]]
    - 白板

- Philosophy
    - 可视化笔记
        - [[UML]] 试图用建模解决问题
        - 然而第二大脑的实践过程中，简单的建模已经行不通了，复杂度远超 [[UML]] 的范畴，其性质更接近现实中的稿纸，所以诸如 [[OneNote]] 才那么有市场，无他，万能、适用性强

- Test
    - [[Obsidian Canvas]] 完全可以丢了，被甩几条街

- Con
    - 不支持 丰富的图表类型
        - 要想复现 [[UML]] [[PlantUML]]，只能画 Nodes 来「模拟」
        - 怎么画？原理类似于 [[CSS]] 画 border，但 Excalidraw 可以用 Web UI 来画
    - 不支持 美观
        - 默认是手绘风图标、手写字体

- Fundamentals
    - 自己实现了一套白板，功能远胜 [[Obsidian]] 自带的 Canvas

- Description
    - Obsidian Excalidraw 是一个 [[Obsidian]] 插件
