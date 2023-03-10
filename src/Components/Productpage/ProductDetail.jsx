import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../Utils/BaseUrl'

function ProductDetail({itemId}) {
  const [ data, setData ] = useState(null)
  const productData = [data]
  
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

 
  return (
    <div className='w-full mt-[5rem] grid items-center py-[4rem] justify-center bg-[#ebf2f7]'>
      <div className='w-1/2 ml-[30%] flex flex-col gap-[3rem]'>
        <div>
            <h1 className='text-[3rem] font-bold'>Main Features</h1>
        </div>
        {productData.map((item )=>(
        <div key={item?._id} className="flex flex-col gap-[1.8rem]">
            <h2 className='font-bold text-[#2c3e50] text-[2rem]'>{item?.features}</h2>
            <span className='text-[2rem] text-[#999999] font-[599] items-center'>{item?.description}</span>
           
        </div>))}
      </div>
    </div>
  )
}

export default ProductDetail
