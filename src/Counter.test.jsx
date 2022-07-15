import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import Counter from "./Counter";

it("renders without crashing", function() {
  render(<Counter/>)
});

it("matches snapshot", function() {
  const {asFragment} = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});