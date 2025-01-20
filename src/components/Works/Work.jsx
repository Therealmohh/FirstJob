import React from "react";
// import Phone1 from "../../assets/iphone14Pro(1).png";
// import Phone1 from "../../assets/iphone14Pro(1).png";
// import Phone from "../../assets/iphone 14 Pro (3).png";
import Phone2 from "../../assets/iphone14Pro(2).png";
import Macbook from "../../assets/Macbook-Pro-16.png";
import Formpic from "../../assets/Request form.jpg";

const Work = () => {
  return (
    <div
      className="w-[95%] mx-auto mt-20 items-center lg:flex lg:flex-col"
      //   style={{ backgroundColor: "rgba(229, 229, 229, 1)" }}
    >
      <div className="flex items-center lg:hidden my-4 text-secondary-color">
        <div
          className="flex-grow h-1"
          style={{
            background:
              "linear-gradient(to left, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 30%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
            height: "1px",
          }}
        ></div>
        <h1 className="text-center  italic transform scale-y-125 font-instrument-serif sm:text[21px] mx-2">
          Relevant Projects
        </h1>
        <div
          className="flex-grow border-secondary-color h-1"
          style={{
            background:
              "linear-gradient(to right, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 30%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
            height: "1px",
          }}
        ></div>
      </div>

      <div className="flex flex-col ga ">
        <div className="lg:flex  gap-7">
          {/* First Item */}
          <div>
            <div className="bg-primary-color mx-auto rounded-3xl sm:w-[360px] sm:h-[301px] lg:w-[616px] lg:h-[474px] p-4 overflow-hidden flex flex-col items-center justify-center">
              <div className="image-container relative flex items-center justify-center h-full">
                <img
                  src={Phone1}
                  alt="Mobile HMS - 2024"
                  className="transition-transform duration-300 transform translate-y-1/2 lg:hover:translate-y-32 sm:hover:translate-y-24"
                  style={{ maxHeight: "130%", maxWidth: "130%" }}
                />
              </div>
            </div>
            <div className="flex justify-between mx-auto items-center mt-3 w-[93%]">
              <h1 className="text-secondary-color sm:text-[15px] lg:text-xl">
                Mobile HMS - 2024
              </h1>
              <div className="flex gap-3 items-center lg:text-base sm:text-[12px] text-secondary-color">
                {" "}
                <p className="bg-primary-color rounded-full px-3 py-1">
                  mobile
                </p>
                <p className="bg-primary-color rounded-full px-3 py-1">
                  hospital management
                </p>
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div className="sm:mt-8 lg:mt-0">
            <div className="bg-primary-color rounded-3xl lg:w-[616px] mx-auto sm:w-[360px] sm:h-[301px] lg:h-[474px] p-4  overflow-hidden lg:flex lg:flex-col items-center justify-center">
              <div className="image-container relative flex items-center justify-center h-full">
                <img
                  src={Macbook}
                  alt="Phone 2"
                  className="transition-transform duration-300 transform translate-y-1/2 hover:translate-y-0"
                  style={{ maxHeight: "130%", maxWidth: "130%" }} // Ensures the image fits within the container
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 w-[93%] mx-auto">
              <h1 className="text-secondary-color sm:text-[15px] lg:text-xl">
                Phone 2 Title
              </h1>
              <div className="flex gap-3 lg:text-base sm:text-[12px] items-center text-secondary-color ">
                <p className="bg-primary-color rounded-full px-3 py-1">
                  mobile
                </p>
                <p className="bg-primary-color rounded-full px-3 py-1">
                  description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Item */}
      <div className="lg:flex mt-8 gap-7">
        <div className="gap-6 ">
          <div className="bg-primary-color rounded-3xl mx-auto sm:w-[360px] sm:h-[301px] lg:w-[616px] lg:h-[474px] p-4  overflow-hidden flex flex-col items-center justify-center">
            <div className="image-container relative flex items-center justify-center h-full">
              <img
                src={Formpic}
                alt="Macbook Pro"
                className="transition-transform hover:slant-image duration-300 transform translate-y-1/2 hover:translate-y-0 "
                style={{ maxHeight: "100%", maxWidth: "100%" }} // Ensures the image fits within the container
              />
            </div>
          </div>
          <div className="flex justify-between  items-center mt-4 w-[93%] mx-auto">
            <h1 className="text-secondary-color sm:text-[15px] lg:text-xl">
              Macbook Pro Title
            </h1>
            <div className="flex gap-3 items-center lg:text-base sm:text-[12px] text-secondary-color ">
              <p className="bg-primary-color rounded-full px-3 py-1">web</p>
              <p className="bg-primary-color rounded-full px-3 py-1">
                tax & revenue
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="sm:mt-8 lg:mt-0">
          <div className="bg-primary-color rounded-3xl mx-auto sm:w-[360px] sm:h-[301px] lg:w-[616px] lg:h-[474px] p-4 overflow-hidden flex flex-col items-center justify-center">
            <div className="image-container relative flex items-center justify-center h-full">
              <img
                src={Phone2}
                alt="Request Form"
                className="transition-transform duration-300 transform translate-y-1/2 lg:hover:translate-y-32 sm:hover:translate-y-24"
                style={{ maxHeight: "130%", maxWidth: "130%" }} // Ensures the image fits within the container
              />
            </div>
          </div>
          <div className="flex justify-between  items-center mt-4 mx-auto w-[93%]">
            <h1 className="text-secondary-color sm:text-[15px] lg:text-xl">
              Request Form Title
            </h1>
            <div className="flex gap-2 items-center lg:text-base sm:text-[10px] text-secondary-color ">
              <p className="bg-primary-color rounded-full px-3 py-1 ">mobile</p>
              <p className="bg-primary-color rounded-full px-3 py-1">e-books</p>
              <p className="bg-primary-color rounded-full px-3 py-1">
                audiobooks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
