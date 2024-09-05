import { useState } from "react";
import { storage } from "./../helpers";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListType, ListItemType } from "./../types";

const listDefaultValue = {
  items: [
    {
      id: "0",
      value: "",
      rowsAmount: 10,
    },
  ],
};

/**
 * TODO change note id after saving and develop blank note
 * TODO почистить manifest.json
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  if (!storage.get("list")) {
    storage.set("list", listDefaultValue);
  }

  const [list, setList] = useState<ListType>(storage.get("list"));

  return (
    <div className="list">
      {list
        ? list.items.map((note: ListItemType, noteIndex: number) => (
            <ListItem
              key={`${noteIndex}.${note.id}`}
              note={note}
              setList={setList}
            />
          ))
        : null}
    </div>
  );
}
