/* The `UColor` class in JavaScript provides methods for generating random colors, converting colors
between different formats, calculating grayscale values, and creating contrasting color palettes. */
export default class UColor { 
    /**
     * The constructor function initializes an object with red, green, blue, and alpha values.
     * @param r - The `r` parameter represents the red component of a color in the RGB (Red, Green,
     * Blue) color model. It typically ranges from 0 to 255, indicating the intensity of red in the
     * color.
     * @param g - The `g` parameter in the constructor function represents the green component of a
     * color in RGB (Red, Green, Blue) color model. It specifies the intensity of the green color in
     * the range of 0 to 255.
     * @param b - The `b` parameter in the constructor function represents the blue component of a
     * color in RGB (Red, Green, Blue) color model. It specifies the intensity of the blue color in the
     * range of 0 to 255.
     * @param [a=1] - The `a` parameter in the constructor function represents the alpha value, which
     * is used to specify the opacity of a color. It ranges from 0 (completely transparent) to 1
     * (completely opaque). In the constructor, if the `a` parameter is not provided, it defaults to 1.
     */
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

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
     * @returns The `fromHEX` static method is returning a new `UColor` object with the red, green,
     * blue, and alpha values extracted from the input `hexString`. The red, green, and blue values are
     * extracted from the hexString by parsing substrings of the hexString, and the alpha value is
     * calculated based on the length of the hexString.
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
     * red, green, and blue color channels respectively, and `a` is alpha.
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
     * The function `toHEX()` converts RGB and alpha values to a hexadecimal color representation.
     * @returns The toHEX() function is returning a hexadecimal representation of the color values
     * stored in the object. If the alpha value (a) is equal to 1, it returns the hexadecimal
     * representation of the RGB values. If the alpha value is not 1, it also includes the alpha value
     * in the hexadecimal representation.
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
     * The getGrayScale function calculates the grayscale value of a color based on its RGB components.
     * @returns A new UColor object with the grayscale values for red, green, and blue channels, and
     * the original alpha value.
     */
    getGrayScale() {
        const gray = Math.round((this.r * 0.299) + (this.g * 0.587) + (this.b * 0.114));
        return new UColor(gray, gray, gray, this.a);
    }

    /**
     * The function `getContrastColor` calculates a contrasting color based on the input RGB color
     * array.
     * @returns A new `UColor` object with the RGB values of the color that is the contrast of the
     * original color.
     */
    getContrastColor() {
        const hslVersion = rgbToHsl(...this.colorsArray);
        const hue = hslVersion[0];
        const newHue = (hue + 180) % 360;
        const l = hslVersion[2];
        let newLuminosity = l;
        if (l < 20 || l > 80) {
            newLuminosity = 100 - l;
        }
        const newHsl = [newHue, hslVersion[1], newLuminosity];
        const contrastedRGB = hslToRgb(...newHsl);
        return new UColor(...contrastedRGB);
    }

    /**
     * The function `getPalette` generates a color palette based on the input colors by adjusting the
     * hue values.
     * @returns The `getPalette` function returns an array of `UColor` objects. The array contains the
     * original color from `this.colorsArray` converted to HSL and then back to RGB, as well as two
     * additional colors with slightly adjusted hues.
     */
    getPalette() {
        const hslVersion = rgbToHsl(...this.colorsArray);
        const hue = hslVersion[0];
        const s = hslVersion[1];
        const l = hslVersion[2];
        const Palette = [new UColor(this.colorsArray)];
        const movements = 120;

        for (let i = 0; i < 2; i++) {
            const newHue = (hue + (movements * (1 + i))) % 360;
            const newHsl = [newHue, s, l];
            const newColor = hslToRgb(...newHsl);
            Palette.push(new UColor(...newColor));
        }
        return Palette;
    }
}


/**
 * The function `rgbToHsl` converts RGB values to HSL (Hue, Saturation, Lightness) values in
 * JavaScript.
 * @param r - The `r`, `g`, and `b` parameters in the `rgbToHsl` function represent the red, green, and
 * blue values of a color respectively. These values are typically in the range of 0 to 255, where 0
 * represents the absence of that color and
 * @param g - The `g` parameter in the `rgbToHsl` function represents the green component of an RGB
 * color. In the RGB color model, colors are created by mixing different intensities of red, green, and
 * blue light. The `g` parameter specifies the intensity of the green light in the
 * @param b - The `b` parameter in the `rgbToHsl` function represents the blue component of an RGB
 * color. In the RGB color model, colors are created by mixing different intensities of red, green, and
 * blue light. The `b` parameter is the intensity of the blue light in the
 * @returns The function `rgbToHsl` is returning an array containing the HSL (Hue, Saturation,
 * Lightness) values calculated from the input RGB values. The array contains three elements: the
 * rounded H (Hue) value, the rounded S (Saturation) value, and the rounded L (Lightness) value.
 */
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;
    return [
        Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
        Math.round(
            100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
        ),
        Math.round((100 * (2 * l - s)) / 2),
    ]
}


/**
 * The function `hslToRgb` converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green,
 * Blue) color values.
 * @param h - Hue value in the range of 0 to 360.
 * @param s - The `s` parameter in the `hslToRgb` function stands for the saturation value in the HSL
 * (Hue, Saturation, Lightness) color model. It represents the intensity of the color. In the function,
 * the `s` parameter is divided by 100 to normalize
 * @param l - The `l` parameter in the `hslToRgb` function represents the lightness value in the HSL
 * (Hue, Saturation, Lightness) color model. It ranges from 0 to 100, where 0 is black and 100 is
 * white.
 * @returns The function `hslToRgb` returns an array of three values representing the RGB values of a
 * color converted from HSL (Hue, Saturation, Lightness) format.
 */
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4)),
    ]
}