import Slider from "react-slick";
import sako from "@/assets/Sako-logo.png";
import techpay from "@/assets/techpay-logo.png";
import Smart from "@/assets/Smarthms-logo.png";
import Funconnect from "@/assets/Funconnect-Logo.png";
import Alphabeta from "@/assets/Alphabeta-Logo.png";
import LagosState from "@/assets/LagosState-Logo.png";

const ImageSlider = () => {
  const images = [sako, techpay, Smart, Funconnect, Alphabeta, LagosState];

  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For screens larger than 1024px
        settings: {
          slidesToShow: 6, // Show 6 images
        },
      },
      {
        breakpoint: 768, // For screens larger than 768px
        settings: {
          slidesToShow: 3, // Show 3 images
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 2, // Show 2 images
        },
      },
    ],
  };

  return (
    <div className="slider-container lg:mt-10 sm:mt-3 w-[75%] sm:w-[100%] mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center mx-auto">
            <div className="relative sm:w-[100%] lg:w-[90%] h-20 mx-auto">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="sm:w-36 sm:h-full  lg:w-32 lg:h-32 object-contain mx-auto mix-blend-multiply absolute"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
