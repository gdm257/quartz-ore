---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## ~~pywebview~~

[pywebview —— 桌面开发的一种新尝试 | SinHub's Blog](https://sinhub.cn/2022/08/about-pywebview/)


pywebview 有两种用法。

第一种用法：pywebview 跟 PyQt wxPython Kivy 等方案一样，只不过 PyQt 底层是用原生 API 绘制与渲染，而 pywebview 底层是 webview。没错，区别仅在于底层实现不一样，但用法并无本事上的区别，前后端不分离，耦合度全靠自觉。这种用法无法使用 React/Vue 等前端代码，连 HTML 都不能用，而是必须在 Python 代码中调用 pywebview 库提供的 API 来生成 HTML，因为生成的是 HTML（DOM），所以必须给浏览器引擎渲染。这种用法只适合简单项目，因为 pywebview 提供的 API 不多，既不灵活也不强大，唯一的优点就是简单，比较适合没有前端经验的开发者。但问题是，我都不会前端了，干嘛要把底层换成 web，性能又差、 pywebview 功能又少、也不灵活，易用性也不如其他 GUI 库。

第二种用法：pywebview 差不多是 Python 版的 Electron——对于 Node，V8 由 Electron 提供，对于 Python，V8 由 pywebview 提供。与第一种用法相反，界面部分只能使用前端代码，不管是 React 还是 Vue，反正最后要打包成 HTML。其实也就是彻底的前后端分离，前后端通信全靠 HTTP API。pywebview 并没有什么惊喜或黑科技，只不过是用 Python 来写 HTTP Server 罢了，然后使用 pywebview 来运行、读取、渲染 HTML。问题是，你都会写前端了，前后端也分离了，你要想用 Desktop 而不是用浏览器来运行前端代码，干嘛不直接打包成 Electron，干嘛要用 pywebview，这是个很没有道理的选择。用 Electron 的话，你的后端也还是可以用 Python，只不过运行的时候要分别运行，pywebview 唯一的优点就是能同时启动前后端，但这也不是什么痛点，因此完全没有必要用 pywebview，有点多此一举。