import "./App.css";
import borderLupis from "./images/Border_Lupis.png";
import Header from "./Components/Header";
import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <img className="border" id="main-border" src={borderLupis} alt="border" />
      <Header />
      <NavBar />
    </>
  );
}

export default App;
