import { type Dispatch, type SetStateAction } from "react";
import { useSetAtom, useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./helpers";
import { defaultNote, createDefaultTab } from "./constants";
import { tabsAtom } from "./jotai";
import { type TabsType, type TabType } from "./types";

import "./Header.css";

interface HeaderProps {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
}

export function Header({ currentTab, setCurrentTab }: HeaderProps) {
  const setTabs = useSetAtom(tabsAtom);

  const handleAddNote = () => {
    const tabs: TabsType = storage.get("tabs");
    const note = { ...defaultNote };

    note.id = uuidv4();
    tabs[currentTab].list.items.push(note);

    setTabs(tabs);
    storage.set("tabs", tabs);
  };

  const handleAddGroup = () => {
    const tabs: TabsType = storage.get("tabs");
    const newTabs: TabsType = [
      ...tabs,
      { ...createDefaultTab(), id: uuidv4() },
    ];
    setTabs(newTabs);
    storage.set("tabs", newTabs);
    setCurrentTab(newTabs.length - 1);
  };

  const [tabs] = useAtom<TabsType>(tabsAtom);

  return (
    <header className="header">
      <div className="buttons">
        <button type="button" onClick={handleAddNote}>
          Add note
        </button>
        <button type="button" onClick={handleAddGroup}>
          Add group
        </button>
      </div>
      <div className="tabs">
        {tabs.map((tab: TabType) => (
          <div
            key={tab.id}
            className={`tab ${tab.id === tabs[currentTab].id ? "active" : ""}`}
            onClick={() =>
              setCurrentTab(tabs.findIndex((t) => t.id === tab.id))
            }
          >
            <span>{tab.name}</span>
            <span
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                const newTabs = [...tabs];
                newTabs.splice(
                  tabs.findIndex((t) => t.id === tab.id),
                  1,
                );
                setTabs(newTabs);
                storage.set("tabs", newTabs);
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}
