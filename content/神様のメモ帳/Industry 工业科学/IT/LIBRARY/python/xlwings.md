---
tags:
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[xlwings/xlwings: xlwings is a Python library that makes it easy to call Python from Excel and vice versa. It works with Excel on Windows and macOS as well as with Google Sheets and Excel on the web.](https://github.com/xlwings/xlwings)

[Python Resources for working with Excel - Working with Excel Files in Python](https://www.python-excel.org/)


```python

Description:
    * BSD 3 license.


import xlwings as xw


xw.main.App
xw.main.Book
xw.main.Sheet
xw.main.Range
app: xw.main.App = xw.App()  # 启动 Excel
wb: xw.main.Book = xw.Book()  # New Book in active app
sheet: xw.main.Sheet = xw.Sheet()  # Active Sheet in current workbook
cell_range: xw.main.Range = sheet.range('A2')  # 第 1 行、第 2 列


wb.api.
sheet.api.
cell_range.api.
调用 win32com API


app00 = xw.App()
app01 = xw.App()
app02 = xw.App()
app03 = xw.App()
for app in xw.apps:
    isinstance(app, xw.main.App)
    app.quit()
    app.kill()


wb00 = app.books.open(file00)
wb01 = app.books.open(file01)
wb02 = app.books.open(file02)
wb03 = app.books.open(file03)
wb.activate()
wb.save(path=None)  # 保存工作簿，可传入保存路径，同名会直接覆盖
wb.close()
wb: xw.main.Book = app.books.open('abc.xlsx')  # 在 Excel 里打开文件
wb: xw.main.Book = app.books.add()  # 在 Excel 里新建文件
wb: xw.main.Book = app.books[0]
wb: xw.main.Book = app.books['sheet_name']


sheet: xw.main.Sheet = wb.sheets[0]  # 获取 sheet
sheet.index  # 返回对应sheet的索引值，从0计数
sheet.name = '我爱python知识学堂'  # 工作表重命名
sheet.clear()  # 清空工作表中的内容和格式
sheet.delete()  # 删除 sheet


cell_range: xw.main.Range = sheet.range().last_cell  # 获取单元格
sheet.range('A2').clear()  # 清空单元格内容，对图片无效
range_2 = wb.sheets[0][:3, :3]  # <Range [1.xlsx]Sheet1!$A$1:$C$3>
sheet.used_range
# 工作表sheet中有数据区域最大的行数，法1
sheet['a1048576'].end('up').row
# 工作表sheet中有数据区域最大的行数，法2
sheet.used_range.last_cell.row
# 工作表sheet中有数据区域最大的列数，法1
sheet['xfd1'].end('left').column
# 工作表sheet中有数据区域最大的列数，法2
sheet.used_range.last_cell.column


.Range('A1').raw_value      # 直接获取并设置所使用（pywin32）引擎发送/接受的值，而无需进行任何xlwings数据清理/转换。





sheet = sh00

volume_id = '0'

for i in range(1, 999):
    # 在第一列检测「采购订单号」
    if '订单号' in sheet.range(i,1).value:
        pattern = r'.*?[^\d]+(?P<volume_id>\d{4,}).*?$'
        repl = r'\g<volume_id>'
        volume_id = re.sub(pattern, repl, sheet.range(i, 1).value)
        break

address = ''

for i in range(1, 299):

    cell_value = sheet.range(i, 1).value

    # 跳过空对象
    if cell_value is None:
       continue

    try:
        # 在第一列检测「收货地址」
        if '地址' in cell_value:
            pattern = r'^.*?地址[:：]?(?P<address>.+)$'
            repl = r'\g<address>'
            flags = re.DOTALL
            address = re.sub(pattern, repl, cell_value, flags=flags)
            break
    except 'TypeError':
        continue
    except:
        print('未知错误')
        continue


Excel - 开发工具 - 查看代码，打开 VBA
工具 - 引用，勾选xlwings
注意：你会发现，根本就没有xlwings这个选项。
找到xlwings的addin文件夹，打开xlwings.xlam文件，自然就出现了xlwings选项卡了。
此时再勾选xlwings。
xlwings选项卡 勾选RunPython： Use UDF Server


但论起对Excel操作的全面性和基础性，则首推`win32com`，它是`pywin32`库的一部分。

`xlwings`是`win32com`的高级封装，其中`xlwings.App.macro(name)`方法可以直接调用VBA模块中定义好的函数。

目前最强大的 excel 库，开源，一直在更新

可以调用Excel文件中VBA写好的程序，也可以让VBA调用用Python写的程序。

excel基本结构分为 Application ——> Workbooks ——> Worksheets ——> Range.
即应用程序 ——> 工作簿 ——> 工作表 ——> 单元格。

    Excel程序用App来表示，多个Excel程序集合用Apps表示；
    单个工作簿用Book表示，工作簿集合用Books表示；
    单个工作表用Sheet表示，工作表集合用Sheets表示；
    区域用Range表示，既可以是一个单元格，也可以是一片单元格区域。


    新建：创建一个不存在的工作薄或者工作表
    打开：打开一个已经存在的工作薄
    引用：就是告诉程序，你要操作哪个对象。比如你打开了A、B、C三个工作薄，现在你想操作B工作薄，就要先引用B
    激活：我们可以同时打开多个工作薄，但是一次只能操作一个工作簿，我们正在操作的这个工作薄称为当前活动工作薄，激活的意思就是将某一个对象（工作薄或工作表等）变成当前活动对象




```


【excel 截图】

```python
import xlwings as xw
app=xw.App(visible=True,add_book=False) #使用xlwings的app启动
wb = app.books.open('FE7144-众泰9151单-FZ103290下单表.xlsx')        #打开文件
sheet=wb.sheets[0]                      #选定sheet
all=sheet.used_range                    #获取有内容的range
print(all.value)

all.api.CopyPicture()                   # 复制图片区域
sheet.api.Paste()                       # 粘贴
pic=sheet.pictures[0]                   #当前图片
pic.api.Copy()                          #复制图片
from PIL import ImageGrab
img = ImageGrab.grabclipboard()         # 获取剪贴板的图片数据
img.save("截图.png")             #保存图片
pic.delete()                            #删除sheet上的图片

wb.close()                              #不保存，直接关闭
app.quit()                              #退出app

"""
// 报错 pywintypes.com_error: (-2147417851, '服务器出现意外情况。', None, None)

原因：Excel的com加载项启用

解决方法：office - Excel选项-加载项；管理-com加载项-转到-取消可用加载项的勾选
或与下图对比，取消或删除下图中不存在的加载项。


"""


```
