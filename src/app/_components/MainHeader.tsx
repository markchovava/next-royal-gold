import React from 'react'
import MainSlider from './MainSlider'
import Logo from './Logo'
import NavArea from './NavArea'

export default function MainHeader() {
  return (
    <>
    <section className='w-full h-[38rem] bg-gray-950 relative'>
        <div className='absolute z-5 w-full h-full'>
            <MainSlider />
        </div>
        <div className='absolute z-10 top-0 h-[25%] w-full'>
            <NavArea />
         
        </div>
    </section>
    </>
  )
}
