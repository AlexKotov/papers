import { useAtom } from "jotai";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListType, ListItemType } from "./../types";
import { listAtom } from "./../jotai";

/**
 * TODO почистить manifest.json
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  const [list, setList] = useAtom<ListType>(listAtom);

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
