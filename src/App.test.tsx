import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    // screen.debug();

    const buttonElement = screen.getByText(/Add note/i);
    expect(buttonElement).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
