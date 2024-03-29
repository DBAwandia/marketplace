import React, { useEffect, useContext, useState, useMemo } from 'react'
import Navbar from "../../Navbar/Navbar"
// import { datas } from '../../../dummyData/DummyData'
import  { HiLocationMarker} from "react-icons/hi"
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
import Footer from "../../Footer/Footer"
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../Utils/BaseUrl'
import { LoginContext } from '../../../Context/LoginContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'

function Allcategories() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [ data, setData ] = useState(null)
  const [ wishlist, setWishlist ] = useState(null)
  const [ loading ,setLoading ] = useState(false)
  const { user } = useContext(LoginContext)

  const datas = data

  const navigate = useNavigate()

  //get all posts ads
  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true)
      try{
        const res = await axiosInstance.get("/Posts/getallposts")
        setTimeout(()=>{
          setData(res?.data)
          setLoading(false)
        },1000)
      }catch(err){
      }

    }
    fetchData()
  },[])


  //MEMOIZE
  const datass = useMemo(()=>{ return datas },[datas])

   //get Users wishlist
   useEffect(()=>{
    let timer =  setInterval(()=>{
        const getUser = async() =>{
          // setWishlist(JSON.parse(localStorage.getItem("getUWishlistarray")))
          try{
            const res = await axiosInstance.get(`/Users/getUser/${user?._id}`)
            // localStorage.setItem("getUWishlistarray" ,JSON.stringify(res?.data))
            setWishlist(res.data.wishList)
          }catch(err){
            // setWishlist(JSON.parse(localStorage.getItem("getUWishlistarray")))
          }
        }
        getUser()
      },100)
      return ()=> clearInterval(timer)
    },[user])
  
    //remove to wishlist
    const removeWishList = async(id)=>{
        try{
  
              await axiosInstance.put("/Posts/removeFromWishlist" , {username: user.username , productId: id})
            }catch(err){}
        }
  
    //add to wishlist
    const addWishList = async (id)=>{
            try{
  
              await axiosInstance.put("/Posts/addToWishlist" , {username: user.username , productId: id})
            }catch(err){}
    }
  
  // navigate
  const purchase = async (id)=>{
    navigate(`/product/${id}`)

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

  
  return (
    <div className='relative w-full min-h-screen flex flex-col gap-[3rem]'>
        <div className='sticky top-0 z-[99999999999999999999999999999999]'>
          <Navbar/>
        </div>
        {loading && 
        <div className='absolute left-[48%] top-[47.5rem] '>
          <LoadingSpinner/>
        </div>
         }
      <div>
          <div className='w-full grid items-center justify-start px-[2rem]  h-[8rem]  text-[white] text-[2rem] bg-[#e61601]'>
                <h1  className='text-[2.4rem]'>
                  Flash sales
                </h1>
          </div>
        <div className='text-[2rem] flex items-center gap-[2rem] px-[5rem] py-[2rem] text-[#75757a]'>
          <span>Time Left:</span>
          <p className='font-bold text-[2.2rem]'>
            {hours} : {minutes} : {seconds} 
          </p>
        </div>
        <div className='grid grid-cols-4 gap-[2rem] py-[2rem] px-[2rem] cursor-pointer'>
        {datass?.map((item)=>(

          <div 
            key={item?.id}
            className='relative flex flex-col gap-[1.4rem] text-[2rem] border-2 px-[2.5rem] py-[1.5rem]'
            aria-label='Save'

          >
                <div className='absolute z-[9999999] hover:shadow-inner grid items-center justify-center top-[2rem] right-[2rem] bg-white w-[6rem] h-[6rem] rounded-full shadow-2xl'>
                    {wishlist?.find((items) => items === item._id) && 
                    <div
                        onClick={()=>removeWishList(item?._id)}
                    >
                        <BsBookmarkCheckFill  
                          aria-label="Save"
                          className='text-[3rem] mt-[0.8rem] text-[#8529cd]'
                        />
                      </div>}

                    {wishlist?.find((items) => item._id !== items ) && 
                      <div>
                        <BsBookmark
                          onClick={()=>addWishList(item?._id)}
                            className={wishlist?.find((items) => item._id === items ) ?"hidden text-[3rem] text-[#8529cd]" : "block text-[3rem] text-[#8529cd]"}
                        />
                      </div>
                      }

                      {wishlist?.length === 0 && 
                      <div>
                        <BsBookmark
                            onClick={()=>addWishList(item?._id)}
                            className={wishlist?.find((items) => item._id === items ) ?"hidden text-[3rem] text-[#8529cd]" : "block text-[3rem] text-[#8529cd]"}
                        />
                      </div>
                     } 
                </div>

            <LazyLoadImage
              effect='blur'
              className='w-[30rem] z-[4] h-[32rem] object-cover'
              src={item?.image}
              alt="phonesfarm phone"
            />
              <p className='font-bold text-[#007185]'>
                {item?.name}
              </p>
              <p className='text-[#6c8ea0] w-[30rem] text-[1.5rem] font-[500]'>
                {item?.description?.slice(0,38)}
              </p>
              <span className='text-[#282828] font-extrabold text-[3rem]'>
                {"KSh" + " " + Number(item?.price).toLocaleString("en-us")}
              </span>
            <div className='flex gap-[4rem] items-center '>
              <p className='line-through decoration-[0.18rem] text-[#6c8ea0]'>
                {"KSh" + " " + Number(item?.initialPrice).toLocaleString("en-us")}
              </p>
              <span className='bg-[#fef3e9] rounded-lg text-[#f68b1e] text-[1.6rem] py-[0.5rem] px-[1.1rem] font-extrabold'>
                {"-" + Number((item?.initialPrice - item?.price)/item?.initialPrice * (100) ).toFixed(2) + "%"}
              </span>
            </div>
            <div className='flex gap-[0.5rem] items-center text-[1.5rem] font-[600] text-[#6c8ea0] '>
              <HiLocationMarker className="text-[2rem]"/>
              <p>{item?.location}</p>
            </div>
              
              <button 
                disabled={item?.soldOut}
                onClick={()=>purchase(item?._id)}
                className={item?.soldOut?"bg-[#fce9e9] h-[6rem] font-bold rounded-md text-[#ef4444] hover:cursor-[not-allowed]":"bg-[#8529cd] h-[6rem] rounded-md text-[#fff] hover:bg-[#64179e]"}
              >
                {item?.soldOut? "Sold out" : "Purchase"}
              </button>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
          {!loading && 
          <div className='w-full'>
            <Footer/>
          </div>}
    </div>
  )
}

export default Allcategories
