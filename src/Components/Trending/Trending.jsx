import React from 'react'
import Bestselling from './Bestselling/Bestselling'
import Flashsales from './Flashsales/Flashsales'
import Newarrivals from './Newarrivals/Newarrivals'
import RecentlyViewed from './RecentlyViewed/RecentlyViewed'

function Trending() {
  return (
    <div className='flex flex-col gap-[2rem]'>
      <div>
        <Flashsales/>
      </div>
      {/* <div>
        <Bestselling/>
      </div>
      <div>
        <Newarrivals/>
      </div> */}
      <div>
        <RecentlyViewed/>
      </div>
    </div>
  )
}

export default Trending
