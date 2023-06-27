import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Headers from "./components/HomeComponets/Headers";
import Footer from "./components/HomeComponets/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./pages/LoadingPage/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <div>
      {loading ? (
        <>
          <Headers />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default App;
