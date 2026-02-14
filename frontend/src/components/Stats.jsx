import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { count } = useContext(AppContext);

  return (
    <div className="stats">
      <div className="stats__card">
        <div className="stats__icon">📊</div>
        <div className="stats__content">
          <h3 className="stats__title">Total Items Classified</h3>
          <p className="stats__count">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
