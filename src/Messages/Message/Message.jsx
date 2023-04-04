import React from 'react'
import moment from 'moment'

function Message({own , message}) {

  //Check if message is mine
  const myOwnText = own === message?.senderPhone
  console.log(own , message?.senderPhone, message.senderNo)

  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>

      {/* {messages?.map((item) => */}

      <div className={myOwnText ? "bg-[#d9fec2] text-[#464b4f] max-w-[55%] px-[2rem] py-[1rem] rounded-xl flex flex-col gap-[2rem] text-[2rem]  ml-[auto]" : "bg-[#ffffff] text-[#464b4f] max-w-[55%] px-[2rem] py-[1rem] rounded-xl flex flex-col gap-[2rem] text-[2rem]  mr-[auto]"}>
        
        <p>{message?.text}</p>
        <span className='text-[1.4rem] font-semibold'>
          {moment(message?.createdAt).format("HH:mm")}
        </span>

      </div>

      {/* )} */}

    </div>
  )
}

export default Message
