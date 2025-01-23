import React from "react";
import Typewriter from "react-typewriter-effect";

const Experience = () => {
  const experienceData = [
    {
      role: "Analyst, Product Designer",
      company: "Alliance Consulting & Digital Solutions",
      date: "2024 Till Date",
    },
    {
      role: "Senior Designer",
      company: "Rogers & Co.",
      date: "2023 - 2024",
    },
    {
      role: " Product Designer",
      company: "Funconnect Labs.",
      date: "2022 - 2023",
    },
    {
      role: "Product Designer",
      company: "Lunar.io",
      date: "2021 - 2022",
    },

    {
      role: "Visual Designer",
      company: "XTO Multimedia ProFx",
      date: "2019 - 2021",
    },
  ];
  return (
    <div>
      <div className="flex items-center w-1/2 sm:mt-12 lg:mt-32 mb-14 text-center mx-auto my-4 text-secondary-color">
        {" "}
        <div
          className="flex-grow h-1"
          style={{
            background:
              "linear-gradient(to left, rgba(187, 187, 187, 1) 50%, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
            height: "1px",
          }}
        ></div>
        <h1 className="text-center tracking-tighter text-[32px] italic transform scale-y-125 font-instrument-serif sm:text[21px] mx-2">
          Experience
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
      <div className="">
        {experienceData.map((item, i) => {
          return (
            <div className="">
              <div key={i} className="w-full max-w-[80%]  mx-auto">
                <div className="sm:flex sm:flex-wrap sm:items-center lg:flex lg:justify-between lg:items-center text-center w-full mt-8 py-3">
                  {/* Role */}
                  <p className="text-secondary-color text-lg lg:text-xl sm:w-1/2 lg:w-1/3 text-left">
                    {item.role}
                  </p>
                  {/* Date */}
                  <p className="text-secondary-color text-lg lg:text-xl sm:w-1/2 lg:w-1/3 text-right lg:text-center">
                    {item.date}
                  </p>
                  {/* Company */}
                  <h1 className="text-lg lg:text-xl mt-2 sm:mt-2 sm:w-full lg:w-1/3 lg:mt-0 text-start lg:text-right">
                    <Typewriter
                      text={item.company}
                      typeSpeed={100} // Speed of typing
                      cursorColor="transparent" // Cursor color
                      startDelay={500} // Delay before starting
                      eraseSpeed={50} // Speed of erasing
                      typingDelay={1000} // Delay before typing starts again
                      eraseDelay={2000} // Delay before erasing starts
                    />
                  </h1>
                </div>
                <hr className="border border-[#c5c5c5] mt-2 w-[100%] mx-auto" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
