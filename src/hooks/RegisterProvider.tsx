import React from "react";

export const RegisterContext = React.createContext({
  title: "Register your account",
  subTitle: "⬇️ ⬇️ ⬇️",
  message: "Back to",
  link: "/",
  aMessage: "Login",
});

function RegisterContextProvider({ children }: { children: JSX.Element }) {
  const contextValue = {
    title: "Register your account",
    subTitle: "⬇️ ⬇️ ⬇️",
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
