"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import MobileToggleBtn from './buttons/MobileToggleBtn'
import { NavLinksData } from '../_data/NavLinksData'

export default function NavArea() {
    const [isToggleBtn, setIsToggleBtn] = useState<boolean>(false)
  return (
    <>
    <nav className='w-full text-white'>
        <section className='mx-auto w-[92%] hidden lg:flex lg:flex-row flex-col items-center justify-between py-8 gap-3'>
            <Logo color1='text-white' color2='text-amber-500' color3='text-green-400' />
            <ul className='flex items-center justify-end gap-4'>
                { NavLinksData.map((i, key) => (
                    <Link key={key} href={i.href}>
                    <li className='font-medium text-xl py-3 duration-300 transition-all ease-in-out hover:text-amber-300 border-b-2 border-transparent hover:border-amber-300'>
                        {i.name}
                    </li>
                    </Link>
                ))}
            </ul>
        </section>

        <section className='w-full lg:hidden pt-6 text-white'>
            <div className='text-center flex items-center justify-center mb-3'>
                <Logo color1='text-white' color2='text-amber-500' color3='text-green-400' />
            </div>

            <div className='mx-auto w-[92%] flex items-center justify-end py-4'>
                <MobileToggleBtn setIsToggleBtn={setIsToggleBtn}  isToggleBtn={isToggleBtn} />
            </div>

            {/* Mobile Menu with smooth slide animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isToggleBtn 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
            }`}>
                <ul className='flex flex-col items-center gap-1 pb-4 bg-black'>
                    { NavLinksData.map((i, key) => (
                        <Link key={key} href={i.href}>
                        <li className='w-[100%] font-medium py-3 duration-300 transition-all ease-in-out hover:text-amber-300 border-b-2 border-transparent hover:border-amber-300 transform'>
                            {i.name}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    </nav>
    </>
  )
}