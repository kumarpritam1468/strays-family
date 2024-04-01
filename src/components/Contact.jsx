import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { RiMessage3Fill } from "react-icons/ri";
import { contact } from '../data';

const Contact = () => {
    return (
        <section className=' main-bg min-h-screen lg:h-screen lg:overflow-hidden px-20 py-10 flex items-center justify-between' id='contact'>
            <div className=' flex flex-col gap-10 lg:w-[60%]'>
                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-3xl font-bold text-yellow-900'>Easy to Contact Us!</h1>
                    <p className=' text-xs text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id voluptatum adipisci debitis rerum magni quo dignissimos accusantium aliquid placeat.</p>
                </div>

                <div className=' grid grid-cols-1 gap-6 lg:grid-cols-2'>
                    {contact.map((item, index) => (
                        <div className=" border-2 border-slate-300 rounded-md px-6 py-4 bg-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_1.5rem] hover:shadow-slate-400 flex flex-col gap-4" key={index}>
                            <div className=" flex gap-4 items-center">
                                <div className=' text-2xl'>
                                    {item.icon === 'FaPhone' && <FaPhone />}
                                    {item.icon === 'BsWhatsapp' && <BsWhatsapp />}
                                    {item.icon === 'IoMdMail' && <IoMdMail />}
                                    {item.icon === 'RiMessage3Fill' && <RiMessage3Fill />}
                                </div>

                                <div>
                                    <h1 className=' text-sm font-semibold'>{item.type}</h1>
                                    <p className=' text-xs'>{item.data}</p>
                                </div>
                            </div>

                            <div className="w-full bg-sec-yellow text-center py-2 font-semibold text-yellow-800 rounded-md transition-all duration-400 ease-in-out hover:bg-main-yellow hover:text-black cursor-pointer hover:rounded-xl">
                                {item.buttonText}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <img src="/assets/silly_dog.png" alt="" className='doggy max-lg:hidden absolute -right-[40rem] w-1/2 -translate-y-12 shdw' />
        </section>
    )
}

export default Contact