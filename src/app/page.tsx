import Image from "next/image";
import MainSlider from "./_components/MainSlider";
import FadeSlideIn from "./_components/FadeSlideIn";
import Link from "next/link";
import CarouselOne from "./_components/CarouselOne";
import { ProjectData } from "./_data/ProjectData";
import ContactComp from "./_components/ContactComp";
import Grid5 from "./_components/grids/Grid5";
import { WhyUsData } from "./_data/WhyUsData";
import GridLeft2 from "./_components/grids/GridLeft2";
import GridRight2 from "./_components/grids/GridRight2";
import { ServicesData } from "./_data/ServicesData";
import MainHeader from "./_components/MainHeader";
import Grid4 from "./_components/grids/Grid4";



export default function Home() {
  return (
    <>
    {/* <MainSlider /> */}

    <MainHeader />

    {/* WHO ARE WE */}
     <FadeSlideIn slideDirection="up" duration={1500}>
      <section id='about' className="w-full pt-[6rem] pb-[6rem]">
        <div className="mx-auto text-center flex items-center justify-center flex-col w-[65%]">
          <h3 className="text-[4rem] text-center font-extrabold ">Who We are?</h3>
          <hr className="w-[12rem] border-b border-[0.4rem] border-amber-400" />
          <p className="text-[1.8rem] font-light mt-[2rem]">
            Royal Gold Niger is an established joint venture in Niger, formed through a 
            partnership between the government of Niger and Suvarna Royal Gold Trading LLC.
            The formation of Royal Gold Niger is a cornerstone of Niger's new mining policy, 
            which emphasizes economic sovereignty and maximizing the benefits of its natural resources 
            for its citizens. 
          </p>
        </div>
      </section>
     </FadeSlideIn>

     <FadeSlideIn slideDirection="up" duration={1500}>
      <div id="why-us" className="mx-auto mb-[3rem] text-center flex items-center justify-center flex-col w-[65%]">
        <h3 className="text-[4rem] text-center font-extrabold ">{WhyUsData.title}</h3>
        <hr className="w-[12rem] border-b border-[0.4rem] border-amber-400" />
      </div>
     </FadeSlideIn>

    <FadeSlideIn slideDirection="left" duration={1500}>
      <GridLeft2 title={WhyUsData.data[0].title} desc={WhyUsData.data[0].desc} img={WhyUsData.data[0].img} />
    </FadeSlideIn>
    <div className="h-[6rem]" />

    <FadeSlideIn slideDirection="right" duration={1500}>
        <GridRight2 title={WhyUsData.data[1].title} desc={WhyUsData.data[1].desc} img={WhyUsData.data[1].img} />
    </FadeSlideIn>

    <div className="h-[6rem]" />
    <FadeSlideIn slideDirection="left" duration={1500}>
        <GridLeft2 title={WhyUsData.data[2].title} desc={WhyUsData.data[2].desc} img={WhyUsData.data[2].img} />
    </FadeSlideIn>


    <div className="h-[8rem]" />
    <FadeSlideIn slideDirection="up" duration={1500}>
        <div id={ServicesData.slug} className="mx-auto mb-[4rem] text-center flex items-center justify-center flex-col w-[65%]">
          <h3 className="text-[4rem] text-center font-extrabold ">
            {ServicesData.title}
          </h3>
          <hr className="w-[12rem] border-b border-[0.4rem] border-amber-400" />
        </div>
        <Grid4 dbData={ServicesData.data} />
        
    </FadeSlideIn>
    <div className="h-[8rem]" />


    


{/*      <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="w-full">
        <div className="mx-auto w-[92%]">
          <CarouselOne title="The Benefits" dbData={ProjectData} />
        </div>
      </section>
      <div className="h-[6rem]" />
     </FadeSlideIn> */}


     <FadeSlideIn slideDirection="up" duration={1500}>
        <section id="contact">
          <ContactComp />
        </section>
      </FadeSlideIn>


    </>
  )
}
