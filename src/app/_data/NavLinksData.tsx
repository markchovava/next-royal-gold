import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NavLinksData = [
  { name: 'Home', href: '/' },
  { name: 'Who we are?', href: '#about' },
  { name: 'Why Us?', href: '#why-us' },
  { name: 'What we do?', href: '#what-we-do' },
  { name: 'Contact Us', href: '#contact' },
];



const SocialLinksData = [
  { name: 'Facebook', href: '#', color: 'text-blue-500', icon: <FaFacebookF className='text-2xl' /> },
  { name: 'Twitter', href: '#', color: 'text-gray-500', icon: <FaXTwitter className='text-2xl' /> },
  { name: 'Instagram', href: '#', color: 'text-pink-500', icon: <FaInstagram className='text-2xl' /> },
  { name: 'LinkedIn', href: '#', color: 'text-blue-600', icon: <FaLinkedin className='text-2xl' /> },
];