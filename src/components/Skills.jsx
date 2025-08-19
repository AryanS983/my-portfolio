import React from "react";
import cpp from "../assets/cpp.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import aws from "../assets/aws.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";

const skillsData = [
  {
    id: 1,
    image: cpp, // your C++ logo import
    title: "C++",
    description: "Strong foundation in Data Structures & Algorithms and OOP.",
  },
  {
    id: 2,
    image: js, // JS logo import
    title: "JavaScript",
    description: "Proficient in building interactive web applications.",
  },
  {
    id: 3,
    image: react, // React logo import
    title: "React.js",
    description: "Experienced in creating responsive and dynamic UIs.",
  },
  {
    id: 4,
    image: node, // Node.js logo import
    title: "Node.js",
    description: "Backend development using Express.js and REST APIs.",
  },
  {
    id: 5,
    image: mongo, // MongoDB logo import
    title: "MongoDB",
    description: "Experience in working with NoSQL databases.",
  },
  {
    id: 6,
    image: mysql, // MySQL logo import
    title: "MySQL",
    description: "Knowledge of relational databases and SQL queries.",
  },
  {
    id: 7,
    image: aws, // AWS logo import
    title: "AWS",
    description: "Cloud deployment and services including EC2, S3, and Lambda.",
  },
  {
    id: 8,
    image: git, // Git logo import
    title: "Git & GitHub",
    description: "Version control and collaborative development.",
  },
];

const SkillBox = ({ image, title, description }) => {
  return (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
    </article>
  );
};

export default function Skills() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10" id="skills">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-amber-400 rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My {" "}
            <span className="text-teal-600">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            My technical toolkit includes the following skills that I use in development and problem-solving.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
