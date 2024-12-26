---
aliases:
  - Visual Studio Code
frontmatter-as-page:
  - vscode
scoop: vscode
tags:
  - flag/License/MIT
  - flag/APP/Text
  - flag/APP/Network
  - flag/APP/Layer
  - flag/APP/DevOps/IDE
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/LANGUAGE/Bash
  - flag/LANGUAGE/C
  - flag/LANGUAGE/CPP
  - flag/LANGUAGE/CSharp
  - flag/LANGUAGE/CMD
  - flag/LANGUAGE/CSS
  - flag/LANGUAGE/Go
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/Java
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/Markdown
  - flag/LANGUAGE/Markmap
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/PowerShell
  - flag/LANGUAGE/Perl
  - flag/LANGUAGE/R
  - flag/LANGUAGE/Rust
  - flag/LANGUAGE/Ruby
  - flag/LANGUAGE/TypeScript
  - flag/LANGUAGE/TeX
  - flag/Feature/remote-development
  - flag/Feature/debugger
  - flag/Feature/plugin-system
  - flag/Feature/plugin-market
  - flag/Feature/workspace
  - flag/Feature/tabs
  - flag/Feature/groups
  - flag/Feature/LSP
  - flag/Feature/syntax-highlight
  - flag/Feature/snippets
  - flag/Feature/command-palette
  - flag/Feature/jump
  - flag/Feature/keybindings
  - flag/Feature/theme
  - flag/Feature/color-scheme
  - flag/Feature/font
files:
  - .vscode/
---

### Brief

[viatsko/awesome-vscode: 🎨 A curated list of delightful VS Code packages and resources.](https://github.com/viatsko/awesome-vscode)

[Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)

[Refactoring source code in Visual Studio Code](https://code.visualstudio.com/docs/editor/refactoring)

[Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)

[Tasks in Visual Studio Code](https://code.visualstudio.com/docs/editor/tasks)

[Connect over SSH with Visual Studio Code](https://code.visualstudio.com/docs/remote/ssh-tutorial)

[Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

[VSCode 终端设置|极客教程](https://geek-docs.com/vscode/vscode-tutorials/vscode-terminal-settings.html)

[Integrated Terminal in Visual Studio Code](https://code.visualstudio.com/docs/editor/integrated-terminal)

[Visual Studio Code变量参考_acktomas的博客-CSDN博客_vscode内置变量](https://blog.csdn.net/acktomas/article/details/102851702)

[vscode美化方法以及定制主题插件 - tnnmigga - 博客园](https://www.cnblogs.com/TAMING/p/9766377.html)

[VSCode 等宽字体之坑 - 神代綺凜の萌化小基地](https://moe.best/gotagota/vscode-monospaced.html)

- Installation
    - `scoop install vscode`

- Features
    - Debugging
        - `.vscode/launch.json`
            - Launch mode
            - Attach mode
        - Different from Task
            - Debugging supports `Run and Debug` view
            - Debugging supports `DEBUG CONSOLE` panel
    - Task
        - `.vscode/task.json`
        - Pack
        - Build
        - Test
        - Custom CLI and script
    - IntelliSense
        - Sugest widget
            - `Ctrl + Space` trigger IntelliSence
            - `.` (trigger character)
        - Suggestions
            - come with JavaScript, TypeScript, JSON, HTML, CSS, SCSS, and Less
            - extensions for more suggestions
            - extensions for other languages
            - AI
        - Suggestion info
            - `Ctrl + Space`
            - aka quick info
        - Suggestion selection
            - typing characters
            - `editor.suggestSelection` policy
            - `<Arrow key>`
        - Suggestion insertion
            - `Enter`
            - `Tab`
            - `Tab` (without suggest widget)
    - Snippets
    - Emmet
    - Code Actions
        - Refactoring
            - `Ctrl+.`
            - `Ctrl+Shift+R`
            - Extract Method
            - Extract Variable
            - `F2` Rename symbol
        - Quick Fixes
            - `Ctrl+.`
    - Extension
    - Profile
    - CLI

- User Interface
	* Menu Bar
	* Activity Bar
	* Primary Side Bar
	* Second Side Bar
	* Editor Groups
	* Panel
	* Status Bar
	* Command Panel

- Configuration
	* 便携模式
	(Windows/Linux) data/
		User/
			settings.json
	(macOS) code-portable-data/
	* 非便携模式
	(Windows) %APPDATA%/Code
		User/
		...
	- (Linux) ~/.config/Code
	- (macOS) ~/Library/Application Support/Code
	* Workspace 项目级配置
	.vscode/
		settings.json
		...

- Description
	* VSCode 是一个轻量、灵活、强大的代码编辑器
	* VSCode 基于 Electron
	* VSCode 能胜任几乎所有语言的开发
	* VSCode 开源免费，由微软维护，是世界上最火的开源编辑器
	* VSCode 有着最完善、丰富的第三方插件市场
	* VSCode 前端首选
	* VSCode 支持 远程开发（首选）

- Pro
    - 

- Con
	* VSCode 不支持 文件级重构
	* VSCode 不支持 [[Android SDK]] 开发，不用折腾了，这已经是折腾后的结论

| Completion type of IntelliSence | Symbol type                   |
| ------------------------------- | ----------------------------- |
| Methods and Functions           | method, function, constructor |
| Variables                       | vari able                     |
| Fields                          | field                         |
| Type parameters                 | typeParameter                 |
| Constants                       | constant                      |
| Classes                         | class                         |
| Interfaces                      | interface                     |
| Structures                      | struct                        |
| Events                          | event                         |
| Operators                       | operator                      |
| Modules                         | module                        |
| Properties and Attributes       | property                      |
| Values and Enumerations         | value, enum                   |
| References                      | reference                     |
| Keywords                        | keyword                       |
| Files                           | file                          |
| Folders                         | folder                        |
| Colors                          | color                         |
| Unit                            | unit                          |
| Snippet prefixes                | snippet                       |
| Words                           | text                          |


### CLI

```bash
code command
Usage:
    code [options] [path...]

Subcommands:
    # Extensions Management
    --list-extensions
        --show-versions
        --category <category>
    --install-extension <ext_id|vsix_file>
        --pre-release
    --uninstall-extension <ext_id|vsix_file>

```


### API

- References
    - [VSCode插件开发全攻略（一）概览-好记的博客](http://blog.haoji.me/vscode-plugin-overview.html)


### Command

`ext install <ext_id|vsix_file>`

### Language Support

<iframe src="https://code.visualstudio.com/docs/languages/identifiers#_known-language-identifiers" allow="fullscreen" allowfullscreen="" style="height: 100%; width: 100%; aspect-ratio: 1 / 1;"></iframe>

### Bug

1. 使用 Python 虚拟环境的解释器来 Debug 时报错 `Invalid message: Found duplicate in "env": PATH.`，全局 Python 解释器就能正常 Debug
    - [Using Python Environments in Visual Studio Code](https://code.visualstudio.com/docs/python/environments)
    - [如何让VScode运行Python代码时调用外部终端？ - 知乎](https://www.zhihu.com/question/426855041)
    - 我用全新的 VSCode + Python 扩展进行了测试，可以正常 Debug。说明这是我的配置有问题，需要进一步定位
    - 初步怀疑有两种可能
        1. Python 扩展在运行 Python 文件之前，需要先激活 Python 虚拟环境，而 [[virtualenvwrapper]] 环境激活脚本不支持在 bash 中运行。我的 VSCode 默认终端（terminal）是 [[MinGW64]] 的 bash，导致 Debug 失败
        2. Python 扩展的 Bug，无解
        - 经过测试，确认是第一种情况，即 Debug 失败是 VSCode 默认 terminal 为 bash 所导致的
        - 解决方法：更改 VSCode 默认终端为 [[cmd|cmd.exe]] 或 [[pwsh|powershell]] `"terminal.integrated.defaultProfile.windows": "PowerShell",`。这对我来说是不可接受的，cmd 太过垃圾，powershell 太过复杂，还是 [[Bash|bash]] 用着爽……然而无解，更改默认 terminal 是唯一的解决办法，想用 bash，可以手动执行 `sh` 命令，因为 git for windows 的 `sh.exe` 与 `bash.exe` 是相同文件

2. VSCode 打开单个 `.py` 文件时，提示和补全功能无法正常使用，一直显示 "loading"
3. 


### Debugging

[Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

## Configuration

### portable

[Portable Mode in Visual Studio Code](https://code.visualstudio.com/docs/editor/portable)


可以自己创建 user-data 和 extensions，像下面这样，只要这两个文件夹存在，VSCode 就不会使用用户文件夹的数据，从而实现真正的绿色化、便捷化。

By default, the default `TMP` directory is still the system one even in Portable Mode, since no state is kept there. If you wish to also have your TMP directory within your portable directory, you can create an empty `tmp` directory inside the `data` folder. As long as a `tmp` directory exists, it will be used for TMP data.

```
|- VSCode-win32-x64-1.25.0-insider
|   |- Code.exe (or code executable)
|   |- data
|   |   |- user-data
|   |   |   |- ...
|   |   |- extensions
|   |   |   |- ...
|   |- ...
```

Copy the user data directory `Code` to `data` and rename it to `user-data`:
- **Windows** `%APPDATA%\Code`
- **macOS** `$HOME/Library/Application Support/Code`
- **Linux** `$HOME/.config/Code`

Copy the extensions directory to `data`:
- **Windows** `%USERPROFILE%\.vscode\extensions`
- **macOS** `~/.vscode/extensions`
- **Linux** `~/.vscode/extensions`


### shortcut

[纯统计 各路用 vscode 的 v 友们有哪些快捷键是自己常用的呢(提高生产效率) - V2EX](https://www.v2ex.com/t/668916)

[Code Navigation in Visual Studio Code](https://code.visualstudio.com/docs/editor/editingevolved)

[VSCode 又酷又实用的多光标编辑 - V2EX](https://v2ex.com/t/843239)

[VSCode Neovim | Yusong](https://blog.yusong.me/terminal/vim/vscode-neovim)

[VSCode Neovim插件配置——将VSCode作为Neovim的GUI客户端 | 止息'幻想乡](https://zhangjk98.xyz/vscode-neovim-setting/)

【自定义快捷键】
c P    Show All Commands 命令面板
a P    Show All Commands 命令面板
c B    Go to Definition 跳转到定义或引用
c D    Duplicate Selection
a W    Expand Selection，类似idea的 c W，选择层级代码，选的越来越多
a s W    Shrink Selection，选的越来越少
a K + H    Trigger Suggest 触发提示
a K + P    Trigger Parameter Hints
命令面板 - keyboard shortcuts - 搜索 user 来查看查看用户自定义的快捷键



【自带快捷键】
~~c B => 开关侧栏~~
c L => 选中本行
c D => 选中上一个单词
c / => 切换行注释
c . => 修复问题
c Home => 跳到第一行
c End => 跳到最后一行
c Space => trigger IntelliSense
    c Space => see quick info
    Enter => insert suggetion
    Tab => insert suggetion (tab completion)
Tab => insert the best suggetion (tab completion)
c s M => Problem
c s U => Output
c s X => Extentions
c s Y => Debug Console
c s \ => Jump to matching bracket 括号对跳转
c s [    fold
c s ]    Unfold
a s 1 => 聚焦到编辑器
a s A => 切换块注释
c s L => 搜索时选择所有匹配的文本
F12 => Go to Definition
s F12 => Go to References
c F12 => Go to Implementations


【方向键有关的快捷键】
记忆要点：
我用得着的快捷键里，带 shift 的都是「选择」
我用得着的快捷键里，带 alt 才需要特别记忆
alt 上下    已经记住了
alt shift 左右    类似idea的ctrl w选择
alt ctrl 上下    创建多光标

s ARROW    选择
a ↑    将当前行移动到上一行
a ↓    将当前行移动到下一行
a ←    返回之前的跳转
a →    跳转到下一级
a s →    Expand Selection，类似idea的 c W，选择层级代码，选的越来越多
a s ←    Shrink Selection，选的越来越少

a c ↑    方向键↑，但是多光标
a c ↓    方向键↓，但是多光标
【MetaGo】
Ctrl Alt ,    添加一个光标到 指定字符之前
Ctrl Alt .    添加一个光标到 指定字符之后
Ctrl Alt /    添加一个光标到 指定字符之后
Shift Alt ,    选择 from 当前光标 to 指定字符之前
Shift Alt .    选择 from 当前光标 to 指定字符之后
Shift Alt /    选择 from 当前光标 to 指定字符之后
Alt ,    跳转到 指定字符之前
Alt .    跳转到 指定字符之后
Alt /    跳转到 指定字符之后
Alt T    滚动当前行到 屏幕顶部
Alt M    滚动当前行到 屏幕中间
Alt B    滚动当前行到 屏幕底部




~~View: Toggle Editor Area Visibility~~    最恶心的命令！！！editor 直接不见了，而且无！法！恢！复！只能手动去 `data/user-data/User/workspaceStorage` 删除对应的 workspace 文件夹，至于是哪个文件夹？没什么好方法，请你根据修改时间、创建时间自行判断。当然，也可以都删了，workspace 配置不是什么宝贵数据，删除完全没有任何问题。


{
    "workbench.panel.pinnedPanels-原来的没问题的 UI State": {
        "version": 1,
        "value": "[{\"id\":\"terminal\",\"name\":\"Terminal\",\"pinned\":true,\"order\":3,\"visible\":true},{\"id\":\"workbench.view.extension.gitlensPanel\",\"name\":\"GitLens\",\"pinned\":false,\"order\":6,\"visible\":true},{\"id\":\"workbench.view.extension.jupyter-variables\",\"name\":\"Jupyter\",\"pinned\":true,\"order\":7,\"visible\":false},{\"id\":\"refactorPreview\",\"name\":\"Refactor Preview\",\"pinned\":true,\"visible\":false},{\"id\":\"workbench.panel.repl\",\"name\":\"Debug Console\",\"pinned\":true,\"order\":2,\"visible\":true},{\"id\":\"workbench.panel.markers\",\"name\":\"Problems\",\"pinned\":true,\"order\":0,\"visible\":true},{\"id\":\"workbench.panel.output\",\"name\":\"Output\",\"pinned\":true,\"order\":1,\"visible\":true}]"
    },
    "workbench.panel.pinnedPanels-fuck": {
        "version": 1,
        "value": "[{\"id\":\"terminal\",\"name\":\"Terminal\",\"pinned\":true,\"order\":3,\"visible\":true},{\"id\":\"workbench.view.extension.gitlensPanel\",\"name\":\"GitLens\",\"pinned\":false,\"order\":6,\"visible\":罪魁祸首！！！**false**},{\"id\":\"workbench.view.extension.jupyter-variables\",\"name\":\"Jupyter\",\"pinned\":true,\"order\":7,\"visible\":false},{\"id\":\"refactorPreview\",\"name\":\"Refactor Preview\",\"pinned\":true,\"visible\":false},{\"id\":\"workbench.panel.repl\",\"name\":\"Debug Console\",\"pinned\":true,\"order\":2,\"visible\":true},{\"id\":\"workbench.panel.markers\",\"name\":\"Problems\",\"pinned\":true,\"order\":0,\"visible\":true},{\"id\":\"workbench.panel.output\",\"name\":\"Output\",\"pinned\":true,\"order\":1,\"visible\":true}]"
    }
}

### Snippets

- Shortcuts
    - Emmet
        - `!`
        - `lorem`
        - `div*5`
        - `div.className`

### workspace

[Using Python Environments in Visual Studio Code](https://code.visualstudio.com/docs/python/environments#_environment-variable-definitions-file)


所谓的保存到「workspace」，其实就是保存到 <项目文件夹>/.vscode/。你可以把这个目录理解为「局部配置」，类似 git 的 .git/。

`.vscode` 对于大部分语言的大部分项目都不是必须的，或者说是不推荐的，所以，默认应该加入 `.gitignore`。用户需要的是简单易懂的文档，而非一个看不懂的 `.vscode` 文件夹。

- `launch.json` debugger settings
- `tasks.json` build instructions


环境变量:
- `Python (python.envFile): "${workspaceFolder}/.env"`

### `.devcontainer/`

### Settings sync

[Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)


VSCode v1.66+ 已经自带设置同步功能：侧栏 - ⚙️Manage - Sign in to sync settings


### Settings interface

【缩放】

c、+
c、-


【字体】

settings - editor.fontFamily - `'JetBrains Mono', Sarasa Mono SC, monospace`

默认的是 `Consolas, 'Courier New', monospace`

只对 Markdown 文件生效：

```
{
    "[markdown]": {
        "editor.fontFamily": "'Sarasa Mono SC'"
    },
    ...
    ...
    ...
}
```




【侧栏】

将 outline 移动到 panel，再将 panel 移到右侧，即可完成 VNote 样式。不过 panel 最小宽度有点过宽。

侧栏调整字体大小：
建议调大 `"window.zoomLevel": 1.6,`，然后调小 `"editor.fontSize": 18,` `"debug.console.fontSize": 15,` `"markdown.preview.fontSize": 16,`

侧栏后台打开文件


【自动删除行尾空格】

"files.trimTrailingWhitespace": true,


【搜索】




### Settings proxy

settings - http.proxy

设置后，有时正常，有时无效（此时用的是系统代理）。

## Ecosystem

- References
    - [Langserver.org](https://langserver.org/)
    - [code-server/docs/requirements.md at main · coder/code-server](https://github.com/coder/code-server/blob/main/docs/requirements.md)

### EXT settings sync

【初次配置】

1. 去自己的 GitHub 设置里生成 Personal access token（生成选项只用勾选 `Gist`），记下来
2. 去 https://gist.github.com 新建一个私人 Gist，里边不需要写东西，你只要把 Gist id 记下来即可（在 url 里看得到，如 gist.github.com/luoyemengchen/xxxxxxxxxxxxxx）
3. token 和 id 都不要外传
4. vscode 里安装 settings sync
5. 按快捷键 s、a、U 或命令行 sync: Upadte 那条，会在 vscode 打开页面
6. 点击 configuration
7. 填好 Gist id 与 token，回车保存下，配置完成


【上传配置】

1. s、a、U，上传配置
2. 你可以在 https://gist.github.com 看到配置


【恢复配置】

1. 安装 settings sync
2. 设置，确保自动上传是关闭的
3. 配置 Gist id 和 token
4. s、a、D 或命令行 sync: download 那条，进行配置的下载


### EXT Bracket Pair Colorizer

扩展 Bracket Pair Colorizer 的功能已在 VSCode 内置，但我死活无法启动。

找到激活 VSCode 自带括号上色的方法了

显示括号对颜色 `editor.bracketPairColorization.enabled` 启用
括号对参考线 `editor.guides.bracketPairs` active
显示缩进参考线 `editor.guides.indentation` 启用
活动的缩进参考线 `editor.guides.highlightActiveIndentation` always


### EXT Code Runner

安装 Code Runner 扩展后，编辑器右上角有运行按钮，快捷键 Ctrl + Alt + N。

但运行 Python 代码时常常中文乱码，比较由雅的解决办法是设置环境变量 `PYTHONIOENCODING` 值为 `utf8`

也可以不用 Code Runner 而用侧栏的 Run & Debug。


1. Debug python 文件时弹窗报错 `Timed out waiting for launcher to connect`
侧栏 - Run & Debug - ⚙️按钮，即打开 `./.vscode/launch.json` - 将 `configurations.console` 的值从 `"integratedTerminal"` 改为 `"internalConsole"`
另外，不要用右上角的运行按钮，应该用 侧栏 - Run & Debug - 绿色运行按钮



### EXT WSL

WSL 中使用 VSCode 其实很简单。无需在 WSL 中安装 VSCode，只需要在 Windows 运行 VSCode，安装 WSL 相关扩展，通过扩展连接上 WSL。连接完成后会自动在 WSL 里安装 ~/.vscode-server（体积不到 200 M），接下来就能愉快的使用了，还免去了重新安装、配置的麻烦。

连接到 WSL 后有些扩展无法使用了，在扩展管理界面点击「Install in WSL」按钮即可，扩展会被安装到 WSL 的 ~/.vscode-server


### EXT icon

目前长期使用 VSCode Great Icons

VSCode Great Icons：高度统一，风格明亮向
Material Icon Theme：高度统一，风格朴素向
flatland icon theme：2 个图标，折叠的文件夹、展开的文件夹，没了
Chalice Icon Theme：极简线条，空心图案
其他也试了二十多种，只留下这 4 个



### EXT Markdown

Markdown Preview Enhanced 预览功能极强，数学公式、代码制图、代码块运行、自定义 CSS，应有尽有


### EXT LaTex

LaTeX Workshop（没什么可说的，使用 VSCode 写 LaTeX 的都会使用这个扩展）
LaTeX Utilities


### EXT Python

Python
Python Indent（自动缩进）
Python Snippets（内置许多 python 常用代码片段）
Python Docstring Generator
autopep8


### EXT Go

Go
~~Go Outliner~~
Go Doc


### EXT GUI

Vetur
Vue 3 Snippets


### EXT Debug

Remote-SSH
Remote-Containers（连接 docker 容器进行开发，然而还没搞清具体用法…）


### EXT 界面

Chinese
background `shalldie.background` (魔理沙~)
~~Bracket Pair Colorizer（VSCode 最新版已自带此功能）~~
Indent-Rainbow（彩虹缩进）
Trailing Spaces（高亮末尾空格）
Code Outline （显示代码大致结构）
shell-format（格式化）
Word Count CJK

注：background 会导致提示 `Your Code installation appears to be corrupt. Please reinstall`，直接不再显示就好，其实没什么问题。



### EXT 功能

我将安装量在 5w 以上的扩展过了一遍，已经找不到通用的插件了，以后安装插件估计全是某个语言有关的，要么就是编程才用得上的插件。

~~dotenv.dotenv-vscode~~    会让 jupyter 语法高亮失效
~~Settings Sync~~    请用 VSCode 自带的账号系统
daily-anime
Diff（比较）
RegExr List Tool（列出正则搜索的匹配结果）
Regex Copy or Cut（列出正则搜索的匹配结果的行）
Code Runner（快捷键直接运行代码文件）
Git Project Manager
GitLens
GitHistory
Git Graph
Docker（微软官方 Docker 扩展，支持建立、管理docker容器，Dockerfile 编写等功能）
MATLAB（代码高亮、代码片段、代码检查）
Project Manager（类似快速访问）
WakaTime（时间追踪）
SVG Viewer
Code Spell Checker
Remote - WSL
Bookmarks
Better Comments
MetaGo（光标快速跳转）
Log File Highlighter
Path Intellisense（路径补全）
Resource Monitor(系统资源占用)
LolyPond AutoComplete
LilyPond（语法高亮）
C/C++
Paste JSON as Code（JSON 转换成各语言的 dict/list 代码）
Native-ASCII Converter（Unicode \uFFFF 与正确字符的相互转换）
Dash (Zeal 文档)


### EXT Theme

> [!tldr]
> 2023.01 经过了近一年的使用，自带的 [[VSCode Monokai]] 主题绝对合格，对比度、饱和度看着轻松，总体非常舒服

> [!note]
> 曾长期使用 Chinolor Theme，写代码看着眼花

> [!note]
> Theme List
> - 我试了「theme」搜索结果的前几十项，筛选出这些
> - 没列出来的就是被淘汰了
> - 排名越前越推荐
> - 勉强能看如字面意思，实在不行才考虑

1. [[VSCode Monokai]]
2. [[Chinolor Theme]]
3. [[Monokai ST3]]
4. [[Monokai Pro]]
5. [[Firefox Theme for VS Code]]
6. New Moon Syntax Theme（勉强能看）
7. One Dark Pro（勉强能看）
8. Panda Theme （勉强能看）
9. Gruvbox Theme（勉强能看）
