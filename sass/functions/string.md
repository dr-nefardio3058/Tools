> Sass strings are 1-based. The first character in a string is at index 1, not 0.

### Strings chart:

quote(string)	Adds quotes to string, and returns the result.

Example:

quote(Hello world!)
Result: "Hello world!"

str-index(string, substring)	Returns the index of the first occurrence of the substring within string.

Example:

str-index("Hello world!", "H")
Result: 1

str-insert(string, insert, index)	Returns string with insert inserted at the specified index position.

Example:

str-insert("Hello world!", " wonderful", 6)
Result: "Hello wonderful world!"

str-length(string)	Returns the length of string (in characters).

Example:

str-length("Hello world!")
Result: 12

str-slice(string, start, end)	Extracts characters from string; start at start and end at end, and returns the slice.

Example:

str-slice("Hello world!", 2, 5)
Result: "ello"

to-lower-case(string)	Returns a copy of string converted to lower case.

Example:

to-lower-case("Hello World!")
Result: "hello world!"

to-upper-case(string)	Returns a copy of string converted to upper case.

Example:

to-upper-case("Hello World!")
Result: "HELLO WORLD!"

unique-id()	Returns a unique randomly generated unquoted string (guaranteed to be unique within the current sass session).

Example:

unique-id()
Result: tyghefnsv

unquote(string)	Removes quotes around string (if any), and returns the result.

Example:

unquote("Hello world!")
Result: Hello world!
