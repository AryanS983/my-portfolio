import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";

const ProjectCard = ({ image, title, description, link, repo }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#FF6F61] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-teal-400/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>

        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">
            {description}
            <a
              href={repo}
              target="_blank"
              className="text-teal-400 ml-2"
            >
              <button>GitHub Repo</button>
            </a>
          </p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Cyber Café Portfolio Website with Admin Panel",
      description:
        "Developed a full-stack cyber café website with secure JWT authentication, Zod-based validation, and an admin dashboard for real-time user management. Built with MongoDB, Express.js, React, and Node.js, deployed frontend on Vercel and backend on Render.",
      link: "https://digtal-solutions.vercel.app/",
      repo: "https://github.com/AryanS983/Digtal-Solutions-main",
    },
    {
      image: project2,
      title: "Ashok Vatika - Virtual Herbal Garden",
      description:
        "Interactive 3D herbal exploration app using Three.js with features like search, bookmark, and Virtual Tours. Deployed on Netlify as part of Smart India Hackathon.",
      link: "https://ashokvatika-binarybits.netlify.app/",
      repo: "https://github.com/AryanS983/Ashok-Vatika",
    },
  ];
  return (
    <main className="p-4">
      <section data-aos="fade-up" data-aos-delay="300" id="projects">
        <header className="text-center">
          <h1 className="text-3xl ■ text-white sm:text-4xl font-bold mb-6">
            My <span className="text-amber-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Here are some of the projects I've built, showcasing my skills in
            web development and problem solving.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </section>
    </main>
  );
}
