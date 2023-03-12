import React, { useEffect, useState } from 'react'
import Navbar from "../../Navbar/Navbar"
// import { datas } from '../../../dummyData/DummyData'
import  { HiLocationMarker} from "react-icons/hi"
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
import Footer from "../../Footer/Footer"
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../Utils/BaseUrl'

function Allcategories() {
  const [ isAdded, setIsAdded ] = useState(false)
  const [ data, setData ] = useState(null)
  const datas = data

  const navigate = useNavigate()

  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get("/Posts/getallposts")
        setData(res?.data)
      }catch(err){}

    }
    fetchData()
  },[])
  
  const handleClick = async (id)=>{
    navigate(`/product/${id}`)
  }

   //Trim description to first 15 letters
   let description = data && data?.map((item) => item?.description)
 
   function getRemainingTime() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const remainingTime = endOfDay - now;
    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
    return remainingHours;
  }
  
  setInterval(() => {
    const remainingHours = getRemainingTime();
    // update the timer on the server
    console.log(remainingHours)
  }, 1000);

  
  return (
    <div className='relative w-full min-h-screen flex flex-col gap-[3rem]'>
        <div className='sticky top-0 z-[99999999999999999999999]'>
          <Navbar/>
        </div>
      <div>
          <div className='w-full grid items-center justify-start px-[2rem]  h-[8rem]  text-[white] text-[2rem] bg-[#e61601]'>
                <h1  className='text-[2.4rem]'>
                  Flash sales
                </h1>
          </div>
        <div className='text-[2rem] px-[5rem] py-[2rem] text-[#75757a]'>
          <p>
            Time Left: 13h : 32m : 50s
          </p>
        </div>
        <div className='grid grid-cols-4 gap-[2rem] py-[2rem] px-[2rem] cursor-pointer'>
        {datas?.map((item)=>(

          <div 
            key={item?.id}
            className='relative flex flex-col gap-[0.7rem] text-[2rem] border-2 px-[2.5rem] py-[1.5rem]'
            aria-label='Save'

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
                {item?.name}
              </p>
              <p className='text-[#6c8ea0] w-[30rem] text-[1.5rem] font-[500]'>
                {description[0]?.substr(0, 80)}
              </p>
              <span className='text-[#282828] font-extrabold text-[3rem]'>
                {"$" + item?.price}
              </span>
            <div className='flex gap-[4rem] items-center '>
              <p className='line-through decoration-4 decoration-[#8529cd] text-[#6c8ea0]'>
                {"$" + item?.from}
              </p>
              <span className='bg-[#fef3e9] rounded-lg text-[#f68b1e] text-[1.6rem] py-[0.5rem] px-[1.1rem] font-extrabold'>
                {"-" + Number((item?.initialPrice - item?.price)/item?.initialPrice * (100) ).toFixed(2) + "%"}
              </span>
            </div>
            <div className='flex gap-[0.5rem] items-center text-[1.5rem] font-[600] text-[#6c8ea0] '>
              <HiLocationMarker className=""/>
              <p>{item?.location}</p>
            </div>
              
              <button 
                onClick={()=>handleClick(item._id)}
                className={item?.itemsleft === 0 ?"bg-[#fce9e9] h-[6rem] font-bold rounded-md text-[#ef4444] hover:cursor-[not-allowed]":"bg-[#8529cd] h-[6rem] rounded-md text-[#fff] hover:bg-[#64179e]"}
              >
                {item?.itemsleft === 0 ? "Sold out" : "Purchase"}
              </button>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
          <div className='w-full'>
            <Footer/>
          </div>
    </div>
  )
}

export default Allcategories
