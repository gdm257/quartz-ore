---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/APILayer/Implement__/Web/CSR-Framework
github: vimeshjs/vimesh-ui
npm: "@vimesh/ui"
html-properties:
  - x-component
  - x-import
  - x-include
  - x-shtml
html-elements:
  - vui-*
js-magic-helper:
  - $api
  - $prop
  - $vui
---

- Idea
    - A [[alpine.js]] plugin to build UI components for Alpine.js
    - It is a challenge to develop a UI library directly with [[alpine.js]]

- Alternatives
    - [[alpinejs-component]]

- Pro
    - Support `<slot>` to load inner html from caller into component

- Con
    - NOT Support component level style
    - avoid to use `x-init` in template, you could use `onMounted`

- Dependencies
    - [[alpine.js]]

- Installation
    - `<script src="https://unpkg.com/@vimesh/ui"></script>` before [[alpine.js]]
