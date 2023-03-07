import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Register() {
  return (
    <div className='w-full grid items-center justify-center h-screen bg-[url("https://wallpaperaccess.com/full/1092587.jpg")] bg-cover '>
        <div className='w-[70rem] min-h-0 bg-[white] text-[2rem] shadow-2xl rounded-2xl'>
        <div className='flex flex-col gap-[2rem] pb-[5rem] pt-[2rem] px-[3rem]'>
            <div className='self-center text-[3rem] font-bold'>
                <h1>Register</h1>
            </div>

            {/* <p className='self-center text-[#ef4444]'>Username is required</p> */}
            {/* <p className='self-center text-[#ef4444]'>Phonenumber is required</p> */}
            {/* <p className='self-center text-[#ef4444]'>Email is required</p> */}
            {/* <p className='self-center text-[#ef4444]'>Password is required</p> */}
            
            <div className='flex items-center gap-[2rem]'>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Phone number</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="number" 
                        placeholder='Enter phonenumber' 
                    />
                </div>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Username</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="text" 
                        placeholder='Enter username' 
                    />
                </div>
            </div>

            <div className='flex items-center gap-[2rem]'>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Email</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="email" 
                        placeholder='Enter email' 
                    />
                </div>
                <div className='relative flex flex-col gap-[1rem] w-full'>
                    <AiOutlineEyeInvisible  
                        className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                    />
                     <AiOutlineEye
                        className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                    />
                    <label className='font-bold'>Password</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="password" 
                        placeholder='Enter password' 
                    />
                </div>
            </div>
            
            <div className='w-full h-[6rem] mt-[4rem] text-[white] '>
                <button className='w-full h-[100%] bg-[#8529cd] rounded-lg hover:bg-[#69388f]'>
                    Register
                </button>
            </div>
        <p>Have account , <span className='cursor-pointer text-[gray] font-bold'>Login</span></p>

        </div>
        </div>
    </div>
  )
}

export default Register
