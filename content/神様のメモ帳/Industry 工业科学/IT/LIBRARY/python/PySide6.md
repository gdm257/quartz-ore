---
tags:
  - flag/License/LGPL
  - flag/Library/APILayer/Implement__/GUI
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## PySide6

[QT核心机制与原理 | Jack Huang's Blog](https://huangwang.github.io/2021/02/06/QT%E6%A0%B8%E5%BF%83%E6%9C%BA%E5%88%B6%E4%B8%8E%E5%8E%9F%E7%90%86/)

[hustlei/QssStylesheetEditor: Editor for qt stylesheet (qss). Real-time preview, and user can define varibles in qss.](https://github.com/hustlei/QssStylesheetEditor)

[muziing/PySide6-Code-Tutorial: 可能是最好的PySide6中文教程！用代码实例讲解PySide6，附优质Demos、图标库、QSS皮肤、相关文章等分享！](https://github.com/muziing/PySide6-Code-Tutorial)

[PyQt6 中文教程](https://maicss.gitbook.io/pyqt-chinese-tutoral/)

[maicss/PyQt-Chinese-tutorial: PyQt6中文教程](https://github.com/maicss/PyQt-Chinese-tutorial)

[PyQt](https://pyqt.site/)

[feiyangqingyun/QWidgetDemo: Qt编写的一些开源的demo，预计会有100多个，一直持续更新完善，代码简洁易懂注释详细，每个都是独立项目，非常适合初学者，代码随意传播使用，拒绝打赏和捐赠，欢迎留言评论！](https://github.com/feiyangqingyun/QWidgetDemo)

[feiyangqingyun/qucsdk: Qt编写的自定义控件插件的sdk集合，包括了各个操作系统的动态库文件以及控件的头文件和sdk使用demo。心中有坐标，万物皆painter，欢迎各位咨询、购买、定制控件，QQ：517216493 微信：feiyangqingyun 推荐加微信。](https://github.com/feiyangqingyun/qucsdk)

[feiyangqingyun/qtkaifajingyan: 自己总结的这十多年做Qt开发以来的经验，以及Qt相关武林秘籍电子书，会一直持续更新增加，欢迎各位留言增加内容或者提出建议，谢谢！](https://github.com/feiyangqingyun/qtkaifajingyan)

[Using Custom Widgets with Qt Designer | Qt Designer Manual](https://doc.qt.io/qt-6/designer-using-custom-widgets.html)

[为什么很多Python开发者写GUI不用Tkinter，而要选择PyQt和wxPython或其他？ - 知乎](https://www.zhihu.com/question/32703639)

[怎么样打包 pyqt 应用才是最佳方案？或者说 pyqt 怎样的发布方式最优？ - 知乎](https://www.zhihu.com/question/48776632/answer/2336654649)

[请问目前做windows桌面应用程序，MFC、QT、C#哪个更好？ - 韦易笑的回答 - 知乎](https://www.zhihu.com/question/402080800/answer/1296851646)

[为什么业内用.net的公司这么少？ - 韦易笑的回答 - 知乎](https://www.zhihu.com/question/33497967/answer/2410496939)

[什么语言最适合做 GUI？ - 知乎](https://www.zhihu.com/question/276815517/answer/2397676926)

[我不想成为不懂 GUI 的 UI 开发者 - 掘金](https://juejin.cn/post/6844903981836320776)


```python
pyside6 library
Installation:
    * pip install pyside6

Q&A:
    * singnal 是 emit 出去了，但如果我需要 slot 按顺序 trigger 怎么办？
    * 你喜欢的软件，用了多少个布局？多少个控件？多少个信号？多少个槽？Model/View 怎么分离的？

Description:
    * 「Window（窗口）」来自没有「嵌入」到父控件的「Widget（控件）」.
    * 「Widget（控件）」指衍生自 QtWidgets.QWidget 的类及其实例.
    * 「Layout（布局）」是用来组织其他 Widget 的 Widget.
    * 「Signal（信号）」可以 emit（发射）信号给任意数量的 Slot，即连接.
    * 「Slot（槽）」可以连接任意数量的 Signal.
    * Signal 只负责发送，不管接收、回调，完全解耦.
    * Signal A 可以 connect 到 Signal B，即 emit A 会导致 emit B.
    * Signal 可以 connect 普通函数，不过不推荐，请用 @Slot 标记为槽.
    * Widget 的 state（状态）改变后，Qt 会自动更新视图.
    * Widget 的 state 改变，实际上全靠 Signal 触发 Slot.
    * QObject 是所有 Qt 对象的基类.
    * QML 就是用 DSL 来定义 Widget.
    * QSS 对标 CSS，也被称为 Style.
    * LGPL licnese.
    * PySide6.QtWidgets 提供的 Widget 自带各种 Signal 和 Slot.
    * 
    * Signals are emitted by objects when they change their state in a way that may be interesting to other objects. This is all the object does to communicate. It does not know or care whether anything is receiving the signals it emits.
    * In simple terms, you can understand Signal and Slots in the same way you interact with the lights in your house. When you move the light switch (signal) you get a result which may be that your light bulbs are switched on/off (slot).
    * If you have experience with other frameworks or toolkits, it’s likely that you read a concept called ‘callback’. Leaving the implementation details aside, a callback will be related to a notification function, passing a pointer to a function in case it’s required due to the events that happen in your program. This approach might sound similar, but there are essential differences that make it an unintuitive approach, like ensuring the type correctness of callback arguments, and some others.


Examples:
    from PySide6 import QtWidgets, QtCore
    import sys

    app: QtWidgets.QApplication
    widget: QtWidgets.Widget
    widget.show()  # 只是显示窗口，还不能交互，因为事件循环还没启动
    sys.exit(app.exec())  # exec() 启动事件循环，等待，直到窗口退出



```

## PySide6.QtCore

```python
Description:
    * QtCore 模块是非 GUI 的核心库.


from PySide6 import QtCore

@QtCore.Slot()
    * 修饰函数，将其标记为 Slot（槽）.


```

## PySide6.QtWidgets

```python
from PySide6 import QtWidgets

.QWidget    控件
    * 所有 UI elements 都是 QWidget 直接或间接的实例.
    .show()
        * 显示控件.
    .setWindowTitle(s)
        s: str
        * 只用于窗口.
    .setStyleSheet(styleSheet)
        styleSheet: str
        * 设置 Style，类似 css.
    @overload
    .resize(width, height)
        w: int
        h: int
    @overload
    .resize(qs)
        qs: QtCore.QSize
    @overload
    .move(x, y)
        x: int
        y: int
        * 原点为左上角.
        * x 越大，向右移动.
        * y 越大，向下移动.
    @overload
    .move(qp)
        qp: QtCore.QPoint


.QVBoxLayout    「垂直盒子」布局管理器
    .addWidget(widget)
        widget: QtWidgets.QWidget
        * 添加控件.


.QPushButton    按钮控件
    @overload
    .__init__()
        text: str
            * 按钮文本.
    @overload
    .__init__()
        icon
            * Union[PySide6.QtGui.QIcon, PySide6.QtGui.QPixmap]
            * 按钮图标.
        text: str
            * 按钮文本.
    .clicked.connect(slot) -> QMetaObject.Connection
        * signal 连接到 slot.
        * connect() returns a QMetaObject.Connection object, which can be used with the disconnect() method to sever the connection.


.QLabel    标签控件
    @overload
    .__init__()
        text: str
            * 标签文本.
    @overload
    .__init__()
    .setText(s)
        s: str
        * 设置标签文本.


```