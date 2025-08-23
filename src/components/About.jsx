import React from 'react'
import img1 from '/img1.png'

function About() {
  return (
    <section
    id="about"
    className="min-h-screen overflow-hidden flex items-center justify-center text-[#FF6F61] px-4 sm:px-6"
    >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <figure data-aos="fade-right" data-aos-delay="500"
            className="flex flex-wrap justify-center gap-4 relative">
            <div
                className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#008080] via-[#6c95f5] to-[#FF6F61] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full">
            </div>
            
            <img src={img1} alt="about picture 2"
                className="relative z-10 w-44 h-36 sm:w-56 sm:h-40 md:w-96 md:h-76 rounded-lg shadow-lg"/>

            </figure>
            <article data-aos="fade-left" data-aos-delay="500" className="text-center lg:text-left relative">
                <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-amber-400 rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
                
                <header>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    About Me
                    </h1>
                </header>
                
                <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 leading-relaxed">
                    I'm a Computer Science and Business Systems undergraduate passionate about DSA and full-stack development. Skilled in the MERN stack, I've built projects like Ashok Vatika and a business portfolio. A Smart Bengal Hackathon finalist, I enjoy solving problems, building scalable web apps, and continuously learning. Outside coding, I'm into music and gaming, which fuel my creativity.
                </p>
                
                <footer>
                    <button className="inline-flex text-teal-400 border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-teal-400 hover:text-white hover:shadow-[0_0_40px_rgba(0, 128, 128 ,0.7)] rounded-full text-sm sm:text-lg">
                    Learn More
                    </button>
                </footer>
            </article>
        </div>
    </section>
  )
}

export default About