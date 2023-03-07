import React from 'react'
import { useNavigate } from 'react-router-dom'

function Choosecategory() {
    const navigate = useNavigate()
    const handleClick = async()=>{
        navigate("/all")
    }
  return (
    <div className='relative w-full h-[8rem] bg-[#8529cd] text-[#fff] text-[2rem]'>
      <div className='px-[2rem] py-[2rem]'>
        <ul className='flex items-center justify-between cursor-pointer '>
            <li className='hover:text-[#ff9900]  hover:font-extrabold' onClick={()=>handleClick()}>
                Iphone
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Huawei
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Samsung
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Infinix
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Techno
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Realmi
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Oppo
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Xiaomi
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Google
            </li>
            <li className='hover:text-[#ff9900] hover:font-extrabold' onClick={()=>handleClick()}>
                Nokia
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Choosecategory
