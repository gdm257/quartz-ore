---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Picture
  - flag/LANGUAGE/PlantUML
  - flag/LANGUAGE/Graphviz
homepage: https://kroki.io
api-servers:
  - https://kroki.io/
github: yuzutech/kroki
md-blocks:
  - blockdiag
  - bpmn
  - bytefield
  - d2
  - seqdiag
  - actdiag
  - nwdiag
  - packetdiag
  - rackdiag
  - c4plantuml
  - ditaa
  - diagramsnet
  - erd
  - excalidraw
  - graphviz
  - mermaid
  - nomnoml
  - pikchr
  - plantuml
  - structurizr
  - svgbob
  - umlet
  - vega
  - vegalite
  - wavedrom
---

- Examples
    - ![CheatSheet](https://kroki.io/assets/kroki_cheatsheet_20210515_v1.1_EN.jpeg)

- Idea
    - 渲染绘图 DSL 的源码成图片
        - [[Mermaid]]
        - [[PlantUML]]
        - [[D2]]
        - [[excalidraw]]
        - [[Pikchr]]

- Fundamentals
    - Kroki 本质是一个 HTTP Server，接收请求（DSL 源码如 [[PlantUML]]/GraphViz/[[Obsidian Excalidraw]]），返回指定格式的渲染结果（如 SVG）

- Pro
    - 可嵌入 [[Obsidian]]
    - 可编辑
    - 易修改
    - 自动排版
    - 图标类型全
    - 可导出

- Con
    - 不易创建
    - 不够美观

- Test
    - 用哪个 DSL
        - 优先 [[Mermaid]]，因为官方的 web ui editor 很好用
        - 次选 [[ChatGPT]] 生成 [[PlantUML]]
