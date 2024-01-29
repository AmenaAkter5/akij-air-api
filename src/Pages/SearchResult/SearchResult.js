import React from "react";
import { filterData } from "../components/FilterOptions";
import SearchFilters from "../components/SearchFilters";
import FlightLists from "../components/FlightLists";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import toggler from "../../assets/icons/toggle-btn.png";

const SearchResult = () => {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, #8E011A 0%, rgba(72, 27, 37, 0.97) 100%)`,
      }}
      className="h-full"
    >
      <div className="max-w-screen-md lg:max-w-7xl mx-auto lg:px-0 px-4 pb-4">
        <div className="pt-2">
          <div
            style={{
              boxShadow: `0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)`,
            }}
            className="w-[1120px] bg-white mx-auto rounded-lg px-5 pt-2 pb-10"
          >
            <div>
              <ul className="text-sm font-normal text-[#303030] items-center">
                <li className=" list-none inline mr-3 p-2">
                  Non-stop Flight{" "}
                  <span>
                    <IoMdArrowDropdown className="inline ml-1" />
                  </span>
                </li>
                <li className=" list-none inline mr-3 p-2">
                  Any Baggage
                  <span>
                    <IoMdArrowDropdown className="inline ml-1" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff1a] border rounded-lg flex justify-between">
              <div className="w-[50%] grid grid-cols-12 relative">
                <div className="col-span-6 text-sm font-normal text-[#4A4A4A] border-r px-3 py-2">
                  <p>From</p>
                  <p className="text-2xl font-extrabold">Dhaka</p>
                  <p>DAC, Hazrat Shahjalal International Air... </p>
                </div>

                <div className="col-span-6 text-sm font-normal text-[#4A4A4A] border-r px-5 py-2">
                  <p>To</p>
                  <p className="text-2xl font-extrabold">Dubai</p>
                  <p>DXB, Dubai International Airport</p>
                </div>

                {/* toggle button */}

                <div className="absolute bottom-[31%] left-[47%] bg-white py-1 px-2 rounded-full shadow-[0_1px_30px_0_rgba(0,0,0,0.10)]">
                  <button>
                    <img className="h-3" src={toggler} alt="" />
                  </button>
                </div>
              </div>

              <div className="w-[50%] grid grid-cols-3">
                <div className="text-sm font-normal text-[#4A4A4A] border-r px-3 py-2">
                  <p>
                    Departure
                    <span>
                      <IoIosArrowDown className="inline ml-1 text-akij-red" />
                    </span>
                  </p>
                  <p className="text-3xl font-extrabold">
                    25 <span className="text-xl font-normal">Jan'24</span>
                  </p>
                  <p>Thursday</p>
                </div>

                <div className="text-sm font-normal text-[#4A4A4A] border-r px-3 py-2">
                  <p>
                    Return
                    <span>
                      <IoIosArrowDown className="inline ml-1 text-akij-red" />
                    </span>
                  </p>
                  <p className="text-xs font-extrabold text-[#9B9B9B] mt-2">
                    Tap to add a return date for bigger discounts
                  </p>
                </div>

                <div className="text-sm font-normal text-[#4A4A4A] px-3 py-2">
                  <p>
                    Travellers & Class
                    <span>
                      <IoIosArrowDown className="inline ml-1 text-akij-red" />
                    </span>
                  </p>
                  <p className="text-3xl font-extrabold">
                    1 <span className="text-xl font-normal">Traveller</span>
                  </p>
                  <p className="text-xs">Economy/Premium Economy</p>
                </div>
              </div>
            </div>
          </div>

          {/* {flightsTab === "round-trip" && (
                        <div className="bg-gray-200 p-4">
                            <h2 className="text-2xl font-bold">Round Trip</h2>
                        </div>
                    )}

                    {flightsTab === "multi-city" && (
                        <div className="bg-gray-200 p-4">
                            <h2 className="text-2xl font-bold">Multi City</h2>
                        </div>
                    )} */}
        </div>

        <div className="pt-96">
          <div className="lg:flex gap-4">
            <div className="hidden lg:block lg:min-w-[340px] lg:max-w-[340px]">
              {filterData.map((options) => (
                <div key={options._id}>
                  <SearchFilters {...options} />
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:w-full">
              {[...Array(6)].map((_, i) => (
                <FlightLists />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
