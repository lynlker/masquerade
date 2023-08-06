import React from "react";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AnneMarie from "./pages/character/AnneMarie";
import Voice from "./pages/character/Voice";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/character/AnneMarie" element={<AnneMarie />} />
          <Route path="/character/Voice" element={<Voice />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
