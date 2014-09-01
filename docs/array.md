each
---

_.each(array, func)

Iterates the array table, executing the callback for each element

callback will execute with three arguments: (value, index, array)

```lua
_.each({11, 22, 33}, print)
-- →
11      1       table: 0x1fa7600
22      2       table: 0x1fa7600
33      3       table: 0x1fa7600
```

`_.each` can only iterate array table or string, it return the first argument and don't do anything if not the right type

so you don't have to check the type before use the api like

```lua
-- not necessary, _.each will check it for you
if type(array) == 'table' then
    _.each(array, print)
end
```

`_.each` is the base function for other api like `_.map`, `_.filter`, so you can also use them directly without type checking

_each
---

_._each(array, func)

Like `_.each` above, but break loop when `func` return `false`

```lua
local arr = {}
_._each({1, 2, 3, 4}, function(x)
    if x > 2 then return false end -- break loop
    table.insert(arr, x)
end)
arr -- → {1, 2}
```


every
---

_.every(array, func)

Check if all the callback return values are truthy

```lua
_.every({1, 2, 3}, function(x)
    return x > 0
end)
-- → true

_.every({1, 2, 3}, function(x)
    return x > 2
end)
-- → false
```

some
---

_.some(array, func)

Check if any callback return value is truthy

```lua
_.some({1, 2, 3}, function(x)
    return x > 2
end)
-- → true

_.some({1, 2, 3}, function(x)
    return x > 4
end)
-- → false
```

map
---

_.map(array, func)

Return a new array of the results of each callback execution

```lua
_.map({1, 0, 2, 4}, function(x)
    return x + 1
end)
-- → {2, 1, 3, 5}
```

has
---

_.has(array|string, item)

Return true if item in the array|string

```lua
_.has('qwert', 'rt')
-- → true

_.has({1, 2, 3, 4}, 3)
-- → true
```


sub
---

_.sub(string, start, end)

Return substring of a string by start and end index

```lua
_.sub('qwer', 2, 3)
-- → 'we'
```


flatten
---

_.flatten(array)

Flatten a nested array

```lua
_.flatten({1, {2, {3, {4}}}})
-- → {1, 2, 3, 4}
```


push
---

_.push(array, ...)

Push ... to the end of the array

```lua
_.push({1, 2, 3}, 4, 5)
-- → {1, 2, 3, 4, 5}
```


uniq
---

_.uniq(array)

Remove duplicated values in the array

it use table k, v so it won't keep the order

```lua
_.uniq({1, 2, 3, 2, 1})
-- → {1, 2, 3}
```


union
---

_.union(...)

Create an array of unique values, if nested then flatten first

```lua
_.sort(_.union({1, 2, 3}, {5, 2, 1, 4}, {2, 1}))
-- → {1, 2, 3, 4, 5}
```


sort
---

_.sort(array, [func])

Alias for table.sort(table, [func])

```lua
_.sort({3, 2, 4, 1})
-- → {1, 2, 3, 4}
```


filter
---

_.filter(array, func)

Return a new array of elements that passed the callback check

```lua
_.filter({1, 2, 3, 4, 5}, function(x)
    return x > 3
end
-- → {4, 5}
```


indexOf
---

_.indexOf(array|string, value, [from = 1], [isPlain = false])

Get the index of the matched value or nil

`isPlain = true` turns off the pattern matching facilities

```lua
_.indexOf({11, 22, 33}, 22)
-- → 2

_.indexOf({11, 22, 33}, 44)
-- → nil

_.indexOf({11, 22, 33, 33, 22, 11}, 22, 3)
-- → 5
```


lastIndexOf
---

_.lastIndexOf(array|string, value, [from = #array], [isPlain = false])

Match from end of the array, get the index of the matched value or nil

```lua
_.lastIndexOf({11, 22, 33, 11}, 11)
-- → 4
_.lastIndexOf({11, 22, 33, 11}, 0)
-- → nil
_.lastIndexOf({11, 22, 33}, 11)
-- → 1
```

difference
---

_.difference(array, other)

Create an array excluding all values of the second array

```lua
_.difference({1, 2, 3, 4, 5}, {5, 2, 10})
-- → {1, 3, 4}
```


without
---

_.without(array, ...)

Create an array excluding all provided arguments

```lua
_.without({1, 4, 3, nil, 0, ''}, nil, 0, '')
-- → {1, 4, 3}
```


reduce
---

_.reduce(array, fn, [prev])

Reduce a collection to a value which is the accumulated result of running each element in the collection through the callback

```lua
_.reduce({1, 2, 3, 4}, function(ret, k)
    return ret + k
end, 0)
-- → 10
```

invoke
---

_.invoke(arr, fn)

Just like map now

```lua
_.invoke({'1', '2', '3'}, tonumber)
-- → {1, 2, 3}
```
