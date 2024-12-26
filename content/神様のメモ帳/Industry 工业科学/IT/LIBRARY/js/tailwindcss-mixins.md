---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/TailwindCSS
github: brandonmcconnell/tailwindcss-mixins
npm: tailwindcss-mixins
html-classes:
  - mixin
  - mixin/{name}
modifiers:
  - mixin
  - mixin/{name}
alternatives:
  - "[[Astro]]"
---

- Alternatives
    - [[Astro]]
        - `class:list` directive

- Idea
    - Mixins for Tailwind CSS provides a declarative API for creating reusable groups of utilities, reducing code duplication and improving maintainability while emphasizing a utility-first approach

- Pro
    - Compatible with vanilla [[Tailwind CSS]] and existing utilities
    - NO Need to define new variants/modifiers/utilities

- Philosophy
    - CSS in HTML
    - Named Mixins
        - recommend BEM naming

- Installation
    1. `npn i -D `
    2. `tailwind.config.js:module.exports.plugins` - `require('tailwindcss-mixins')`
