import React, { useState } from 'react';
import logo from '../../assets/logo/Qatar-Airways.png';
import Plane from '../../assets/icons/airplanemode_active.svg';
import Plane2 from '../../assets/icons/airplanemode_active2.svg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FlightLists = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("region");

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className={`bg-white p-5 rounded-md w-full lg:h-[130px] mb-0 shadow-[0_2px_3px_0_rgba(0,0,0,0.05)] ${isDropdownOpen ? 'mb-0 rounded-b-none' : 'mb-4'} `}>
                <div className='lg:flex justify-between gap-x-7'>

                    <div className='mb-4 lg:mb-0'>
                        <img className='w-[32px] mx-auto lg:mx-0' src={logo} alt="" />
                        <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>Qatar Airways</p>
                        <p className='text-xs font-medium text-[#161616] text-center lg:text-left'>52h, 55m | <span className='text-xs font-normal text-[#6F6F6F]'>Bag 30kg</span></p>
                        <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Non-Refundable</p>
                    </div>

                    <div className='md:flex justify-between gap-x-7 mb-4 lg:mb-0'>

                        <div className='flex flex-col justify-center items-center md:items-start mb-4 lg:mb-0'>
                            <p className='text-base font-semibold text-[#262626]'>1:00 AM</p>
                            <p className='text-xs font-normal text-[#525252]'>20 Jan, Saturday</p>
                            <p className='text-xs font-normal text-[#6F6F6F]'>Non-Refundable</p>
                            <p className='text-xs font-normal text-[#262626] text-ellipsis'>DAC, Hazrat Shahjalal...</p>
                        </div>

                        <div className='flex flex-col justify-center items-center mb-2 lg:mb-0'>
                            <p className='flex justify-center text-sm font-semibold text-[#262626]'>2 Stops<span className='pl-2 text-sm font-normal text-[#000]'>31h, 20m</span></p>
                            <div class="relative items-center md:w-full">
                                <hr class="w-48 h-px my-5 bg-[#6F6F6F] border-0" />
                                <span class="absolute font-normal text-[#009D9A] -translate-x-1/2 bg-white left-1/4 top-2">o</span>
                                <span class="absolute font-normal text-[#009D9A] -translate-x-1/2 bg-white left-3/4 top-2">o</span>
                            </div>
                            <div className='flex justify-center gap-16'>
                                <p className='text-xs font-normal text-[#6F6F6F]'>DXB</p>
                                <p className='text-xs font-normal text-[#6F6F6F]'>MXP</p>
                            </div>
                        </div>


                        <div className='flex flex-col justify-center items-baseline mb-4 lg:mb-0'>
                            <img className='mx-auto md:mx-0' src={Plane} alt='' />
                        </div>

                        <div className='flex flex-col justify-center items-center md:items-start mb-4 lg:mb-0'>
                            <p className='text-base font-semibold text-[#262626]'>6:55 PM</p>
                            <p className='text-xs font-normal text-[#525252]'>21 Jan, Sunday</p>
                            <p className='text-xs font-normal text-[#6F6F6F]'>Non-Refundable</p>
                            <p className='text-xs font-normal text-[#262626] text-ellipsis overflow-hidden'>JFK, John F Kennedy...</p>
                            <button onClick={toggleDropdown} className='mt-3 mb-2 text-xs font-semibold text-[#009D9A]'>Show Details <span>{isDropdownOpen ? <FaAngleUp className='inline' /> : <FaAngleDown className='inline' />}</span></button>
                        </div>

                    </div>


                    <div>
                        <div className='flex flex-col justify-center bg-[#FFF2F4] rounded w-full lg:w-[150px] '>
                            <div className='text-center lg:text-right mb-3 px-4 '>
                                <p className='text-lg font-bold text-[#262626]'>৳ 4,98,400</p>
                                <p className='text-sm font-normal text-[#6F6F6F] line-through'>৳ 5,98,400 </p>
                            </div>

                            <button type="submit" className="bg-[#8E011A] outline-none border-none rounded-b hover:bg-[#700014] normal-case font-normal text-white h-[36px] w-full">Book Now</button>
                        </div>

                    </div>

                </div>
            </div>

            {
                isDropdownOpen && (
                    <div className='px-4 bg-white mb-4'>
                        <div className='text-[#393939] text-base lg:text-sm border border-t-[#E0E0E0] border-x-0 border-b-0 lg:flex'>


                            <div className='lg:w-[65%] border border-t-0 border-l-0 border-b-0 py-4 pl-3 pr-6'>

                                <div>
                                    <h3 className='uppercase'>Departure from Dhaka</h3>
                                    <div className='flex justify-between gap-2 items-center border border-t-0 border-x-0 border-b-[#E0E0E0] pb-4 pt-3'>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>Emirates</p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Boing 777-330er</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-base font-semibold text-[#262626]'>DAC-DXB</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Flight no : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>EK585</span></p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Class : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>ECONOMY-Y (Q)</span></p>
                                        </div>
                                    </div>



                                    <div className='flex justify-between gap-2 items-center pb-4 pt-3'>

                                        <div className='border border-t-0 border-l-0 border-b-0 pr-12'>
                                            <div className='flex justify-between gap-9 items-center mb-4'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>1:00 am</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>20 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>(DAC) Dhaka, Hazrat Shahjalal Internatio...</p>
                                                </div>
                                            </div>

                                            <div className='flex justify-between gap-0 items-center'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>12:30 pm</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>10 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>(DXB)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-4 lg:mb-0 pr-5'>
                                            <img className='w-[32px] mx-auto' src={Plane2} alt="" />
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>5 hrs
                                                25 min</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex justify-between bg-[#F4F4F4] rounded-md px-4 py-3 normal-case text-sm font-medium w-full'>
                                    <p className="">Layover at Dubai: 11hrs, 30min</p>
                                    <p className="">(DXB) Dubai, Dubai International...</p>
                                </div>

                                <div>
                                    <div className='flex justify-between gap-2 items-center border border-t-0 border-x-0 border-b-[#E0E0E0] pb-4 pt-3'>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>Emirates</p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Boing 777-330er</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-base font-semibold text-[#262626]'>DAC-DXB</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Flight no : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>EK585</span></p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Class : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>ECONOMY-Y (Q)</span></p>
                                        </div>
                                    </div>



                                    <div className='flex justify-between gap-2 items-center pb-4 pt-3'>

                                        <div className='border border-t-0 border-l-0 border-b-0 pr-12'>
                                            <div className='flex justify-between gap-9 items-center mb-4'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>1:00 am</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>20 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>(DAC) Dhaka, Hazrat Shahjalal Internatio...</p>
                                                </div>
                                            </div>

                                            <div className='flex justify-between gap-0 items-center'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>12:30 pm</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>10 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>(DXB)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-4 lg:mb-0 pr-5'>
                                            <img className='w-[32px] mx-auto' src={Plane2} alt="" />
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>5 hrs
                                                25 min</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex justify-between bg-[#F4F4F4] rounded-md px-4 py-3 normal-case text-sm font-medium w-full'>
                                    <p className="">Layover at Dubai: 19 hrs, 50min</p>
                                    <p className="">(MXP) Malpensa International...</p>
                                </div>

                                <div>
                                    <div className='flex justify-between gap-2 items-center border border-t-0 border-x-0 border-b-[#E0E0E0] pb-4 pt-3'>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>Emirates</p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Boing 777-330er</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-base font-semibold text-[#262626]'>DAC-DXB</p>
                                        </div>
                                        <div className='mb-4 lg:mb-0'>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Flight no : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>EK585</span></p>
                                            <p className='text-xs font-normal text-[#6F6F6F] text-center lg:text-left'>Class : <span className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>ECONOMY-Y (Q)</span></p>
                                        </div>
                                    </div>



                                    <div className='flex justify-between gap-2 items-center pb-4 pt-3'>

                                        <div className='border border-t-0 border-l-0 border-b-0 pr-12'>
                                            <div className='flex justify-between gap-9 items-center mb-4'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>1:00 am</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>20 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-center lg:text-left mt-2'>(DAC) Dhaka, Hazrat Shahjalal Internatio...</p>
                                                </div>
                                            </div>

                                            <div className='flex justify-between gap-0 items-center'>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-base font-semibold text-[#262626]'>12:30 pm</p>
                                                    <p className='text-sm font-normal text-[#6F6F6F] text-center lg:text-left'>10 Jan, Saturday</p>
                                                </div>
                                                <div className='mb-4 lg:mb-0'>
                                                    <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>(DXB)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-4 lg:mb-0 pr-5'>
                                            <img className='w-[32px] mx-auto' src={Plane2} alt="" />
                                            <p className='text-sm lg:text-xs font-medium text-[#262626] text-left mt-2'>5 hrs
                                                25 min</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex justify-between bg-[#EBFDFF] rounded-md px-4 py-3 normal-case text-sm font-medium w-full'>
                                    <p className="">Destination at New York</p>
                                    <p className="">(JFK) John F Kennedy International...</p>
                                </div>

                            </div>



                            <div className='lg:w-[35%] mt-4 lg:mt-0 flex flex-col justify-between'>

                                <div>
                                    <div className='flex border border-t-0 border-x-0 border-b-[#E0E0E0] font-medium text-xs text-[#393939] lg:px-4'>
                                        <div
                                            className={`cursor-pointer py-2 px-4 text-center ${activeTab === "region" && "text-[#8E011A] border border-t-0 border-x-0 border-b-[#8E011A]"
                                                }`}
                                            onClick={() => handleTabClick("region")}
                                        >
                                            Baggage
                                        </div>

                                        <div
                                            className={`cursor-pointer py-2 px-4 text-center ${activeTab === "cities" && "text-[#8E011A] border border-t-0 border-x-0 border-b-[#8E011A]"
                                                }`}
                                            onClick={() => handleTabClick("cities")}
                                        >
                                            Fare
                                        </div>
                                        <div
                                            className={`cursor-pointer py-2 px-4 text-center  ${activeTab === "place" && "text-[#8E011A] border border-t-0 border-x-0 border-b-[#8E011A]"
                                                }`}
                                            onClick={() => handleTabClick("place")}
                                        >
                                            Policy
                                        </div>
                                    </div>


                                    <div className="mt-5 lg:px-4">
                                        {activeTab === "region" && (
                                            <div className="w-full max-w-screen-md mx-auto">
                                                <table className="w-full table-auto text-xs">
                                                    <thead className='text-left text-[#6F6F6F] font-medium'>
                                                        <th className='py-2'>Flight</th>
                                                        <th>Cabin</th>
                                                        <th>Check-In</th>
                                                    </thead>
                                                    <tbody className='text-left pt-5'>
                                                        <tr>
                                                            <td className='py-2'>DAC - DOH</td>
                                                            <td >7 Kg</td>
                                                            <td >2 pieces</td>
                                                        </tr>
                                                        <tr>
                                                            <td >DOH - MIA</td>
                                                            <td >7 Kg</td>
                                                            <td >2 pieces</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='py-2'>MIA - MSY</td>
                                                            <td >7 Kg</td>
                                                            <td >2 pieces</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {activeTab === "cities" && (
                                            <div className="bg-gray-200 p-4">
                                                <h2 className="text-2xl font-bold">Fare</h2>
                                            </div>
                                        )}

                                        {activeTab === "place" && (
                                            <div className="bg-gray-200 p-4">
                                                <h2 className="text-2xl font-bold">Policy</h2>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <div className='flex justify-between bg-[#8E011A] rounded-md px-4 py-3 normal-case text-sm font-medium w-full text-white'>
                                        <div>
                                            <p className="">Total (include VAT)</p>
                                            <p className="text-lg">BDT 73,460</p>
                                        </div>
                                        <button type="submit" className="bg-[#700014] outline-2 border rounded-full hover:bg-[#700014] normal-case font-normal text-white py-[2px] px-3">Book Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                )
            }

        </div>
    )
}

export default FlightLists;