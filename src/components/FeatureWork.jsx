import { TbSlashes } from "react-icons/tb";
import project from '../assets/project2.jpg'
import { IoMdArrowForward } from "react-icons/io";

export default function FeatureWork() {

    const projectCards = [
        {
            image: project,
            title: "E-Commerce Website",
            desc: "A modern UI for selling products online.",
        },
        {
            image: project,
            title: "Mobile App Design",
            desc: "Intuitive design for iOS and Android platforms.",
        },
        {
            image: project,
            title: "Admin Dashboard",
            desc: "Data-rich analytics dashboard with clean UI.",
        },
        {
            image: project,
            title: "Portfolio Website",
            desc: "Personal branding site for creatives.",
        },
    ];


    return (
        <div className="min-h-[750px] w-full bg-white   mt-24">
            <div className="flex items-center justify-center gap-2 mb-4">
                <TbSlashes className="text-lightBlue" size={24} />
                <p className="text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium">
                    Our Latest Projects
                </p>
            </div>


            <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold text-darkBlue text-center mb-4">
                Eplore Our Showcase of
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold text-lightBlue text-center mb-12">
                Featured Works
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">
                {[0, 2].map((startIndex) => (
                    <div key={startIndex} className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">
                        {projectCards.slice(startIndex, startIndex + 2).map((card, i) => (
                            <div
                                key={i}
                                className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[22rem] relative rounded-xl shadow overflow-hidden"
                            >
                                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />


                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />


                                <div className="absolute bottom-4 left-4 z-20 text-white">
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <p className="text-sm font-roboto mb-2 mt-1">{card.desc}</p>
                                    <button className="flex items-center gap-2 bg-lightBlue font-roboto text-sm px-4 py-2 rounded-full">Learn More<IoMdArrowForward /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-14 ">
                <button className="flex items-center justify-center gap-2 bg-lightBlue text-white font-roboto text-sm px-10 py-3 rounded-full">View All Works</button>
            </div>
        </div>
    )
}
