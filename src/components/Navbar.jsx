import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // ✅ Close menu when resizing to a larger screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false); // Close menu if screen is larger than md (768px)
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ✅ Disable scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <>


            {/* md:fixed w-full xl:px-50  lg:px-30 md:px-20 px-10  top-0  shadow-md z-50 */}
            <nav className=" !bg-white z-[100] shadow-md">
                <div className="lg:fixed w-full xl:px-50  lg:px-15 md:px-7 sm:px-33 px-[15px] top-0  shadow-md z-[100] bg-white">
                    <div className='container mx-auto flex md:justify-end justify-center gap-10 border-b border-[#ededed] py-2 text-[13px] md:text-[16px]  '>
                        <div className="container flex gap-5 sm:justify-end justify-center">
                            <div className='flex gap-2'>
                                <i className="ri-phone-fill"></i>
                                <h1>+63 912 3456 789
                                </h1>
                            </div>
                            <div className='flex gap-2'>
                                <i className="ri-mail-fill"></i>
                                <h1>sample@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-between items-center py-3">
                        <NavLink to="/home"><img className="logo" src={assets.belisitas_logo} alt="Logo" /></NavLink>
                        <div className="hidden md:flex">
                            <ul className="flex gap-8 cursor-pointer">
                                <NavLink to='/home' ><li className="hover:font-semibold">Home</li></NavLink>
                                <NavLink to='/about-us' ><li className="hover:font-semibold">About Us</li></NavLink>
                                <NavLink to='/product'><li className="hover:font-semibold">Products</li></NavLink>
                                <NavLink to="/contact-us"><li className="hover:font-semibold">Contact Us</li></NavLink>

                            </ul>
                        </div>

                        <button className="md:hidden text-2xl relative z-50" onClick={toggleMenu}>
                            {menuOpen ? (
                                <i className="ri-close-line transition-transform duration-300 rotate-180"></i>
                            ) : (
                                <i className="ri-menu-3-line transition-transform duration-300 rotate-0"></i>
                            )}
                        </button>


                        <div className={`fixed top-0 left-0 w-2/3 h-screen bg-white shadow-lg transition-transform duration-500 ease-in-out
                        ${menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none opacity-0"}`}>
                            <ul className="text-left p-10 space-y-6">
                                <NavLink to='/home' onClick={toggleMenu} ><li className="hover:font-semibold my-5">Home</li></NavLink>
                                <NavLink to='/about-us' onClick={toggleMenu} ><li className="hover:font-semibold my-5">About Us</li></NavLink>
                                <NavLink to="/product" onClick={toggleMenu} ><li className="hover:font-semibold my-5">Products</li></NavLink>
                                <NavLink to="/contact-us" onClick={toggleMenu} ><li className="hover:font-semibold my-5">Contact Us</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}
