import React from "react";
import odun from "../../assets/odun 1.png";
import FirstSwiper from "./FirstSwiper";
import SecondSwiper from "./SecondSwiper";
import arrow from "../../assets/ArrowUpRight.png";

const Header = () => {
  return (
    // Main component
    <div className="text-[88px] flex bg-transparent  flex-col w-full lg:justify-center lg:items-center font-instrument-serif sm:w-[90%] sm:mx-auto">
      {/* Sub-Main Component */}
      <div className="mx-au text-center">
        <div className="flex items-center justify-center  w-full lg:-mb- sm:-mb-8">
          {" "}
          {/* Reduced margin-bottom */}
          <h1 className="lg:text-6xl sm:text-5xl transform scale-y-125 inline-flex gap-2">
            I'm <span className="text-secondary-color italic">Odun.</span>
          </h1>
          <div>
            <img
              className="inline border-2 lg:w-24 lg:h-16 sm:h-14 sm:w-20 mb-5 border-black shadow-black shadow-md rounded-full bg-inherit ml-2" // Reduced margin-bottom and left margin
              src={odun}
              alt=""
            />
          </div>
          <span className=" sm:text-4xl "> ,</span>
        </div>
        {/* Product Designer Component */}
      </div>
      <div className="lg:-mt-8 sm:-mt-14 bg-transparent">
        {" "}
        <div className="inline-flex gap-3 sm:-6 justify-center items-center  ">
          {" "}
          {/* Reduced margin-bottom */}
          <h1 className="lg:text-6xl transform scale-y-125 sm:text-4xl">
            a Product
          </h1>
          <div className="mb- sm:w">
            <SecondSwiper />
          </div>
          <h1 className="lg:text-6xl tracking-tighter transform scale-y-150 sm:text-3xl italic text-secondary-color mt-1">
            Designer
          </h1>
        </div>
        {/* BasedInLagos Component */}
      </div>
      <div className="lg:-mt-10 sm:-mt-14 bg-transparent">
        {" "}
        <div className="m-2 lg: inline-flex gap-2">
          <h1 className="lg:text-7xl lg:translate-y-0 sm:-translate-y-3 transform scale-y-125 sm:text-4xl inline-flex gap-3">
            based in{" "}
            <span className="italic tracking-tighter text-secondary-color">
              Lagos.
            </span>{" "}
          </h1>
          <div className="lg:mt-0 sm:-mt-6">
            {" "}
            <FirstSwiper />
          </div>
        </div>
      </div>
      {/* Text Component */}
      <div className="lg:w-[50%] sm:w-[]  flex items-start justify-center lg:mt-4 sm:-mt-1">
        {" "}
        {/* Reduced margin-top */}
        <p className="lg:text-xl sm:text-[14px] text-secondary-color text-center">
          With 5 years of experience, I specialize in designing useful, <br />{" "}
          usable, and mindful products that connect vision to value for <br />{" "}
          startups and enterprise brands alike.
        </p>
      </div>
      <div className="flex  items-center  justify-center w-full">
        <button className="bg-black  text-white flex items-center justify-center text-[20px] tracking-normal mt-5 py-3 lg:px-6 sm:px-20 sm:items-center sm:mx-auto drop-shadow-lg rounded-full gap-1 ">
          Schedule a call <img className="bg-transparent" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
