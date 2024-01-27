import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdSunnySnowing } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { TbSunset2 } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SearchFilters = ({ title, des }) => {


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const [minValue, setMinValue] = useState(5322);
    const [maxValue, setMaxValue] = useState(6346);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };


    const handleChange = (value) => {
        setMinValue(value[0]);
        setMaxValue(value[1]);
    };

    return (
        <div className={`bg-white rounded-md mb-5 shadow-[0_2px_3px_0_rgba(0,0,0,0.05)]`}>

            <div className={`py-3 px-4 ${isDropdownOpen ? 'border border-b-[#E0E0E0]' : ''} `}>

                <div className='flex justify-between relative'>


                    <button
                        onClick={toggleDropdown}
                        type="button"
                        className='text-[#393939] flex items-center justify-between w-full'
                    >

                        <p className='text-base font-medium text-[#161616]'>{title}</p>
                        {
                            title === 'Price Range' ? <button type="submit" className="bg-[#8E011A] outline-none border-none rounded-full hover:bg-[#700014] normal-case font-normal text-white py-1 px-3">Reset</button> : ''
                        }
                        {
                            des === 'EK, AI, KU, 6E, TK' ? <button type="submit" className="bg-[#8E011A] outline-none border-none rounded-full hover:bg-[#700014] normal-case font-normal text-white py-1 px-3">Reset</button> : ''
                        }

                        {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}

                    </button>

                </div>

            </div>



            {
                isDropdownOpen && title === 'Quick Trip' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Earliest</p>
                                        <p>08:00 AM</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Cheapest</p>
                                        <p>BDT 4,558</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option3"
                                        checked={selectedOption === 'option3'}
                                        onChange={() => handleOptionChange('option3')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Fastest</p>
                                        <p>1 hrs, 5 min</p>
                                    </div>
                                </label>
                            </li>
                        </ul>


                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Price Range' && (
                    <div className='px-4 py-3'>

                        <p className='text-xs font-normal text-[#6F6F6F]'>Starts from <strong className='text-[#161616]'>৳ 5,322 BDT - ৳ 6,346 BDT</strong> against your search. Price is a subject to change.</p>


                        <div
                            style={{
                                width: "280px",
                                backgroundColor: "white",
                                height: "40px",
                                margin: "20px 0"
                            }}
                        >
                            <RangeSlider
                                // className='bg-[#8E011A]'
                                onInput={handleChange}
                                min={5000}
                                max={7000}
                                defaultValue={[5322, 6346]}
                                rangeSlideDisabled={true}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "10px",
                                    padding: "6px",
                                }}
                            >
                                <span style={{ color: "black" }}>৳ {minValue} BDT</span>
                                <span style={{ color: "black" }}>৳ {maxValue} BDT</span>
                            </div>
                        </div>

                    </div>
                )
            }

            {
                isDropdownOpen && title === 'Flight Schedules' && (
                    <div className='px-4 py-3'>

                        <div className='inline-flex w-full bg-[#F4F4F4] rounded-lg p-[2px]'>
                            <button type="submit" className="bg-white outline-none border-none rounded-lg normal-case font-medium text-sm h-[36px] w-full">Departure</button>
                            <button type="submit" className="outline-none border-none normal-case text-sm font-medium h-[36px] w-full">Arrival</button>
                        </div>

                        <p className='py-4'>Departure Dhaka: 06-12 PM</p>

                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center p-2 rounded'>
                                <MdSunnySnowing className='text-xl mx-auto' />
                                <p className='text-[10px] font-medium text-[#161616]'>Early Morning</p>
                                <p className='text-[10px] font-normal text-[#393939]'>00-06 AM</p>
                            </div>
                            <div className='flex flex-col items-center bg-[#FFF2F4] p-2 rounded'>
                                <FiSun className='text-xl mx-auto' />
                                <p className='text-[10px] font-medium text-[#161616]'>Morning</p>
                                <p className='text-[10px] font-normal text-[#393939]'>06-12 PM</p>
                            </div>
                            <div className='flex flex-col items-center p-2 rounded'>
                                <TbSunset2 className='text-xl mx-auto' />
                                <p className='text-[10px] font-medium text-[#161616]'>Afternoon</p>
                                <p className='text-[10px] font-normal text-[#393939]'>12-06 PM</p>
                            </div>
                            <div className='flex flex-col items-center p-2 rounded'>
                                <FiMoon className='text-xl mx-auto' />
                                <p className='text-[10px] font-medium text-[#161616]'>Evening</p>
                                <p className='text-[10px] font-normal text-[#393939]'>06-12 AM</p>
                            </div>
                        </div>

                    </div>
                )
            }

            {
                isDropdownOpen && title === 'Airlines' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Emirates</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Air India</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option3"
                                        checked={selectedOption === 'option3'}
                                        onChange={() => handleOptionChange('option3')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Qatar Airways</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option4"
                                        checked={selectedOption === 'option4'}
                                        onChange={() => handleOptionChange('option4')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Kuwait Airways</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option5"
                                        checked={selectedOption === 'option5'}
                                        onChange={() => handleOptionChange('option5')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Turkish Airlines</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option6"
                                        checked={selectedOption === 'option6'}
                                        onChange={() => handleOptionChange('option6')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Gulf Air</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option7"
                                        checked={selectedOption === 'option7'}
                                        onChange={() => handleOptionChange('option7')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Singapore Matrix Airlines Limited</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option8"
                                        checked={selectedOption === 'option8'}
                                        onChange={() => handleOptionChange('option8')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Etihad Airways</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                        </ul>

                        <button className='mt-3 mb-2 text-xs font-semibold text-[#009D9A]'>Show Less <span><IoIosArrowUp className='inline' /></span></button>


                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Refundability' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm inline-flex gap-8'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    Non Refundable
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    Refundable
                                </label>
                            </li>
                        </ul>

                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Layover Airport' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    Kuwait International Airport
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    Bahrain International Airport
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option3"
                                        checked={selectedOption === 'option3'}
                                        onChange={() => handleOptionChange('option3')}
                                        className="mr-2"
                                    />
                                    London Heathrow Airport
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option4"
                                        checked={selectedOption === 'option4'}
                                        onChange={() => handleOptionChange('option4')}
                                        className="mr-2"
                                    />
                                    Paris
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option5"
                                        checked={selectedOption === 'option5'}
                                        onChange={() => handleOptionChange('option5')}
                                        className="mr-2"
                                    />
                                    Suvarnabhumi Airport
                                </label>
                            </li>
                        </ul>

                        <button className='mt-3 mb-2 text-xs font-semibold text-[#009D9A]'>Show 19 More <span><IoIosArrowDown className='inline' /></span></button>


                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Layover Time' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    0 Hrs - 5 Hrs
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    5 Hrs - 10 Hrs
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option3"
                                        checked={selectedOption === 'option3'}
                                        onChange={() => handleOptionChange('option3')}
                                        className="mr-2"
                                    />
                                    10 Hrs - 15 Hrs
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="option4"
                                        checked={selectedOption === 'option4'}
                                        onChange={() => handleOptionChange('option4')}
                                        className="mr-2"
                                    />
                                    15 Hrs - 20 Hrs+
                                </label>
                            </li>
                        </ul>


                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Number of Stops' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Up to 1 Flight</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p>Up to 2 Flight</p>
                                        <p>৳ 4,98,400</p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                )
            }


            {
                isDropdownOpen && title === 'Baggage' && (
                    <div className='px-4 py-3'>
                        <ul className='text-[#393939] text-sm'>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={() => handleOptionChange('option1')}
                                        className="mr-2"
                                    />
                                    20 KG
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={() => handleOptionChange('option2')}
                                        className="mr-2"
                                    />
                                    23 KG
                                </label>
                            </li>
                            <li className='py-1'>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value="option3"
                                        checked={selectedOption === 'option3'}
                                        onChange={() => handleOptionChange('option3')}
                                        className="mr-2"
                                    />
                                    30 KG
                                </label>
                            </li>
                        </ul>
                    </div>
                )
            }


            {isDropdownOpen ? '' : <p className='px-4 pb-3 text-xs font-normal text-[#6F6F6F]'>{des}</p>}
        </div>
    )
}

export default SearchFilters;