most array functions can be used on string too

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


has
---

_.has(array|string, item)


sub
---

_.sub(string, start, end)


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


sort
---

_.sort(array, func)


filter
---

_.filter(array, func)


indexOf
---

_.indexOf(array|string, value, [from = 1], [isPlain = false])

`isPlain = true` turns of the pattern matching facilities


lastIndexOf
---

_.lastIndexOf(array|string, value, [from = #array], [isPlain = false])


difference
---

_.difference(array, other)


without
---

without

_.without(array, ...)


reduce
---

_.reduce(array, fn, [prev])


invoke
---

_.invoke(arr, fn)

just like map now



