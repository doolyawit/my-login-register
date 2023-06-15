import React from "react";
import { ILoginRegisterContextOption } from "./interfaces";

export const RegisterContext = React.createContext<ILoginRegisterContextOption>(
  {
    title: "Register your account",
    message: "Back to",
    link: "/",
    aMessage: "Login",
  }
);

function RegisterContextProvider({ children }: { children: JSX.Element }) {
  const contextValue = {
    title: "Register your account",
    message: "Back to",
    link: "/",
    aMessage: "Login",
  };

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  );
}
export default RegisterContextProvider;
