import React from "react";

export const RegisterContext = React.createContext<{
  title: string;
  subTitle?: string;
  message?: string;
  link?: string;
  aMessage?: string;
}>({
  title: "Register your account",
  message: "Back to",
  link: "/",
  aMessage: "Login",
});

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
