import React, { useState } from "react";
import { FiMenu,FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "About me",
      url: "#about",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Projects",
      url: "#projects",
    },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-black "
      data-aos="fade-up"
      data-aos-delay="300"
    >
        
      <div className="container mx-auto p-5 flex items-center justify-between">
        <a href="#home" className="text-4xl font-bold italic text-black">
          Portfolio
        </a>

        

        {/* desktop menu */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-lg hover:text-gray-400"
            >
              {link.title}
            </a>
          ))}
          <button className="inline-flex text-black border-2 py-2 px-6 border-teal-500 focus:outline-none hover:bg-teal-500 rounded-full text-lg">
            Contact
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden focus:outline-none "
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="w-8 h-8 text-black" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#FF6F61]/90 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 `}>
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
          <FiX className="w-8 h-8" />
        </button>

        {NavbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-lg hover:text-gray-400"
          >
            {link.title}
          </a>
        ))}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded-full text-lg">
          Contact
        </button>
      </div>

    

      
    </header>
  );
}

export default Navbar;
