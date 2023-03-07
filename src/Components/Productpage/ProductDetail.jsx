import React from 'react'
import { productDetails } from "../../dummyData/DummyData"
function ProductDetail() {
  return (
    <div className='w-full mt-[5rem] grid items-center py-[4rem] justify-center bg-[#ebf2f7]'>
      <div className='flex flex-col gap-[3rem]'>
        <div>
            <h1 className='text-[3rem] font-bold'>Main Features</h1>
        </div>
        {productDetails.map((item , i)=>(
        <div key={i} className="flex flex-col gap-[1.8rem]">
            <h2 className='font-bold text-[2rem]'>{item?.Storage}</h2>
            <span className='text-[2rem] font-bold'>{item?.battery}</span>
            <h2 className='font-bold text-[2rem]'>{item?.System}</h2>
            <span className='text-[1.6rem]'>{item?.description}</span>
            <h2 className='font-bold text-[2rem]'>{item?.camera}</h2>
            <h2 className='font-bold text-[2rem]'>{item?.CPU}</h2>
            <span className='text-[1.6rem]'>{item?.describeCpu}</span>
            <h2 className='font-bold text-[2rem]'>{item?.display}</h2>
            <span className='text-[1.6rem]'>{item?.describeDetail}</span>
        </div>))}
      </div>
    </div>
  )
}

export default ProductDetail
