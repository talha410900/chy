import HeroImage from 'assets/section-3.png'
import Image from 'next/image'
import React from 'react';
import { InlineWidget, PopupModal } from "react-calendly";
export default function Section3() {
    const [open, setOpen] = React.useState(false)
    return (<>
        <div className="relative">
            <Image src={HeroImage} width="100%" alt='main-hero-image' height="100%" layout="responsive" objectFit="contain"
            />
            <div className='
           text-white
            h-full
flex justify-center items flex-col 
 pl-[20px] md:pl-[100px]
 absolute   left-0 top-0
 '
            >
                <h1 className='text-[20px] md:text-[30px] lg:text-[40px] leading-tight text-white font-bold'>
                    Helping You <br /> Form a Bussiness
                </h1>
                <p className='text-white text-sm md:text-base lg:text-lg my-3 md:my-4 lg:my-5'>Join Over 900,000 Small Bussiness Owners <br /> That have Trusted CHY</p>

                <button onClick={() => setOpen(true)} className='max-w-[200px] md:max-w-[230px] group flex items-center justify-between outline-none focus-none rounded-full py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-8 text-white bg-yellow-600 hover:bg-yellow-700 ease-in-out duration-300 font-bold'> Start My Business
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 group-hover:mr-[-5px] ease-in-out duration-300">
                        <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

                </button>

            </div >
        </div>
    </>)
}