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

isEqual
---

_.isEqual(a, b)

compare a and b is

- same table
- value equal
- deep equal

it won't compare metatable

```lua
_.isEqual(1, 1)
-- → true

_.isEqual({a = 1}, {a = 1})
-- → true

_.isEqual({}, {})
-- → true
```


trim
---

_.trim(string, [where])

```lua
_.trim('  abc   ')
-- → 'abc'

_.trim('    ')
-- → ''

_.trim('  abc  ', 'right')
-- → '  abc'

_.trim('  abc  ', 'left')
-- → 'abc  '
```


extend
---

_.extend(dst, ...)

```lua
_.extend({a = 1}, {b = 2})
-- → {a = 1, b = 2}

_.extend({a = 1, b = 2}, {b = 3})
-- → {a = 1, b = 3}

_.extend({a = 1}, {b = 2}, {c = 3}
-- → {a = 1, b = 2, c = 3}
```

split
---

_.split(str, sep)

```lua
_.split('q,w,e,r', ',')
-- → {'q', 'w', 'e', 'r'}

_.split('qwer as', ''
-- → {'q', 'w', 'e', 'r', ' ', 'a', 's'}
```

empty
---

_.empty(value)

```lua
_.empty(false)
_.empty({})
_.empty(0)
_.empty('')
-- → true

_.empty(1)
_.empty('0')
_.empty(true)
-- → false
```


only
---

_.only(table, keys)

```lua
_.only({
    a = 1,
    b = 2,
    c = 3
}, {'a', 'b'})
-- →
{a = 1, b = 2}

_.only({
    a = 1,
    b = 2,
    c = 3,
    d = 4
}, 'a c d')
-- →
{
    a = 1,
    c = 3,
    d = 4
}
```


assertEqual
---

_.assertEqual(actual, expect, [level = 2])

same like `_.isEqual`, but will throw an assertion error when `_.isEqual` return false


ok
---

_.ok(...)

mostly used in multi test cases, also throw assertion error when fail to match

```lua
_.ok(true)

_.ok(false) -- → throw error

_.ok({
    1, 1
}, {
    2, 2
})
-- sugar for
_.assertEqual(1, 1)
_.assertEqual(2, 2)
```


dump
---

_.dump(value)

```lua
print(_.dump({
    a = 1,
    b = {
        a = 1,
        b = {2, 3, 4}
    }
}))

-- →
{
    'b': {
        'b': [2, 3, 4],
        'a': 1
    },
    'a': 1
}
```

print function thread or others cannot `tostring` with `[type]`

```lua
print(_.dump({
    thread = coroutine.create(function() end),
    object = coroutine
}))
-- →
{
    'thread': [thread],
    'object': {
        'create': [function],
        'running': [function],
        'status': [function],
        'wrap': [function],
        'yield': [function],
        'resume': [function]
    }
}
```
