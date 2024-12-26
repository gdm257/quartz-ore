---
tags:
  - flag/LANGUAGE/CSS
  - flag/Library/APILayer/Implement__/Web/Layout
  - flag/Library/APILayer/Implement__/Web/Typography
  - Label/Industry-工业科学/IT/Library/3rdLibrary
npm: tailwindcss
files:
  - tailwind.config.js
css-at-rules:
  - "@config"
  - "@tailwind"
  - "@layer"
  - "@apply"
css-functions:
  - theme()
  - screen()
layers:
  - base
  - components
  - utilities
html-classes:
  - "{modifier:modifier:...:?}{utility}"
  - "{modifier:modifier:...:?}{variant}-[{arbitrary_value}]"
modifiers:
  - dark
  - contrast-more
  - contrast-less
  - motion-safe
  - motion-reduce
  - print
  - potrait
  - landscape
  - sm
  - md
  - lg
  - xl
  - 2xl
  - min-[...]
  - max-sm
  - max-md
  - max-lg
  - max-xl
  - max-2xl
  - max-[...]
  - hover
  - focus
  - active
  - visited
  - focus-within
  - focus-visible
  - placeholder-shown
  - autofill
  - enabled
  - disabled
  - read-only
  - checked
  - indeterminate
  - default
  - required
  - valid
  - invalid
  - in-range
  - out-of-range
  - target
  - "*"
  - has-*
  - group-has-*
  - peer-has-*
  - group
  - group-*
  - group/{name}
  - group/{name}-*
  - peer
  - peer-*
  - peer/{name}
  - peer/{name}-*
  - empty
  - "*:"
  - first
  - last
  - only
  - odd
  - even
  - first-of-type
  - last-of-type
  - only-of-type
  - before
  - after
  - first-letter
  - first-line
  - first-child
  - marker
  - selection
  - file-selector-button
  - backdrop
  - placeholder
---

## Brief

- References
    - [TailwindCSS的使用，看这一篇就够了！ | Xpzheng's Blog](https://zhengxiaoping.xyz/fullstack/TailwindCSS%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.html)
    - [Tailwind CSS Document](https://tailwindcss.com/docs/aspect-ratio)
        - 我发现，[Tailwind CSS Document](https://tailwindcss.com/docs/aspect-ratio) 就是最好的 [[CSS]] 文档，哪怕你不用 [[Tailwind CSS]]

- Idea
    - [[CSS]] in [[HTML]]

- Alternatives
    - [[CSS]]
    - [[SASS]]

- Installation
    - `npm install -D tailwindcss`

- Configuration
    - `tailwind.config.js`
    - `tailwind.config` object
    - Input & Content
        - Content: files using utility classes
        - Input
            - `@tailwind base;` normalize
            - `@tailwind components;` utility classes?
            - `@tailwind utilities` utility classes
            - [Preflight - Tailwind CSS](https://tailwindcss.com/docs/preflight)

- Data
    - `tailwindcss -c tailwind.config.js -o output.css`

- Ecosystem
    - [dcastil/tailwind-merge: Merge Tailwind CSS classes without style conflicts](https://github.com/dcastil/tailwind-merge)
    - [aniftyco/awesome-tailwindcss: 😎 Awesome things related to Tailwind CSS](https://github.com/aniftyco/awesome-tailwindcss)
    - [unlight/tailwind-components: Collection of components found on the internet](https://github.com/unlight/tailwind-components)
    - [10 best Tailwind CSS component libraries - LogRocket Blog](https://blog.logrocket.com/10-best-tailwind-css-component-libraries/)

- Philosophy
    - Utility First
    - Atomic CSS
        - [[CSS]] by [[HTML]] element classname
        - 移除 `class` 命名的烦恼
        - 移除 selector 的书写
        - [使用 Tailwind CSS 一年后，我的一些感受 - 掘金](https://juejin.cn/post/6951300894684577823)
    - Mobile First
        - 不加前缀的工具类都是针对小屏幕的 `text-center`
        - 加了前缀的工具类都是针对大屏幕的 `md:text-center`
        - [基于 tailwindcss 的多端自适应布局方案 - 掘金](https://juejin.cn/post/7265129339195424827)
    - On-demand
        - [[Bootstrap]] comes with lots of [[CSS]] styles regardless of whether style are used
        - [[Tailwind CSS]] generates [[CSS]] bundle on-demand that it only introduces used styles(classes)
        - [[Tailwind CSS]] reduces [[CSS]] size

- Pro
    - 支持 渐进式学习曲线
        - [[CSS]] 任何阶段的开发者可零成本直接上手

- Con
    - Classes 必须写在同一行
        - 可读性差
        - 不要想着引号包裹然后分行写，这样只有第一行生效，其余解析不出来
    - 所有 class name 必须是硬编码
        - 包括 utility class、variant、arbitrary-values etc
        - [[Tailwind CSS]] 最终的目的是生成 [[CSS]]
            - `tailwindcss` cli 生成 `.css` 文件，并在 [[HTML]] 引入该 `.css`
            - 引入 [[Tailwind CSS]] Script 则是 [[HTML]] 渲染时生成 [[CSS]] 并应用，这种做法性能差不推荐
        - 最终的 [[CSS]] 是 **100% 按需生成**
            - class selector 必须是硬编码，因此 class name 也必须是硬编码，也就是编译（预处理）阶段必须 100% 确定 class name
            - [arbitrary-values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) 必须是静态的硬编码，不能是变量，因为对应的 CSS Rule 需要编译才能生成，不确定的 Selector 无法生成
            - 缓解方法：将 arbitrary-values 写成 `preset`，使用的时候也是用 `preset` 定义的 utility class
            - 其实这是个伪需求，因为这种做法本质上是「运行时导入」，import 应该在编译阶段就解决，而非放在运行时
    - Hard to implement complex [[CSS]] selector
        - 凡是涉及「*非当前元素*的样式」，要用 `group` `peer` `before` `after` `*:` etc，有的甚至无法实现；加上 `hover` etc 伪类，更加复杂了
        - 「修改指定元素的某种后代元素的样式」，原生 [[CSS]] 只需要简单的「后代选择器」，而 [[Tailwind CSS]] 却无解，只能写插件用 [[JavaScript|JS]]/[[TypeScript|TS]] 强行生成 [[CSS]] 选择器。参考 [[tailwindcss-typography]]。找到个可能的解决方案 [[tailwindcss-selector-patterns]]
        - [Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states)

- Test
    - package script instead of tailwind binary cli
        - 请用 package script of package manager 来运行 `tailwindcss` 从而生成 `.css`
        - 因为 tailwind binary cli 不支持引入额外的依赖如 [[iconify]]/[[daisyui]]

## Configuration

- References
    - [TailwindCSS高级使用技巧 | Xpzheng's Blog](https://zhengxiaoping.xyz/fullstack/TailwindCSS%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7.html)
    - [Functions & Directives - Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives)

- Configuration
    - `tailwind.config.js`
        - `presets: [require('./tailwind.preset.js'),]`

### Variant

- Idea
    - `class="md:text-center"` 里的 `md` 就是一个 Varaint

- Examples
    - [forge-htmx - Forge](https://www.forgepackages.com/docs/forge-htmx/#tailwind-css-variant)

- Configuration
    - `tailwind.config.js` 支持 自定义 Varaints

- Philosophy
    - [[CSS]] Selectors 死亡了吗？
        - *aka Variant 诞生的原因*
        - 使用 [[Tailwind CSS]] 时，有一件隐藏的事情发生了。那就是「我们已经选择了 CSS 对哪个 HTML element 生效」——在 `class` attribute 里使用了 [[Tailwind CSS]] 的工具类的 element 生效，其他 elements 不生效。这不就是 [[CSS]] Selectors 么！
        - 没错，我们已经选择好了 element。
        - 这是否意味着我们再也不需要 CSS Selectors，即 CSS Selector 的死亡？
        - 答案是否定的。尽管我们不需要写 id selector/type selector/attribute selector 之类的 selectors，但那些依赖于 element 的「状态」的 selectors 无法模拟。
        - E.g. media query/pseudo-class selector/pseudo-element selector/at-rules
        - E.g. `:hover` pseudo-class selector 就无法直接模拟，因为这涉及 element 的「状态」——光标是否停留
        - [[Tailwind CSS]] 为了模拟这些 selectors，设计了 Variant 机制
    - Variant
        - `<variant>:<variant2>:<variant3>:<utility_class>`
        - `utility_class` 仅在所有 `variant`（CSS Selector）命中当前 element 的情况下生效
        - [[Tailwind CSS]] 自带了一些 variants
            - Dark
                - `dark`
                - E.g. `dark:bg-gray-800`
            - Screen
                - `sm`
                - `md`
                - `lg`
                - `xl`
                - `2xl`

#### Theme

- Configuration
    - `tailwind.config.js`

- Fundamentals
    - Class-based
        - pseudo class `:is(.dark.*)`

### Arbitrary Variants

- References
    - [Advanced responsive grids with Tailwind — Morgan Feeney](https://morganfeeney.com/guides/tailwind/advanced-responsive-grids-with-tailwind)

### Arbitrary Values

- References
    - [Advanced responsive grids with Tailwind — Morgan Feeney](https://morganfeeney.com/guides/tailwind/advanced-responsive-grids-with-tailwind)

- Examples
    - [Adding Custom Styles - Tailwind CSS](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

### Arbitrary Properties

- References
    - [Advanced responsive grids with Tailwind — Morgan Feeney](https://morganfeeney.com/guides/tailwind/advanced-responsive-grids-with-tailwind)
