import React from 'react'

function Message({own}) {
  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>
      <div className={own ? "bg-[#d9fec2] text-[#464b4f] max-w-[55%] px-[2rem] py-[1rem] rounded-xl flex flex-col gap-[2rem] text-[2rem]  ml-[auto]" : "bg-[#ffffff] text-[#464b4f] max-w-[55%] px-[2rem] py-[1rem] rounded-xl flex flex-col gap-[2rem] text-[2rem]  mr-[auto]"}>
        <p>Hello boss Do not pay in advance including transport feeDo not pay in advance including transport feeDo not pay in advance including transport feeDo not pay in advance including transport fee</p>
        <span className='text-[1.4rem] font-semibold'>17:25</span>
      </div>
    </div>
  )
}

export default Message
