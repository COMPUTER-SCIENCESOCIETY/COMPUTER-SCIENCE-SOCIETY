import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Teams from "./pages/Teams/Teams.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { LoginScreen } from "./pages/Auth/LoginScreen.jsx";
import EventWorking from "./pages/Event/EventWorking.jsx";
import { HelmetProvider } from "react-helmet-async";
import GalleryImage from "./components/GalleryComponent/GalleryImage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

import './i18n.js'

const router = createBrowserRouter(
  
   
    createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/events" element={<EventWorking />} />
        <Route path="/gallery" element={<GalleryImage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </>
    )
  
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);
