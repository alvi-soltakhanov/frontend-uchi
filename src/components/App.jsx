import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Favorite from "./Favorite/Favorite";
import Header from "../components/Header/Header";
import AllCats from "./AllCats/AllCats";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllCats />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
};

export default App;
