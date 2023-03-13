import React , { useContext,useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'


function MyPostAds() {
    const [ data, setData ] = useState(null)

    const { user } = useContext(LoginContext)
    const username = user?.username

    const navigate = useNavigate()

    //fetch wishlist items
    useEffect(()=>{
        const fetchData = async() =>{
            // setData(JSON.parse(localStorage.getItem("fetchWishItems")))
            try{
                const res = await axiosInstance.get(`/Posts/getpost?QUERY=${username}`)
                // localStorage.setItem("fetchWishItems" ,JSON.stringify(res.data))
                setData(res.data)

            }catch(err){
                // setData(JSON.parse(localStorage.getItem("fetchWishItems")))

            }
        }
        fetchData()
    },[username])

    //DELETE POST
    const handleDelete = async(id)=>{
        try{
            await axiosInstance.put(`/Posts/delete/${id}` , {username: username})
            setData(data?.filter((item) => item?._id !== id))
        }catch(err){}
    }


    // REDIRECT TO EDIT PAGE
    const handleEdit = async (id) =>{
        navigate("/editad" , {state: id})
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
                    <h1>My ADs   😊💚   ( {" " +data?.length} )</h1>
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
                    key={item?._id} 
                    className='relative flex border-b-2 border-[#d8e5ee] items-center gap-[2.6rem] flex-[1] p-[3rem] hover:bg-[#f6f9fc]'

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
                    <p className='font-[599]'>                
                        {description[0]?.substr(0, 60)}
                    </p>
                    <p className='font-extrabold text-[#00b53f] text-[2.3rem]'>{"KSH" + " " + item?.price}</p>
                    <p className='text-[#6c8ea0] line-through'>{"KSH" + " " + item?.initialPrice}</p>
                    <span className='text-[#6c8ea0]'>{item?.location}</span>
                </div>
               
                </div>
                <div className='flex flex-col gap-[2rem] right-[2rem] bottom-[2rem] absolute'>
                    <div className='rounded-lg  text-[#262930] w-[10rem] h-[5rem] '>
                        <button 
                            onClick={()=>handleDelete(item?._id)}
                            className='bg-[#f0c2c2] rounded-lg  w-[10rem] h-[5rem]'
                        >
                            Delete
                        </button>
                    </div>
                    <button 
                        onClick={()=>handleEdit(item?._id)}
                        className='border-[#00b53f] rounded-lg w-[10rem] h-[5rem] bg-[#00b53f] text-[white]'
                    >
                            Edit
                    </button>
                </div>
            </div>))}
        </div>
      <Footer/>
    </div>
  )
}

export default MyPostAds
