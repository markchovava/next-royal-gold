import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export const SocialLinksData = [
    { id:1, 
        href:'#', 
        icon: <FaFacebookF className='group-hover:scale-110 transition-all ease-in-out duration-200' />, 
        css: 'group cursor-pointer text-blue-700 border-blue-700' 
    },
    { id: 2, 
        href:'#', 
        icon: <FaLinkedinIn className='group-hover:scale-110 transition-all ease-in-out duration-200' />, 
        css: 'group cursor-pointer text-blue-500 border-blue-500' 
    },
    {id: 3, 
        href:'#', 
        icon: <FaInstagram className='group-hover:scale-110 transition-all ease-in-out duration-200' />, 
        css: 'group cursor-pointer text-pink-500 border-pink-500' 
    },
]