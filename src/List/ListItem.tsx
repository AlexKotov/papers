import React, { ChangeEvent, useState } from "react";
import { storage } from "./../helpers";
import { ListItemType, TabsType } from "./../types";

type Props = {
  note: ListItemType;
  setTabs: React.Dispatch<React.SetStateAction<TabsType>>;
};

export function ListItem(props: Props) {
  const [note, setNote] = useState<ListItemType>(props.note);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote({
      ...note,
      value: e.target.value,
    });
  };

  const handleSave = () => {
    const tabs: TabsType = storage.get("tabs");

    tabs[0].list.items.forEach((listItem: ListItemType) => {
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

    tabs[0].list.items.splice(
      tabs[0].list.items.findIndex((e) => e.id === note.id),
      1
    );

    storage.set("tabs", tabs);
    props.setTabs(tabs);
  };

  return (
    <section>
      <label htmlFor={`${note.id}`}></label>
      <textarea
        id={`${note.id}`}
        rows={note.rowsAmount}
        value={note.value}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </section>
  );
}
