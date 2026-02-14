import { useState, useContext } from "react";
import { classifyWaste } from "../services/api";
import { AppContext } from "../context/AppContext";
import ResultCard from "./ResultCard";

const WasteForm = () => {
  const [item, setItem] = useState("");
  const [result, setResult] = useState(null);
  const { addResult } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await classifyWaste(item);
    setResult(data);
    addResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter waste item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <button type="submit">Classify</button>
      </form>

      {result && <ResultCard result={result} />}
    </div>
  );
};

export default WasteForm;
