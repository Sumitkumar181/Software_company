import { motion } from 'framer-motion'
import celebrateImg from '../assets/Celebrate1.jpg'
import celebrate2 from '../assets/Celebrate2.jpg'
import celebrate3 from '../assets/Celebrate3.jpg'
import celebrate4 from '../assets/Celebrate4.jpg'
import { TbSlashes } from "react-icons/tb"

export default function AboutUs() {
    return (
        <div className='flex flex-col lg:flex-row w-full px-6 py-10 lg:py-20 gap-10 lg:gap-16'>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='w-full lg:w-1/2 flex items-center justify-center'
            >
                <div className="grid grid-cols-2 gap-4 max-w-md w-full">
                    <div className="h-44 sm:h-56 md:h-64 lg:h-72">
                        <img src={celebrateImg} className="w-full h-full object-cover rounded-tl-7xl rounded-tr-xl rounded-b-2xl" alt="celebrate1" />
                    </div>
                    <div className="h-44 sm:h-56 md:h-64 lg:h-72">
                        <img src={celebrate4} className="w-full h-full object-cover rounded-tr-3xl rounded-tl-2xl rounded-b-2xl" alt="celebrate4" />
                    </div>
                    <div className="h-36 sm:h-44 md:h-52">
                        <img src={celebrate2} className="w-full h-full object-cover rounded-bl-7xl rounded-t-2xl rounded-br-xl" alt="celebrate2" />
                    </div>
                    <div className="h-36 sm:h-44 md:h-52">
                        <img src={celebrate3} className="w-full h-full object-cover rounded-br-3xl rounded-t-2xl rounded-bl-xl" alt="celebrate3" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='w-full lg:w-1/2 flex flex-col justify-center gap-6'
            >
                <div className='flex items-center gap-2'>
                    <TbSlashes className='text-lightBlue' size={24} />
                    <p className='text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium'>
                        About Us
                    </p>
                </div>

                <div>
                    <h1 className='text-darkBlue text-2xl sm:text-3xl md:text-5xl font-semibold font-roboto leading-tight'>
                        <span className='text-lightBlue'>Transforming</span> Ideas
                    </h1>
                    <h1 className='text-darkBlue text-2xl sm:text-3xl md:text-5xl font-semibold font-roboto leading-tight'>
                        into Digital Reality
                    </h1>
                </div>

                <p className='text-[#696969] font-roboto text-sm sm:text-base md:text-lg max-w-xl'>
                    We build modern, scalable, and powerful digital solutions tailored to your needs. Our expert team brings your vision to life with precision and creativity.
                </p>

                <div className='flex flex-wrap gap-8 sm:gap-14 mt-4'>
                    <div className='flex flex-col'>
                        <p className='text-lightBlue font-bold text-3xl sm:text-4xl'>150+</p>
                        <p className='text-[#696969] text-sm'>Team Members</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-lightBlue font-bold text-3xl sm:text-4xl'>2000+</p>
                        <p className='text-[#696969] text-sm'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-lightBlue font-bold text-3xl sm:text-4xl'>99%</p>
                        <p className='text-[#696969] text-sm'>Client Satisfaction</p>
                    </div>
                </div>

                <div className='mt-6 flex-col flex gap-3'>
                    <p className='font-Allura text-2xl font-semibold text-[#696969]'>
                        Jenny Alexander
                    </p>
                    <p className='font-roboto text-base font-semibold text-[#696969]'>
                        Jenny Alexander. | (CEO)
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
