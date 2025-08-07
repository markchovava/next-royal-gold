import React from 'react'
import Image from 'next/image'
import { ButtonPrimary } from './buttons/Buttons'



export default function ContactComp() {
  return (

    <section className='w-[92%] h-[28rem] relative mb-[8rem] mx-auto rounded-3xl overflow-hidden'>
        <div className='absolute z-5 top-0 left-0 w-full h-full bg-gradient-to-t from-sky-700 to-blue-900'>
            <Image
                src={`/assets/img/7by3/04.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover" 
                alt="Background Image" />
        </div>
        <div className='absolute z-10 top-0 left-0 w-full h-full opacity-40 bg-gradient-to-tr from-gray-600 to-green-950'>
        </div>

        <div className='absolute z-20 top-0 left-0 w-full h-full '>
            <div className='w-full h-full flex items-center justify-center flex-col gap-4 text-white'>
                <h2 className='text-[3rem] font-extrabold text-white'>Talk to us</h2>
                <ButtonPrimary 
                  link={`#contact`} 
                  text={`Contact Us`} 
                  buttonStyle='text-lg text-gray-800 py-4 bg-gray-50' 
                  iconStyle='text-transparent text-lg group-hover:text-green-600' />
            </div>
        </div>
    </section>
  )
}
