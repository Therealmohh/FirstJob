
import ImageSlider from "./ImageSlider";

const Hello = () => {
  return (
    <div className="mt-24">
      <div className="">
        <div className="flex items-center w-1/2 text-center mx-auto my-4 text-secondary-color">
          <div
            className="flex-grow h-1"
            style={{
              background:
                "linear-gradient(to left, rgba(187, 187, 187, 1) 50%, rgba(187, 187, 187, 1) 0%, rgba(187, 187, 187, 1) 0%, transparent 100%)",
              height: "1px",
            }}
          ></div>
          <h1 className="text-center tracking-tighter text-[32px] italic transform scale-y-125 font-instrument-serif sm:text[21px] mx-2">
            Hello!
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
        <div className=" lg:flex sm:flex-row lg:mt-20 sm:mt-12 justify-between lg:flex-row ">
          <div className=" lg:flex justify-between  gap-7 items-center mx-auto">
            <div className="lg:flex sm:text-[13px] sm:mb-8 sm:justify-center sm:flex lg:text-[18px] mx-auto lg:flex-col lg:gap-20 ">
              <h1 className="bg-white text-center p-2 sm:w-[25%] lg:w-[100%] mr-3  rounded-full transform rotate-12">
                Mobile Design
              </h1>
              <h1 className="bg-white text-center sm:w-[25%] lg:w-[100%] mr-2 p-2 w-2/4 rounded-full transform sm:-rotate-3 lg:rotate-6">
                UI/UX
              </h1>
              <h1 className="bg-white text-center sm:w-[25% lg:w-[100%] p-2 rounded-full transform -rotate-6">
                Design systems
              </h1>
            </div>
            <div className="mt-5">
              <h1 className="lg:text-6xl sm:text-3xl text-center w-full transform scale-y-125 ">
                I help startups and enterprise to <br /> establish an emotional
                connection <br /> between their products and happy <br />{" "}
                engaged customers
              </h1>
            </div>
            <div className=" flex sm:text-[13px] sm:justify-center  lg:text-[18px] lg:flex-col lg:gap-20 sm:gap-0 lg:-mt-7 sm:mt-12 ">
              <h1 className="bg-white p-2  text-center sm:w-[25%] lg:w-[100%] mr-2  rounded-full transform -rotate-12">
                UI Animation
              </h1>
              <h1 className="bg-white p-2 text-center sm:w-[25%] lg:w-[100%] mr-2 rounded-full transform sm:rotate-6 lg:-rotate-6">
                Prototyping{" "}
              </h1>
              <h1 className="bg-white p-2 text-center sm:w-[25%] lg:w-[100%] lg:w-4/ rounded-full transform sm:rotate-3 lg:rotate-6">
                Strategy
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-8">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Hello;
