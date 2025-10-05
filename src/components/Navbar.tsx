import { useState } from "react";
import {  motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      id="navbar"
      className="flex items-center justify-between bg-black/40 py-2 md:py-4"
    >
      <div className="flex items-center ml-10 md:ml-20 hover:cursor-pointer">
       <img src="ll.png" alt="logo" className="w-24 h-25 mr-5"  /> 
       
         <img src="spaceapss.png" alt="logo" className="w-22 h-20"  /> 
       {}
      </div>

      <div className="hidden md:flex text-white">
        <ul className="flex gap-x-10">
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full ">
            <a href="#home">Home</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#features"> Features</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#galaxy">Our Project</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="https://www.youtube.com/watch?v=xRPjKQtRXR8">Live Stream 🔴 </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center justify-center mr-10 md:mr-20">
       <button
  onClick={() => window.location.href = "https://steady-churros-74609a.netlify.app/"}
  className="text-white border-2 px-5 py-2 rounded-md hover:bg-blue-600 hover:border-0 duration-1000 ease"
>
  Try StellarNova 1.0
</button>

      </div>

      <div className="flex md:hidden text-white items-center mr-10">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute top-16 right-0 w-[50%] bg-black/90 text-white flex flex-col items-center gap-y-6 py-4 md:hidden mt-5 z-10 rounded-lg"
        >
          {/* <a href="#about">About Us</a>
          <a href="#technology">Technology</a>
          <a href="#galaxy">Galaxy</a>
          <a href="#satellite">Satellite</a> */}
          {/* <button className="text-white border-2 px-5 py-2 rounded-md">
            Login
          </button> */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
