---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Debugger
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/PHP
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/Ruby
github: scottrogowski/code2flow
pip: code2flow
---

- Idea
    - Call Graph

- Pro
    - Untangling spaghetti code.
    - Identifying orphaned functions.
    - Getting new developers up to speed.

- Con
    - No algorithm can generate a perfect call graph for a dynamic language – even less so if that language is duck-typed

- Fundamentals
    1. Translate your source files into ASTs.
    2. Find all function definitions.
    3. Determine where those functions are called.
    4. Connect the dots.

- Dependencies
    - `npm install acron` for [[JavaScript|JS]]
    - `gem install parser` for Ruby
    - `php composer.phar require nikic/php-parser` for [[PHP]]
    - Python: No extra dependencies needed

```bash
Examples:
    code2flow foo.py
    code2flow foo.js

```
