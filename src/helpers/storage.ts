/**
 * Функционал для удобной работы с localStorage.
 * Устанавливаете значение любого типа, извлекаете значение того же типа.
 * Для работы с объектами и массивами не нужен дополнительный парсинг, просто передаёте в функцию объект или массив.
 * 
 * TODO добавить fallback для случаев, когда localStorage недоступен
 * TODO добавить поддержку sessionStorage
 */

const set = (name: string, value: number | boolean | string | object) => {
  if (typeof value === "object") {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value + "");
  }
};

const get = (name: string) => {
  const value = localStorage.getItem(name);

  if (value === null) {
    return value;
  }

  try {
    JSON.parse(value);
  } catch (e) {
    return value;
  }

  return JSON.parse(value);
};

export const storage = { set, get };
