import { useUser } from "./useUser";
import { UserLogin } from "../schemas/UserLogin";
import { useState } from "react";

const Diw: UserLogin = {
  email: "doolyawit.y@20scoops.net",
  password: "Diw0638051541",
};

export const useAuth = () => {
  const { getUser, addUser, removeUser } = useUser();

  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const login = (user: UserLogin) => {
    if (user.email === Diw.email && user.password === Diw.password) {
      addUser(user);
      console.log(`Login Success ${user.email}`);
    } else {
      setErrorMessage(`Login Failed ❌ The email or password are incorrect.`);
    }
  };

  const logout = () => {
    removeUser();
    console.log(`Logout Success`);
  };

  const checkAuth = () => {
    const loggedInUser: UserLogin | undefined | null | string | object =
      getUser();
    if (loggedInUser) {
      return true;
    }
  };
  const register = (user: UserLogin) => {
    console.log(`Register Success ${user.email}`);
    return true;
  };

  return { getUser, login, logout, checkAuth, errorMessage, register };
};
