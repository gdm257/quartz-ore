---
tags:
  - flag/MachineLanguage/Query
  - flag/MachineLanguage/Markup
  - flag/Library/APILayer/Implement__/Web/Layout
  - flag/Library/APILayer/Implement__/Web/Typography
  - Label/Industry-工业科学/IT/Language
  - Label/Industry-工业科学/IT/Library/3rdLibrary
mime-type:
  - text/css
css-selectors:
  - :has
  - :not
  - :is
  - :where
---

## References

- References
    - [Tailwind CSS Document](https://tailwindcss.com/docs/aspect-ratio)
        - 我发现，[Tailwind CSS Document](https://tailwindcss.com/docs/aspect-ratio) 就是最好的 [[CSS]] 文档，哪怕你不用 [[Tailwind CSS]]

- Examples
    - [ACG官网设计荟萃](https://bgm.tv/group/topic/395877)
    - [cssinspirationguide - csc inspiration guide online](https://chokcoco.github.io/CSS-Inspiration/#/)
    - [chokcoco/iCSS: 不止于 CSS](https://github.com/chokcoco/iCSS)
    - [The animation secret of ByteByteGo - drow.io or CSS for SVG](https://www.linkedin.com/posts/mr-deepak-bhardwaj_linkedin-architecturedesign-tipsandtricks-activity-7084124097374257152-2tjS)
    - [能用CSS实现的就不用麻烦JavaScript - 掘金](https://juejin.cn/post/6986084648778465288)
    - [能用CSS实现的就不用麻烦JavaScript — Part2 - 掘金](https://juejin.cn/post/6986967746453962782)
    - [纯css实现117个Loading效果（上） - 掘金](https://juejin.cn/post/7037036742985121800)
    - [纯css实现117个Loading效果（中） - 掘金](https://juejin.cn/post/7037636080539009038)
    - [纯css实现117个Loading效果（下） - 掘金](https://juejin.cn/post/7037660617779445796)
    - [面试官：CSS如何画一个三角形？原理是什么？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/css/triangle.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80)

- Alternatives
    - [[Tailwind CSS]]
    - [[SASS]]

## Version

- Edition
    - CSS3
        - CSS3 开始进入模块化时代，大版本号基本不再变化，CSS 的各个功能按模块进行划分，每个模块相互独立，拥有独立的版本号，这样既方便官方改进 CSS,也方便浏览器按模块进行兼容
    - ~~CSS2.1~~
    - ~~CSS1 (deprecated)~~

## Data

- Configuration
    1. `<el style="...">` Inline Style Sheet
    2. `<style>...</style>` Internal Style Sheet aka Embbed Style Sheet
    3. `<link>` or `@import` External Style Sheet
    4. Default Browser Style Sheet

- Data
    1. Selector > Inheritance
        - NO weight for inheritance
        - Selector overwrites any inheritance including `!importance`
    2. `!important`
        - Weight is `+∞`
    3. Inline > External/Embedded
        - Inline weight is `1,0,0,0`
        - External/Embedded is `0xxx`
    1. Specificity 特异性
        - `#id`: `0,1,0,0`
        - `.class` `[attr]` `:pseudo-class`: `0,0,1,0`
        - `el` `::pseudo-element`: `0,0,0,1`
        - `*` `>` ` ` `+` `~` `||`: `0,0,0,0`
    2. Cascade 层叠
        - LIFO
        - Last overwrites first
    3. Default Browser Style Sheet

- Architecture
    1. **specified value**
        1. initial value (default value)
        2. inherit
        3. `.css`
    2. computed value
        - specified value 计算之后得到的 value
        - 多这一层纯粹是因为历史遗留
    3. **used value**
        - computed value 计算之后得到的 value
        - [应用值 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/used_value)
    4. actual value
        - used value 的近似值
        - 物理设备可能无法直接使用 used value，只能用近似值

## Syntax

- Syntax
    - Variables
        - `--var-name: value`
    - Ruleset
        - Rule
            - Selector
            - Declaration block
                - Property
                - Property value
                - Nesting rule
                    - Nesting selector `&`
                    - Declaration block

### Selectors

- References
    - [CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)
    - [CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
    - [Selectors Level 4](https://drafts.csswg.org/selectors/)
    - [CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
    - [优先级 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

- Idea
    - Selector 本质是一种返回 `List[Element]` 的表达式

- Alternatives
    - [[XPath]] 更简明强大，但性能较差

- Objects
    - 基本表达式
        1. `*` Universal selector
        2. `element` Type selector
        3. `#` ID selector
        4. `.` Class selector
        5. `[]` Attribute selector
        6. `:` Pseudo-class selector
        7. `::` Pseudo-element selector
    - 复杂表达式
        - 使用 Combinator 连接多个 selectors
        1. `无缝相连` Compound combinator
            - 逻辑与
        2. `&` nesting selector
        3. `<space>` Descendant combinator
        4. `>` Child combinator
        5. `~` Subsequent-sibling combinator
        6. `+` Next-sibling combinator
        7. `||` Column combinator
        8. `,` Grouping selector
            * 逻辑或，简单复用 declarations

```css
Attribute selector:
    [<attr>]    含有 attr 属性
    [<attr>=<value>]    attr 属性的值等于 value
    [<attr>=<value> i]    i or I 大小写不敏感
    [<attr>=<value> s]    s os S 大小写敏感
    [attr~=value]    不等于 value
    [attr^=value]    开头是 value 即 /^value/
    [attr$=value]    结尾是 value 即 /value$/
    [attr|=value]    等于 "value"，或者开头是 "value-"
    [attr*=value]    包含 value 即 /.*value.*/
    [<attr> <operator> <value> i]    i or I 大小写不敏感
    [<attr> <operator> <value> s]    s os S 大小写敏感
```

## Philosophy

- Philosophy
    - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
    - [编码规范 by @mdo](https://codeguide.bootcss.com/)
    - [如何写出一套可维护的CSS库？ - 掘金](https://juejin.cn/post/6958690548009926687)
    - [组织 CSS - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Organizing)
    - [现代 CSS 进化史 - 知乎](https://zhuanlan.zhihu.com/p/33769659)

### BEM

- Idea
    - Block, Element, Modifier

- Syntax
    - `<block>`
    - `<block>--<modifier>`
        - Block 的不同版本
    - `<block>__<element>`
        - Block 的后代
    - `<block>__<element>--<modifier>`
        - Block 的后代 的不同版本

- Philosophy
    - Scoped CSS
    - Avoid deep nesting
        - Avoid `.block__el1__el2`

- Objects
    - Block
        - Block 如有多个单词，可用 `-` 分隔
    - Element
        - e.g. [[HTML]] element name
        - e.g. 针对 `<div>`，可以用语义化单词，例如 `body` `price`
    - Modifier
        - 负责描述不同状态
        - e.g. `hover` `focus` `dark`

- Pro
    - [[HTML]] 层级 == [[HTML]] 层级

- Con
    - BEM 并不能 100% 覆盖所有情况

- Author
    - Yandex Team

## Objects

### Property Value

- Idea
    - 26 个字母之于英语，数据类型之于 CSS。你可以忘记属性，但不能忘记数据类型

- References
    - [CSS data types - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)
    - [CSS 基本数据类型 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Types)
    - [CSS 的值与单位 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
    - [CSS值类型文档大全 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/)

- Basic Data Type
    - `<angel>`
    - `<basic-shape>`
    - `<blend-mode>`
    - `<color>`
    - `<custom-ident>`
    - `<filter-function>`
    - `<flex>`: *n*fr
    - `<frequency>`
    - `<gradient>`
    - `<image>`
    - `<integer>`: int
    - `<length>`
    - `<number>`: float | int
    - `<percentage>`: *x*%
    - `<position>`
    - `<ratio>`
    - `<resolution>`
    - `<shape-box>`
    - `<single-transition-timing-function>`
    - `<string>`: str
    - `<time>`
    - `<transform-function>`
    - `<url>`: url()

- Non-basic Data Types
    - `<dimension>`
        - `<length>`
        - `<time>`
        - `<resolution>`

### `<length>`

- Syntax
    - `<number><unit>`

- Unit
    - 绝对长度单位
        - `px`
        - `mm`
        - `cm`
        - `Q`
        - `in`
        - `pc`
    - 相对长度单位
        - 字体相对长度
        - `cap`
        - `ch`
        - `em`
        - `ex`
        - `ic`
        - `lh`
        - `rem`
        - `rlh`
        - 视口比例长度
        - `vh`
        - `vw`
        - `vi`
        - `vb`
        - `vmin`
        - `vmax`

### `<flex>`

- Syntax
    - `<number>fr`

- Idea
    - A length unit in grid container, which is weight of remaining length

### `<percentage>`

- Syntax
    - `<number>%`
    - negative number is invalid

### `<number>`

- Examples
    - `-3.4e-2`
    - `.95`
    - `-3.14`
    - `0.0`
    - `+0.0`
    - `-0.0`

### `<url>`

- Syntax
    - `url("...")`
    - `url(...)`

## API

### Box model

- References
    - [Box model - CSS Reference](https://cssreference.io/box-model/)
    - [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model)

- Idea
    - Everything in page is a box

- Philosophy
    - Box Model
        - margin
            - border
                - padding
                    - content
        - CSS 一切皆盒子，正确说法是「inline box 行盒」「block box 块盒」
        - Content 必须放在 inline box 中
        - inline box 和 block box 不能相邻，因此会生成很多「匿名行盒」「匿名块盒」
        - 「行级元素」「块级元素」是过时且错误的说法。`div` 是 block box、`span` 是 inline box，不是因为是这么规定的，而是因为浏览器有个「默认样式表」（默认的 `.css`），里边写有 `.div {display:block}` `.span {display:inline}`，这才是本质原因
    - [盒模型 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
    - [探究 CSS 解析原理 - 知乎](https://zhuanlan.zhihu.com/p/31311515?utm_id=0)

- API
    - `margin`
        - `margin-top`
        - `margin-right`
        - `margin-bottom`
        - `margin-left`
    - `border`
        - `border-top`
            - `border-top-color`
            - `border-top-style`
            - `border-top-width`
        - `border-right`
            - `border-right-color`
            - `border-right-style`
            - `border-right-width`
        - `border-bottom`
            - `border-bottom-color`
            - `border-bottom-style`
            - `border-bottom-width`
        - `border-left`
            - `border-left-color`
            - `border-left-style`
            - `border-left-width`
        - `border-color`
            - `border-top-color`
            - `border-right-color`
            - `border-bottom-color`
            - `border-left-color`
        - `border-width`
            - `border-top-width`
            - `border-right-width`
            - `border-bottom-width`
            - `border-left-width`
        - `border-radius`
            - `border-top-left-radius`
            - `border-top-right-radius`
            - `border-bottom-left-radius`
            - `border-bottom-right-radius`
        - `border-image`
            - `border-image-source`
            - `border-image-slice`
            - `border-image-width`
            - `border-image-outset`
            - `border-image-repeat`
        - `border-style`
        - `border-spacing`
        - `border-collapse`
    - `padding`
        - `padding-top`
        - `padding-right`
        - `padding-bottom`
        - `padding-left`
    - `box-shadow`
    - `box-sizing`
        - padding/border/margin 是否算入 width
    - `height`
        - `min-height`
        - `max-height`
    - `width`
        - `min-width`
        - `max-width`

### Backgrounds

- Referneces
    - [Backgrounds - CSS Reference](https://cssreference.io/backgrounds/)
    - [背景与边框 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

- Idea
    - Background of box

- API
    - `background`
        - `background-color`
        - `background-image`
        - `background-repeat`
        - `background-size`
        - `background-position`
        - `background-attachment`
        - `background-origin`
        - `background-clip`
    - `opacity`
    - `visibility`
    - `color-scheme`

### Shape

- References
    - [CSS shapes | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes)
    - [CSS 的图形（Shape）概览 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

- Idea
    - Shape of floating element

- API
    - `shape-margin`
    - `shape-outside`
    - `shape-image-threshold`

### Content

- References
    - [Typography - CSS Reference](https://cssreference.io/typography/)
    - [CSS fonts | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts)
    - [CSS text | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text)
    - [CSS overflow | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow)

- Idea
    - Typeset box content

- API
    - `content`
    - `overflow`
        - `overflow-anchor`
        - `overflow-block`
        - `overflow-clip-margin`
        - `overflow-inline`
        - `overflow-wrap`
        - `overflow-x`
        - `overflow-y`
    - Text
        - `text-*`
            - `text-align`
            - `text-decoration`
                - `text-decoration-line`
                - `text-decoration-color`
                - `text-decoration-style`
                - `text-decoratino-skip`
            - `text-indent`
            - `text-overflow`
            - `text-shadow`
            - `text-transform`
        - Direction
            - `direction`
            - `unicode-bidi`
            - `writing-mode`
        - `color`
        - `font`
            - `font-family`
            - `font-variant`
            - `font-size`
            - `font-weight`
            - `font-style`
        - `line-height`
        - `line-break`
        - `word-break`
        - `white-space`
        - `word-spacing`
        - `letter-spacing`
    - `list-style`
        - `list-style-type`
        - `list-style-image`
        - `list-style-position`
    - Table
        - `table-layout`
        - `empty-cells`
        - `border-collapse`
        - `border-spacing`
        - `caption-side`

### Layout

- Idea
    - Display: Elements flow
    - Position: Coordinate relative to axsis
    - 凡是布局的事，一定（可以用）要用 CSS Layout 相关属性解决

- References
    - [网格布局和其他布局方法的联系 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
    - [CSS 布局和定位 (CSS Display & Position) - 范叶亮 | Leo Van](https://leovan.me/cn/2023/05/css-display-and-position/)
    - [CSS 定位详解 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/11/css-position.html)
    - [CSS Grid 网格布局教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
    - [Flex 布局教程：语法篇 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
    - [flexbox演示站](https://xluos.github.io/demo/flexbox/)
    - [Flex 布局 | 菜鸟教程](https://www.runoob.com/w3cnote/flex-grammar.html)
    - [Flexbox - CSS Reference](https://cssreference.io/flexbox/)
    - [Grid - CSS Reference](https://cssreference.io/css-grid/)
    - [CSS display | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display)
    - [Positioning - CSS Reference](https://cssreference.io/positioning/)
    - [CSS flexible box layout | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
    - [CSS grid layout | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
    - [CSS positioned layout | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout)
    - [CSS multi-column layout | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout)

- Examples
    - [粘性页脚 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook/Sticky_footers)
    - [浅析CSS实现Footer置底的几种方式 | Psilo's TecBlog](https://psilocine.github.io/2017/11/05/%E6%B5%85%E6%9E%90CSS%E5%AE%9E%E7%8E%B0Footer%E7%BD%AE%E5%BA%95%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F/)
    - [CSS - Flexbox實現footer置底](https://andytsai.coderbridge.io/2020/05/13/flexbox-sticky-footer/)
    - [利用网格布局和粘性定位实现表头和左右固定布局 - 知乎](https://zhuanlan.zhihu.com/p/372040395)

- API
    - 传统布局
        - `display`
        - `float`
        - `clear`
        - `writing-mode`
            - [writing-mode | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
        - `position`
            - `top`
            - `right`
            - `bottom`
            - `left`
            - `z-index`
    - Flexbox
        - Container
        - `flex-flow`
            - `flex-direction`
            - `flex-wrap`
        - `justify-content`
        - `align-items`
        - `align-content`
        - Item
        - `order`
        - `flex`
            - `flex-grow`
            - `flex-shrink`
            - `flex-basis`
        - `align-self`
    - Grid
        - Container
        - `display: grid`
        - `display: inline-grid`
        - `grid`
            - `grid-template-rows`
            - `grid-template-columns`
            - `grid-template-areas`
            - `grid-auto-*`
                - `grid-auto-columns`
                - `grid-auto-flow`
                - `grid-auto-rows`
        - `grid-template`
            - `grid-template-columns`
            - `grid-template-rows`
            - `grid-template-areas`
        - `gap`
            - `row-gap`
            - `column-gap`
        - `place-items`
            - `justify-items`
            - `align-items`
        - `place-content`
            - `justify-content`
            - `align-content`
        - Item
        - `grid-area`
            - `grid-column`
                - `grid-column-start`
                - `grid-column-end`
                - `grid-column-gap`
            - `grid-row`
                - `grid-row-start`
                - `grid-row-end`
                - `grid-row-gap`
        - `place-self`
            - `justify-self`
            - `align-self`

- Objects
    - Block box
        - width == width of parent contianer
        - 盒子都会换行
    - Inline box
        - width 和 height 属性将不起作用
        - 盒子不会换行
    - Writing mode
        - 简单地说，`writing-mode` 定义了 element **内部**的 sub-elements 排列的方向
        - `writing-mode` 属性实际上设定的是页面上块级元素的显示方向——要么是从上到下，要么是从右到左，要么是从左到右
        - 或者说，改变了「行」的定义，正常的「行」是横向的，`writing-mode` 可以改为纵向的，「下一行」可以是「从上到下」「从左到右」「从右到左」
        - 可以达到 `height` 与 `width` 互换的效果
        - [逻辑属性与逻辑值的基本概念 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
        - [Handling different text directions - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)

### Scroll snap

- References
    - [CSS scroll snap | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)
    - [滚动吸附的基本概念 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)

### Transition

- References
    - [Transitions - CSS Reference](https://cssreference.io/transitions/)
    - [transition - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

- API
    - `transition`
        - `transition-delay`
        - `transition-duration`
        - `transition-property`
        - `transition-timing-function`

### Animation

- References
    - [✿ cubic-bezier](https://cubic-bezier.com)
    - [AnimXYZ](https://animxyz.com/)
    - [Animations - CSS Reference](https://cssreference.io/animations/)
    - [使用 CSS 动画 - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
    - [animation - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

- Idea
    - 凡是动画的事，一定要用 Animation 相关属性解决

- API
    - `animation`
        - `animation-delay`
        - `animation-direction`
        - `animation-duration`
        - `animation-fill-mode`
        - `animation-iteration-count`
        - `animation-name`
        - `animation-play-state`
        - `animation-timing-function`

### Transform

- References
    - [CSS Transforms | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_transforms)

- API
    - `transform`
        - `transform-origin`
        - `transform-style`
        - `transform-box`
    - `perspective`
        - `perspective-origin`
    - `backface-visibility`

### Filter

- Alternatives
    - CSS filter 功能上算是 SVG filter 的子集

### Function

- References
    - [CSS value functions | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)

- Idea
    - generate property value

- API
    - 基础
        - `attr()`
        - `url()`
        - `var()`
        - `element()`
        - `image-set()`
        - `counter()`
        - `counters()`
    - 颜色
        - `rgb()`
        - `rgba()`
        - `hwb()`
        - `lab()`
        - `lch()`
        - `device-cmyk()`
        - `color-mix()`
        - `oklab()`
    - 滤镜
        - `blur()`
        - `brightness()`
        - `contrast()`
        - `saturate()`
        - `sepia()`
        - `invert()`
        - `grayscale()`
        - `drop-shadow()`
        - `hue-rotate()`
    - 渐变
        - 线性
            - `linear-gradient()`
            - `repeating-linear-gradient()`
        - 径向
            - `radial-gradient()`
            - `repeating-radial-gradient()`
        - 锥形
            - `conic-gradient()`
            - `repeating-conic-gradient()`
    - 数学
        - `calc()`
        - `min()`
        - `max()`
        - `clamp()`
    - 图形
        - `circle()`
        - `ellipse()`
        - `inset()`
        - `polygon()`
        - `path()`
    - 变换
        - 缩放
            - `scale()`
            - `scaleX()`
            - `scaleY()`
            - `scaleZ()`
            - `scale3d()`
        - 旋转
            - `rotate()`
            - `rotateX()`
            - `rotateY()`
            - `rotateZ()`
            - `rotate3d()`
        - 平移
	        - `translate()`
	        - `translateX()`
	        - `translateY()`
	        - `translateZ()`
	        - `translate3d()`
        - 倾斜
	        - `skew()`
	        - `skewX()`
	        - `skewY()`
        - 透视
	        - `perspective()`
        - 矩阵
	        - `matrix()`
	        - `matrix3d()`
    - 布局
        - `fit-content()`
        - `minmax()`
        - `repeat()`
    - 动画
        - `cubic-bezier()`
        - `steps()`
