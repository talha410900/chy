import { InlineWidget } from "react-calendly"
import { FaAmazon, FaDollarSign, FaHome, FaMoneyCheck, FaMoneyCheckAlt, FaPlane } from "react-icons/fa"
export default function BookAppointement() {

    return (
        <>
            <div className="container my-10  mx-auto">
                <section className=" text-gray-800">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 mb-12 lg:mb-0 md:pr-6">
                            <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" style={{ backgroundPosition: "50%" }}>
                                <img src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover" />

                                <a href="#!">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                                        <div className="flex justify-center items-center h-full">
                                            <div className="px-6 py-12 md:px-12 text-white text-center">
                                                <h3 className="text-3xl uppercase font-bold mb-6">
                                                    Book An Appointment & <br />
                                                    Start Grow your Bussiness
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
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 md:px-6">
                            <InlineWidget styles={{ height: 800 }} url="https://calendly.com/finalwayto/30min" />

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}