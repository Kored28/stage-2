import { createContext, useState } from 'react'
import { iphones } from '../constants/constant'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for(let i = 1; i < iphones.length + 1; i++){
    cart[i] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  
  const getTotalAmount = () => {
    let totalAmount = 0
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = iphones.find((iphone) => iphone.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const minusFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - prev[itemId]}))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, minusFromCart, updateCartItemCount, getTotalAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider