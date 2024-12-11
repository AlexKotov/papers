import { atom } from "jotai";

import { storage } from "./../helpers";
import { defaultNote } from "./../constants";
import { ListType } from "../types";

const listDefaultValue: ListType = {
  items: [defaultNote],
};

if (!storage.get("list")) {
  storage.set("list", listDefaultValue);
}

export const listAtom = atom(storage.get("list"));
