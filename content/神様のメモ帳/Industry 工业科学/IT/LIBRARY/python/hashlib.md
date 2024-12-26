---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

```python
import hashlib


# Compute comic ID (arcid)
def compute_id(file):
    with open(file, 'rb') as f:
        data = f.read(512000)  # Read the first 512 KBs only
        full_data = f.read()
    sha1 = hashlib.sha1(data).hexdigest()
    full_sha1 = hashlib.sha1(full_data).hexdigest()

    return sha1



```
