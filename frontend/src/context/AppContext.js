import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const addResult = (result) => {
    const withTimestamp = { ...result, timestamp: result.timestamp || Date.now() };
    setHistory((prev) => [withTimestamp, ...prev].slice(0, 5));
    setCount((c) => c + 1);
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
