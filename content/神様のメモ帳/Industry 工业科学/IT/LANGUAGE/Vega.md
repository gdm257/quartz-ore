---
tags:
  - flag/MachineLanguage/ExchangeFormat/Tabular
  - flag/LANGUAGE/JS
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Language
  - Label/Industry-工业科学/IT/Library/3rdLibrary
homepage: https://vega.github.io
npm: vega
github: vega/vega
---

- Idea
    - Vega is a DSL based on [[JSON]]
    - `vega` is a [[JavaScript|JS]] library working with JSON object in Vega DSL

- Deps
    - `npm i vega vega-embed`

- Installation
    - `<script src="https://cdn.jsdelivr.net/npm/vega@5.28.0"></script>`
    - `<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.18.0"></script>`
    - `<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.24.0"></script>`
    - [vega/vega-bundler: Compile optimized Vega and Vega-Lite bundles.](https://github.com/vega/vega-bundler)

- Ecosystem
    - [[Vega-Lite]]
    - [[altair]] for [[Python]]
    - [Vega Editor](https://vega.github.io/editor/)

- Architecture
    1. Generate [[Vega]] / [[Vega-Lite]] JSON
    2. Render [[Vega]] / [[Vega-Lite]] JSON
    - [How Vega Works / Vega | Observable](https://observablehq.com/@vega/how-vega-works)

- Con
    - web-based rendering
        - PNG/SVG for SSR
        - D3 with interactivity for CSR

- Fundamentals
    - Render by D3

- Philosophy
    - Vega treats user input (mouse movement, touch events, _etc._) as first-class streaming data to drive reactive updates to a visualization

- Nodes
    - [Specification | Vega](https://vega.github.io/vega/docs/specification/)
    - Metadata
        - `$schema`: `https://vega.github.io/schema/vega/v5.json`
        - `title`
        - `description`
        - `background`
        - `width`
        - `height`
        - `padding`
        - `autosize`
        - `usermeta: dict`
            - Optional metadata that will be ignored by the Vega parser
    - `data: List[dict]`
    - `scales: List[dict]`
    - `axes: List[dict]`
        - [A Guide to Guides: Axes & Legends in Vega / Vega | Observable](https://observablehq.com/@vega/a-guide-to-guides-axes-legends-in-vega)
    - `legends: List[dict]`
        - [A Guide to Guides: Axes & Legends in Vega / Vega | Observable](https://observablehq.com/@vega/a-guide-to-guides-axes-legends-in-vega)
    - `marks: List[dict]`
        - `from`: `{"data": ...}`
    - `projections: List[dict]`
    - `signals: List[dict]`
        - Signals act as dynamic variables
        - automatically reevaluated when other signal values change, or when input events occur
    - `config: dict`
        - Configuration settings with default values for marks, axes, and legends
    - `encode: Dict[str, dict]`
        - predefine visual properties for `mark`, similar to `config`
        - e.g. `{"update": {"text": {"field": "datum.label"}}}`
