import { assets } from "../assets/assets"
import { featured_product } from "../assets/assets"
import Button from "./Button"

export default function FeaturedProduct() {
    return (
        <>
            <div className="xl:px-50 lg:px-15 md:px-7 sm:px-33 px-[15px] my-20">
                <div className='container mx-auto'>
                    <div className='space-y-2 my-5'>
                        <h2 className='text-4xl font-semibold'>Featured Collections</h2>
                        <p className="mb-10">Most Selling and Trending Product</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                            <div>
                                <img className="rounded-2xl mb-2" src={assets.placeholder} alt="" />
                                <h3 className="font-semibold text-[20px]">Accent Chair</h3>
                                <p className="font-bold text">Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                        {featured_product.map((item, index) => {
                            return (
                                <div key={index} className="bg-[#ededed] p-5 rounded-2xl">
                                    <img className="md:h-50 -mt-10" src={item.featured_image} alt="" />
                                    <p className="mb-2">{item.featured_name}</p>
                                    <Button text="View More" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
