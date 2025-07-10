import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TbSlashes } from "react-icons/tb"



export default function ContactUs() {
    return (
        <div className="min-h-[750px] w-full bg-white px-4 sm:px-6 lg:px-12 py-20">
            <div className="relative h-[600px] mx-10 flex gap-10     overflow-hidden">

                <div className="absolute left-0 top-0 rounded-5xl w-96 h-full z-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>


                <div className="relative w-1/3 text-white flex flex-col justify-between  rounded-2xl h-full px-10 py-12 z-10">
                    <div>
                        <h2 className="text-white font-roboto text-2xl font-semibold">Address</h2>
                        <p className="text-[#c8d3d6] font-roboto text-sm mt-4 ">Greater Noida west,</p>
                        <p className="text-[#c8d3d6] font-roboto text-sm ">Noida Extension,39239</p>
                    </div>
                    <div>
                        <h2 className="text-white font-roboto text-2xl font-semibold">Contact</h2>
                        <p className="text-[#c8d3d6] font-roboto text-sm mt-4 ">Phone: +9112345678</p>
                        <p className="text-[#c8d3d6] font-roboto text-sm ">Email: exmple@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-white font-roboto text-2xl font-semibold">Open Time</h2>
                        <p className="text-[#c8d3d6] font-roboto text-sm mt-4 ">Monday - Friday : 10:00 - 20:00</p>
                    </div>
                    <div>
                        <h2 className="text-white font-roboto text-2xl font-semibold ">Stay Connected</h2>
                        <div className="flex gap-4 mt-4">
                            <FaFacebookSquare size={35} className="text-white" />
                            <FaInstagramSquare size={35} className="text-white" />
                            <FaXTwitter size={35} className="text-white" />
                            <FaYoutube size={35} className="text-white" />

                        </div>
                    </div>

                </div>


                <div className="relative w-2/3  h-full z-10">
                    <div className='flex items-center gap-2 mt-4'>
                        <TbSlashes className='text-lightBlue' size={24} />
                        <p className='text-darkBlue text-base sm:text-lg md:text-xl font-roboto font-medium'>
                            Contact Us
                        </p>
                    </div>

                    <div className="mt-4">
                        <h1 className='text-darkBlue text-2xl sm:text-3xl md:text-5xl font-semibold font-roboto leading-tight'>
                            Get Your <span className="text-lightBlue">Free Quote</span> Today
                        </h1>
                        
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <label className="text-gray font-roboto font-medium">Your Name*</label>
                                <input type="text" placeholder="Enter Your name" className="border h-10 w-80 mt-2 rounded-lg placeholder:items-center px-4 placeholder:font-roboto"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray font-roboto font-medium">Email*</label>
                                <input type="text" placeholder="Enter Your mail" className="border h-10 w-80 mt-2 rounded-lg placeholder:items-center px-4 placeholder:font-roboto"></input>
                                <select name="services " id="services">
                                    <option value=''>Select Services</option>
                                    <option value='Web development'>Web development</option>
                                    <option value='App development'>App development</option>
                                    <option value='Mobile App development'>Mobile App development</option>
                                    <option value='Ui/UX Desig '>Ui/UX Desig </option>
                                    <option value='Web development'>Web development</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <label className="text-gray font-roboto font-medium">Phone*</label>
                            <input type="text" placeholder="Enter Your phone number" className="border h-10 w-80 mt-2 rounded-lg placeholder:items-center px-4 placeholder:font-roboto"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray font-roboto font-medium">Services*</label>
                                <input type="text" placeholder="Enter Your name" className="border h-10 w-80 mt-2 rounded-lg placeholder:items-center px-4 placeholder:font-roboto"></input>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


