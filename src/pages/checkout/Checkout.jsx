import { paypal, transfer, visa } from '../../assets'
import Inputs from './Inputs'
import { iphones } from '../../constants/constant'
import CheckoutItems from './CheckoutItems'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const TwoIphones = iphones.slice(0, 2)

    const totalAmount = 55550
    const shipmentCost = 22.5
    const discount = 0
    const grandtotal = totalAmount + shipmentCost - discount
  return (
    <div className="flex flex-col gap-2 px-[20px] sm:px-[52px] ">
        <h2 className='text-black text-[32px] font-poppins font-semibold mb-4'>
            Checkout
        </h2>

        <p className='text-black text-[24px] font-poppins font-semibold mb-4'>
            Select payment methods
        </p>

        <div className="flex flex-col sm:flex-row w-full gap-[20px] mb-[70px]">
            <div className="flex flex-col w-full sm:w-1/2 gap-6">
                <div className="flex gap-[10px] sm:gap-[31px]">
                    <div className="flex flex-col items-center justify-center bg-white w-[110px] h-[126px]
                    shadow-md border py-[21px] px-[16.8px]"
                    >
                        <p className="text-black text-sm font-normal">Credit Card</p>
                        <img src={visa} alt="visa" className=' sm:w-[63px] sm:h-[23.8px]' />
                    </div>
                    <div className="flex flex-col justify-center bg-white w-[110px] h-[126px]
                    shadow-md border py-[21px] px-[16.8px]"
                    >
                        <p className="text-black text-sm font-normal text-center">Paypal</p>
                        <img src={paypal} alt="paypal" className=' sm:w-[63px] sm:h-[23.8px]'  />
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white w-[120px] h-[126px]
                    shadow-md border py-[21px] px-[16.8px]"
                    >
                        <p className="text-black text-sm font-normal">Data Transfer</p>
                        <img src={transfer} alt="data transfer" className='w-[21px] h-[21px]'  />
                    </div>
                </div>
                <Inputs/>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 border border-[#DFDFDF] gap-[4px] bg-white p-[20px] sm:px-[57px] py-[35px] shadow-md">
                <p className="text-[20px] mb-4 font-josefin font-normal">Summary</p>
                <div className="flex flex-col gap-[30px] mb-4">
                    {TwoIphones.map((iphone) => {
                        return <CheckoutItems key={iphone.id} iphone={iphone} />               
                    })}
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Subtotal</p>
                        <p className='text-[20px] text-black font-josefins'>${totalAmount}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Discount</p>
                        <p className='text-[20px] text-black font-josefins'>${discount}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Shipment cost</p>
                        <p className='text-[20px] text-black font-josefins'>${shipmentCost}0</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black  font-josefins'>Grand total</p>
                        <p className='text-[20px] text-black font-josefins'>${grandtotal}0</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full">
            <Link to="/completed">
                <button className='bg-black text-white font-josefin text-[24px] align-center px-[8px]
                py-[2px] w-[322px] h-[40px] rounded-md text-center mb-[80px]'               
                >
                    Proceed to Pay
                    
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Checkout