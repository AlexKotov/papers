import { useAtom } from "jotai";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListItemType, TabsType } from "./../types";
import { tabsAtom } from "./../jotai";

export function List() {
  const [tabs, setTabs] = useAtom<TabsType>(tabsAtom);

  return (
    <div className="list">
      {tabs[0].list
        ? tabs[0].list.items.map((note: ListItemType) => (
            <ListItem key={`${note.id}`} note={note} setTabs={setTabs} />
          ))
        : null}
    </div>
  );
}
