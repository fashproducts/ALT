/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Hero = ({ isMobile }) => {
  return (
    <div className="h-2/3 ">
      {/* <img
        src={`${isMobile ? "./NavMob.png" : "./NavDesk.png"}`}
        alt=""
        className="w-full h-16"
      /> */}
      <LazyLoad height={75} offset={100}>
        <img
          src={`${isMobile ? "./NavMob.png" : "./NavDesk.png"}`}
          className="h-16 w-full"
          alt="Navigation Image"
        />
      </LazyLoad>
      <div className="w-full flex flex-col items-center justify-center p-10 space-y-10">
        <img src="./Logo.png" alt="" className="md:h-[450px] " />
        <div className="w-full flex flex-col md:flex-row justify-center pl-10 space-x-5 space-y-3">
          <Link to="/individual">
            <button
              type="button"
              className="w-4/5 md:w-[300px]  text-white bg-[#d33737] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Individual Results
            </button>
          </Link>
          <Link to="/group">
            <button
              type="button"
              className="w-4/5 md:w-[300px]  text-white bg-[#d33737] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Group Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
