import { useSetAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./helpers";
import { defaultNote } from "./constants";
import { listAtom } from "./jotai";

import "./Header.css";

export function Header() {
  const setList = useSetAtom(listAtom);

  const handleAddNote = () => {
    const list = storage.get("list");
    const note = { ...defaultNote };

    note.id = uuidv4();
    list.items.push(note);

    setList(list);
    storage.set("list", list);
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
