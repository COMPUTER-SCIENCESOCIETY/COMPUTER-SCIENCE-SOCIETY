import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import EventModel from "./EventModel";
import axios from "axios";
import TableEvent from "./TableEvent";
import { format } from "timeago.js";

const UpcomingEvent = () => {
  const [data, setData] = React.useState([]);
  const [Loading, setLoading] = React.useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const getEvents = async () => {
    const res = await axios.get("/api/eventpage/getallevent");
    setData(res.data.events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const d = new Date();

  const months = new Intl.DateTimeFormat("en-us", {
    month: "long",
  });

  let currentDate = new Date().toJSON().slice(0, 10);
  // console.log(currentDate); // "2022-06-17"

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {data.slice(0,5).map((item,index) => (
            <SwiperSlide>
              <div key={index} className={`${item.formopendate > currentDate  ?'bg-gradient-to-r from-cyan-500 to-blue-500 h-96 rounded-xl':'bg-blue-200 h-96 rounded-xl'}`}>
                <p className="m-5 pt-5 text-8xl text-white">
                  {item.date.slice(8, 10)}
                </p>
                <p className="m-5 text-2xl text-white">{months.format(d)}</p>
                <div className="m-5 mt-8">
                  <p className="text-xl text-white">{item.title}</p>
                  <pre className="text-xl text-white pt-2">
                    {format(item.timeend)}
                  </pre>
                </div>
                {currentDate === item.date ? <button className="bg-red-400 w-32 mx-4 rounded-2xl">Done</button> : currentDate <= item.formopendate ?
                 <button className="bg-lime-400 w-32 mx-4 rounded-2xl">Apply</button>: <button className="bg-amber-500 w-32 mx-4 rounded-2xl">OVER</button>}
                
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div>
        {userInfo ? (
          <>
            <EventModel />
          </>
        ) : (
          ""
        )}

        <TableEvent/>
      </div>
    </>
  );
};

export default UpcomingEvent;
