---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## SumatraPDF

参考

[SumatraPDF 高级设置 – 小恐龙工作坊](https://xkonglong.com/sumatrapdf/)

菜单 - 设置 - 高级选项

绿色版,配置文件保存在程序所在文件夹
%APPDATA%\SumatraPDF\SumatraPDF-settings.txt

- Shortcuts
    - `i` 反色（黑暗模式）


```js
// 无文档时,窗口的背景色,默认为黄色
MainWindowBackground = #fff200
// 是否允许用 Esc 键退出 SumatraPDF
EscToExit = false

// 是否用现有窗口打开文档
ReuseInstance = false

// 是否使用系统颜色显示 背景/文本色

UseSysColors = false

// 启动时是否恢复会话
RestoreSession = true

// 自定义 PDF, XPS, DjVu 和 PostScript 的 UI 界面

FixedPageUI [
    // 文本色,默认为黑

    TextColor = #000000

// 背景色,默认为白

    BackgroundColor = #ffffff

// 选定文本色
    SelectionColor = #f5fc0c

// 文档在窗口中显示时的上,右,下,左边距
    WindowMargin = 2 4 2 4

// 书籍模式双页显示时,水平和垂直间距
    PageSpacing = 4 4

//梯度渐变色,只支持三种颜色. 实验性, 也许对继续阅读有帮助.

//通常建议为: #2828aa #28aa28 #aa2828
    GradientColors =
]

// 电子书(EPUB, Mobi, FictionBook)的 UI 界面定制选项.

// 若 UseFixedPageUI 为 True 时使用默认配置.
EbookUI [
//字体名称.重新打开文档后生效
    FontName = 霞鹜文楷等宽

//字体大小.重新打开文档后生效
    FontSize = 12.5

//文本色
    TextColor = #5f4b32

//页面背景色
    BackgroundColor = #fbf0d9

// 如果为 True, 电子书也将使用 PDF 文档的默认配置

//(开启打印和搜索,禁用自动 reflow)
    UseFixedPageUI = false
]

//漫画书和图片的 UI 界面定制选项
ComicBookUI [
// 文档在窗口中显示时的上,右,下,左边距
    WindowMargin = 0 0 0 0

// 书籍模式双页显示时,水平和垂直间距
    PageSpacing = 4 4

// 如果为 True, 默认显示漫画书文件为漫画模式

// (一次性从右向左显示2页)
    CbxMangaMode = false
]

// CHM 文件定制选项.
ChmUI [
//若为真,界面将使用默认的 PDF 文档风格
    UseFixedPageUI = false
]

//各种文件类型的附加外部查看器列表（可以有多个条目格式）
ExternalViewers [
[
//命令行的调用外部查看器，可以用 %p 页号和 “%1” 文件名（在包含空格的路径中添加引号）
    CommandLine =

//菜单中显示外部查看器的名称
Name =打开对话框的过滤选项,要指定支持的文件类型,多个项目使用;分割,不要包含任何空格 (比如 *.pdf;*.xps)
Filter =
]
]

//是否显示菜单栏,可以使用 F9 或 ALT
ShowMenubar = true

//文件更改后是否自动重载 

//(目前还不支持工作在 ebook UI 模式)

//(introduced in version 2.5)
ReloadModifiedDocuments = true

//标题栏是否显示完整路径 (introduced in version 3.0)
FullPathInTitle = false

//缩放比例的间隔 介于 8.33 和 6400 之间
ZoomLevels = 8.33 12.5 18 25 33.33 50 66.67 75 100 

125 150 200 300 400 600 800 1000

//缩放比率的步长,如果为0,则使用默认
ZoomIncrement = 0

//设置打印对话框的默认选项
PrinterDefaults [
默认值是 scaling (shrink, fit, none)
PrintScale = shrink
]

//自定义显示搜索结果 (used from LaTeX editors)
ForwardSearch [

//当设置为正数值时，将向前搜索高亮样式改为矩形.

//在页面的左边（从页边空白处注明）
    HighlightOffset = 0

//高亮选区的高度 (if HighlightOffset is > 0)
    HighlightWidth = 15

//高亮搜索的颜色
    HighlightColor = #6581ff

//为真时一直显示高亮
    HighlightPermanent = false
]

//一个空格分隔的密码尝试打开受密码保护的文件时

//（必须输入包含空格的密码时）

//(introduced in version 2.4)
DefaultPasswords =

//自定义主屏幕 DPI

//（如果这个值不是正数，将使用系统的UI设置 

// (introduced in version 2.5)
CustomScreenDPI = 0

//是否为每个文档保存显示配置
RememberStatePerDocument = true

// 当前 UI 的语言, 使用 ISO 码
UiLanguage =

//是否显示工具栏
ShowToolbar = true

//是否侧栏显示收藏夹
ShowFavorites = false

// SumatraPDF 关联的文件格式扩展名 (e.g. “.pdf .xps .epub”)
AssociatedExtensions =

//是否自动应用文件扩展名关联
AssociateSilently = false

// 是否每天检测一次更新
CheckForUpdates = true

//要忽略更新的版本
VersionToSkip =

//是否记住上次打开的文档
RememberOpenedFiles = true

//反向搜索时启动 LaTeX 编辑器
InverseSearchCmdLine =

//是否增强的 LaTex 反向搜索
EnableTeXEnhancements = false

//默认的页面布局.

//有效值: automatic, single page, facing, book view, 

//continuous, continuous facing, continuous book view
DefaultDisplayMode = automatic

//默认缩放模式 使用比例(in %) 或下述值:

// fit page, fit width, fit content
DefaultZoom = fit page

//默认窗口状态. 1 is normal, 2 is maximized, 

//3 is fullscreen, 4 is minimized
WindowState = 1

//默认窗口位置(x,y)和尺寸(宽,高)
WindowPos = 0 0 0 0

//对于支持解析的文档, 在侧栏显示目录标签(书签)
ShowToc = true

//侧栏宽度 favorites/bookmarks
SidebarDx = 0

//如果收藏夹和书签侧边栏部分可见，这就是书签的高度（目录表）部分
TocDy = 0

//是否显示启动页面
ShowStartPage = true

//是否使用标签模式
UseTabs = true

//打开文件的信息
FileStates [
[
//文档路径
    FilePath =

//为书签/收藏夹保留的值
    Favorites [
[
收藏夹在菜单中显示的名称
Name =

//书签页面数值
        PageNo = 0

//页面标签
        PageLabel =
]
]

//文档列表项目是否可以使用固定
    IsPinned = false

//文档列表项目是否可以隐藏
    IsMissing = false

//是否记录文档打开次数
    OpenCount = 0

//再次打开加密文档时,是否询问密码
    DecryptionKey =

//打开文件是否使用通用对话框
    UseDefaultState = false

//页面布局.

//有效值为: automatic, single page, facing, book view,

//continuous, continuous facing, continuous book view
    DisplayMode = automatic

//文档滚动距离 (in x and y direction)
    ScrollPos = 0 0

//上次阅读页面的编号
    PageNo = 1

//缩放比例或有效值: fit page, fit width, fit content
    Zoom = fit page

//页面旋转角度, 90 度递增
    Rotation = 0

//窗口状态. 1 is normal, 2 is maximized,

// 3 is fullscreen, 4 is minimized
    WindowState = 0

//默认位置 (可以任意显示器)
    WindowPos = 0 0 0 0

//是否显示书签
    ShowToc = true

//侧栏宽度
    SidebarDx = 0

//漫画模式,只限于漫画书
    DisplayR2L = false

//在电子书UI中恢复上次读取页所需的数据
    ReparseIdx = 0

//需要确定表的哪些部分已展开的数据.
    TocState =
]
]

//保存上次会话,用于崩溃时恢复会话

// (introduced in version 3.1)
SessionData [
[
//data required for restoring the view state of a single tab
    TabStates [
[
//path of the document
        FilePath =

//same as FileStates -> DisplayMode
        DisplayMode = automatic

//number of the last read page
        PageNo = 1

//same as FileStates -> Zoom
        Zoom = fit page

//same as FileStates -> Rotation
        Rotation = 0

//how far this document has been scrolled (in x and y direction)
        ScrollPos = 0 0

//如果为真，该文件被关闭时表现出表的内容
        ShowToc = true

//same as FileStates -> TocState
        TocState =
]
]

//当前选择的标签序列 ( 1 为基数)
    TabIndex = 1

//同步 FileState -> WindowState
    WindowState = 0

//默认位置
    WindowPos = 0 0 0 0

//侧栏关闭时的宽度
    SidebarDx = 0
]
]

//自动更新后重载文档的数据请求

//(introduced in version 3.0)
ReopenOnce =

//上次更新时间
TimeOfLastUpdateCheck = 0 0

//在历史记录中保存打开次数
OpenCountWeek = 0

```