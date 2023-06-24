import React from "react";
import UpcomingEvent from "./UpcomingEvent";


const EventGo = () => {
  return (
    <div className="container mx-auto max-w-7xl px-2 lg:px-8">
      <p className="text-3xl font-bold text-slate-500 pt-4">Upcoming Event</p>
      <div>
        <UpcomingEvent />

       
      </div>
    </div>
  );
};

export default EventGo;
