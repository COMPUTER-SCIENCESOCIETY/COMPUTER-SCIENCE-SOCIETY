import React from "react";
import logo from "../../assets/itsl.png";
import "./MainSlide.css";
import { useTranslation } from "react-i18next";



const MainSlide = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-full relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full  object-cover absolute mix-blend-overlay"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/itsmembers.appspot.com/o/itsdds.mp4?alt=media&token=b7893b27-5a37-484c-89bc-528118915132&_gl=1*19hhuxy*_ga*NjgyOTU0NTg4LjE2ODYwMTU0MTM.*_ga_CW55HF8NVT*MTY4NjU1NTgxMi45LjEuMTY4NjU1NTg0OC4wLjAuMA.."
            type="video/mp4"
          />
        </video>
        <div className="flex justify-center">
          <img src={logo} alt="loading" className="w-48 h-48 lg:w-96 lg:h-96" />
        </div>
        <div>
          <p className="text-3xl lg:text-5xl text-center text-white font-bold uppercase pb-10 tracking-in-expand">
            {t("welcome")}
          </p>
          <p className="text-3xl lg:text-5xl text-center text-white font-bold pb-10">
          {t("learn")} <sup>.</sup> {t("code")} <sup>.</sup> {t("play")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSlide;
