import Image from "next/image";
import React from "react";
import logo from '../assets/logo.png'
// import { ChevronDownIcon } from '@heroicons'
import { Popover } from '@headlessui/react'
export default function NavBar() {
    return (
        <div className=" w-full shadow-lg">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center ">
                    <div className="hidden lg:flex py-2">
                        <Image src={logo} className="w-[150px] h-[50px] cursor-pointer" />
                    </div>
                    <div className="flex  items-center gap-1 md:gap-2 lg:gap-4 text-sm cursor-pointer">
                        <a className="flex gap-1 items-center">
                            How It Works

                        </a>
                        {/* <Popover className="relative">
                            <Popover.Button>Solutions</Popover.Button>

                            <Popover.Panel className="absolute z-10">
                                <div className="grid grid-cols-2">
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div>

                                <img src="/solutions.jpg" alt="" />
                            </Popover.Panel>
                        </Popover> */}
                        <Popover className="relative">
                            <Popover.Button className="flex gap-1 items-center outline-none focus-none">

                                Services
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10">
                                <div
                                    className=" z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                                    role="menu"
                                >
                                    <div className="p-2">
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Tax & Accounting
                                        </a>

                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Bussiness
                                        </a>

                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Finance
                                        </a>

                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Real Estate
                                        </a>

                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Immigration
                                        </a>

                                    </div>
                                </div>
                            </Popover.Panel>
                        </Popover>
                        <a>Resource Center</a>
                        <a>About Us</a>
                    </div>
                    <div className="flex justify-center md:justify-end items-center gap-1 md:gap-2 lg:gap-4 text-sm cursor-pointer">
                        <a className="flex gap-1 items-center text-blue-600 ">
                            <svg className='w-5 h-6 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            <span >1-888-981-2983</span></a>
                        <a href="#" className="text-grey-500 font-medium">Login</a>
                        <a className="border border-2 border-blue-600 py-2 px-3 text-blue-600 font-bold rounded-full
                        hover:bg-blue-600  hover:text-white ease-in-out duration-300
                        ">Incorporate Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}