import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Rules from "./components/Rules/Rules";
import { AppContext } from "./context/AppContext";

function App() {
  const { rules, setRules } = useContext(AppContext);

  return (
    <div className="w-screen h-screen bg-main font-barlow">
      <main className="h-screen w-screen py-8 px-10 flex flex-col items-center justify-start relative">
        <Header />
        {rules ? <Rules /> : null}
        <p
          className="uppercase border px-6 py-2 text-center rounded-lg absolute bottom-0 right-0 m-10 text-white font-semibold cursor-pointer z-0"
          onClick={() => setRules(true)}
        >
          rules
        </p>
      </main>
    </div>
  );
}

export default App;
