import React from "react";
import ProjectItem from "./ProjectItem";
import BlogAI from "../assets/BlogAI.png";
import Dashboard from "../assets/Dashboard.png";
import DiscordClone from "../assets/Discord-Clone.png";
import LMSproject from "../assets/LMS-project.png";
import ThreeJs from "../assets/ThreeJs.png";
import SASS from "../assets/SAAS-AI.png";

const projectsData = [
  {
    img: BlogAI,
    title: "Food-App",
    tech: ["React JS"],
    href: "https://github.com/DmitriyAngve/Food-App-React",
  },
  {
    img: Dashboard,
    title: "Recipe-App",
    tech: ["JavaScript"],
    href: "https://github.com/DmitriyAngve/JS-Forkify",
  },
  {
    img: DiscordClone,
    title: "Store-App",
    tech: ["React JS/Redux"],
    href: "https://github.com/DmitriyAngve/Shop-Redux",
  },
  {
    img: LMSproject,
    title: "Travel-App",
    tech: ["HTML/SASS"],
    href: "https://github.com/DmitriyAngve/Natours",
  },
  {
    img: ThreeJs,
    title: "Travel-App",
    tech: ["HTML/SASS"],
    href: "https://github.com/DmitriyAngve/Natours",
  },
  {
    img: SASS,
    title: "Travel-App",
    tech: ["HTML/SASS"],
    href: "https://github.com/DmitriyAngve/Natours",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="text-4xl font-bold text-center text-[#273558] mb-6">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            tech={project.tech}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
