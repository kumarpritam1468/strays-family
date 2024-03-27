import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <nav className=' flex justify-between items-center px-6 lg:px-10 h-[10vh] bg-main-yellow' >
            <div className=" p-1 border-2 border-black rounded-full">
                log
            </div>

            <div className=" max-lg:hidden flex items-center gap-2">
                <a href="" className=' px-4 py-1 bg-transparent hover:bg-black hover:text-white rounded-3xl cursor-pointer transition-all duration-300'>Our Works</a>
                <a href="" className=' px-4 py-1 bg-transparent hover:bg-black hover:text-white rounded-3xl cursor-pointer transition-all duration-300'>About Us</a>
                <a href="" className=' px-4 py-1 bg-transparent hover:bg-black hover:text-white rounded-3xl cursor-pointer transition-all duration-300'>Contact Us</a>
                <a href="" className=' bg-black px-4 py-1 rounded-3xl text-white'>Donate</a>
            </div>

            <div className=' text-2xl lg:hidden cursor-pointer' onClick={()=>setMenuActive(!menuActive)}>
                {menuActive ? <TfiClose/> : <HiOutlineMenuAlt3/>}
            </div>

            <div className={` absolute -top-60 w-screen left-0 flex flex-col gap-6 items-center justify-center py-6 bg-main-yellow transition-all duration-500 ease-in-out border-black border-y-2 ${menuActive ? 'top-[10vh]' : ''} lg:hidden `}>
                <a href="">Our Works</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="" className=' bg-black px-4 py-1 rounded-3xl text-white'>Donate</a>
            </div>
        </nav>
    )
}

export default Navbar