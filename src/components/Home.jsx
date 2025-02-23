import React from 'react'
import { assets } from '../assets/assets'
import FeaturedProduct from './FeaturedProduct'
import Category from './Category'

export default function Home() {
    return (
        <>
            <div className=' bg-[#EDEDED]  flex justify-center'>
                <div className='items-center gap-10 xl:px-60  lg:px-15 md:px-7 sm:px-33 px-[15px] grid lg:grid-cols-2 md:grid-rows-1 lg:mt-20 md:gap-20 lg:pb-0 lg:my-20 md:mb-20 mb-20'>

                    <div className='container  flex justify-center items-center lg:px-0 sm:px-33 px-[15px]'>
                        <img  src={assets.landing_img} alt="" />
                    </div>
                    <div className='container mx-auto rounded-2xl flex lg:justify-start items-center'>
                        <div>
                            <div className=''>
                                <p className='font-bold'>WELCOME TO OUR</p>
                                <h1 className='font-bold sm:text-[96px] text-[50px] text-[#0D2893] sm:leading-[110px] leading-[70px]'>BELISITAS</h1>
                                <h2 className='sm:text-[64px] text-[40px] sm:leading-[70px] leading-[50px] sm:mb-5 mb-3'>RATTAN <br />FURNITURE</h2>
                                <button className='bg-[#0D2893] py-2 px-5 rounded text-white'>View Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Category />

            {/* <div className=' bg-[#EDEDED]'>
                <div className='flex flex-row-reverse gap-30 justify-center mt-20 pb-20'>
                    <div className='w-full md:w-1/2 max-w-lg  flex justify-center items-center '>
                        <div>
                            <div className=''>
                                <p className='font-bold'>WELCOME TO OUR</p>
                                <h1 className='font-bold text-[96px] text-[#0D2893] leading-[110px]'>BELISITAS</h1>
                                <h2 className='text-[64px] leading-[70px] mb-10'>RATTAN <br />FURNITURE</h2>
                                <button className='bg-[#0D2893] py-2 px-5 rounded text-white'>View Collection</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={assets.landing_img} alt="" />
                    </div>
                </div>
            </div> */}

            <div className='flex justify-center  h-120'>
                <div className="w-full bg-[#8d8d8d]">

                </div>
                <div className="w-full bg-[#0D2893]">

                </div>
            </div>



            {/* <div className='my-20'>
                <div className='flex justify-center'>
                    <div className='text-center space-y-3'>

                        <h2 className='text-4xl font-semibold'>Choose your Category</h2>
                        <p>Select your  product from our category options</p>
                    </div>
                </div>
                <div className=' py-5 flex justify-center gap-10 mt-10'>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center  text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center  text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center  text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center  text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                    <div className='bg-[#ededed]  px-10 py-10 rounded-2xl text-center  text-2xl'>
                        <i class="ri-armchair-fill"></i>
                        <p>Chair</p>
                    </div>
                </div>
            </div> */}
<div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                <p className='text-white hidden xl:block'>xl screen</p>
                <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                <p className='text-white lg:hidden md:block hidden'>md screen</p>
                <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                <p className='text-white sm:hidden block'>xs screen</p>
            </div>
            <FeaturedProduct />

            <div className='flex lg:px-30 justify-start'>
                <div className='container mx-auto'>

                </div>
            </div>

            <div className='flex justify-center  h-120'>
                <div className="w-full  bg-[#0D2893]">

                </div>
                <div className="w-full bg-[#8d8d8d]">

                </div>
            </div>
        </>
    )
}
