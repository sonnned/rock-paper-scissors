import Score from "./Score";

const Header = () => {
  return (
    <header className="grid grid-cols-2 w-3/6 h-36 rounded-xl py-3 px-6 outline outline-offset-2 outline-border">
      <div className="flex flex-col tracking-wide">
        <p className="text-3xl font-semibold uppercase text-white">
          rock
        </p>
        <p className="text-3xl font-semibold uppercase text-white">paper</p>
        <p className="text-3xl font-semibold uppercase text-white">scissors</p>
      </div>
      <div className="relative">
        <Score />
      </div>
    </header>
  );
};

export default Header;
