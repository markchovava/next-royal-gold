import { ServicesData } from '@/app/_data/ServicesData'
import React from 'react'



export default function Grid5({dbData}: {dbData: any[]}) {
  return (
    <section className='w-full'>
        <div className='w-[80%] mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
            {ServicesData.data.map((i, key) => (
                <div 
                    key={key} 
                    className={`${key < ServicesData.data.length - 1 ? 'border-r border-gray-300' : ''} w-full p-4`}>
                    <div className='w-[50%] mb-4'>{i.icon}</div>
                    <h3 className='font-bold text-[1.4rem] mb-2 leading-tight'>{i.title}</h3>
                    <p className='text-gray-600 text-xl font-light'>{i.desc}</p>
                </div>
            ))}   
        </div>
    </section>
  )
}
