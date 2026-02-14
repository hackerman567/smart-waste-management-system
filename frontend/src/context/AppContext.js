import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const addResult = (result) => {
    setHistory([result, ...history.slice(0, 4)]);
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{
      history,
      count,
      darkMode,
      setDarkMode,
      addResult
    }}>
      {children}
    </AppContext.Provider>
  );
};
