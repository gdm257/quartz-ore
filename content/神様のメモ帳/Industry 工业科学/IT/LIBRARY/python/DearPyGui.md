---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## DearPyGui

[hoffstadt/DearPyGui: Dear PyGui: A fast and powerful Graphical User Interface Toolkit for Python with minimal dependencies](https://github.com/hoffstadt/DearPyGui)

[Dear PyGui’s Documentation — Dear PyGui documentation](https://dearpygui.readthedocs.io/en/latest/)


PySide 我很满意



9.5K Stars

看上去最酷。

纯命令式定义 GUI，相比 kivy 更轻量，可以说完全没有心智负担。但缺点是，缺乏组件化，想要复用得自己动手实现，比较原始。
事件注册功能弱。

可读性强。


All DPG apps must do 3 things:
Create & Destroy context
Create & Show Viewport
Setup & Start DearPyGui




alias - A string that takes the place of the regular int ID. Aliases can be used anywhere UUID’s can be used.

item - Everything in Dear PyGui created with a context manager or a add_ command.

root - An item which has no parent (i.e. window, registries, etc.)

window - A Dear ImGui window created with add_window(…).

viewport - The operating system window.