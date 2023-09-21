import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  test("renders", () => {
    render(<Nav />);
  });

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// You may notice some tests fail at first.
// This is likely the result of the need to update the snapshots used for
//  testing. To update the snapshots using your current instance of the
//  test runner, press the u key on your keyboard.

// describe is a way to organize your tests
describe("emoji is visible", () => {
  test("inserts emoji into the h2", () => {
    // arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    // test the emoji's accessibility features by querying the element by its aria-label
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  test("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

// Note: add data-testid attributes to elements in components's index.js
// The reason we'll use a separate data-testid attribute specific for
// testing purposes instead of using the id attribute is the same as why we
// don't query an element by its class: to follow the best-practice principle
//  of separating concerns.
