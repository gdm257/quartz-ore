---
tags:
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[Accelerator keyboard shortcuts | Electron](https://www.electronjs.org/docs/latest/api/accelerator)

> 即便是简单的应用 Web 技术开发出来的东西，用起来总有种软绵绵的感觉，没有 native 语言做出来的那种专业和硬朗的体验。
> 对！Electron 就是这软绵绵的感觉。

Electron 本质就是浏览器套壳。无论你使用 web api 还是 native api，最后都是解析成 html + css + js 来渲染。


> 随着今后 PC 越来越往生产力工具上靠拢，你要开发成熟的内容生成型的应用，请选择 native 语言。
> 现在电子设备分工越来越明确，随着移动应用的兴起，内容消费的功能都在往移动设备上迁移。PC 已经是越来越存粹的效率工具了。两个有本质的区别：移动界面是消费级应用，界面要好看，要容易操作，比如方便触屏的大按钮；而桌面软件会越来越朝向生产力方向发展，强调的是专业和效率。

如果说 React Native 还有那么一丁点可能，Flutter 那是真的一点都不想碰。


- Electron 应用加上 `--disable-smooth-scrolling` 启动参数，即可禁用平滑滚动。例如可通过该方法禁用 [[Obsidian]] 的平滑滚动

- 前后端分离
    - Rendering (Inject API & Eval)
        - Electron
        - Wails
        - Tauri
        - React Native
        - uni-app
        - Native Rendering
    - H5
        - vue.js
        - react
        - alpine.js
        - htmx
    - Data
        - JS???
            - RESTful
            - Electron
            - Wails
            - Tauri
            - React Native
            - uni-app
        - ~~Embed~~
            - ~~Template~~
