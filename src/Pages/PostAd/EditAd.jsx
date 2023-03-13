import React, { useContext, useState,useEffect } from 'react'
import axios from 'axios'
import { IoMdAdd } from 'react-icons/io'
import Navbar from '../../Components/Navbar/Navbar'
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from "../../Components/Footer/Footer"

function EditAd() {
    const [ names , setName ] = useState("")
    const [ featuress , setFeatures ] = useState("")
    const [ descriptions , setDescription ] = useState("")
    const [ prices , setPrice ] = useState("")
    const [ initialPrices , setInitialPrice ] = useState("")
    const [ imagess , setImages ] = useState("")
    const [ locations , setLocation ] = useState("")
    const [ loading , setLoading ] = useState(false)
    const [ imageFiles , setImageFile ] = useState(null)
    const [ data , setData ] = useState(null)
    const datas = [ data ]

    
    const navigate = useNavigate()

    //SELLER PHONENUMBER
    const { user } = useContext(LoginContext)
    const phonenumber = user?.phonenumber
    const username = user?.username

    const locationss = useLocation()
    const postID = locationss.state

    //FETCH POST DETAILS
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await axiosInstance.get(`/Posts/getPost/${postID}`)
                setData(res.data)
            }catch(err){}
        }
        fetchData()
    }, [])

    console.log(data)

    //Edit POST AD
    const handleClick = async (e) =>{
        e.preventDefault()
        setLoading(true)
            try{
                //CLOUDINARY
                const data  = new FormData()
                if(imagess.length !== 0){
                    data.append("file", imagess)
                    data.append("upload_preset", "wandia")
                    const res = await axios.post("https://api.cloudinary.com/v1_1/wandia/image/upload" , data)
                    const imageUpload = res?.data.url
                    setImageFile(imageUpload)
                }
                //post to database
                await axiosInstance.put(`/Posts/edit/${postID}` , {
                            image:imageFiles,
                            location : locations ,
                            name: names,
                            features: featuress,
                            description: descriptions,
                            price: prices,
                            initialPrice: initialPrices,
                        })
                toast.success("Successfully updated")
                setLoading(false)
                setTimeout(()=>{
                    navigate("/")
                },3000)
                    
            }catch(err){
                setLoading(false)
                toast.warn("Check internet connection")
            }
    }

   



  return (
    <div className='relative w-full flex shadow-2xl flex-col gap-[2rem] min-h-screen bg-[#ebf2f7]'>
            <div className='sticky top-0 z-[99999999999999999999999]'>
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

           {datas?.map((item)=>( 
            <div key={item?._id} className='w-[70%] flex flex-col gap-[5rem] self-center px-[5rem] py-[5rem] bg-[white]'>
                    <div className='w-full flex items-center justify-between border-b-2'>
                        <h1 className='text-[4rem] font-extrabold'>Edit your ad</h1>
                        <span className='text-[#fc2533] cursor-pointer text-[2rem]'>Back</span>
                    </div>
              <div className='flex flex-col gap-[4rem]'>
                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Phone name</label>
                        <input
                            onChange={(e)=>setName(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder={item?.name}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Main Features</label>
                        <input
                                onChange={(e)=>setFeatures(e.target.value)}
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="text"
                                placeholder={item?.features}
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
                                placeholder={item?.price}
                        />
                   </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate line-through'>Price</label>
                        <input
                                onChange={(e)=>setInitialPrice(e.target.value)}
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="Number"
                                min={1}
                                placeholder={item?.initialPrice}
                        />
                   </div>
                </div>

                
                <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Description</label>
                        <input
                            onChange={(e)=>setDescription(e.target.value)}
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder={item?.description}
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
                            placeholder={item?.location}
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
                        {!imagess && <label for="getFile1" className='relative cursor-pointer w-[8rem]  h-[8rem] bg-[#6c8ea0] rounded-full'> 
                            <input
                                onChange={(e)=>setImages(e.target.files[0])} 
                                type="file"
                                id="getFile1"
                                // multiple
                                className='absolute top-[2rem] mr-[0.5rem] hidden'
                            />                       
                            <IoMdAdd className='absolute text-[white] top-[2.2rem] left-[1.9rem] text-[4rem]'/>
                        </label>}
                        {imagess && <div>
                            <img 
                                className='w-[130px] h-[130px] object-cover shadow-md rounded-full'
                                src={imagess ? URL.createObjectURL(imagess) : "https://pbs.twimg.com/media/FrFAnx4WYAESxif?format=jpg&name=small"} 
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
            ))}
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default EditAd
