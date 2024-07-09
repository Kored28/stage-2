import { useContext } from "react"
import { heart } from "../../assets"
import { iphones } from "../../constants/constant"
import { ShopContext } from "../../context/ShopContextProvider"

const Phones = () => {
  const {addToCart, cartItems} = useContext(ShopContext)

  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 mb-10 pl-[0px] sm:pl-[52px] gap-[40px] 
    sm:gap-[50px]"
    >
        {iphones.map((iphone) => (
            <div key={iphone.id} className="flex flex-col gap-[13px] items-center 
            justify-center bg-[#F5F5F5] w-[181px] h-[250px] shadow-md
            sm:w-[259px] sm:h-[370px] rounded-lg"
            >
                <img src={iphone.imgUrl} alt={iphone.name} 
                className="sm:w-[130px] sm:h-[159px] w-[68px] h-[81.6px] " />
                <p className="text-[#676767] font-josefin text-[12px] sm:text-[17px]">
                    {iphone.name}
                </p>

                <h2 className="text-black text-[16px] sm:text-[24px] font-josefin">
                    ${iphone.price}
                </h2>

                <div className="flex gap-3">
                    <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                     rounded-full bg-white border border-black"></div>
                    <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                     rounded-full bg-[#575D6D]"></div>
                    <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                     rounded-full bg-[#3E093C]"></div>
                </div>

                <div className="flex gap-8 items-center">
                    
                    {
                        cartItems[iphone.id] > 0 ?
                        <button className="sm:text-[17px] text-[10px] font-josefin shadow-md
                        border bg-[#A4179F] text-white px-[23px] py-[10px] rounded-lg"
                        onClick={() => {
                            addToCart(iphone.id)
                        }}
                        >
                            {iphone.clickedButtonText}
                        </button>
                        :
                        <button className="sm:text-[17px] text-[10px] font-josefin bg-white shadow-md
                        border border-[#A4179F] px-[23px] py-[10px] rounded-lg
                        hover:bg-[#E0B0DE]" 
                        onClick={() => {
                            addToCart(iphone.id)
                        }}
                        >
                            {iphone.buttonText}
                        </button>
                    }
                    <img src={heart} alt="heart" className="w-[24px] h-[24px] cursor-pointer" 
                    />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Phones