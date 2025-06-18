import React from "react";
import { TbSlashes, TbClipboardCopy, TbBulbFilled } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { IoMdHappy } from "react-icons/io";
import { GoNorthStar } from "react-icons/go"

export default function WorkProcess() {
    const WorkProcess = [
        { icon: <TbClipboardCopy size={32} />, title: "Consultation", step: "01" },
        { icon: <TbBulbFilled size={32} />, title: "Strategy", step: "02" },
        { icon: <BsBarChart size={32} />, title: "Implementation", step: "03" },
        { icon: <IoMdHappy size={32} />, title: "Final Result", step: "04" }
    ];

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
        <div className="min-h-[500px] w-full bg-white   py-12">
           
            <div className="flex items-center justify-center gap-2 mb-4">
                <TbSlashes className="text-lightBlue" size={24} />
                <p className="text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium">
                    Our Work Process
                </p>
            </div>

            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold text-lightBlue text-center mb-12">
                <span className="text-darkBlue">Our Proven</span>&nbsp;Work Process
            </h2>

            
            <div className="relative w-full bg-white px-2 sm:px-4 md:px-8 py-12">
             
                <div className="absolute top-[72px] md:top-[80px] left-6 right-6 md:left-[12%] md:right-[12%] h-0.5 bg-darkBlue z-0 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 relative z-10">
                    {WorkProcess.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative bg-white">
                            
                            <div className="relative">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg">
                                    {item.icon}
                                </div>
                                <div className="absolute top-1/2 -translate-y-1/2 right-0 border border-white translate-x-1/2 w-7 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center shadow">
                                    {item.step}
                                </div>
                            </div>

                            
                            <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>

                            
                            <p className="mt-1 font-roboto text-sm text-gray-600 leading-tight">
                                Lorem ipsum dolor sit amet,<br />
                                consectetur adipiscing elit
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        <div className='relative h-14 sm:h-16 w-screen bg-lightBlue overflow-hidden '>
        <div className='absolute top-0 left-0 h-full flex items-center gap-8 whitespace-nowrap animate-marquee-slow text-white px-4'>
            {[...scrollContent, ...scrollContent]}
        </div>
            </div>
        </>
    );
}
