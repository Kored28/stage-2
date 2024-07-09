import { useContext } from 'react'
import { iphones } from '../../constants/constant'
import { ShopContext } from '../../context/ShopContextProvider'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {
    const {cartItems, getTotalAmount} = useContext(ShopContext)
    const totalAmount = getTotalAmount()


  return (
    <div className="flex flex-col w-full px-[20px] sm:px-[52px] mb-[80px]">
        <h2 className='text-black text-[32px] font-poppins font-semibold'>
            Your Cart
        </h2>

        <div className="flex flex-col">
            {iphones.map((iphone) => {
                if(cartItems[iphone.id] !== 0){
                    return <CartItem key={iphone.id} iphone={iphone} />
                }
            })}
        </div>

        <div className="flex flex-col items-center">
            <div className="flex justify-between py-[30px] px-[1px] border-t border-t-black
            border-b border-b-black mb-8 w-full"
            >
                <p className='text-[#0A0A0A] text-[20px] font-josefin'>
                    Subtotal
                </p>
                <p className='text-[24px] font-josefin'>
                    ${totalAmount}
                </p>
            </div>

            <Link to="/checkout">
                <button className='bg-[#A4179F] text-white font-josefin text-[24px] align-center px-[8px]
                py-[2px] w-[224px] h-[40px] rounded-md'
                >
                    Checkout
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Cart