import React from 'react'
import { Navigation, Pagination,Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const dummyData = [
    {
        id:1,
        image: "https://petapixel.com/assets/uploads/2021/05/The-Best-iPhone-Camera-Apps-of-2021.jpg",
        // description:"Direct from from the farm"
    }
   ,
    {
        id:2,
        image: "https://avatars.mds.yandex.net/i?id=aa7cf90781c36f1ed36bf27b168ea54089cd34a9-4745534-images-thumbs&n=13",
        // description:"Shop from anywhere"
    },
    {
        id:3,
        image: "https://pricepony.com/wp-content/uploads/2022/08/Best-Huawei-phones-August-2022.jpg",
        // description:"Interact with farmers through direct contact"
    },
    {
        id:4,
        image: "https://avatars.mds.yandex.net/i?id=48d7488524f0f9b5909b7129ee3301598d90dda9-8339189-images-thumbs&n=13",
        // description:"Shop securely"
    } ,
    {
        id:5,
        image: "https://avatars.mds.yandex.net/i?id=7a4524a1f551eb4f30612ae58bb1cbda2ae18a34-8567399-images-thumbs&n=13",
        description:"254742845204"
    }
]

function HeroSection() {
  return (
      <div>
          <Swiper
            className='relative w-full '
            // install Swiper modules
            modules={[Navigation, Pagination,Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
        >
        <div>
            {dummyData.map((item)=>(
            <SwiperSlide className='relative w-full'>

                    <div 
                        className='flex flex-col gap-1 relative'
                        key={item?.id}
                    >
                    <LazyLoadImage 
                        effect='blur'
                        className='w-[100%] h-[72vh] p-[1rem] object-fill  bg-fill'
                        src={item?.image} 
                        alt="farmland image" 
                    />
                    <div className='p-[3rem] text-[#8529cd]  w-[25%] absolute text-[4rem] right-[0rem] top-[0rem]'>
                        <p 
                            className='text-[2rem] font-extrabold opacity-[0.3]'
                        >
                        </p>
                    </div>
                    </div>
            </SwiperSlide>
                    ))}
        </div>
    </Swiper>
    </div>
  )
}

export default HeroSection
