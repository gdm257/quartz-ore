---
tags:
  - flag/LANGUAGE/Kotlin
  - flag/LANGUAGE/Java
  - flag/Library/APILayer/Implement__/Mobile
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[开发者指南  |  Android 开发者  |  Android Developers](https://developer.android.com/guide)

[序言 | Android官方培训课程中文版(v0.9.7)](http://hukai.me/android-training-course-in-chinese/index.html)

[不要学得太杂太乱！学习Android开发只要记住这几点！ - 知乎](https://zhuanlan.zhihu.com/p/163528281)

[Android：你不能忽略的代码命名规范 - 简书](https://www.jianshu.com/p/b7a644ea0d25)

[futurice/android-best-practices: Do's and Don'ts for Android development, by Futurice developers](https://github.com/futurice/android-best-practices)

[Trinea/android-open-project: A categorized collection of Android Open Source Projects, More powerful web version:](https://github.com/Trinea/android-open-project)

[XXApple/AndroidLibs: 正在成为史上最全分类 Android 开源大全~~~~（长期更新 Star 一下吧）](https://github.com/XXApple/AndroidLibs)

[jeanboydev/Android-ReadTheFuckingSourceCode: 😜 记录日常的开发技巧，开发中遇到的技术重点、难点，各个知识点的总结，优质面试题等等。持续更新...](https://github.com/jeanboydev/Android-ReadTheFuckingSourceCode)

[mzlogin/awesome-adb: ADB Usage Complete / ADB 用法大全](https://github.com/mzlogin/awesome-adb)

[Andriod Studio结合Visual Studio Emulator for Android调试Android App - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1025220)

[Hyper-V Android emulator support | Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/hyper-v-android-emulator-support/)

[Android Developers Blog: Android Emulator - AMD Processor & Hyper-V Support](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)

[有哪些比较好用的安卓模拟器（电脑端） - osc_2qah5avr的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/4312361/blog/4641255)

[分享一些流畅的适合开发的 Android 模拟器_中二病也要开发ANDROID - SegmentFault 思否](https://segmentfault.com/a/1190000003966493)

[解决两个 Android 模拟器之间无法网络通信的问题 - 知乎](https://zhuanlan.zhihu.com/p/31646945)

[数据库还可以这么看？（Android Studio 4.1 新特性） - 掘金](https://juejin.cn/post/6844904126237671437)

https://itimetraveler.github.io/2019/06/07/Android ADB原理探究/
https://developer.android.com/studio/command-line/adb?hl=zh-cn

[安卓平台如何查看分区信息_一息尚存，从吾所好的博客-CSDN博客](https://blog.csdn.net/crow_ch/article/details/86528219)

[基础预科 Android 分区、启动模式、Fastboot - yezhiyi9670's blog](https://ak-ioi.com/763-preintro-android-bootmode/)

[(原创)从代码分析Android分区挂载过程 - Jimmy's Blog](https://blog4jimmy.com/2018/03/468.html)

[Android系统启动流程分析_51CTO博客_android启动流程分析](https://blog.51cto.com/u_15254659/4658812)

[基础预科 ADB、Android 终端、Android 用户权限 - yezhiyi9670's blog](https://ak-ioi.com/714-preintro-adb/)

[Android Hook 技术 - MeiK's blog](https://meik2333.com/post/android-hook/)

[从零开始实现一个插件化框架（一） - 知乎](https://zhuanlan.zhihu.com/p/163271580)

[“终于懂了”系列：Android组件化，全面掌握！ - 知乎](https://zhuanlan.zhihu.com/p/261736134)

[“终于懂了”系列：Android组件化，全面掌握！ - 知乎](https://zhuanlan.zhihu.com/p/261736134)



## Brief

[聊聊 Android 的 GUI 系统 - 掘金](https://juejin.cn/post/6844904036114628616)

[[ChatGPT]]
对于Android应用开发中的动态内容，一般情况下我们会在类文件中使用命令式代码来实现。这是因为，通过在类文件中编写代码，我们可以更加具体地控制应用的逻辑和实现方式，使用起来更加灵活。当然，在某些情况下，在布局文件中使用表达式也是可行的，这种方法往往适用于一些比较简单的动态内容。但是，在一些复杂的动态内容的场景中，命令式代码往往会更加适合。

- Target SDK
    - Google Play requires 31+



## Project

app/src/main/AndroidManifest.xml
Theme
API level
Permission
Intent-filter
声明其所有组件

`app/src/main/java/<包名>/<ActivityFileName>.java` 定义了一个 Activity。

首先得在 `app/src/AndroidManifest.xml` 中声明这个 Activity。所有组件（Activity 服务 广播接收器 内容提供程序）都必须在 AndroidManifest.xml 声明才能够使用。此外，还需要设置一个默认 Activity 作为应用入口。

Activity 长什么样呢？于是就调用了一个布局 `app/src/main/res/layout/<LayoutFileName>.xml`。这个布局文件里编写了许许多多的控件，textview button 等。

控件可理解为 html 标签，不同标签有不同的属性……感觉不就是 html 嘛（其实是 xml）

控件里显示的内容一般是「资源」，例如字符串、图片。我们不直接把这些资源写进布局文件里，而是分门别类放进 `app/src/main/res/` 文件夹下，布局本身就是一种资源，放在 res/layout/ 文件夹里，其他还有 res/values/ res/drawable/ res/mipmap-hdpi/……然后再在布局文件里「引用」这些 resource

为什么不直接写进去呢？不说开发的哲学、设计的美学，引用最大的好处就是可以针对不同的「用户」显示不同的效果。常见的如「多语言」「不同分辨率」「横屏竖屏」「不同系统版本」


## 命名

包
com.domain.xxx.activity  //用户界面中所有的Activity类
com.domain.xxx.fragment  //界面中所有的Fragment类
com.domain.xxx.adapter   //界面中所有的Adapter类（适配器类）
com.domain.xxx.view      //自定义的View类
com.domain.xxx.service   //后台Service类
com.domain.xxx.util      //项目中常用的公共工具类（网络, IO, 日志等）
com.domain.xxx.bean      //实体模型类
com.domain.xxx.db        //数据库操作相关的类
com.domain.xxx.config    //所有的配置相关的类
com.domain.xxx.api       //网络api接口相关de 类

@+id/tv_user_name_show layout中使用的id的单词要全部小写，单词之间使用下划线分割，使用名词或者名词词组，应该通过id的命名可以直接理解当前的View要实现的功能。id命名的第一个单词使用View的缩写，如果View只是一个单词，缩写就是当前单词。一般Button的缩写为：btn。

类（Activity / Fragment / Adapter / Bean）大驼峰命名法
同一界面,不同类型的类,前缀必须一样，如
HomePageActivity,HomePageFragment,HomePageListAdapter

Method
Layout
控件

程序中使用单词缩写原则：不要用缩写，除非该缩写是约定俗成的。
activity类：以Activity为后缀标识，如WelcomActivity欢迎页面；
Adapter类：以Adapter为后缀标识，如NewDetailAdapter新闻详情适配器；Adapter文件命名规范：负责提供数据，为数据适配器。每个类命名为：界面名+Adapter，如MainItemAdapter
Tools或Manager类：常用的工具或管理类，如ThreadPoolManager类，LogTools日志工具类；
DBHelpter类：数据库类，如NewDBHelper类，新闻数据库类；
Service类：服务类，如TimeService类，时间服务类；
ContentProvider类：以Provider为后缀标识，内容提供类；
基类：以Base开头，如BaseActivity，BaseFragment类；


## Permission

普通权限：系统会自动授权
危险权限：需要用户手动授权
Android 中有上百种权限，危险权限一共 9 个权限组 24 个权限。

## API

Android SDK 文档

Log `android.util.Log`

## Layout

`setContentView(R.layout.<LayoutFileNameWithoutDotXml>);`

逻辑上，布局是用来控制「组件」的呈现方式的，一个 Activity 有那么多组件，button textview 等等，谁先谁后、谁上谁下，这点控件本身是没有描述的，控件的代码只描述了自己这个控件长什么样、有什么功能。这时就需要一个专门的东西来控制多个控件的呈现方式，也就是「布局（Layout）」，布局本身就是一个「控件」，一个的控件，你可以在布局里嵌套多个布局。

99% 的布局用的都是线性布局（LinearLayout）或相对布局（RelativeLayout），二八法则，你懂的

LinearLayout 最常用属性
android:id
android:layout_width
android:layout_height
android:background
android:layout_margin
android:layout_padding 内边距
android:orientation 外边距

RelativeLayout 最常用属性
android:layout_toLeftOf
android:layout_toRightOf
android:layout_alignBottom
android:layout_alignParentBottom
android:layout_below

其他属性
android:layout_weight 权重




## 控件

- View
    - ViewGroup
        - LinearLayout
        - RelativeLayout
    - TextView
        - Editext
        - Button
    - ImageView

ImageView
```
android:src="@drawable/<FileName>"
android:scaleType="fitXY/fitCenter/centerCrop/..."
```

ListView

GirdView

ScrollView

HorizontalScrollView

WebView

Toast

TextView

Button

EditText

RadioButton

CheckBox

## Activity

[一张图弄清Activity的启动过程 - 掘金](https://juejin.cn/post/6844903790953381896)


`public class ClassName extends AppCompatActivity {}`

Activity是Android系统提供的一个活动基类，我们项目中所有的活动都必须继承它或者它的子类才能拥有活动的特性（AppCompatActivity是Activity的子类）

当用户从主界面点击程序图标时，系统会调用app中被声明为"launcher" (or "main") activity中的onCreate()方法。这个Activity被用来当作程序的主要进入点。

我们可以在AndroidManifest.xml中定义作为主activity的activity。

这个main activity必须在manifest使用包括 `MAIN` action 与 `LAUNCHER` category 的 `<intent-filter>` 标签来声明。例如：

生命周期回调
onCreate()
onStart()
onResume()
onPause()
onStop()
onRestart()
onDestroy()

状态
Created
Started
Resumed
Paused
Stopped
Destroyed

其它状态 (Created与Started)都是短暂的瞬态，系统会通过调用下一个生命周期回调方法从这些状态快速移到下一个状态。 也就是说，在系统调用 onCreate()) 之后，它会快速调用 onStart())，紧接着快速调用 onResume())。

根据Activity的复杂程度，您可能不需要实现所有生命周期方法。但是，了解每个方法并实现确保您的应用按照用户期望的方式运行的方法非常重要。正确实现您的Activity生命周期方法可确保您的应用按照以下几种方式良好运行，包括：

- 如果用户在使用您的应用时接听来电或切换到另一个应用，它不会崩溃。
- 在用户未主动使用它时不会消耗宝贵的系统资源。
- 如果用户离开您的应用并稍后返回，不会丢失用户的进度。
- 当屏幕在横向和纵向之间旋转时，不会崩溃或丢失用户的进度。

正如您将要在以下课程中要学习的，有Activity会在图 1 所示不同状态之间过渡的几种情况。但是，这些状态中只有三种可以是静态。 也就是说，Activity只能在三种状态之一下存在很长时间。

- **Resumed**：在这种状态下，Activity处于前台，且用户可以与其交互。（有时也称为“运行”状态。）
- **Paused**：在这种状态下，Activity被在前台中处于半透明状态或者未覆盖整个屏幕的另一个Activity—部分阻挡。暂停的Activity不会接收用户输入并且无法执行任何代码。
- **Stopped**：在这种状态下，Activity被完全隐藏并且对用户不可见；它被视为处于后台。停止时，Activity实例及其诸如成员变量等所有状态信息将保留，但它无法执行任何代码。

## 服务

## 广播


## 内容提供程序

## 通知

## Fragment

可以把 Fragment 想象成 Activity 的模块，它拥有自己的生命周期、接收输入事件，可以在 Acvitity 运行过程中添加或者移除（有点像“子 Activity”，可以在不同的 Activity 里重复使用）。

为了在 Android 上为用户提供动态的、多窗口的交互体验，需要将 UI 组件和 Activity 操作封装成模块进行使用，这样我们就可以在 Activity 中对这些模块进行切入切出操作。可以用 Fragment 创建这些模块，Fragment 就像一个嵌套的 Activity，拥有自己的布局（Layout）并管理自己的生命周期。

Fragment 定义了自己的布局后，它可以在 Activity 中与其他 Fragment 生成不同的组合，从而为不同的屏幕尺寸生成不同的布局（小屏幕一次也许只能显示一个 Fragment，大屏幕则可以显示更多）。

和 Activity 一样，当 Fragment 从 Activity 添加或者移除、或 Activity 生命周期发生变化时，Fragment 通过生命周期回调函数管理其状态。例如，当 Activity 的 onPause() 被调用时，它内部所有 Fragment 的 onPause() 方法也会被触发。

Fragments 是可重用的、模块化的 UI 组件。每个 Fragment 实例都必须与一个 FragmentActivity 关联。我们可以在 Activity 的 XML 布局文件中逐个定义 Fragment 来实现这种关联。

在处理 Fragment（特别是在运行时添加的 Fragment）时，请谨记以下重要规则：必须在布局中为 Fragment 提供 View 容器，以便保存 Fragment 的布局。



## Intent

一个Android app通常都会有多个activities。 每个activity的界面都扮演者用户接口的角色，允许用户执行一些特定任务（例如查看地图或者是开始拍照等）。为了让用户能够从一个activity跳到另一个activity，我们的app必须使用Intent来定义自己的意图。当使用startActivity()的方法，且参数是intent时，系统会使用这个 Intent 来定义并启动合适的app组件。使用intents甚至还可以让app启动另一个app里面的activity。

一个 Intent 可以显式的指明需要启动的模块（用一个指定的Activity实例），也可以隐式的指明自己可以处理哪种类型的动作（比如拍一张照等）。

MIME类型

我们可以创建intent filters来表明程序能够接收的action类型

当某个程序尝试通过创建一个intent并将其传递给startActivity来分享一些东西时，我们的程序会被呈现在一个列表中让用户进行选择。如果用户选择了我们的程序，相应的activity会被调用开启，这个时候就是我们如何处理获取到的数据的问题了。

为了处理从Intent带来的数据，可以通过调用getIntent()方法来获取到Intent对象。拿到这个对象后，我们可以对其中面的数据进行判断，从而决定下一步行为。请记住，如果一个activity可以被其他的程序启动，我们需要在检查intent的时候考虑这种情况(是被其他程序而调用启动的)。


## Adapter

ArrayAdapter


## UI

[深入剖析Window - 掘金](https://juejin.cn/post/6844903753150103560)

[Android的UI显示原理之Surface的创建 - 掘金](https://juejin.cn/post/6844903761292886030)

[Android UI 显示原理分析小结 - 掘金](https://juejin.cn/post/6844903769235275784)

[Android GWES分析_Linux编程_Linux公社-Linux系统门户网站](https://www.linuxidc.com/Linux/2011-10/44578.htm)

[Android底层渲染原理 - 一眼万年的星空 - 博客园](https://www.cnblogs.com/mysweetAngleBaby/p/15549126.html)

[Android开发学习之高级UI原理分析 - 知乎](https://zhuanlan.zhihu.com/p/268943764)


不如改用 Compose 或 Flutter 写 UI
所以我建议直接换 Flutter 或新的 Compose，相当于自带混淆自带反破解
似乎没见过哪个 Flutter app 被破解的
明年预计 Compose 正式版也出了
到 2022 年，我想就可以放心地使用 Compose 来写 UI 和开发桌面端了
Compose 实现的 UI，反编译也几乎不能看
因为即使面对源代码，也很难看到其原理源代码
因为它很大一部分是编译器加持的
Kotlin 编译器


## 持久化

SharedPreferences 存储
文件存储
SQLite 数据库存储

所有的Android设备均有两个文件存储区域："internal" 与 "external" 。 这两个名称来自于早先的Android系统，当时大多设备都内置了不可变的内存（internal storage)及一个类似于SD card（external storage）这样的可卸载的存储部件。之后有一些设备将"internal" 与 "external" 都做成了不可卸载的内置存储，虽然如此，但是这一整块还是从逻辑上有被划分为"internal"与"external"的。只是现在不再以是否可卸载进行区分了。 下面列出了两者的区别：

- **Internal storage:**
  
    - 总是可用的
    - 这里的文件默认只能被我们的app所访问。
    - 当用户卸载app的时候，系统会把internal内该app相关的文件都清除干净。
    - Internal是我们在想确保不被用户与其他app所访问的最佳存储区域。
- **External storage:**
  
    - 并不总是可用的，因为用户有时会通过USB存储模式挂载外部存储器，当取下挂载的这部分后，就无法对其进行访问了。
    - 是大家都可以访问的，因此保存在这里的文件可能被其他程序访问。
    - 当用户卸载我们的app时，系统仅仅会删除external根目录（[getExternalFilesDir()](http://developer.android.com/reference/android/content/Context.html#getExternalFilesDir(java.lang.String))）下的相关文件。
    - External是在不需要严格的访问权限并且希望这些文件能够被其他app所共享或者是允许用户通过电脑访问时的最佳存储区域。


Android 10：将「/storage/emulated/0/Android/data/」「/storage/emulated/0/Download(DCIM、Pictures...)」以外的所有目录都移到了「/storage/emulated/0/Download」

Android 11：在 Android 10 的基础上，禁止访问「/storage/emulated/0/Android/data/」

**总结：有个鸟用**

公共目录不还是照样访问？有个鸡儿的区别？应用专属目录是访问不了了，但这对隐私有个毛线的帮助？你相机拍照会把照片放在专属目录吗（放专属目录根本拿不出来），不还是放公有目录？别的应用只需要申请读取权限就搞到手了，录音、下载的文件同理。这么做只不过苦了开发者，你他妈要真想保护隐私，当初就别把 AppOps 砍掉啊，现在做回来，不就行了吗，整分区存储有鸟用？最后只不过从「在根目录乱拉屎」，变成「在公共目录乱拉屎」罢了

「公共目录」在 Android 10 之前是指「/storage/emulated/0」；Android 10 为「/storage/emulated/0/DCIM」等几个固定目录，此时除了这几个固定目录，/storage/emulated/0 下已经没有其他目录了

 * \#DIRECTORY_MUSIC
 * \#DIRECTORY_PODCASTS
 * \#DIRECTORY_RINGTONES
 * \#DIRECTORY_ALARMS
 * \#DIRECTORY_NOTIFICATIONS
 * \#DIRECTORY_PICTURES
 * \#DIRECTORY_MOVIES
 * \#DIRECTORY_DOWNLOADS
 * \#DIRECTORY_DCIM
 * \#DIRECTORY_DOCUMENTS
backups
media

MediaStore.Audio
MediaStore.Downloads
MediaStore.Files
MediaStore.Images
MediaStore.Video

在 Android 4.4（API 级别 19）或更高版本中，应用无需请求任何与存储空间相关的权限即可访问外部存储空间中的应用专属目录。卸载应用后，系统会移除这些目录中存储的文件。

由于外部存储空间位于用户可能能够移除的物理卷上，因此在尝试从外部存储空间读取应用专属数据或将应用专属数据写入外部存储空间之前，请验证该卷是否可访问。

您可以通过调用 Environment.getExternalStorageState() 查询该卷的状态。如果返回的状态为 MEDIA_MOUNTED，那么您就可以在外部存储空间中读取和写入应用专属文件。如果返回的状态为 MEDIA_MOUNTED_READ_ONLY，您只能读取这些文件。

Android 10（API 级别 29）及更高版本，启用分区存储后，应用将无法访问属于其他应用的应用专属目录。应用只能访问（外部存储空间上的）应用专属目录，以及本应用所创建的特定类型的媒体文件。如果您的应用在运行时请求与存储空间相关的权限，面向用户的对话框会表明您的应用正在请求对外部存储空间的广泛访问，即使已启用分区存储也是如此。

Android Q仍然使用READ_EXTERNAL_STORAGE和WRITE_EXTERNAL_STORAGE作为存储相关运行时权限，但现在即使获取了这些权限，访问外部存储也受到了限制，只能访问自身目录下的文件和公共内体文件。

（1）应用私有目录：存储应用私有数据，外部存储应用私有目录对应/storage/emulated/0/Android/data/包名/files，内部存储应用私有目录对应data/data/packagename；
（2)  共享目录：存储其他应用可访问文件， 包含媒体文件、文档文件以及其他文件，对应设备
/storage/emulated/0/Downloads(Pictures)等
DCIM、Pictures、Alarms, Music, Notifications,Podcasts, Ringtones、Movies、Download
公有目录下的文件不会跟随APP卸载而删除。

最后，针对诸如 Solid Explorer 这种第三方文件管理器和钛备份、Swift Backup 这类备份工具，就像我们上面所提到的那样，Google 引入一个特殊的权限​来赋予其读写所有共享存储空间文件（包括非多媒体文件）的权限，但这个权限的作用范围依然不包括应用专属目录（内部和外部目录）。



## Language

res/values/strings.xml
res/values-jp/strings.xml

## 尺寸

res/layout/main.xml
res/layout-large/main.xml
`setContentView(R.layout.main);`

res/drawable-xhdpi/awesomeimage.png
res/drawable-hdpi/awesomeimage.png
res/drawable-mdpi/awesomeimage.png
res/drawable-ldpi/awesomeimage.png
引用 `@drawable/awesomeimage` 时系统会根据屏幕的分辨率选择恰当的 bitmap

4种普遍尺寸：小(small)，普通(normal)，大(large)，超大(xlarge)
4种普遍分辨率：低精度(ldpi), 中精度(mdpi), 高精度(hdpi), 超高精度(xhdpi)


## 文件引用
```
【控件】

[<package>.]R.id.<id> 表示引用 xml 中的相应控件

xml 中引入 xml：
<LinearLayout xxx>
    <include layout="@layout/<filename_without_xml>" />
</LinearLayout>

activity 中引入 xml：
super.setContentView(R.layout.<filename_without_xml>)


【res/】

@mipmap/filenameWithoutSuffix 表示引用 res/mipmap/ 下的文件，res 下其他同理
```
