import { useSetAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./helpers";
import { defaultNote } from "./constants";
import { tabsAtom } from "./jotai";

import "./Header.css";

export function Header() {
  const setTabs = useSetAtom(tabsAtom);

  const handleAddNote = () => {
    const tabs = storage.get("tabs");
    const note = { ...defaultNote };

    note.id = uuidv4();
    tabs[0].list.items.push(note);

    setTabs(tabs);
    storage.set("tabs", tabs);
  };

  const handleAddGroup = () => {};

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
        <div className="tab">Default</div>
      </div>
    </header>
  );
}
