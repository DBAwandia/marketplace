import React, { useEffect, useState,useRef, useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Chathighlight from '../Chathighlight/Chathighlight'
import Chat from '../Chats/Chat'
import { useLocation } from "react-router-dom"
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import { ChatContext } from '../../Context/ChatContext'

function Messagechat() {
    //CONVERSATION ID
  const { chatId } = useContext(ChatContext)
  let converID = chatId

    const [ chatIsActive, setChatIsactive ] = useState(false)
    const location = useLocation()
//   const id = location.state
  const id = location.state?.id[0]

  const [ dataz , setDataz ] = useState(null)
  const { user } = useContext(LoginContext)
  let datass = dataz

  //Fetch conversations
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get(`/Conversations/conversation/${user?.phonenumber}`)
        setDataz(res.data)
      }catch(err){}
    }
    fetchData()
  },[])


  const scrollRef = useRef()
  const [ txtMsg , setTxtMsg ] = useState("")

//   const scrollToBottom = () => {
//     scrollRef.current.scrollIntoView({ behavior: "smooth" });
//   }

//   useEffect(()=>{
//     scrollToBottom()
//   },[])

  const [ datas , setDatas ] = useState(null)

  const [ text , setText ] = useState(null)


  //UseEffect get friends details
   useEffect(()=>{
    const fetchData = async() =>{
      // const friendID =  datas?.members.find(m => m !== owner)

      try{
        //  const res =  await axiosInstance.get(`/Users/getUser?QUERY=${friendID}`)
         const ress = await axiosInstance.get(`/Messages/getMessages/${converID}`)
         setDatas(ress.data)

      }catch(err){}
    }

    fetchData()

  },[converID])


  //post Message
  const handleClick  = async() =>{
      try{
       const res =  await axiosInstance.post("/Messages/message" , { 
        
          converID: conversationID[0] , 
          senderPhone: phonenumber , 
          receiverPhone: receiverPhone[0] , 
          text: txtMsg   
        })

        console.log(res)
        alert("success")
      }catch(err){
        alert("err")
      }
  }

  console.log(datass)

  return (
    <div className='relative w-full min-h-screen border-b-2 bg-[#ebf2f7]'>
        <div className='sticky top-0 z-[9999999]'>
            <Navbar/>
        </div>
        <div className=''>
        <div className='w-full py-[4rem] shadow-2xl px-[3rem] flex gap-[0.3rem] flex-1'>
            <div className='flex-[0.3] hide_scrollbar border-b-2 pb-[2rem] min-h-[calc(100vh-12vh)] overflow-y-scroll bg-[#fff] py-[3rem]'>
                <div className='text-[3rem] text-decorate  text-[#8529cd] font-bold text-center border-b-2'>
                    <h1>My messages</h1>
                </div>
                    <div 
                        onClick={()=>setChatIsactive(true)}
                        className='border-b-2 border-[#e6e3e9]'
                    >

                       {datass?.map((item) =>(
                            <Chathighlight
                                datas={item}
                                setChatIsactive={setChatIsactive}
                                chatIsActive={chatIsActive}
                            />
                        )) }
                    </div>
                    
                </div>

                <div 
                    className='min-h-[calc(100vh-12vh)] hide_scrollbar overflow-y-scroll flex-[0.7] bg-[#f2f2f2]'
                >
                    
                {datass?.map((item) =>(
                    <Chat 
                        dataz={item}
                        setChatIsactive={setChatIsactive}
                        id={id}
                    /> 
                )) }

            </div>
           
            </div>
        </div>
      
    </div>
  )
}

export default Messagechat
