---
aliases:
  - reStructuredText
  - rst
tags:
  - flag/MachineLanguage/Markup
  - Label/Industry-工业科学/IT/Language
---

```rst
========================================
一级标题：跳转是 rst 唯一的杀手锏
========================================

--------------
二级标题
--------------

三级标题
~~

4 级标题
####

N 级标题
= - ~ ` : ‘ ” ^ _ * _ # < > 这些符号都可以, 级别足够多了



* 无序列表
- 无序列表
+ 无序列表


1. 有序列表 1
    1. 同样支持缩进
#. 有序列表 2
#. 有序列表 3
7. 有序列表 7
#. 有序列表 8
    a. 小写字母
    A. 大写字母
    i) 小写罗马数字
    (I) 大写罗马数字


**粗体**
`行内代码`
上标 E = mc\ :sup:`2`
下标 H\ :sub:`2`\ O
*斜体*

代码块::

    code
    code
    code


.. _fig_0601:
.. figure:: ../_static/figs/magic-2.png

   插图 6-1 神奇的2


列表表格

.. list-table:: Frozen Delights!
  :widths: 15 10 30
  :header-rows: 1

  * - Treat
    - Quantity
    - Description
  * - Albatross
    - 2.99
    - On a stick!
  * - Crunchy Frog
    - 1.49
    - If we took the bones out, it wouldn't be
      crunchy, now would it?
  * - Gannet Ripple
    - 1.99
    - On a stick!


简单表格

=====  =====  ======
   Inputs     Output
------------  ------
  A      B    A or B
=====  =====  ======
False  False  False
True   False  True
False  True   True
True   True   True
=====  =====  ======


普通表格

+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  |
+============+============+===========+
| body row 1 | column 2   | column 3  |
+------------+------------+-----------+
| body row 2 | Cells may span columns.|
+------------+------------+-----------+
| body row 3 | Cells may  | - Cells   |
+------------+ span rows. | - contain |
| body row 4 |            | - blocks. |
+------------+------------+-----------+


```