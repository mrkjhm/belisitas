import React from 'react'
import { category_list } from '../assets/assets'


export default function Category() {
    return (
        <div className="xl:px-50 lg:px-15 md:px-7 sm:px-33 px-[15px] my-20">
            <div className='container mx-auto space-y-2 my-5 text-center'>
                <h2 className='text-4xl font-semibold'>Choose your Category</h2>
                <p className="mb-10">Select your  product from our category options</p>
            </div>
            <div className='container mx-auto lg:flex grid sm:grid-cols-3 grid-cols-2 justify-center items-center gap-10'>
                {category_list.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center text-center'>
                            
                                <img className=' rounded mb-3' src={item.category_image} alt="" />
                                <p className='text-center'>{item.category_name}</p>                     
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
