---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Picture
  - flag/APP/Picture/Implement__/Diagrams/Whiteboard
github: excalidraw/excalidraw
homepage: https://excalidraw.com
extensions:
  - .excalidraw
npm: "@excalidraw/excalidraw"
---

## Brief

- References
    - [Zsolt's blog](https://www.zsolt.blog/)

- Pro
    - 简单易用。跟 [[Windows 画图]] 差不多
    - 实用。别看不严格定义，部分 [[UML]] 如架构图、[[流程图]] 还是能画的，还更快、更美观，画起来也舒服

- Con
    - whiteboard 极度依赖🖱鼠标
    - [[excalidraw]] 与严谨完全不沾边，属于 [[Windows 画图]] 这个级别的
    - [[excalidraw]] 是手绘画风，看起来不正式
    - [[excalidraw]] 本质是一个「Whiteboard Application」，[[UML]] 只是顺便画画，没法定制具体细节
    - NOT Support layers like PS
    - NOT Support [[UML]]
        - [[excalidraw]] libraries 基本都是 icons 性质
        - [[draw.io]] 自带的 shapes 可以模仿 [[UML]]

- Alternatives
    - [[draw.io|diagrams.net]]
    - [[diagrams]]

- Data
    - `.excalidraw` [[JSON]]
        - `"type": "excalidraw"`
        - `version: int` e.g. `2`
        - `source: str` e.g. `"https://excalidraw.com"`
        - `appState: Dict`
        - `elements: List[Dict]`
            - `id: str`
            - `x: int`
            - `y: int`
            - `width: int`
            - `height: int`
            - ...
            - `type: str`
                - `selection`
                - `rectangle`
                - `diamond`
                - `ellipse`
                - `embeddable`
                - `iframe`
                - `video`
                - `generic`
                - `document`
                - `image`
                - `frame`
                - `magicframe`
                - `text`
                - `line`
                - `arrow`
                - `freedraw`
        - `files: Dict[<fileId:str>, Dict]`
            - `fileId: str`
                - `mimeType: str`
                - `id: str`
                - `dataURL: str`
                - `created: <timestamp:int>`
                - `lastRetrieved: <timestamp:int>`
    - excalidraw clipboard
        - same as `.excalidraw`
        - `"type": "excalidraw/clipboard"`
