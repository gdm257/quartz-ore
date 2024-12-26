---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/ContentRenderer
  - flag/Library/APILayer/Implement__/Web/Components
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## Brief

- References
    - [ObservedObserver/streamlit-shadcn-ui: Using shadcn-ui components in streamlit](https://github.com/ObservedObserver/streamlit-shadcn-ui)

- Installation
    - 

- Version
    - 

- Idea
    - [idea:: 交互式图表 CMS]

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- UI
    - 

- CLI
    - 

- DSL
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 支持 [[pandas]] 图形
    - 支持 [[matplotlib]] 图形
    - 支持 [[plotly]] 图形

- Test
    - **本质就是一个 CMS Blog，根本不是 Web Framework！**
    - **elements** i.e. HTML Element
    - **widgets** i.e. 交互性 HTML Element
    - **components** i.e. 第三方 element/widget
    - **Layout** 布局
    - 优点 `st.write()` 支持 Matplotlib figures
    - 优点 控件生态最好，但控件开发难度大
    - 缺少 callback
        - 文档中，基本全靠 `if` 完成。只有少量 element 如 `button` 有 `on_click` 可以指定回调函数
        - 原理简单粗暴，一句话，server 端 rerun
            - browser 中 status 更新时，发送新的值给 server（也有可能是重新计算浏览器缓存）
            - server 用新的值 rerun 该页脚本，结果返回给 browser
            - browser 利用虚拟 DOM 之类的方法，只修改有差异的部分
        - rerun 会自动使用最新属性值，例如用户修改的值，从而更新最终结果
        - 这就是 `if` 黑魔法的原理
    - 缺少 鉴权
    - 缺少 路由
    - 缺少 CPU 优化
        - rerun 从原理层面就更占 CPU，毕竟不是 Event
    - 缺少 内存优化
    - 缺少 组件化，完全 All In One，不同 page 无法复用

- Alternatives
    - [[plotly dash]]
    - [[Taipy]]
    - [[vizro]]

- Description
    - 


## API

- `import streamlit as st`
