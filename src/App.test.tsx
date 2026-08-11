import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    // screen.debug();

    const buttonElement = screen.getByText(/Add note/i);
    expect(buttonElement).toBeInTheDocument();

    expect(screen.queryByText("JavaScript")).toBeNull();
    // expect(screen.getByText("JavaScript")).toBeInTheDocument();

    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    screen.debug();

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });
});
