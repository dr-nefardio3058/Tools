**The selector functions are used to check and manipulate selectors.**

### The following table lists all selector functions in Sass:


is-superselector(super, sub)	Checks whether the super selector matches all the elements that sub matches.

Example:

is-superselector("div", "div.myInput")
Result: true
is-superselector("div.myInput", "div")
Result: false
is-superselector("div", "div")
Result: true

selector-append(selectors)	Appends the second (and third/fourth etc.) selector to the first selector.

Example:

selector-append("div", ".myInput")
Result: div.myInput
selector-append(".warning", "__a")
Result: .warning__a
selector-extend(selector, extendee, extender)	 

selector-nest(selectors)	Returns a new selector containing a nested list of CSS selectors based on the list provided.

Example:

selector-nest("ul", "li")
Result: ul li
selector-nest(".warning", "alert", "div")
Result: .warning div, alert div

selector-parse(selector)	Returns a list of strings contained in selector using the same format as the parent selector.

Example:

selector-parse("h1 .myInput .warning")
Result: ('h1' '.myInput' '.warning')

selector-replace(selector, original, replacement)	Returns a new selector with the selectors specified in replacement in place of selectors specified in original.

Example:

selector-replace("p.warning", "p", "div")
Result: div.warning

selector-unify(selector1, selector2)	Returns a new selector that matches only elements matched by both selector1 and selector2.

Example:

selector-unify("myInput", ".disabled")
Result: myInput.disabled
selector-unify("p", "h1")
Result: null

simple-selectors(selectors)	Returns a list of the individual selectors in selectors.

Example:

simple-selectors("div.myInput")
Result: div, .myInput
simple-selectors("div.myInput:before")
Result: div, .myInput, :before