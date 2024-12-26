---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Test
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Testing
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: pytest-dev/pytest
pip: pytest
---

## Brief

- References
    - [Full pytest documentation — pytest documentation](https://docs.pytest.org/en/7.3.x/contents.html)
    - [Anatomy of a test — pytest documentation](https://docs.pytest.org/en/7.3.x/explanation/anatomy.html)
    - [Python项目的pytest初始化 · 零壹軒·笔记](https://note.qidong.name/2018/01/pytest-init/)
    - [pytest中的fixture · 零壹軒·笔记](https://note.qidong.name/2018/01/pytest-fixture/)
    - [pytest中使用mock · 零壹軒·笔记](https://note.qidong.name/2018/02/pytest-mock/)

- Usage
    - `pytest`
    - `python -m pytest`
    - `pytest.main()`

- Description
    - `pytest` will run all files of the form `test_*.py` or `*_test.py` in the current directory and its subdirectories
    - Group multiple tests in a class
    - 每个 `*_test()` 方法单独使用一个 instance 进行测试，同一个类的方法之间相互独立无影响

## Ecosystem

- Ecosystem
    - [pytest的插件介绍：pytest-cov、pytest-pep8与pytest-flakes · 零壹軒·笔记](https://note.qidong.name/2018/04/pytest-plugins/)

## Philosophy

- Fundamentals
    - Arrange
    - Act
    - Assert
    - Cleanup
