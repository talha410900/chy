import Image from "next/image";
import React from "react";
import logo from '../assets/logo.png'
import { Popover } from '@headlessui/react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function Languages() {
    return (

        <>
            <div className=" w-full shadow-lg hidden md:flex relative z-[99]">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="grid md:grid-cols-11 lg:grid-cols-12  items-center ">

                        <div className="hidden lg:flex py-2 col-span-2">
                            <Image src={logo} className="w-[150px] h-[50px] cursor-pointer" />
                        </div>

                        <div className="flex items-center gap-1 md:gap-2 lg:gap-4 text-sm cursor-pointer md:col-span-5 lg:col-span-5">
                            <a className="flex gap-1 items-center">
                                How It Works

                            </a>
                            <Popover className="relative" by="id" id="services">
                                <Popover.Button className="flex gap-1 items-center outline-none focus-none">

                                    Services
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Popover.Button>
                                <Popover.Panel className="absolute z-10">
                                    <div
                                        class=" z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                                        role="menu"
                                    >
                                        <div class="p-2">
                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                Tax & Accounting
                                            </a>

                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                Bussiness
                                            </a>

                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                Finance
                                            </a>

                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                Real Estate
                                            </a>

                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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

                        <div className="flex justify-center md:justify-end items-center gap-1 md:gap-2 lg:gap-4 text-sm cursor-pointer md:col-span-6 lg:col-span-5">
                            <a className="flex gap-1 items-center text-blue-600 ">
                                <svg className='w-5 h-6 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                                <span >1-888-981-2983</span></a>
                            <a href="#" className="text-grey-500 font-medium">Login</a>
                            <a className="border border-2 border-blue-600 py-2 px-3 text-blue-600 font-bold rounded-full
                        hover:bg-blue-600  hover:text-white ease-in-out duration-300
                        ">Incorporate Now</a>


                            <Popover className="relative" by="id" id="lang2">
                                <Popover.Button className="flex gap-1 items-center outline-none focus-none">
                                    🇬🇧 EN
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Popover.Button>
                                <Popover.Panel className="absolute z-10">
                                    <div
                                        class=" z-10 mt-4 w-[90px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                                        role="menu"
                                    >
                                        <div class="p-2">
                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                🇬🇧 EN
                                            </a>

                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                🇨🇳 CH
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div >
            {/* small */}

            <div className=" w-full shadow-lg md:hidden">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="grid grid-cols-2  items-center ">
                        <div className="lg:flex py-2">
                            <Image src={logo} className="w-[150px] h-[50px] cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-3 py-2 justify-end">
                            <div>
                                <Popover className="relative" by="id" id="lang1">
                                    <Popover.Button className="flex gap-1 items-center outline-none focus-none" >
                                        🇬🇧 EN
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </Popover.Button>
                                    <Popover.Panel className="absolute z-10">
                                        <div
                                            class=" z-10 mt-4 w-[90px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                                            role="menu"
                                        >
                                            <div class="p-2">
                                                <a
                                                    href="#"
                                                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem"
                                                >
                                                    🇬🇧 EN
                                                </a>

                                                <a
                                                    href="#"
                                                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem"
                                                >
                                                    🇨🇳 CH
                                                </a>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                            </div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <FaBars />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 min-w-[250px] z-[999] p-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="pt-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                                                    >

                                                        How It Works
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Popover className="relative">
                                                        <Popover.Button className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm flex gap-1 items-center outline-none focus-none`}>

                                                            Services
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>
                                                        </Popover.Button>
                                                        <Popover.Panel className="absolute z-10">
                                                            <div
                                                                class=" z-10 mt-1 w-full origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
                                                                role="menu"
                                                            >
                                                                <div class="p-2">
                                                                    <a
                                                                        href="#"
                                                                        class="block rounded-lg px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                                        role="menuitem"
                                                                    >
                                                                        Tax & Accounting
                                                                    </a>

                                                                    <a
                                                                        href="#"
                                                                        class="block rounded-lg px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                                        role="menuitem"
                                                                    >
                                                                        Bussiness
                                                                    </a>

                                                                    <a
                                                                        href="#"
                                                                        class="block rounded-lg px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                                        role="menuitem"
                                                                    >
                                                                        Finance
                                                                    </a>

                                                                    <a
                                                                        href="#"
                                                                        class="block rounded-lg px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                                        role="menuitem"
                                                                    >
                                                                        Real Estate
                                                                    </a>

                                                                    <a
                                                                        href="#"
                                                                        class="block rounded-lg px-2 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                                        role="menuitem"
                                                                    >
                                                                        Immigration
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Popover>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                                                    >

                                                        Resource Center
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                                                    >

                                                        About Us
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm text-blue-600 gap-1`}
                                                    >
                                                        <svg className='w-5 h-6 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                                        </svg>
                                                        1-888-981-2983
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                                                    >

                                                        Login
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-1 text-sm
                                                            border border-2 border-blue-600  text-blue-600 font-bold rounded-full hover:bg-blue-600  hover:text-white ease-in-out duration-300`}
                                                    >

                                                        Incorporate Now
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}