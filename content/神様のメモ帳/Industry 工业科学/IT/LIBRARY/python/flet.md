---
tags:
  - flag/License/Apache
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/GUI
  - flag/Library/APILayer/Implement__/Mobile
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
homepage: https://flet.dev
github: flet-dev/flet
pip: flet
---

## Brief

- Idea
    - Build multi-platform (web, mobile and desktop) apps in Python powered by Flutter

- Examples
    - [cuifengcn/TAICHI-flet](https://github.com/cuifengcn/TAICHI-flet)

- Pro
    - Support FAST development
    - Support high readability
    - Support muti-platforms app based on Flutter
        - 用来代替 [[PySide6]]/[[PyQt6]] 还是很不错的

- Con
    - [Roadmap | Flet](https://flet.dev/roadmap)
    - NOT Support 前后端分离
    - NOT Support **Non-pure Python packages** such as [[numpy]]/[[pandas]] for [[Android]]/iOS (planned)
        - 考虑到这点，跨平台立刻成了 Desktop ONLY，那么相比「web + API」就没什么优势了
        - 本质上是因为前后端没有分离，但 [[flet]] 本身就是为了解决前后端分离的高开发成本而诞生的，[[flet]] 不可能走 [[wails]]/[[tauri]] 那条路
        - 基本无解，除非这些 libraries 能够适配 Flutter 运行时，或者反过来 patch 这些 libraries
    - NOT Support Context Menu (planned)
    - NOT Support Controls Selector
        - Callback 需要手动 update page，就像是 [[JavaScript|JS]] 需要手动刷新 DOM。但是，这个 `page` 对象并没有通过 callback 传入，单纯是通过 Python 的变量作用域机制向上一层 StackFrame 搜索，因此 callback 必须定义在 `main()` 内部。导致 `main()` 行数爆炸，不像 [[JavaScript|JS]] 那样可以 CSS query 得到 Element 就能直接刷新。更进一步，这导致第三方难以扩展
        - 不光是 `page`，如果 callback 需要操作其他 controls 也是这样。[[JavaScript|JS]] 通过 [[CSS]] Selector 来获取元素，但 [[flet]] 完全没有
        - 找到解决办法了，那就是 MyControlClass 重写 `__init__(self, page: Page)`，实例化时传入 `page`。至于原生 controls 的 callback，利用 Python 作用域机制，直接使用 non-local `self`；或者 `on_click=self.my_callback`

- Alternatives
    - [[fyne]]
        - 想用 [[Go]] 而非 [[Python]]

## Objects

- Philosophy
    - Controls
        - Tags in [[HTML]]
        - Widgets in [[Qt]]
        - Controls in [[flet]]
        - 100+ built-in controls
        - 实用而全面，找前端组件库时可以此为评判标准，连 controls 设计都比不过的组件库，还是别用为好，更何况还要跨平台

- Controls
    - Layout
        - [[CSS]]-like
            - `flet.Row` == [[CSS]] flex
            - `flet.Column` == [[CSS]] flex
            - `flet.ResponsiveRow` == [[CSS]] flex
            - `flet.GridView` == [[CSS]] grid
            - `flet.Stack` == [[CSS]] position
        - [[JavaScript|JS]]-like
            - `flet.Tabs`
        - [[HTML]]-like
            - `flet.View` == [[HTML]] `<div>`
            - `flet.Container` == [[HTML]] `<div>`
            - `flet.Page` == [[HTML]] `<div>`
                - `flet.Page` is a container of `flet.Container`
            - `flet.Pagelet` == [[HTML]] `<div>`
                - use for page within page
            - `flet.SafeArea` == [[HTML]] `<span>`
            - `flet.DataTable` == [[HTML]] `<table>`
            - `flet.ListView` == [[HTML]] `<ul>`
        - [[Bootstrap]]-like simple component
            - `flet.Card`
            - `flet.CupertinoListTile`
            - `flet.Dismissible`
            - `flet.ExpansionTile`
            - `flet.ListTile`
            - `flet.ExpansionPanelList`
            - `flet.Divider`
            - `flet.VerticalDivider`
