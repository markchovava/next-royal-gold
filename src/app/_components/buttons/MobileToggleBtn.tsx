"use client"
import { Menu, X } from 'lucide-react'
import React from 'react'


interface BtnToggleInterface{
    setIsToggleBtn: React.Dispatch<React.SetStateAction<boolean>> 
    isToggleBtn: boolean
}


export default function MobileToggleBtn({setIsToggleBtn, isToggleBtn}: BtnToggleInterface ) {

  const handleToggle = () => {
    setIsToggleBtn(!isToggleBtn)
  }
    
  return (
    <button onClick={handleToggle} className='text-lg cursor-pointer'>
        {isToggleBtn
        ? <X />
        : <Menu />
        }
    </button>
  )
}
