import React from 'react'
import { ContactsData } from '../_data/ContactsData'
import { SocialLinksData } from '../_data/SocialLinksData'
import Link from 'next/link'


export default function TopArea() {
  return (
    <section className='w-full'>
        <div className='mx-auto w-[92%] flex lg:flex-row flex-col justify-between items-center gap-4 border-b border-gray-200 lg:py-2 pt-4 pb-4'>
            <div className='text-sm flex items-center justify-start gap-4'>
                { ContactsData.map((i, key) => (
                    <div key={key} className='flex items-center justify-start gap-2'>
                        <span className={`${i.css} `}>{i.icon}</span> <span>{i.text}</span>
                    </div>
                )) }
            </div>
            <div className='flex items-center justify-end gap-3 text-sm'>
                {SocialLinksData.map((i, key) => (
                    <Link key={key} href={i.href}>
                        <button className={` ${i.css}`}>{i.icon}</button>
                    </Link>
                ))}
            </div>
        </div>
    </section>
   
   )
}
