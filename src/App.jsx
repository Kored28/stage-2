import { Routes, Route } from "react-router-dom"
import { CheckLayout, HomeLayout } from "./components"
import { Cart, Checkout, Completed, Home } from "./pages"
import ShopContextProvider from "./context/ShopContextProvider"


function App() {

  return (
    <>
      <ShopContextProvider>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
          <Route element={<CheckLayout/>}>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/completed" element={<Completed/>} />
          </Route>
        </Routes>
      </ShopContextProvider>
    </>
  )
}

export default App
