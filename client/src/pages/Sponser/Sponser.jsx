import React from "react";
import Lottie from "lottie-react";
import sponserlooking from "../../assets/SponsorRobot.json";
const Sponser = () => {
  return (
    <div className="bg-gradient-to-l from-amber-500">
      <div>
        <div className=" container mx-auto">
          <p className="text-4xl lg:text-6xl text-orange-500 font-bold pt-4 underline underline-offset-2 pb-3">
            Want To Sponsor Us
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center m-4">
            <button
              className="bg-lime-400 w-96 h-20 text-white ring-4 ring-red-500 ring-offset-2
             font-semibold text-2xl rounded-xl"
            >
              Sponsor
            </button>
          </div>
          <div>
            <Lottie animationData={sponserlooking} loop={true} />
          </div>
        </div>
        {/* <Lottie animationData={sponserlooking} loop={true} /> */}
      </div>
    </div>
  );
};

export default Sponser;
