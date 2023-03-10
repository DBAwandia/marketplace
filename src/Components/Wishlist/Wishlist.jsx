import React , { useContext,useState,useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import { useNavigate } from 'react-router-dom'


function Wishlist() {
    const [ data, setData ] = useState(null)

    const { user } = useContext(LoginContext)
    const username = user?.username

    const navigate = useNavigate()

    //fetch wishlist items
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await axiosInstance.get(`/Posts/wishlistItems?QUERY=${username}`)
                setData(res.data)

            }catch(err){

            }
        }
        fetchData()
    },[username])

    //Navigate to product page
    const handleClick = async (id) =>{
        navigate(`/product/${id}`)
    }


    //Trim description to first 15 letters
    // let description = data && data?.map((item) => item?.description)
    // let maxLength = 50 // maximum number of characters to extract
    // // //trim the string to the maximum length
    // let trimmedString = description[0]?.substr(0, maxLength);
    // console.log(trimmedString)

  return (
    <div className='relative w-full min-h-screen bg-[#ebf2f7]'>
        <div className='sticky top-0 z-[9999999999999999]'>
            <Navbar/>
        </div>
        <div className='min-h-0 m-auto w-[60%] mt-[5rem] mb-[5rem] pt-[3rem] flex flex-col gap-[3rem] items-center text-[2rem] bg-[#ffffff] border-2 rounded-2xl shadow-2xl'>
                <div className='w-full text-center py-[2rem] text-[3rem]  font-bold text-[black]  border-b-2 border-[#dae2e7]'>
                    <h1>My wishlist items  😊💚</h1>
                </div>
           {data?.map((item)=>( 
            <div 
                    key={item._id} 
                    className='relative flex border-b-2 border-[#ebf2f7] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'

                >
                <div 
                 onClick={()=>handleClick(item?._id)}
                 className='relative flex cursor-default  border-[#ebf2f7] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'
                >
                <div className='flex-[0.4]'>
                    <img 
                        className='w-[1200px] h-[355px] object-cover'
                        src={item?.image} 
                        alt='image phoneplace' 
                    />
                </div>
                <div className='flex flex-col gap-[2rem] flex-[0.6]'>
                    <h2 className='font-bold'>{item?.name}</h2>
                    {/* <p className='font-[599]'>{item?.description}</p> */}
                    <p className='font-extrabold text-[#00b53f] text-[2.3rem]'>{"KSH" + " " + item?.price}</p>
                    <p className='text-[#6c8ea0] line-through'>{"KSH" + " " + item?.initialPrice}</p>
                    <span className='text-[#6c8ea0]'>{item?.location}</span>
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
