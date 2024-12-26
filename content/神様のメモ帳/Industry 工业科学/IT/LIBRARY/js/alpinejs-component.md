---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/CSS
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/APILayer/Implement__/Web/CSR-Framework
github: markmead/alpinejs-component
homepage: https://js.hyperui.dev/examples/utility-components
npm: alpinejs-component
html-elements:
  - x-component
---

- Idea
    - A [[alpine.js]] plugin that provides the solution to create reusable [[alpine.js]] component by using `<template>`
    - It is a challenge to develop a UI library directly with [[alpine.js]]

- Alternatives
    - [[Vimesh UI]]

- Pro
    - Support component level style

- Con
    - CSS 有 bug
    - NOT Support `<slot>` like [[Vimesh UI]]
    - NOT Support duplicating definition due to id `<template id="...">`
        - May the remote component can solve this problem?

- Deps
    - [[alpine.js]]

- Installation
    - `<script defer src="https://unpkg.com/alpinejs-component@latest/dist/component.min.js"></script>` before [[alpine.js]]
