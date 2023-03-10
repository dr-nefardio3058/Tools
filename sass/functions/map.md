**In Sass, the map data type represents one or more key/value pairs.**

_Tip: It is also possible to use the List functions from the previous page, with maps. Then the map will be treated as a list with two elements._

_Sass maps are immutable (they cannot change). So, the map functions that return a map, will return a new map, and not change the original map._

### The following table lists all map functions in Sass:

map-get(map, key)	Returns the value for the specified key in the map.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-get($font-sizes, "small")
Result: 12px

map-has-key(map, key)	Checks whether map has the specified key. Returns true or false.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-has-key($font-sizes, "big")
Result: false

map-keys(map)	Returns a list of all keys in map.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-keys($font-sizes)
Result: "small", "normal, "large"

map-merge(map1, map2)	Appends map2 to the end of map1.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
$font-sizes2: ("x-large": 30px, "xx-large": 36px)
map-merge($font-sizes, $font-sizes2)
Result: "small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px

map-remove(map, keys...)	Removes the specified keys from map.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-remove($font-sizes, "small")
Result: ("normal": 18px, "large": 24px)
map-remove($font-sizes, "small", "large")
Result: ("normal": 18px)

map-values(map)	Returns a list of all values in map.

Example:

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-values($font-sizes)
Result: 12px, 18px, 24px