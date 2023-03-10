### The following table lists all numeric functions in Sass:


abs(number)	Returns the absolute value of number.

Example:

abs(15)
Result: 15
abs(-15)
Result: 15

ceil(number)	Rounds number up to the nearest integer.

Example:

ceil(15.20)
Result: 16

comparable(num1, num2)	Returns whether num1 and num2 are comparable.

Example:

comparable(15px, 10px)
Result: true
comparable(20mm, 1cm)
Result: true
comparable(35px, 2em)
Result: false

floor(number)	Rounds number down to the nearest integer.

Example:

floor(15.80)
Result: 15

max(number...)	Returns the highest value of several numbers.

Example:

max(5, 7, 9, 0, -3, -7)
Result: 9

min(number...)	Returns the lowest value of several numbers.

Example:

min(5, 7, 9, 0, -3, -7)
Result: -7

percentage(number)	Converts number to a percentage (multiplies the number with 100).

Example:

percentage(1.2)
Result: 120

random()	Returns a random number between 0 and 1.

Example:

random()
Result: 0.45673

random(number)	Returns a random integer between 1 and number.

Example:

random(6)
Result: 4

round(number)	Rounds number to the nearest integer.

Example:

round(15.20)
Result: 15
round(15.80)
Result: 16