import { createContext, useState } from "react";
import { UserLogin } from "../datasources/interfaces/user";
import { Diw } from "../datasources/mocks/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface AuthContextType {
  user: UserLogin | null;
  errorMessage: null | string;
  login: (user: UserLogin) => void;
  logout: () => void;
  register: (user: UserLogin) => void;
  setCredential: (user: UserLogin) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserLogin | null>(
    JSON.parse(JSON.stringify(localStorage.getItem("user")))
  );
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { setItem, removeItem } = useLocalStorage();

  function setCredential(user: UserLogin) {
    setUser(user);
    setItem("user", JSON.stringify(user));
  }

  const login = (user: UserLogin) => {
    if (user.email === Diw.email && user.password === Diw.password) {
      setCredential(user);
      console.log(`Login Success ${user.email}`);
    } else {
      setErrorMessage(`Login Failed ❌ The email or password are incorrect.`);
    }
  };

  const logout = () => {
    removeItem("user");
    console.log(`Logout Success`);
  };

  const register = (user: UserLogin) => {
    console.log(`Register Success ${user.email}`);
  };

  return (
    <AuthContext.Provider
      value={{ user, errorMessage, login, logout, register, setCredential }}
    >
      {children}
    </AuthContext.Provider>
  );
}
