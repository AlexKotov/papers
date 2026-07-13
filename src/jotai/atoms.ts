import { atom } from "jotai";

import { storage } from "./../helpers";
import { defaultTabs } from "./../constants";

if (!storage.get("tabs")) {
  storage.set("tabs", defaultTabs);
}

export const tabsAtom = atom(storage.get("tabs"));
