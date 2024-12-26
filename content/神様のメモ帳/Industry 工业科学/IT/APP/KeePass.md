---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

[KeePass入门探索——全自动切换英文输入并切回及自动调用技巧 | 战术极客TACGEEK](http://www.tacgeek.com/p/1937-keepass.html)
[一劳永逸：KeePass全网最详使用指南](https://zhuanlan.zhihu.com/p/39645975)
[一劳永逸：KeePass全网最详使用指南 DLC1](https://zhuanlan.zhihu.com/p/40074890)
[密码管理软件漏洞](https://www.ise.io/casestudies/password-manager-hacking/)

#### Limitation

- References
    - [“冷启动攻击”复活：所有计算机都可从内存中恢复敏感数据 - 安全内参 | 决策者的网络安全知识库](https://www.secrss.com/articles/5139)
    - [security - Wipe RAM on shut down to prevent Cold Boot Attack - Super User](https://superuser.com/questions/464297/wipe-ram-on-shut-down-to-prevent-cold-boot-attack)

- Con
    - 使用 Quick Unlock 插件时，会有 Cold Boot Attact 风险，因为此时主密码（密钥）会用弱口令加密并保存在 RAM
        - 退出 KeePass 即可清除那部份内存
        - 正常关机能够有效防范 CBA，因为关机会清除 RAM 里的数据


#### 漏洞

[KeePass 2 CVE-2023-24055](https://bgm.tv/group/topic/377920)

[KeePass 内存泄露主密码漏洞分析 - SecPulse.COM | 安全脉搏](https://www.secpulse.com/archives/201711.html)
[著名密码管理工具被曝漏洞KeePass-已有POC | CN-SEC 中文网](https://cn-sec.com/archives/1746863.html)


KeePass Windows 2.x 爆出漏洞。

如果你压根不用「触发器」功能，那么这个漏洞有完美解决方法：KeePass - 菜单栏 - 触发器 - 取消勾选「启用触发系统」

如果你需要「触发器」功能，则需要更新至 KeePass v2.53.1 来修复该漏洞。

要想利用该漏洞，前提是攻击者**必须能够在修改 AppData 里的文件**。所有的触发器存储在一个 XML 配置文件中，但这个文件路径在 AppData 下，无需管理员权限即可修改（亦不会触发 UAC）。

攻击者可以修改这个文件，在解锁密码库时运行一个导出触发器，然后调用其他任何程序（例如把密码通过网络请求传回攻击者的机器）。

这个条件还是比较严苛的。







所以密码管理器都有显著内存漏洞，可能受到冷启动攻击，这里列出重要结论， 1Password4、1Password7、LastPass 无论是否锁定都暴露出**主密码**，Dashlane 只有在未锁定时暴露经过加密的主密码（容易被破解）。KeePass 做得最好，除非你装了什么插件，不然主密码会马上擦除，但所有 Interacted 条目（即进入过内存的条目）都不会被擦除，虽然 KeePass 尝试保护它们，但还是会被非常规手段提取出来。综上，**建议使用 KeePass**，且 KeePass 还自带安全桌面以保证键盘不被窃听。

插件风险：当你启动keepass，使用主密码和密钥文件解锁数据库后，KeePassQuickUnlock会将这些登录信息加密（加密方式：Windows DPAPI或ChaCha20，我猜测加密参数就是 QuickUnlock 密码了）并保存到keepass进程的内存中（是内存不是硬盘存储），当数据库锁定后再次解锁时会弹出一个窗口，输入快速解锁密码后KeePassQuickUnlock会使用保存在内存中的登录信息解锁数据库，也就是说快速解锁的密码不是用来加密数据库而是用来解锁保存在内存中的登录信息（即解密 ChaCha20）；假如密码输错，保存在内存中的登录信息会被立刻销毁，必须再次使用主密码和密钥文件才能解锁数据库。退出keepass后保存在内存中的登录信息也会被清除，这也是每次重新启动keepass解锁数据库时需要输入主密码的原因。**注意**！这并不能防范冷启动攻击，一旦加密的登录信息被提取，可以被重复利用，即暴力破解，风险转到了强度较低的 256? 位 ChaCha20 / DPAPI 上。真要破解，费不了多少时间。所以，**正确的做法是**，故意输错解锁码、或关机、退出 KeePass 来擦除内存。

KeePassQuickUnlock以keepass密钥文件方式工作，由于keepass会记住上次成功解锁数据库的密钥文件，但只能记住一个，因此以下两种情况除了要输入主密码外还需重新选择密钥文件：

    启动keepass，使用主密码+密钥文件解锁数据库后在第二次快速解锁时输错密码；

    快速解锁成功后关闭然后重新启动keepass（系统开机和重启也属于这种情况）。



#### 自爆

Keyfile 销毁方法：

1. HDD，可以用 shred 命令
2. SSD，建议用修改过大图片来作 Keyfile，再次修图、完成关机，永久销毁
3. U 盘，锤子、微波炉那傻大黑粗的闪存


#### Key File

- **随机 Key File** 是抗审讯的**唯一方式**，必须是随机，即 Key File 销毁后不可以任何方式再获取，包括自己，不如说主要是自己


#### 多长的密码足够安全？

0. 10^12 次 / 每秒，假设的计算速度
1. 纯数字不靠谱，这么算起码要 20 位才能稍微安心
2. 14 位大小写字母加数字，理论上难以暴力破解了，但字典与人为规律使得破解速度大大提升


#### 字段引用

推荐使用 UUID 来指定源条目

    {REF:P@I:xxxxxx}    表示 UUID为xxxxxxの条目 のPassword

Field References

    {REF:<WantedField>@<SearchIn>:<Text>}

Field

    T    Title
    U    User name
    P    Password
    A    URL
    N    Notes
    I    UUID
    O    Other custom strings (KeePass 2.x only)



假设有两条记录：
一条标题名为"Example Website" ，
另一条标题名为"Example Forum"。
现在你想将记录"Example Website"的用户名插入到记录"Example Forum"的网址中，

在记录"Example Forum"的网址中，你应该像这样引用记录"Example Website"的用户名：

`https://forum.example.com/?user={REF:U@T:Example Website}`




#### 安全桌面

请在keepass的【选项】→【安全】中勾选【在安全桌面输入管理密码】，因为几乎没有键盘记录软件能在安全桌面工作。


#### 双通道自动输入混淆

单一的键盘记录软件或剪切板监听软件都无法窃取到输入的完整字段。由于某些软件的输入框没有移动光标或不支持粘贴操作，因此这个功能默认不启用。必须在添加或编辑记录时点击【自动输入】，勾选【双通道自动输入混淆】。这无疑增加了普通用户的使用成本：为一条记录启用双通道自动输入混淆需要额外点击3次，对于有上百条密码的用户来说绝对是一场灾难。下文将给出一劳永逸的解决方案。


#### 自动匹配

简单的说，KeePass 条目信息应该小于网页信息（所谓窗口），例如网页标题是「天使动漫论坛-梦开始的地方 一个能轻松聊天结识同好的温馨小论坛 Angel Beats|TSDM字幕组|天使动漫网 - Powered by Discuz!」，条目信息用小于窗口标题的「天使动漫」就好了，如果不想条目标题太长，可以在条目的属性里加「标签」，多标签用「, 」英文逗号加空格隔离。具体配置在「设置 - 高级/进阶 - 属性」里。

如果在某些软件快捷键失效，可以单独为一个条目配置「对特定窗口使用自订格式」。具体配置在「设置 - 高级/进阶 - 自动输入」里。

自动输入匹配规则：当按下自动输入全局热键时，keepass会根据当前活动窗口的标题在数据库中搜索相匹配的记录；如果一条记录的标题或网址包含在活动窗口标题内那么这条记录将被匹配。举个例子：在chrome浏览器中打开淘宝网，当前活动窗口的标题就是“淘宝网 - 淘！我喜欢 - Google Chrome”。那么问题来了：标题为“Google”的记录也会被匹配到，而且在chrome中打开的任何标签页的标题都会包含“Google Chrome”字段。因此为防止误输密码，请务必在keepass的【工具】→【选项】→【高级】中勾选【总是显示全局自动输入记录选取对话框】。


#### 键入规则

「群组文件夹 - 自动输入」：最后一点是自动输入的键入规则，默认规则为{USERNAME}{TAB}{PASSWORD}{ENTER}。解释：输入用户名，Tab键（换行），输入密码，回车键。但这套规则明显不适合中文用户，因为使用自动输入时输入法必须是英文，否则会出现很尴尬的场面。

本文推荐使用以下规则：+{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{ENTER}。解释：Shift键（Windows10输入法切换），等待100毫秒，清空输入框，输入用户名，Tab键（换行），输入密码，回车键。由于新建记录默认从群组继承输入规则，所以只需修改一次即可，一劳永逸，具体操作见下图。注：使用此规则自动输入时请确保输入法为中文。


#### 无用技巧

这是一个很特殊的技巧，可以让你在每次打开keepass时使用固定的应用设置，类似于网吧电脑系统的重启还原。由于keepass密码锁定的是数据库而不是主程序，所以在电脑未锁定的情况下任何人都可以进入keepass主程序并更改设置。这个技巧主要用于应对以下两个场景：1.熊孩子乱改你的keepass设置；2.别有用心的人趁你不备在keepass选项中更改密码导出策略，在你下次打开数据库后忘记锁定或中途离开电脑时快速导出全部数据。但是这个技巧防小人不防高手，而且如果TA恰好也看过本文，那就只是多花一分钟的事了。所以还是建议养成随手锁定电脑的好习惯（Win键+L），不过拿来对付家里的熊孩子绰绰有余了。

配置方法：打开keepass的【工具】→【选项】，设定好你需要设置→【确定】；打开Windows文件资源管理器，点击选项卡【查看】，勾选【隐藏的项目】。打开文件夹C:\Users(用户)\User Name\AppData\Roaming\KeePass，将文件夹中的KeePass.config.xml重命名为KeePass.config.enforced.xml，然后将它剪切并粘贴到文件夹C:\Program Files (x86)\KeePass Password Safe 2即可。如需取消，请删除KeePass.config.enforced.xml文件。


#### 插件

[KeePass通过KeePassNatMsg和KeePassXC-Browser实现Chrome/FireFox/Edge自动填充](https://www.rmnof.com/article/keepass-auto-type-with-keepassnatmsg-keepassxc-browser/)

[Windows10下KeePass使用KeeAgent插件进行ssh密钥管理 | C-Y-X](https://delayer.top/2019/12/28/Windows10%E4%B8%8BKeePass%E4%BD%BF%E7%94%A8KeeAgent%E6%8F%92%E4%BB%B6%E8%BF%9B%E8%A1%8Cssh%E5%AF%86%E9%92%A5%E7%AE%A1%E7%90%86/)

[KeePass通过坚果云WebDAV实现跨平台多终端同步](https://www.rmnof.com/article/keepass-sync-with-jianguoyun-of-webdav/)


10. **KeePassQuickUnlock**：快速解锁
12. **KPEnhancedEntryView**：界面美化
13. **KeeOtp2**：好用の两步验证器
1. **KPEntryTemplates**：模版
2. KeePassQRCodeView：显示字段的二维码
7. KeeAnywhere：允许通过网盘打开数据库文件
6. WebAutoType：全局自动输入根据网址而不是浏览器窗口标题匹配记录


废弃

3. AutoTypeSearch：全局自动输入没有匹配到记录时，它会弹出一个搜索框
2. YetAnotherFaviconDownloader：为记录下载网页图标。
4. KeePassHttp：配合 chromeIPass 和 passifox。
5. chromeIPass：RT
9. SourceForgeUpdateChecker：检查插件更新。
8. passifox：Firefox，但不兼容新版。
7. KeeTrayTOTP：两步验证器。
11. Url in Title：为chrome中所有标签页的标题添加网址。
4. KeePassRPC：给浏览器扩展提供 API 接口


#### 版本兼容性（2019.06.21）
2.42.1：繁体
2.42：繁体。http
2.41：繁体。
2.40：AutoTypeSearch、tray
2.39.1：同上
2.39：同上
2.38：AutoTypeSearch、tray、template