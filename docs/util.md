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

Compare a and b if they are

- same table
- value equal
- table and deep equal

```lua
_.isEqual(1, 1)
-- → true

_.isEqual({a = 1}, {a = 1})
-- → true

_.isEqual({}, {})
-- → true
```

it won't compare metatable


trim
---

_.trim(string, [where])

Remove whitespace at ends of a string, default is both ends

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

Extend the properties of ... to the destination object, and return the destination object, ... object properties will overwrite dst object properties

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

Split a string into array by separating it with the separator

```lua
_.split('q,w,e,r', ',')
-- → {'q', 'w', 'e', 'r'}

_.split('qwer as', ''
-- → {'q', 'w', 'e', 'r', ' ', 'a', 's'}
```

empty
---

Check if the value is empty, only when `string ~= ''` or not empty table will return true. read the demo below before you use the api

_.empty(value)

```lua
_.empty(false)
_.empty(true)
_.empty({})
_.empty(0)
_.empty(1)
_.empty('')
_.empty(print)
-- → true

_.empty('0')
_.empty('11111')
_.empty({0})
_.empty({1, 2})
_.empty({a = 1})
-- → false
```


only
---

_.only(table, keys)

Return whitelisted properties of a table

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

Same like `_.isEqual`, but will throw an assertion error when `_.isEqual` return false

```lua
_.assertEqual({a = 1}, {a = 2})
```

program will exit and throw error with output with

> file:line: AssertionError: actual == expect

``` bash
lua: test.lua:19: AssertionError: {
    'a': 1
} == {
    'a': 2
}
stack traceback:
        [C]: in function 'error'
        ./shim.lua:312: in function 'assertEqual'
        test.lua:19: in main chunk
        [C]: in ?
```

ok
---

_.ok(...)

Mostly used in multi test cases, also throw assertion error when fail to match

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

Pretty print a table or other types

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

other types like function thread cannot `tostring` will just print as `[type]`

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
