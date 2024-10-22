import { v4 as uuidv4 } from "uuid";

export const defaultNote = {
  id: uuidv4(),
  value: "",
  rowsAmount: 10,
};
