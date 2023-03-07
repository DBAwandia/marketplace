import React from 'react'
import { HiFlag } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { BsFillFlagFill } from 'react-icons/bs'
import TextChat from './TextChat'

const data =[
  {
      image: "https://www.deccanherald.com/sites/dh/files/articleimages/2023/01/17/xrn125g-cov-sho-sel-1-1178221-1673944996.jpg",
      name: "Wandia",
      product: "Samsung",
      text:"lorem ipsum",
      price: 7685
  }
]
function Chat({setChatIsactive}) {
  return (
    <div className='w-full flex flex-col gap-[3rem]'>
      {data.map((item)=>(
      <div className='flex text-[2rem] items-center justify-between shadow-md bg-[#fff] py-[0.5rem] px-[4rem]'>
        <div className='flex items-center gap-[3.5rem]'>
          <img 
            className='w-[100px] h-[100px] rounded-full object-cover '
            src={item?.image} 
            alt="phone image"
          />
          <div className='flex flex-col gap-[0.5rem]'>
            <p className='font-bold'>{item?.product}</p>
            <span className='text-[#00b53f] font-semibold'>{"$" + item?.price}</span>
          </div>
        </div>
        <div>
          <p className='font-[590]'>{item?.name}</p>
        </div>
        <div className='flex cursor-pointer hover:text-[#fea03c] text-[2.6rem] items-center gap-[7rem] '>
          <BsFillFlagFill className='text-[#ef4444]'/>
          <GrClose onClick={()=>setChatIsactive(false)}/>
        </div>
      </div>))}
      <div>
        <TextChat/>
      </div>
    </div>
  )
}

export default Chat
