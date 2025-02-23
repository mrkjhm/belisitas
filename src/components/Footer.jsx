import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
    return (
        <>

            <div className='bg-[#EDEDED] xl:px-50 lg:px-15 md:px-7 sm:px-33 px-[15px] py-15'>
                <div className='container mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
                    <div>
                        <img src={assets.belisitas_logo} alt="" className='logo1' />
                        </div>
                    <div className=''>
                        <h3 className='font-bold md:mb-3 sm:mb-1'>Company</h3>
                        <div className=''>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Products</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='font-bold md:mb-3 sm:mb-1'>Contact Us</h3>
                        <div className=''>
                            <p>23424234</p>
                            <p>kdfalkdjfkla</p>
                            <p>sample@gmail.com</p>

                        </div>
                    </div>
                    <div >

                    <img src={assets.belisitas_logo} alt="" className='logo1' />
                    </div>
                </div>
            </div>
            <div className='text-center my-2'>
                <p>Copyright  © 2025 by <span className='font-semibold'>Belisitas Rattan Furniture</span> </p>
            </div>
        </>
    )
}
