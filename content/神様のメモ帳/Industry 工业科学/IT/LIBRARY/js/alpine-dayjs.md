---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/APILayer/Implement__/Web/Components
github: invoate/alpine-dayjs
npm: "@invoate/alpine-dayjs"
html-properties:
  - x-dayjs
  - x-dayjs-format
---

- Idea
    - This is a simple plugin for [AlpineJS](https://alpinejs.dev/) that wraps the popular JavaScript date library [DayJS](https://day.js.org/)

- Deps
    - [[alpine.js]]

- Installation
    - CDN
        - `<script src="https://unpkg.com/@invoate/alpine-dayjs/dist/alpine-dayjs.min.js" defer></script>` before [[alpine.js]]
    - NPM
        - `import alpineDayJS from "@invoate/alpine-dayjs"`
        - `Alpine.plugin(alpineDayJS({}))`
        - `Alpine.start()`
