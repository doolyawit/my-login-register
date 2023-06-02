import React from "react";

export const HomeContext = React.createContext({
  title: "Hi, Welcome to Home Page 🏡",
});

function HomeContextProvider({ children }: { children: JSX.Element }) {
  const contextValue = {
    title: "Hi, Welcome to Home Page 🏡",
  };

  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
}
export default HomeContextProvider;
