export type TabsType = TabType[];

export type TabType = {
  name: string;
  list: ListType;
};

export type ListType = {
  items: ListItemType[];
};

export type ListItemType = {
  id: string;
  value: string;
  rowsAmount: number;
};
