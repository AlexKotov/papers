import { type Dispatch, type SetStateAction, useRef, useState } from "react";
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
  const [editingTabId, setEditingTabId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const cancelRenameOnBlur = useRef(false);

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

  const saveTabName = (tabId: string) => {
    const name = editingName.trim();
    if (name) {
      const newTabs = tabs.map((tab) =>
        tab.id === tabId ? { ...tab, name } : tab,
      );
      setTabs(newTabs);
      storage.set("tabs", newTabs);
    }
    setEditingTabId(null);
  };

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
            {editingTabId === tab.id ? (
              <input
                autoFocus
                aria-label={`Rename ${tab.name}`}
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                onBlur={() => {
                  if (cancelRenameOnBlur.current) {
                    cancelRenameOnBlur.current = false;
                    return;
                  }
                  saveTabName(tab.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.blur();
                  } else if (e.key === "Escape") {
                    e.preventDefault();
                    cancelRenameOnBlur.current = true;
                    setEditingTabId(null);
                    e.currentTarget.blur();
                  }
                }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className="name" title={tab.name}>
                {tab.name}
              </span>
            )}
            <div className="actions">
              {editingTabId !== tab.id && (
                <button
                  type="button"
                  className="rename"
                  aria-label={`Rename ${tab.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingName(tab.name);
                    setEditingTabId(tab.id);
                  }}
                >
                  ✎
                </button>
              )}
              {tabs.length > 1 && (
                <span
                  className="close"
                  // можно использовать filter, можно использовать toSpliced
                  onClick={(e) => {
                    e.stopPropagation();
                    const removedIndex = tabs.findIndex((t) => t.id === tab.id);
                    if (removedIndex < 0) return;

                    const newTabs = tabs.filter((t) => t.id !== tab.id);
                    const nextCurrentTab =
                      currentTab === removedIndex
                        ? Math.min(removedIndex, newTabs.length - 1)
                        : currentTab > removedIndex
                          ? currentTab - 1
                          : currentTab;

                    setTabs(newTabs);
                    storage.set("tabs", newTabs);
                    setCurrentTab(nextCurrentTab);
                  }}
                >
                  ×
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
