import React from "react";
import Navbar from "./Navbar";
import MyImage from "../assets/MyImage.jpeg";
import AryanRes from "/AryanRes.pdf";
import { FaLinkedin, FaGithub   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r from-[#008080] to-[#FF6F61] absolute transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="absolute -z-10 w-60 h-60 bg-amber-400 rounded-full blur-3xl opacity-50 -top-5 -left-12">
          </div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 text-black mb6">
              Hello, I'm <span className="text-[#008080]">Aryan Kumar Shaw</span>
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#181818]">
                Full Stack Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-grey-600 mb-6">
            Enthusiastic Computer Science undergraduate with hands-on experience in data structures, full-stack development, and cloud infrastructure.
          </p>

          <div className="flex items-center space-x-4 md-6 px-5">
            <a href="#">
                <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#">
                <FaGithub className="h-6 w-6" />
            </a>
            <a href="#">
                <FaSquareXTwitter className="h-6 w-6" />
            </a>
          </div>
          <a href={AryanRes} download>
            <button className="inline-flex text-[#008080] border-2 py-2 px-6 focus:outline-none hover:bg-[#FF6F61] rounded-full text-lg mt-2">
                Download CV
            </button>
          </a>
        </section>
        <figure
          className="flex-1 flex justify-center mt-0 md:justify-end "
          data-aos="fade-up"
          data-aos-delay="500"
        >
            <img src={MyImage} alt="" className="h-[300px] sm:h-[400] md:h-[485px] 
             object-cover rounded-full" />
        </figure>
      </main>
    </div>
  );
}

export default Hero;
