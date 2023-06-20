import React from 'react';
import { IHomeContextOption } from './interfaces';

export const HomeContext = React.createContext<IHomeContextOption>({
  title: 'Here are our products',
});

function HomeContextProvider({ children }: { children: JSX.Element }) {
  const contextValue = {
    title: 'Here are our products ',
  };

  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
}
export default HomeContextProvider;
