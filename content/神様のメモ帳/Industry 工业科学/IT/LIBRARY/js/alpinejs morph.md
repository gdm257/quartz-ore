---
tags:
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/APILayer/Implement__/Web/DOM
npm: "@alpinejs/morph"
js-magic-helper:
  - Alpine.morph
---

- Idea
    - "morph" an element on the page into the provided HTML template

- Fundamentals
    - 不直接 swap/replace 目标 element，而是比较 target element 与 new element，通过 DOM 操作修改已有 target element，使之变得跟 new element 一模一样

- Dependencies
    - [[alpine.js]]

- Installation
    - `<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>` before [[alpine.js]]
