import Image from 'next/image'
import React from 'react'

export default function GridRight2(
    {title, desc, img}: 
  {title: string, desc: string, img: string}
) {
  return (
    <section className='w-full grid lg:grid-cols-2 h-[25rem] gap-8'>
                <div className='lg:h-auto h-[15rem] bg-gray-400 lg:rounded-r-3xl overflow-hidden drop-shadow'>
                    <Image 
                        src={img}
                        height={500} 
                        width={1000} 
                        className="w-full h-full object-cover" 
                        alt="Background Image" />
                </div>  
                <div className='lg:pr-[8%] lg:w-full w-[92%] mx-auto lg:mx-0 flex flex-col items-start justify-center font-light text-gray-700 text-[1.5rem]'>
                    <h4 className='text-black text-[2rem] font-medium leading-tight mb-2'>
                        {title}
                    </h4>  
                    <p>
                        {desc}
                    </p>
                </div>  
            </section>
  )
}
