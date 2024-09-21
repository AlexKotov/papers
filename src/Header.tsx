import { useSetAtom } from "jotai";
import { storage } from "./helpers";
import { defaultNote } from "./constants";
import { listAtom } from "./jotai";

import "./Header.css";

export function Header() {
  const setList = useSetAtom(listAtom);

  const handleAdd = () => {
    const list = storage.get("list");
    const note = { ...defaultNote };

    note.id = list.items.length + "";
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
