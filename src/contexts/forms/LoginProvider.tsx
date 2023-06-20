import React from 'react';
import { ILoginRegisterContextOption } from './interfaces';

export const LoginContext = React.createContext<ILoginRegisterContextOption>({
  title: 'Hi, Welcome Back 👋',
  subTitle: 'Sign in to continue ',
  message: "Don't have account yet?",
  link: '/register',
  aMessage: 'Sign Up',
});

function LoginContextProvider({ children }: { children: JSX.Element }) {
  const contextValue = {
    title: 'Hi, Welcome Back 👋',
    subTitle: 'Sign in to continue ',
    message: "Don't have an account yet?",
    link: '/register',
    aMessage: 'Sign Up',
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
export default LoginContextProvider;
