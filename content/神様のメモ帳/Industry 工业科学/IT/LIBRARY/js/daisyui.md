---
tags:
- flag/LANGUAGE/HTML
- flag/Library/APILayer/Implement__/Web/Components
- Label/Industry-工业科学/IT/Library/Plugin/TailwindCSS
github: saadeghi/daisyui
npm: daisyui
---

- Dependencies
    - [[Tailwind CSS]]

- Installation
    1. `npm i daisyui`
    2. `tailwind.config.js` - `module.exports.plugins: list` - `require("daisyui")`

- Pro
    - 无 JS 依赖

- Con
    - 交互性差
        - 纯 [[HTML]] + [[CSS]]，看着还行，但对用户来说是不合格的
        - 需要自己手写 [[JavaScript|JS]]，因此 [[daisyui]] 大部分情况并非最佳首选。像 [[vue]] [[React]] 组件库自带 JS 就不会有这种问题
    - 组件偏少，略不够用

- Alternatives
    - 我更优先选 [[hyperui]]/[[TW Elements]]/[[flowbite]]
