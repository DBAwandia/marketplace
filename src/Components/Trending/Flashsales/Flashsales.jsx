import React, { useState,useEffect } from 'react'
import  { ImPriceTag } from "react-icons/im"
import  { MdKeyboardArrowRight} from "react-icons/md"
import  { HiLocationMarker} from "react-icons/hi"
// import { data } from '../../../dummyData/DummyData'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../Utils/BaseUrl'

function Flashsales() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [ posts, setPosts ] = useState(null)

  const navigate = useNavigate()

  //get all posts
  useEffect(() => {
    const fetchData = async()=>{
      // setPosts(JSON.parse(localStorage.getItem("getPost")))
      try{
        const res = await axiosInstance.get("/Posts/getallposts")
        // localStorage.setItem("getPost" ,JSON.stringify(res.data))
        setPosts(res.data)
      }catch(err){
        // setPosts(JSON.parse(localStorage.getItem("getPost")))

      }
        
    }
    fetchData()
  }, [])

  let description = posts && posts.map((item) => item?.description)

  const handleClick = async (id)=>{
    navigate("/product/" +id)
  }

   //TIMER
   useEffect(() => {
    // Get the start time from localStorage
        const storedStartTime = localStorage.getItem("timerStartTime");

        // If the start time exists in localStorage, use it to calculate the remaining time
        if (storedStartTime) {
          const startTime = parseInt(storedStartTime, 10);
          const currentTime = new Date().getTime() / 1000;
          const elapsedTime = currentTime - startTime;
          const newRemainingTime = Math.max(0, 24 * 60 * 60 - elapsedTime);
          setRemainingTime(newRemainingTime);
        } else {
          // Otherwise, set the start time to the current time
          const startTime = new Date().getTime() / 1000;
          localStorage.setItem("timerStartTime", startTime.toString());
          setRemainingTime(24 * 60 * 60);
        }

        // Define the function to update the timer
        function updateTimer() {
          // Get the current time
          const currentTime = new Date().getTime() / 1000;

          // Calculate the elapsed time in seconds
          const startTime = parseFloat(localStorage.getItem("timerStartTime"));
          const elapsedTime = currentTime - startTime;

          // Calculate the remaining time in seconds
          const newRemainingTime = Math.max(0, 24 * 60 * 60 - elapsedTime);

          // Update the remaining time
          setRemainingTime(newRemainingTime);
        }

        // Update the timer every second
        const timerInterval = setInterval(updateTimer, 1000);

        // Clean up the timer interval on unmount
        return () => clearInterval(timerInterval);
    }, []);

    // Convert the remaining time to hours, minutes, and seconds
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);
  

  //FILTER FETCH TO 4 ITEMS
  let limited = posts?.filter((val,i)=>i<4)

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
                <div className='text-[2rem] flex items-center gap-[2rem] px-[5rem] py-[2rem] text-[#fcfcfc]'>
                  <span>Time Left:</span>
                  <p className='font-bold text-[2.3rem]'>
                    {hours} : {minutes} : {seconds} 
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
             {limited?.map((item)=>(

              <div 
                key={item?._id}
                className='flex relative flex-col gap-[0.7rem] text-[2rem] border-2 hover:shadow-2xl hover:border-0 px-[2.5rem] py-[1.5rem]'
                aria-label='Save'
                onClick={item?.soldOut ?()=>{
                                     navigate("/flashsale")
                                    } 
                                    : 
                                    ()=>handleClick(item?._id) 
                              }
              >
                {item?.soldOut && <div className='border-2 px-[1.5rem] absolute text-[2.3rem] rounded-lg font-bold bottom-[1.5rem] font-[ "Noto Sans"] right-[2.5rem] text-[#ef4444]'>
                  <h2>Sold Out</h2>
                </div>}

                <img
                  className='w-[30rem] h-[25rem] object-cover'
                  src={item?.image}
                  alt="phonesfarm phone"
                />
                  <p className='font-bold text-[#007185]'>
                    {item?.name}
                  </p>
                  <p className='text-[#6c8ea0] w-[30rem] text-[1.5rem] font-[500]'>
                    {description[0]?.substr(0, 60)}
                  </p>
                  <span className='text-[#282828] font-extrabold text-[3rem]'>
                    {"$" + item?.price}
                  </span>
                <div className='flex gap-[4rem] items-center '>
                  <p className='line-through decoration-4 decoration-[#8529cd] text-[#6c8ea0]'>
                    {"$" + item?.initialPrice}
                  </p>
                  <span className='bg-[#fef3e9] rounded-lg text-[#f68b1e] text-[1.6rem] py-[0.5rem] px-[1.1rem] font-extrabold'>
                    {item?.percentage}
                  </span>
                </div>
                <div className='flex gap-[0.5rem] items-center text-[1.5rem] font-[600] text-[#6c8ea0] '>
                  <HiLocationMarker className=""/>
                  <p>{item?.location}</p>
                </div>
                 
              </div>
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default Flashsales
