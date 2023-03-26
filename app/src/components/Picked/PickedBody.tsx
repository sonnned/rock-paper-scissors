import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";

const PickedBody = () => {
  const { selected, setScore, score, setSelected } = useContext(AppContext);
  const [result, setResult] = useState<string>("");

  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const selectedOption = options[randomIndex];

  const getResult = (selected: string, selectedOption: string): number => {
    if (selected === selectedOption) {
      return 0;
    } else if (
      (selected === "rock" && selectedOption === "scissors") ||
      (selected === "paper" && selectedOption === "rock") ||
      (selected === "scissors" && selectedOption === "paper")
    ) {
      return 1;
    } else {
      return -1;
    }
  };

  useEffect(() => {
    const result = getResult(selected, selectedOption);
    if (result === 1) {
      setResult("You win");
      setScore(score + 1);
    } else if (result === -1) {
      setResult("You lose");
      setScore(score - 1);
    } else {
      setResult("Draw");
    }
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-2 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col align-center w-max justify-center">
        <p className="uppercase text-white font-bold text-center text-5xl py-6">
          {result}
        </p>
        <div className="flex justify-center content-center">
          <button
            className="bg-white uppercase font-semibold rounded-lg py-3 px-16 w-max"
            onClick={() => setSelected("")}
          >
            play again
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="uppercase text-white font-bold text-center text-3xl py-16">
          you picked
        </p>
        <div className="flex justify-center">
          <div
            className={`h-max w-max rounded-full bg-${selected} 
 cursor-pointer`}
          >
            <div className="flex justify-center items-center h-36 w-36 bg-white shadow-lg rounded-full m-6 shadow-icon">
              <img
                src={
                  selected === "rock"
                    ? rock
                    : selected === "paper"
                    ? paper
                    : scissors
                }
                alt={`${selected} icon`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="uppercase text-white font-bold text-center text-3xl py-16">
          the house picked
        </p>
        <div className="flex justify-center">
          <div
            className={`h-max w-max rounded-full bg-${selectedOption} 
 cursor-pointer`}
          >
            <div className="flex justify-center items-center h-36 w-36 bg-white shadow-lg rounded-full m-6 shadow-icon">
              <img
                src={
                  selectedOption === "rock"
                    ? rock
                    : selectedOption === "paper"
                    ? paper
                    : scissors
                }
                alt={`${selectedOption} icon`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PickedBody;
