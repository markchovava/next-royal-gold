import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhatWeDo_Old() {
  return (
    
        <section id='service' className="w-full">
        <div className="mx-auto w-[92%] grid lg:grid-cols-8 grid-cols-1 gap-4 lg:gap-0 overflow-hidden rounded-3xl bg-white text-gray-100 drop-shadow-xl lg:h-[36rem]">
          
          {/* Title Section */}
          <div className="lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto p-4 bg-gradient-to-br from-green-400 to-green-950 text-white flex items-center justify-center lg:justify-start rounded-lg lg:rounded-none">
            <h3 className="font-extrabold text-center lg:text-left leading-tight lg:leading-[5rem] text-3xl text-[4rem] lg:text-[5rem]">What we do?</h3>
          </div>
          
          {/* Gold Refinery */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto lg:h-auto w-full relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-sky-600'>
              <Image 
                src={`/assets/img/7by3/06.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Gold refinery background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">
                  Gold Buying
                </h4>
              </Link>
            </div>
          </div>
          
          {/* */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-rose-600'>
              <Image 
                src={`/assets/img/7by3/14.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Jewelry manufacturing background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">Gold Refinery</h4>
              </Link>
            </div>
          </div>
          
          {/*  */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-fuchsia-600'>
              <Image 
                src={`/assets/img/7by3/01.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Gemstone cutting background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">
                  Value Addition - Mint and Jewellery
                </h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-fuchsia-600'>
              <Image 
                src={`/assets/img/7by3/00.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Gemstone cutting background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">
                  Welcome Center
                </h4>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
  )
}
