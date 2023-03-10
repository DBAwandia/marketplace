import React, { useContext, useEffect, useState } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import Navbar from '../Navbar/Navbar'
import ProductDetail from './ProductDetail'
import Footer from "../../Components/Footer/Footer"
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../Utils/BaseUrl'
// import { LoginContext } from '../../Context/LoginContext'

function Product() {
    const navigate = useNavigate()
    const [ sellersContact, setSellersContact ] = useState(false)
    const [ sendMessage , setSendMessage ] = useState(false)
    const [ data, setData ] = useState(null)
    const productData = [data]

    //product id
    const location = useLocation()

    //passed as prop at ProductDetails component
    const itemId = location.pathname.split("/")[2]

    // const { user } = useContext(LoginContext)
    // const phonenumber = user?.phonenumber

    //GET POST BY ID
    useEffect(()=>{
      const fetchData = async() =>{
        try{
          const res = await axiosInstance.get(`/Posts/getPost/${itemId}`)
          setData(res.data)
        }catch{}
      }
      fetchData()
    },[itemId])

    //Trim description to first 15 letters
    let description = productData && productData.map((item) => item?.description)
    let maxLength = 50 // maximum number of characters to extract
    //trim the string to the maximum length
    let trimmedString = description[0]?.substr(0, maxLength);
    console.log(trimmedString)
    
    //startchat
    const startMessage = ()=>{
      setSendMessage(true)
    }

    //sendMessage
    const sendTxtMessage = ()=>{
      setSendMessage(false)
      navigate("/chat")

    }

    //Call
    const handleClick = async ()=>{
        setSellersContact(true)
    }

    //requestCall
    const requestCall = async ()=>{
        alert("success 💚")
    }
  return (
    <div className='w-full bg-[#f5f5f5]'>
        <div>
            <Navbar/>
        </div>
    <div className='grid mt-[4rem] items-center justify-center '>
    {productData?.map((item)=>(
    <div 
        key={item?._id}
        className="bg-[white] h-auto px-[2rem] shadow-2xl py-[2rem] pb-[5rem] flex gap-[4rem] flex-[1]"
    >
      <div className='flex-[0.35]'>
        <img 
            className='w-fill h-[70vh] object-cover'
            src={item?.image} 
            alt="phone palace product" 
        />
      </div>

      <div className='flex-[0.65]'>
        <div >
            <div className='flex flex-col gap-[2rem]'>
                  <p className='font-bold text-[#007185] text-[2.5rem]'>
                    {item?.name}
                  </p>
                  <p className='text-[#282828] w-[70rem] font-[555] text-[2.5rem]'>
                    {trimmedString + " "}
                    <span className="text-[1.8rem] text-[#878a8c]">(scrolldown for more details)</span>
                  </p>
                  <span className='text-[#282828] font-extrabold text-[3rem]'>
                    {"$" + Number(item?.price).toFixed(2)}
                  </span>
                <div className='flex gap-[4rem] items-center text-[2rem] font-semibold'>
                  <p className='line-through decoration-4 decoration-[#8529cd] text-[#6c8ea0]'>
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

                    <div className='w-full border-solid rounded-md border-2 font-bold border-[#772ab3]'>
                        <button 
                            className="text-[#64179e]  w-full h-[6rem] rounded-md text-[2rem] hover:font-bold hover:text-[#251135]"
                            onClick={requestCall}
                        >
                            Request callback
                        </button>
                    </div>
                  
                    <a href={`tel:${item?.phonenumber}`}>
                      <button 
                          className="bg-[#8529cd] w-full h-[6rem] rounded-md text-[#fff] text-[2rem] hover:bg-[#64179e]"
                          onClick={handleClick}
                      >
                          {!sellersContact ? "Show contact" : "254"+item?.phonenumber}
                      </button>
                    </a>
                    {sendMessage && 
                    <div className='flex items-center justify-between'>
                    <p className='text-[2rem] font-[555]'>Your message</p>
                    <div 
                      className='relative cursor-pointer py-[1.4rem]'
                      onClick={()=>{setSendMessage(false)}}
                    >
                      <GrClose className="absolute right-[0.3rem] top-0 text-[gray] text-[2rem]"/>
                    </div>
                    </div>}
                    {sendMessage && 
                    <div className='w-full h-[6rem] rounded-md text-[2rem]'>
                      <input 
                        className='w-full h-[6rem] rounded-md  bg-[#f6f7f8] text-[2rem] text-center  border-solid border-2 border-[#f3cfa9]'
                        type="text" 
                        placeholder='Say hello  👋' 
                      />
                    </div>}
                    {sendMessage && 
                    <div 
                      className='text-[white] bg-[#fea03c] flex text-[2rem] gap-[2rem] items-center justify-center w-full h-[6rem] font-[555] rounded-md cursor-pointer'
                      onClick={sendTxtMessage}
                    >
                      <p>Send text</p>
                    </div>}
                    {!sendMessage && <div 
                      className='text-[white] bg-[#5d1b8f] flex text-[2rem] gap-[2rem] items-center justify-center w-full h-[6rem] font-medium border-solid rounded-md border-2 border-[#772ab3] cursor-pointer'
                      onClick={startMessage}
                      >
                      <BiMessageDetail className='text-[3rem]'/>
                      <p>Start message</p>
                    </div>}
                  </div>
        </div>

      </div>
      </div>))}
    </div>
    <div>
      <ProductDetail itemId={itemId}/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Product
