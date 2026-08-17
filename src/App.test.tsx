import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const noteText = "11";

describe("App", () => {
  it("renders App component", async () => {
    render(<App />);

    const buttonElement = screen.getByText(/Add note/i);
    expect(buttonElement).toBeInTheDocument();

    expect(screen.queryByText(noteText)).toBeNull();

    screen.debug();

    await userEvent.type(screen.getByRole("textbox"), noteText);
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "JavaScript" },
    // });

    screen.debug();

    expect(screen.getByText(noteText)).toBeInTheDocument();
  });
});
