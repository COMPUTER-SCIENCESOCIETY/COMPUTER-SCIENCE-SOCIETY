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
      </div>
    </div>
  );
};

export default Loading;
