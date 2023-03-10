

_Types: Set color functions, Get color functions, and Manipulate color functions:_

# Sass Set Color Functions:

rgb(red, green, blue)	Sets a color using the Red-Green-Blue (RGB) model. An RGB color value is specified with: rgb(red, green, blue). 

Each parameter defines the intensity of that color and can be an integer between 0 and 255, or a percentage value (from 0% to 100%).

Example:

rgb(0, 0, 255); // rendered as blue because the blue parameter is set to its highest value (255) and the others are set to 0

rgba(red, green, blue, alpha)	Sets a color using the Red-Green-Blue-Alpha (RGBA) model. 
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example:

rgba(0, 0, 255, 0.3); 

hsl(hue, saturation, lightness)	Sets a color using the Hue-Saturation-Lightness (HSL) model - and represents a cylindrical-coordinate representation of colors. Hue is a degree on the color wheel (from 0 to 360) - 0 or 360 is red, 120 is green, 240 is blue. Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. Lightness is also a percentage; 0% is black, 100% is white.

Example:

hsl(120, 100%, 50%); // green
hsl(120, 100%, 75%); // light green
hsl(120, 100%, 25%); // dark green
hsl(120, 60%, 70%); // pastel green

hsla(hue, saturation, lightness, alpha)	Sets a color using the Hue-Saturation-Lightness-Alpha (HSLA) model. HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example:

hsl(120, 100%, 50%, 0.3); // green with opacity
hsl(120, 100%, 75%, 0.3); // light green with opacity

grayscale(color)	Sets a gray color with the same lightness as color.

Example:
grayscale(#7fffd4);
Result: #c6c6c6

complement(color)	Sets a color that is the complementary color of color.

Example:

complement(#7fffd4);
Result: #ff7faa

invert(color, weight)	Sets a color that is the inverse or negative color of color. The weight parameter is optional and must be a number between 0% and 100%. Default is 100%.

Example:

invert(white);
Result: black

## Sass Get Color Functions:

red(color)	Returns the red value of color as a number between 0 and 255.

Example:

red(#7fffd4);
Result: 127
red(red);
Result: 255

green(color)	Returns the green value of color as a number between 0 and 255.

Example:

green(#7fffd4);
Result: 255
green(blue);
Result: 0

blue(color)	Returns the blue value of color as a number between 0 and 255.

Example:

blue(#7fffd4);
Result: 212
blue(blue);
Result: 255

hue(color)	Returns the hue of color as a number between 0deg and 360deg.

Example:

hue(#7fffd4);
Result: 160deg

saturation(color)	Returns the HSL saturation of color as a number between 0% and 100%.

Example:

saturation(#7fffd4);
Result: 100%
lightness(color)	Returns the HSL lightness of color as a number between 0% and 100%.

Example:
lightness(#7fffd4);
Result: 74.9%

alpha(color)	Returns the alpha channel of color as a number between 0 and 1.

Example:

alpha(#7fffd4);
Result: 1

opacity(color)	Returns the alpha channel of color as a number between 0 and 1.

Example:

opacity(rgba(127, 255, 212, 0.5));
Result: 0.5

## Sass Manipulate Color Functions:


mix(color1, color2, weight)	Creates a color that is a mix of color1 and color2. The weight parameter must be between 0% and 100%. A larger weight means that more of color1 should be used. A smaller weight means that more of color2 should be used. Default is 50%.
adjust-hue(color, degrees)	Adjusts the color's hue with a degree from -360deg to 360deg.

Example:

adjust-hue(#7fffd4, 80deg);
Result: #8080ff

adjust-color(color, red, green, blue, hue, saturation, lightness, alpha)	Adjusts one or more parameters by the specified amount. This function adds or subtracts the specified amount to/from the existing color value.

Example:

adjust-color(#7fffd4, blue: 25);
Result:
change-color(color, red, green, blue, hue, saturation, lightness, alpha)	Sets one or more parameters of a color to new values.

Example:

change-color(#7fffd4, red: 255);
Result: #ffffd4

scale-color(color, red, green, blue,  saturation, lightness, alpha)	Scales one or more parameters of color.
rgba(color, alpha)	Creates a new color of color with the given alpha channel.

Example:

rgba(#7fffd4, 30%);
Result: rgba(127, 255, 212, 0.3)

lighten(color, amount)	Creates a lighter color of color with an amount between 0% and 100%. The amount parameter increases the HSL lightness by that percent.

darken(color, amount)	Creates a darker color of color with an amount between 0% and 100%. The amount parameter decreases the HSL lightness by that percent.

saturate(color, amount)	Creates a more saturated color of color with an amount between 0% and 100%. The amount parameter increases the HSL saturation by that percent.

desaturate(color, amount)	Creates a less saturated color of color with an amount between 0% and 100%. The amount parameter decreases the HSL saturation by that percent.

opacify(color, amount)	Creates a more opaque color of color with an amount between 0 and 1. The amount parameter increases the alpha channel by that amount.

fade-in(color, amount)	Creates a more opaque color of color with an amount between 0 and 1. The amount parameter increases the alpha channel by that amount.

transparentize(color, amount)	Creates a more transparent color of color with an amount between 0 and 1. The amount parameter decreases the alpha channel by that amount.

fade-out(color, amount)	Creates a more transparent color of color with an amount between 0 and 1. The amount parameter decreases the alpha channel by that amount.