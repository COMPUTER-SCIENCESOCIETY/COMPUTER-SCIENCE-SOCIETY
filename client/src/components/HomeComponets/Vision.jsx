import React from "react";
import Lottie from "lottie-react";
import manlooking from "../../assets/manlooking.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Vision = () => {
  return (
    <div className="bg-gradient-to-l from-pink-500">
      <div className=" container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div data-aos="fade-right">
            <Lottie animationData={manlooking} loop={true} />
          </div>
          <div className="col-span-2" data-aos="fade-down">
            <p className="text-white text-4xl lg:text-6xl font-bold pt-3 lg:pt-16 underline">
              Vision Of Society
            </p>
            <p className="text-xl pt-3 pb-4 lg:pt-6 mx-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
