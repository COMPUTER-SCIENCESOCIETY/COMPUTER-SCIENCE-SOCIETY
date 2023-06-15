import React from "react";
import UpcomingEvent from "./UpcomingEvent";


const EventGo = () => {
  return (
    <div className=" container mx-auto">
      <p className=" text-3xl font-bold text-slate-500 pt-4">Upcoming Events</p>
      <div>
        <UpcomingEvent />

       
      </div>
    </div>
  );
};

export default EventGo;
