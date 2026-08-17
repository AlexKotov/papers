import { type Dispatch, type SetStateAction } from "react";
import { useAtom } from "jotai";
import "./List.css";
import { ListItem } from "./ListItem";
import { ListItemType, TabsType } from "./../types";
import { tabsAtom } from "./../jotai";

interface ListProps {
  currentTab: number;
}

export function List({ currentTab }: ListProps) {
  const [tabs, setTabs] = useAtom<TabsType>(tabsAtom);

  return (
    <div className="list">
      {tabs[currentTab]?.list
        ? tabs[currentTab].list.items.map((note: ListItemType) => (
            <ListItem
              key={`${currentTab}.${note.id}`}
              note={note}
              setTabs={setTabs}
              currentTab={currentTab}
            />
          ))
        : null}
    </div>
  );
}
