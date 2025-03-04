import tinycolor from "tinycolor2";

/**
 * Generates an array of pastel colors based on a base color.
 * @param {ColorSelect} baseColor - The base color to generate pastels from.
 * @param {number} [count=10] - The number of pastel colors to generate.
 * @returns {string[]} An array of pastel color hex strings.
 */
const generatePastelColors = (
  baseColor: ColorSelect,
  count: number = 10
): string[] => {
  return Array.from({ length: count }, (_, i) => {
    // Calculate the mix ratio to blend the base color with white
    const mixRatio = 0.1 + (i / count) * 0.8;
    // Mix the base color with white to create a pastel effect
    const adjustedColor = tinycolor
      .mix(baseColor.color, "#FFFFFF", mixRatio * 100)
      .toHexString();
    // Slightly modify the hue to create color variations
    return tinycolor(adjustedColor)
      .spin(i * 2)
      .toHexString();
  });
};

export default generatePastelColors;
