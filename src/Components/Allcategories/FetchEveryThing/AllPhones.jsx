import React, { useState,useEffect,useContext, useMemo } from 'react'
import Navbar from "../../Navbar/Navbar"
import  { HiLocationMarker} from "react-icons/hi"
import { BsBookmark,BsBookmarkCheckFill } from "react-icons/bs"
import Footer from "../../Footer/Footer"
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosInstance } from "../../../Utils/BaseUrl"
import { LoginContext } from "../../../Context/LoginContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner'

function AllPhones() {
  // const [ isAdded, setIsAdded ] = useState(false)
  const [ posts, setPosts ] = useState([])
  const [ wishlist, setWishlist ] = useState(null)
  const location = useLocation()
  const name = location.state?.toString()
  const { user } = useContext(LoginContext)
  const navigate = useNavigate()
  const [ loading ,setLoading ] = useState(false)


  //get all posts
  useEffect(() => {
    const fetchData = async()=>{
      // setPosts(JSON.parse(localStorage.getItem("getPost")))
      setLoading(true)
      try{
        const res = await axiosInstance.get("/Posts/getallposts")
        // localStorage.setItem("getPost" ,JSON.stringify(res.data))
        setTimeout(()=>{
          setPosts(res?.data)
          setLoading(false)
        },1500)
      }catch(err){
        // setPosts(JSON.parse(localStorage.getItem("getPost")))

      }
        
    }
    fetchData()
  }, [])

   //MEMOIZE
   const datass = useMemo(()=>{ return posts },[posts])



  // filter posts
  const Search = (datass) =>{
    return datass.filter((item)=>(
      (item?.name === name)
      ))
  }

  //empty search
  const length = Search(posts)?.length

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

  //Navigate
  const purchase = async (id)=>{
    navigate("/product/"+id)
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
      {loading && 
        <div className='absolute left-[48%] top-[55rem] '>
          <LoadingSpinner/>
        </div>
         }
      {length === 0 ?
          <div className="w-full bg-[#ebf2f7] text-[#464b4f] h-screen grid justify-center items-center">
            <div className="text-center  text-[3rem] font-bold">
             {!loading && <h1>
                Unfortunately, we did not find anything that matches these criteria.
              </h1>}
            </div>
          </div> 
          :
        <div>
        <div className='grid grid-cols-4 gap-[2rem] py-[2rem] px-[2rem] cursor-pointer'>
        {
        Search(datass)?.map((item)=>(

          <div 
            key={item?.id}
            className='relative flex flex-col gap-[0.7rem] text-[2rem] border-2 px-[2.5rem] py-[1.5rem]'
            aria-label='Save'
          >
              <div className='absolute z-[99999] hover:shadow-inner grid items-center justify-center top-[2rem] right-[2rem] bg-white w-[6rem] h-[6rem] rounded-full shadow-2xl'>
                {wishlist?.find((items) => items === item._id) && 
                <div
                    onClick={()=>removeWishList(item?._id)}
                >
                    <BsBookmarkCheckFill  
                      aria-label="Save"
                      className='text-[3rem] mt-[0.9rem] text-[#8529cd]'
                    />
                  </div>}

                 {wishlist?.find((items) => item._id !== items ) && 
                 <div>
                  <BsBookmark
                    onClick={()=>addWishList(item?._id)}
                      className={wishlist?.find((items) => item._id === items ) ?"hidden text-[3rem] text-[#8529cd]" : "block text-[3rem] text-[#8529cd]"}
                   />
                  </div>}

                  {wishlist?.length === 0 && 
                 <div>
                  <BsBookmark
                      onClick={()=>addWishList(item?._id)}
                      className={wishlist?.find((items) => item._id === items ) ?"hidden text-[3rem] text-[#8529cd]" : "block text-[3rem] text-[#8529cd]"}
                   />
                  </div>}
                </div>

            <LazyLoadImage
              effect='blur'
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
              <p>
                {item?.description?.slice(0,40)}
              </p>
            <div className='flex gap-[4rem] items-center '>
              <p className='line-through decoration-4 decoration-[#8142bb] text-[#6c8ea0]'>
                {"$" + item?.initialPrice}
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
                disabled={item?.soldOut}
                onClick={()=>purchase(item?._id)}
                className={item?.soldOut ?"bg-[#fce9e9] h-[6rem] font-bold rounded-md text-[#ef4444] hover:cursor-[not-allowed]":"bg-[#8529cd] h-[6rem] rounded-md text-[#fff] hover:bg-[#64179e]"}
              >
                {item?.soldOut ? "Sold out" : "Purchase"}
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

