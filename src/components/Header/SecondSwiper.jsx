import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules";

import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";

const SecondSwiper = () => {
  return (
    <div className="lg:w-24 lg:h-16 sm:h-14 sm:w-20 shadow-black shadow-md  rounded-full border-2 border-black overflow-hidden">
      {/* Set a smaller height for the Swiper */}
      <Swiper
        direction={"vertical"}
        loop={true} // Enable looping
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img
            src={work1}
            alt="Work 1"
            className="w-full h-24 object-cover" // Set a fixed height
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img
            src={work2}
            alt="Work 2"
            className="w-full h-24 object-cover" // Set a fixed height
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img
            src={work3}
            alt="Work 3"
            className="w-full h-24 object-cover" // Set a fixed height
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img
            src={work4}
            alt="Work 4"
            className="w-full h-24 object-cover" // Set a fixed height
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <img
            src={work5}
            alt="Work 5"
            className="w-full h-24 object-cover" // Set a fixed height
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondSwiper;
