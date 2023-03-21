import { useContext } from "react";
import close from "../../assets/icon-close.svg";
import rules from "../../assets/image-rules.svg";
import { AppContext } from "../../context/AppContext";

const Rules = () => {
  const { setRules } = useContext(AppContext);

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-back z-50">
      <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[60%] w-[25%] rounded-xl flex flex-col p-7">
        <div className="flex flex-row w-full justify-between align-center pb-10">
          <p className="uppercase text-3xl font-bold text-dark">rules</p>
          <img
            className="w-10 h-10 p-2 cursor-pointer"
            src={close}
            alt="close button"
            onClick={() => setRules(false)}
          />
        </div>
        <div className="flex align-center justify-center">
          <img src={rules} alt="rules image" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
