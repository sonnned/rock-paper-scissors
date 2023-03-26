import Score from "./Score";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="grid grid-cols-2 w-3/6 h-36 rounded-xl py-3 px-6 outline outline-offset-2 outline-border">
      <div className="flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="relative">
        <Score />
      </div>
    </header>
  );
};

export default Header;
