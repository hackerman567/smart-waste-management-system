import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="theme-toggle"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle__icon">
        {darkMode ? "☀️" : "🌙"}
      </span>
      <span className="theme-toggle__text">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
