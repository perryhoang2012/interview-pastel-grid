import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import AppIndex from "..";

describe("AppIndex Screen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<AppIndex />);

    expect(getByText("Grid Size")).toBeTruthy();
    expect(getByText("Grid Gap")).toBeTruthy();
    expect(getByText("Color Picker")).toBeTruthy();
  });

  it("allows only numeric input in Grid Size and Grid Gap", () => {
    const { getByTestId } = render(<AppIndex />);

    const gridSizeInput = getByTestId("gridSizeInput");
    const gridGapInput = getByTestId("gridGapInput");

    fireEvent.changeText(gridSizeInput, "5");
    fireEvent.changeText(gridGapInput, "10");

    expect(gridSizeInput.props.value).toBe("5");
    expect(gridGapInput.props.value).toBe("10");

    fireEvent.changeText(gridSizeInput, "abc");
    expect(gridSizeInput.props.value).toBe("0");

    fireEvent.changeText(gridGapInput, "xyz");
    expect(gridGapInput.props.value).toBe("0");
  });

  it("resets grid size and gap when Reset button is pressed", () => {
    const { getByTestId } = render(<AppIndex />);

    const resetButton = getByTestId("resetButton");
    const gridSizeInput = getByTestId("gridSizeInput");
    const gridGapInput = getByTestId("gridGapInput");

    fireEvent.changeText(gridSizeInput, "5");
    fireEvent.changeText(gridGapInput, "10");

    expect(gridSizeInput.props.value).toBe("5");
    expect(gridGapInput.props.value).toBe("10");

    fireEvent.press(resetButton);

    expect(gridSizeInput.props.value).toBe("0");
    expect(gridGapInput.props.value).toBe("0");
  });

  it("renders the color picker with options", () => {
    const { getByText } = render(<AppIndex />);

    expect(getByText("Sky Blue")).toBeTruthy();
  });
});
