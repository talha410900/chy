import HeroImage from 'assets/section-1.png'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Section1() {
    return (<>
        <div className="relative">
            <Image src={HeroImage} width="100%" alt='main-hero-image' height="100%" layout="responsive" objectFit="contain"
            />
            <div className='max-w-[800px] h-full flex justify-center items flex-col pl-[10px] md:pl-[100px] lg:pl-[200px] mt-[-10px] md:mt-[-100px] absolute left-0 top-0 pr-[194px]' >
                <h1 className='text-[16px] md:text-[30px] lg:text-[40px] leading-tight text-black font-bold'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Helping You")
                                .pauseFor(300)
                                .typeString("<br /> Form a Bussiness ").deleteAll()
                                .typeString(
                                    'Where Financial Success happens'
                                ).pauseFor(300).typeString("<br /> Lets's Succeeded Together")
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                    {/* Helping You <br /> Form a Bussiness */}
                </h1>
                <h2 className='text-[20px] md:text-[40px] lg:text-[50px] leading-none font-light'> Without a Hassle</h2>

                <p className='text-gray-600 text-[10px] md:text-base lg:text-lg my-5 md:my-10'>Join Over 900,000 Small Bussiness Owners <br /> That have Trusted CHY</p>

                <button className='max-w-[200px] md:max-w-[230px] group flex items-center justify-between outline-none focus-none rounded-full py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-8 text-white bg-yellow-600 hover:bg-yellow-700 ease-in-out duration-300 font-bold'> Start My Business
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 group-hover:mr-[-5px] ease-in-out duration-300">
                        <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

                </button>
            </div >
        </div>
    </>)
}