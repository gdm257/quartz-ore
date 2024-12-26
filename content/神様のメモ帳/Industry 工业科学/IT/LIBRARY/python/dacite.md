---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: konradhalas/dacite
pip: dacite
---

Simple creation of [[dataclasses]] from [[Python dict]]

```python
from dataclasses import dataclass
from dacite import from_dict


@dataclass
class User:
    name: str
    age: int
    is_active: bool


user_dict = {
    'name': 'John',
    'age': 30,
    'is_active': True,
}

user: User = from_dict(data_class=User, data=user_dict)

assert user == User(name='John', age=30, is_active=True)

```
