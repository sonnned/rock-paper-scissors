import close from "../../assets/icon-close.svg";

const Rules = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-back">
      <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[55%] w-1/3 rounded-xl flex flex-col p-7">
        <div className="flex flex-row w-full justify-between align-center">
          <p className="uppercase text-3xl font-bold text-dark">rules</p>
          <img className="w-10 h-10 p-2" src={close} alt="close button" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Rules;
