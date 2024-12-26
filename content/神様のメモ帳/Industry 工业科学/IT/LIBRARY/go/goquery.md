---
tags:
  - flag/LANGUAGE/Go
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
go: github.com/PuerkitoBio/goquery@latest
---

[goquery 选择器的使用 - SegmentFault 思否](https://segmentfault.com/a/1190000040390172)

[golang goquery selector(选择器) 示例大全 | 飞雪无情的博客](https://www.flysnow.org/2018/01/20/golang-goquery-examples-selector.html)


```go
// 可以说goquery是jQuery的Golang版本实现。借用jQueryCSS选择器的语法可以非常方面的实现内容匹配和查找。


import (
    "github.com/PuerkitoBio/goquery"
    "net/http"
)


...
defer resp.Body.Close()
if resp.StatusCode != 200 {
    log.Fatalf("status code error: %d %s", resp.StatusCode, resp.Status)
}

// 解析 HTML
// 这是整个 HTML 吗？有没有 head？
doc, err := goquery.NewDocumentFromReader(resp.Body)
if err != nil {
    log.Fatal(err)
}

// CSS 选择器
//
// Document object 的 Find() 方法接收 CSS 选择器表达式作为参数
// Find找到的结果是类似列表的东西（实质是可能拥有多个 node 的 Selection），需要使用 Each() 方法遍历
// Find() 返回的列表无非就 3 种，拥有 0个node、1个node、多个node
// 0个node（找到符合条件的元素0个）
// 1个node 可以不使用 Each() 方法直接操作，保险起见，还是用 Each() 方法
// 多个node
//
// 元素选择器
// element_name
// this    当前元素
// *    所有元素
//
// Class 选择器
// .class_name
//
// 属性选择器
// div[class]    Element 为 div 并且有 class 这个属性
// div[href=abc]    Element 为 div 并且有值为 abc 的 href 属性
// div[class][href=abc]    上面二者的组合，通过连续的中括号多次指定
//
// ID 选择器
// #id_name
//
// Element Class 选择器
// element_name.class_name
//
// :parent 父元素选择器
// 不懂 goquery 是否支持
// div[lang=zh]:parent
//
// Parent>Child 子元素选择器
// body>div    返回body这个父元素下，符合条件的第一级子元素 div
// body div    返回body这个父元素下，符合条件的任意级数的子元素 div
//
// prev+next 相邻选择器
// div[lang=zh]+p
// + 加号前后也是选择器
// 返回 p 元素
// 假设我们要筛选的元素没有规律，但是该元素的上一个元素有规律
//
// prev~next 兄弟选择器
// div[lang=zh]~p
// ~ 波浪号前后也是选择器
// 返回 p 元素
// 有相邻就有兄弟，兄弟选择器就不一定要求相邻了，只要他们共有一个父元素即可
//
// :nth-child(n) 子元素索引选择器
// div:nth-child(1)    返回div元素的第1个子元素
//
// :first 元素索引选择器
// h1:first    返回第1个div元素
// h1:last
// h1:even    偶数
// h1:odd    奇数
//
// :contains 内容过滤器
// div:contains('John')    含有字符串
//
// .class_name .class_name02 .class_name03
// span.field-content:nth-child(1) > h2:nth-child(1)    第一个 class 为 field-content 的 span 元素下的，第一级的，第一个 h2 元素


var Username = doc.Find("span.field-content:nth-child(1) > h2:nth-child(1)").Text()

doc.Find(".s-hotsearch-content .hotsearch-item").Each(func(i int, s *goquery.Selection) {
    content := s.Find(".title-content-title").Text()
    fmt.Printf("%d: %s\n", i, content)
})

selection.Find()
selection.Eq()    // 第index个元素，从 0 开始索引
selection.Slice(a, b)    // 第a-b个元素，从 0 开始索引；负数表示倒数第几个
selection.Parent()    // 获取父元素
selection.ParentFiltered()    // 用法同 Find()
selection.Prev()
selection.PrevFiltered()
selection.Next()    // 下一个兄弟元素
selection.NextFiltered()
selection.Siblings()    // 兄弟元素
selection.Children()
selection.ChildrenFiltered()

selection.Size()    // 元素个数 Size / Length
selection.Length()
selection.Text()
selection.Attr()    // 第一个元素的属性的值
selection.AttrOr()

selection.Each()    // 遍历
selection.Map()    // 遍历




```
