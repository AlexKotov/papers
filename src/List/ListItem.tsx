import {
  type Dispatch,
  type SetStateAction,
  ChangeEvent,
  useState,
} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { storage } from "./../helpers";
import { ListItemType, TabsType } from "./../types";

type Props = {
  note: ListItemType;
  setTabs: Dispatch<SetStateAction<TabsType>>;
  currentTab: number;
  onChange?: jest.Mock<any, any>;
};

export function ListItem(props: Props) {
  const [note, setNote] = useState<ListItemType>(props.note);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote({
      ...note,
      value: e.target.value,
    });
    props.onChange?.();
  };

  const handleSave = () => {
    const tabs: TabsType = storage.get("tabs");

    tabs[props.currentTab].list.items.forEach((listItem: ListItemType) => {
      if (listItem.id === note.id) {
        listItem.value = note.value;
      }
    });

    storage.set("tabs", tabs);
    props.setTabs(tabs);
  };

  const handleCancel = () => {
    setNote(props.note);
  };

  const handleRemove = () => {
    const tabs: TabsType = storage.get("tabs");

    tabs[props.currentTab].list.items.splice(
      tabs[props.currentTab].list.items.findIndex((e) => e.id === note.id),
      1,
    );

    storage.set("tabs", tabs);
    props.setTabs(tabs);
  };

  return (
    <section>
      <label htmlFor={`${note.id}`}></label>
      <TextField
        id={`${note.id}`}
        aria-label={`Note ${note.id}`}
        multiline
        rows={note.rowsAmount}
        value={note.value}
        onChange={handleChange}
        size="small"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
          "& .MuiInputBase-input": { fontSize: "0.875rem" },
        }}
        className="note"
      />
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        type="button"
        variant="text"
        size="small"
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        type="button"
        variant="text"
        color="error"
        size="small"
        onClick={handleRemove}
      >
        Remove
      </Button>
    </section>
  );
}
