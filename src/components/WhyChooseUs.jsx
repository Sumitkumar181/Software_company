import React from "react";
import { TbSlashes } from "react-icons/tb";
import Whychoose from "../assets/whychoose.jpg";
import { GiReceiveMoney } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { GrTrophy } from "react-icons/gr";
import { GoNorthStar } from "react-icons/go";

export default function WhyChooseUs() {
    const items = [
        "Website Development",
        "App Development",
        "Graphic Design",
        "UI/UX Design",
        "Application Development",
    ];

    const scrollContent = items.map((text, i) => (
        <React.Fragment key={i}>
            <p className="font-semibold text-sm sm:text-base md:text-lg font-roboto">{text}</p>
            <GoNorthStar size={20} />
        </React.Fragment>
    ));

    const achievements = [
        {
            icon: <GiReceiveMoney size={45} className="text-lightBlue" />,
            title: "Affordable Price",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: <HiUserGroup size={45} className="text-lightBlue" />,
            title: "Professional Team",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: <PiShoppingBagOpenFill size={45} className="text-lightBlue" />,
            title: "Product Delivery",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: <GrTrophy size={45} className="text-lightBlue" />,
            title: "Award Winning",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    return (
        <>
            <div className="w-full bg-darkBlue px-4 sm:px-6 lg:px-12 py-12">
               
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <TbSlashes className="text-lightBlue" size={24} />
                        <p className="text-white text-lg sm:text-xl font-roboto font-medium">Why Choose Us</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                        <div className="font-roboto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                                Why Trust Us for
                            </h2>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                                Your IT Needs?
                            </h2>
                        </div>

                        <button className="h-11 w-full sm:w-40 mt-6 sm:mt-2 rounded-full bg-lightBlue text-white text-sm font-medium transition hover:bg-blue-500">
                            Get A Quote
                        </button>
                    </div>
                </div>

               
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-12">
                    
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[22rem] rounded-xl shadow overflow-hidden">
                        <img src={Whychoose} alt="WhyChoose" className="h-full w-full object-cover" />
                    </div>

                    
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className=" rounded-xl p-4 h-full flex flex-col items-start justify-start text-left shadow"
                            >
                                <div className="mb-2">{item.icon}</div>
                                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                                <p className="text-sm text-white">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            
            <div className="relative h-14 sm:h-16 w-screen bg-lightBlue overflow-hidden">
                <div className="absolute top-0 left-0 h-full flex items-center gap-8 whitespace-nowrap animate-marquee-slow text-white px-4">
                    {[...scrollContent, ...scrollContent]}
                </div>
            </div>
        </>
    );
}
