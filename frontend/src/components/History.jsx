import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "recyclable":
        return "recyclable";
      case "compostable":
        return "compostable";
      case "hazardous":
        return "hazardous";
      default:
        return "unknown";
    }
  };

  return (
    <div className="history">
      <h3>Recent Classifications</h3>
      {history.length === 0 ? (
        <p className="muted">No classifications yet. Start by classifying a waste item above!</p>
      ) : (
        <ul className="history__list">
          {history.map((item, index) => (
            <li key={index} className="history__item">
              <div className="history__main">
                <span className="history__item-name">{item.item}</span>
                <span className={`history__type badge badge--${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
              </div>
              <div className="history__time">
                {item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : ""}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
