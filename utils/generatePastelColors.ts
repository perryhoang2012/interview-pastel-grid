// Define HexColor as a simple string type
type HexColor = string;

/**
 * Generates an array of pastel colors based on the given root color.
 *
 * This function takes a root color in hexadecimal format and generates an array of
 * pastel colors based on the given root color. The number of colors generated is
 * determined by the count parameter, which defaults to 16. The generated colors
 * will have a hue, saturation and lightness that are all within a certain range.
 *
 * The hue of the generated colors will be the same as the root color. The
 * saturation will be between 40% and 70%, and the lightness will be between 70%
 * and 90%.
 *
 * The generated colors are returned as an array of strings in the format
 * "hsl(hue, saturation%, lightness%)".
 *
 * @param {string} rootColor - The root color to generate pastel colors from.
 * @param {number} - The number of colors to generate.
 * @returns {string[]} - An array of strings in the format "hsl(hue, saturation%, lightness%)".
 */
function generatePastelColors(rootColor: HexColor, count: number): string[] {
  let r: number = parseInt(rootColor.slice(1, 3), 16) / 255;
  let g: number = parseInt(rootColor.slice(3, 5), 16) / 255;
  let b: number = parseInt(rootColor.slice(5, 7), 16) / 255;

  let max: number = Math.max(r, g, b);
  let min: number = Math.min(r, g, b);
  let h: number = 0;
  let s: number = 0;
  let l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d: number = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  const rootHSL: [number, number, number] = [h * 360, s * 100, l * 100];
  const colors: string[] = [];

  const minSat: number = 40;
  const maxSat: number = 70;
  const minLight: number = 70;
  const maxLight: number = 90;

  for (let i: number = 0; i < count; i++) {
    const newHue: number = rootHSL[0];
    const step: number = count > 1 ? i / (count - 1) : 0;
    const newSat: number = minSat + (maxSat - minSat) * step;
    const newLight: number = minLight + (maxLight - minLight) * step;
    colors.push(`hsl(${newHue}, ${newSat}%, ${newLight}%)`);
  }

  return colors;
}

export default generatePastelColors;
