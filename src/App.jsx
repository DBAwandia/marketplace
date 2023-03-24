import React, { useContext, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'animate.css';
import { LogoutContext } from './Context/LogoutContext'
import Home from './Components/Home/Home'
import AllFlashSale from "./Components/Allcategories/AllFlashSale/AllFlashSale"
import AllBestSellers from './Components/Allcategories/AllBestSellers/AllBestSellers'
import AllNewArrivals from './Components/Allcategories/AllNewSale/AllNewArrivals'
import AllPhones from './Components/Allcategories/FetchEveryThing/AllPhones'
import Product from './Components/Productpage/Product'
import PostAd from './Pages/PostAd/PostAd'
import Logout from './Pages/Logout/Logout'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Resetpassword from './Pages/Login/Resetpassword/Resetpassword'
import Wishlist from './Components/Wishlist/Wishlist'
import SearchFilter from './Components/Allcategories/FetchEveryThing/SearchFilter'
import MyPostAds from './Pages/MyPostAds/MyPostAds'
import EditAd from './Pages/PostAd/EditAd';
import Messages from './Messages/Messages';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

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
          <Route path="/search" element={<SearchFilter/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/post" element={<PostAd/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/resetpassword" element={<Resetpassword/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/mypostad" element={<MyPostAds/>} />
          <Route path="/editad" element={<EditAd/>} />
          <Route path="/loading" element={<LoadingSpinner/>} />
          <Route path="/messages" element={<Messages/>} />



        </Routes>
      </Router>
    
    </div>
  )
}

export default App
