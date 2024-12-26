---
tags:
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Shell/Implement__/Launcher
scoop: utools
---

- Alternatives
    - [[flow launcher]]

- Configuration
    * `%APPDATA%/utools`

- Usage
    - `Alt + Space`: 输入框
        - `输入框` - `⇩` or `Tab`: 根据当前窗口过滤关键字
        - `Ctrl-Enter`: 管理员权限运行
    - `鼠标侧键`: 超级面板

- Idea
    - utools 的核心 idea 就是作为一个「启动器」，类似于 Listary/Wox。只不过，要启动的对象不仅限于 GUI。因此也就有了各种插件
    - utools 的第二个 idea 就是，作为全局的第三方「右键菜单」（官方称其为超级面板）。根据上下文，展示不同的菜单选项。选择文本，展示这些操作，选择文件则是那些操作，在这个窗口又是另一些操作……由于上下文场景是会不断变化的，没有一个插件适用于所有场景，utools 只是个入口，是中间层，「统一了」上下文菜单的「调用方式」。可看作是 [[Quicker]] 的简化版

- Test
    - 重装系统之前如果登录了 utools 账号，重装后需要登录账号才能读取插件及其配置

- Description
    - 一个「关键词」相当于 VSCode Command Panel 的一个 Command

- Alternatives
    - [Flow-Launcher/Flow.Launcher](https://github.com/Flow-Launcher/Flow.Launcher)
        - 全英文，不如 [[utools]] 好用
