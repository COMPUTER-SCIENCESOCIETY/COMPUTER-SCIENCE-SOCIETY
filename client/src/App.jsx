import React, { useState } from "react";
import Headers from "./components/HomeComponets/Headers";
import { Outlet } from "react-router-dom";
import Loading from "./pages/LoadingPage/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);


  console.log(`This WebSite is Created By Rishi Bose 🌞 ${'https://rishibose.site'}`);

  return (
    <div>
      {loading ? (
      <>
        <Headers />
        <Outlet />

      </>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default App;
