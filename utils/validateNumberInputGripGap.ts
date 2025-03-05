/**
 * Validates a given input text to ensure it is a valid non-negative number within a max range.
 *
 * @param inputText - The text to validate.
 * @param maxValue - The maximum value of the range (default: 120).
 * @returns A non-negative number within the range. Returns 0 if input is invalid or negative.
 */
export function validateNumberInputGripGap(
  inputText: string,
  maxValue: number = 120
): number {
  if (parseInt(inputText) < 1) return 0;
  const numericValue = Number(inputText.replace(/[^0-9]/g, ""));
  if (isNaN(numericValue) || numericValue <= 0) return 0;
  if (numericValue > maxValue) return maxValue;
  return numericValue;
}
