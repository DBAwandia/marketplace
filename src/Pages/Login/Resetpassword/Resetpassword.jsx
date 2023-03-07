import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Resetpassword() {
  return (
    <div className='w-full grid items-center justify-center h-screen bg-[url("https://wallpaperaccess.com/full/1092587.jpg")] bg-cover '>
    <div className='w-[50rem] min-h-0 bg-[white] text-[2rem] shadow-2xl rounded-2xl'>
    <div className='flex flex-col gap-[2rem] pb-[3rem] pt-[2rem] px-[3rem]'>
        <div className='self-center text-[3rem] font-bold'>
            <h1>Reset password</h1>
        </div>

        {/* <p className='self-center text-[#ef4444]'>Username is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Phonenumber is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Email is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Password is required</p> */}
        
        <div className='flex items-center gap-[1rem]'>
            <div className='flex flex-col gap-[1rem] w-full'>
                <label className='font-bold'>Phonenumber</label>
                <input 
                    className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                    type="number" 
                    placeholder='Enter Phonenumber' 
                />
            </div>
        </div>

        <div className='flex items-center gap-[2rem]'>
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
            {/* <div className='flex flex-col gap-[1rem] w-full'>
                <label className='font-bold'>otp</label>
                <input 
                    className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                    type="number" 
                    placeholder='Enter otp' 
                />
                <button className='w-full h-[6rem] bg-[#a359db] rounded-lg text-[white]  hover:bg-[#69388f]'>
                    Request otp
                </button>
            </div> */}
        <div className='w-full h-[6rem] mt-[3rem] '>
            <button className='w-full h-[100%] text-white bg-[#8529cd] rounded-lg hover:bg-[#69388f]'>
                Reset password
            </button>
        </div>
        <div className='flex text-[#252831] flex-col gap-[0.5rem]'>
            <p>Remembered password , <span className='cursor-pointer text-[gray]'>Login</span></p>
        </div>
    </div>
    </div>
</div>
  )
}

export default Resetpassword
