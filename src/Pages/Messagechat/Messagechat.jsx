import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Chathighlight from '../Chathighlight/Chathighlight'
import Chat from '../Chats/Chat'
import { useLocation } from "react-router-dom"
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'

function Messagechat() {
    const [ chatIsActive, setChatIsactive ] = useState(false)
    const location = useLocation()
//   const id = location.state
  const id = location.state?.id[0]

  const [ datas , setDatas ] = useState(null)
  const { user } = useContext(LoginContext)
  let datass = datas

  //Fetch conversations
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get(`/Conversations/conversation/0${user?.phonenumber}`)
        setDatas(res.data)
      }catch(err){}
    }
    fetchData()
  },[])


  console.log(datas)

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
                    {/* <div className='border-b-2 border-[#e6e3e9]'>
                        <Chathighlight/>
                    </div> */}
                </div>

            {/* {chatIsActive && */}
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
            {/* } */}

            {/* SHOW SVG TO OPEN CHAT IF CHAT !chatIsActive */}
            {/* {!chatIsActive &&
                <div className='min-h-[calc(100vh-12vh)] flex-[0.7] bg-[#f2f2f2]'>
                <div className='w-full grid items-center justify-center h-[100%]'>
                    <div className='flex flex-col-reverse items-center justify-center gap-[1rem]'>
                        <p className='text-[2rem] text-[#464b4f] font-[555]'>Select chat to view conversation</p>
                        <img 
                            className='w-[35rem] h-[35rem] object-contain rounded-full'
                            src='https://framerusercontent.com/images/b1l4Ou3URvh0awPRnEE16WodMWk.svg' 
                            alt='no chat image' 
                        />
                    </div>
                </div>
            </div>
            } */}
            </div>
        </div>
      
    </div>
  )
}

export default Messagechat
