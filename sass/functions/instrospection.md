**The introspection functions are rarely used when building a stylesheet. However, they are valuable if something does not work properly - to figure out what's going on: like debugging functions.**

## The following table lists all introspection functions in Sass:


call(function, arguments...)	Calls a function with arguments, and returns the result.
content-exists()	Checks whether the current mixin was passed a @content block.
feature-exists(feature)	Checks whether feature is supported by the current Sass implementation.

Example:

feature-exists("at-error");
Result: true

function-exists(functionname)	Checks whether the specified function exists.

Example:

function-exists("nonsense")
Result: false
get-function(functionname, css: false)	Returns the specified function. If css is true, it returns a plain CSS function instead.

global-variable-exists(variablename)	Checks whether the specified global variable exists.

Example:

variable-exists(a)
Result: true
inspect(value)	
Returns a string representation of value.
mixin-exists(mixinname)	Checks whether the specified mixin exists.

Example:


mixin-exists("important-text")
Result: true
type-of(value)	Returns the type of value. Can be number, string, color, list, map, bool, null, function, arglist.

Example:

type-of(15px)
Result: number
type-of(#ff0000)
Result: color

unit(number)	Returns the unit associated with a number.

Example:

unit(15px)
Result: px

unitless(number)	Checks whether the specified number has a unit associated with it.

Example:

unitless(15px)
Result: false
unitless(15)
Result: true

variable-exists(variablename)	Checks whether the specified variable exists in the current scope.

Example:

variable-exists(b)
Result: true