import React from 'react'
import { assets } from '../assets/assets'

export default function Product() {
  return (
    <>

      <div className=' bg-[#EDEDED]  flex justify-center'>
        <div className='items-center lg:px-50 md:px-7 sm:px-33 px-[15px] grid lg:grid-cols-2 md:grid-rows-1  lg:mt-20 lg:gap-10 lg:pb-0 pb-10 '>

          <div className='container mx-auto rounded-2xl flex lg:justify-start justify-center items-center'>
            <div className='lg:py-40 md:py-15 py-10 lg:text-start text-center'>
              <h1 className='text-5xl font-bold mb-5 text-[#0D2893]'>Products</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className='container mx-autoflex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
            <img src={assets.page_img} alt="" />
          </div>
        </div>
      </div>

     
      <div className='h-screen justify-center flex'>
        <div className='flex justify-center items-center'>
          <div>

            <h1 className='text-3xl font-semibold'>PRODUCT PAGE</h1>

          </div>

        </div>
      </div>
      <div className="h-screen bg-red-200"></div>
    </>
  )
}
