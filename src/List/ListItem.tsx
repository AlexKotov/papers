import { ChangeEvent, useState } from "react";
import { ListItemType } from "./../types";

type Props = {
  note: ListItemType;
};

export function ListItem(props: Props) {
  const [note, setNote] = useState<ListItemType>(props.note);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote({
      ...note,
      value: e.target.value,
    });
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
      <button type="button">Save</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </section>
  );
}
