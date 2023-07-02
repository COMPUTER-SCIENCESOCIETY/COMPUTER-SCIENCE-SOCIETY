import React from "react";
import {
  FcHome,
  FcCalendar,
  FcLandscape
} from "react-icons/fc";

import {MdEmojiPeople} from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="fixed  bottom-0 container mx-auto bg-gradient-to-r min-w-full from-cyan-500 h-8 to-blue-500 z-30">
        <div className="flex justify-around items-center mt-1">
          <div>
            <Link to="/">
              <FcHome className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
          <div>
            <Link to="/events">
              <FcCalendar className="h-6 w-6  cursor-pointer" />
            </Link>
          </div>
          <div>
            <Link to="/teams">
              <div className="flex justify-center">
                <MdEmojiPeople className="h-6 w-6 cursor-pointer" />
              </div>
            </Link>
          </div>
          <div>
            <Link to="/gallery">

                <FcLandscape className="h-6 w-6  cursor-pointer" />

            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
