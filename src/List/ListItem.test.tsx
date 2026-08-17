import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ListItem } from "./ListItem";
import userEvent from "@testing-library/user-event";
import { defaultNote } from "./../constants";

const testName = "the onChange callback handler was called";

describe("ListItem", () => {
  it("calls the onChange callback handler", async () => {
    const onChange = jest.fn();
    render(
      <ListItem
        note={defaultNote}
        setTabs={() => undefined}
        currentTab={0}
        onChange={onChange}
      />,
    );

    await userEvent.type(screen.getByRole("textbox"), testName);
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: testName },
    // });

    screen.debug();

    expect(onChange).toHaveBeenCalledTimes(40);
    // expect(onChange).toHaveBeenCalledTimes(1);
  });
});
