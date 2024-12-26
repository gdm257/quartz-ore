---
tags:
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/TypeScript
  - flag/Library/APILayer/Implement__/Web/CSR-Framework
  - flag/Library/APILayer/Implement__/Web/DOM
  - Label/Industry-工业科学/IT/Library/3rdLibrary
react-hooks:
  - useEffect
  - useLayoutEffect
  - useMemo
  - useCallback
  - useReducer
  - useState
  - useRef
  - useImperativeHandle
  - useContext
  - useDebugValue
react-lifecycle:
  - componentDidMount
  - componentDigUpdate
  - componentWillUnmount
---

[javascript - 两年React老兵的总结 - 如何组织React项目 - 前端技术地图 - SegmentFault 思否](https://segmentfault.com/a/1190000019759949)

[t3-oss/create-t3-app: The best way to start a full-stack, typesafe Next.js app](https://github.com/t3-oss/create-t3-app)

- Philosophy
    - [[React]] Hooks
        - 生命周期
            - `useEffect`
                - 相当于 类组件的生命周期事件的处理函数
                - 抛弃类组件
            - `useLayoutEffect`
            - `useCallback`
                - 缓存函数组件的相同调用
                - 组件级
            - `useMemo`
                - 缓存函数组件内部的某些变量
                - 变量级，比 `useCallback` 更灵活
        - Stateful
            - `useReducer`
                - 完美取代 `useState`
                - Philosophy
                    - Command Pattern
            - `useState`
                - Idea
                    - 组件级状态
                - Philosophy
                    - 单一数据流
                    - 状态归属权
            - `useContext`
                - state 是单向数据流，完全归属于某个组件
                - context 令业务相关的所有函数平等地共享变量（尽管函数执行有先后顺序）
            - `useRef`
                - Virtual DOM 太慢了，让我们直接操作 DOM 吧

- Fundamentals
    - `react-router`
        - 提供一些 [[React]] components，它们是为 SPA/MPA 而生
            - `<BrowserRouter>`
            - `<HashRouter>`
            - `<Route>`
            - `<Link>`
            - `<Switch>`
            - `<Redirect>`

```js

// 必装
yarn add \
react  \
react-dom  \
// 按需求装
react-router  \



经过前面的探讨，可以发现，现在前端开发过程分为三个部分：副作用隔离 -> 数据流驱动 -> 视图渲染。

先看视图渲染，不论是 jsx、或 template，都是相同的，可以互相转化的。

再看副作用隔离，一般来说框架也不解决这个问题，所以不管是 react/ag/vue + redux/mobx/rxjs 任何一种组合，最终你都不是靠前面的框架解决的，而是利用后面的 redux/mobx/rxjs 来解决。

最后看数据流驱动，不同框架内置的方式不同。react 内置的是类 redux 的方式，vue/angular 内置的是类 mobx 的方式，cyclejs 内置了 rxjs。

这么来看，react + redux 是最自然的，react + mobx 就像 vue + redux 一样，看上去不是很自然。也就是 react + mobx 别扭的地方仅在于数据流驱动方式不同。对于视图渲染、副作用隔离，这两个因素不受任何组合的影响。


```



### create-react-app

```js
不推荐使用，请用配合 webpack 手动引入 react。

// 自动生成新项目
npx create-react-app project-name
cd project-name
git init
yarn install
yarn list

yarn run start
启动一个 http server；
临时目录中生成 html；
自动在 `head` 注入 <script defer src="/static/js/bundle.js">
于是 <div id="root"></div> 就被修改了。





```


### React in Webpack

```js
// webpack 手动引入 react
cd existed-project
yarn add react react-dom // must

在webpack中，JSX语法是不被webpack识别的，webpack默认只能处理.js后缀名的文件，需要安装第三方loader处理非js文件。而JSX语法，可以使用babel-loader处理。

比如，你想让 Webpack 能够处理 Scss 文件，你只需先安装 sass-loader，然后在配置 Scss 文件的处理规则时，设置 rule 对象的 use 属性为 ['style-loader', 'css-loader', 'sass-loader'] 即可。

别的语言只需要一句 import 的事，JS in HTML 经过多年发展还是需要 webpack 才能解决。


```


### React-Router

```js
yarn add react-router-dom@6

React Router 库包含三个包：react-router、react-router-dom 和 react-router-native。react-router 是核心库，但我们不需要直接安装它。如果你正在开发一个 web 应用，你应该使用 react-router-dom，如果你在使用 React Native 开发移动应用，则应该使用 react-router-native。

两种类型的路由：

    BrowserRouter
    HashRouter

// <BrowserRouter>
"http://example.com/about"
// <HashRouter>
"http://example.com/#/about"

<BrowserRouter> 在两者中会更受欢迎些，因为它使用的是 HTML5 History API 来保持应用的页面与 URL 同步，而 <HashRouter> 则使用的是 URL 的哈希部分（window.location.hash）。如果你的代码运行在不支持 History API 的传统浏览器上，你应该使用 <HashRouter> ，否则 <BrowserRouter> 对于大多数情况来说是更好的选择。

BrowserRouter 服务端渲染，十分自然，用户体验好。

HashRouter 真・浏览器端渲染，无论什么 URL，服务端都返回相同的 HTML，由浏览器解析 `#` 后面的部分并完成渲染。




React Router 路由保持 URL 与 UI 同步。你以声明的方式处理 React Router 路由

- 声明式：`<NavLink to='/products' />`
- 函数式：`histor.push('/products')`


```


### alist-web

```js
仔细读了读源码，alist 的后端 gin 响应的 html 是固定的。CSR 纯客户端渲染（浏览器渲染）。

文件列表真实组件 <Router> - <Switch> - <Route> - <Index> - <IContextProvider> - <Do> - <KuttyHero> - <VStack> - <Box> - <Box className="content-box"> - <Suspense>
src/pages/list/layout/index.tsx
在浏览器 F12 打开 alist，根据 @class 很快就能定位哪个组件是干嘛的。




```


### gin

```go
HashRouter 很简单，无论什么 URL，后端 gin 只需要返回固定 html。

BrowserRouter 玩不明白……思考了下，无论 HashRouter 还是 BrowserRouter，都必须请求后端 API 才能拿到动态数据。那这样的话 HashRouter 和 BrowserRouter 貌似没有区别。


```

### JSX

```js
htmlFor    for属性
className    class属性
{varName}    使用JS变量
{iterableObj.map()}    在JSX中使用循环的唯一方法

{this.state.keyName}

```