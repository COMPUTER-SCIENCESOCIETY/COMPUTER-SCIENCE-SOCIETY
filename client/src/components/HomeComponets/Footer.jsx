import React from "react";
import {
  CalendarDaysIcon,
  HomeIcon,
  PhotoIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed  bottom-0 container mx-auto bg-gradient-to-r min-w-full from-cyan-500 h-8 to-blue-500 z-30">
      <div className="flex justify-around items-center mt-1">
        <div>
          <Link to="/">
            <HomeIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
        </div>
        <div>
          <Link to="/events">
            <CalendarDaysIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
        </div>
        <div>
          <Link to="/teams">
            <UserGroupIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
        </div>
        <div>
          <Link to="/gallery">
            <PhotoIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
