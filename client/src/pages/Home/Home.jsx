import React from "react";

import MainSlide from "../../components/HomeComponets/MainSlide";
import About from "../../components/HomeComponets/About";
import Vision from "../../components/HomeComponets/Vision";
import TestimonIals from "../../components/HomeComponets/TestimonIals";
import FooterSticky from "../../components/HomeComponets/FooterSticky";
import Sponser from "../Sponser/Sponser";
import ContactForm from "../../components/ContactComponent/ContactForm";
import { Helmet } from "react-helmet-async";
import NumberofTeam from "../../components/HomeComponets/NumberofTeam";

const Home = () => {
  return (
    <div className="mb-10">
      
      <Helmet prioritizeSeoTags>
        <title>Information technology Society</title>
        <link rel="notImportant" href="https://itsoffical.cyclic.app" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://itsoffical.cyclic.app" />
        <meta
          property="og:title"
          content="Information technology Society Home Page"
        />
      </Helmet>
      <MainSlide />
      <About />
      <Vision />
      <NumberofTeam />
      <Sponser />
      <TestimonIals />
      <ContactForm />
      <FooterSticky />
    
    </div>
  );
};

export default Home;
