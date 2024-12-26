---
tags:
- flag/LANGUAGE/HTML
- flag/LANGUAGE/CSS
- Label/Industry-工业科学/IT/Library/Plugin/TailwindCSS
- flag/Library/APILayer/Implement__/Web/Icons
- flag/Library/APILayer/Implement__/Web/Logos
github: iconify/iconify
---

## Brief

- References
    - [Icon Sets • Iconify](https://icon-sets.iconify.design/)
    - [Icônes](https://icones.js.org/)

- Dependencies
    - [[Tailwind CSS]]

- Installation
    - [[Tailwind CSS]] plugin by `@egoist/tailwindcss-icons`
        1. Install `@egoist/tailwindcss-icons` `@iconify/json`
        2. In `tailwind.config.js` - `const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")`
        3. `iconsPlugin({collections: getIconCollections(["collection_name_01", "collection_name_02", "collection_name_03"])})` as a [[Tailwind CSS]] plugin
        4. `i-{collection_name}-{icon_name}` in [[HTML]]
        5. `<span class="i-mdi-home"></span>`
        - [egoist/tailwindcss-icons: Use any icon (100,000+) from Iconify, for TailwindCSS](https://github.com/egoist/tailwindcss-icons)
    - [[Tailwind CSS]] plugin by `@iconify/tailwind`
        1. Install `@iconify/tailwind`
        2. In `tailwind.config.js` import `addDynamicIconSelectors` from `@iconify/tailwind`
        3. `addDynamicIconSelectors()` as a [[Tailwind CSS]] plugin
        4. `<span class="icon-[fluent-emoji-flat--alarm-clock]"></span>` in [[HTML]]
        5. `icon-[{collection_name}--{icon_name}]`
        - [iconify/plugins/tailwind at main · iconify/iconify](https://github.com/iconify/iconify/tree/main/plugins/tailwind)

- Idea
    - All popular icon sets, one framework. Over 200,000 open source vector icons
    - [[Nerd Fonts]] 的 icons 版

- Alternatives
    - [15+ Best Icon Libraries of 2024 - DEV Community](https://dev.to/vinishbhaskar/best-icon-libraries-28ce?ref=dailydev)
