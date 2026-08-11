import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders App component", async () => {
    render(<App />);
    // screen.debug();

    const buttonElement = screen.getByText(/Add note/i);
    expect(buttonElement).toBeInTheDocument();

    expect(screen.queryByText("JavaScript")).toBeNull();
    // expect(screen.getByText("JavaScript")).toBeInTheDocument();

    screen.debug();

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "JavaScript" },
    // });

    screen.debug();

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });
});
