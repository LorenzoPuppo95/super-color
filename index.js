/* The UColor class in JavaScript provides methods for creating, manipulating, and converting colors,
including generating random colors, converting from HEX and RGBA formats, calculating grayscale, and
finding contrast colors. */
class UColor {

    /**
     * The function `random` generates a random color with optional alpha value.
     * @param [a] - The parameter `a` in the `random` function is a value between 0 and 1 representing
     * the alpha channel (transparency) of the color. It is generated randomly using `Math.random()`
     * and rounded to three decimal places.
     * @returns A new `UColor` object is being returned with random values for red (r), green (g), blue
     * (b), and alpha (a) components. The alpha component (a) is a random value between 0 and 1, while
     * the red, green, and blue components (r, g, b) are random integers between 0 and 255.
     */
    static random(a = Math.round((Math.random() * 1000)) / 1000) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return new UColor(r, g, b, a);
    }

    /**
     * The function `fromHEX` converts a hexadecimal color string to RGBA values.
     * @param hexString - The `hexString` parameter is a string representing a color in hexadecimal
     * format. It can be in the format `#RRGGBB` for RGB colors or `#RRGGBBAA` for RGBA colors, where:
     * @returns The `fromHEX` method is returning a new `UColor` object with the red, green, blue, and
     * alpha values parsed from the input `hexString`. The red, green, and blue values are extracted
     * from specific positions in the `hexString` and converted from hexadecimal to decimal using
     * `parseInt`. The alpha value is set to 1 by default, but if the `hex
     */
    static fromHEX(hexString) {
        const r = parseInt(hexString.slice(1, 3), 16);
        const g = parseInt(hexString.slice(3, 5), 16);
        const b = parseInt(hexString.slice(5, 7), 16);
        let a = 1;
        if (hexString.length === 9) {
            a = parseFloat((parseInt(hexString.slice(7, 9), 16) / 255).toFixed(3));
        }
        return new UColor(r, g, b, a);
    }

    /**
     * The function `fromRGBA` parses an RGBA string to extract the red, green, blue, and alpha values,
     * then creates a new `UColor` object with these values.
     * @param rgbaString - The `rgbaString` parameter is a string representing a color in RGBA format.
     * It typically looks like `rgba(r, g, b, a)` where `r`, `g`, `b` are integers representing the
     * red, green, and blue color channels respectively, and `a` is a
     * @returns An instance of the `UColor` class with the red, green, blue, and alpha values extracted
     * from the input `rgbaString`.
     */
    static fromRGBA(rgbaString) {
        const rgbContent = rgbaString.trim().slice(rgbaString.indexOf("(") + 1, -1);
     
        const rgbParts = rgbContent.split(',');
        const r = Number(rgbParts[0]);
        const g = Number(rgbParts[1]);
        const b = Number(rgbParts[2]);
        let a = 1;
        if (Number(rgbParts[3])) {
            a = Number(rgbParts[3]);
        }
        return new UColor(r, g, b, a);
    }

    /**
     * The constructor function initializes an object with red, green, blue, and alpha values.
     * @param r - The `r` parameter represents the red component of a color in the RGB (Red, Green,
     * Blue) color model. It specifies the intensity of the red color in the range of 0 to 255.
     * @param g - The `g` parameter in the constructor function represents the green component of a
     * color in RGB (Red, Green, Blue) color model. It specifies the intensity of the green color in
     * the range of 0 to 255 (or 0 to 1 if using normalized values).
     * @param b - The `b` parameter in the constructor function represents the blue component of a
     * color in RGB (Red, Green, Blue) color model. It specifies the intensity of the blue color in the
     * range of 0 to 255.
     * @param [a=1] - The `a` parameter in the constructor function represents the alpha value, which
     * is used to specify the opacity of a color. It ranges from 0 (completely transparent) to 1
     * (completely opaque). In the constructor, the default value for `a` is set to 1,
     */
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * The `toHEX` function converts RGB and alpha values to a hexadecimal color code.
     * @returns The toHEX() function is returning a hexadecimal representation of the color values
     * stored in the object properties r, g, b, and a. If the alpha value (a) is equal to 1, it returns
     * the hexadecimal representation of the RGB values. If the alpha value is not equal to 1, it
     * calculates the alpha value in hexadecimal and appends it to the RGB values before returning
     */
    toHEX() {
        const decToHex = dec => dec.toString(16).padStart(2, '0');
        const rHex = decToHex(this.r);
        const gHex = decToHex(this.g);
        const bHex = decToHex(this.b);
        if (this.a === 1) {
            return `#${rHex}${gHex}${bHex}`;
        }
        const aHex = decToHex(Math.round(this.a * 255));
        return `#${rHex}${gHex}${bHex}${aHex}`;
    }

    /**
     * The `toRGBA()` function returns a string representing the RGBA values of a color.
     * @returns The `toRGBA()` method is returning a string in the format `rgba(r, g, b, a)` where `r`,
     * `g`, `b`, and `a` are the values of the red, green, blue, and alpha components respectively.
     */
    toRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`; 
    }

    /**
     * The `getGrayScale` function calculates the grayscale value of a color based on its RGB
     * components.
     * @returns A new UColor object with the grayscale values calculated from the RGB values of the
     * current object, maintaining the alpha value.
     */
    getGrayScale() {
        const gray = Math.round((this.r * 0.299) + (this.g * 0.587) + (this.b * 0.114));
        return new UColor(gray, gray, gray, this.a); 
    }

    /**
     * The function `getContrastColor()` calculates a new color with adjusted RGB values to increase
     * contrast based on the brightness of the original color.
     * @returns The `getContrastColor()` function is returning a new `UColor` object with adjusted RGB
     * values to increase the contrast with the current color. The new RGB values are calculated based
     * on the brightness of the current color and the inverted brightness. The alpha value remains the
     * same as the original color.
     */
    getContrastColor() {
        const brightness = (this.r * 0.2126) + (this.g * 0.7152) + (this.b * 0.0722);
        const invertedBrightness = 255 - brightness;
    
        const newR = Math.min(255, Math.max(0, this.r + (invertedBrightness - brightness)));
        const newG = Math.min(255, Math.max(0, this.g + (invertedBrightness - brightness)));
        const newB = Math.min(255, Math.max(0, this.b + (invertedBrightness - brightness)));
    
        return new UColor(newR, newG, newB, this.a);
    }

    getPalette() {

    }
}


// const ucolor1 = new UColor(12, 34, 27);
// const ucolor2 = UColor.fromHEX('#ff340031');
// const ucolor3 = UColor.random()
// const ucolor4 = UColor.fromRGBA('rgba(255,161,12,0.5)')
// const ucolor5 = UColor.fromRGBA('rgb(255,161,12)')
// const ucolor6 = UColor.fromRGBA('rgb(255,161,12,0.8)')


// console.log(ucolor2.toHEX())//'#ff3400'
// console.log(ucolor2.toRGBA())//'rgba(255,52,0,1)'
// console.log(ucolor2.getContrastColor())//UColor
// // console.log(ucolor2.getPalette())//[UColor, UColor, UColor]
// console.log(ucolor2.getGrayScale())//UColor

// console.log(ucolor3);
// console.log(ucolor1);
// console.log(ucolor2);
// console.log(ucolor4);
// console.log(ucolor5);
// console.log(ucolor6);