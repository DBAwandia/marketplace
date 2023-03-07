import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import Navbar from '../../Components/Navbar/Navbar'

function PostAd() {
  return (
    <div className='relative w-full flex shadow-2xl flex-col gap-[2rem] min-h-screen bg-[#ebf2f7]'>
            <div className='sticky top-0 z-[99999999999999999999999]'>
                <Navbar/>
            </div>
            <div className='w-[70%] flex flex-col gap-[5rem] self-center px-[5rem] py-[5rem] bg-[white]'>
                <div className='w-full flex items-center justify-between border-b-2'>
                    <h1 className='text-[4rem] font-extrabold'>Post ad</h1>
                    <span className='text-[#fc2533] cursor-pointer text-[2rem]'>Clear</span>
                </div>
            <div className='flex flex-col gap-[4rem]'>
                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Phone name</label>
                        <input
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='Techno'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Main Features</label>
                        <input
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="text"
                                placeholder='Ram , Rom , Camera'
                        />
                    </div>
                </div>

                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Description</label>
                        <input
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='More description (CPU ,Battery,Inches,Android)'
                        />
                    </div>

                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                   <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Price</label>
                        <input
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="Number"
                                min={1}
                                placeholder='Price after discount'
                        />
                   </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate line-through'>Price</label>
                        <input
                                className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                                type="Number"
                                min={1}
                                placeholder='Initial price before discount'
                        />
                   </div>
                </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Discount</label>
                        <input
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='Dicount %'
                        />
                    </div>

                <div className='w-full items-center flex gap-[1rem] text-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Location</label>
                        <input
                            className='bg-[#f6f7f8] text-[1.8rem] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="text"
                            placeholder='County , region        ( Eldoret, kimumu)'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[1rem] text-[2rem]'>
                        <label className='font-bold text-[2.2rem] text-decorate'>Items available</label>
                        <input
                            className='bg-[#f6f7f8] w-auto h-[6rem] rounded-lg pl-[3rem]'
                            type="Number"
                            min={1}
                            placeholder='Items on sale'
                        />
                    </div>
                </div>
                
                <div className='w-full flex flex-col gap-[3rem] text-[2rem]'>
                    <label className='font-bold text-[2.2rem] text-decorate'>Add photo</label>
                    <div className='w-full flex flex-col gap-[1rem]'>
                        <p className='text-[#6c8ea0] font-bold text-[1.5rem]'>- Add atleast one photo for this category</p>
                        <p className='text-[#6c8ea0] font-bold text-[1.5rem]'>- First picture is the title picture , you can change any order from the rest</p>
                    </div>
                    <div className='items-center cursor-pointer flex  gap-[4rem] text-[2rem]'>
                        <div className='relative w-[8rem]  h-[8rem] bg-[#6c8ea0] rounded-full'>                        
                            <IoMdAdd className='absolute text-[white] top-[2.2rem] left-[1.9rem] text-[4rem]'/>
                        </div>
                        <p className='text-[2rem] font-[599]'>Each picture must not exceed 5 Mb</p>
                    </div>
                </div>  

                <button 
                    className='w-[60%] mt-[2rem] text-[2.2rem] text-white font-[599] h-[6rem] bg-[#8529cd] self-center'
                >
                    POST
                </button>

                </div> 
            </div>
    </div>
  )
}

export default PostAd
