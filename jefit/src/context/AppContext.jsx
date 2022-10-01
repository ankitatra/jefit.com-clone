import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  const handleLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };
  const handleLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };

  return (
    <AppContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AppContext.Provider>
  );
}
