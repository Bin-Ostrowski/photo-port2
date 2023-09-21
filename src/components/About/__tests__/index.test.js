import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// This will ensure that after each test,
// we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe("About component", () => {
  // Frist Test
  // 'test' can also be used interchangeably with 'it' to create a test.
  it("renders", () => {
    render(<About></About>);
  });

  // Snapshot Test
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    // Use the expect function with a matcher to assert something about a value.
    expect(asFragment()).toMatchSnapshot();
  });
});

//  Test notes
// IMPORTANT
// When changes are made to a component's element, such as a change in text content,
// button label, or attribute, it will cause the stored snapshot to become stale.
// A new snapshot can be written at the command line that contains the instance
// of the test runner by typing u to update, or rewrite, a new snapshot.
