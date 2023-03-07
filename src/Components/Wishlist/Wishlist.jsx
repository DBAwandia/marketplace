import React from 'react'
import { data } from '../../dummyData/DummyData'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


function Wishlist() {
  return (
    <div className='relative w-full min-h-screen bg-[#ebf2f7]'>
        <div className='sticky top-0 z-[9999999999999999]'>
            <Navbar/>
        </div>
        <div className='min-h-0 m-auto w-[60%] mt-[5rem] mb-[5rem] pt-[3rem] flex flex-col gap-[3rem] items-center text-[2rem] bg-[#ffffff] border-2 rounded-2xl shadow-2xl'>
                <div className='w-full text-center py-[2rem] text-[3rem]  font-bold text-[black]  border-b-2 border-[#dae2e7]'>
                    <h1>My wishlist items  😊💚</h1>
                </div>
           {data?.map((item)=>( 
           <div className='relative flex border-b-2 border-[#ebf2f7] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'>
                <div className='flex-[0.4]'>
                    <img 
                        className='w-[1200px] h-[355px] object-cover'
                        src={item.image} 
                        alt='image phoneplace' 
                    />
                </div>
                <div className='flex flex-col gap-[2rem] flex-[0.6]'>
                    <h2 className='font-bold'>{item?.Title}</h2>
                    <p className='font-[899]'>{item?.description}</p>
                    <p className='font-extrabold text-[#00b53f] text-[2.3rem]'>{"KSH" + " " + item?.price}</p>
                    <p className='text-[#6c8ea0] line-through'>{"KSH" + " " + item?.from}</p>
                    <span className='text-[#6c8ea0]'>{item?.location}</span>
                </div>
                <div className='flex flex-col gap-[2rem] right-[2rem] bottom-[2rem] absolute'>
                    <div className='border-2 rounded-lg border-[#00b53f] hover:border-[#1bd462] w-[15.3rem] h-[6rem] '>
                        <button className='border-[#00b53f] w-[15.3rem] h-[6rem]'>
                            Chat
                        </button>
                    </div>
                    <button className='border-[#00b53f] rounded-lg w-[15.3rem] h-[6rem] bg-[#00b53f] text-[white]'>
                        Contact
                    </button>
                </div>
            </div>))}
        </div>
      <Footer/>
    </div>
  )
}

export default Wishlist
