import { useEffect } from "react";
import { storage } from "./../helpers";
import "./List.css";

type ListItemType = {
  id: string;
  value: string;
};

type ListType = {
  colsAmount: number;
  rowsAmount: number;
  items: ListItemType[];
};

const listDefaultValue = {
  colsAmount: 50,
  rowsAmount: 6,
  items: [
    {
      id: "0",
      value: "",
    },
  ],
};

/**
 * TODO почистить manifest.json
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  const list: ListType = storage.get("list");

  useEffect(() => {
    if (!list) storage.set("list", listDefaultValue);
  }, [list]);

  return (
    <div className="list">
      {list
        ? list.items.map((note: ListItemType, noteIndex: number) => {
            return (
              <section key={`${noteIndex}.${note.id}`}>
                <label htmlFor={`${note.id}`}></label>
                <textarea
                  id={`${note.id}`}
                  rows={list.rowsAmount}
                  cols={list.colsAmount}
                  value={note.value}
                  onChange={() => undefined}
                />
              </section>
            );
          })
        : null}
    </div>
  );
}
