---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/EventLoop
  - flag/Library/BusinessLogicLayer/Implement__/FP
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: ReactiveX/RxPY
pip: reactivex
---

- Idea
    - ReactiveX for Python

- Alternatives
    - Future-based of multiple-processes multiple-threads
        - 为什么 Python 就很少见 rx？因为多线程、多进程的 future 能被阻塞，避免了 async/await 污染调用链的缺点，又能够以同步代码写同步逻辑，而多进程又能够避免 GIL，可以说除了切换的性能开销，毫无缺点
    - async/await

- Con
    - 难以 debug
