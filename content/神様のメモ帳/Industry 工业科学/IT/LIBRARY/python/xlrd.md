---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## ~~xlrd~~

[Python操作Excel文件（2）：中规中矩三兄弟xlrd、xlwt和xlutils - 知乎](https://zhuanlan.zhihu.com/p/96508811)


```python
只支持 .xls，散了吧。



# pip install xlrd

import xlrd

wb = xlrd.open_workbook('3-12未出图下单表(1).xls')  # 打开 excel 文件
sheets_list = wb.sheets()
for sheet in sheets_list:
    name = sheet.name
    total_row = sheet.nrows  # 行数
    total_colum = sheet.ncols  #列数




sheet_names_list = wb.sheet_names()  # 获取所有 sheet name ['purchaseList (2)', 'purchaseList']
sheet00 = wb.sheet_by_name('purchaseList (2)')
sheet01 = wb.sheet_by_name('purchaseList')

sheet00 == wb.sheet_by_index(0)
sheet01 == wb.sheet_by_index(1)

sheet00 == wb.sheets()[0]
sheet01 == wb.sheets()[1]

sheet00.row(0)[1].value
sheet00.col(1)[0].value
sheet00.cell_value(<row_index>, <column_index>)
sheet00.cell_value(0,1)  # 单元格
sheet00.cell_type(0,1)
sheet00.cell(0,1).ctype
# 类型：

    空：0
    字符串：1
    数字：2
    日期：3
    布尔：4
    error：5




 a）行操作：

    sheet1.row_values(0)  # 获取第一行所有内容，合并单元格，首行显示值，其它为空。
    sheet1.row(0)         　　# 获取单元格值类型和内容
    sheet1.row_types(0)   # 获取单元格数据类型

b) 表操作

    sheet1.row_values(0, 6, 10)   # 取第1行，第6~10列（不含第10表）
    sheet1.col_values(0, 0, 5)    # 取第1列，第0~5行（不含第5行）
    sheet1.row_slice(2, 0, 2)     # 获取单元格值类型和内容
    sheet1.row_types(1, 0, 2)   # 获取单元格数据类型


```
