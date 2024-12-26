---
tags:
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/CSS
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/Web/Components
  - Label/Industry-工业科学/IT/Library/Plugin/TailwindCSS
github: mdbootstrap/TW-Elements
npm: tw-elements
js-magic-helper:
  - twe
---

- Dependencies
        - [[Tailwind CSS]]

- Installation
    1. `npm install tw-elements`
    2. `tailwind.config.js` - `module.exports.content: list` - `"./node_modules/tw-elements/js/**/*.js"`
    3. `tailwind.config.js` - `module.exports.plugins: list` - `require("tw-elements/plugin.cjs")`
    4. [[Django]] `STATICFILES_DIRS: list` - `BASE_DIR.parent / "node_modules"`
    5. at the end of `<body>` - `<script src="{% static 'tw-elements/dist/js/tw-elements.umd.min.js' %}" type="text/javascript"></script>`

- Pro
    - Wonderful Documentation
    - Generator Tools
        - Code Generator by interactive WebUI, similar to Qt Designer
