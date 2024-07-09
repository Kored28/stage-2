

const CheckoutItems = ({iphone}) => {
const { imgUrl, name, price} = iphone
  
  return (
    <div className="flex flex-col">
        <div className="flex gap-[26px]">
            <img src={imgUrl} alt={name}  className="sm:w-full sm:h-auto w-[55px] h-[66px] " />

            <div className="flex flex-col w-[543px]">
                <h2 className='text-[#0A0A0A] text-[20px] font-josefin'>
                    {name.slice(0, 10)}...
                </h2>
                <p className="text-[#676767] text-[17px] font-josefin "> Space Grey v1</p>
            </div>

            <div className="flex">
                <p className='text-[24px] font-josefin'>
                    ${price}
                </p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutItems