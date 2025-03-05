/**
 * Validates a given input text to ensure it is a valid number within a min-max range.
 *
 * @param inputText - The text to validate.
 * @param maxValue - The maximum value of the range (default: 10).
 * @returns A number within the specified range.
 */
export function validateNumberInputGripSize(
  inputText: string,
  maxValue: number = 10
): number {
  if (parseInt(inputText) < 1) return 0;
  const numericValue = Number(inputText.replace(/[^0-9]/g, ""));
  if (isNaN(numericValue) || numericValue <= 0) return 0;
  if (numericValue > maxValue) return maxValue;
  return numericValue;
}
