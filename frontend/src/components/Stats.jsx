import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
  const { count } = useContext(AppContext);

  return (
    <div>
      <h3>Total Items Classified: {count}</h3>
    </div>
  );
};

export default Stats;
