## Functions

<dl>
<dt><a href="#random">random([a])</a></dt>
<dd><p>The function <code>random</code> generates a random color with optional alpha value.</p>
</dd>
<dt><a href="#fromHEX">fromHEX(hexString)</a></dt>
<dd><p>The function <code>fromHEX</code> converts a hexadecimal color string to RGBA values.</p>
</dd>
<dt><a href="#fromRGBA">fromRGBA(rgbaString)</a></dt>
<dd><p>The function <code>fromRGBA</code> parses an RGBA string to extract the red, green, blue, and alpha values,
then creates a new <code>UColor</code> object with these values.</p>
</dd>
<dt><a href="#toHEX">toHEX()</a></dt>
<dd><p>The function <code>toHEX()</code> converts RGB and alpha values to a hexadecimal color representation.</p>
</dd>
<dt><a href="#toRGBA">toRGBA()</a></dt>
<dd><p>The <code>toRGBA()</code> function returns a string representing the RGBA values of a color.</p>
</dd>
<dt><a href="#getGrayScale">getGrayScale()</a></dt>
<dd><p>The getGrayScale function calculates the grayscale value of a color based on its RGB components.</p>
</dd>
<dt><a href="#getContrastColor">getContrastColor()</a></dt>
<dd><p>The function <code>getContrastColor</code> calculates a contrasting color based on the input RGB color
array.</p>
</dd>
<dt><a href="#getPalette">getPalette()</a></dt>
<dd><p>The function <code>getPalette</code> generates a color palette based on the input colors by adjusting the
hue values.</p>
</dd>
<dt><a href="#rgbToHsl">rgbToHsl(r, g, b)</a></dt>
<dd><p>The function <code>rgbToHsl</code> converts RGB values to HSL (Hue, Saturation, Lightness) values in
JavaScript.</p>
</dd>
<dt><a href="#hslToRgb">hslToRgb(h, s, l)</a></dt>
<dd><p>The function <code>hslToRgb</code> converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green,
Blue) color values.</p>
</dd>
</dl>

<a name="random"></a>

## random([a])
The function `random` generates a random color with optional alpha value.

**Kind**: global function  
**Returns**: A new `UColor` object is being returned with random values for red (r), green (g), blue
(b), and alpha (a) components. The alpha component (a) is a random value between 0 and 1, while
the red, green, and blue components (r, g, b) are random integers between 0 and 255.  

| Param | Description |
| --- | --- |
| [a] | The parameter `a` in the `random` function is a value between 0 and 1 representing the alpha channel (transparency) of the color. It is generated randomly using `Math.random()` and rounded to three decimal places. |

<a name="fromHEX"></a>

## fromHEX(hexString)
The function `fromHEX` converts a hexadecimal color string to RGBA values.

**Kind**: global function  
**Returns**: The `fromHEX` static method is returning a new `UColor` object with the red, green,
blue, and alpha values extracted from the input `hexString`. The red, green, and blue values are
extracted from the hexString by parsing substrings of the hexString, and the alpha value is
calculated based on the length of the hexString.  

| Param | Description |
| --- | --- |
| hexString | The `hexString` parameter is a string representing a color in hexadecimal format. It can be in the format `#RRGGBB` for RGB colors or `#RRGGBBAA` for RGBA colors, where: |

<a name="fromRGBA"></a>

## fromRGBA(rgbaString)
The function `fromRGBA` parses an RGBA string to extract the red, green, blue, and alpha values,
then creates a new `UColor` object with these values.

**Kind**: global function  
**Returns**: An instance of the `UColor` class with the red, green, blue, and alpha values extracted
from the input `rgbaString`.  

| Param | Description |
| --- | --- |
| rgbaString | The `rgbaString` parameter is a string representing a color in RGBA format. It typically looks like `rgba(r, g, b, a)` where `r`, `g`, `b` are integers representing the red, green, and blue color channels respectively, and `a` is alpha. |

<a name="toHEX"></a>

## toHEX()
The function `toHEX()` converts RGB and alpha values to a hexadecimal color representation.

**Kind**: global function  
**Returns**: The toHEX() function is returning a hexadecimal representation of the color values
stored in the object. If the alpha value (a) is equal to 1, it returns the hexadecimal
representation of the RGB values. If the alpha value is not 1, it also includes the alpha value
in the hexadecimal representation.  
<a name="toRGBA"></a>

## toRGBA()
The `toRGBA()` function returns a string representing the RGBA values of a color.

**Kind**: global function  
**Returns**: The `toRGBA()` method is returning a string in the format `rgba(r, g, b, a)` where `r`,
`g`, `b`, and `a` are the values of the red, green, blue, and alpha components respectively.  
<a name="getGrayScale"></a>

## getGrayScale()
The getGrayScale function calculates the grayscale value of a color based on its RGB components.

**Kind**: global function  
**Returns**: A new UColor object with the grayscale values for red, green, and blue channels, and
the original alpha value.  
<a name="getContrastColor"></a>

## getContrastColor()
The function `getContrastColor` calculates a contrasting color based on the input RGB color
array.

**Kind**: global function  
**Returns**: A new `UColor` object with the RGB values of the color that is the contrast of the
original color.  
<a name="getPalette"></a>

## getPalette()
The function `getPalette` generates a color palette based on the input colors by adjusting the
hue values.

**Kind**: global function  
**Returns**: The `getPalette` function returns an array of `UColor` objects. The array contains the
original color from `this.colorsArray` converted to HSL and then back to RGB, as well as two
additional colors with slightly adjusted hues.  
<a name="rgbToHsl"></a>

## rgbToHsl(r, g, b)
The function `rgbToHsl` converts RGB values to HSL (Hue, Saturation, Lightness) values in
JavaScript.

**Kind**: global function  
**Returns**: The function `rgbToHsl` is returning an array containing the HSL (Hue, Saturation,
Lightness) values calculated from the input RGB values. The array contains three elements: the
rounded H (Hue) value, the rounded S (Saturation) value, and the rounded L (Lightness) value.  

| Param | Description |
| --- | --- |
| r | The `r`, `g`, and `b` parameters in the `rgbToHsl` function represent the red, green, and blue values of a color respectively. These values are typically in the range of 0 to 255, where 0 represents the absence of that color and |
| g | The `g` parameter in the `rgbToHsl` function represents the green component of an RGB color. In the RGB color model, colors are created by mixing different intensities of red, green, and blue light. The `g` parameter specifies the intensity of the green light in the |
| b | The `b` parameter in the `rgbToHsl` function represents the blue component of an RGB color. In the RGB color model, colors are created by mixing different intensities of red, green, and blue light. The `b` parameter is the intensity of the blue light in the |

<a name="hslToRgb"></a>

## hslToRgb(h, s, l)
The function `hslToRgb` converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green,
Blue) color values.

**Kind**: global function  
**Returns**: The function `hslToRgb` returns an array of three values representing the RGB values of a
color converted from HSL (Hue, Saturation, Lightness) format.  

| Param | Description |
| --- | --- |
| h | Hue value in the range of 0 to 360. |
| s | The `s` parameter in the `hslToRgb` function stands for the saturation value in the HSL (Hue, Saturation, Lightness) color model. It represents the intensity of the color. In the function, the `s` parameter is divided by 100 to normalize |
| l | The `l` parameter in the `hslToRgb` function represents the lightness value in the HSL (Hue, Saturation, Lightness) color model. It ranges from 0 to 100, where 0 is black and 100 is white. |

