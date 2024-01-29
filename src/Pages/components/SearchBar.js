import { AiFillPlusCircle } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
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
import downArrow from "../../assets/icons/caret-down.svg";
import plusIcon from "../../assets/icons/plus-square.svg";
import minusIcon from "../../assets/icons/minus-square.svg";
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

  // Search Input States

  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const searchFromDropdownRef = useOutsideClick(() =>
    setIsFromDropdownOpen(false)
  );
  const searchInputFromRef = useRef(null);
  const [searchFrom, setSearchFrom] = useState("");
  const [cityFrom, setCityFrom] = useState("");

  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const searchToDropdownRef = useOutsideClick(() => setIsToDropdownOpen(false));
  const searchInputToRef = useRef(null);
  const [searchTo, setSearchTo] = useState("");
  const [cityTo, setCityTo] = useState("");

  const [isQueryEnabled, setQueryEnabled] = useState(true);

  // travellers states

  const [totalTravellers, setTotalTravellers] = useState(1);
  const [isTravellersDropdownOpen, setIsTravellersDropdownOpen] =
    useState(false);
  const travellersDropdownRef = useOutsideClick(() =>
    setIsTravellersDropdownOpen(false)
  );
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [infantsAges, setInfantsAges] = useState([]);

  console.log(childrenCount, "child");
  console.log(childAges, "childAges");
  console.log(infantsCount, "infants");
  console.log(infantsAges, "infantsAges");

  const [selectedClass, setSelectedClass] = useState(null);

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
    // console.log("newValue:", newDate);
    setDate(newDate);
  };

  // ======================================
  //      Search Input Functionalities
  // ======================================

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
    console.log(searchValue, "from");
  };

  // handle to search Input
  const handleToSearchInput = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue, "to");
  };

  // handle From Input Change
  const handleFromSearchInputChange = (e) => {
    const searchText = e.target.value;
    console.log(searchText, "from");
  };

  // handle To Input Change
  const handleToSearchInputChange = (e) => {
    const searchText = e.target.value;
    console.log(searchText, "to");
  };

  // handle selected from airport value
  const handleSelectedFromAirport = (airportName, airportCityName) => {
    setSearchFrom(airportName);
    setCityFrom(airportCityName);
    setIsFromDropdownOpen(false);
  };

  // handle selected to airport value
  const handleSelectedToAirport = (airportName, airportCityName) => {
    setSearchTo(airportName);
    setCityTo(airportCityName);
    setIsToDropdownOpen(false);
  };

  // =======================================
  //       Travellers Functionalities
  // =======================================

  // count total travellers

  useEffect(() => {
    const totalPeople = adultCount + childrenCount + infantsCount;

    setTotalTravellers(totalPeople);
  }, [adultCount, childrenCount, infantsCount]);

  // travellers dropdown toggle

  const toggleTravellersDropdown = () => {
    setIsTravellersDropdownOpen(true);
  };

  // Adult Count

  const handleAdultIncrement = (e) => {
    e.preventDefault();
    setAdultCount(adultCount + 1);
  };

  const handleAdultDecrement = (e) => {
    e.preventDefault();
    if (adultCount === 1) {
      return;
    } else {
      setAdultCount(adultCount - 1);
    }
  };

  // Children Count

  const handleChildrenIncrement = (e) => {
    e.preventDefault();
    setChildrenCount(childrenCount + 1);
    setChildAges([...childAges, 0]);
  };

  const handleChildrenDecrement = (e) => {
    e.preventDefault();
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
      setChildAges(childAges.slice(0, childAges.length - 1));
    }
  };

  // set child ages

  const handleSetChildAge = (index, age) => {
    const updatedChildAges = [...childAges];
    updatedChildAges[index] = age;
    setChildAges(updatedChildAges);
  };

  // Infants Count

  const handleInfantsIncrement = (e) => {
    e.preventDefault();
    setInfantsCount(infantsCount + 1);
    setInfantsAges([...infantsAges, 0]);
  };

  const handleInfantsDecrement = (e) => {
    e.preventDefault();
    if (infantsCount > 0) {
      setInfantsCount(infantsCount - 1);
      setInfantsAges(infantsAges.slice(0, infantsAges.length - 1));
    }
  };

  // set infants ages

  const handleSetInfantsAge = (index, age) => {
    const updatedInfantsAges = [...infantsAges];
    updatedInfantsAges[index] = age;
    setInfantsAges(updatedInfantsAges);
  };

  // set traveller's class

  const handleClassChange = (option) => {
    setSelectedClass(option);
  };

  // Travellers dropdown apply button

  const applyBtnClick = () => {
    setIsTravellersDropdownOpen(false);
  };

  // ======================================
  //            Data Fetch
  // ======================================

  // Airport Auto Suggestion Data fetch

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/tools/airport-autosuggetion-data"
      );
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
    enabled: isQueryEnabled,
  });

  useEffect(() => {
    if (data) {
      setQueryEnabled(false);
    }
  }, [data]);

  console.log(data, "Manik Data");

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
                className="left-0 -top-3"
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
                className="left-[308px] -top-3"
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
              <div className="relative" ref={travellersDropdownRef}>
                <button
                  onClick={toggleTravellersDropdown}
                  className="text-sm font-normal text-[#4A4A4A] px-3 py-2 text-left"
                >
                  <p>
                    Travellers & Class
                    <span>
                      <IoIosArrowDown className="inline ml-1 text-akij-red" />
                    </span>
                  </p>
                  <p className="text-3xl font-extrabold">
                    {totalTravellers}{" "}
                    <span className="text-xl font-normal">
                      {totalTravellers > 1 ? "Travellers" : "Traveller"}
                    </span>
                  </p>
                  <p className="text-sm">{selectedClass}</p>
                </button>

                {isTravellersDropdownOpen && (
                  <div className="absolute left-0 -top-3 w-full z-[1500] mt-2 origin-top-right bg-white shadow-[0px_0.5rem_1rem_0px_rgba(011,38,0,0.24)] rounded-lg">
                    <h1 className="pt-2 px-3 text-lg text-black font-bold">
                      Travellers
                    </h1>
                    <ul className="m-4">
                      {/*adults  */}
                      <li className="flex justify-between items-center my-4">
                        <label
                          htmlFor="adultsCount"
                          className="text-sm font-medium text-black leading-4"
                        >
                          Adults
                          <br />
                          <small className="text-gray-900 font-light">
                            18+ years
                          </small>
                        </label>
                        <div className="flex justify-between items-center gap-5">
                          <button onClick={handleAdultDecrement}>
                            <img
                              className="w-[16.5px]"
                              src={minusIcon}
                              alt=""
                            />
                          </button>
                          <span>{adultCount}</span>
                          <button onClick={handleAdultIncrement}>
                            <img
                              className="w-[17.5px] h-[17.5px]"
                              src={plusIcon}
                              alt=""
                            />
                          </button>
                        </div>
                      </li>
                      {/* children */}
                      <li className="flex justify-between items-center my-4">
                        <label
                          htmlFor="childrenCount"
                          className="text-sm font-medium text-black leading-4"
                        >
                          Children
                          <br />
                          <small className="text-gray-900 font-light">
                            2 - 12 years
                          </small>
                        </label>
                        <div className="flex justify-between items-center gap-5">
                          <button onClick={handleChildrenDecrement}>
                            <img
                              className="w-[16.5px]"
                              src={minusIcon}
                              alt=""
                            />
                          </button>
                          <span>{childrenCount}</span>
                          <button onClick={handleChildrenIncrement}>
                            <img
                              className="w-[17.5px] h-[17.5px]"
                              src={plusIcon}
                              alt=""
                            />
                          </button>
                        </div>
                      </li>
                      <li className="flex flex-col justify-between items-start">
                        <div className="grid grid-cols-2 md:gap-x-2 w-full">
                          {childAges.map((age, index) => (
                            <div
                              key={`childAgeDiv${index + 1}`}
                              className="w-full mb-4"
                            >
                              <select
                                style={{
                                  backgroundImage: `url(${downArrow})`,
                                  backgroundPosition: "right 12px center",
                                }}
                                onChange={(e) =>
                                  handleSetChildAge(index, e.target.value)
                                }
                                value={age}
                                className="bg-no-repeat bg-center text-sm font-normal border-solid border-[1px] border-akij-red bg-[#fafffc] rounded-md block w-full py-1 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out appearance-none"
                              >
                                {[...Array(11)].map((_, i) => (
                                  <option key={`result${i}`} value={i}>
                                    {i + 2}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      </li>
                      {/* Infant */}
                      <li className="flex justify-between items-center mb-4">
                        <label
                          htmlFor="infantsCount"
                          className="text-sm font-medium text-black leading-4"
                        >
                          Infants
                          <br />
                          <small className="text-gray-900 font-light">
                            0 - 1 year
                          </small>
                        </label>
                        <div className="flex justify-between items-center gap-5">
                          <button onClick={handleInfantsDecrement}>
                            <img
                              className="w-[16.5px]"
                              src={minusIcon}
                              alt=""
                            />
                          </button>
                          <span>{infantsCount}</span>
                          <button onClick={handleInfantsIncrement}>
                            <img
                              className="w-[17.5px] h-[17.5px]"
                              src={plusIcon}
                              alt=""
                            />
                          </button>
                        </div>
                      </li>
                      <li className="flex flex-col justify-between items-start my-4">
                        <div className="grid grid-cols-2 md:gap-x-2 w-full">
                          {infantsAges.map((age, index) => (
                            <div
                              key={`infantsAgesDiv${index + 1}`}
                              className="w-full mb-4"
                            >
                              <select
                                style={{
                                  backgroundImage: `url(${downArrow})`,
                                  backgroundPosition: "right 12px center",
                                }}
                                onChange={(e) =>
                                  handleSetInfantsAge(index, e.target.value)
                                }
                                value={age}
                                className="bg-no-repeat bg-center text-sm font-normal border-solid border-[1px] border-akij-red bg-[#fafffc] rounded-md block w-full py-1 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out appearance-none"
                              >
                                {[...Array(2)].map((_, i) => (
                                  <option key={`result${i}`} value={i}>
                                    {i}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      </li>
                    </ul>
                    <div>
                      <h1 className="px-3 text-lg text-black font-bold">
                        Classes
                      </h1>
                      <div className="px-4 pt-2 pb-3">
                        <ul className="text-sm">
                          <li className="py-1">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value={selectedClass}
                                checked={selectedClass === "Economy"}
                                onChange={() => handleClassChange("Economy")}
                                className="mr-2"
                              />
                              Economy
                            </label>
                          </li>
                          <li className="py-1">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value={selectedClass}
                                checked={selectedClass === "Premium Economy"}
                                onChange={() =>
                                  handleClassChange("Premium Economy")
                                }
                                className="mr-2"
                              />
                              Premium Economy
                            </label>
                          </li>
                          <li className="py-1">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value={selectedClass}
                                checked={selectedClass === "Business Class"}
                                onChange={() =>
                                  handleClassChange("Business Class")
                                }
                                className="mr-2"
                              />
                              Business Class
                            </label>
                          </li>
                          <li className="py-1">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value={selectedClass}
                                checked={selectedClass === "First Class"}
                                onChange={() =>
                                  handleClassChange("First Class")
                                }
                                className="mr-2"
                              />
                              First Class
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={applyBtnClick}
                        className="w-full bg-akij-red text-white text-base rounded-xl py-2.5"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
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
