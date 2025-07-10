import { FaArrowRight, FaArrowLeft, FaAward } from "react-icons/fa6";
import { TbSlashes } from "react-icons/tb";
import { useRef } from "react";

export default function Success() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const awards = [
    {
      id: 1,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "Teach Innovator Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 2,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "Smart Solution Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 3,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "Cloud Leadership Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... ",
    },
    {
      id: 4,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "AI Excellence Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 5,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "Future Vision Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 6,
      icon: <FaAward size={50} className="text-lightBlue" />,
      title: "Security Excellence",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
  ];

  return (
    <div className="min-h-[650px] w-full bg-[#f5f7fa] px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-2 mb-4">
          <TbSlashes className="text-lightBlue" size={24} />
          <p className="text-darkBlue text-lg sm:text-xl font-roboto font-medium">
            Our Awards
          </p>
        </div>

        
        <div className="font-roboto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl text-blueDark font-semibold leading-tight mb-2">
            Our Journey to <span className="text-lightBlue">Award-</span>
          </h2>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-lightBlue font-semibold leading-tight">
            Your IT Needs?
          </h2>
          <div className="flex gap-4">
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-lightBlue text-white hover:bg-blue-500 transition"
              onClick={scrollLeft}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-lightBlue text-white hover:bg-blue-500 transition"
              onClick={scrollRight}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-10 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-1 sm:px-4"
        >
          {awards.map((award) => (
            <div
              key={award.id}
              className="min-w-[250px] sm:min-w-[280px] max-w-[300px] h-[280px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex-shrink-0 hover:shadow-md hover:border-b-[8px] hover:border-lightBlue transition-all duration-300"
            >
              <div className="mb-4">{award.icon}</div>
              <h2 className="text-base sm:text-lg text-darkBlue font-semibold mb-2">
                {award.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#565c5e] mt-2 font-roboto line-clamp-4">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
