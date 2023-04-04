import React, { useContext,useState } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsBookmarkFill } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { RiAdvertisementFill } from "react-icons/ri"
import { BiMessageDetail, BiSearchAlt2 } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { LogoutContext } from '../../Context/LogoutContext'


function Navbar() {
  const navigate = useNavigate()
  const { dispatch } = useContext(LogoutContext)
  const [ search, setSearch ] = useState(null)
  

  //start chat
  const navigateToChat = ()=>{
    navigate("/messages")
  }

  //post ad || advertise
  const postAd = ()=>{
    navigate("/post")
  }


  //SEARCH ITEMS
  const handleSubmit = async(e) =>{
    e.preventDefault()
    localStorage.setItem("search" , search)
    navigate("/search" , { state: search })

  }

  return (
    <div className='flex items-center justify-between w-full h-[12rem] bg-[#8529cd] px-[3rem] text-[#fff] shadow-xl'>

      <div className='flex items-center text-[2.8rem] font-bold cursor-pointer'
        onClick={()=>{
          navigate("/")
        }}
      >
        <img
          className='w-[100px] mr-[-1rem] h-[100px] object-cover'
          src="/images/logo.png"
          alt="phoneplace logo"
        />
        <div className='flex tracking-[8px]  items-center'>
          <h1>HONE</h1>
          <h2>PLACE</h2>
        </div>
      </div>
      <div className='relative w-[35%]  h-[5.3rem]'>
        <input 
            className='w-full h-full rounded-lg text-[2rem] px-[4rem] text-[gray]'
            id="submit"
            type="text" 
            placeholder="Search phone ,region . . ."
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        />
        <div 
          onClick={handleSubmit}
          id="submit"
          className='absolute right-[3rem] text-[3rem] top-[1.3rem] text-[#8529cd] cursor-pointer'
        >
            <BiSearchAlt2/>
        </div>
      </div>
      <div className='flex items-center gap-[3.5rem] cursor-pointer'>
        <a className='decoration-[none]' href='https://www.google.com/maps/@-1.343868,36.8223627,10.16z'>
          <div className='flex items-center text-[2rem] gap-[0.5rem]'>
              <HiOutlineLocationMarker className='text-[3rem]'/>
              <p>Kenya</p>
          </div>
        </a>
        <div 
            onClick={()=>{
              navigate("/wishlist")
            }}
            className='flex items-center text-[2rem] gap-[1rem] hover:text-[#b9b6b6]'
        >
            <BsBookmarkFill className='text-[3rem]'/>
            <p>Wishlist</p>
        </div>
        <div 
          onClick={navigateToChat}
          className='relative flex items-center text-[2rem] gap-[1rem] hover:text-[#b9b6b6]'
        >
            <div className='absolute top-[-0.5rem] right-[10.3rem] shadow-xl z-[9999999999] w-[30px] h-[30px] bg-[#fea03c] rounded-full'></div>
            <BiMessageDetail className='text-[3rem]'/>
            <p>Messages</p>
        </div>
        <div 
          className='flex items-center text-[2rem] gap-[1rem] hover:text-[#b9b6b6]'
          onClick={postAd}
        >
            <p>Post</p>
            <RiAdvertisementFill className='text-[3rem]'/>
        </div>
        <div 
          className='text-[2rem] hover:text-[#b9b6b6]'
          onClick={()=>{dispatch({type:"OPEN"})}}
        >
            <VscAccount className='text-[3rem]'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
