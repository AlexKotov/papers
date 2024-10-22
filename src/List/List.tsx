import { useAtom } from "jotai";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListType, ListItemType } from "./../types";
import { listAtom } from "./../jotai";

/**
 * TODO обновить вёрстку списка так, чтобы записки не вылезали за пределы контента
 * TODO почистить manifest.json
 * TODO подумать над экспортом текстов в файлы
 */
export function List() {
  const [list, setList] = useAtom<ListType>(listAtom);

  return (
    <div className="list">
      {list
        ? list.items.map((note: ListItemType) => (
            <ListItem key={`${note.id}`} note={note} setList={setList} />
          ))
        : null}
    </div>
  );
}
