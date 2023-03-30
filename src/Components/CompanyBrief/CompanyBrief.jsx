import React from 'react'
import { FcInTransit } from "react-icons/fc"
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { TbWorldUpload } from 'react-icons/tb'
import { AiOutlineTag } from 'react-icons/ai'



function CompanyBrief() {
  return (
    <div className='w-full min-h-[12vh] cursor-text border-[2px] px-[2rem] py-[3rem] bg-[#f8f8f8]'>
        <div className='w-full'>
        <div className='flex items-center justify-between'>
            <div className='flex border-r-2 border-[#d5c1e2] px-[6rem] h-[6rem] items-center gap-[2rem] text-[2rem]'>
                <FcInTransit className='text-[5rem] text-[#8529cd]'/>
                <p className='font-bold text-[#333e48]'>
                    Country Wide Delivery
                </p>
            </div>
            <div className='border-r-2 border-[#d5c1e2] px-[6rem] h-[6rem] flex items-center gap-[2rem] text-[2rem]'>
                <VscWorkspaceTrusted className='text-[3.5rem] text-[#8529cd]'/>
                <p className='font-bold text-[#333e48]'>
                    Trusted by customers
                </p>
            </div>
            <div className='flex border-r-2 border-[#d5c1e2] px-[6rem] h-[6rem] items-center gap-[2rem] text-[2rem]'>
                <TbWorldUpload className='text-[3.5rem] text-[#8529cd]'/>
                <p className='font-bold text-[#333e48]'>
                    Up to 2 yrs Warranty
                </p>
            </div>
            <div className='flex px-[6rem] h-[6rem] items-center gap-[2rem] text-[2rem]'>
                <AiOutlineTag className='text-[4rem] text-[#8529cd]'/>
                <p className='font-bold text-[#333e48]'>
                    Only The Best Brands
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CompanyBrief
