import React from 'react'
import heroImage from '../assets/Hero.png'
import { TbSlashes } from "react-icons/tb"
import { IoIosArrowRoundForward } from "react-icons/io"
import { GoNorthStar } from "react-icons/go"

export default function Hero() {
  const items = [
    "Website Development",
    "App Development",
    "Graphic Design",
    "UI/UX Design",
    "Application Development"
  ]

  const scrollContent = items.map((text, i) => (
    <React.Fragment key={i}>
      <p className='font-semibold text-sm sm:text-base md:text-lg font-roboto'>{text}</p>
      <GoNorthStar size={20} />
    </React.Fragment>
  ))

  return (
    <>
      <div className='relative w-full h-[32rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem] xl:h-screen overflow-hidden'>
        <img
          src={heroImage}
          alt='Hero Background'
          className='w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-r from-darkBlue/90 to-transparent' />

        <div className='absolute inset-0 flex items-center'>
          <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-6xl flex flex-col gap-4 sm:gap-5 md:gap-6'>
            <div className='flex items-center gap-2'>
              <TbSlashes className='text-lightBlue' size={24} />
              <p className='text-white text-sm sm:text-base md:text-xl font-roboto'>
                Experience The Best IT Solutions
              </p>
            </div>

            <h1 className='text-white text-2xl sm:text-3xl md:text-5xl font-semibold font-inter leading-tight max-w-4xl'>
              Where Creativity Meets Cutting Edge Technology
            </h1>

            <p className='text-white font-roboto text-sm sm:text-base md:text-lg max-w-2xl'>
              We build modern, scalable and powerful digital solutions for your business.
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
              <button className='h-11 sm:h-12 w-40 sm:w-44 text-sm sm:text-base md:text-lg bg-[#0288d1] hover:bg-[#0277bd] text-white rounded-full flex items-center justify-center transition'>
                Explore More <IoIosArrowRoundForward size={25} className='ml-2' />
              </button>
              <p className='text-white underline text-sm sm:text-base md:text-lg font-roboto cursor-pointer'>
                View All Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative h-14 sm:h-16 w-full bg-lightBlue overflow-hidden'>
        <div className='absolute top-0 left-0 h-full flex items-center gap-8 whitespace-nowrap animate-marquee-slow text-white px-4'>
          {[...scrollContent, ...scrollContent]}
        </div>
      </div>
    </>
  )
}
