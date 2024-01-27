import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillBusFrontFill } from "react-icons/bs";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { SlPlane } from "react-icons/sl";
import React, { useState } from 'react'
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import underline from '../../assets/banner/underline.svg';
import checkList from '../../assets/icons/list-item.svg';
import checked from '../../assets/icons/checked.svg';
import toggler from '../../assets/icons/toggle-btn.png';


const Banner = () => {

    const [travelsTab, setTravelsTab] = useState("flights");
    const [flightsTab, setFlightsTab] = useState("one-way");

    const handleTravelsTab = (tab) => {
        setTravelsTab(tab);
    };

    const handleFlightsTab = (tab) => {
        setFlightsTab(tab);
    };

    return (
        <div className='mb-96'>


            <div
                style={{ background: `linear-gradient(180deg, #EEF0FB 0%, #FFF 100%)` }}
            >

                <div className='pt-20 flex justify-between max-w-screen-md lg:max-w-7xl mx-auto relative'>

                    <div className='relative w-[52%] px-6 ml-4 mt-10'>
                        <h1 className='text-[51px] font-normal'>Best Travel <span className='text-[#8E011A]'>Experience
                        </span><img className='absolute top-[4.25rem] right-[140px] w-[240px]' src={underline} alt="" /></h1>
                        <p className='text-base font-normal mt-8'>Experience the various exciting tour and travel packages and Make hotel reservations, findvacation packages, search cheap hotels and events</p>
                    </div>

                    <div className='flex gap-4 w-[48%]'>
                        <div>
                            <img className="rounded-2xl w-[470px] h-[520px]" src={banner1} alt="" />
                        </div>
                        <div>
                            <img className="rounded-2xl w-[250px] h-[520px]" src={banner2} alt="" />
                        </div>
                    </div>







                    <div className='w-[1200px] bg-white absolute bottom-0 left-0 right-0 mx-auto shadow-[0_4px_40px_0_rgba(0,0,0,0.20)] rounded-b-lg'>


                        {/* top tab bar */}


                        <div className='relative'>
                            <div className='w-[455px] absolute -top-[38px] left-0'>
                                <ul className='text-base font-medium  items-center'>
                                    <li
                                        onClick={() => handleTravelsTab("flights")}
                                        className={`list-none inline py-4 px-3.5 cursor-pointer ${travelsTab === "flights" ? "bg-white text-akij-red" : "bg-[#7a7a7a8a] text-white"}`}
                                    ><span><SlPlane className='inline mr-2' /></span>Flights
                                    </li>
                                    <li
                                        onClick={() => handleTravelsTab("hotels")}
                                        className={`list-none inline py-4 px-3.5 cursor-pointer ${travelsTab === "hotels" ? "bg-white text-akij-red" : "bg-[#7a7a7a8a] text-white"}`}
                                    ><span><RiHotelFill className='inline mr-2' /></span>Hotels</li>
                                    <li
                                        onClick={() => handleTravelsTab("tour")}
                                        className={`list-none inline py-4 px-3.5 cursor-pointer ${travelsTab === "tour" ? "bg-white text-akij-red" : "bg-[#7a7a7a8a] text-white"}`}>
                                        <span><MdTravelExplore className='inline mr-2' /></span>Tour</li>
                                    <li
                                        onClick={() => handleTravelsTab("car")}
                                        className={`list-none inline py-4 px-3.5 cursor-pointer ${travelsTab === "car" ? "bg-white text-akij-red" : "bg-[#7a7a7a8a] text-white"}`}
                                    >
                                        <span><BsFillCarFrontFill className='inline mr-2' /></span>Car</li>
                                    <li
                                        onClick={() => handleTravelsTab("bus")}
                                        className={`list-none inline py-4 px-3.5 cursor-pointer ${travelsTab === "bus" ? "bg-white text-akij-red" : "bg-[#7a7a7a8a] text-white"}`}
                                    ><span><BsFillBusFrontFill className='inline mr-2' /></span>Bus</li>
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
                                            className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1 ${flightsTab === "one-way" && "bg-[#EAF5FF] rounded-2xl font-extrabold"
                                                }`}
                                        >
                                            {flightsTab === "one-way" ? <img className="inline-flex text-xs items-center h-3" src={checked} alt="" /> : <img className="inline-flex text-xs items-center h-3" src={checkList} alt="" />
                                            }
                                            <p>One Way</p>
                                        </div>


                                        <div
                                            onClick={() => handleFlightsTab("round-trip")}
                                            className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1 ${flightsTab === "round-trip" && "bg-[#EAF5FF] rounded-2xl font-extrabold"
                                                }`}
                                        >
                                            {flightsTab === "round-trip" ? <img className="inline-flex text-xs items-center h-3" src={checked} alt="" /> : <img className="inline-flex text-xs items-center h-3" src={checkList} alt="" />
                                            }
                                            <p>Round Trip</p>
                                        </div>


                                        <div
                                            onClick={() => handleFlightsTab("multi-city")}
                                            className={`flex items-center gap-1 cursor-pointer text-center px-3 py-1  ${flightsTab === "multi-city" && "bg-[#EAF5FF] rounded-2xl font-extrabold"
                                                }`}
                                        >
                                            {flightsTab === "multi-city" ? <img className="inline-flex text-xs items-center h-3" src={checked} alt="" /> : <img className="inline-flex text-xs items-center h-3" src={checkList} alt="" />
                                            }
                                            <p>Multi City</p>
                                        </div>

                                    </div>


                                    <div>
                                        <ul className='text-sm font-normal text-[#303030] items-center'>
                                            <li className=' list-none inline mr-3 p-2'>Non-stop Flight <span><IoMdArrowDropdown className='inline ml-1' /></span></li>
                                            <li className=' list-none inline mr-3 p-2'>Any Baggage<span><IoMdArrowDropdown className='inline ml-1' /></span></li>
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
                                            <p>Departure<span><IoIosArrowDown className='inline ml-1 text-akij-red' /></span></p>
                                            <p className="text-3xl font-extrabold">25 <span className="text-xl font-normal">Jan'24</span></p>
                                            <p>Thursday</p>
                                        </div>

                                        <div className="text-sm font-normal text-[#4A4A4A] border-r px-3 py-2">
                                            <p>Return<span><IoIosArrowDown className='inline ml-1 text-akij-red' /></span></p>
                                            <p className="text-xs font-extrabold text-[#9B9B9B] mt-2">Tap to add a return
                                                date for bigger
                                                discounts</p>
                                        </div>

                                        <div className="text-sm font-normal text-[#4A4A4A] px-3 py-2">
                                            <p>Travellers & Class<span><IoIosArrowDown className='inline ml-1 text-akij-red' /></span></p>
                                            <p className="text-3xl font-extrabold">1 <span className="text-xl font-normal">Traveller</span></p>
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

                    <button className="w-[135px] absolute -bottom-[23px] left-0 right-0 mx-auto bg-akij-red text-white text-base rounded-xl py-3.5 px-10">Search</button>

                </div>

            </div>

        </div>
    )
}

export default Banner