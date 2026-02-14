import { useState } from "react";

const ResultCard = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const copyAdvice = async () => {
    if (!result?.advice) return;
    try {
      await navigator.clipboard.writeText(result.advice);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="result-card">
      <div className="result-card__header">
        <h3>Classification</h3>
        <small className="result-card__time">{result.timestamp ? new Date(result.timestamp).toLocaleString() : ""}</small>
      </div>

      <div className="result-card__body">
        <div className="result-row"><strong>Item:</strong> <span>{result.item || "—"}</span></div>
        <div className="result-row"><strong>Type:</strong> <span className={`badge badge--${(result.type||"unknown").toLowerCase()}`}>{result.type || "Unknown"}</span></div>
        <div className="result-row"><strong>Carbon Impact:</strong> <span>{result.carbonImpact || "—"}</span></div>
        <div className="result-row"><strong>Advice:</strong> <span>{result.advice || "—"}</span></div>
      </div>

      <div className="result-card__actions">
        <button className="btn btn--small" onClick={copyAdvice}>{copied ? "Copied" : "Copy Advice"}</button>
      </div>
    </div>
  );
};

export default ResultCard;
