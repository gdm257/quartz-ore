---
tags:
  - flag/MachineLanguage/ExchangeFormat/Tabular
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Language
  - Label/Industry-工业科学/IT/Library/3rdLibrary
homepage: https://vega.github.io/vega-lite/
npm: vega-lite
github: vega/vage-lite
---

- Idea
    - **Vega-Lite** is a high-level language for _rapidly creating interactive visualizations_
    - `vega-lite` is a [[JavaScript|JS]] library working with Vega-Lite JSON DSL

- Pro
    - [[Vega-Lite]] can compile its specifications to [[Vega]] specifications
    - Compared to [[Vega]], [[Vega-Lite]] provides a more concise and convenient form to author common visualizations

- Ecosystem
    - [Vega-Lite Ecosystem | Vega-Lite](https://vega.github.io/vega-lite/ecosystem.html)
    - [[altair]] for [[Python]]
    - [Vega Editor](https://vega.github.io/editor/)

- Deps
    - `npm i vega vega-embed`

- Installation
    - `<script src="https://cdn.jsdelivr.net/npm/vega@5.28.0"></script>`
    - `<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.18.0"></script>`
    - `<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.24.0"></script>`

- Objects
    - Operators
        - layer
        - facet
        - concat
        - repeat

- Data
    - standalone single view specifications
        - `$schema`
        - `background`
        - `padding`
        - `autosize`
        - `config`
        - `usermeta`
    - Properties for any specifications
        - `title`
        - `name`
        - `description`
        - `data`
        - `transform`
    - Properties for any single view specifications
        - `width`
        - `height`
        - `mark`
        - `encoding`
