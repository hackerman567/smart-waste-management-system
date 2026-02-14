import { useState, useContext } from "react";
import { classifyWaste } from "../services/api";
import { AppContext } from "../context/AppContext";
import ResultCard from "./ResultCard";

const WasteForm = () => {
  const [item, setItem] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addResult } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = item.trim();
    if (!trimmed) return setError("Please enter an item to classify.");

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await classifyWaste(trimmed);
      setResult(data);
      addResult(data);
    } catch (err) {
      setError(err.message || "Failed to classify item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="waste-form">
      <form onSubmit={handleSubmit} className="waste-form__form">
        <input
          type="text"
          placeholder="Enter waste item (e.g. banana peel, plastic bottle)"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          aria-label="waste-item"
        />
        <button type="submit" disabled={loading || !item.trim()} className="btn">
          {loading ? <span className="spinner" aria-hidden /> : "Classify"}
        </button>
      </form>

      {error && <div className="waste-form__error">{error}</div>}

      {result && <ResultCard result={result} />}
    </div>
  );
};

export default WasteForm;
