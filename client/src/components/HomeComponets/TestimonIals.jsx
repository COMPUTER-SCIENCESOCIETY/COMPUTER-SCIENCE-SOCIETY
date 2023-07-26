import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper";

import Rating from "@mui/material/Rating";

const TestimonIals = () => {
  const [Data, setData] = useState([]);

  const getInfo = async () => {
    const infos = await fetch(
      "https://mocki.io/v1/eb029bbb-1f15-425d-bb03-3d15f8ecf1b1"
    );
    const res = await infos.json();
    setData(res);
  };

  useEffect(() => {
    getInfo();
  }, []);



  return (
    <div className="bg-gradient-to-b from-indigo-500">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-white pt-5 pb-4 text-center">
            Testimonials
          </h1>
        </div>
        <div className="mx-4">
          <Swiper
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            data-aos="fade-down"
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
            {Data.map((data) => {
              return (
                <SwiperSlide>
                  <div className="mx-auto max-w-xl rounded-md bg-black p-1">
                    <div className="flex flex-col rounded-md bg-white h-96">
                      <div className="flex flex-1 flex-col justify-between p-8">
                        <div className="mb-4 flex space-x-2">
                        <Rating name="size-large" readOnly defaultValue={data.Rating} size="large" />
                        </div>
                        <div className="flex-1 pt-2">
                          <blockquote>
                            <p className="text-lg font-semibold text-gray-800">
                              “{data.About}”
                            </p>
                          </blockquote>
                        </div>

                        <div className=" border-t border-gray-300 pt-4 dark:border-gray-800">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                              src={data.Image}
                              alt=""
                            />
                            <div className="ml-3 min-w-0">
                              <p className="truncate text-base font-semibold text-gray-800">
                                {data.Name}
                              </p>
                              <p className="truncate text-base text-gray-500">
                               {data.Type}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonIals;
