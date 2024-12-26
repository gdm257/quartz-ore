---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/BusinessLogicLayer/Implement__/OS_API
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## win32com

[Python自动操作GUI神器PyAutoGUI - 知乎](https://zhuanlan.zhihu.com/p/302592540)


```python
# pip install win32com

from win32com.client import Dispatch, DispatchEx


excel = DispatchEx('Excel.Application')  # 启动 Excel
excel.Visible = True  # 可视化
excel.DisplayAlerts = False  # 警告

wb = exce.Workbooks.Open('xxx.xlsx')

sheet = wb.Sheets('sheet_name')

cell_range = sheet.Range('C3').CopyPicture()  # 复制图片区域
sheet.Paste()  # 粘贴
sheet.Paste(sheet.Range('A2'))  # 粘贴
excel.Selection
shape_name = 'xxx'
excel.Selection.ShapeRange.Name = shape_name  # 命名 Shape

sheet.Shape(shape_name).Copy  # 选择图片


img = 


```
