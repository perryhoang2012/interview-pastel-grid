import { validateNumberInputGripGap } from "../validateNumberInputGripGap";
import { validateNumberInputGripSize } from "../validateNumberInputGripSize";

describe("validateNumberInputGripSize", () => {
  it("should return numeric value when input is valid and within range", () => {
    expect(validateNumberInputGripSize("5", 10)).toBe(5);
    expect(validateNumberInputGripSize("10", 10)).toBe(10);
  });

  it("should return 0 when input is invalid (non-numeric)", () => {
    expect(validateNumberInputGripSize("abc", 10)).toBe(0);
    expect(validateNumberInputGripSize("xyz123", 10)).toBe(10);
    expect(validateNumberInputGripSize("", 10)).toBe(0);
  });

  it("should return 0 when input is less than or equal to zero", () => {
    expect(validateNumberInputGripSize("0", 10)).toBe(0);
    expect(validateNumberInputGripSize("-5", 10)).toBe(0);
    expect(validateNumberInputGripSize("0.5", 10)).toBe(0);
  });

  it("should return maxValue when input exceeds maxValue", () => {
    expect(validateNumberInputGripSize("15", 10)).toBe(10);
    expect(validateNumberInputGripSize("100", 10)).toBe(10);
  });

  it("should handle custom maxValue", () => {
    expect(validateNumberInputGripSize("3", 5)).toBe(3);
    expect(validateNumberInputGripSize("10", 5)).toBe(5);
  });

  it("should remove non-numeric characters and validate", () => {
    expect(validateNumberInputGripSize("5px", 10)).toBe(5);
    expect(validateNumberInputGripSize("abc10def", 10)).toBe(10);
    expect(validateNumberInputGripSize("abc15def", 10)).toBe(10);
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
