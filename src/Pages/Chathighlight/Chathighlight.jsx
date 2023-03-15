import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../Context/LoginContext'
import { axiosInstance } from '../../Utils/BaseUrl'
import moment from 'moment'

function Chathighlight({chatIsActive}) {
  const [ datas , setDatas ] = useState(null)
  const { user } = useContext(LoginContext)

  //Fetch conversations
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await axiosInstance.get(`/Messages/getMessages?QUERY=${user?.phonenumber}`)
        setDatas(res.data)
        console.log(res)
      }catch(err){}
    }
    fetchData()
  },[])

  // const datass = [datas]
  
  console.log(datas)
  return (
    <div className='w-full '>
      <div className='w-full flex flex-col gap-[2rem]'>
       { datas?.map((item, i)=>(
          <div className={chatIsActive ? 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer bg-[#eff3f4]' : 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer hover:bg-[#eff3f4]'}>
            <div>
                <img 
                    className='w-[100px] rounded-full h-[100px] object-cover'
                    src={item?.image ? item?.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" } 
                    alt="chat image" 
                />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
                <p className='text-[1.7rem] font-[695] text-[#464b4f]'>{item?.receiverPhone}</p>
                <p className='text-[2.2rem] font-bold'>{item?.product}</p>
                <p className='text-[1.7rem] font-[695] text-[#464b4f]'>{item?.text}</p>
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
