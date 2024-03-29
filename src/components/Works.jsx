import React from 'react'
import { images } from '../data';

const Works = () => {
    return (
        <section id='works' className=' main-bg flex flex-col gap-8 px-6 py-6 pt-12 lg:h-screen'>
            <h1 className=' font-bold text-4xl'>Our Work Gallery</h1>
            <div className=' flex flex-col gap-6 justify-center items-center lg:flex-row'>
                {images.map((item, index) => (
                    <div className=' flex p-3 pb-5 bg-sec-yellow rounded-md flex-col gap-5 w-[92%] lg:w-[30%] items-center border-2 border-main-yellow' key={index}>
                        <img src={item.imgUrl} alt="" />
                        <h1 className=' text-2xl font-bold text-center'>{item.text}</h1>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Works