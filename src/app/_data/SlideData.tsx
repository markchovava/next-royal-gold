import { ButtonPrimary } from "../_components/buttons/Buttons";


export const SlideData = [
  {
    id: 1,
    img: '/assets/img/7by3/00.jpg',
    title: 'Welcome to Royal Gold Niger',
    description: "We are Niger's first gold refinery and gemstone processing facilities.",
    button: <ButtonPrimary
              link={`#about`} 
              text={`Who we are?`} 
              buttonStyle='text-lg text-gray-800 py-4 px-8 bg-gray-50'
              iconStyle='text-transparent text-lg group-hover:text-amber-600' />
  },
  {
    id: 2,
    img: '/assets/img/7by3/13.jpg',
    title: 'What we do?',
    description: `Gold buying, refinery, value addition and a welcome center.`,
    button: <ButtonPrimary 
              link={`#service`} 
              text={`View More`} 
              buttonStyle='text-lg text-gray-800 py-4 bg-gray-50' 
              iconStyle='text-transparent text-lg group-hover:text-amber-600' />
  },
  {
    id: 2,
    img: '/assets/img/7by3/14.jpg',
    title: 'Talk to us',
    description: 'We would like to hear from you.',
    button: <ButtonPrimary 
              link={`#contact`} 
              text={`Contact Us`} 
              buttonStyle='text-lg text-gray-800 py-4 bg-gray-50' 
              iconStyle='text-transparent text-lg group-hover:text-amber-600' />
  }, 
];