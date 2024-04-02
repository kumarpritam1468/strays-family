import React from 'react'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' bg-main-yellow text-yellow-900 py-12 px-6'>
            <section className=' grid border-b-2 border-mid-yellow pb-5 gap-10 md:text-left'>
                <h1 className=' text-xl font-bold text-center md:text-left'>(Logo) StarysFamily Foundation</h1>

                <div className=" grid grid-cols-1 md:grid-cols-2 md:place-content-start gap-7 md:max-w-[840px]">
                    <div className=" grid gap-2.5 text-center md:text-left">
                        <h2 className=' my-3 text-xl font-semibold'>Visit Us</h2>
                        <p>Lorem ipsum dolor, <br />
                            sit amet, consectetur <br />
                            adipisicing elit. <br />
                            Blanditiis, dolor.</p>
                    </div>

                    <div className=" text-center md:text-left flex flex-col gap-4 items-center md:items-start">
                        <h2 className=' my-3 text-xl font-semibold'>Social Media</h2>
                        <p className=' w-1/2 md:w-full'>Follow Us on Insatgram to view all our works and all the updates...</p>
                        <a href=""  className=' text-3xl bg-mid-yellow p-2.5 rounded-full hover:text-[#CD3967] transition-all duration-300 ease-in-out cursor-pointer'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </section>

            <section className=' mt-12 flex justify-between items-center flex-col-reverse md:flex-row gap-2 px-5 text-center text-sm md:text-base'>
                <p>&copy; 2024 All Rights Reserved</p>

                <div className=" flex gap-4 text-yellow-800">
                    <a className=' hover:text-yellow-950' href="/">Home</a>
                    <a className=' hover:text-yellow-950' href="#wroks">Our Works</a>
                    <a className=' hover:text-yellow-950' href="#donate">Donate</a>
                </div>
            </section>
        </footer>
    )
}

export default Footer