
import { CountUp } from 'use-count-up'

export default function Section4() {
    return (<>
        <div className="relative py-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>

                    {/* <VisibilitySensor >
                        {({ isVisible }) => ( */}
                    <div >


                        <div>
                            <h2 className="mt-2 text-[35px] font-bold" >
                                +<CountUp
                                    isCounting
                                    start={0}
                                    end={16}
                                    duration={1}
                                    separator=""
                                    decimals={0}
                                    decimal=","
                                    suffix="+"

                                /></h2>
                        </div>


                    </div>
                    {/* )}
                    </VisibilitySensor> */}
                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        YEARS IN BUSINESS
                    </p >
                </div >

                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>

                    <div>
                        <h2 className="mt-2 text-[35px] font-bold" >
                            +<CountUp
                                isCounting
                                start={0}
                                end={1000}
                                duration={2}
                                separator=""
                                decimals={0}
                                decimal=","
                                suffix="+"

                            /></h2>
                    </div>

                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        CUSTOMERS IN LA COUNTTY
                    </p >
                </div >

                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>


                    <div>
                        <h2 className="mt-2 text-[35px] font-bold" >
                            +<CountUp
                                isCounting
                                start={0}
                                end={5000}
                                duration={2}
                                separator=""
                                decimals={0}
                                decimal=","
                                suffix="+"
                            /></h2>
                    </div>

                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        CUSTOMERS WORLDWIDE
                    </p >
                </div >

                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>


                    <div>
                        <h2 className="mt-2 text-[35px] font-bold" >
                            +<CountUp
                                isCounting
                                start={0}
                                end={100}
                                duration={2}
                                separator=""
                                decimals={0}
                                decimal=","
                                suffix="+"
                            /></h2>
                    </div>
                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        BUSINESS PARTNERS
                    </p >
                </div >
                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>



                    <div>
                        <h2 className="mt-2 text-[35px] font-bold" >
                            +<CountUp
                                isCounting
                                start={0}
                                end={4}
                                duration={0.5}
                                separator=""
                                decimals={0}
                                decimal=","
                                suffix="+"
                            /></h2>
                    </div>

                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        Offces Worldwide
                    </p >
                </div >
                <div
                    className="block rounded-xl border border-2 border-gray-100 p-4 shadow-sm text-center bg-gray-100  hover:border-gray-400 focus:outline-none focus:ring"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>


                    <div>
                        <h2 className="mt-2 text-[35px] font-bold" >
                            +<CountUp
                                isCounting
                                start={0}
                                end={150}
                                duration={1.5}
                                separator=""
                                decimals={0}
                                decimal=","
                                suffix="+"
                            /></h2>
                    </div>
                    <p className="hidden sm:mt-1 sm:block sm:text-md font-medium sm:text-gray-600" >
                        ONGOING PROJECTS
                    </p >
                </div >
            </div >
        </div >
    </>)
}