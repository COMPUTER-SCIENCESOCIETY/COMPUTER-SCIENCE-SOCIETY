import React from "react";
import Home from "./pages/Home/Home";
import Headers from "./components/HomeComponets/Headers";
import Footer from "./components/HomeComponets/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
