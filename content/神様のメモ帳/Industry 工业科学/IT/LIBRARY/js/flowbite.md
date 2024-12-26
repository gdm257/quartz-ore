---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/CSS
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/Components
  - Label/Industry-工业科学/IT/Library/Plugin/TailwindCSS
github: themesberg/flowbite
npm: flowbite
---

- Dependencies
    - [[Tailwind CSS]]

- Installation
    1. `npm i -D flowbite`
    2. `tailwind.config.js` - `module.exports.plugins: list` - `require('flowbite/plugin')`
    3. `tailwind.config.js` - `module.exports.content: list` - `'./node_modules/flowbite/**/*.js'`
    4. [[Django]] `STATICFILES_DIRS: list` - `BASE_DIR.parent / "node_modules"`
    5. before the end of the `<body>` - `<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>` or `{% static 'flowbite/dist/flowbite.min.js' %}`

- Pro
    - 组件种类丰富
    - 实用性强
