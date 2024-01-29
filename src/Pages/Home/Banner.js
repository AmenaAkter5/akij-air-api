import React from "react";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import underline from "../../assets/banner/underline.svg";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const Banner = () => {
  // ======================================
  //            Data Fetch
  // ======================================

  // Flight Search Data fetch

  let reqData = JSON.stringify({
    journey_type: "OneWay",
    segment: [
      {
        departure_airport_type: "AIRPORT",
        departure_airport: "DAC",
        arrival_airport_type: "AIRPORT",
        arrival_airport: "CGP",
        departure_date: "2024-02-23",
      },
    ],
    travelers_adult: 1,
    travelers_child: 2,
    travelers_child_age: ["12", "13"],
    travelers_infants: 0,
    travelers_infants_age: [""],
    preferred_carrier: [null],
    non_stop_flight: "any",
    baggage_option: "any",
    booking_class: "Economy",
    supplier_uid: "all",
    partner_id: "",
    language: "en",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://devapi.innotraveltech.com/flight/search",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      apikey: "88853344696524514",
      secretecode: "9eVgaK8l1stXNzz4YC5KiOBotf9BOUINpK3g7kUI9TJ",
    },
    data: reqData,
  };

  const handleBtnClick = () => {
    axios
      .request(config)
      .then((response) => {
        console.log(response.data, "flight");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

          <button
            onClick={handleBtnClick}
            className="w-[135px] absolute -bottom-[23px] left-0 right-0 mx-auto bg-akij-red text-white text-base rounded-xl py-3.5 px-10"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
