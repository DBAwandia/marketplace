import React from 'react'
import { useNavigate } from 'react-router-dom'

function Choosecategory() {
    const navigate = useNavigate()
    const handleClick = async(id)=>{
        navigate("/all" , {state: id})
    }
  return (
    <div className='relative w-full h-[8rem] bg-[#8529cd] text-[#fff] text-[2rem]'>
      <div className='px-[2rem] py-[2rem]'>
        <ul className='flex items-center justify-between cursor-pointer '>
            <li className='hover:text-[#fffefe]  hover:font-extrabold' onClick={()=>handleClick("IPhone")}>
                IPhone
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Huawei")}>
                Huawei
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Samsung")}>
                Samsung
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Infinix")}>
                Infinix
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Tecno")}>
                Tecno
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Vivo")}>
                Vivo
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Oppo")}>
                Oppo
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Realmi")}>
                Realmi
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("HTC")}>
                HTC
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Xiaomi")}>
                Xiaomi
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Google")}>
                Google
            </li>
            <li className='hover:text-[#fffefe] hover:font-extrabold' onClick={()=>handleClick("Nokia")}>
                Nokia
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Choosecategory
