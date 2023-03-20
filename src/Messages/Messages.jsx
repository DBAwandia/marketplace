import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Conversation from "../Messages/Conversation/Conversation"
import Message from "../Messages/Message/Message"


function Messages() {
  return (
    <div className='w-full h-[100vh] '>
        <div>
            <Navbar />
        </div>
        <div className='w-full h-[calc(100vh-15.3vh)] flex flex-1 '>
            <div className='hide_scrollbar flex-[0.3] border-r-2 h-[100%] border-[#f0eeee] overflow-y-scroll'>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>

            </div>
            <div className='flex-[0.7] bg-[#f2f2f2] h-[100%] overflow-y-scroll'>
                <h1 className='text-center mt-[4rem] text-[#5f6368] font-bold text-[2.5rem]'>Do not pay in advance including transport fee</h1>

                <Message own={true}/>
                <Message/><Message/><Message/><Message own={true}/><Message/><Message/><Message own={true}/>
            </div>
        </div>
      
    </div>
  )
}

export default Messages
