import { atom } from "jotai";

import { storage } from "./../helpers";
import { defaultNote } from "./../constants";
import { ListType, TabsType } from "../types";

const listDefaultValue: ListType = {
  items: [defaultNote],
};

const tabsDefaultValue: TabsType = [
  {
    name: "Default",
    list: listDefaultValue,
  },
];

if (!storage.get("list")) {
  storage.set("list", listDefaultValue);
}

if (!storage.get("tabs")) {
  storage.set("tabs", tabsDefaultValue);
}

export const listAtom = atom(storage.get("list"));

export const tabsAtom = atom(storage.get("tabs"));
