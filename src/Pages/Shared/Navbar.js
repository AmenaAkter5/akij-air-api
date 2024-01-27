import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import phone from '../../assets/icons/phone.svg';
import people from '../../assets/icons/customer-care.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navMenuItems =
        <ul className='text-base font-bold text-[#2A2E3B]'>
            <li className=' list-none inline mr-3 p-2'>Hotels</li>
            <li className=' list-none inline mr-3 p-2'>Cars</li>
            <li className=' list-none inline mr-3 p-2'>Flights</li>
            <li className=' list-none inline mr-3 p-2'>Vacations</li>
        </ul>

    const navMenuItems2 =
        <ul className='text-sm font-normal text-[#2A2E3B]'>
            <li className=' list-none inline mr-3 p-2'><span><img className="text-base inline-flex items-center mr-2" src={phone} alt="" /></span>Get the app</li>
            <li className=' list-none inline mr-3 p-2'>BDT ৳ / EN<span><IoIosArrowDown className='inline ml-2' /></span></li>
            <li className=' list-none inline mr-3 p-2 underline'><Link to=''>Help</Link></li>
        </ul>


    const buttons = <>
        <button type="submit" className="outline-none border border-[#000] rounded hover:bg-[#700014] hover:text-white normal-case font-bold text-xs text-[#000] h-[36px] px-2 mr-4 py-2"><span><FaUserCircle className='inline mr-2 text-lg' /></span>Sign in / Join ClubMiles</button>
    </>

    return (
        <nav>
            <div className="h-[44px] lg:h-[70px] py-2 lg:py-3">
                <div className='max-w-screen-md lg:max-w-7xl mx-auto lg:px-0 px-4 flex items-center justify-between'>


                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center'>
                            <Link to='/'>
                                <img className="lg:w-32 w-24" src={logo} alt="" />
                            </Link>
                        </div>

                        <div className="block lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-[#8E011A]"
                            >
                                <FaBars />
                            </button>
                        </div>

                        <div className={`lg:block ${isOpen ? 'flex-col' : 'hidden'}`}>
                            {navMenuItems}
                        </div>
                    </div>



                    <div className='flex items-center justify-between gap-4'>
                        <div className={`lg:block ${isOpen ? 'flex-col' : 'hidden'}`}>
                            {navMenuItems2}
                        </div>
                        <div className='flex items-center mr-4'>
                            <img className="mr-2 w-7 h-7 border border-[#D8D8D8] rounded-[100%]" src={people} alt="" />
                            <div className='flex flex-col justify-center'>
                                <p className='text-base text-[#000] font-semibold'>016-8244-0404</p>
                                <p className='text-sm text-[#000] font-normal'>Speak to a travel expert</p>
                            </div>
                        </div>
                        <div className={`lg:block ${isOpen ? 'flex-col' : 'hidden'}`}>
                            {buttons}
                        </div>
                    </div>


                </div>
            </div>


        </nav>
    );
};

export default Navbar;