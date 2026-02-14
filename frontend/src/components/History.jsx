import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  return (
    <div className="history">
      <h3>Recent Classifications</h3>
      {history.length === 0 ? (
        <p className="muted">No classifications yet.</p>
      ) : (
        <ul className="history__list">
          {history.map((item, index) => (
            <li key={index} className="history__item">
              <div className="history__main">{item.item} <span className="history__type">→ {item.type}</span></div>
              <div className="history__time">{item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : ""}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
