---
tags:
  - flag/LANGUAGE/JS
  - Label/Industry-工业科学/IT/Library/Plugin/AlpineJS
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
js-magic-helper:
  - $persist
  - Alpine.$persist
npm: "@alpinejs/persist"
---

- Idea
    - use localStorage to persist data

- Dependencies
    - [[alpine.js]]

- Installation
    - `<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>` before [[alpine.js]]

- Fundamentals
    - localStorage
        - key name `_x_<key>` for `x-data` key
        - key name `foo` for `persist(value).as('foo')`

- API
    - `Alpine.$persist(value)` for global
    - `$persist(value)` within `x-data` contexts
        - `.as('foo')`
        - `.using(otherStorage)`
        - e.g. `x-data="{foo: persist('bar')}"`
        - e.g. `x-data="{foo: persist('bar').as('_x_foo')}"`
