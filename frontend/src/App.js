import WasteForm from "./components/WasteForm";
import History from "./components/History";
import Stats from "./components/Stats";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import wasteImage from "./waste.png";

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="main-layout">
        <div className="main-content">
          <ThemeToggle />
          <h1>🌱 Smart Waste Management System</h1>
          <Stats />
          <WasteForm />
          <History />
        </div>
        <div className="side-image">
          <img src={wasteImage} alt="Waste Management" />
        </div>
      </div>
    </div>
  );
}

export default App;
