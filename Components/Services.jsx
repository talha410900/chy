import { FaAmazon, FaDollarSign, FaHome, FaMoneyCheck, FaMoneyCheckAlt, FaPlane } from "react-icons/fa"
export default function Services() {

    return (
        <>
            <div className="container my-10  mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:pr-6">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" style={{ backgroundPosition: "50%" }}>
                                <img src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover" />

                                <a href="#!">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                                        <div className="flex justify-center items-center h-full">
                                            <div className="px-6 py-12 md:px-12 text-white text-center">
                                                <h3 className="text-3xl uppercase font-bold mb-6">
                                                    More than just ACCOUNTING SERVICES
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
                            <div className="flex mb-12">
                                <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow-lg bg-blue-600">
                                        <FaDollarSign className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">Tax & Accounting</p>
                                    <p className="text-gray-500">
                                        We thoroughly analyze your previous tax returns, provide guidance to increase future returns, and create proactive tax strategies to maximize tax efficiency.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-12">
                                <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow-lg bg-blue-600">
                                        <FaAmazon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">Business Development</p>
                                    <p className="text-gray-500">
                                        Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
                                        soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-12">
                                <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow-lg bg-blue-600">
                                        <FaMoneyCheck className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">Financial Analysis</p>
                                    <p className="text-gray-500">
                                        Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
                                        voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi iure
                                        eveniet facere?
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-12">
                                <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow-lg bg-blue-600">
                                        <FaHome className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">Real Estate</p>
                                    <p className="text-gray-500">
                                        Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
                                        voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi iure
                                        eveniet facere?
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow-lg bg-blue-600">
                                        <FaPlane className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">Immigration</p>
                                    <p className="text-gray-500">
                                        Illum doloremque ea, blanditiis sed dolor laborum praesentium maxime sint,
                                        consectetur atque ipsum ab adipisci ullam aspernatur odio soluta, quisquam dolore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}