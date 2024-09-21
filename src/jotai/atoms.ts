import { atom } from "jotai";

import { storage } from "./../helpers";
import { defaultNote } from "./../constants";

const listDefaultValue = {
  items: [defaultNote],
};

if (!storage.get("list")) {
  storage.set("list", listDefaultValue);
}

export const listAtom = atom(storage.get("list"));
