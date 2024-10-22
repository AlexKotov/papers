import { useSetAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./helpers";
import { defaultNote } from "./constants";
import { listAtom } from "./jotai";

import "./Header.css";

export function Header() {
  const setList = useSetAtom(listAtom);

  const handleAdd = () => {
    const list = storage.get("list");
    const note = { ...defaultNote };

    note.id = uuidv4();
    list.items.push(note);

    setList(list);
    storage.set("list", list);
  };

  return (
    <header className="header">
      <button type="button" onClick={handleAdd}>
        Add note
      </button>
    </header>
  );
}
