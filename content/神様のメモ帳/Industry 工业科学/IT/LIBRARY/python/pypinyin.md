---
tags:
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

```python
pip install pypinyin

a: List[str] = lazy_pinyin('中心')
b = ' '.join(a)
print(b)
# 'zhong xin'


>>> from pypinyin import pinyin, lazy_pinyin, Style
>>> pinyin('中心')  # or pinyin(['中心'])，参数值为列表时表示输入的是已分词后的数据
[['zhōng'], ['xīn']]
>>> pinyin('中心', heteronym=True)  # 启用多音字模式
[['zhōng', 'zhòng'], ['xīn']]
>>> pinyin('中心', style=Style.FIRST_LETTER)  # 设置拼音风格
[['z'], ['x']]
>>> pinyin('中心', style=Style.TONE2, heteronym=True)
[['zho1ng', 'zho4ng'], ['xi1n']]
>>> pinyin('中心', style=Style.TONE3, heteronym=True)
[['zhong1', 'zhong4'], ['xin1']]
>>> pinyin('中心', style=Style.BOPOMOFO)  # 注音风格
[['ㄓㄨㄥ'], ['ㄒㄧㄣ']]
>>> lazy_pinyin('威妥玛拼音', style=Style.WADEGILES)
['wei', "t'o", 'ma', "p'in", 'yin']
>>> lazy_pinyin('中心')  # 不考虑多音字的情况
['zhong', 'xin']
>>> lazy_pinyin('战略', v_to_u=True)  # 不使用 v 表示 ü
['zhan', 'lüe']
# 使用 5 标识轻声
>>> lazy_pinyin('衣裳', style=Style.TONE3, neutral_tone_with_five=True)
['yi1', 'shang5']
# 变调  nǐ hǎo -> ní hǎo
>>> lazy_pinyin('你好', style=Style.TONE2, tone_sandhi=True)
['ni2', 'ha3o']


```
