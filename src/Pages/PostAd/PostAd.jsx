import axios from 'axios'
import React, { useContext, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import Navbar from '../../Components/Navbar/Navbar'
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Footer from "../../Components/Footer/Footer"

function PostAd() {
    const [ name , setName ] = useState("")
    const [ features , setFeatures ] = useState("")
    const [ description , setDescription ] = useState("")
    const [ price , setPrice ] = useState("")
    const [ initialPrice , setInitialPrice ] = useState("")
    const [ images , setImages ] = useState("")
    const [ location , setLocation ] = useState("")
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState(false)

    
    const navigate = useNavigate()

    //SELLER PHONENUMBER
    const { user } = useContext(LoginContext)
    const phonenumber = user?.phonenumber
    const username = user?.username


    //POST AD
    const handleClick = async (e) =>{
        e.preventDefault()
        setLoading(true)
        if(
            name.length < 1 || 
            features.length < 1 ||
            price.length < 1 ||
            description.length < 1 ||
            initialPrice.length < 1 ||
            location.length < 1 ||
            images.length < 1 
        ){
            setError(true)
            setLoading(false)
        }else{
            try{
                //CLOUDINARY
                const data  = new FormData()
                data.append("file", images)
                data.append("upload_preset", "wandia")
                const res = await axios.post("https://api.cloudinary.com/v1_1/wandia/image/upload" , data)
                const imageUpload = res?.data.url

                //post to database
                await axiosInstance.post("/Posts/post" , {
                            image:imageUpload,
                            location ,
                            name,
                            phonenumber, 
                            features,
                            description,
                            price,
                            initialPrice,
                            username
                        })
                toast.success("Successfully updated")
                setLoading(false)
                setTimeout(()=>{
                    // navigate("/")
                },3000)
                    
            }catch(err){
                setLoading(false)
                toast.warn("Check internet connection")
            }
        }
    }

   



  return (
    <div className='relative w-full flex shadow-2xl flex-col gap-[2rem] min-h-screen bg-[#ebf2f7]'>
            <div className='sticky top-0 z-[99999999]'>
                <Navbar/>
            </div>

            <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

            <div className='w-[70%] flex flex-col gap-[5rem] self-center px-[5rem] py-[5rem] bg-[white]'>
                <div className='w-full flex items-center justify-between border-b-2'>
                    <h1 className='text-[4rem] font-extrabold'>Post ad</h1>
                    <span className='text-[#fc2533] cursor-pointer text-[2rem]'>Clear</span>
                </div>
            <div className='flex flex-col gap-[4rem]'>
                {error && name.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Phonename is required</p> : ""}
                {error && features.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Features is required</p> : ""}
               {error && price.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Price is required</p> : ""}
                {error && initialPrice.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>InitialPrice is required</p> : ""}
               {error && description.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Description is required</p> : ""}
                {error && location.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Location is required</p> : ""}
                {error && images.length< 1 ? <p className='self-center text-[#ef4444] text-[2rem]'>Image is required</p> : ""}

                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Phone name</label>
                        <input
                            onChange={(e)=>setName(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='Techno'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Main Features</label>
                        <input
                                onChange={(e)=>setFeatures(e.target.value)}
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="text"
                                placeholder='Ram , Rom , Camera'
                        />
                    </div>
                </div>

                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                   <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Price</label>
                        <input
                                onChange={(e)=>setPrice(e.target.value)}
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="Number"
                                min={1}
                                placeholder='Price after discount'
                        />
                   </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate line-through'>Price</label>
                        <input
                                onChange={(e)=>setInitialPrice(e.target.value)}
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="Number"
                                min={1}
                                placeholder='Initial price before discount'
                        />
                   </div>
                </div>

                
                <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Description</label>
                        <input
                            onChange={(e)=>setDescription(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='More description (CPU ,Battery,Inches,Android)'
                        />
                </div>
                    {/* <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Discount</label>
                        <input
                            onChange={(e)=>(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='Dicount %'
                        />
                    </div> */}

                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Location</label>
                        <input
                            onChange={(e)=>setLocation(e.target.value)}
                            className='bg-[#f6f7f8] text-[1.8rem] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='County , region        ( Eldoret, kimumu)'
                        />
                    </div>
                    {/* <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Items available</label>
                        <input
                            onChange={(e)=>(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="Number"
                            min={1}
                            placeholder='Items on sale'
                        />
                    </div> */}
                </div>
                
                <div className='w-full flex flex-col gap-[3rem] text-[2rem]'>
                    <label className='font-bold text-[2.2rem] text-decorate'>Add photo</label>
                    <div className='w-full flex flex-col gap-[1rem]'>
                        <p className='text-[#6c8ea0] font-bold text-[1.5rem]'>- Add atleast one photo for this category</p>
                    </div>
                    <div className='items-center cursor-pointer flex  gap-[4rem] text-[2rem]'>
                        {!images && <label for="getFile1" className='relative cursor-pointer w-[8rem]  h-[8rem] bg-[#6c8ea0] rounded-full'> 
                            <input
                                onChange={(e)=>setImages(e.target.files[0])} 
                                type="file"
                                id="getFile1"
                                // multiple
                                className='absolute top-[2rem] mr-[0.5rem] hidden'
                            />                       
                            <IoMdAdd className='absolute text-[white] top-[2.2rem] left-[1.9rem] text-[4rem]'/>
                        </label>}
                        {images && <div>
                            <img 
                                className='w-[130px] h-[130px] object-cover shadow-md rounded-full'
                                src={images ? URL.createObjectURL(images) : "https://pbs.twimg.com/media/FrFAnx4WYAESxif?format=jpg&name=small"} 
                                alt="image" 
                            />
                        </div>}
                        <p className='text-[2rem] font-[599] cursor-default'>Each picture must not exceed 5 Mb</p>
                    </div>
                </div>  

                <button 
                    onClick={handleClick}
                    className='w-[60%] mt-[2rem] text-[2.2rem] text-white font-[599] h-[6rem] bg-[#8529cd] self-center'
                >
                    {loading ? "Loading..." : "POST"}
                </button>

                </div> 
            </div>
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default PostAd
