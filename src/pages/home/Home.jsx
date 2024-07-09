import { useEffect, useState } from "react";
import { hero, heroSm, triBig, triSmall } from "../../assets"
import Phones from "./Phones"


const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.outerWidth);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
  return (
    <div className="flex flex-col px-[24px] sm:px-[52px] relative">
        {/* Hero section */}
        <div className="flex relative bg-[#E0B0DE] w-full sm:h-[427.17px] 
        rounded-[24px] py-[65px] px-[40px] sm:py-[74px] sm:px-[74px] mb-5
        "
        >
            <div className="flex gap-2 flex-col w-full  sm:w-1/2">
                <p className="text-black font-medium text-[12px] sm:text-2xl">
                    Your one stop for all your
                </p>
                <h2 className=" text-[15px] sm:text-[40px] font-normal font-poller">
                    APPPLE <br />GADGETS
                </h2>
                <p className=" text-[12px] sm:text-2xl uppercase font-medium font-josefin">
                    Building your ecosystem effortlessly 
                </p>
                <button className="px-[10px] py-[10px] rounded-lg w-[100px] sm:w-[189px] bg-[linear-gradient(90deg,#A4179F_0%,#3E093C_75%)]
                 text-white text-[10px] sm:text-[22px] font-normal hover:scale-[1.1]"
                >
                    Explore Now!
                </button>
            </div>

            {
                windowWidth > 800 ? 
                <img src={hero} alt="phones" className="w-1/2 z-10" />:
                <img src={heroSm} alt="phones" className="w-[202px] h-[134px] z-0" />
            }

            <img src={triBig} alt="Big triangle" className="absolute  top-0 right-[15px] z-[-999px] opacity-0 sm:opacity-[0.3]" />
            <img src={triSmall} alt="Big triangle" className="absolute top-[125px] left-[300px] z-[-999px] opacity-0 sm:opacity-[0.3]"/>
        </div>

        {/* Categories */}
        <div className="flex flex-col mb-[15px] pb-[70px]">
            <h2 className="sm:text-[24px] xs:text-[14]  text-center text-[#691D66] font-poppins">
                Categories
            </h2>

            <div className="flex gap-[13px] sm:gap-10 items-center justify-center">
                <button className="bg-white text-black sm:px-[23px] sm:py-[10px] border xs:text-[14px] sm:text-[24px] font-josefin shadow-md
                hover:bg-[#E0B0DE] w-[67px] sm:w-[150px] h-[30px] sm:h-[50px] rounded-lg"
                >
                    Macs
                </button>
                <button className="bg-white text-black sm:px-[23px] sm:py-[10px] border xs:text-[14px] sm:text-[24px] font-josefin shadow-md
                hover:bg-[#E0B0DE] w-[67px] sm:w-[150px] h-[30px] sm:h-[50px] rounded-lg"
                >
                    iPads
                </button>
                <button className=" text-white sm:px-[23px] sm:py-[10px] border xs:text-[14px] sm:text-[24px] font-josefin shadow-md
                 bg-[#A4179F] w-[67px] sm:w-[150px] h-[30px] sm:h-[50px] rounded-lg "
                >
                    iPhones
                </button>
                <button className="bg-white text-black sm:px-[23px] sm:py-[10px] border xs:text-[14px] sm:text-[24px] font-josefin shadow-md
                hover:bg-[#E0B0DE] w-[67px] sm:w-[150px] h-[30px] sm:h-[50px] rounded-lg"
                >
                    iWatch
                </button>
                <button className="bg-white text-black sm:px-[23px] sm:py-[10px] border xs:text-[14px] sm:text-[24px] font-josefin shadow-md
                hover:bg-[#E0B0DE] w-[67px] sm:w-[150px] h-[30px] sm:h-[50px] rounded-lg"
                >
                    Airpods
                </button>
            </div>
        </div>

        <Phones/>
    </div>
  )
}

export default Home