import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import AllFlashSale from "./Components/Allcategories/AllFlashSale/AllFlashSale"
import AllBestSellers from './Components/Allcategories/AllBestSellers/AllBestSellers'
import AllNewArrivals from './Components/Allcategories/AllNewSale/AllNewArrivals'
import AllPhones from './Components/Allcategories/FetchEveryThing/AllPhones'
import Product from './Components/Productpage/Product'
import Messagechat from './Pages/Messagechat/Messagechat'
import PostAd from './Pages/PostAd/PostAd'
import Logout from './Pages/Logout/Logout'
import 'animate.css';
import { LogoutContext } from './Context/LogoutContext'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Resetpassword from './Pages/Login/Resetpassword/Resetpassword'
import Wishlist from './Components/Wishlist/Wishlist'

function App() {

  const { openLogout } = useContext(LogoutContext)
  
  return (
    <div className='relative'>
      <Router>
         {openLogout && <div className='animate__animated animate__slideInRight absolute right-[3rem] shadow-2xl top-[10rem] z-[9999999999999999999999999999999999999999999999999999]'>
            <Logout/>
          </div>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/flashsale" element={<AllFlashSale/>} />
          <Route path="/bestsale" element={<AllBestSellers/>} />
          <Route path="/newsale" element={<AllNewArrivals/>} />
          <Route path="/all" element={<AllPhones/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/chat" element={<Messagechat/>} />
          <Route path="/post" element={<PostAd/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/resetpassword" element={<Resetpassword/>} />
          <Route path="/wishlist" element={<Wishlist/>} />

        </Routes>
      </Router>
    
    </div>
  )
}

export default App
