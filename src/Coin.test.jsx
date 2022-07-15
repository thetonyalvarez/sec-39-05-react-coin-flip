import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import Coin from "./Coin";

it("renders without crashing", function() {
  render(<Coin/>)
});

it("matches snapshot", function() {
  const {asFragment} = render(<Coin/>);
  expect(asFragment()).toMatchSnapshot();
});