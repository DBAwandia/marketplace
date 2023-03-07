import React, { useState } from 'react'
import  { MdKeyboardArrowRight} from "react-icons/md"
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
import { data } from '../../../dummyData/DummyData'
import  { HiLocationMarker} from "react-icons/hi"


function RecentlyViewed() {
  const [ isAdded, setIsAdded ] = useState(false)
  const handleClick = async ()=>{
    navigate("/product"+"/4")
  }
  
  
  return (
    <div className='w-full min-h-[40rem] bg-white shadow-2xl rounded-2xl'>
        <div className='w-full flex flex-col gap-[0.5rem]'>
            <div className='w-full flex justify-between items-center px-[2rem]  h-[8rem]  text-[#8529cd] text-[2rem] bg-[#fff]'>
                <div>
                  <h1  className='text-[3rem] font-medium '>
                    Recently viewed
                  </h1>
                </div>
                
                <div  className='flex items-center gap-[2rem] cursor-pointer hover:text-[lightgray]'>
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
                className='relative flex flex-col gap-[0.7rem] text-[2rem] border-2 hover:shadow-2xl hover:border-0 px-[2.5rem] py-[1.5rem]'
                onClick={handleClick}
              >
                 <div className='absolute hover:shadow-inner grid items-center justify-center top-[2rem] right-[2rem] bg-white w-[6rem] h-[6rem] rounded-full shadow-2xl'>
                {!isAdded && <div>
                    <BsBookmark 
                      aria-label="Save"
                      className='text-[3rem] text-[#8529cd]'
                    />
                  </div>}
                  {isAdded && <div>
                  <BsBookmarkCheckFill
                      className='text-[3rem] text-[#8529cd]'
                   />
                  </div>}
                </div>
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

export default RecentlyViewed


