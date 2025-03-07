import { validateNumberInputGripGap } from "../validateNumberInputGripGap";
import { validateNumberInputGripSize } from "../validateNumberInputGripSize";

describe("validateNumberInputGripSize", () => {
  // Test case 1: Input less than 1 returns empty string
  it("returns empty string when input is less than 1", () => {
    expect(validateNumberInputGripSize("0")).toBe("");
    expect(validateNumberInputGripSize("-1")).toBe("");
    expect(validateNumberInputGripSize("-10")).toBe("");
  });

  // Test case 2: Valid positive number within default maxValue (12) returns the number
  it("returns numeric value when input is within default maxValue of 12", () => {
    expect(validateNumberInputGripSize("1")).toBe(1);
    expect(validateNumberInputGripSize("5")).toBe(5);
    expect(validateNumberInputGripSize("12")).toBe(12); // Equal to default maxValue
  });

  // Test case 3: Number exceeding default maxValue (12) returns maxValue
  it("caps at default maxValue (12) when input exceeds it", () => {
    expect(validateNumberInputGripSize("13")).toBe(12); // Default maxValue = 12
    expect(validateNumberInputGripSize("15")).toBe(12);
    expect(validateNumberInputGripSize("100")).toBe(12);
  });

  // Test case 4: Number exceeding custom maxValue returns custom maxValue
  it("caps at custom maxValue when input exceeds it", () => {
    expect(validateNumberInputGripSize("15", 10)).toBe(10); // Custom maxValue = 10
    expect(validateNumberInputGripSize("20", 15)).toBe(15); // Custom maxValue = 15
    expect(validateNumberInputGripSize("100", 50)).toBe(50); // Custom maxValue = 50
  });

  // Test case 5: Input with non-numeric characters returns only numeric part
  it("extracts numeric value when input contains non-numeric characters", () => {
    expect(validateNumberInputGripSize("12abc")).toBe(12); // Within default maxValue
    expect(validateNumberInputGripSize("5.5")).toBe(12); // Decimal truncated
    expect(validateNumberInputGripSize("abc15def", 10)).toBe(10); // Caps at custom maxValue
  });

  // Test case 6: Invalid input returns empty string
  it("returns empty string for invalid input", () => {
    expect(validateNumberInputGripSize("")).toBe("");
    expect(validateNumberInputGripSize("abc")).toBe("");
    expect(validateNumberInputGripSize("!@#")).toBe("");
    expect(validateNumberInputGripSize("NaN")).toBe("");
  });

  // Test case 7: Decimal numbers return integer part within range
  it("returns integer part of decimal numbers within maxValue", () => {
    expect(validateNumberInputGripSize("3.14")).toBe(12); // Default maxValue = 12
    expect(validateNumberInputGripSize("10.99", 10)).toBe(10); // Caps at custom maxValue
    expect(validateNumberInputGripSize("15.5", 12)).toBe(12); // Caps at default maxValue
  });

  // Test case 8: Return type consistency
  it("returns number for valid input and string for invalid input", () => {
    expect(typeof validateNumberInputGripSize("5")).toBe("number"); // Valid, within maxValue
    expect(typeof validateNumberInputGripSize("0")).toBe("string"); // Invalid, less than 1
    expect(typeof validateNumberInputGripSize("abc")).toBe("string"); // Invalid, non-numeric
    expect(typeof validateNumberInputGripSize("20")).toBe("number"); // Caps at maxValue (12)
  });

  // Test case 9: Custom maxValue works with numbers below it
  it("returns input number when it is below custom maxValue", () => {
    expect(validateNumberInputGripSize("5", 10)).toBe(5); // Below custom maxValue = 10
    expect(validateNumberInputGripSize("8", 15)).toBe(8); // Below custom maxValue = 15
    expect(validateNumberInputGripSize("12", 20)).toBe(12); // Below custom maxValue = 20
  });
});

describe("validateNumberInputGripGap", () => {
  it("should return numeric value when input is valid and within range", () => {
    expect(validateNumberInputGripGap("5")).toBe(5);
    expect(validateNumberInputGripGap("0")).toBe(0);
    expect(validateNumberInputGripGap("120")).toBe(120);
  });

  it("should return 0 when input is invalid (non-numeric)", () => {
    expect(validateNumberInputGripGap("abc")).toBe(0);
    expect(validateNumberInputGripGap("xyz123")).toBe(120); // Default maxValue = 120
    expect(validateNumberInputGripGap("")).toBe(0);
  });

  it("should return 0 when input is less than or equal to zero", () => {
    expect(validateNumberInputGripGap("0")).toBe(0);
    expect(validateNumberInputGripGap("-5")).toBe(0);
    expect(validateNumberInputGripGap("-0.5")).toBe(0);
  });

  it("should return maxValue when input exceeds maxValue", () => {
    expect(validateNumberInputGripGap("150")).toBe(120); // Default maxValue = 120
    expect(validateNumberInputGripGap("200")).toBe(120);
  });

  it("should handle custom maxValue", () => {
    expect(validateNumberInputGripGap("50", 60)).toBe(50);
    expect(validateNumberInputGripGap("70", 60)).toBe(60);
    expect(validateNumberInputGripGap("0", 60)).toBe(0);
  });

  it("should remove non-numeric characters and validate", () => {
    expect(validateNumberInputGripGap("5px")).toBe(5);
    expect(validateNumberInputGripGap("abc100def")).toBe(100);
    expect(validateNumberInputGripGap("abc150def")).toBe(120); // Default maxValue = 120
  });
});
