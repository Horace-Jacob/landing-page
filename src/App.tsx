import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Features } from "./components/Features/Features";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
    </>
  );
}

export default App;
