import { TbSlashes, TbDeviceMobile } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { SiNextui } from "react-icons/si";
import { IoMdArrowForward } from "react-icons/io";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <CgWebsite size={32} color="white" />,
      title: "Website Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 2,
      icon: <TbDeviceMobile size={32} color="white" />,
      title: "Mobile App Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 3,
      icon: <SiNextui size={32} color="white" />,
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
  ];

  return (
    <div className="min-h-[600px] w-full bg-[#f5f7fa] px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <TbSlashes className="text-lightBlue" size={24} />
          <p className="text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium">
            Our Services
          </p>
        </div>
       
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="font-roboto flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-darkBlue font-semibold leading-tight">
              Services We Provide to
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-lightBlue font-semibold leading-tight">
              Elevate Your Business
            </h2>
          </div>

          <button className="h-11 w-full sm:w-40 mt-4 sm:mt-2 rounded-full bg-lightBlue text-white text-sm font-medium transition hover:bg-blue-500">
            View All Services
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-sm shadow-black p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-b-[8px] hover:border-lightBlue"
            >
              <div className="h-14 w-14 rounded-xl bg-lightBlue flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-lg text-blueDark font-roboto font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-[#565c5e] font-roboto mb-4 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-lightBlue font-roboto font-medium cursor-pointer transition hover:underline">
                <p className="text-sm">Learn more</p>
                <IoMdArrowForward size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
