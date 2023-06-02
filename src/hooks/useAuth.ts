import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
