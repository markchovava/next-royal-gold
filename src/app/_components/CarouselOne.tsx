"use client";


import type { Swiper as SwiperType } from 'swiper';
import  { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoDotFill, GoDot } from "react-icons/go";
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { ProjectInterface } from '../_data/ProjectData';


export default function CarouselOne({ title, dbData }: { title: string, dbData: ProjectInterface[] }) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    // Calculate slides per view based on window width
    const getSlidesPerView = (width: number): number => {
      if (width >= 1024) return 3;
      if (width >= 640) return 2;
      return 1;
    };

    const currentSlidesPerView = getSlidesPerView(windowWidth);
    const totalSlides = dbData.length;

    const handleSlideChange = (swiper: SwiperType) => {
      setActiveIndex(swiper.activeIndex);
    };

    // Handle direct pagination click
    const handlePaginationClick = (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };

    // Handle navigation
    const handlePrevSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const handleNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    useEffect(() => {
      // Set initial window width
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

    return (
      <div className="carousel-container w-full mx-auto">
        <div className=' flex justify-between items-center mb-8'>
          <p className='w-full lg:text-[3.5rem] text-[2rem] font-extrabold leading-tight bg-gradient-to-r from-green-700 via-sky-600 to-green-900 bg-clip-text text-transparent'>
            {title}
          </p>
          {/* Top Navigation buttons */}
          <div className="px-2 navigation-buttons flex items-center justify-end gap-4 mb-4">
            <button 
              onClick={handlePrevSlide}
              className="group cursor-pointer carousel-button-prev drop-shadow-md p-2 rounded-full border border-gray-500 focus:outline-none hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-6 h-6 text-lg text-gray-500 transition-all ease-linear duration-100 group-hover:scale-105" />
            </button>
            <button 
              onClick={handleNextSlide}
              className="group cursor-pointer carousel-button-next p-2 drop-shadow-md rounded-full border border-gray-500 focus:outline-none hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-6 h-6 text-gray-500 transition-all ease-linear duration-100 group-hover:scale-105" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={currentSlidesPerView}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={handleSlideChange}
          navigation={false}
          pagination={false}
          className="mb-6"
        >
          {dbData.map((i, key) => (
            <SwiperSlide key={key} className='py-4 px-3'>
              <section className='w-full cursor-pointer group relative h-[25rem] overflow-hidden rounded-2xl ease-linear transition-all drop-shadow hover:drop-shadow-lg'>
                <div className='absolute z-5 w-[100%] h-[100%] bg-sky-600'>
                  <Image 
                    src={i.img4by5} 
                    height={400} 
                    width={500} 
                    className="w-full h-full object-cover" 
                    alt="Background Image" />
                </div>

                <div className='absolute cursor-pointer duration-300 ease-in-out transition-all z-10 w-[100%] h-[100%] bg-gradient-to-t from-transparent to-transparent group-hover:bg-gradient-to-t group-hover:from-slate-900 hover:to-transparent'></div>
                <div className='w-[100%] h-[100%] z-20 absolute bottom-0 left-0'>
                  <div className='w-full h-full flex items-end justify-center duration-300 ease-in-out transition-all'>
                    <div className='opacity-0 py-8 px-6 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-white'>
                      
                      <h3 className='font-light text-[1.5rem] leading-[1.6rem] mb-4 '>
                       {i.name}
                      </h3>
                      <p className='font-light text-[1.2rem] leading-[1.4rem]'>
                        {i.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination dots */}
        <div className="hidden custom-pagination items-center justify-center gap-3 mb-4">
          {Array.from({ 
            length: Math.ceil(totalSlides / currentSlidesPerView) 
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * currentSlidesPerView)}
              className="pagination-dot focus:outline-none transition-transform hover:scale-110"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / currentSlidesPerView) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300 hover:text-gray-500" />
              )}
            </button>
          ))}
        </div>

      
      </div>
    );


}
