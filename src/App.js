import React from "react";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Groups from "./pages/Groups";
import Home from "./pages/Home";

const App = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/characters":
      component = <Characters />;
      break;
    case "/groups":
      component = <Groups />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
};

export default App;
