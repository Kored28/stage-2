import { useContext } from 'react'
import { add, bin, minus, save } from '../../assets'
import { ShopContext } from '../../context/ShopContextProvider'

const CartItem = ({iphone}) => {
  const {id, imgUrl, name, price} = iphone
  const {cartItems, addToCart, minusFromCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row border-t border-t-black py-[30px] justify-between">

      <div className="flex gap-[10px] sm:gap-[60px]">
        <div className="flex bg-[#E5E6E4] items-center px-[27px]  sm:px-[50px] sm:py-[27px]">
          <img src={imgUrl} alt={name} className='w-[108px] h-[130px] sm:w-[150px] sm:h-[179px]' />
        </div>

        <div className="flex flex-col items-center justify-center gap-[16px] sm:gap-[43px] pt-2 ">
          <p className="text-[20px] text-center font-josefin text-[#0A0A0A] ">{name}</p>

          <div className="flex flex-col gap-[4px]">
            <div className="flex gap-3">
              <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                rounded-full bg-white border border-black"></div>
              <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                rounded-full bg-[#575D6D]"></div>
              <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                rounded-full bg-[#3E093C]"></div>
            </div>
            <p className="text-[#676767] text-[17px] font-josefin text-center "> Space Grey</p>
          </div>

          <p className='flex sm:hidden text-[24px] font-josefin'>
            ${price}
          </p>

          <div className=" gap-[42px] hidden sm:flex">
            <div className="flex items-center cursor-pointer" onClick={() => removeFromCart(id)} >
              <img src={bin} alt="remove" />
              <p className='text-[15px] text-[#757575] pt-[6px] text-center font-josefin'>Remove item</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={save} alt="save" />
              <p className='text-[15px] text-[#757575] text-center py-[2px] font-josefin'>Save for later</p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[91px]">
        <p className='hidden sm:flex text-[24px] font-josefin'>
          {price}
        </p>

        <div className="flex ml-[170px] sm:ml-[0] border-[1.7px] m-3 sm:m-[0] p-[5px] sm:p-[0] border-black rounded-[10.81px] px-[10px] ">
          <img src={minus} alt="minus" className=' w-[25px] h-[25px] p-[2px] cursor-pointer'
           onClick={() => minusFromCart(id)}
          />
          <input type="text" value={cartItems[id]} 
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          className='w-[33px] pl-1 border border-black'
          />
          <img src={add} alt="minus" className='w-[25px] h-[25px] p-[2px] cursor-pointer'
            onClick={() => addToCart(id)}
          />
        </div>
      </div>

      <div className="flex sm:hidden gap-[42px]">
        <div className="flex items-center cursor-pointer" onClick={() => removeFromCart(id)} >
          <img src={bin} alt="remove" />
          <p className='text-[15px] text-[#757575] pt-[6px] text-center font-josefin'>Remove item</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={save} alt="save" />
          <p className='text-[15px] text-[#757575] text-center py-[2px] font-josefin'>Save for later</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem