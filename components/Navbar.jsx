'use client';

import React from "react";
import { navVariants } from '../utils/motion';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';



const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}><a href={"#"+title}>{title}</a></li>
);

const Navbar = () => {

  return (
    <motion.nav     
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="w-full flex md:justify-center justify-between items-center p-4"
    >
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
            {["About", "Services", "Our Work", "Contact Us"].map((item, index) => (
              <NavBarItem key={item + index} title={item} />
            ))}
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Login
            </li>
          </ul>
          <div className="md:hidden flex justify-center items-center flex-col relative z-10">
            <motion.h1 variants={textVariant(1.1)} className='md:hidden flex text-lg text-white font-semibold' >
              IMPRESSIVE
            </motion.h1>
            <motion.h1
              variants={textVariant(1.2)}
              className="md:hidden flex text-lg text-white font-semibold"
            >
              MADNESS
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
