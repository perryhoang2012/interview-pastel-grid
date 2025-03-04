/**
 * Validate a given input text to make sure it is a valid number and within min-max range.
 * @param {string} inputText The text to validate.
 * @param {number} [minValue=1] The minimum value of the range.
 * @param {number} [maxValue=10] The maximum value of the range.
 * @return {number} A number that is within the range. If inputText is not a valid number, return minValue.
 */
const validateNumberInput = (
  inputText: string,
  minValue: number = 1,
  maxValue: number = 10
): number => {
  const numericValue = Number(inputText.replace(/[^0-9]/g, ""));
  if (isNaN(numericValue) || numericValue <= 0) return minValue;
  if (numericValue < minValue) return minValue;
  if (numericValue > maxValue) return maxValue;

  return numericValue;
};

export default validateNumberInput;
