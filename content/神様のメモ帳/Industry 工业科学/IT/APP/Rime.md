---
tags:
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- flag/APP/Text
---

[ayaka14732/awesome-rime: A curated list of Rime IME schemata | Rime 輸入法方案列表](https://github.com/ayaka14732/awesome-rime)

[lippmann/lrime: 自定义 Rime 带辅码自然码双拼输入法方案，由内置的「自然码双拼」、带辅码的「自然码 2000」 和「nihongo-r」日语输入方案综合而成。](https://github.com/lippmann/lrime)

[Selaube/rime-jp_sela: rime日文输入方案 japanese input method of rime](https://github.com/Selaube/rime-jp_sela)

[Rime/README.md at master · Cheng6774/Rime](https://github.com/Cheng6774/Rime/blob/master/README.md)

[Rime西米](https://bennyyip.github.io/Rime-See-Me/)

[CustomizationGuide · rime/home Wiki](https://github.com/rime/home/wiki/CustomizationGuide)

[Rime Academy • Rime方案製作詳解](https://rime-aca.tumblr.com/post/67241713724/rime%E6%96%B9%E6%A1%88%E8%A3%BD%E4%BD%9C%E8%A9%B3%E8%A7%A3)

[鼠须管生僻字过滤](https://placeless.net/blog/uncommon-chinese-character-in-rime)

[鼠须管配置 2019](https://placeless.net/blog/rime-squirrel-customization-2019)

[鼠须管输入法 傻瓜版配置 - 基于 rime_pro 增强包 - changsj - SegmentFault 思否](https://segmentfault.com/a/1190000005754706)

[在线打字测试（dazi.kukuw.com）](https://dazi.kukuw.com/)

[同文输入法 | sens](https://dj9399.github.io/post/%E5%90%8C%E6%96%87%E8%BE%93%E5%85%A5%E6%B3%95-%E7%9B%AE%E5%89%8D%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BA%94%E7%AC%94%E8%BE%93%E5%85%A5%E6%B3%95/)


#### Brief

- References
    - [RimeWithSchemata · rime/home Wiki](https://github.com/rime/home/wiki/RimeWithSchemata)

- Description
    - Rime 是一个跨平台的输入框架
    - Rime 发行版 才是我们平常所说的输入法
    - Rime distributions are differnt for each OS

- Installation
    - the version of librime bundled in weasel is out to date, please download librime and replace  `rime.dll` manually
    - [(Solved) librime 版本过旧导致 lua 脚本行为异常 \`reduce\_english\_filter.lua\` · Issue #681 · iDvel/rime-ice · GitHub](https://github.com/iDvel/rime-ice/issues/681)

- Configurations
    - 【小狼毫】Rime for Windows
        - `$weasel/data/` Global data directory
            - `weasel.yaml` 发行版设置
        - `$APPDATA/Rime/` User data directory
            - `weasel.custom.yaml` 用户级 发行版设置
    - 【中州韻】Rime for Linux/IBus
        - `/usr/share/rime-data/`
        - `~/.config/ibus/rime/`
    - librime
        - Global data directory (Do NOT change)
            - `default.yaml` 框架设置
            - `key_bindings.yaml`
            - `symbols.yaml`
            - `punctuation.yaml`
            - `<输入方案>.schema.yaml` 输入方案定义
            - `<输入方案>.dict.yaml` 输入方案的字典
        - User data directory
            - `default.custom.yaml` 用户级 框架设置
            - `user.yaml` 不用管
            - `installation.yaml`
                - `installation_id: str` 用于 区分不同设备
            - `sync/` 用于 多设备同步
            - `<输入方案>.schema.yaml`
                - 一般用于 定义全新的输入方案
            - `<输入方案>.custom.yaml`
                - 一般用于 覆盖发行版自带输入方案定义の设置
            - `<输入方案>.<topic>.dict.yaml` 输入方案的字典


#### `.custom.yaml` 补丁模式

[CustomizationGuide · rime/home Wiki](https://github.com/rime/home/wiki/CustomizationGuide)

[Configuration · rime/home Wiki](https://github.com/rime/home/wiki/Configuration)

```yaml
patch:
  "一級設定項/二級設定項/三級設定項": 新的設定值
  "另一個設定項": 新的設定值
  "再一個設定項": 新的設定值
  "含列表的設定項/@n": 列表第n個元素新的設定值，從0開始計數
  "含列表的設定項/@last": 列表最後一個元素新的設定值
  "含列表的設定項/@before 0": 在列表第一個元素之前插入新的設定值（不建議在補靪中使用）
  "含列表的設定項/@after last": 在列表最後一個元素之後插入新的設定值（不建議在補靪中使用）
  "含列表的設定項/@next": 在列表最後一個元素之後插入新的設定值（不建議在補靪中使用）
  "含列表的設定項/+": 與列表合併的設定值（必須爲列表）
  "含字典的設定項/+": 與字典合併的設定值（必須爲字典，注意YAML字典的無序性）
```


#### RIME

Rime 是一个输入法框架，这么说可能不好理解，说人话就是写了一半的程序，因为只写了一半，所以还不能运行。为什么只写了一半呢？因为 Rime 旨在提供一个通用的输入法框架，也就是能跨平台，要知道 Android APP 不能直接在 Windows 运行，所以不能直接写成一个完整的程序，而是只写了所有平台都通用的部分，之后可以由各个平台的开发者把这个框架实现成能运行的程序。Windows 是 Weasel（小狼毫），OSX 是 Squirrel（鼠须管），Android 是同文输入法，因为它们用了同一套框架，所以配置是可以通用的。

前面说了，各个平台的程序是不同开发者开发的，于是有可能这个平台有这项功能另一个平台没有，那么不同平台的配置必定会有不能共用的部分，例如输入法的外观、配色等，在 Windows 是 `weasel.custom.yaml`，OSX 是 `squirrel.custom.yaml`。而 default(.custom).yaml 就是通用的那部份。

`default.custom.yaml` 决定绝大部分设置。你可能会问，yaml 文件足足有几十个，为什么一个 default 决定大部分配置呢。简单地说，schema dict symbol 等配置其实都是 default 直接或间接导入的。

`default.custom.yaml` 定义了 schema_list（输入方案列表），在列表里的输入方案就会被导入，例如 luna_pinyin_samp，当然你可以自己修改导入其他方案，比如双拼、自然码、英语、繁中、日语、仓颉等。

`luna_pinyin_samp.custom.yaml` 是输入方案 luna_pinyin_samp 的配置文件，它定义了 `"translator/dictionary": luna_pinyin.extended`，意思是导入 luna_pinyin.extended 这个字典（词典、词库），即文件 `luna_pinyin.extended.dict.yaml`。对了，一般字典文件使用 `.dict.yaml` 后缀名。

`luna_pinyin.extended.dict.yaml` 不仅是一个字典，它还导入了 luna_pinyin.cn_en、luna_pinyin.computer、luna_pinyin.emoji 等多个字典，你可以在 import_tables 中修改。其实你可以把它们合并为一个字典，但按类型分为多个字典更方便以后的增删查改，这是种聪明的做法。

上面一系列行为用编程的 include 其实很好解释，default 文件 include 了多个 schema，schema 文件 include 了 extended.dict，extended.dict 文件 include 了多个 dict。

还有一个问题，那就是 xxx.yaml 与 xxx.custom.yaml 到底有什么关系？
这里有 2 种情况，第一种 xxx.custom.yaml 是对 xxx.yaml 进行局部修改，其余部分保持不变。可以理解为 xxx.yaml 文件 include（导入）了 xxx.custom.yaml。
第二种是 xxx.custom.yaml 完全取代 xxx.yaml，也就是程序会读取 xxx.custom.yaml 而无视 xxx.yaml。

上面只是说明了各个配置文件的关系，至于各个配置文件还能做什么、怎么写配置文件，请往下看。

0. Rime = 基础设置 + schema + dict + symbols + 用户习惯。
基础设置一般是 default(.custom).yaml 与 weasel(.custom).yaml，前者会设置 schema list，即输入方案，如 luna_pinyin_simp。
schema 直译是架构，这里的意思是输入方案，我们可以设置多个输入方案，比如简中、繁中、双拼等等，使用时可以自由切换，其文件一般是 <schema_name>.schema.yaml。<schema_name>.schema.yaml 可以导入 dict（词库）、symbols（符号设置），导入方式类似编程的 include。
dict 决定了你输入一段拼音后候选列表有哪些词。
symbols 可以自定义一些特殊输入，类似于搜狗输入法按「V + 数字键」，你也可以定制属于自己的按键。
dict 是固定的，用户用久了会积累下自己的词库、词频，即用户习惯，会被单独储存，可以作为对 dict 的补充。

1. Rime 所使用的配置文件在 用戶文件夾 及 共享文件夾。
重新部署：D:\Installer\Daily\Rime\weasel-0.14.3\WeaselDeployer.exe /deploy
用户文件夹：D:\Installer\Daily\Rime\weasel-0.14.3\WeaselServer.exe /userdir
用戶資料夾（默认）：%APPDATA%\Rime
用戶資料同步：D:\Installer\Daily\Rime\weasel-0.14.3\WeaselDeployer.exe /sync
用戶詞典管理：D:\Installer\Daily\Rime\weasel-0.14.3\WeaselDeployer.exe /dict
日志：%TEMP%\rime.weasel.XXXX
共享資料夾：安裝目錄\data
installation.yaml - 安裝信息。輸入法程序在首次運行及升級後寫入安裝、升級時間、程序版本等。
user.yaml - 用戶狀態信息。包括在 方案選單 選取的輸入方案、輸入法選項狀態如「中／西」「簡／繁」等
build/* - 快取文件。爲使輸入法程序高效運行，在部署過程中將配置、韻書等編譯爲機讀格式


2. 按照日誌的級別分爲 INFO / 信息、WARNING / 警告、ERROR / 錯誤。 後兩類應重點關注，如果新方案部署後不可用或輸出與設計不一致，原因可能在此。對設置的修改於重新佈署後生效。編譯新的輸入方案需要一段時間，此間若無法輸出中文，請稍等片刻。若部署完畢後，可以通過 Ctrl+` 喚出方案選單，輸入方案卻仍無法正常使用，可能是輸入方案未部署成功。請查看日誌文件定位錯誤。

3. 「修改」共享資料夾包含預設輸入方案的源文件。 這些文件屬於 Rime 所發行軟件的一部份，在訪問權限控制較嚴格的系統上對用戶是只讀的，因此謝絕軟件版本更新以外的任何修改。
要更改輸入方案裏面的選項，給輸入方案打補靪，通过 <方案名>.custom.yaml；
要更改全局選項，給 default.yaml 打補靪，通过 default.custom.yaml；
要更改「小狼毫」專屬的選項，如界面樣式，給 weasel.yaml 打補靪，通过 weasel.custom.yaml



#### weasel.custom.yaml

输入法基础设置一般是 default(.custom).yaml 与 weasel(.custom).yaml，前者会设置 schema list（输入方案），如 luna_pinyin_simp。至于为什么是两个文件而不是一个，你得去问开发者。

weasel.custom.yaml文件会根据你的命令修改weasel.yaml，所以，其实最终修改的还是weasel.yaml文件。

```yaml
patch:
"style/layout/border_width": 0
"style/layout/border": 0
"style/layout/margin_x": 12 #候选字左右边距
"style/layout/margin_y": 12 #候选字上下边距
"style/layout/hilite_padding": 12 #候选字背景色色块高度 若想候选字背景色块无边界填充候选框，仅需其高度和候选字上下边距一致即可
"style/layout/hilite_spacing": 3 # 序号和候选字之间的间隔
"style/layout/spacing": 10 #作用不明
"style/layout/candidate_spacing": 24 # 候选字间隔
"style/layout/round_corner": 0 #候选字背景色块圆角幅度
```



#### default.custom.yaml

```yaml
patch:
  menu:
  ascii_composer:
  punctuator:
  switcher:
  schema_list:
  key_binder:
```

标点是由luna_pinyin.custom.yaml文件规定从何处导入的。默认是从default.yaml文件中导入标点，那么我们可以为default.yaml打补丁。

```yaml
patch:
  # 自定义符号
  punctuator/symbols:
    "/gou" : ["√","✔"]
    "/cha" : ["✕","✖"]

```


#### symbols.yaml

导入 symbol.yaml，以使用 / 开头打印特殊字符

1. 创建个文件，名字自己想，如 my-symbols.yaml
2. luna_pinyin_simp.custom.yaml 补丁中，导入上面的 my-symbols，从而不导入默认的 symbols.yaml
3. 复制 symbols.yaml 中的所有内容到 my-symbols.yaml
4. 慢慢定制 my-symbols.yaml

```yaml
# luna_pinyin_simp.custom.yaml
patch:
  'punctuator/import_preset': mysymbols
  'recognizer/patterns/punct': "^/([a-z]+|[0-9])$"
```


我尝试 simp 导入 my-symbols，my-symbols 导入 default。大失败。

又尝试 simp 导入 default，（自带 half 的）default 导入 my-symbols。结果 default 确实有 half，并且还有 `import_preset: "my-symbols"`，但测试时发现，my-symbols 根本不起作用。或许是我写错了 symbols 格式？

感觉导入有很多坑，可以试一下这种形式（default.yaml 编译成功，但 symbols 没有效果）：

```yaml
# default.custom.yaml
patch:
  punctuator:
    half_shape:
    symbols:
      "/gou" : ["√","✔"]
      "/cha" : ["✕","✖"]
```

#### luna_pinyin_simp.custom.yaml

```yaml
patch:
  # 自定义符号
  "punctuator/import_preset" : symbols
  "recognizer/patterns/punct": "^/([A-Z|a-z]*|[0-9]|10)$"

  switches: #输入模式列表
```


#### nihongo-r

日文输入法来自 @天珩 设计的「nihongo-r」日文输入方案。日文输入法特殊符号输入方式：

つ → tsu、ん → n、片假名长音ー → q、促音っ → t


#### 用户习惯

在部署时，我们会选择输入方案，输入方案的配置文件可以选择候选字的词典，我姑且将之称为「初始字典」（本小节字典、词典、词库同义），初始字典决定了你输入一段拼音后，可能出现在候选列表里的词有哪些。但因为初始字典是固定的，用户用久了会慢慢积累一些自己的词语，可能是初始字典没有的，可能是初始字典有但词频更高的，输入法会默默记录下这些「用户习惯」，把这些数据存在「用户文件夹/luna_pinyin.userdb/」文件夹中。它们会作为初始字典的补充。

但我们导入导出并不是直接转移这个「用户习惯」文件夹，而是通过程序「用戶詞典管理」。

打开「用戶詞典管理」程序，可以在左侧看见用户词典列表，比如「luna_pinyin」。右侧有 2 种导入导出方式，第一种「输出/合入 词典快照」会将 输入法设置、初始字典、用户习惯等导出到「用户文件夹/sync/xxxxxx」，说人话就是你把这个快照导入另一台电脑，那么那台新电脑的输入法就会跟这台电脑一模一样，适合换电脑、重装系统等情形。

第二种「导出/导入 文本码表」只导出用户习惯，且只导出选中的词典（第一种是导出全部词典），如果你的有列表有多个词典，那你就要多导出几次了。




刪除誤上屏的錯詞
不慎上屏了錯誤的詞組，再打同樣的編碼時，那錯詞出現在候選欄，令有潔癖的同學十分不爽。這時候可以：

先把選字光標（用上、下鍵）移到要刪除的用戶詞組上，再按下 Shift+Delete 或 Control+Delete（蘋果鍵盤用 Shift+Fn+Delete）。

只能夠從用戶詞典中刪除詞組。用於碼表中原有的詞組時，只會取消其調頻效果。





#### 符号

BackSpace    退格
Tab    水平定位符
Linefeed    换行
Clear    清除
Return    回車
Pause    暫停
Sys_Req    印屏
Escape    退出
Delete    刪除
Home    原位
Left    左箭頭
Up    上箭頭
Right    右箭頭
Down    下箭頭
Prior、Page_Up    上翻
Next、Page_Down    下翻
End    末位
Begin    始位
Shift_L    左Shift
Shift_R    右Shift
Control_L    左Ctrl
Control_R    右Ctrl
Meta_L    左Meta
Meta_R    右Meta
Alt_L    左Alt
Alt_R    右Alt
Super_L    左Super
Super_R    右Super
Hyper_L    左Hyper
Hyper_R    右Hyper
Caps_Lock    大寫鎖
Shift_Lock    上檔鎖
Scroll_Lock    滾動鎖
Num_Lock    小鍵板鎖
Select    選定
Print    列印
Execute    執行
Insert    插入
Undo    還原
Redo    重做
Menu    菜單
Find    蒐尋
Cancel    取消
Help    幫助
Break    中斷

space
exclam    !
quotedbl    "
numbersign    #
dollar    $
percent    %
ampersand    &
apostrophe    '
parenleft    (
parenright    )
asterisk    *
plus    +
comma    ,
minus    -
period    .
slash    /
colon    :
semicolon    ;
less    <
equal    =
greater    >
question    ?
at    @
bracketleft    [
backslash    \
bracketright    ]
asciicircum    ^
underscore    _
grave    `
braceleft    {
bar    |
braceright    }
asciitilde    ~

KP_Space    小鍵板空格
KP_Tab    小鍵板水平定位符
KP_Enter    小鍵板回車
KP_Delete    小鍵板刪除
KP_Home    小鍵板原位
KP_Left    小鍵板左箭頭
KP_Up    小鍵板上箭頭
KP_Right    小鍵板右箭頭
KP_Down    小鍵板下箭頭
KP_Prior、KP_Page_Up    小鍵板上翻
KP_Next、KP_Page_Down    小鍵板下翻
KP_End    小鍵板末位
KP_Begin    小鍵板始位
KP_Insert    小鍵板插入
KP_Equal    小鍵板等於
KP_Multiply    小鍵板乘號
KP_Add    小鍵板加號
KP_Subtract    小鍵板減號
KP_Divide    小鍵板除號
KP_Decimal    小鍵板小數點
KP_0    小鍵板0
KP_1    小鍵板1
KP_2    小鍵板2
KP_3    小鍵板3
KP_4    小鍵板4
KP_5    小鍵板5
KP_6    小鍵板6
KP_7    小鍵板7
KP_8    小鍵板8
KP_9    小鍵板9


#### schema

schema 直译是架构，这里的意思是输入方案，我们可以设置多个输入方案，比如简中、繁中、双拼等等，使用时可以自由切换，其文件一般是 <schema_name>.schema.yaml。<schema_name>.schema.yaml 可以导入 dict（词库）、symbols（符号设置），导入方式类似编程的 include。

对了，「切换输入方案」与 schema 的「switches」是一起的，比如我现在开启了 3 个输入方案：简中、繁中、日语。简中定义了 4 个 switches：A、B、C、D。如果你现在使用的是简中输入方案，按下「Ctrl Q」唤出「方案选单」，应该是这样：

1. 简中
2. A
3. B
4. C
5. D
6. 繁中
7. 日语

也就是说「当前输入方案的几个输入模式」与「候选输入方案」是混在一起的。开发者说是故意这样设计的，因为不想多记一个快捷键，虽然在我看来这很反直觉且令人费解。

```yaml
# luna_pinyin.schema.yaml
# ...

engine:                    # 輸入引擎設定，即掛接組件的「處方」
  processors:              # 一、這批組件處理各類按鍵消息
    - ascii_composer       # ※ 處理西文模式及中西文切換
    - recognizer           # ※ 與 matcher 搭配，處理符合特定規則的輸入碼，如網址、反查等
    - key_binder           # ※ 在特定條件下將按鍵綁定到其他按鍵，如重定義逗號、句號爲候選翻頁鍵
    - speller              # ※ 拼寫處理器，接受字符按鍵，編輯輸入碼
    - punctuator           # ※ 句讀處理器，將單個字符按鍵直接映射爲文字符號
    - selector             # ※ 選字處理器，處理數字選字鍵、上、下候選定位、換頁鍵
    - navigator            # ※ 處理輸入欄內的光標移動鍵
    - express_editor       # ※ 編輯器，處理空格、回車上屏、回退鍵等
  segmentors:              # 二、這批組件識別不同內容類型，將輸入碼分段
    - ascii_segmentor      # ※ 標識西文段落
    - matcher              # ※ 標識符合特定規則的段落，如網址、反查等
    - abc_segmentor        # ※ 標識常規的文字段落
    - punct_segmentor      # ※ 標識句讀段落
    - fallback_segmentor   # ※ 標識其他未標識段落
  translators:             # 三、這批組件翻譯特定類型的編碼段爲一組候選文字
    - echo_translator      # ※ 沒有其他候選字時，回顯輸入碼
    - punct_translator     # ※ 轉換標點符號
    - script_translator    # ※ 腳本翻譯器，用於拼音等基於音節表的輸入方案
    - reverse_lookup_translator  # ※ 反查翻譯器，用另一種編碼方案查碼
  filters:                 # 四、這批組件過濾翻譯的結果
    - simplifier           # ※ 繁簡轉換
    - uniquifier           # ※ 過濾重複的候選字，有可能來自繁簡轉換
```



#### Migrate

```yaml installation.custom.yaml
sync_dir: 'F:\7. 系统\RimeSync'
installation_id: "loli"
```

我大概搞懂了。运行「用户资料同步」会把「部署输入法用的配置」「安装输入法生成的配置」「用户积累的词典」导出到 `<rime-deploy-folder>/sync/<id>` 文件夹下。

「部署输入法用的配置」等同于 rime-257
「安装输入法生成的配置」是指 `user.yaml` `installation.yaml` 这两个文件
「用户积累的词典」不用多说了，即用户的个人词库，命名为 `<输入方案>.userdb.txt`。你在 `default.custom.yaml` 的 `schema_list` 中启用了 N 个输入方案，就会生成 N 个 `.userdb.txt` 文件

`<id>` 通过 `<rime-deploy-folder>/installation.yaml` 中的 `installation_id` 定义，最好只使用小写字母、数字、减号。

通过「用户词典管理」工具里的「输出词典快照」，可以单独导出某个方案的 .userdb.txt 到 `<rime-deploy-folder>/sync/<id>` 目录下

**其实这种设计很沙雕**，因为 `<rime-deploy-folder>` 下已经有了「部署输入法用的配置」「安装输入法生成的配置」的全部文件，至于「用户积累的词典」则以文件夹的形式保存，例如 `<rime-deploy-folder>/nihongo-r.userdb` `<rime-deploy-folder>/luna_pinyin.userdb`。

你使用 sync，其实只是把 `<rime-deploy-folder>` 下的文件复制到 `<rime-deploy-folder>/sync/<id>` 下，然后再将 `<rime-deploy-folder>/<方案>.userdb` 文件夹解析为 .userdb.txt 文本文件，同样放到 `sync/<id>` 下……所以，除了令人迷惑，sync 到底有什么意义？

> [!info] 只要在sync目录下放置不同的文件夹，里面分别放好来自不同机器的 `.userdb.txt`，单击Rime图标-同步，即可把我在别的设备上的输入记录或曰个人输入词库同步到本机上。

所以就是拿来「合并多台机器的 .userdb.txt」的？搞这么麻烦……

貌似还能用来在新电脑上还原配置及用户积累词典：

3. 在桌面托盘中右键点击输入法图标选择用户词典管理，选择输入法后单击输出词典快照即可导出用户输入习惯数据库到同步路径中。
4. 对同步路径下的Cheng文件夹进行移动或同步到新电脑。
5. 在新电脑安装小狼毫后将Cheng文件夹移动到相同的 sync 路径下。
6. 在新电脑的桌面托盘中右击输入法图标选择用户资料同步并重新部署完成同步。
