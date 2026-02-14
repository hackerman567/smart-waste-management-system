import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  return (
    <div>
      <h3>Recent Classifications</h3>
      {history.length === 0 ? (
        <p className="no-history">No classifications yet. Start by classifying a waste item!</p>
      ) : (
        <ul className="history-list">
          {history.map((item, index) => (
            <li key={index} className="history-item">
              <span className="history-item-name">{item.item}</span>
              <span className="history-item-type">→ {item.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
