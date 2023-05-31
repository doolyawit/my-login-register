import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext({} as ReturnType<typeof useAuth>);

export function AuthContextProvider({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
