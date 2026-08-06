import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    // screen.debug();
  });
});

test("renders add note button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add note/i);
  expect(buttonElement).toBeInTheDocument();
});
