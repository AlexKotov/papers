import { ChangeEvent, useState } from "react";
import { storage } from "./../helpers";
import { ListType, ListItemType } from "./../types";

type Props = {
  note: ListItemType;
  setList: React.Dispatch<React.SetStateAction<ListType>>;
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
    const list = storage.get("list");

    list.items.forEach((listItem: ListItemType) => {
      if (listItem.id === note.id) {
        listItem.value = note.value;
      }
    });

    storage.set("list", list);
    props.setList(list);
  };

  const handleCancel = () => {
    setNote(props.note);
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
    </section>
  );
}
