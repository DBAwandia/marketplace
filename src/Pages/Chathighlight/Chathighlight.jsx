import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

function Chathighlight({chatIsActive , datas}) {

  const { user } = useContext(LoginContext)
  const owner =  user?.phonenumber.toString()

  // conversationID
  const id = datas?._id

  const [ friendData , setFriendData ] = useState([])
  const [ text , setText ] = useState(null)

  let friendDatas = [ friendData ]

  //UseEffect get friends details
   useEffect(()=>{
    const fetchData = async() =>{
      const friendID =  datas?.members.find(m => m !== owner)

      try{
         const res =  await axiosInstance.get(`/Users/getUser?QUERY=${friendID}`)
         const ress = await axiosInstance.get(`/Messages/getMessages/${id}`)
         setText(ress.data)

         setFriendData(res?.data)
      }catch(err){}
    }

    fetchData()

  },[user])

  let limited = text?.filter((val,i)=>i<2)

  
  return (
    <div className='w-full '>
      <div className='w-full flex flex-col gap-[2rem]'>
       { friendDatas?.map((item, i)=>(
          <div 
            onClick={()=>handleClick()}
            key={i} 
            className={chatIsActive ? 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer bg-[#eff3f4]' : 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer hover:bg-[#eff3f4]'}
          >
            <div>
                <img 
                    className='w-[100px] rounded-full h-[100px] object-cover'
                    src={item?.image ? item?.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" } 
                    alt="chat image" 
                />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
                <p className='text-[1.7rem] font-bold'>{item?.phonenumber}</p>
                <p className='text-[1.4rem] font-[695] text-[#464b4f]'>{item?.username}</p>
               {limited?.map((items , i)=> 
                  <p className='text-[1.7rem] font-[695] text-[#464b4f]'>{items?.text}
                </p> 
                )}

            </div>
            <div className='text-[1.5rem] font-[555] text-[#9a9898]'>
                <span>{moment(item?.createdAt).format("MMM Do")}</span>
            </div>
        </div>))}
      </div>
    </div>
  )
}

export default Chathighlight
