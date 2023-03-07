import React, { useEffect, useRef } from 'react'
import { VscWarning } from 'react-icons/vsc'
import { BiCheckDouble } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { GrGallery } from 'react-icons/gr'
import { IoMdSend } from 'react-icons/io'


function TextChat() {
  const scrollRef = useRef()
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(()=>{
    scrollToBottom()
  },[])
  return (
    <div className=' flex flex-col gap-[2rem] text-[2rem]'>

      {/* HEADER WARNING */}
      <div className='text-center text-[#6c8ea0] border-2 border-[#6c8ea0] w-[50%] self-center py-[1.2rem] rounded-full'>
        <div className='flex items-center gap-[1rem] pl-[4.8rem]'>
          <VscWarning className='text-[2.6rem]'/>
          <h1>Do not pay in advance, including for delivery</h1>
        </div>
      </div>

      {/* TIMESTAMP per 24H */}
      <p className='text-center text-[#515151]'>March, 2 2023</p>

      {/* TEXT MESSAGE */}
        <div className='relative p-[2rem] flex flex-col gap-[2rem]' ref={scrollRef}>

        <div className='relative text-[#536471] text-start shadow-lg rounded-[60px] bg-[#fff] mr-auto min-w-[15%]  max-w-[70%] px-[2rem] py-[1rem] '>
            <p className='px-[1rem] pb-[2rem]'>HiHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi too</p>
          <div className="absolute text-[#9a9898] right-[2.5rem] bottom-[0.5rem] flex items-center gap-[0.6rem] text-[1.4rem]">
            <span>17:08</span>
            <BiCheckDouble className='text-[2.5rem]'/>
          </div>
        </div>
        <div className='relative text-[#536471]  rounded-[60px] bg-[#d9fec2] text-start shadow-lg ml-auto min-w-[15%] max-w-[70%] px-[2rem] py-[1rem]'>
          <p  className='px-[1rem] pb-[2rem]'>Hi tooHiHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi to</p>
          <div className="absolute right-[2.5rem] bottom-[0.5rem] text-[#9a9898] flex items-center gap-[0.6rem] text-[1.4rem]">
            <span>17:08</span>
            <BiCheckDouble className='text-[2.5rem]'/>
          </div>
        </div>
        <div className='relative text-[#536471]  rounded-[60px] bg-[#d9fec2] text-start shadow-lg ml-auto min-w-[15%] max-w-[70%] px-[2rem] py-[1rem]'>
          <p  className='px-[1rem] pb-[2rem]'>Hi </p>
          <div className="absolute right-[2.5rem] bottom-[0.5rem] text-[#9a9898] flex items-center gap-[0.6rem] text-[1.4rem]">
            <span>17:08</span>
            <BiCheckDouble className='text-[2.5rem]'/>
          </div>
        </div>
        
        <div className='relative text-[#536471] text-start shadow-lg rounded-[60px] bg-[#fff] mr-auto min-w-[15%]  max-w-[70%] px-[2rem] py-[1rem] '>
            <p className='px-[1rem] pb-[2rem]'>HiHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi tooHi too</p>
          <div className="absolute text-[#9a9898] right-[2.5rem] bottom-[0.5rem] flex items-center gap-[0.6rem] text-[1.4rem]">
            <span>17:08</span>
            <BiCheckDouble className='text-[2.5rem]'/>
          </div>
        </div>
       
       
      </div>
      <div className=' mt-[10rem]'>
        <div className='w-[70%] fixed shadow-2xl  bottom-0 bg-[#fff] text-[#536471] h-[10rem]'>
        <div className='flex items-center px-[3rem] py-[2rem] justify-between text-[3rem]'>
          <div className='cursor-pointer text-[#536471]'>
            <BsEmojiSmile/>
          </div>
          <div>
            <input
            className='bg-[#edeff1] rounded-md pl-[4rem] text-[2rem] w-[70rem] h-[6rem]'
              type="text"
              placeholder='Write your message here'
            />
          </div>
          <div className='flex items-center cursor-pointer gap-[4rem]'>
            <GrGallery className='text-[#536471]'/>
            <IoMdSend className='text-[3.5rem] text-[#536471]'/>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default TextChat
