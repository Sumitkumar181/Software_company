import React from 'react'
import { TbSlashes } from "react-icons/tb"

export default function Services() {
  return (
    <div className=' bg-[#dadee0] w-full px-20 border py-10 lg:py-20 '>

      
      <div className='flex flex-col  gap-4 flex-1 border'>
        <div className='border w-1/2'>
          <div>
        <div className='flex items-center gap-2'>
          <TbSlashes className='text-lightBlue' size={24} />
          <p className='text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium'>
            Our Services
          </p>
        </div>
        <div>
          <h1 className='text-darkBlue text-2xl sm:text-3xl md:text-5xl font-semibold font-roboto leading-tight'>
            Services we provide to
          </h1>
          <h1 className='text-lightBlue text-2xl sm:text-3xl md:text-5xl font-semibold font-roboto leading-tight'>
            Evaluate your business
          </h1>
            </div>
          </div>
          <div className='flex items-center justify-end flex-1'>
            <button className='bg-lightBlue h-12 w-44 font-roboto rounded-full text-sm text-white'>
              View All Services
            </button>
          </div>
        </div>  
        
        
      </div>

      
      

      <div className=''>
        <div className='w-80 h-44 bg-white'>

        </div>
      </div>

    </div>
  )
}
