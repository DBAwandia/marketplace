import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Trending from '../Trending/Trending'
import Navbar from "../Navbar/Navbar"
import Choosecategory from '../Choosecategory/Choosecategory'
import Footer from '../Footer/Footer'
import CompanyBrief from '../CompanyBrief/CompanyBrief'

function Home() {
  return (
    <div className='relative w-full min-h-screen bg-[#f5f5f5]'>
        <div>
            <Navbar/>
        </div>
        <div>
            <HeroSection/>
        </div>
        <div className='sticky top-0 z-[9999999999999999]'>
            <Choosecategory/>
        </div>
        <div className='py-[3rem]'>
            <CompanyBrief/>
        </div>
        <div>
            <Trending/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home
