import { useState } from "react";
import { Link } from "react-router-dom";
import odun_logo from "@/assets/odun-logo.png";
import phone from "@/assets/Phone.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-secondary-color py-4 md:py-12 mx-auto  w-[95%]">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          {" "}
          <img src={odun_logo} alt="Odun Logo" className="h-8" />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden border-2 border-black rounded-md p-1 flex items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links and Contact Button */}
      <div
        className={`flex flex-col lg:mr-[43em] md:mr-[18em] md:flex-row md:items-center lg:gap-7 text-[20px] items-center ${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-auto`}
      >
        <div className="flex sm:flex-col md:flex-row  md:gap-7 lg:flex-row lg:gap-5">
          {" "}
          <Link to="/work" className="py-2 hover:text-black">
            Work
          </Link>
          <Link to="/about" className="py-2 hover:text-black">
            About
          </Link>
        </div>
      </div>
      <div>
        {/* Contact Button - Visible on Small Screens when Menu is Open */}
        <div
          className={`flex items-center border text-[20px] border-slate-400 px-5 py-2 rounded-full ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <button className="flex items-center">
            Contact{" "}
            <img
              src={phone}
              alt="Phone Icon"
              className="ml-2 mask mask-image"
              style={{
                maskImage: `url(${phone})`,
                WebkitMaskImage: `url(${phone})`,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
