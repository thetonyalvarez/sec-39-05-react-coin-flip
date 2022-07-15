import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import App from "./App"

it("renders without crashing", function() {
  render(<App/>)
});

it("matches snapshot", function() {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click the 'flip' button", function() {
  const { queryByTestId, getByTestId } = render(<App/>)

  const button = queryByTestId('flip-btn')
  fireEvent.click(button)
  
  const coinImg = getByTestId('coin-img')
  expect(coinImg).toBeInTheDocument();
});