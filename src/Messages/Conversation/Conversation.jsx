import React , { useEffect , useState } from 'react'
import { axiosInstance } from '../../Utils/BaseUrl'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Conversation({ conversation , own ,sellerContact }) {
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


  //PICK IMAGES RANDOMLY
  const images = [
    'https://avatars.mds.yandex.net/i?id=231d753da8fc07863083be48b299383ee4fd87d7-5400140-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=def0a8435af2b1c9b12be6aecb87eaf6df440932-7552332-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=2a0000017a153483ff99039911111f779540-4402429-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=1a3f58bd9917bcdfd330167e607f0643-5313239-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=8b304131a6b5e874bc98a6bdc78e4b2e-5342003-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=bd20205e5a797a700196b1236d33fd421fe72dba-9056011-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=fac9eefcd024bd262a35cf84c62ea3a2-6972294-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=2b73d380cdf713d0ae8bf4470e156e99661a38f3-8425275-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=bbbf806e80f9a02e1b9072a29ab03f207af927b3-8497474-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=64680f270717484898309a599a45e2e9c08fb390-7084103-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=78f8c842055593981936da383d072f14-5235913-images-thumbs&n=13', 
    'https://avatars.mds.yandex.net/i?id=71e21befea41b1c1455d0c239a9b7b04f93effb5-9221377-images-thumbs&n=13', 
    'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
    "https://avatars.mds.yandex.net/i?id=79c8f248521dc3f0c434ed14ce8a465575a2e6d3-3891756-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=320f46d767b649b2d177bc024ea0fa1d6d31d9d8-8498375-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=5c443d3fe4c66ba0f0eb3b7cccca9c5887df8204-9147461-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=48fe9fa182aa6ea899d5fdfca9bf2174-4012127-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=09a371da8a59df6993fd9ca5effca387511f4a60-7571629-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=4e9bf99e68f6fe048dfa9f94fbafef78ffacfb3d-7758299-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=40582853e9f5ce58a8367ed9a71e09b4-5224693-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=dc8637577c6c042b5661ca36a2abc784445323df-6946680-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=bdb045f98800b417c0addb7b3bf1d05c60bbf03b-8899294-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=30e6823ecfca13b310d752803af050404562206d-4310964-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=6b6c40fb515055897872353a3dd5a42e5d348497-7097242-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=9f89de5ac288f9e47565655cf336c2c0af0b5f00-4220200-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c39059dd1b56b8d98bb583783dd4913ab2dc1132-8428826-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=87c7b4687aeb1c9bef22bb18cdfb05c2566a2ba0-5734612-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=0c27d8f38285e6386e566f1d1e19337275680c35-4435546-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=b9d32ed69028c6e022654caefaa7d381ed314f13-8265302-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=46092e3a4c28ba470418093e16070322084f7c50-8351914-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=4ccfc6d19c48da06b02369acf255942e15a0126e-8497475-images-thumbs&n=13"];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <div className={sellerContact === friendID?"bg-[#e6e3e9] mt-[1rem] ml-[1rem] mr-[1rem]" : "w-full"}>
        {friendProfiles?.map((item) =>
      <div className= "hover:bg-[#f5f6f6] mt-[1rem]  ml-[1rem] mr-[1rem] cursor-default">
        <div key={item?._id} className='flex items-center gap-[5rem] text-[2rem] py-[2rem] px-[1rem]'>
          <LazyLoadImage
            effect='blur'
            className='w-[120px] rounded-full h-[120px] object-cover'
            src={randomImage}
            alt='profiles'
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
