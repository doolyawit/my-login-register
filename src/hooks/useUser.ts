import { useLocalStorage } from "./useLocalStorage";
import { UserLogin } from "../schemas/UserLogin";

export const useUser = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();

  const addUser = (user: UserLogin) => {
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    removeItem("user");
  };

  const getUser = (): UserLogin | null | undefined | string | object => {
    return getItem("user");
  };

  return { addUser, getUser, removeUser };
};
