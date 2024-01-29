import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillBusFrontFill } from "react-icons/bs";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { SlPlane } from "react-icons/sl";
import checkList from "../../assets/icons/list-item.svg";
import checked from "../../assets/icons/checked.svg";
import toggler from "../../assets/icons/toggle-btn.png";
import Datepicker from "react-tailwindcss-datepicker";
import axiosInstance from "../../lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import useOutsideClick from "../../hooks/useOutsideClick";
import SearchInput from "./SearchInput";


const SearchBar = () => {

  const [travelsTab, setTravelsTab] = useState("flights");
  const [flightsTab, setFlightsTab] = useState("one-way");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  // Input States

  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const searchFromDropdownRef = useOutsideClick(() => setIsFromDropdownOpen(false));
  const searchInputFromRef = useRef(null);
  const [searchFrom, setSearchFrom] = useState('');
  const [cityFrom, setCityFrom] = useState('');

  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const searchToDropdownRef = useOutsideClick(() => setIsToDropdownOpen(false));
  const searchInputToRef = useRef(null);
  const [searchTo, setSearchTo] = useState('');
  const [cityTo, setCityTo] = useState('');

  const [isQueryEnabled, setQueryEnabled] = useState(true);

  
  // handle travels tab
  const handleTravelsTab = (tab) => {
    setTravelsTab(tab);
  };

  // handle flights tab
  const handleFlightsTab = (tab) => {
    setFlightsTab(tab);
  };

  // handle date picker
  const handleDateChange = (newDate) => {
    console.log("newValue:", newDate);
    setDate(newDate);

  };
// =================================
//       Input Functionalities
// ==================================

  // handle search from dropdown
  const toggleFromDropdown = () => {
    // setIsDropdownOpen((prev) => !prev);
    setIsFromDropdownOpen(true);
  };

  // handle search to dropdown
  const toggleToDropdown = () => {
    setIsToDropdownOpen(true);
  };

  // focus from search Input
  useEffect(() => {
    if (isFromDropdownOpen && searchInputFromRef.current) {
      searchInputFromRef.current.focus();
    }
  }, [isFromDropdownOpen]);

  // focus to search Input
  useEffect(() => {
    if (isToDropdownOpen && searchInputToRef.current) {
      searchInputToRef.current.focus();
    }
  }, [isToDropdownOpen]);

  // handle from search Input 
  const handleFromSearchInput = (e) => {
  e.preventDefault();
  const searchValue = e.target.search.value;
  console.log(searchValue, 'from');
  }

  // handle to search Input 
  const handleToSearchInput = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue, 'to');
  }


  // handle From Input Change
  const handleFromSearchInputChange = (e) => {
    const searchText = e.target.value;
    console.log(searchText, 'from');
  }

  // handle To Input Change
  const handleToSearchInputChange = (e) => {
    const searchText = e.target.value;
    console.log(searchText, 'to');
  }


  // handle selected from airport value
  const handleSelectedFromAirport = (airportName, airportCityName) => {
    setSearchFrom(airportName);
    setCityFrom(airportCityName);
    setIsFromDropdownOpen(false);
  }

  // handle selected to airport value
  const handleSelectedToAirport = (airportName, airportCityName) => {
    setSearchTo(airportName);
    setCityTo(airportCityName);
    setIsToDropdownOpen(false);
  }


  // Airport Auto Suggestion Data fetch

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/tools/airport-autosuggetion-data');
      return response.data; 
    } catch (error) {
      console.log("catch error", error);
      throw error;
    }
  };

  
  const { data } = useQuery({
    queryKey: ["airports"],
    queryFn: fetchData,
    // staleTime: Infinity,
    enabled: isQueryEnabled
  });

  useEffect(() => {
    if (data) {
      setQueryEnabled(false);
    }
  }, [data]);

  console.log('Data:', data);



  // main

  // const { data} = useQuery(
  //   {
  //     queryKey: ["airports"],
  //     queryFn: async () => {
  //       try {
  //           const response = await axiosInstance.get('/tools/airport-autosuggetion-data');
  //       return response.data; 
  //       } catch (error) {
  //           console.log("catch error", error)
  //       }
  //     }
  //   },
  // );

  
  console.log(data, 'Manik Data');




  return (
    <div className="w-[1200px] bg-white absolute bottom-0 left-0 right-0 mx-auto shadow-[0_4px_40px_0_rgba(0,0,0,0.20)] rounded-b-lg">

      {/* top tab bar */}

      <div className="relative">
        <div className="w-[455px] absolute -top-[38px] left-0">
          <ul className="text-base font-medium  items-center">
            <li
              onClick={() => handleTravelsTab("flights")}
              className={`list-none inline py-4 px-3.5 cursor-pointer ${
                travelsTab === "flights"
                  ? "bg-white text-akij-red"
                  : "bg-[#7a7a7a8a] text-white"
              }`}
            >
              <span>
                <SlPlane className="inline mr-2" />
              </span>
              Flights
            </li>
            <li
              onClick={() => handleTravelsTab("hotels")}
              className={`list-none inline py-4 px-3.5 cursor-pointer ${
                travelsTab === "hotels"
                  ? "bg-white text-akij-red"
                  : "bg-[#7a7a7a8a] text-white"
              }`}
            >
              <span>
                <RiHotelFill className="inline mr-2" />
              </span>
              Hotels
            </li>
            <li
              onClick={() => handleTravelsTab("tour")}
              className={`list-none inline py-4 px-3.5 cursor-pointer ${
                travelsTab === "tour"
                  ? "bg-white text-akij-red"
                  : "bg-[#7a7a7a8a] text-white"
              }`}
            >
              <span>
                <MdTravelExplore className="inline mr-2" />
              </span>
              Tour
            </li>
            <li
              onClick={() => handleTravelsTab("car")}
              className={`list-none inline py-4 px-3.5 cursor-pointer ${
                travelsTab === "car"
                  ? "bg-white text-akij-red"
                  : "bg-[#7a7a7a8a] text-white"
              }`}
            >
              <span>
                <BsFillCarFrontFill className="inline mr-2" />
              </span>
              Car
            </li>
            <li
              onClick={() => handleTravelsTab("bus")}
              className={`list-none inline py-4 px-3.5 cursor-pointer ${
                travelsTab === "bus"
                  ? "bg-white text-akij-red"
                  : "bg-[#7a7a7a8a] text-white"
              }`}
            >
              <span>
                <BsFillBusFrontFill className="inline mr-2" />
              </span>
              Bus
            </li>
          </ul>
        </div>
      </div>

      {/* one way tab */}

      <div className="px-5 py-3">
        {travelsTab === "flights" && (
          <div className="flex justify-between">
            <div className="flex items-center gap-7 text-[#4A4A4A] text-sm font-normal">
              <div
                onClick={() => handleFlightsTab("one-way")}
                className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1 ${
                  flightsTab === "one-way" &&
                  "bg-[#EAF5FF] rounded-2xl font-extrabold"
                }`}
              >
                {flightsTab === "one-way" ? (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checked}
                    alt=""
                  />
                ) : (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checkList}
                    alt=""
                  />
                )}
                <p>One Way</p>
              </div>

              <div
                onClick={() => handleFlightsTab("round-trip")}
                className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1 ${
                  flightsTab === "round-trip" &&
                  "bg-[#EAF5FF] rounded-2xl font-extrabold"
                }`}
              >
                {flightsTab === "round-trip" ? (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checked}
                    alt=""
                  />
                ) : (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checkList}
                    alt=""
                  />
                )}
                <p>Round Trip</p>
              </div>

              <div
                onClick={() => handleFlightsTab("multi-city")}
                className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1  ${
                  flightsTab === "multi-city" &&
                  "bg-[#EAF5FF] rounded-2xl font-extrabold"
                }`}
              >
                {flightsTab === "multi-city" ? (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checked}
                    alt=""
                  />
                ) : (
                  <img
                    className="inline-flex text-xs items-center h-3"
                    src={checkList}
                    alt=""
                  />
                )}
                <p>Multi City</p>
              </div>
            </div>

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
          </div>
        )}

        {travelsTab === "hotels" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Hotels</h2>
          </div>
        )}

        {travelsTab === "tour" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Tour</h2>
          </div>
        )}

        {travelsTab === "car" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Car</h2>
          </div>
        )}

        {travelsTab === "bus" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Bus</h2>
          </div>
        )}
      </div>

      {/* One way details */}

      <div className="px-5 pt-2 pb-10">
        {travelsTab === "flights" && flightsTab === "one-way" && (
          <div className="bg-[#ffffff1a] border rounded-lg flex justify-between">

            
            <div className="w-[50%] grid grid-cols-12 relative">
            <SearchInput 
              dropdownRef={searchFromDropdownRef}
              toggleDropdown={toggleFromDropdown}
              searchValue={searchFrom}
              isDropdownOpen={isFromDropdownOpen}
              handleSearchInput={handleFromSearchInput}
              searchInputRef={searchInputFromRef}
              handleSearchInputChange={handleFromSearchInputChange}
              handleSelectedAirport={handleSelectedFromAirport}
              path="From"
              cityName={cityFrom ? cityFrom : "Dhaka"}
              placeholder="DAC, Hazrat Shahjalal International Air..."
              data={data}
            />
            
            <SearchInput 
              dropdownRef={searchToDropdownRef}
              toggleDropdown={toggleToDropdown}
              searchValue={searchTo}
              isDropdownOpen={isToDropdownOpen}
              handleSearchInput={handleToSearchInput}
              searchInputRef={searchInputToRef}
              handleSearchInputChange={handleToSearchInputChange}
              handleSelectedAirport={handleSelectedToAirport}
              path="To"
              cityName={cityTo ? cityTo : "Dubai"}
              placeholder="DXB, Dubai International Airport"
              data={data}
            />


            {/* toggle button */}

              <div className="absolute bottom-[36%] left-[47%] bg-white py-1 px-2 rounded-full shadow-[0_1px_30px_0_rgba(0,0,0,0.10)]">
                <button>
                  <img className="h-3" src={toggler} alt="" />
                </button>
              </div>

            </div>


            <div className="w-[50%] grid grid-cols-3">

              {/* Date Picker */}
              <div className="text-sm font-normal text-[#4A4A4A] border-r px-3 py-2">
                <p>
                  Departure
                  <span>
                    <IoIosArrowDown className="inline ml-1 text-akij-red" />
                  </span>
                </p>
                {/* <p className="text-3xl font-extrabold">
                  25 <span className="text-xl font-normal">Jan'24</span>
                </p> */}

                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={date}
                  onChange={handleDateChange}
                  displayFormat={"DD MMM YY, dddd"}
                />
                {/* <p>Thursday</p> */}
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

              {/* Travellers */}
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
        )}

        {flightsTab === "round-trip" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Round Trip</h2>
          </div>
        )}

        {flightsTab === "multi-city" && (
          <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold">Multi City</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
