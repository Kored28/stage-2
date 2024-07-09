import { useState } from 'react'
import { arrowDown, cart, logo, search, user } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }
  return (
    <div className='flex justify-between items-center px-[24px] sm:px-[52px] py-6 relative'>
        <div className="flex items-center">
            <img src={arrowDown} alt="arrow" 
            className='w-[22px] h-[20px] sm:hidden block'
            onClick={handleClick}
            />
            <Link to="/"><img src={logo} alt="logo" className='w-45 h-12' /></Link>
        </div>

        <div className={`flex flex-col sm:flex-row font-poppins gap-3 sm:gap-5 
        text-lg font-normal sm:relative absolute sm:top-0 top-[60px] sm:opacity-[1] left-[24px] sm:left-0
        sm:bg-transparent bg-white z-50 sm:p-0 p-[10px_15px] sm:shadow-none shadow-md
        ${active ? 'opacity-[1] ease-out' : 'opacity-0'}
        `}
        >
            <Link 
             className='bg-[linear-gradient(180deg,#A4179F_0%,#3E093C_61.5%)] bg-clip-text text-transparent' 
             to='/shop'
            >
                Shop
            </Link>
            <Link 
             className='bg-[linear-gradient(180deg,#A4179F_0%,#3E093C_61.5%)] bg-clip-text text-transparent' 
             to='/shop'
            >
                About us
            </Link>
            <Link 
             className='bg-[linear-gradient(180deg,#A4179F_0%,#3E093C_61.5%)] bg-clip-text text-transparent' 
             to='/shop'
            >
                Now Available
            </Link>
            <Link 
             className='bg-[linear-gradient(180deg,#A4179F_0%,#3E093C_61.5%)] bg-clip-text text-transparent' 
             to='/shop'
            >
                Favorites
            </Link>
        </div>

        <div className="flex gap-3">
            <Link to="/search"><img src={search} alt="search" className='w-6 h-6' /></Link>
            <Link to="/cart"><img src={cart} alt="cart" className='w-6 h-6' /></Link>
            <Link to="/user"><img src={user} alt="user" className='w-5 h-5' /></Link>
        </div>
    </div>
  )
}

export default Navbar