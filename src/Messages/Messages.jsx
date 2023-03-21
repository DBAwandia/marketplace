import React, { useContext, useEffect , useState } from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Conversation from "../Messages/Conversation/Conversation"
import Message from "../Messages/Message/Message"
import { FiImage } from "react-icons/fi"
import { LoginContext } from '../Context/LoginContext'
import { axiosInstance } from "../Utils/BaseUrl"

function Messages() {
    const [ conversation , setConversation ] = useState(null)
    const [ messages , setMessages ] = useState(null)

    //get current chat id with onClick
    const [currentChat, setCurrentChat] = useState(null);

    //GET CONVERSATIONID
    const getConversationID = async(id) =>{
        setCurrentChat(id)

    }
    //get conversationID from localStorage
    const converID = localStorage.getItem("conversationID")

    const { user } = useContext(LoginContext)
    const phonenumber = user?.phonenumber

  
     //fetch messages
     useEffect(()=>{
      const getMessages = async () =>{
          try{
              const res = await axiosInstance.get(`/Messages/getMessages/${currentChat?._id}`)
              localStorage.setItem("conversationID" , currentChat?._id)
              setMessages(res.data)
              
          }catch(err){}
      }
  
      getMessages()
  }, [currentChat?._id])

    //fetch conversations
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axiosInstance.get(`/Conversations/conversation/${phonenumber}`)
                setConversation(res.data)
            }catch(err){}
        }

        fetchData()

    },[phonenumber])

   

  return (
    <div className='w-full h-[100vh] '>
        <div>
            <Navbar />
        </div>
        <div className='w-full h-[calc(100vh-15.3vh)] flex flex-1 '>
            <div className='hide_scrollbar flex-[0.3] border-r-2 h-[100%]  border-[#f0eeee] overflow-y-scroll'>
                    {/* CHAT FRIENDS HIGHLIGHTS */}
                    {conversation?.map((item)=>(

                    <div  
                        className={converID === item?._id ?" bg-[#f5f6f6] mt-[1rem] ml-[1rem] mr-[1rem]" : ""}
                        onClick={
                            ()=> getConversationID(item)
                        }
                        >
                        <Conversation
                            conversation={item}
                            own={user}

                        />
                    </div>
                    
                    ))}

            </div>
            <div className='flex flex-col gap-2 flex-[0.7]'>
                <div className=' bg-[#f2f2f2] h-[100%] overflow-y-scroll'>
                    <h1 className='text-center mt-[4rem] text-[#5f6368] font-bold text-[2.5rem]'>Do not pay in advance including transport fee</h1>

                        {messages?.map((message)=>
                            
                            <Message 
                                message={message}
                                own={phonenumber}
                            />
                        )}

                </div>
                <div className=' bg-[#f0f2f5] relative mb-[1rem]'>
                    <input 
                        className='text-[2rem] w-full h-[10vh] pl-[5rem] bg-[#f0f2f5]'
                        type="text"
                        placeholder='Send message'
                    />
                    <div className='absolute cursor-pointer right-[5rem] text-[#54656f] top-[2rem] flex gap-[4rem] items-center'>
                        <FiImage className='text-[3rem]'/>
                        <button className='text-[1.6rem] w-[8rem] text-[black] h-[4rem] font-[555] bg-[#8484cc] rounded-2xl'>
                            Send
                        </button>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Messages
