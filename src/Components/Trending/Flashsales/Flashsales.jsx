import React, { useState } from 'react'
import  { ImPriceTag } from "react-icons/im"
import  { MdKeyboardArrowRight} from "react-icons/md"
import  { HiLocationMarker} from "react-icons/hi"
import { data } from '../../../dummyData/DummyData'
import { useNavigate } from 'react-router-dom'

function Flashsales() {
  const [ isAdded, setIsAdded ] = useState(false)
  const navigate = useNavigate()
  const handleClick = async ()=>{
    navigate("/product"+"/4")
  }
  
  return (
    <div className='w-full min-h-[40rem] bg-white shadow-2xl rounded-2xl'>
        <div className='w-full flex flex-col gap-[0.5rem]'>
            <div className='w-full flex justify-between items-center px-[2rem]  h-[8rem]  text-[white] text-[2rem] bg-[#e61601]'>
                <div className='flex items-center gap-[2rem]'>
                  <ImPriceTag className='text-[3rem] text-[#ff9900]'/>
                  <h1  className='text-[3rem] font-bold '>
                    Flash sales
                  </h1>
                </div>
                <div>
                  <p>
                    Time Left: 13h : 32m : 50s
                  </p>
                </div>
                <div  className='flex items-center gap-[2rem] cursor-pointer hover:text-[lightgray]'
                  onClick={()=>{
                    navigate("/flashsale")
                  }}
                >
                  <p>
                    See all
                  </p>
                  <span>
                    <MdKeyboardArrowRight className='text-[3rem]'/>
                  </span>
                </div>
            </div>

            <div className='flex items-center justify-between py-[2rem] px-[2rem] cursor-pointer'>
             {data?.map((item)=>(

              <div 
                key={item?.id}
                className='flex flex-col gap-[0.7rem] text-[2rem] border-2 hover:shadow-2xl hover:border-0 px-[2.5rem] py-[1.5rem]'
                aria-label='Save'
                onClick={handleClick}
              >
                <img
                  className='w-[30rem] h-[25rem] object-cover'
                  src={item?.image}
                  alt="phonesfarm phone"
                />
                  <p className='font-bold text-[#007185]'>
                    {item?.Title}
                  </p>
                  <p className='text-[#6c8ea0] w-[30rem] text-[1.5rem] font-[500]'>
                    {item?.description}
                  </p>
                  <span className='text-[#282828] font-extrabold text-[3rem]'>
                    {"$" + item?.price}
                  </span>
                <div className='flex gap-[4rem] items-center '>
                  <p className='line-through decoration-4 decoration-[#8529cd] text-[#6c8ea0]'>
                    {"$" + item?.from}
                  </p>
                  <span className='bg-[#fef3e9] rounded-lg text-[#f68b1e] text-[1.6rem] py-[0.5rem] px-[1.1rem] font-extrabold'>
                    {item?.percentage}
                  </span>
                </div>
                <div className='flex gap-[0.5rem] items-center text-[1.5rem] font-[600] text-[#6c8ea0] '>
                  <HiLocationMarker className=""/>
                  <p>{item?.location}</p>
                </div>
                  <p className='text-[gray] font-bold mt-[1rem]'>
                    {item?.itemsleft + " "} items left
                  </p>
              </div>
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default Flashsales
