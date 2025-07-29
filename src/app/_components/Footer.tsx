import React from 'react'
import Link from 'next/link'
import { FaXTwitter, FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Logo from './Logo';
import { NavLinksData } from '../_data/NavLinksData';



const socialLinks = [
  { name: 'Facebook', href: '#', color: 'text-blue-500', icon: <FaFacebookF className='text-2xl' /> },
  { name: 'Twitter', href: '#', color: 'text-gray-500', icon: <FaXTwitter className='text-2xl' /> },
  { name: 'Instagram', href: '#', color: 'text-pink-500', icon: <FaInstagram className='text-2xl' /> },
  { name: 'LinkedIn', href: '#', color: 'text-blue-600', icon: <FaLinkedin className='text-2xl' /> },
];


export default function Footer() {
  return (
    <>
    <footer className='w-full pt-[7rem] pb-[4rem] text-gray-200 bg-green-950'>
        <section className='mx-auto w-[92%] grid lg:grid-cols-3 grid-cols-1 gap-8 mb-12'>
            <div className=''>
                <Logo color1='text-white' color2='text-amber-500' color3='text-green-700' />
                <div className='font-light text-lg mt-4'>
                    Royal Gold Niger is a joint venture between Niger and Suvarna Royal Gold 
                    Trading LLC, an Emirati company, to establish Niger's first gold refinery and gemstone 
                    processing facilities.
                </div>
            </div>
            <div className=''>
                <h3 className='text-[1.8rem] leading-[1.8rem] font-serif mb-4'>Our Links</h3>
                <ul className='flex flex-col gap-2 ml-4'>
                    {NavLinksData.map((item) => (
                        <Link href={item.href} key={item.name}>
                            <li className='hover:underline hover:translate-x-2 transition-all ease-in-out duration-300 cursor-pointer'>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className=''>
                <h3 className='text-[1.8rem] font-serif mb-4'>
                    Stay in touch</h3>
                <p className='font-light text-lg mb-6'>
                    Keep up to date on social media or contact us with any other information
                </p>
                <div className='flex items-center gap-4'>
                    {socialLinks.map((i) => (
                        <Link href={i.href} key={i.name} className={`${i.color} hover:scale-110 transition-all ease-in-out duration-300`}>
                            {i.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        <section className='mx-auto w-[92%] flex lg:flex-row flex-col items-center justify-between gap-8'>
            <div className='flex items-center justify-start gap-3 text-sm text-gray-400'>
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Sitemap
                </Link> |
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Terms of Service
                </Link> |
                <Link href='#' className='hover:text-gray-50 hover:underline ease-in-out transition-all duration-300'>
                    Cookie Policy
                </Link>
            </div>

            <div className='text-sm text-gray-400 flex items-center lg:flex-row flex-col gap-2'>
                <p className=''>
                    &copy; {new Date().getFullYear()} Royal Gold Niger. All rights reserved.
                </p>
                <p className='italic'>
                    Developed & maintained by <Link href='#' className='text-blue-500'>FL Designers</Link>
                </p>
            </div>
        </section>
    </footer>
    </>
  )
}
