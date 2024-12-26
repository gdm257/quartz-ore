---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Text
---

- Philosophy
    - Flows
        - 无论是 [[anytype]] 的 Object/Relations，[[AITable]] 的 datasheet，还是 [[NocoBase]] 的 Model，它们都是以「Schema（Model）」为核心的
        - [[kestra]] 另辟蹊径，完全放弃 Model（连个 UI 都没有），转而以 Flow 为核心
        - [[kestra]] Flow 本质上跟 [[NocoBase]]/[[AITable]] 的 workflows 是一样的，只不过后者的 workflow 依赖于提前定义的 models，workflow 与 model 是解耦的，而 [[kestra]] flow 则是将 models 内嵌在 flow 定义中（[[YAML]]）
    - Event Driven
        - [[NocoBase]]/[[AITable]] 直接读取 Source 然后 *展示*
        - [[kestra]] 事件触发才执行任务最后 *统计*，不会直接展示，可视化的只有 *统计图表*，不过好在这些 charts 有表格，因此和直接展示效果可以是一样的

- Pro
    - BI Dashboard
        - chart/stat 功能非常丰富
    - Tracing
        - 自动存储 Logs/Executions，开箱即用
    - Easy to use
        - 界面简洁清爽
        - 可视化组件简单易懂
        - 图表丰富
        - 整个 UI 没有什么复杂的组件
