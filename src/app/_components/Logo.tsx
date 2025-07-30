import Link from 'next/link'
import React from 'react'

interface LogoColorInterface{
    color1: string, 
    color2: string, 
    color3: string, 
}

export default function Logo({color1, color2, color3}: LogoColorInterface) {

  return (
    <>
    <Link href="/">
    <h3 className='text-[3rem] leading-[2.5rem] font-extrabold'>
        <span className={color1}>Royal</span>  
        <span className={`${color2} `}>Gold</span>
        <span className={color3}>Niger</span>
    </h3>
    </Link>
    </>
  )
}
