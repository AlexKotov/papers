import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders add note button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add note/i);
  expect(buttonElement).toBeInTheDocument();
});
