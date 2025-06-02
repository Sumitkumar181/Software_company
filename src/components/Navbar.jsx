import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import { Link } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className='w-full overflow-x-hidden bg-white shadow-lg'>
      <div className='flex items-center justify-between px-10 h-18 md:h-16'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='h-5 w-5 md:h-6 md:w-6' />
          <p className='font-roboto font-semibold text-sm md:text-base'>IT Company</p>
        </div>

        <div className='hidden md:flex items-center gap-6 font-roboto'>
          <a href='#home' className='text-lg text-gray-600 hover:text-black'>Home</a>
          <a href='#services' className='text-lg text-gray-600 hover:text-black'>Services</a>
          <a href='#project' className='text-lg text-gray-600 hover:text-black'>Project</a>
          <a href='#blogs' className='text-lg text-gray-600 hover:text-black'>Blogs</a>
          <a href='#about' className='text-lg text-gray-600 hover:text-black'>About Us</a>
          <a href='#pricing' className='text-lg text-gray-600 hover:text-black'>Pricing</a>
        </div>

        <div className='hidden md:block'>
          <button className='text-xs h-8 rounded-full w-28 px-2 font-normal bg-[#0288d1] text-white'>
            Get A Quote
          </button>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-7 left-0 z-50 w-full bg-white shadow-md px-4 pb-4 font-roboto flex flex-col gap-3'>
          <a href='#home' className='text-sm text-gray-700 hover:text-lightBlue'>Home</a>
          <a href='#services' className='text-sm text-gray-700 hover:text-lightBlue'>Services</a>
          <a href='#project' className='text-sm text-gray-700 hover:text-lightBlue'>Project</a>
          <a href='#blogs' className='text-sm text-gray-700 hover:text-lightBlue'>Blogs</a>
          <a href='#about' className='text-sm text-gray-700 hover:text-lightBlue'>About Us</a>
          <a href='#pricing' className='text-sm text-gray-700'>Pricing</a>
          <button className='text-xs h-8 rounded-full w-28 px-2 font-normal bg-[#0288d1] text-white mt-2'>
            Get A Quote
          </button>
        </div>
      )}
    </nav>
  );
}
