import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Score = () => {
  const { score } = useContext(AppContext);
  return (
    <div className="flex flex-col align-center justify-center h-full w-40 border bg-white rounded-xl absolute right-0">
      <p className="text-xl text-center uppercase font-semibold text-score">
        Score
      </p>
      <p className="text-6xl text-center tracking-wide font-bold text-dark">
        {score}
      </p>
    </div>
  );
};

export default Score;
