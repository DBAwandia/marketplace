import React from 'react'

function Footer() {
  return (
    <div className='w-full  bg-[#8529cd] text-[#fff]'>
        <div className='flex items-center justify-around py-[3rem] text-[1.8rem]'>
            <div className='flex flex-col gap-5'>
                <u className='font-[450] text-[2.3rem]'>About us</u>
                <ul className='flex flex-col gap-[2rem] cursor-pointer'>
                    <li className='hover:text-[#ff9900] hover:font-bold'>About our shop</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Terms & Conditions</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Privacy Policy</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Copyright Infringement Policy</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Billing Policy</li>
                </ul>
            </div>
            <div>
                {/* <h1 className='text-[black] font-[450]'>Support</h1> */}
                <ul className='flex flex-col gap-[2rem] cursor-pointer'>
                    <li className='hover:text-[#ff9900] hover:font-bold'>support@phonespalace.co.ke</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Safety tips</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Contact Us</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>FAQ</li>
                </ul>
            </div>
            <div>
                {/* <h1 className='text-[black] font-[450]'>Our resources</h1> */}
                <ul className='flex flex-col gap-[2rem] cursor-pointer'>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Our Instagram</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Our Facebook</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Our Twitter</li>
                    <li className='hover:text-[#ff9900] hover:font-bold'>Our Discord</li>
                </ul>
            </div>
           
        </div>
      <div className='w-full bg-[#f7f9f9] text-[#8529cd] font-mono font-bold text-center text-[2rem]'>
        <p>© 2023 Phonepalace, Inc.</p>
      </div>
    </div>
  )
}

export default Footer
