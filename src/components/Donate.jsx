import React from 'react'
import { donateImages } from '../data'

const Donate = () => {
  return (
    <section className=' main-bg h-screen max-lg:h-fit flex flex-col justify-between items-center py-6 max-lg:px-6 max-lg:gap-6' id='donate'>
      <h1 className=' text-3xl font-bold'>Help Us Now...</h1>

      <div className=" bg-main-yellow rounded-[3rem] w-[85vw] h-[50vh] border-2 border-white max-lg:hidden">
        <div className=' flex gap-10 absolute w-[85vw] -translate-y-[12rem] px-[2.5vw]'>
          {donateImages.map((item, index) => (
            <div className=' w-1/3 rounded-2xl p-3 flex flex-col gap-4 items-center h-[29rem] bg-slate-100 border-2 border-main-yellow hover:shadow-[0_0_1.5rem] hover:shadow-main-yellow transition-all duration-300 ease-in-out donate-card'>
              <div className=' h-[75%] overflow-hidden object-contain rounded-2xl'>
                <img src={item.imgUrl} alt="" className=' w-fit object-cover donate-img' />
              </div>

              <h1 className=' font-semibold text-[1rem]'>{item.text}</h1>

              <div className='btn1'>
                Donate
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col gap-4 lg:hidden">
        {donateImages.map((item, index) => (
          <div className=' w-full rounded-2xl p-3 flex flex-col gap-4 items-center h-fit pb-6 bg-slate-100 border-2 border-main-yellow hover:shadow-[0_0_1.5rem] hover:shadow-main-yellow transition-all duration-300 ease-in-out donate-card'>
            <div className=' h-[75%] overflow-hidden object-contain rounded-2xl'>
              <img src={item.imgUrl} alt="" className=' w-fit object-cover donate-img' />
            </div>

            <h1 className=' font-semibold text-[1rem]'>{item.text}</h1>

            <div className='btn1'>
              Donate
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Donate