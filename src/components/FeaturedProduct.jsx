import { assets } from "../assets/assets"

export default function FeaturedProduct() {
    return (
        <div className='xl:px-50  lg:px-30 md:px-20 px-10 my-20'>
            <div className='space-y-2 my-5'>
                <h2 className='text-4xl font-semibold'>Featured Collections</h2>
                <p>Most Selling and Trending Product</p>
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





        </div>
    )
}
