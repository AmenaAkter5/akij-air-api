import React from "react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import underline from "../../assets/banner/underline.svg";
import SearchBar from "../components/SearchBar";

const Banner = () => {
  return (
    <div className="mb-96">
      <div
        style={{ background: `linear-gradient(180deg, #EEF0FB 0%, #FFF 100%)` }}
      >
        <div className="pt-20 flex justify-between max-w-screen-md lg:max-w-7xl mx-auto relative">
          {/* Banner */}
          
          <div className="relative w-[52%] px-6 ml-4 mt-10">
            <h1 className="text-[51px] font-normal">
              Best Travel <span className="text-[#8E011A]">Experience</span>
              <img
                className="absolute top-[4.25rem] right-[140px] w-[240px]"
                src={underline}
                alt=""
              />
            </h1>
            <p className="text-base font-normal mt-8">
              Experience the various exciting tour and travel packages and Make
              hotel reservations, findvacation packages, search cheap hotels and
              events
            </p>
          </div>

          <div className="flex gap-4 w-[48%]">
            <div>
              <img
                className="rounded-2xl w-[470px] h-[520px]"
                src={banner1}
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-2xl w-[250px] h-[520px]"
                src={banner2}
                alt=""
              />
            </div>
          </div>

          <SearchBar />

          {/* Search Button */}

          <button className="w-[135px] absolute -bottom-[23px] left-0 right-0 mx-auto bg-akij-red text-white text-base rounded-xl py-3.5 px-10">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
