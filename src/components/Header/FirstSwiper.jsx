import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules";

import pic1 from "@/assets/lagos 1.png";
import pic2 from "@/assets/lagos 2.png";
import pic3 from "@/assets/lagos 3.png";
import pic4 from "@/assets/lagos 4.png";
import pic5 from "@/assets/lagos 5.png";

const FirstSwiper = () => {
  return (
    <div className="lg:w-24 lg:h-16 sm:h-14 sm:w-20  border-2  shadow-md  border-black rounded-full overflow-hidden shadow-black">
      {" "}
      {/* Set a fixed width and height */}
      <Swiper
        direction={"vertical"}
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full" // Ensure Swiper takes full height and width
      >
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <img
            src={pic1}
            alt="Lagos 1"
            className="w-full h-full object-cover" // Use object-cover for circular images
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <img
            src={pic2}
            alt="Lagos 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <img
            src={pic3}
            alt="Lagos 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <img
            src={pic4}
            alt="Lagos 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full w-full">
          <img
            src={pic5}
            alt="Lagos 5"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSwiper;
