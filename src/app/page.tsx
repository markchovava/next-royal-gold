import Image from "next/image";
import MainSlider from "./_components/MainSlider";
import FadeSlideIn from "./_components/FadeSlideIn";
import Link from "next/link";
import CarouselOne from "./_components/CarouselOne";
import { ProjectData } from "./_data/ProjectData";
import ContactComp from "./_components/ContactComp";



export default function Home() {
  return (
    <>
    <MainSlider />


     <FadeSlideIn slideDirection="up" duration={1500}>
      <section id='about' className="w-full pt-[6rem] pb-[6rem]">
        <div className="mx-auto text-center flex items-center justify-center flex-col w-[65%]">
          <h3 className="text-[4rem] text-center font-extrabold ">About Us</h3>
          <hr className="w-[12rem] border-b border-[0.4rem] border-green-700" />
          <p className="text-[1.8rem] font-light mt-[2rem]">
            Royal Gold Niger SA is an established joint venture in Niger, formed through a 
            partnership between the government of Niger and Suvarna Royal Gold Trading LLC.
            The formation of Royal Gold Niger is a cornerstone of Niger's new mining policy, 
            which emphasizes economic sovereignty and maximizing the benefits of its natural resources 
            for its citizens. 
          </p>
        </div>
      </section>
     </FadeSlideIn>


      <FadeSlideIn slideDirection="left" duration={1500}>
        <section id='why-us' className='w-full grid lg:grid-cols-2 h-[25rem] gap-8 mb-[8rem]'>
            <div className='pl-[8%] flex flex-col items-start justify-center font-light text-gray-700 text-[1.5rem]'>
                {/* <h3 className='text-[2.5rem] leading-[2.5rem] mb-4 font-extrabold text__gradient'>
                    The Vision
                </h3> */}
                <p>
                    This project, formalized as Royal Gold Niger, aims to industrialize artisanal mining, create local jobs, 
                    boost government revenue, and provide training opportunities. The refinery, jewelry manufacturing, and gemstone 
                    processing units will be located in Niamey, the capital city. 
                </p>
            </div>
            
            <div className='lg:h-auto h-[15rem] bg-gray-400 lg:rounded-l-3xl overflow-hidden drop-shadow'>
                <Image 
                    src={`/assets/img/7by3/04.jpg`} 
                    height={500} 
                    width={1000} 
                    className="w-full h-full object-cover" 
                    alt="Background Image" />
            </div>
           
        </section>
    </FadeSlideIn>


    <FadeSlideIn slideDirection="right" duration={1500}>
            <section className='w-full grid lg:grid-cols-2 h-[25rem] gap-8 mb-[8rem]'>
    
                <div className='lg:h-auto h-[15rem] lg:rounded-l-3xl bg-gray-400 rounded-r-3xl overflow-hidden drop-shadow'>
                    <Image 
                        src={`/assets/img/7by3/05.jpg`} 
                        height={500} 
                        width={1000} 
                        className="w-full h-full object-cover" 
                        alt="Background Image" />
                </div>
                
                <div className='lg:pr-[8%] lg:w-full w-[92%] mx-auto lg:mx-0 flex flex-col items-start justify-center font-light text-gray-700 text-[1.5rem]'>
                   {/*  <h3 className='text-[2.5rem] leading-[2.5rem] mb-4 font-extrabold text__gradient'>
                        Lorem ipsum dolor sit amet.
                    </h3> */}
                    <p>
                        This is seen as a strategic move for Niger to take more control of its natural resources and boost its economy. 
                        By processing gold locally, Niger hopes to increase tax revenue, compete with established West African refiners, and 
                        formalize small-scale gold mining activities. 
                    </p>
                </div>
               
            </section>
    </FadeSlideIn>


     <FadeSlideIn slideDirection="up" duration={1500}>
        <section id='service' className="w-full">
        <div className="mx-auto w-[92%] grid lg:grid-cols-8 grid-cols-1 gap-4 lg:gap-0 overflow-hidden rounded-3xl bg-white text-gray-100 drop-shadow-xl lg:h-[36rem]">
          
          {/* Title Section */}
          <div className="lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto p-4 bg-gradient-to-br from-green-400 to-green-950 text-white flex items-center justify-center lg:justify-start rounded-lg lg:rounded-none">
            <h3 className="font-extrabold text-center lg:text-left leading-tight lg:leading-[5rem] text-3xl text-[4rem] lg:text-[5rem]">What we do?</h3>
          </div>
          
          {/* Gold Refinery */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto lg:h-auto w-full relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-sky-600'>
              <Image 
                src={`/assets/img/7by3/02.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Gold refinery background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">A state-of-the-art gold refinery</h4>
              </Link>
            </div>
          </div>
          
          {/* Jewelry Manufacturing */}
          <div className="lg:col-span-3 aspect-square lg:aspect-auto relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-rose-600'>
              <Image 
                src={`/assets/img/7by3/07.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Jewelry manufacturing background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">A jewelry manufacturing unit</h4>
              </Link>
            </div>
          </div>
          
          {/* Gemstone Cutting */}
          <div className="lg:col-span-6 aspect-square lg:aspect-auto relative overflow-hidden group rounded-lg lg:rounded-none">
            <div className='absolute z-5 w-[100%] h-[100%] bg-fuchsia-600'>
              <Image 
                src={`/assets/img/7by3/08.jpg`} 
                height={500} 
                width={1000} 
                className="w-full h-full object-cover ease-in-out duration-300 transition-all group-hover:scale-110" 
                alt="Gemstone cutting background" />
            </div>
            <div className="absolute bottom-0 left-0 z-6 w-full h-[50%] bg-gradient-to-t from-gray-950 to-transparent"></div>
            <div className="absolute bottom-0 left-0 z-10 w-full h-full flex items-end justify-start p-4 lg:p-6">
              <Link href="/service" className="hover:underline transition-all ease-in-out duration-300">
                <h4 className="text-medium text-lg sm:text-xl lg:text-2xl">A gemstone cutting and polishing center</h4>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
     </FadeSlideIn>


     <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="pt-[8rem] pb-[6rem]">
        <div className="ml-[4%] w-[92%]">
          <CarouselOne title="The Benefits" dbData={ProjectData} />
        </div>
      </section>
     </FadeSlideIn>


     <FadeSlideIn slideDirection="up" duration={1500}>
        <section id="contact">
          <ContactComp />
        </section>
      </FadeSlideIn>


    </>
  )
}
