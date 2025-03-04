import tinycolor from "tinycolor2";

/**
 * Generates an array of colors corresponding to each character in the given text.
 *
 * @param {string} text - The input text to generate colors for.
 * @param {string} baseColor - The base color to blend into pastel variations.
 * @returns {string[]} An array of colors in hexadecimal format.
 */
const generateColorForText = (
  text: string,
  baseColor: string = "#3498db"
): string[] => {
  return text.split("").map((_, i) => {
    // Adjust the mix ratio based on the character's index
    const mixRatio = 0.2 + (i / text.length) * 0.6;

    // Blend baseColor with white to create a pastel effect
    const pastelColor = tinycolor
      .mix(baseColor, "#FFFFFF", mixRatio * 100)
      .toHexString();

    // Slightly modify the hue for variation
    return tinycolor(pastelColor)
      .spin(i * 10)
      .toHexString();
  });
};

export default generateColorForText;
