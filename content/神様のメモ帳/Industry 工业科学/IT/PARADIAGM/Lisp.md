---
tags:
  - Label/Article/Industry-工业科学/IT/LANGUAGE
aliases:
  - List Processing
---

- Fundamentals
    - [The Roots of Lisp - Paul Graham](https://web.archive.org/web/20211028160512/http://languagelog.ldc.upenn.edu/myl/llog/jmc.pdf)
    - [Lisp的本质](https://blog.werner.wiki/the-essence-of-lisp/)
    - [Homoiconic Python - MOHAMMED JAMAL](https://aljamal.substack.com/p/homoiconic-python)
    - [The Hy programming language](https://hylang.org/)
    - [translations/recommend-lisp-books/recommend-lisp-books.md at master · oldratlee/translations](https://github.com/oldratlee/translations/blob/master/recommend-lisp-books/recommend-lisp-books.md)
    - *Expression*
        1. Data aka *e returns v*
            - Arithmetic expression `1 + 1` has the value `2`
            - A valid [[Lisp]] expression yields a *value*
            - Also called "e is *evaluated* as v", "e returns v"
        2. Kinds aka What is an expression?
            1. *atom*
                - a sequence of valid characters
                - Conventionally, the atom `t` to represent *truth*
                - [[RegExp]] `[a-zA-Z*+-/][a-zA-Z0-9_*+-/]* | [0-9]+(\.[0-9]+)? | #\.[a-zA-Z]+`
            2. a *list* of expressions
                - *operator*
                    - Seven Primitive Operators (axioms)
                        1. `(quote x)` `'x` -> `x`
                            - Return expression *itself*, instead of evalated value of expression
                        2. `(atom x)` -> `t` or `()`
                            - Whether `x` is either atom or `()`
                            - Conventionally, the atom `t` to represent *truth*
                            - Conventionally, empty list `()` to represent *falsity*
                        3. `(eq x y)` -> `t` or `()`
                            - Whether `x` and `y` are same
                            - [[Python]] `x == y`
                        4. `(car (a b c))` -> `a`
                        5. `(cdr (a b c))` -> `(b c)`
                        6. `(cons 'x '(a b c))` -> `(x a b c)`
                        7. $\left(cond\left(p_1e_1\right)\ldots\left(p_{n}e_{n}\right)\right)$ -> $e_{x}$ where $p_{x}$ returns t
                            - Return $e_{x}$ expression itself where p expressions are evaluated in order until there is one expression $p_{x}$ returning atom t
                - *arguments*
                    - E.g. `(eq x y)`: `x` and `y` that `(x y)` are arguments
                - `()`
                    - Zero *element*, empty list
                    - Conventionally, the empty list `()` to represent *falsity*
                - *function*
                    - A Function is a *operator* where `(function a b c)`'s arguments `a` `b` `c` are evaluated ONCE separatly, when `(function a b c)` itself is evaluated
                    - `atom` `eq` `car` `cdr` `cons` are functions
                    - `quote` `cond` are not function, which does not evaluate argument directly
                - `(lambda)`
                    - lambda == function where `(lambda (p1...pn) e)`
                    - `(p1...pn)` both are atoms and called *parameters*
                    - `lambda` 目测是 7 个原始操作符封装出来的，用于模拟「函数定义」
                    - *function call* == `((lambda (p1...pn) e) a1...an)`
                    - *parameters* 是形参
                    - `a1...an` 是实参
    - `(eval)`
        - `(lambda)`
        - `(label)`
        - `(subst)`
        - `(defun)`
        - `(cadr)`
        - `(caddr)`
        - `(cdar)`
        - `(list)`
        - `(null.)`
        - `(and.)`
        - `(not.)`
        - `(apend.)`
        - `(pair.)`
        - `(assoc.)`
        - `(eval.)`
        - `(evcon.)`
        - `(evils.)`
