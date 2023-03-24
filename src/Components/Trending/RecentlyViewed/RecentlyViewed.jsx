import React, { useState,useEffect,useContext } from 'react'
import  { MdKeyboardArrowRight} from "react-icons/md"
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
// import { data } from '../../../dummyData/DummyData'
import  { HiLocationMarker} from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../Context/LoginContext'
import { axiosInstance } from '../../../Utils/BaseUrl'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function RecentlyViewed() {
  const [ isAdded, setIsAdded ] = useState(false)
  const [ data, setData ] = useState(null)

  const { user } = useContext(LoginContext)
  const username = user?.username

  const navigate = useNavigate()

  //fetch wishlist items
  useEffect(()=>{
      const fetchData = async() =>{
          // setData(JSON.parse(localStorage.getItem("fetchWishItems")))
          try{
              const res = await axiosInstance.get(`/Posts/wishlistItems?QUERY=${username}`)
              localStorage.setItem("recentAdmired" ,JSON.stringify(res.data))
              setData(res.data)

          }catch(err){
              setData(JSON.parse(localStorage.getItem("recentAdmired")))

          }
      }
      fetchData()
  },[username])


  //FILTER FETCH TO 4 ITEMS
  let limited = data?.filter((val,i)=>i<4)

  const handleClick = async (id)=>{
    navigate(`/product/${id}`)
  }

  //  //Trim description to first 15 letters
  //  let description = productData && productData.map((item) => item?.description)
  //  let maxLength = 50 // maximum number of characters to extract
  //  //trim the string to the maximum length
  //  let trimmedString = description[0]?.substr(0, maxLength);
  //  console.log(trimmedString)
  
  return (
    <div className='w-full min-h-[40rem] bg-white shadow-2xl rounded-2xl'>
        <div className='w-full flex flex-col gap-[0.5rem]'>
            <div className='w-full flex justify-between items-center px-[2rem]  h-[8rem]  text-[#8529cd] text-[2rem] bg-[#fff]'>
                <div>
                  <h1  className='text-[3rem] font-medium '>
                    Recently admired
                  </h1>
                </div>
                
               <Link to="/wishlist">
                <div  className='flex items-center gap-[2rem] cursor-pointer hover:text-[lightgray]'>
                    <p>
                      See all
                    </p>
                    <span>
                      <MdKeyboardArrowRight className='text-[3rem]'/>
                    </span>
                  </div>
               </Link>
            </div>

            <div className='flex items-center justify-between py-[2rem] px-[2rem] cursor-pointer'>
             {
             data?.length < 1 ? 
             <div className='w-full h-[calc(100vh-50vh)] grid items-center justify-center cursor-default'>
                <Link to="/">
                    <h2 className='text-[3rem] font-extrabold text-[#6c8ea0]'>No items found ,Continue searching</h2>
                </Link>
              </div>
             :
             limited?.map((item)=>(

              <div 
                key={item?.id}
                className='relative flex flex-col gap-[0.7rem] text-[2rem] border-2 hover:shadow-2xl hover:border-0 px-[2.5rem] py-[1.5rem]'
                onClick={()=>handleClick(item?._id)}
              >
                <LazyLoadImage
                  effect='blur'
                  className='w-[30rem] h-[25rem] object-cover'
                  src={item?.image}
                  alt="phonesfarm phone"
                />
                  <p className='font-bold text-[#007185]'>
                    {item?.name}
                  </p>
                  {/* <p className='text-[#6c8ea0] w-[30rem] text-[1.5rem] font-[500]'>
                    {item?.description}
                  </p> */}
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

export default RecentlyViewed


