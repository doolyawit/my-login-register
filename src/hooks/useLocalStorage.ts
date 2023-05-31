import { useState } from "react";
import { UserLogin } from "../schemas/UserLogin";

export const useLocalStorage = () => {
  const [value, setValue] = useState<
    UserLogin | undefined | string | null | object
  >();

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (
    key: string
  ): UserLogin | undefined | string | null | object => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value && JSON.parse(value);
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
    console.log(`Remove Item ${key}`);
  };

  return { value, setItem, getItem, removeItem };
};
