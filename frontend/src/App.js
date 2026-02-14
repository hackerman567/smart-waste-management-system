import WasteForm from "./components/WasteForm";
import History from "./components/History";
import Stats from "./components/Stats";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="app__container">
        <header className="app__header">
          <ThemeToggle />
          <h1>🌱 Smart Waste Management System</h1>
          <p className="app__subtitle">Classify your waste items and get disposal recommendations</p>
        </header>
        
        <main className="app__main">
          <Stats />
          <WasteForm />
          <History />
        </main>
        
        <footer className="app__footer">
          <p>🌍 Together we can make a difference in waste management!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
