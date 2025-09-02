import type React from 'react';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from '../components/hook/useTheme';
import { RiMenu5Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import logoBlack from ".././assets/logo/parvixel logo black.png";
import logoWhite from ".././assets/logo/logo parvixel white.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleClickContact = () => {
    navigate('/contact');
  };
  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4">
      <div className="w-[95%] flex justify-between items-center">
        <div className='w-35 h-15'>
          <img
            src={dark ? logoWhite : logoBlack}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[45%] lg:w-[40%] 2xl:w-[30%] flex items-center justify-center gap-5 bg-[#f8f8f8] px-6 py-3.5 rounded-[30px]">
          <ul className="w-full flex items-center justify-around">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-black dark:text-white font-medium text-sm lg:text-[17px] tracking-normal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
         
        </div>
        <div className='flex justify-center items-center gap-2.5'>
           <button
            onClick={toggleTheme}
            className="px-4 py-2 outline-none border-none cursor-pointer"
          >
            {dark ? <IoSunnyOutline className='text-xl dark:text-white text-gray-800 ' /> : <IoMoonOutline className='text-xl dark:text-white text-gray-800 ' />}
          </button>
          <button onClick={handleClickContact} className='outline-none border-none bg-black dark:bg-gray-800 text-white dark:text-white rounded-[30px] px-4 py-2 text-base font-medium cursor-pointer'>
            let's talk
          </button>
          <button className='outline-none border-none bg-gray-200 text-white rounded-[30px] px-2 py-2 cursor-pointer'><RiMenu5Fill className='text-xl dark:text-white text-gray-800 ' /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
