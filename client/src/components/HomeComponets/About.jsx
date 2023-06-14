import React from "react";
import Lottie from "lottie-react";
import HumanRobot from "../../assets/HumanRobot.json";



const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <p className="text-amber-400 text-4xl lg:text-6xl font-bold pt-3 mx-3 lg:pt-16 underline">
              About Us
            </p>
            <p className="text-xl pt-5 text-white mx-4">
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
          <div>
            <Lottie animationData={HumanRobot} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
