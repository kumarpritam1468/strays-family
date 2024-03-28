import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='main-bg h-[90vh] flex flex-col-reverse lg:flex-row px-6 py-4 pb-20 lg:py-0 lg:px-16 gap-4 lg:gap-10 justify-center lg:justify-between items-center'>
                <div className="heroText text-center lg:text-left flex gap-4 lg:gap-8 flex-col items-center lg:items-start lg:w-[50vw]">
                    <p className=' max-lg:hidden font-bold text-2xl'>StraysFamily Foundation</p>
                    <h1 className=' font-extrabold text-3xl lg:text-5xl font-[Inter]'>Help us bring smile to the strays</h1>
                    <p className=' font-medium italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius aliquid in officia id explicabo corrupti nobis asperiores quas pariatur repellat.</p>
                    <div className="buttons flex gap-6">
                        <div className="btn1">
                            Donate
                        </div>
                        <div className="btn2">
                            Know More
                        </div>
                    </div>
                </div>
                <div className="heroImg overflow-hidden rounded-3xl w-[21rem] lg:w-full lg:absolute lg:bottom-0 lg:left-[55%] z-10">
                    <img src="/assets/hero-dog2.png" alt="" className='shdw lg:w-[40vw]' />
                </div>
            </section>
        </>
    )
}

export default Home