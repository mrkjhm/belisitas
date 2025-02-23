import React from 'react'
import { assets } from '../assets/assets'

export default function About() {
  return (
    <>

      <div className=' bg-[#EDEDED]  flex justify-center'>
        <div className='items-center lg:px-50 md:px-7 sm:px-33 px-[15px] grid lg:grid-cols-2 md:grid-rows-1  lg:mt-20 lg:gap-10 lg:pb-0 pb-10 '>

          <div className='container mx-auto rounded-2xl flex lg:justify-start justify-center items-center'>
            <div className='lg:py-40 md:py-15 py-10 lg:text-start text-center'>
              <h1 className='text-5xl font-bold mb-5 text-[#0D2893]'>About Us</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='container mx-autoflex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
            <img src={assets.page_img} alt="" />
          </div>
        </div>
      </div>
      <div className=' text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>


        <div className='flex flex-row gap-20 justify-center '>
          <img className=' w-full md:w-1/2 max-w-lg rounded-2xl' src={assets.placeholder} alt="" />
          <div className='flex justify-center items-center'>
            <div action="" className='text-start max-w-2xl mx-auto text-gray-500 '>
              <h2 className='flex font-semibold text-5xl mb-5'>Welcome to Belisitas Rattan Furnitures</h2>
              <div className='space-y-5'>

                <p className='flex flex-wrap'>
                  Provide best quality  of Furniture and we always focus on quality, technology and try to make our customer happy
                </p>
                <p>
                  Belisitas is a DIRECT manufacturer of Rattan Furniture and Home Decor. Based in the Philippines, we pride ourselves on producing high-quality products using traditional techniques, showcasing talented craftsmanship, and offering the LOWEST deals.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel hendrerit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis sed metus quis vulputate.
                </p>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}
