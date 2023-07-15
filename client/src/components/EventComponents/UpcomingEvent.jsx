import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import EventModel from "./EventModel";
import TableEvent from "./TableEvent";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import OldEven from "./OldEven";

const UpcomingEvent = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    "/api/eventpage/getallevent",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="">
        {" "}
        <LinearProgress color="success" />
      </div>
    );

  let currentDate = new Date().toJSON().slice(0, 10);
  // console.log(currentDate); // "2022-06-17"

  return (
    <div className="container mx-auto max-w-7xl px-2 lg:px-8">
      <p className="text-3xl font-bold text-slate-500 pt-4">Upcoming Event</p>
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
          {data.events.slice(0, 5).map((item, index) => (
            <SwiperSlide>
              <div
                key={index}
                className={`${
                  item.formopendate >= currentDate
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 h-96 rounded-xl"
                    : "bg-blue-200 h-96 rounded-xl"
                }`}
              >
                <p className="m-5 pt-5 text-8xl text-white">
                  {item.date.slice(8, 10)}
                </p>

                <p className="m-5 text-2xl text-white">{item.month}</p>
                <div className="m-5 mt-8">
                  <p className="text-xl text-white">
                    {item.title.slice(0, 40)}..
                  </p>
                  <pre className="text-xl text-white pt-2">
                    {format(item.timeend)}
                  </pre>
                </div>
                {currentDate === item.date ? (
                  <button className="bg-red-400 w-32 mx-4 rounded-2xl">
                    Done
                  </button>
                ) : currentDate <= item.formopendate ? (
                  <Link to={item.googleform}>
                    <button className="bg-lime-400 w-32 mx-4 rounded-2xl">
                      Apply
                    </button>
                  </Link>
                ) : (
                  <button className="bg-amber-500 w-32 mx-4 rounded-2xl">
                    OVER
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div>
        {userInfo ? (
          <>
            <EventModel mutate={mutate} />
          </>
        ) : (
          ""
        )}
        <TableEvent />
        {/* <OldEven/> */}
      </div>
    </div>
  );
};

export default UpcomingEvent;
