const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h3>Result</h3>
      <p><strong>Item:</strong> {result.item}</p>
      <p><strong>Type:</strong> {result.type}</p>
      <p><strong>Advice:</strong> {result.advice}</p>
      <p><strong>Carbon Impact:</strong> {result.carbonImpact}</p>
    </div>
  );
};

export default ResultCard;
