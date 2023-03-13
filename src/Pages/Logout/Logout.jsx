import React, { useContext } from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { IoIosLogOut } from 'react-icons/io'
import { MdSupportAgent } from 'react-icons/md'
import { AiOutlineClose} from 'react-icons/ai'
import { LogoutContext } from '../../Context/LogoutContext'
import { RiAdvertisementFill } from 'react-icons/ri'
import { LoginContext } from '../../Context/LoginContext'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

function Logout() {
  const { dispatch } = useContext(LogoutContext)
  const { user } = useContext(LoginContext)
  const date = user?.createdAt
  const dayJoined = moment(date).format("DD/MM/YYYY");

  const navigate = useNavigate()

  const logout = () =>{
    dispatch({type: "CLOSE"})
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className='w-[32rem] rounded-xl relative z-[99999999999999999999999999999] text-[gray] text-[2rem] min-h-0 bg-[white]'>
    <div 
        className='absolute right-[3rem] cursor-pointer top-[2rem]'
        onClick={()=>{dispatch({type:"CLOSE"})}}
    >
        <AiOutlineClose className='text-[red] text-[2.5rem] hover:text-red-400'/>
    </div>
      <div className='flex flex-col gap-[3rem] py-[2.5rem] px-[4rem]'>
        <div className='flex flex-col gap-[2rem] font-[599] mt-[3.8rem] text-[1.8rem]'> 
            <h1>Username:  {user?.username}</h1>
            <h2 className='items-center'>Registered:    {dayJoined}</h2>
        </div>

        <div 
            onClick={()=>{
              navigate("/mypostad")
              dispatch({type: "CLOSE"})

            }}
            className='flex font-[599] cursor-pointer items-center gap-[1.5rem] hover:text-[#8529cd]'
        >
            <RiAdvertisementFill className='text-[3rem]'/>
            <p>My posts</p>
        </div>

        <div className='flex font-[599] cursor-pointer items-center gap-[1.5rem] hover:text-[#8529cd]'>
            <BiHelpCircle className='text-[3rem]'/>
            <p>Best practises</p>
        </div>

        <div className='flex font-[599] cursor-pointer items-center gap-[1.5rem] hover:text-[#8529cd]'>
            <MdSupportAgent className='text-[3rem]'/>
            <p>Customer support</p>
        </div>

        <div 
            onClick={logout}
            className='flex font-[599] cursor-pointer items-center text-red-400 gap-[1.5rem] hover:text-[red]'>
            <IoIosLogOut className='text-[3rem]'/>
            <p>Log Out</p>
        </div>

        </div>
        </div>
  )
}

export default Logout
