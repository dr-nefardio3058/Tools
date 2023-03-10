**The list functions are used to access values in a list, combine lists, and add items to lists.**

_Sass lists are immutable (they cannot change). So, the list functions that return a list, will return a new list, and not change the original list._

> Sass lists are 1-based. The first list item in a list is at index 1, not 0.

### The following table lists all list functions in Sass:

append(list, value, [separator])	Adds a single value to the end of the list. separator can be auto, comma, or space. auto is default.

Example:

append((a b c), d)
Result: a b c d
append((a b c), (d), comma)
Result: a, b, c, d

index(list, value)	Returns the index position for the value in list.

Example:

index(a b c, b)
Result: 2
index(a b c, f)
Result: null

is-bracketed(list)	Checks whether the list has square brackets.

Example:

is-bracketed([a b c])
Result: true
is-bracketed(a b c)
Result: false

join(list1, list2, [separator, bracketed])	Appends list2 to the end of list1. separator can be auto, comma, or space. auto is default (will use the separator in the first list). bracketed can be auto, true, or false. auto is default.

Example:

join(a b c, d e f)
Result: a b c d e f
join((a b c), (d e f), comma)
Result: a, b, c, d, e, f
join(a b c, d e f, $bracketed: true)
Result: [a b c d e f]

length(list)	Returns the length of the list.

Example:

length(a b c)
Result: 3

list-separator(list)	Returns the list separator used, as a string. Can be either space or comma.

Example:

list-separator(a b c)
Result: "space"
list-separator(a, b, c)
Result: "comma"

nth(list, n)	Returns the nth element in the list.

Example:

nth(a b c, 3)
Result: c

set-nth(list, n, value)	Sets the nth list element to the value specified.

Example:

set-nth(a b c, 2, x)
Result: a x c

zip(lists)	Combines lists into a single multidimensional list.

Example:

zip(1px 2px 3px, solid dashed dotted, red green blue)
Result: 1px solid red, 2px dashed green, 3px dotted blue