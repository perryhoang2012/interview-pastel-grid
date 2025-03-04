import validateNumberInput from "../validateNumberInput";

describe("validateNumberInput", () => {
  it("returns the number when input is valid", () => {
    expect(validateNumberInput("10", 1, 100)).toBe(10);
    expect(validateNumberInput("50", 1, 100)).toBe(50);
    expect(validateNumberInput("90", 1, 100)).toBe(90);
    expect(validateNumberInput("100", 1, 100)).toBe(100);
  });

  it("returns min when input is not a number", () => {
    expect(validateNumberInput("abc", 1, 100)).toBe(0);
  });

  it("returns min when input is lower than 0", () => {
    expect(validateNumberInput("-5", 1, 100)).toBe(0);
  });

  it("returns max when input is higher than max", () => {
    expect(validateNumberInput("150", 1, 100)).toBe(100);
  });
});
