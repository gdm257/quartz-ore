---
tags:
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[Unity 用户手册 2020.3 (LTS) - Unity 手册](https://docs.unity3d.com/cn/2020.3/Manual/index.html)

[凉鞋：我所理解的框架 【Unity 游戏框架搭建】 - 凉鞋的笔记 - 博客园](https://www.cnblogs.com/liangxiegame/p/12557515.html)

[ThisisGame/cpp-game-engine-book: 从零编写游戏引擎教程 Writing a game engine tutorial from scratch](https://github.com/ThisisGame/cpp-game-engine-book)

[XINCGer/Unity3DTraining: Unity的练习项目](https://github.com/XINCGer/Unity3DTraining)

[XCharts-Team/XCharts: A charting and data visualization library for Unity. Unity数据可视化图表插件。](https://github.com/XCharts-Team/XCharts)


## 环境

参考

[【Unity游戏开发】Mono和IL2CPP的区别 - 知乎](https://zhuanlan.zhihu.com/p/352463394)

[Unity如何添加模块组件（SDK，NDK，JDK，中文包等） - PISCOnoob - 博客园](https://www.cnblogs.com/pisconoob/p/16115373.html)

[Unity | JetBrains Rider](https://www.jetbrains.com/help/rider/Unity.html)

[使用Rider编写Unity代码相关设置 - 知乎](https://zhuanlan.zhihu.com/p/358365272)


```bash
scoop install -g unityhub

游戏开发对编程能力的要求比我想象中低得多。

Unity 是游戏引擎.
Unity Hub 用来管理不同版本的 Unity，可以看作是 Unity 的 conda/nvm.
Unity Editor 类似于 Qt Designer + 库.
Platform Module 用来交叉编译指定平台的可执行文件，Mono/IL2CPP 选 IL2CPP.

Tools:
    不同版本的 Unity 可共用 JDK8、Android SDK、NDK、Gradle.
    Unity Editor - Menu bar - Edit - Pereferences - External Tools

Android SDK 还需要安装几个 SDK Tools（可通过 Android Studio）：
    Android SDK Tools
    Android SDK Platform-tools
    Android SDK Build-tools
    NDK

Layout: Editor 布局.
透视视图: 近大远小.
正交视图: 物体显示的大小与观察距离无关，方便对齐.

.fbx: 标准模型文件。一般包含 Mesh Material 信息，Unity 要求 Texture 信息单独一个文件.
模型: 任何物体都是由多个「三角面」围成的.
Mesh 网格: 模型的形状。如面、顶点坐标、法向量 etc.
Material 材质: 表面的一些参数。如粗糙度 etc.
Texture: 纹理，俗称贴图。模型表面每个位置的颜色.
平面: 正面可见，背面透明（参考CF卡bug）；平面没有厚度.

Hierarchy
    父子关系
        子物体随着父物体一起移动、旋转、删除.
        子物体使用相对坐标，子物体的 (0,0,0) 其实是父物体的 Pivot.

Empty Object: 空物体，作用类似于 <div>，也可作为空间位置的标记.

Global: 全局坐标系.
Local:
    局部坐标系，以物体自身为轴.
    一般要求模型的正脸与Z轴方向一致，
    例如一辆车朝车头前进的方向应该就是Z轴的正方向.
    Y轴为 up，指向上方.
    Z轴为 forward，朝前.
    X轴 right.
Pivot: 轴心.
Center: 几何中心，不常用.
Position: 所有 Game Object 的位置都是相对坐标，即子对象的 (0,0,0) 取决于父对象，如果没有父对象，那么 (0,0,0) 则为世界中心.


Edit Mode:
Play Mode: 可添加 Game Object，但修改不会保存进 Scene，类似 pycharm debug.


```


## 编译

参考

[Unity5 如何做资源管理和增量更新_悦峰的博客-CSDN博客](https://blog.csdn.net/ring0hx/article/details/46376709)


`Unity 游戏` 由多个 Scene 组成
`Scene` 包含了多个 Game Object。一个 `.unity` 文件就是一个 Scene
`Game Object` 围绕着 Scene 使用，Scene 中一切皆对象，没错就是面向对象
`Component、脚本、字体、图片、视频` 围绕着 Game Object 来使用
`Component` 作为属性添加进 Game Object，使其拥有行为，即给对象添加功能
`Hierarchy` 能管理所有 Scene 及其包含的 Game Object
`Project window` 内置的文件浏览器
    * `Assets` 存放游戏素材；
    * `Packages` 类似于 `node_modules`，存放依赖库；
`Package` 就是一个项目的打包，可能包含 Scene、Object、Component、Script……


## 快捷键

c S——Save current Scene
F——聚焦指定物体
Hierarchy - 双击 Game Object——聚焦指定物体



## 目录结构

我认为合理的项目结构

Assets
    Models
        Materials
        Textures
    Textures
    Scenes
    Scripts




## Package

什么是 Package？
package 可能包含各种文件，如 Scene Model Script Material Texture Prefab etc.

如何生成 Package？
Editor - Project Manager - Select files or folders - Right click - Export Package - Generate .unitypackage file

如何管理 Package？
Unity Editor - Menu - Window - Package Manager
可以管理下载的 Asset Store 资源包。


## Component

* Transform: 所有 Game Object 都必须有的组件；
* Mesh Filter: 用来加载 Mesh 网格数据.
* Mesh Renderer:
    * Materials: 材质.
* Audio Source:
    - AudioClip
* Camera:
    - 使摄像机视角与 Scene 视图一致
      `Menu bar - GameObject - Align With View`



## uGUI

参考

[创建用户界面 (UI) - Unity 手册](https://docs.unity3d.com/cn/2020.3/Manual/UIToolkits.html)

[画布 - uGUI](https://docs.unity3d.com/cn/2020.3/Manual/UICanvas.html)


* Q&A:
    * 为什么要创建 Canvas？
        A: 所有 UI 控件必须放置在 Canvas，相当于 html 的 `<html>` 标签。
           `Editor - Hierarchy - Scene - Right click - UI - Canvas`
    * 如何控制对象位置？
        A: `Rect Transform` 组件可以控制；
    * 如何布局？
        A: 
    * 可视组件？
        - Image
        - Text
    * 交互组件？
        - Toggle 开关
        - Slider 滑条
        - Scrollbar 滚动条
        P.S. 交互组件本身不可见，必须与一个或多个可视组件组合才能正常工作.
* Canvas Object:
    * Graphic Raycaster
    * Canvas Scaler
    * Canvas
        - Render Mode
            `Screen Space - Overlay` (Default)
                Canvas 永远自动出现在所有 Camera 的最前面；
                Canvas 大小同当前界面大小；
            `Screen Space - Camera`
            `World Space`
* EventSystem Object: 别删。创建 Canvas 时会自动创建 EventSystem.
* Image Object:
    * Rect Transform
        - Anchors: 九宫格中记得 Alt + 点击，使锚点生效.
        - Pivot: 轴心位置，默认为几何中心。影响缩放 etc 效果.
        - Rotation
        - Scale
    * Canvas Renderer
    * Image
        - Source Image
        - Color
        - Material
        - Raycast Target
        - Raycast Padding
        - Maskable
* Text Object:
    


## Script

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// using UnityEditor;

/*
this    Script 组件本身
this.gameObject    该游戏对象
this.gameObject.name
this.gameObject.transform    游戏对象的 Transform 组件
this.transform    Transformの简写，因为所有对象都有

.cs script could be dragged into Game Object as a Component.
*/


public class FileName : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        GameObject obj = this.gameObject;
        string name = this.name;
        Transform tr = this.gameObject.transform;
        Vector3 wp = this.gameObject.transform.position; // 世界坐标
        Vector3 lp = this.gameObject.transform.localPosition; // 局部坐标
        var new_pos = new Vector3(2.5f, 7.0f, 0);

        Debug.Log($"我是游戏对象: {name}");
        Debug.Log($"我的世界坐标: {pos.ToString("F3")}");

        Application.targetFrameRate = 60; // 近似目标帧率
    }

    // 帧更新
    // Update is called once per frame
    void Update()
    {
        Debug.Log($"游戏总运行时间: {Time.time}");
        Debug.Log($"帧更新の时间差: {Time.deltaTime}");

        Vector3 pos = this.transform.localPosition;
        pos.x += 0.01f; // 非匀速
        float ySpeed = 3.0;
        float distance = ySpeed * Time.deltaTime; // 速度 * 时间
        pos.y = distance; // 匀速
        this.transform.localPosition = pos;

        var xSpeed = 0;
        var ySpeed = 0;
        var zSpeed = 3;
        float dx = xSpeed * Time.deltaTime;
        float dy = ySpeed * Time.deltaTime;
        float dz = zSpeed * Time.deltaTime;
        this.transform.Translate(dx, dy, dz); // 根据自身坐标系移动
        this.transform.Translate(dx, dy, dz, Space.Self);  // 自身坐标系
        this.transform.Translate(dx, dy, dz, Space.World); // 世界坐标系


        GameObject targetObject = GameObject.Find("name_or_path"); // path: objA/objB/objC
        this.transform.LootAt(targetObject.transform); // 朝向目标对象
        this.transform.Translate(0, 0, dz, Space.Self); // 前进
    }
}


```




## Plugin