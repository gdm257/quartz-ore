---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/APILayer/Implement__/Web/DOM
github: markmead/alpinejs-emit
npm: alpinejs-emit
js-magic-helper:
  - $emit
---

- Idea
    - Emit data changes to other Alpine JS elements
    - Let one [[alpine.js]] component manage another [[alpine.js]] component's `x-data`
    - 直接修改其他 [[alpine.js]] components 的内部状态

- Alternatives
    - [[alpine.js]] `$state`
    - [[alpinejs-manage]]

- Con
    - ~~ONLY Support `id` selector~~
    - ONLY Support CSS Selector
        - Hard to manage and trace bug

- Pro
    - Support batch of multiple alpinejs components
    - Support batch of multiple properties
