import WasteForm from "./components/WasteForm";
import History from "./components/History";
import Stats from "./components/Stats";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <ThemeToggle />
      <h1>🌱 Smart Waste Management System</h1>
      <Stats />
      <WasteForm />
      <History />
    </div>
  );
}

export default App;
