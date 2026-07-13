import { v4 as uuidv4 } from "uuid";
import { ListType, TabsType, TabType } from "./types";

export const defaultNote = {
  id: uuidv4(),
  value: "",
  rowsAmount: 10,
};

export const defaultList: ListType = {
  items: [defaultNote],
};

export const createDefaultTab = (name?: string): TabType => {
  const tabs: TabsType = JSON.parse(localStorage.getItem("tabs") || "[]");
  const tabsAmount = tabs.length;

  return {
    id: uuidv4(),
    name: name || "Tab " + (tabsAmount === 0 ? 1 : tabsAmount + 1),
    list: defaultList,
  };
};

export const defaultTabs: TabsType = [createDefaultTab()];
