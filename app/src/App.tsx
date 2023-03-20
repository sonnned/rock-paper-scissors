import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-screen h-screen bg-main font-barlow">
      <main className="h-screen w-screen py-8 px-10 flex flex-col items-center justify-start">
        <Header />
      </main>
    </div>
  );
}

export default App;
