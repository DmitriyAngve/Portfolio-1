import React from "react";
import ProjectItem from "./ProjectItem";

import BlogAI from "../assets/BlogAI.jpg";

import Dashboard from "../assets/Dashboard.jpg";
import DiscordClone from "../assets/Discord-Clone.jpg";
import LMSproject from "../assets/LMS-project.jpg";
import ThreeJs from "../assets/ThreeJs.jpg";
import SASS from "../assets/SAAS-AI.jpg";

const projectsData = [
  {
    img: BlogAI,
    title: "AI Blog",
    tech: ["NextJS/TypeScript"],
    gitHub: "https://github.com/DmitriyAngve/blog-ai",
    href: "",
  },
  {
    img: Dashboard,
    title: "Dashboard",
    tech: ["MERN Stack"],
    gitHub: "https://github.com/DmitriyAngve/Dashboard",
  },
  {
    img: DiscordClone,
    title: "Discord Clone",
    tech: ["NextJS/TypeScript"],
    gitHub: "https://github.com/DmitriyAngve/discord",
  },
  {
    img: LMSproject,
    title: "LMS Project",
    tech: ["NextJS/TypeScript"],
    gitHub: "https://github.com/DmitriyAngve/lms-project",
  },
  {
    img: ThreeJs,
    title: "3D T-shirt",
    tech: ["React/ThreeJS/Express"],
    gitHub: "https://github.com/DmitriyAngve/threejs",
  },
  {
    img: SASS,
    title: "SAAS Platform",
    tech: ["NextJS/TypeScript"],
    gitHub: "https://github.com/DmitriyAngve/sass-ai",
  },
];

const smallProjects = {
  img: "",
  title: "",
  tech: "",
  gitHub: "",
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="text-4xl font-bold text-center text-[#273558] mb-6">
        Projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            tech={project.tech}
            gitHub={project.gitHub}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
