import React from "react";
import arrow from "../../assets/ArrowUpRight.png";
import twitter from "../../assets/Vector (1).png";
import dribble from "../../assets/Dribble.svg.png";
import medium from "../../assets/medium.png";
import linkdin from "../../assets/Linkdin.png";
import Behance from "../../assets/Behance.png";
import Typewriter from "react-typewriter-effect";

const Footer = () => {
  return (
    <div className="bg-black mt-24 text-white relative overflow-hidden">
      {/* Grainy Background */}
      <div className="grainy-background absolute inset-0 z-0"></div>

      <div className="flex flex-col items-center justify-center p-4 relative z-10">
        <div className="flex items-center lg:w-1/2 sm:w-full sm:mt-12 lg:mt-24 mb-14 text-center mx-auto my-4 text-secondary-color">
          {" "}
          <div
            className="flex-grow h-1 bg-red-600 w-1/6"
            style={{
              background:
                "linear-gradient(to left, rgba(187, 187, 187, 1) 50%, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
              height: "1px",
            }}
          ></div>
          <h1 className="text-center tracking-tighter text-[32px] italic transform scale-y-125 font-instrument-serif sm:text[21px] mx-2">
            I'm available
          </h1>
          <div
            className="flex-grow border-secondary-color h-1 bg-yellow-300 w-1/6"
            style={{
              background:
                "linear-gradient(to right, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 30%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
              height: "1px",
            }}
          ></div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="italic lg:text-[70px] sm:text-[50px]  transform scale-y-125 tracking-tight">
            <Typewriter
              text="Let's Connect"
              typeSpeed={100} // Speed of typing
              cursorColor="transparent" // Cursor color
              startDelay={500} // Delay before starting
              eraseSpeed={50} // Speed of erasing
              typingDelay={1000} // Delay before typing starts again
              eraseDelay={2000} // Delay before erasing starts
            />
          </h1>
          <p className="lg:w-1/2 sm:w-[90%] mb-5 lg:text-[22px]  text-secondary-color">
            Feel free to contact me if you have any questions. I'm available for
            new projects or just for chatting.
          </p>
          <div className="overflow-hidden mt-5 p-2 px-2 rounded-full gradient-background ">
            {" "}
            <button className="items-center text-xl justify-center px-8  bg-black gap-2 overflow-hidden gradient-shadow border-2 border-white  rounded-full p-3 flex">
              Contact me <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div className="flex gap- mb-7  sm:w-[%] space-x-4 mt-20">
          <div className=" border-2 p-1 sm:h-12 lg:h-14 rounded-full border-secondary-color">
            <img
              className="lg:w-11 italic sm:w-10 sm:h-10 rounded-full lg:h-11"
              src={twitter}
              alt="Dribble"
            />
          </div>
          <div className=" border-2 p-1.5 sm:h-12 sm:w- rounded-full border-secondary-color">
            {" "}
            <img
              className="w-11 italic sm:-mt-1 sm:w-10 sm:h-10  rounded-full h-11"
              src={dribble}
              alt="Dribble"
            />
          </div>
          <div className=" border-2 sm:h-12  p-1 rounded-full border-secondary-color">
            <img
              className="w-11  p-2 sm:w-10 sm:h-10  rounded-full h-11"
              src={medium}
              alt="Medium"
            />
          </div>
          <div className=" border-2 sm:h-12 p-1 rounded-full border-secondary-color">
            <img
              className="w-11 sm:w-10 sm:h-10 p-1 rounded-full h-11"
              src={linkdin}
              alt="LinkedIn"
            />
          </div>

          <div className=" border-2 w- p-1 sm:h-12 rounded-full border-secondary-color">
            <img
              className="w-11 p-2 sm:w-10 sm:h-10 h-11"
              src={Behance}
              alt="Behance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
