import React from 'react';
import { FaStar } from "react-icons/fa";
import { BsFillCursorFill } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="bg-base-200 py-[88px] px-[200x]">
            <div className="text-center">
                <div className="max-w-[800px] mx-auto relative space-y-7">
                    <h1 className="text-7xl text-popover font-bold">Make your money work harder</h1>
                    <p className='max-w-[530px] text-lg text-popover-foreground font-normal mx-auto'> cInitiating a business venture may appear overwhelming, yet our forte lies in simplifying the entire process for you.
                    </p>
                    <div className='space-y-[22px]'>
                        <div className='flex justify-center items-center gap-4'>
                            <button className="btn btn-primary">Get Started</button>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-primary' />
                                <h1>Trustpilot</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-primary' /><FaStar className='text-primary' /><FaStar className='text-primary' /><FaStar className='text-primary' /><FaStar className='text-primary' />
                                </div>
                                <h1>3800+ 5 Stars</h1>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-28 top-[50%] left-0 flex gap-3 absolute justify-between items-stretch'>
                        <p className='px-3.5 py-3 bg-[#FEF3B5] rounded-full'>Finance</p>
                        <BsFillCursorFill />
                    </div>
                    <div className='max-w-28 flex top-[50%] gap-3 right-0 absolute justify-between items-stretch'>
                        <BsFillCursorFill className=' rotate-270' />
                        <p className='px-3.5 py-3 bg-[#F8C9C5] rounded-full'>Business</p>
                        
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Hero;