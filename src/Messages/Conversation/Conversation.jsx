import React , { useEffect , useState } from 'react'
import { axiosInstance } from '../../Utils/BaseUrl'

function Conversation({ conversation , own  }) {
  const [ friendProfile , setFriendProfile ] = useState(null)
  let friendProfiles = [friendProfile]

  //find friend ID
  const friendID = conversation && conversation?.members?.find((item) => item !== own?.phonenumber.toString())
  

  //FETCH FRIEND DETAILS
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res = await axiosInstance.get(`/Users/getUser?QUERY=${friendID}`)
        setFriendProfile(res.data)
      }catch(err){}
    }
    fetchData()

  }, [friendID])


  return (
    <div className='w-full '>
        {friendProfiles?.map((item) =>
      <div className= "hover:bg-[#f5f6f6] mt-[1rem]  ml-[1rem] mr-[1rem] cursor-default">
        <div key={item?._id} className='flex items-center gap-[5rem] text-[2rem] py-[2rem] px-[1rem]'>
          <img
            className='w-[120px] rounded-full h-[120px] object-cover'
            src='https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg'
            alt=''
          />

        <div className='flex flex-col gap-[1rem]'>
          <h1>{item?.phonenumber}</h1>
            <div className='flex items-center gap-[0.5rem]'>
              <span className='text-[1.8rem] font-[555]'>Seller:</span>
              <p className='text-[2rem] font-[599]'>{item?.username}</p>
            </div>
        </div>

        </div>
        </div>
        )}
    </div>
  )
}

export default Conversation
