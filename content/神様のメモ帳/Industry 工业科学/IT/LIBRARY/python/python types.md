---
aliases:
  - types
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/StandardLibrary
  - flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/MonkeyPatching
---

### `types.MappingProxyType`

- Alternatives
    - [[python immutables|immutables]]

- Idea
    - read-only mapping

- Examples
    - `MAP_01 = MappingProxyType({'foo': 0, 'bar': 1})`

- Con
    - `MappingProxyType` reject assignment only for 1 depth key (same with "shadow copy")
    - it's not really the same thing as an "immutable, hashable dict"

- Fundamentals
    - MappingProxyType disallows writing operation
