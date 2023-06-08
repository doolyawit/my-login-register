import { createContext, useState } from "react";
import { User } from "../services/datasources/interfaces/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface AuthContextType {
  user: User | null;
  setCredential: (user: User) => void;
}
//TODO: Fix the error: Type 'null' is not assignable to type 'AuthContextType'.
export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(
    JSON.parse(JSON.stringify(localStorage.getItem("user")))
  );

  const { setItem } = useLocalStorage();

  function setCredential(user: User) {
    setUser(user);
    setItem("user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ user, setCredential }}>
      {children}
    </AuthContext.Provider>
  );
}
