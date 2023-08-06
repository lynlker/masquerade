import React from "react";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import AnneMarie from "./pages/characters/AnneMarie";
import Voice from "./pages/characters/Voice";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/characters/AnneMarie" element={<AnneMarie />} />
          <Route path="/characters/Voice" element={<Voice />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
