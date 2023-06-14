import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper";

const listUser = [0, 1, 2, 3, 4, 5, 6, 7];

const TestimonIals = () => {
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
            {listUser.map((data) => {
              return (
                <SwiperSlide>
                  <div
                    className="relative h-[400px] w-[300px] rounded-md"
                    key={data.id}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                      alt="AirMax Pro"
                      className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                      <h1 className="text-lg font-semibold text-white">
                        Delba
                      </h1>
                      <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, debitis?
                      </p>
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
