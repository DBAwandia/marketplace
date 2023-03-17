import React, { useEffect, useState,useContext } from 'react'
import { HiFlag } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { BsFillFlagFill } from 'react-icons/bs'
import TextChat from './TextChat'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../Utils/BaseUrl'
import { LoginContext } from '../../Context/LoginContext'

function Chat({setChatIsactive }) {
  const [ data, setData ] = useState(null)

  const datass = [data]

  const [ datas , setDatas ] = useState(null)
  const { user } = useContext(LoginContext)
  const phonenumber = user?.phonenumber

  //Fetch conversations texts
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get(`/Messages/getMessages?QUERY=${phonenumber}`)
        setDatas(res.data)
        
      }catch(err){}
    }
    fetchData()
  },[])


  //FETCH PRODUCT ID
  const id = datas?.map((item) => item?.productID)


   //GET POST BY ID
   useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get(`/Posts/getPost/${id[0]}`)
        setData(res.data)

      }catch{}
    }
    fetchData()
  },[id])

  
  //Seller number
  const sellerContact = datass?.map((item) => item?.phonenumber)


  return (
    <div className='w-full flex flex-col gap-[3rem]'>
      {datass?.map((item)=>(
      <div className='flex text-[2rem] items-center justify-between shadow-md bg-[#fff] py-[0.5rem] px-[4rem]'>
        <div className='flex items-center gap-[3.5rem]'>
          <img 
            className='w-[100px] h-[100px] rounded-full object-cover '
            src={item?.image} 
            alt="phone image"
          />
          <div className='flex flex-col gap-[0.5rem]'>
            <p className='font-bold'>{item?.name}</p>
            <span className='text-[#00b53f] font-semibold'>{"$" + item?.price}</span>
          </div>
        </div>
        <div>
          <p className='font-[590]'>{item?.location}</p>
        </div>
        <div className='flex cursor-pointer hover:text-[#fea03c] text-[2.6rem] items-center gap-[7rem] '>
          <BsFillFlagFill className='text-[#ef4444]'/>
          <GrClose onClick={()=>setChatIsactive(false)}/>
        </div>
      </div>))}
      <div>
        <TextChat
          sellerContact={sellerContact[0]}
        />
      </div>
    </div>
  )
}

export default Chat
