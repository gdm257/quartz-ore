---
aliases:
- TreeSet
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/Library/StandardDataType
---

- Usage
    - 自定义比较算法
        - 实现 Comparable 接口，即 `compareTo()` 方法
        - 构造器传入自定义 `Comparator` 对象
        - PS
            - 二选一，两个同时有，我不确定哪个生效
            - 实测，构造器 `Comparator` 对象优先级高

- Pro
    - 插入/删除 自动升序排序

- Con
    - 「去重」和「排序」共用一种算法，无法分开定义
    - 无法「更新」，元素状态改变后，需要 删除元素、添加元素，来达到更新的效果
    - add/delete 时间复杂度 O(log n)


[[Bing AI]]
在 Java Collection Framework 中，您可以使用 `TreeSet` 来满足您的需求。`TreeSet` 是一个有序集合，它能够自动去重。您可以通过实现 `Comparator` 接口来自定义排序算法，然后将其传递给 `TreeSet` 的构造函数。至于去重算法，您可以通过实现 `Comparable` 接口来自定义元素的比较方法，从而实现自定义的去重算法。这样，您就能够分别定义排序算法和去重算法了。😊

放屁，排序算法就是去重算法，二者共用的，分不开
