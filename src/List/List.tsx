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

/**
 * TODO продумать, как будет заполняться новая карточка, где она будет отображаться визуально
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  const list: ListType = storage.get("list");

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
