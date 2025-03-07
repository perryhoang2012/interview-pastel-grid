/**
 * Validates a given input text to ensure it is a valid number within a min-max range.
 *
 * @param inputText - The text to validate.
 * @param maxValue - The maximum value of the range (default: 12).
 * @returns A number within the specified range.
 */
export function validateNumberInputGripSize(
  inputText: string,
  maxValue: number = 12
): number | string {
  if (parseInt(inputText) < 1) return "";
  const numericValue = Number(inputText.replace(/[^0-9]/g, ""));
  if (isNaN(numericValue) || numericValue <= 0) return "";
  if (numericValue > maxValue) return maxValue;
  return numericValue;
}
