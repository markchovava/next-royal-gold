import Link from 'next/link'
import React from 'react'
import { TiChevronRight } from 'react-icons/ti'
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonInterface{
    link: string
    buttonStyle?: string
    text?: string
    iconStyle?: string
} 


export function ButtonPrimary({link, buttonStyle, text, iconStyle}: ButtonInterface) {
  return (
    <>
    <Link href={link}>
        <button className={`${buttonStyle} px-8 cursor-pointer group font-medium drop-shadow hover:drop-shadow-lg rounded-full flex items-center justify-center gap-0`}>
            <span className='group-hover:-translate-x-2 transition-all ease-in-out duration-300'>
                {text}</span>
            <FaArrowRightLong className={`${iconStyle} text-lg transition-all ease-in-out duration-300 group-hover:translate-x-2`} />
        </button>
    </Link>
    </>
  )
}
