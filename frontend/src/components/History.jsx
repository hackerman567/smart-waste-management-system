import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  return (
    <div>
      <h3>Recent Classifications</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.item} → {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
