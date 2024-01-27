import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { TfiAlarmClock } from "react-icons/tfi";
import CountDown from '../components/CountDown';

const InfoSection = () => {
  return (

    <section className='shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] items-center lg:h-[80px] pt-3 mb-4 bg-white'>

      <div className='lg:max-w-7xl max-w-screen-md mx-auto lg:px-0 px-4'>
        <div className='lg:inline-flex'>

          <div className='lg:border-e-2 lg:border-b-0 border-b-2 pb-5 md:pb-2 lg:pb-0 mb-5 md:mb-2 lg:mb-0 border-[#E0E0E0] w-full lg:w-[320px] '>
            <p className='text-base font-semibold text-[#161616]'>Dhaka (DAC) — Cox's Bazar (CXB)</p>
            <p className='text-xs font-normal text-[#393939]'>One Way • Jan 09 • 5 Passenger, Economy</p>
          </div>

          <div className='lg:border-e-2 lg:border-b-0 border-b-2 border-[#E0E0E0] w-[320px] md:w-full lg:w-[280px] flex justify-between items-center pb-5 md:pb-2 lg:pb-0 mb-5 md:mb-2 lg:mb-0 lg:px-4'>
            <div className='flex justify-self-start lg:justify-between gap-4 items-center'>
              <TfiAlarmClock className='w-[24px] h-[22px]' />
              <p className='text-sm font-medium text-[#161616]'>Time Remaining</p>
            </div>
            <CountDown seconds={2000} />
          </div>

          <div className='flex justify-center pb-5 md:pb-3 lg:pb-0'>
            <div className='border-e-2 border-[#E0E0E0] w-[160px] px-4 flex justify-center items-center'>
              <p className='text-sm font-medium text-[#161616]'>15 Available Flights</p>
            </div>

            <button className="outline-none border-none hover:bg-[#8E011A] hover:text-white font-normal px-4">
              <div className='flex justify-between gap-1.5 items-center text-[#009D9A]'>
                <HiOutlineSearch className='text-xl' />
                <p className='text-base font-normal underline'>Modify Search</p>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>

  )
}

export default InfoSection;