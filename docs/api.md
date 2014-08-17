isArray
---

_.isArray(value)

Check if value is array

```lua
_.isArray({1, 2, 3})
-- → true

_.isArray({1, 2, 3, w = 4})
-- → false
```


each
---

_.each(array, func)

Iterates the array table, executing the callback for each element


_each
---

_._each(array, func)

like `_.each` above, but break loop when `func` return `false`


every
---

_.every(array, func)


some
---

_.some(array, func)


map
---

_.map(array, func)


isEqual
---

_.isEqual(a, b)


has
---

_.has(array|string, item)


sub
---

_.sub(string, start, end)


trim
---

_.trim(string, where)


flatten
---

_.flatten(array)


push
---

_.push(array, ...)


uniq
---

_.uniq(array)


union
---

_.union(...)


extend
---

_.extend(dst, ...)


sort
---

_.sort(array, func)


filter
---

_.filter(array, func)


indexOf
---

_.indexOf(array, value, [from = 1], [isPlain = false])

`isPlain = true` turns of the pattern matching facilities


lastIndexOf
---

_.lastIndexOf(array, value, [from = #array], [isPlain = false])
