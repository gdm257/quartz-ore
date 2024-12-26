---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## VNote

    永远的 VNote 2.8.2


记忆布局

有时候布局死都记忆不了，每次退出就重置，神烦。花了点时间尝试，最后发现「菜单栏 - 文件 - 设置 - 重置布局」，然后完全退出、打开、调整布局、完全退出、再次打开，这时记忆布局生效了。


VNote 3.9 考察

总结：巨差评，体验不升反降，新功能基本没有，完成度远不如 2.8 版本，用得恼火，已删。

1. 主题：2.x 的主题无法使用了。但 3.x 自带主题就 3 个，需要自己重写，很麻烦。
2. 笔记本机制：依旧需要文件作索引，机制类似 emby。第一，每个笔记本的所有文件夹下都有一个 `vx.json` 文件（包括根文件夹），目测是当前文件夹的文件索引；第二，根文件夹下生成了一个 `vx_notebook` 文件夹，里边有 2 个文件，`notebook.db` SQLite 文件、`vx_notebook.json` 笔记本配置文件。
3. vx.json：会记录当前文件夹有哪些子文件夹（仅本层）。不会记录有哪些文件，所以可以随意在文件管理器中删除、新建、修改文件。
4. notebook.db：有 3 张表，用于索引 tag、文件夹、文件。表的设计类似 YACReader，给每个 folder、file 一个 id。所有的文件夹都会纳入，但只有部分文件被记录，规则不明，目测是按照扩展名，包括 .md .txt .git .config .py .js .css .html .cpp .zip etc
5. VNote 左侧导航窗口能看到所有文件及文件夹（笔记本配置文件除外）。由于机制，所有 folder 都已经被记录，并自带热更新，完全不用顾忌，该怎么用怎么用。但 file 就不同了，默认只有部分文件被记录（按一定的规则，会热更新），没有被记录的文件也能在导航中看见，但会被置顶且图标是暗色的，已被记录的文件的图标是亮色的。如果打开一个暗色图标的文件，这个文件就会被记录，图标变亮。
6. 点评索引系统：依旧差评，几乎没有改善。实际上 VNote 3.x 的这种索引是重复的。`vx.json` `notebook.db` 拥有的内容完全一致，只不过是不同的存储方式罢了。因此 vx.json 完全是多余的，数据库文件就够用了。文件的自动导入规则也莫名其妙。
7. 打开文件默认是「阅读模式」，没法设置成「编辑模式」！
8. 性能不怎么样，虽然打开、切换模式变快了，但用起来一顿一顿的，不流畅，比如选字。
9. 侧栏字体变小了，且不能调，差评。
10. 「浏览器」被阉割了，彻底差评。
11. 光标各种乱飞，体检巨幅下降，差评。



#### 1. VNoteの阅读模式の代码块の自动换行+缩进

0. 原理：给 code 标签改下 css 样式，[谈谈如何用CSS处理文本格式](https://segmentfault.com/a/1190000004212980)


1. 自己复制个默认主题，重命名文件夹为自定义的主题名字，我这里叫 noir，再将文件夹里的 `xxx.palette` 重命名为 `noir.palette`。别重命名其他文件！

2. 修改 `C:\Users\<username>\AppData\Roaming\vnote\themes\<themeName>\v_detorte_codeblock.css`

3. `pre code` 字段中修改 `white-space: pre;` 为 `white-space: pre-wrap;` 如

```css
pre code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #DADADA;
    background-color: #4A4A4A;
    border-left: .5em solid #865E1B;
    line-height: 1.5;
    font-family: Consolas, Monaco, Monospace, Courier;
    white-space: pre-wrap;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}
```


#### 2. VNoteのdetorte 主题魔改

##### detorte/v_detorte.css

```css
body {
    margin: 0 auto;
    font-family: "Segoe UI", Helvetica, sans-serif, Tahoma, Arial, Geneva, Georgia, Palatino, "Times New Roman", "Hiragino Sans GB", "冬青黑体", "Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI", "WenQuanYi Micro Hei", "文泉驿雅黑", Dengxian, "等线体", STXihei, "华文细黑", "Liberation Sans", "Droid Sans", NSimSun, "新宋体", SimSun, "宋体";
    color: #DADADA;
    line-height: 1.5;
    padding: 15px;
    background: #444444;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
    color: #E0E0E0;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
}

p {
    padding: 0;
    margin-top: 16px;
    margin-bottom: 16px;
}

h1 {
    text-align: center;
    font-size: 2.4em;
    padding-bottom: 1em;
    border-bottom: 3px double #eee;
}

h2 {
    text-align: center;
    font-size: 1.8em;
}

h2::after {
    border-bottom: 1px solid #E0E0E0;
    content: "";
    width: 80px;
    display: block;
    margin: 0px auto;
    height: 1px;
    position: relative;
    right: 10px;
}

h3 {
    font-size: 22px;
}

h4 {
    font-size: 20px;
}

h5 {
    font-size: 19px;
}

h6 {
    font-size: 18px;
}

a {
    color: #61AFEF;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    word-break: break-all;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #BA68C8;
}

ul, ol {
    padding: 0;
    padding-left: 24px;
}

li {
    line-height: 24px;
}

li ul, li ol {
    margin-left: 16px;
}

p, ul, ol {
    font-size: 16px;
    line-height: 24px;
}

mark {
    color: #000000;
    background-color: #D8D800;
}

pre {
    display: block;
    overflow-y: hidden;
    overflow-x: auto;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}

code {
    font-family: Consolas, Monaco, Monospace, Courier;
    color: #98C379;
    word-break: break-all;
}

pre code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #DADADA;
    background-color: #4A4A4A;
    border-left: .5em solid #865E1B;
    line-height: 1.5;
    font-family: Consolas, Monaco, Monospace, Courier;
    white-space: pre-wrap;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}

pre code.markdown-metadata {
    border-left: .5em solid #D89F3E;
}

aside {
    display: block;
    float: right;
    width: 390px;
}

blockquote {
    color: #BCBCBC;
    background-color: #4A4A4A;
    border-left: .5em solid #8A8A8A;
    padding: 0 1em;
    margin-left: 0;
}

blockquote p {
    color: #BCBCBC;
}

hr {
    display: block;
    text-align: left;
    margin: 1em 0;
    border: none;
    height: 2px;
    background: #8A8A8A;
}

table {
   padding: 0;
   margin: 1rem 0.5rem;
   border-collapse: collapse;
}

table tr {
   border-top: 2px solid #8A8A8A;
   margin: 0;
   padding: 0;
}

table tr th {
   font-weight: bold;
   border: 2px solid #8A8A8A;
   margin: 0;
   padding: 6px 13px;
}

table tr td {
   border: 2px solid #8A8A8A;
   margin: 0;
   padding: 6px 13px;
}

table tr th :first-child, table tr td :first-child {
   margin-top: 0;
}

table tr th :last-child, table tr td :last-child {
   margin-bottom: 0;
}

div.mermaid-diagram {
    margin: 16px 0px 16px 0px;
    overflow-y: hidden;
    background: #949494;
    color: #222222;
}

div.flowchart-diagram {
    padding: 0px 5px 0px 5px;
    margin: 16px 0px 16px 0px;
    width: fit-content;
    overflow: hidden;
    background: #949494;
    color: #222222;
}

div.wavedrom-diagram {
    padding: 0px 5px 0px 5px;
    margin: 16px 0px 16px 0px;
    width: fit-content;
    overflow: hidden;
    background: #949494;
    color: #222222;
}

div.plantuml-diagram {
    padding: 5px 5px 0px 5px;
    margin: 16px 0px 16px 0px;
    width: fit-content;
    overflow: hidden;
    background: #949494;
    color: #222222;
}

.img-package {
    text-align: center;
}

img.img-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

span.img-caption {
    min-width: 20%;
    max-width: 80%;
    display: inline-block;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #767676;
    color: #BCBCBC;
    text-align: center;
    line-height: 1.5;
}

.emoji_zero,.emoji_one,.emoji_two,.emoji_three,.emoji_four,.emoji_five,.emoji_six,.emoji_seven,.emoji_eight,.emoji_nine {
    margin-left: 5px;
    margin-right: 8px;
}

div.preview-hint {
    opacity: 0.5;
    margin-top: 30%;
    margin-bottom: 30%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* For Highlight.js Line Number */
table.hljs-ln tr {
    border: none;
    background-color: transparent;
}

table.hljs-ln tr td {
    border: none;
    background-color: transparent;
}

table.hljs-ln tr td.hljs-ln-numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-align: center;
    color: #767676;
    border-right: 1px solid #767676;
    vertical-align: top;
    padding-right: 5px;
    white-space: nowrap;
}

table.hljs-ln tr td.hljs-ln-code {
    padding-left: 10px;
}

::-webkit-scrollbar {
    background-color: #444444;
    width: 14px;
    height: 14px;
    border: none;
}

::-webkit-scrollbar-corner {
    background-color: #444444;
}

::-webkit-scrollbar-button {
    /* This selector affects the styling of both the up & down and left & right buttons of a scrollbar */
    height: 14px;
    width: 14px;
    background-color: #444444;
}

::-webkit-scrollbar-button:hover {
    background-color: #666666;
}

::-webkit-scrollbar-button:active {
    background-color: #606060;
}

::-webkit-scrollbar-track {
    /* This selector affects the styling of the area in the scrollbar between the two buttons */
    background-color: #444444;
}

::-webkit-scrollbar-thumb {
    /* This selector affects the styling of draggable element of the scollbar */
    border: none;
    background-color: #585858;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
}

::-webkit-scrollbar-thumb:active {
    background-color: #606060;
}

::-webkit-scrollbar-button:horizontal:increment {
    background-image: url(right.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url(left.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

::-webkit-scrollbar-button:vertical:increment {
    background-image: url(down.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

::-webkit-scrollbar-button:vertical:decrement {
    background-image: url(up.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

::selection {
  background: #8CBAE8;
  color: #DADADA;
}

```


##### Title

```css

h1, h2, h3, h4, h5, h6 {
    color: #8ABCD1;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
}

h1 {
    font-size: 26px;
}

h2 {
    font-size: 24px;
}

h3 {
    font-size: 22px;
}

h4 {
    font-size: 20px;
}

h5 {
    font-size: 19px;
}

h6 {
    font-size: 18px;
}
```