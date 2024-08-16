import { useState } from "react";
import { storage } from "./../helpers";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListItemType } from "./../types";

type ListType = {
  items: ListItemType[];
};

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
 * TODO написать Сохранение
 * TODO почистить manifest.json
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  if (!storage.get("list")) {
    storage.set("list", listDefaultValue);
  }

  const [list] = useState<ListType>(storage.get("list"));

  return (
    <div className="list">
      {list
        ? list.items.map((note: ListItemType, noteIndex: number) => (
            <ListItem key={`${noteIndex}.${note.id}`} note={note} />
          ))
        : null}
    </div>
  );
}
