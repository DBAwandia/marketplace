import React , { useContext,useState,useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md"


function Wishlist() {
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
                // localStorage.setItem("fetchWishItems" ,JSON.stringify(res.data))
                setData(res.data)

            }catch(err){
                // setData(JSON.parse(localStorage.getItem("fetchWishItems")))

            }
        }
        fetchData()
    },[username])

    // removeWishList
    const removeWishList = async (id) =>{
        try{
            await axiosInstance.put("/Posts/removeFromWishlist", {username: username , productId: id})
            setData(data?.filter((item)=> item._id !== id))
        }catch(err){}
    }


    //Navigate to product page
    const handleClick = async (id) =>{
        navigate(`/product/${id}`)
    }


    let description = data && data?.map((item) => item?.description)


  return (
    <div className='relative w-full min-h-screen bg-[#ebf2f7]'>
        <div className='sticky top-0 z-[9999999999999999]'>
            <Navbar/>
        </div>
        <div className='min-h-0 m-auto w-[60%] mt-[5rem] mb-[5rem] pt-[3rem] flex flex-col gap-[3rem] items-center text-[2rem] bg-[#ffffff] border-2 rounded-2xl shadow-2xl'>
                <div className='w-full text-center py-[2rem] text-[3rem]  font-bold text-[black]  border-b-2 border-[#dae2e7]'>
                    <h1>My wishlist items  😊💚      ( {" " +data?.length} )</h1>
                </div>
           {data?.length < 1 ? 
            <div className='w-full h-[calc(100vh-40vh)] grid items-center justify-center cursor-default'>
                <Link to="/">
                    <h2 className='text-[3rem] font-extrabold text-[#6c8ea0]'>No items found ,Continue searching</h2>
                </Link>
            </div>
            :
            data?.map((item)=>( 
            <div 
                    key={item._id} 
                    className='relative flex border-b-2 border-[#d8e5ee] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'

                >
                <div 
                 className='relative flex cursor-default  border-[#ebf2f7] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'
                >
                <div 
                    onClick={()=>handleClick(item?._id)}
                    className='flex-[0.4]'
                >
                    <img 
                        className='w-[1200px] h-[355px] object-cover'
                        src={item?.image} 
                        alt='image phoneplace' 
                    />
                </div>
                <div className='flex flex-col gap-[2rem] flex-[0.6]'>
                    <h2 className='font-bold'>{item?.name}</h2>
                    <p className='font-[599]'>                
                        {description[0]?.substr(0, 60)}
                    </p>
                    <p className='font-extrabold text-[#00b53f] text-[2.3rem]'>{"KSH" + " " + item?.price}</p>
                    <p className='text-[#6c8ea0] line-through'>{"KSH" + " " + item?.initialPrice}</p>
                    <span className='text-[#6c8ea0]'>{item?.location}</span>
                </div>

                <div 
                    onClick={()=>removeWishList(item?._id)}
                    className='absolute right-[1rem] top-0 cursor-pointer '
                >
                    <MdDelete className='text-[3rem] text-[#acacac] hover:text-[#ff4f4f]'/>
                </div>

                </div>
                <div className='flex flex-col gap-[2rem] right-[2rem] bottom-[2rem] absolute'>
                    <div className='border-2 rounded-lg border-[#00b53f] hover:border-[#1bd462] w-[20rem] h-[6rem] '>
                        <button onClick={()=>{
                            navigate("/chat")
                        }} className='border-[#00b53f] w-[20rem] h-[6rem]'>
                            Chat
                        </button>
                    </div>
                    <button className='border-[#00b53f] rounded-lg w-[20rem] h-[6rem] bg-[#00b53f] text-[white]'>
                        <a href={`tel: 254${item?.phonenumber}`}>
                            Call seller
                        </a>
                    </button>
                </div>
            </div>))}
        </div>
      <Footer/>
    </div>
  )
}

export default Wishlist
