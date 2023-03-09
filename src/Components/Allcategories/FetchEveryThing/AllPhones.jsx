import React, { useState,useEffect,useContext } from 'react'
import Navbar from "../../Navbar/Navbar"
// import { datas } from '../../../dummyData/DummyData'
import  { HiLocationMarker} from "react-icons/hi"
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
import Footer from "../../Footer/Footer"
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosInstance } from "../../../Utils/BaseUrl"
import { LogoutContext } from '../../../Context/LogoutContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllPhones() {
  const [ isAdded, setIsAdded ] = useState(false)
  const [ posts, setPosts ] = useState([])
  const location = useLocation()
  const name = location.state.toString()
  const { user } = useContext(LogoutContext)

  //get all posts
  useEffect(() => {
    const fetchData = async()=>{
        const res = await axiosInstance.get("/Posts/getallposts")
        setPosts(res.data)
    }
    fetchData()
  }, [])

  // filter posts
  const Search = (posts) =>{
    return posts.filter((item)=>(
      (item?.name === name)
      ))
  }
  const navigate = useNavigate()

  //empty search
  const length = Search(posts).length

  //remove to wishlist
  const removeWishList = (id)=>{

  }

  //add to wishlist
  const addWishList = async (id)=>{
    try{
     const res = await axiosInstance.put("/Posts/addToWishlist" , {username: user.username , productId: id})
     console.log(res)
      toast.success("Added to wish list 💚")
    }catch(err){}
  }

  const purchase = async (id)=>{
    navigate("/product"+"/4")
  }
  

  return (
    <div className='relative w-full min-h-screen flex flex-col gap-[3rem]'>
       <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      <div className='sticky top-0 z-[99999999999999999999999]'>
        <Navbar/>
      </div>
      {length === 0 ?
          <div className="w-full bg-[#ebf2f7] text-[#464b4f] h-screen grid justify-center items-center">
            <div className="text-center  text-[3rem] font-bold">
              <h1>
                Unfortunately, we did not find anything that matches these criteria.
              </h1>
            </div>
          </div> 
          :
        <div>
        <div className='grid grid-cols-4 gap-[2rem] py-[2rem] px-[2rem] cursor-pointer'>
        {
        Search(posts)?.map((item)=>(

          <div 
            key={item?.id}
            className='relative flex flex-col gap-[0.7rem] text-[2rem] border-2 px-[2.5rem] py-[1.5rem]'
            aria-label='Save'
          >
              <div className='absolute hover:shadow-inner grid items-center justify-center top-[2rem] right-[2rem] bg-white w-[6rem] h-[6rem] rounded-full shadow-2xl'>
                {/* {!isAdded && <div
                    onClick={()=>removeWishList(item?.id)}
                >
                    <BsBookmarkCheckFill  
                      aria-label="Save"
                      className='text-[3rem] text-[#8529cd]'
                    />
                  </div>} */}
                  <div
                   
                  >
                  <BsBookmark
                    onClick={()=>addWishList(item?.id)}
                      className='text-[3rem] text-[#8529cd]'
                   />
                  </div>
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
                {item?.features}
              </p>
              <span className='text-[#282828] font-extrabold text-[3rem]'>
                {"$" + item?.price}
              </span>
            <div className='flex gap-[4rem] items-center '>
              <p className='line-through decoration-4 decoration-[red] text-[#6c8ea0]'>
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
              <p className='text-[gray] font-bold mt-[1rem]'>
                {item?.itemsAvailable + " "} items left
              </p>
              <button 
                onClick={()=>purchase(item?._id)}
                className={item?.itemsAvailable === 0 ?"bg-[#fce9e9] h-[6rem] font-bold rounded-md text-[#ef4444] hover:cursor-[not-allowed]":"bg-[#8529cd] h-[6rem] rounded-md text-[#fff] hover:bg-[#64179e]"}>
                {item?.itemsAvailable === 0 ? "Sold out" : "Purchase"}
              </button>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>}
          <div className='w-full'>
            <Footer/>
          </div>
    </div>
  )
}

export default AllPhones

