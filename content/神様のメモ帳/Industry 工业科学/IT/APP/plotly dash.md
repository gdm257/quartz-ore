---
tags:
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/ContentRenderer
  - flag/Library/APILayer/Implement__/Web/Components
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: dash
---

## Brief

- References
    - 

- Installation
    - `pip install dash`
    - `pip install plotly` 影子依赖

- Version
    - Latest

- Idea
    - [idea:: 交互式图表 CMS]
    - ddk 开箱即用的 CMS 主题，定位类似于 handsome
    - ddc 较为原始的组件
    - dbc 开箱即用的 css，一键美化
    - dmc 开箱即用的交互式组件
    - plotly 绘图

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

- Philosophy
    - Low code
    - Out of the box
    - Flexible

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Test
    - 热更新 File Watch 不仅限于 `app.layout` 所在模块，引用的其他模块发生修改，也会热更新到网页
    - cache
        - multiple pages
            - `layout` 直接赋值，而不是 function，即可 cache。缺点是 server 启动速度慢

- Pro
    - 理论上无上限
        - 要想没有上限，必须支持 [[HTML]] [[CSS]] [[JavaScript|JS]]
        - 原生支持 [[HTML]] [[CSS]]，用法类似 [[JSX]]，对前端人员十分友好
        - 不直接支持 [[JavaScript|JS]]，但是我们可以通过 `script` 标签来手动嵌入 [[JavaScript|JS]]，不过这种做法不方便复用 [[JavaScript|JS]] 代码，只能说理论上无上限
    - 支持 组件复用，类似 [[JSX]]
    - 支持 丰富的 [[plotly]] 图表
    - 支持 热更新，无需重新运行脚本
    - 支持 网页实时更新，即 [[AJAX]]
    - 支持 Chained Callbacks 全自动，无需操心
        - **Callback 是 [[plotly dash]] 的灵魂所在**
        - Callback 是交互功能的直接来源
        - Callback 如果没有用到，那你还不如直接 [[Django]] + [[plotly]]

- Con
    - 不支持 鉴权（用户体系）
        - 有人试图依靠简单的 `if` 手动实现鉴权，做法类似「装饰器」
        - [AAD auth for Plotly Dash - DEV Community](https://dev.to/kummerer94/aad-auth-for-plotly-dash-3m57)
    - DDK 解决了开源陷阱里的一些问题，但收费
    - 开源陷阱
        - 不支持 被嵌入进 [[Flask]] [[Django]]
        - 不支持 嵌入 [[Flask]] [[Django]] 组件
        - 论开放性，[[plotly dash]] 本质上跟 [[streamlit]] 没有区别
        - 论低代码，[[plotly dash]] 完全比不过 [[streamlit]]
        - TL;DR
            - **我在技术栈的考察上犯了错误，误以为 [[plotly dash]] 更灵活的 code style 就代表 [[plotly dash]] 比 [[streamlit]] 更具开放性，实则没有区别，导致浪费了一周的时间**
            - 如果你要以 [[Flask]] [[Django]] 作为骨架并复用其视图，请勿使用 [[plotly dash]]，你可以
                - 使用 [[Bokeh]]
                - 使用 [[plotly]] 并自己实现 callback，相当于自己写个贫血版 [[plotly dash]]。开发难度大，慎选
            - 封闭！封闭！封闭！
            - 看似开放，基于 [[Flask]] [[React]] [[plotly]]，实则
            - 你无法将 [[plotly dash]] 嵌入 [[Flask]] 或 [[React]]
            - 也无法在 [[plotly dash]] 里复用已有的 [[Flask]] View
            - 从原理上就无法实现
            - [Multi-Page Apps and URL Support | Dash for Python Documentation | Plotly](https://dash.plotly.com/urls)
            - [python - Passing dash\_html\_components into a Jinja template - Stack Overflow](https://stackoverflow.com/questions/50827099/passing-dash-html-components-into-a-jinja-template)
            - [A simple working example for embedding dash in flask under a path · Issue #214 · plotly/dash](https://github.com/plotly/dash/issues/214)
            - [Integrate Plotly Dash Into Your Flask App](https://hackersandslackers.com/plotly-dash-with-flask/)

- Alternatives
    - [Web frameworks📊: Your 🐍Python Picks - DEV Community](https://dev.to/taipy/web-frameworks-your-python-picks-3a46)
    - [5大Python可视化库到底选哪个好？一篇文章搞定从选库到教学 - 知乎](https://zhuanlan.zhihu.com/p/148748125)

- Description
    - 


## API

- `dash.dcc`
    - Dash Core Components
