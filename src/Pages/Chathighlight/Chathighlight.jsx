import React from 'react'
const data =[
    {
        image: "https://www.deccanherald.com/sites/dh/files/articleimages/2023/01/17/xrn125g-cov-sho-sel-1-1178221-1673944996.jpg",
        name: "Wandia",
        product: "Samsung",
        text:"lorem ipsum"
    }
]
function Chathighlight({chatIsActive}) {
  return (
    <div className='w-full '>
      <div className='w-full flex flex-col gap-[2rem]'>
       { data.map((item, i)=>(
          <div className={chatIsActive ? 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer bg-[#eff3f4]' : 'w-full flex items-center justify-between px-[3rem] py-[1rem] cursor-pointer hover:bg-[#eff3f4]'}>
            <div>
                <img 
                    className='w-[100px] rounded-full h-[100px] object-cover'
                    src={item?.image} 
                    alt="chat image" 
                />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
                <p className='text-[1.7rem] font-[695] text-[#464b4f]'>{item?.name}</p>
                <p className='text-[2.2rem] font-bold'>{item?.product}</p>
                <p className='text-[1.7rem] font-[695] text-[#464b4f]'>{item?.text}</p>
            </div>
            <div className='text-[1.9rem] font-semibold text-[#9a9898]'>
                <span>28 Feb</span>
            </div>
        </div>))}
      </div>
    </div>
  )
}

export default Chathighlight
