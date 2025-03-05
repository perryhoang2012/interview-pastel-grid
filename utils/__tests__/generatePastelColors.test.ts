import generatePastelColors from "../generatePastelColors";

describe("generatePastelColors", () => {
  it("should generate correct number of colors", () => {
    const colors: string[] = generatePastelColors("#FF5733", 5);
    expect(colors).toHaveLength(5);
  });

  it("should return an array of HSL strings", () => {
    const colors: string[] = generatePastelColors("#FF5733", 3);
    colors.forEach((color: string) => {
      expect(color).toMatch(/^hsl\(\d+(\.\d+)?, \d+(\.\d+)?%, \d+(\.\d+)?%\)$/);
    });
  });

  it("should maintain consistent hue from root color", () => {
    const colors: string[] = generatePastelColors("#FF5733", 3);
    const hueRegex: RegExp = /hsl\((\d+(\.\d+)?),/;
    const hues: number[] = colors.map((color: string) =>
      parseFloat(color.match(hueRegex)![1])
    );
    hues.forEach((hue: number) => {
      expect(hue).toBeCloseTo(10.59, 1);
    });
  });

  it("should generate saturation between 40% and 70%", () => {
    const colors: string[] = generatePastelColors("#FF5733", 5);
    const satRegex: RegExp = /hsl\(\d+(\.\d+)?, (\d+(\.\d+)?)%/;
    const sats: number[] = colors.map((color: string) =>
      parseFloat(color.match(satRegex)![2])
    );
    sats.forEach((sat: number) => {
      expect(sat).toBeGreaterThanOrEqual(40);
      expect(sat).toBeLessThanOrEqual(70);
    });
    expect(sats[0]).toBe(40); // First should be minSat
    expect(sats[sats.length - 1]).toBe(70); // Last should be maxSat
  });

  it("should generate lightness between 70% and 90%", () => {
    const colors: string[] = generatePastelColors("#FF5733", 5);
    const lightRegex: RegExp =
      /hsl\(\d+(\.\d+)?, \d+(\.\d+)?%, (\d+(\.\d+)?)%\)/;
    const lights: number[] = colors.map((color: string) =>
      parseFloat(color.match(lightRegex)![3])
    );
    lights.forEach((light: number) => {
      expect(light).toBeGreaterThanOrEqual(70);
      expect(light).toBeLessThanOrEqual(90);
    });
    expect(lights[0]).toBe(70); // First should be minLight
    expect(lights[lights.length - 1]).toBe(90); // Last should be maxLight
  });

  it("should distribute saturation and lightness evenly", () => {
    const colors: string[] = generatePastelColors("#FF5733", 3);
    const satRegex: RegExp = /hsl\(\d+(\.\d+)?, (\d+(\.\d+)?)%/;
    const lightRegex: RegExp =
      /hsl\(\d+(\.\d+)?, \d+(\.\d+)?%, (\d+(\.\d+)?)%\)/;
    const sats: number[] = colors.map((color: string) =>
      parseFloat(color.match(satRegex)![2])
    );
    const lights: number[] = colors.map((color: string) =>
      parseFloat(color.match(lightRegex)![3])
    );

    expect(sats).toEqual([40, 55, 70]); // Even steps: 40 + (70-40)*(0/2), 40 + (70-40)*(1/2), 40 + (70-40)*(2/2)
    expect(lights).toEqual([70, 80, 90]); // Even steps: 70 + (90-70)*(0/2), 70 + (90-70)*(1/2), 70 + (90-70)*(2/2)
  });

  it("should handle count of 1 correctly", () => {
    const colors: string[] = generatePastelColors("#FF5733", 1);
    expect(colors).toHaveLength(1);
    expect(colors[0]).toMatch(/hsl\(10(\.\d+)?, 40%, 70%\)/); // Hue ~10.59
  });

  it("should handle invalid hex input gracefully", () => {
    const colors: string[] = generatePastelColors("invalid", 3);
    expect(colors).toHaveLength(3);
    expect(colors[0]).toMatch(/hsl\(0, 40%, 70%\)/); // Falls back to h=0 for invalid input
  });
});
