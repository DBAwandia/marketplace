import React, { useContext,useState,useEffect } from 'react'
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
  const [ localStorageSearch, setLocalSorageSearch ] = useState("Nokia")
  

  //start chat
  const navigateToChat = ()=>{
    navigate("/chat")
  }

  //post ad || advertise
  const postAd = ()=>{
    navigate("/post")
  }

  useEffect(() => {
    const searchs = localStorage.getItem("search") && localStorage.getItem("search") ? localStorage.getItem("search") : "Nokia"
    setLocalSorageSearch(searchs)
  }, [search])

  //SEARCH ITEMS
  const handleSubmit = async(e) =>{
    e.preventDefault()
    localStorage.setItem("search" , search)
    navigate("/search" , { state: search })

  }

  return (
    <div className='flex items-center justify-between w-full h-[12rem] bg-[#8529cd] px-[3rem] text-[#fff] shadow-xl'>

      <div className='flex items-center text-[2.8rem] text-decorate font-bold tracking-[3px] cursor-pointer'
        onClick={()=>{
          navigate("/")
        }}
      >
        <h1>PHONE</h1>
        <h2>PLACE</h2>
      </div>
      <div className='relative w-[40%] bg-red-900 h-[5.3rem]'>
        <input 
            className='w-full h-full rounded-lg text-[2rem] px-[4rem] text-[gray]'
            id="submit"
            type="text" 
            placeholder={localStorageSearch && localStorageSearch ? `${localStorageSearch}` : "Search phone..."}
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
        <div className='flex items-center text-[2rem] gap-[0.5rem]'>
            <HiOutlineLocationMarker className='text-[3rem]'/>
            <p>Kenya</p>
        </div>
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
