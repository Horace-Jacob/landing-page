import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Features } from "./components/Features/Features";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <>
      <div className="primary-bg">
        <Navbar />
        <Home />
      </div>
      <Features />
      <Work />
    </>
  );
}

export default App;
