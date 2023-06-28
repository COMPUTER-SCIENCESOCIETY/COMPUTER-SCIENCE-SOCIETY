import React from "react";
import logo from "../../assets/itsl.png";
import { FidgetSpinner } from "react-loader-spinner";
const Loading = () => {
  return (
    <div class="flex h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div class="m-auto">
        <img src={logo} alt="loading.." className="w-96 h-96" />
        <p className=" capitalize font-bold text-xl text-center">
          information technology society
        </p>
        <div className="flex justify-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="#F4442E"
          />
           
        </div>
        <div className="flex justify-center items-center mt-20">
        <img src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f1ee-1f1f3.svg" alt="loading" className="w-10 h-10 mx-2"/>
        <p>CreatedBy-<span className=" uppercase font-semibold">Rishi Bose</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default Loading;
